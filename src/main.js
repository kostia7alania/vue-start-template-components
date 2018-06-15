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


