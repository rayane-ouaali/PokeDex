// store.js
import { reactive } from 'vue'

export const store = reactive({
    currentPokemon: 1,
    evolutionData: null,
    evolutionImages: null,
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
    },
    fetchEvolutionsImg: async (evolutions) => {
        try {
            const arrayOfImg = []
            for (const pkmn of evolutions) {
                const tempData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn.name}`)
                    .then((response) => response.json())
                const tempImg = tempData.sprites.front_default
                arrayOfImg.push(tempImg)
            }
            return arrayOfImg
        } catch (e) {
            console.log(e)
        }
    },
    getEvolutionFamily(evolutionData) {
        const evol = evolutionData
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
})