<template>
  <div id='header'>
    <!-- TODO : bouton sur le texte PokeDex menu deroulant sur des pages (liste de tout les pokemons, attaques)-->
    <p>PokeDex</p>
    <div id='searchBox'>
      <input id='pokemonName' v-model='this.textField'>
      <button id='search' @click="this.$emit('search', this.textField.toLowerCase())">🔎</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header-pokemon',
  emits: ['update:modelValue'],
  data() {
    return {
      textField: ''
    }
  },
}
</script>

<style scoped>
@font-face {
  font-family: "PokemonFont";
  src: url("../../font/Pokemon_Solid.ttf");
}

#header {
  font-family: PokemonFont, sans-serif;
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 64px;
  width: 100%;
}
</style>