<template>
  <div class="scobki" id="app">
    <h1>App.vue {{doc_id}}</h1>
    <p> doc_id=>{{doc_id}}  <input type="text" v-model="infa"></input> infa=> {{infa}} </p>
    <app-message :doc_id="doc_id"></app-message>
  </div>
</template>

<script>
export default {
  props: ['doc_id'],
  data () {
    return {  infa:''   }
  }
}
</script>



<style scoped lang="scss">
h1, p {text-align: center}
.scobki { background: cadetblue;}

$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

#app {border: 6px dashed black}

@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

input { @include border-radius(10px); }
</style>
