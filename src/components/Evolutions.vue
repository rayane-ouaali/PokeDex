<template>
  <div class='littleBox' id='evolutions'>
    <p>Evolution family :</p>
  </div>
</template>

<script>
export default {
  name: 'Evolutions'
}
</script>

<style scoped>
  #evolutions{
    width: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    margin-right: 0;
  }

  p{
    color: black;
    font-size: large;
  }

  @media (max-width: 768px) {
    #evolutions {
      width: 100%;
    }
}
</style>
