<template>
  <form @submit.prevent="onSubmit">
    <slot></slot>
  </form>
</template>
<script>
import { onSubmit } from './util'
export default {
  props: {
    method: {
      type: String,
      required: false,
      default: 'GET',
      validator: value => ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes(value.toUpperCase())
    },
    action: {
      type: String,
      required: false
    },
    json: {
      default: false
    },
    validator: {
      type: Function,
      required: false
    },
    httpagent: {
      type: Function,
      required: false
    },
    success: {
      type: Function,
      required: false
    },
    error: {
      type: Function,
      required: false
    },
    complete: {
      type: Function,
      required: false
    },
    beforeSend: {
      type: Function,
      required: false
    }

  },
  methods: {
    onSubmit ($event) {
      onSubmit.call(this, $event)
    }
  }
}
</script>
<style lang="css">
@import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
</style>
