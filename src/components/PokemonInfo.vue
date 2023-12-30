<script>
export default {
  name: 'PokemonInfo',
  props: ['info'],
  computed: {
    getImg() {
      return this.info.sprites.other["official-artwork"].front_default
    },
    getName() {
      return this.info.name
    },
    getTypes() {
      return this.info.types.map((type) => {
        return type.type.name
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <div id='pokemonInfo'>
      <h1>#{{ this.info.id }} | <span>{{ getName }}</span></h1>
      <img v-for='(type, index) in getTypes' :src='`types/en/${type}.png`' v-bind:key='index' alt="">
    </div>
    <div id='info'>
      <img v-if='getImg' :src=getImg :alt=getName>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

#info {
  display: flex;
  height: 100%;
  justify-content: center;
}

img {
  max-height: 300px;
  max-width: 300px;
  margin-right: 32px;
}

#pokemonInfo {
  display: inline-block;
  justify-content: center;
  margin-top: auto;
  width: fit-content;
}

@media (max-width: 700px) {
  #info {
    width: 180px;
  }
}


@media (max-width: 1520px) {
  #pokemonInfo {
    width: 200px;
  }
}

@media (max-width: 1280px) {
  img {
    max-width: 200px;
    max-height: 200px;
  }
  .container {
    flex-direction: column-reverse;
    margin-left: 32px;
  }
}

</style>