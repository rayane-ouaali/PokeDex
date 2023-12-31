<script>
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'

export default {
  name: 'Evolutions',
  components: {
    ChevronRightIcon
  },
  props: ['info'],
  data() {
    return {
      evolutionImages: null,
    }
  },
}
</script>

<template>
  <div id='evolutions'>
    <p>Evolution family :</p>
    <div class="pokemons" v-if="info.evolutionFamily">
      <template v-for="(pokemon, index) in info.evolutionFamily" v-bind:key='index'>
        <a @click="this.$emit('search', pokemon.name)">
          <div class="pokemon">
            <img v-if='info.evolutionImages' :src='info.evolutionImages[index]' :alt=pokemon.name>
            {{ pokemon.name }}
          </div>
        </a>
        <ChevronRightIcon v-if="info.evolutionFamily.length - 1 > index" :size="24"/>
      </template>
    </div>
    <div v-else class="noevo">
      <h2>This pokemon has no evolution family</h2>
    </div>
  </div>
</template>

<style scoped>
#evolutions {
  display: flex;
  flex-direction: column;
  min-height: 364px;
  width: 40%;
  border-radius: 16px;
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.8);
}

.noevo {
  display: flex;
  justify-content: center;
  margin-bottom: auto;
  margin-top: auto;
  text-align: center;
}

.pokemons {
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
}

span {
  color: black;
}

img {
  max-width: 100px;
  max-height: 100px;
}

.pokemon {
  display: flex;
  flex-direction: column;
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
