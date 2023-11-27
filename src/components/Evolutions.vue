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
  <div class='littleBox' id='evolutions'>
    <p>Evolution family :</p>
    <div class="pokemons">
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
  </div>
</template>

<style scoped>
#evolutions {
  display: flex;
  flex-direction: column;
  height: 364px;
  width: 40%;
  border-radius: 16px;
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.8);
}

.pokemons {
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
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
