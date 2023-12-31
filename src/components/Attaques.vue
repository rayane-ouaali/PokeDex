<script>
import AbilityBox from './AbilityBox.vue'

export default {
  name: 'Attaques-pokemon',
  components: { AbilityBox },
  props: ['info'],
  data(){
    return{
      currentLearnMethod: "level-up"
    }
  },
  methods: {
    getMovesByType(method){
      return this.info.moves.filter(type => type.version_group_details[0].move_learn_method.name == method).map((move) => {
        return move.move.name
      }).sort()
    }
  },
  computed: {
    getLevelMoves(){
      console.log(this.info.moves)
      return this.info.moves.filter(type => type.version_group_details[0].move_learn_method.name == "level-up").map((move) => {
        return {[move.move.name] : move.version_group_details[0].level_learned_at}
      }).sort((a, b) => {
        return Object.values(a) - Object.values(b);
      });
    }
    //TODO : feature de recherche d'attaque
  }
}
</script>

<template>
  <div id="moves">
    <p>Moves</p>
    <select v-model='currentLearnMethod'>
      <option value="level-up">--Select learn method--</option>
      <option value="level-up">Level up</option>
      <option value="machine">Machine</option>
      <option value="egg">Egg</option>
    </select>
    <div id="abilities" v-if='currentLearnMethod == "level-up"'>
      <AbilityBox v-for='(move, index) in getLevelMoves' v-bind:key="`${index}ability`" :name=Object.keys(move).toString() :level=Object.values(move).toString()></AbilityBox>
    </div>
    <div id="abilities" v-else>
      <AbilityBox v-for='(move, index) in getMovesByType(currentLearnMethod)' v-bind:key="`${index}ability`" :name=move></AbilityBox>
    </div>
  </div>
</template>

<style scoped>
#moves{
  display: flex;
  flex-direction: column;
  height: 364px;
  width: 25%;
  border-radius: 16px;
  padding: 32px;
  background-color: rgba(95, 113, 160, 0.8);
  overflow: hidden;
}

#abilities{
  border: 2px solid #000;
  border-radius: 4px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: grey;
}

p{
  text-align: center;
  font-size: large;
  color: black;
}
</style>