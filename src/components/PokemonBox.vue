<script>
import Jauge from './Jauge.vue'
import PokemonInfo from "@/components/PokemonInfo.vue";

import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
export default {
  name: 'PokemonBox',
  components: {
    ChevronLeft,
    ChevronRight,
    Jauge,
    PokemonInfo
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
  <div id='pokemonBox'>
    <button type='button' @click="this.$emit('decrement')">
      <ChevronLeft :size='48' />
    </button>
    <div id='container'>
      <PokemonInfo :info="this.info" />
      <div id='stats'>
        <Jauge v-for='(stat, index) in getStats' v-bind:key='index' :stat='stat' :namestat='index + 1' />
        Total : {{ getSum }}
      </div>
    </div>
    <button type='button' @click="this.$emit('increment')">
      <ChevronRight :size='48' />
    </button>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#pokemonBox {
  display: flex;
  margin-top: 32px;
  width: 80%;
  border-radius: 16px;
  background-color: rgb(160, 95, 95, 0.8);
}

@media (max-height: 1000px) {
  #pokemonBox {
    width: 80%;
    margin-top: 32px;
    border-radius: 16px;
    padding: 32px;
  }
  #container {
    margin-left: 40px;
  }
}

@media (min-width: 1000px) {
  #container {
    flex-direction: row;
  }

  #pokemonBox {
    width: 80%;
    flex-direction: row;
    margin-top: 32px;
    border-radius: 16px;
    padding: 32px;
  }
}

#stats {
  display: inline-block;
  margin-right: auto;
}

span {
  text-transform: capitalize;
}

button {
  width: fit-content;
  height: fit-content;
  margin-top: auto;
  margin-bottom: auto;
  background-color: unset;
  border: 1px solid #000;
  border-radius: 50%;
  cursor: pointer;
  padding: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: white;
  border: unset;
}
</style>