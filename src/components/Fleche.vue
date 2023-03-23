<script>
export default {
  name: "Fleche-pokemon",
  props: ['flecheType']
}
</script>

<template>
  <div id="box">
    <img :src="`../../public/${this.flecheType}.png`">
  </div>
</template>

<style scoped>
#box{
  margin-top: auto;
  margin-bottom: auto;
}
img{
  width: 20px;
  height: 20px;
}
</style>