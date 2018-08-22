const PNotify = require('pnotify/dist/umd/PNotifyCompat')
const PNotifyButtons = require('pnotify/dist/umd/PNotifyButtons')

const serialize = (obj, prefix) => {
  var str = []
  var p
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + '[' + p + ']' : p

      var v = obj[p]
      str.push((v !== null && typeof v === 'object')
        ? serialize(v, k)
        : encodeURIComponent(k) + '=' + encodeURIComponent(v))
    }
  }
  return str.join('&')
}
export function getFormData (form) {
  if (!((form instanceof Node) && form.tagName.toUpperCase() === 'FORM')) throw new Error('first argument is not HTMLFormElement')
  const haveFile = form.querySelector('[type="file"][name]') != null
  const data = haveFile ? new FormData() : {}
  const submits = form.querySelectorAll('[name]')
  for (let i = 0, l = submits.length; i < l; i++) {
    const el = submits[i]
    const field = el.getAttribute('name')
    const value = el.getAttribute('value')
    if (!field) continue
    if (el.hasAttribute('type') && el.getAttribute('type').toLowerCase() === 'file' && (data instanceof FormData)) {
      const fileList = el.files
      for (let fi = 0, fc = fileList.length; fi < fc; fi++) {
        data.append(field, fileList[fi], fileList[fi]['webkitRelativePath'] ? fileList[fi].webkitRelativePath : fileList[fi].name)
      }
      continue
    }
    if (el.hasAttribute('type') && ['checkbox', 'radio'].includes(el.getAttribute('type').toLowerCase())) {
      if (el.checked) {
        if (haveFile) {
          data.append(field, value)
        } else {
          data[field] = value
        }
      }
      continue
    }
    if (haveFile) {
      data.append(field, el.value)
    } else {
      data[field] = el.value
    }
  }
  return data
}
export function showNotify (type, title, text) {
  const n = new PNotify({
    title,
    text,
    type,
    desktop: {
      desktop: false
    }
  })
  n.get().addEventListener('click', function (e) {
    n.remove()
  })
}
export async function onSubmit ($event) {
  const data = getFormData($event.target)
  const validator = this.validator
  if (typeof validator === 'function') {
    try {
      let ret = validator(data)
      if (typeof ret.catch === 'function') {
        // promise, async vailidator
        ret = await ret
      }
      if (ret === false) {
        // validator do showNotify, return false to stop submit, true to continue do the from
        return
      }
      if (ret && (ret instanceof Object)) {
        if (ret instanceof Array) {
          // validator return array set to showNotify
          showNotify(...ret)
        } else if (!ret.success) {
          // validator return {success: true} - OK, {error: 'Show this text'} - show an error, {notice: 'Show notice} - show a notice
          for (const i in ret) {
            showNotify(('' + i).toLowerCase(), ('' + i).toUpperCase(), '' + ret[i])
          }
        }
      }
    } catch (e) {
      if (e.message) {
        showNotify('error', 'ERROR', e.message)
      }
      throw e
    }
  }
  // pass all, do request
  const method = this.method ? this.method.toUpperCase() : 'GET'
  const args = [this.action || location.href, {method}]
  const headers = {
    Accept: 'application/json, */*'
  }
  if (method !== 'GET') {
    if (data instanceof FormData) {
      // form-data
      // headers['Content-Type'] = 'multipart/form-data' // do not need
      args[1].body = data
    } else if (this.json && this.json !== 'false') {
      // json
      headers['Content-Type'] = 'application/json'
      args[1].body = JSON.stringify(data)
    } else {
      // urlencoded
      args[1].body = serialize(data)
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
  }
  args[1].headers = headers
  if (typeof this.beforeSend === 'function')
    this.beforeSend(args)
  let res, r
  try {
    r = await fetch(...args)
    try {
      res = await r.json()
      try {
        if (res && res instanceof Object) {
          if (res.success) {
            if (typeof this.success === 'function')
              this.success(res, r) // throw an error to pass the notification
            showNotify('success', 'SUCCESS', typeof (res.success) === 'string' && res.success ? res.success : 'Success')
          } else {
            for (const i in res) {
              showNotify(('' + i).toLowerCase(), ('' + i).toUpperCase(), '' + res[i])
            }
          }
        }
      } catch (e) {}
    } catch (e) {
      console.error('auto-form', e)
      if (e.message) {
        showNotify('error', 'ERROR', e.message)
      }
      if (typeof this.error === 'function')
        this.error(res, r)
    }
  } catch (e) {
    // fetch error
    if (e.message) {
      showNotify('error', 'ERROR', e.message)
    }
    if (typeof this.error === 'function')
      this.error(e, r)
  }
  if (typeof this.complete === 'function')
    this.complete(res, r)
}
