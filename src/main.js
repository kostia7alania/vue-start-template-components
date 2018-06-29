// ASYNC &FETCH WORKS IN IE11  (TESTED):
import {
  person
} from './lib.js';
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}
getPosts().then(posts => console.log('ПОСТЫ=>', posts))
//////////// end of test ie11 capability ///////
/////////////=>транспиляция и полифиллы пашут;;////
import Vue from 'vue';
import App from './App.vue';
import Message from "./Message.vue";
Vue.component('app-message', Message);
window.goNewVue = function goNewVue(props) {

  new Vue({
    el: props.selector,
    render: h => h(App, {
      props: {
        'doc_id': props.doc_id
      }
    })
  })

}
