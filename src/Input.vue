<template>
  <div class="scobki">
    <h2>Input.vue {{doc_id}}</h2>
    <p><b>Input.vue: msg (prop)=></b> {{msg}}</p>

    <input type="text" :value="msg" @input="changeMessage">
    <input type="text" :value="msg" @input="changeMessage">
    <input type="text" :value="msg" @input="changeMessage">

    <p><b>Input.vue: message (internal variable) =></b> {{message}}</p>
  </div>
</template>
<script>
export default {
  props: ['msg','doc_id'],
  data() {
    return {
      message: ''
    }
  },
  methods: {
    changeMessage(e){
      this.message = e.target.value;
      this.$emit('messageChanged', this.message)
    }
  }
}
</script>



<style scoped>
  .scobki { border: black 3px dashed ; background: darkmagenta}

</style>
