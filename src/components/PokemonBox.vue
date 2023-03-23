<script>
import Jauge from './Jauge.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

export default {
  name: 'PokemonBox',
  components: {
    ChevronLeft,
    ChevronRight,
    Jauge
  },
  props: ['info'],
  computed: {
    getStats() {
      return this.info.stats.map((stat) => {
        return stat.base_stat
      })
    },
    getSum() {
      let sum = 0
      for (let stat of this.getStats) {
        sum += stat
      }
      return sum
    },
    getImg() {
      return this.info.sprites.other['official-artwork'].front_default
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
  <div id='pokemonBox'>
    <ChevronLeft :size='48' @click="this.$emit('decrement')" />
    <div id='container'>
      <div id='pokemonInfo'>
        <h1>#{{ this.info.id }} | <span>{{ getName }}</span></h1>
        <img v-for='(type, index) in getTypes' :src='`types/${type}.png`' v-bind:key='index'>
      </div>
      <div id='info'>
        <img v-if='getImg' :src=getImg :alt=getName>
      </div>
      <div id='stats'>
        <Jauge v-for='(stat, index) in getStats' v-bind:key='index' :stat='stat' :namestat='index + 1' />
        Total : {{ getSum }}
      </div>
    </div>
    <ChevronRight :size='48' @click="this.$emit('increment')" />
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@media (min-width: 600px) {
  #container {
    flex-direction: row;
  }
}

#pokemonBox {
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-top: 64px;
  border-radius: 16px;
  margin-right: auto;
  margin-left: auto;
  padding: 32px;
  background-color: cadetblue;
}

#info {
  display: flex;
  flex-direction: column;
}

img {
  max-height: 300px;
  max-width: 300px;
  margin-right: 32px;
}

#pokemonInfo {
  display: inline-block;
  margin-top: auto;
  width: 280px;
}

#stats {
  display: inline-block;
  margin-right: auto;
}

span {
  text-transform: capitalize;
}
</style>