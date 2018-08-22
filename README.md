# vue2-auto-form
Zero model data (variables), auto submit form use fetch api

# install
`npm i -S vue2-auto-form`

# usage

- main.js
```js
import Vue from 'vue'
import VueAutoForm form 'vue2-auto-form'
Vue.use(VueAutoForm)
...
```

- App.vue

```html
<template>
  <auto-form method="post" action="/publish" :success="onSuccess">
    <!-- no v-model anymore -->
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
    ...
  }
}
</script>
```

Checkout [/example](example)

# license
- MIT