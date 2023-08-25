// store.js
import { reactive } from 'vue'

export const store = reactive({
    currentPokemon: 1,
    evolutionFamily: null,
    increment() {
        this.currentPokemon++
    },
    decrement() {
        this.currentPokemon--
    },
    fetchEvolutionData: async (currentPoke) => {
        try {
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${currentPoke}`)
                .then((response) => response.json())
            return await fetch(pokemon.evolution_chain.url)
                .then((response) => response.json())
        } catch (e) {
            console.log(e)
        }
    }
})