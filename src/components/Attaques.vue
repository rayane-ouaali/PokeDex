<script>
import AbilityBox from './AbilityBox.vue'

export default {
  name: 'Attaques-pokemon',
  components: { AbilityBox },
  props: ['info'],
  computed: {
    getMoves(){
      return this.info.moves.map((move) => {
        return move.move.name
      })
    },
    getLevel(){
      return this.info.moves.map((move) => {
        return move.version_group_details[0].level_learned_at
      })
    }
  }
}
</script>

<template>
  <div id="moves">
    <p>Moves</p>
    <div id="abilities">
      <AbilityBox v-for='(move, index) in getMoves' v-bind:key="`${index}ability`" :name=move :level=getLevel[index]></AbilityBox>
    </div>
  </div>
</template>

<style scoped>
#moves{
  display: flex;
  flex-direction: column;
  height: 364px;
  width: 20%;
  margin-top: 24px;
  border-radius: 16px;
  margin-right: auto;
  margin-left: 10%;
  padding: 32px;
  background-color: #FFCC00;
  overflow: hidden;
}

#abilities{
  border: 2px solid #000;
  border-radius: 4px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>