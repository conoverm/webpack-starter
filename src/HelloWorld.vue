<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
import Vue from 'vue';

export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>