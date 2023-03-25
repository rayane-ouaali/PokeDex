<script>
export default {
  name: 'AbilityBox',
  props: ['name', 'level']
}
</script>

<template>
  <div id='move'>
    <p>{{ name }} | Level : {{ level }}</p>
  </div>
</template>

<style scoped>
#move {
  height: 40px;
  width: 100%;
  border-radius: 4px;
  margin: 2px;
  background-color: white;
}

p {
  text-align: center;
  text-transform: capitalize;
}
</style>