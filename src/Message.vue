<template>
  <div class="scobki">
    <h2>Message.vue {{doc_id}}</h2>
    <p><b>Message.vue: Message =></b> {{message}}</p>
    <app-input :doc_id="doc_id" :msg="message" @messageChanged="message = $event"></app-input>
  </div>
</template>

<script>
import Input from './Input.vue'
export default {
  props:['doc_id'],
  data(){
    return{message: 'MESSAGE .!. (data in(from) Message.vue) '}
  },
  components: { 'app-input': Input }
}
</script>


<style scoped>
b{font-size: 18px}
 .scobki { border:yellow 3px dotted; background:red}
  </style>
