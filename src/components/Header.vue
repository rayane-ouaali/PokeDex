<template>
  <div id='header'>
    <p>PokeDex</p>
    <div id='searchBox'>
      <input id='pokemonName' :value='this.textField' @input="this.$emit('update:modelValue',this.textField)">
      <button id='search' @click="this.$emit('search', this.textField)">🔎</button>
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
  methods:{
    test(){
      console.log(this.textField)
    }
  }
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