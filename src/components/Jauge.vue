<script>
export default {
  name: 'Jauge-pokemon',
  props: ['stat', 'namestat'],
  methods:{
    hslToHex(h) {
      const a = 100 * Math.min(0.5, 0.5) / 100
      const f = n => {
        const k = (n + h / 30) % 12
        const color = 0.5 - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
        return Math.round(255 * color).toString(16).padStart(2, '0')   // convert to Hex and prefix "0" if needed
      }
      return `#${f(0)}${f(8)}${f(4)}`
    }
  },
  computed: {
    statColor() {
      return this.hslToHex(this.stat*(200/255))
    },
    statSize() {
      return this.stat * 2.7
    },
    statName() {
      if (this.namestat == 1) {
        return 'PV :'
      }
      if (this.namestat == 2) {
        return 'Attaque :'
      }
      if (this.namestat == 3) {
        return 'Défense :'
      }
      if (this.namestat == 4) {
        return 'Att. Spé'
      }
      if (this.namestat == 5) {
        return 'Déf. Spé :'
      }
      if (this.namestat == 6) {
        return 'Vitesse :'
      } else return '?'
    }
  }
}
</script>

<template>
  <div id='container'>
    <div id='nomStat'>
      {{ statName }}
    </div>
    <div id='jauge'>
      <div id='barre' :style="{ 'width': statSize + 'px', 'background-color': statColor }" />
      <p>{{ stat }}</p>
    </div>
  </div>

</template>

<style scoped>
#nomStat {
  margin-right: 10px;
  width: 65px;
}

#container {
  display: flex;
  flex-direction: row;
}

#barre {
  height: 16px;
  width: 200px;
  border-radius: 12px;
  background-color: black;
  transition: width 0.6s ease-in-out;
}

#jauge {
  margin-bottom: 8px;
}

</style>