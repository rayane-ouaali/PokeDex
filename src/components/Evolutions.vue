<script>
import {store} from "../store/store";

export default {
  name: 'Evolutions',
  computed: {
    getEvolutionFamily() {
      const evol = store.evolutionFamily
      console.log(evol)
      if(!evol){
        return []
      }
      if (evol.chain.evolves_to.length > 0) {
        if(evol.chain.evolves_to[0].evolves_to.length > 0){
          return [{
            name: evol.chain.species.name,
            url: `https://pokeapi.co/api/v2/pokemon/${evol.chain.species.name}`
          }, {
            name: evol.chain.evolves_to[0].species.name,
            url: `https://pokeapi.co/api/v2/pokemon/${evol.chain.evolves_to[0].species.name}`
          }, {
            name: evol.chain.evolves_to[0].evolves_to[0].species.name,
            url: `https://pokeapi.co/api/v2/pokemon/${evol.chain.evolves_to[0].evolves_to[0].species.name}`
          }]
        }
        return [{
          name: evol.chain.species.name,
          url: `https://pokeapi.co/api/v2/pokemon/${evol.chain.species.name}`
        }, {
          name: evol.chain.evolves_to[0].species.name,
          url: `https://pokeapi.co/api/v2/pokemon/${evol.chain.evolves_to[0].species.name}`
        }]
      }
    },
  },
  methods: {
    getImg: async (currentPoke) => {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPoke}`)
            .then((response) => response.json())
        return pokemon.sprites.other["official-artwork"].front_default
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<template>
  <div class='littleBox' id='evolutions'>
    <p>Evolution family :</p>
    <a v-for="pokemon in getEvolutionFamily" @click="this.$emit('search', pokemon.name)" >

      {{ pokemon.name }}
    </a>
  </div>
</template>

<style scoped>
#evolutions {
  display: flex;
  flex-direction: column;
  height: 364px;
  width: 40%;
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
