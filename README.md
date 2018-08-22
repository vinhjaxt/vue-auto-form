# vue-auto-form

Auto submit form by fetch api

# install
`npm i -S vue-auto-form`

# usage

- main.js
```js
import Vue from 'vue'
import VueAutoForm form 'vue-auto-form'
Vue.use(VueAutoForm)
```

- App.vue

```html
<template>
  <auto-form method="post" action="/publish" :success="onSuccess">
    <textarea name="txt">
    Hello world
    </textarea>
    <input type="submit" value="Submit" />
  </auto-form>
</template>
<script>
export default {
  methods: {
    onSuccess(b, r){
      console.log(b, r)
    }
  }
}
</script>
```

# license
- MIT