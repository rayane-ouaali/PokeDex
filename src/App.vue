<script>
import HeaderPokemon from './components/Header.vue'
import PokemonBox from './components/PokemonBox.vue'
import Header from './components/Header.vue'

export default {
  computed: {
    Header() {
      return Header
    }
  },
  emits: ['search', 'update:modelValue'],
  components: { HeaderPokemon, PokemonBox },
  async created() {
    this.json = await this.fetchPokemon(this.currentPoke)
  },
  data() {
    return {
      txtField: 'enter pokemon name',
      currentPoke: 1,
      json: undefined
    }
  },
  methods: {
    fetchPokemon: async (currentPoke) => {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPoke}`)
          .then((response) => response.json())
        return pokemon
      } catch (e) {
        console.log(e)
      }
    },
    async increment() {
      this.currentPoke++
      this.json = await this.fetchPokemon(this.currentPoke)
    },
    async decrement() {
      if (this.currentPoke > 1) {
        this.currentPoke--
        this.json = await this.fetchPokemon(this.currentPoke)
      }
    },
    async search(message) {
      console.log(message)
      this.json = await this.fetchPokemon(message)
    }
  }
}

</script>

<template>
  <HeaderPokemon/>
  <div id='container'>
    <div id='pkmnbox'>
      <PokemonBox @increment='increment' @decrement='decrement' v-if='json' :info=json />
    </div>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 100%;

}

#pkmnbox {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
