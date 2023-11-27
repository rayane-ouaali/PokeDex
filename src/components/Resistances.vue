<script>
export default {
  name: 'Resistances',
  props: ['info'],
  methods: {

  },
  computed: {
    getDamageRelations() {
      const damageRelationData = this.info
      const sortedDamageRelations = {
        immune: [],
        resists: [],
        stronglyResists: [],
        weak: [],
        veryWeak: []
      }
      if(damageRelationData){
        damageRelationData.forEach((type) => {
          if(type.damage_multiplier === 0) sortedDamageRelations.immune.push(type)
          if(type.damage_multiplier === 0.25) sortedDamageRelations.stronglyResists.push(type)
          if(type.damage_multiplier === 0.5) sortedDamageRelations.resists.push(type)
          if(type.damage_multiplier === 2) sortedDamageRelations.weak.push(type)
          if(type.damage_multiplier === 4) sortedDamageRelations.veryWeak.push(type)
        })
        return sortedDamageRelations
      }
      return sortedDamageRelations
    }
  }
}
</script>

<template>
  <div class="resistances">
    <p style="font-size: large">Damage relations</p>
    <div v-if="getDamageRelations.immune.length">
      <p>Immune to (x0):</p>
      <div class="typesImg">
        <img v-for="type in getDamageRelations.immune" :src='`types/fr/${type.name.toLowerCase()}.png`' alt="">
      </div>
    </div>
    <div v-if="getDamageRelations.stronglyResists.length">
      <p>Strongly resists (x0.25):</p>
      <div class="typesImg">
        <img v-for="type in getDamageRelations.stronglyResists" :src='`types/fr/${type.name.toLowerCase()}.png`' alt="">
      </div>
    </div>
    <div v-if="getDamageRelations.resists.length">
      <p>Resists (x0.5):</p>
      <div class="typesImg">
        <img v-for="type in getDamageRelations.resists" :src='`types/fr/${type.name.toLowerCase()}.png`' alt="">
      </div>
    </div>
    <div v-if="getDamageRelations.weak.length">
      <p>Weak to (x2):</p>
      <div class="typesImg">
        <img v-for="type in getDamageRelations.weak" :src='`types/fr/${type.name.toLowerCase()}.png`' alt="">
      </div>
    </div>
    <div v-if="getDamageRelations.veryWeak.length">
      <p>Very weak to (x4):</p>
      <div class="typesImg">
        <img v-for="type in getDamageRelations.veryWeak" :src='`types/fr/${type.name.toLowerCase()}.png`' alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.resistances {
  display: flex;
  flex-direction: column;
  height: 364px;
  width: 25%;
  border-radius: 16px;
  padding: 32px;
  background-color: rgba(115, 255, 7, 0.8);
  overflow: hidden;
}

.typesImg {
  display: inline-block;
  max-width: 260px;
}
</style>