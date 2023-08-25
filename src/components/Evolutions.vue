<script>
export default {
  name: 'Evolutions',
  props: ['info'],
  data() {
    return {
      evolutionImages: null,
    }
  },
}
</script>

<template>
  <div class='littleBox' id='evolutions'>
    <p>Evolution family :</p>
    <div>
      <a v-for="(pokemon, index) in info.evolutionFamily" v-bind:key='index' @click="this.$emit('search', pokemon.name)" >
        <div>
          {{ index }}
          <img v-if='info.evolutionImages' :src='info.evolutionImages[index]' :alt=pokemon.name >
          {{ pokemon.name }}
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
#evolutions {
  display: flex;
  flex-direction: column;
  height: 364px;
  width: 50%;
  margin-top: 24px;
  border-radius: 16px;
  margin-left: 5%;
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.8);
}

p {
  color: black;
  font-size: large;
}

@media (max-width: 768px) {
  #evolutions {
    width: 100%;
  }
}
</style>
