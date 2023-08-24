<script>
import {store} from "../store/store";

export default {
  name: 'Evolutions',
  async created() {
    const evolutionFamily = await this.fetchEvolutionFamily(store.currentPokemon)
    this.evolutionFamily = evolutionFamily
  },
  data(){
    return {
      evolutionFamily: null
    }
  },
  methods: {
    fetchEvolutionFamily: async (currentPoke) => {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${currentPoke}`)
            .then((response) => response.json())
        return await fetch(pokemon.evolution_chain.url)
            .then((response) => response.json())
      } catch (e) {
        console.log(e)
      }
    },
  },
  computed: {
    getEvolutionFamily() {
      const evol = this.evolutionFamily
      if(!evol){
        return []
      }
      if (evol.chain.evolves_to.length > 0) {
        return [evol.chain.evolves_to[0].species.name]
      }
      return []
    }
  }
}
</script>

<template>
  <div class='littleBox' id='evolutions'>
    <p>Evolution family :</p>
    {{ getEvolutionFamily.join('-') }}

  </div>
</template>

<style scoped>
#evolutions {
  display: flex;
  flex-direction: column;
  height: 364px;
  width: 25%;
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
