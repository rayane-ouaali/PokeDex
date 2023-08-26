<script>
import HeaderPokemon from './components/Header.vue'
import PokemonBox from './components/PokemonBox.vue'
import AttaquesPokemon from './components/Attaques.vue'
import Evolutions from "./components/Evolutions.vue";
import {store} from './store/store'
import Resistances from "./components/Resistances.vue";

export default {
  emits: ['search', 'update:modelValue'],
  components: {Resistances, Evolutions, AttaquesPokemon, HeaderPokemon, PokemonBox},
  async created() {
    this.pokeInfo = await this.fetchPokemon(store.currentPokemon)
    store.evolutionData = await store.fetchEvolutionData(store.currentPokemon)
    store.evolutionFamily = await store.getEvolutionFamily(store.evolutionData)
    this.pokeEvolutionInfo.evolutionFamily = store.evolutionFamily
    store.evolutionImages = await store.fetchEvolutionsImg(store.evolutionFamily)
    this.pokeEvolutionInfo.evolutionImages = store.evolutionImages
    store.damageRelations = await store.fetchDamageRelations(store.currentPokemon)
    this.damageRelationsInfo = store.damageRelations
  },
  data() {
    return {
      txtField: 'enter pokemon name',
      pokeInfo: null,
      pokeEvolutionInfo: {
        evolutionFamily: store.evolutionFamily,
        evolutionImages: store.evolutionImages
      },
      damageRelationsInfo: store.damageRelations
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
      if (pkmn) {
        this.pokeInfo = pkmn
        store.currentPokemon = pkmn.id
        store.evolutionData = await store.fetchEvolutionData(store.currentPokemon)
        store.evolutionFamily = await store.getEvolutionFamily(store.evolutionData)
        this.pokeEvolutionInfo.evolutionFamily = store.evolutionFamily
        store.evolutionImages = await store.fetchEvolutionsImg(store.evolutionFamily)
        this.pokeEvolutionInfo.evolutionImages = store.evolutionImages
        store.damageRelations = await store.fetchDamageRelations(store.currentPokemon)
        this.damageRelationsInfo = store.damageRelations
      }
    },
    async increment() {
      if (store.currentPokemon < 1010) {
        store.increment()
        this.pokeInfo = await this.fetchPokemon(store.currentPokemon)
        store.evolutionData = await store.fetchEvolutionData(store.currentPokemon)
        store.evolutionFamily = await store.getEvolutionFamily(store.evolutionData)
        this.pokeEvolutionInfo.evolutionFamily = store.evolutionFamily
        store.evolutionImages = await store.fetchEvolutionsImg(store.evolutionFamily)
        this.pokeEvolutionInfo.evolutionImages = store.evolutionImages
        store.damageRelations = await store.fetchDamageRelations(store.currentPokemon)
        this.damageRelationsInfo = store.damageRelations
      }
    },
    async decrement() {
      if (store.currentPokemon > 1) {
        store.decrement()
        this.pokeInfo = await this.fetchPokemon(store.currentPokemon)
        store.evolutionData = await store.fetchEvolutionData(store.currentPokemon)
        store.evolutionFamily = await store.getEvolutionFamily(store.evolutionData)
        this.pokeEvolutionInfo.evolutionFamily = store.evolutionFamily
        store.evolutionImages = await store.fetchEvolutionsImg(store.evolutionFamily)
        this.pokeEvolutionInfo.evolutionImages = store.evolutionImages
        store.damageRelations = await store.fetchDamageRelations(store.currentPokemon)
        this.damageRelationsInfo = store.damageRelations
      }
    },
  },
}
</script>

<template>
  <HeaderPokemon @search="search"/>
  <div id='container'>
    <div id='pkmnbox'>
      <PokemonBox @increment='increment' @decrement='decrement' v-if='this.pokeInfo' :info=this.pokeInfo />
    </div>
    <div id="other_infos">
      <AttaquesPokemon v-if='this.pokeInfo' :info=this.pokeInfo></AttaquesPokemon>
      <Evolutions :v-if='this.pokeEvolutionInfo' :info=this.pokeEvolutionInfo @search="search"/>
      <Resistances :v-if='this.damageRelationsInfo' :info=this.damageRelationsInfo />
    </div>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 100%;

}

#other_infos {
  display: flex;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
}

#pkmnbox {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
