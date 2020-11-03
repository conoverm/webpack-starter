import { join } from 'lodash-es';
import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

new Vue({
  render: h => h(HelloWorld),
}).$mount(`#vue`);