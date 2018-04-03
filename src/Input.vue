<template>
  <div>
    <p>{{msg}}</p>
    <input type="text" :value="msg" @input="changeMessage">
    <p>{{message}}</p>
  </div>
</template>
<script>
export default {
  props: ['msg'],
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
