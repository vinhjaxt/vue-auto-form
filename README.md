# vue2-auto-form
Zero model data (variables), auto submit form use fetch api

# install
`npm i -D vue2-auto-form`

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

- server.js
```js
...
// expressjs
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.post('/publish', (req, res) => {
  // validate user data
  // do something
  if (err) {
    res.json({error: 'Something broke, try again.'})
    return
  }
  res.json({success: 'Successfully!'})
})
...
```
or PHP:
- publish.php
```php
<?php
// dont forget this line
header('Content-Type: application/json');
if($_SERVER['REQUEST_METHOD'] !== 'POST'){
  // method not allowed
  echo json_encode(['error' => 'Method not allowed']);
  exit(0);
}
// validate $_POST
// do stuff
if($error){
  echo json_encode(['error' => 'Something wrong. Pls try again.']);
  exit(0);
}
echo json_encode(['success' => 'Okay, you got me.']);
exit(0);
```

Checkout [example](/example)

# license
- MIT