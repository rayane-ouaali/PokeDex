<script>
import HeaderPokemon from './components/Header.vue'
import PokemonBox from './components/PokemonBox.vue'
import AttaquesPokemon from './components/Attaques.vue'
import Evolutions from "./components/Evolutions.vue";

export default {
  emits: ['search', 'update:modelValue'],
  components: { Evolutions, AttaquesPokemon, HeaderPokemon, PokemonBox },
  async created() {
    this.json = await this.fetchPokemon(this.currentPoke)
  },
  data() {
    return {
      txtField: 'enter pokemon name',
      currentPoke: 1,
      json: undefined,
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
    async search(pokemonName) {
      const pkmn = await this.fetchPokemon(pokemonName)
      this.json = pkmn
      this.currentPoke = pkmn.id
    },
    async increment() {
      if (this.currentPoke < 1010) {
        this.currentPoke++
        this.json = await this.fetchPokemon(this.currentPoke)
      }
    },
    async decrement() {
      if (this.currentPoke > 1) {
        this.currentPoke--
        this.json = await this.fetchPokemon(this.currentPoke)
      }
    },
  }
}

</script>

<template>
  <HeaderPokemon @search="search" />
  <div id='container'>
    <div id='pkmnbox'>
      <PokemonBox @increment='increment' @decrement='decrement' v-if='json' :info=json />
    </div>
    <AttaquesPokemon v-if='json' :info=json></AttaquesPokemon>
    <Evolutions></Evolutions>
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
