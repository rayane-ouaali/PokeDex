<script>
export default {
  name: 'AbilityBox',
  props: ['name', 'level']
}
</script>

<template>
  <div id='move'>
    <p v-if='level'>{{ name }} | Level : {{ level }}</p>
    <p v-else>{{ name }}</p>
  </div>
</template>

<style scoped>
#move {
  height: fit-content;
  width: 100%;
  border-radius: 4px;
  margin: 4px 2px;
  background-color: white;
}

p {
  text-align: center;
  text-transform: capitalize;
}
</style>