<template lang="html">
  <auto-form action="/login" json="true" method="delete" :beforeSend="beforeSend" :validator="validate" :error="onError" :success="onSuccess" :complete="onComplete">
    <input type="text" name="txt" value="Tiếng Việt có dấu" />
    <br/>
    <input type="file" name="field_name">
    <br/>
    <input type="submit" name="submit" value="OK" />
  </auto-form>
</template>

<script>

export default{
  name: 'app',
  props: ['log', 'error'],
  data () {
    return {}
  },
  methods: {
    beforeSend (opts) {
      console.log('beforeSend', opts)
      opts[1].method = 'PUT'
    },
    validate () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    },
    onError () {
      console.log('onerror', arguments)
    },
    onSuccess () {
      console.log('onsuccess', arguments)
    },
    onComplete () {
      console.log('oncomplete', arguments)
    }
  }
}
</script>

<style lang="css">
</style>
