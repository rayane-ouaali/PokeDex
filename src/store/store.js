// store.js
import { reactive } from 'vue'

export const store = reactive({
    currentPokemon: 1,
    increment() {
        this.currentPokemon++
    },
    decrement() {
        this.currentPokemon--
    }
})