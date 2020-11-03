<template>
  <h4 class="example">{{ msg }}</h4>
</template>

<script>
import Vue from 'vue';

export default {
  data () {
    return {
      msg: 'Hello world from Vue!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>