<template>
  <div
    :id="planet.name.toLowerCase()"
    class="planet"
    :class="{ active: isActive }"
    @click="toggleActive"
    :style="{
      width: this.calcWidth() + 'vw',
      height: this.calcWidth() + 'vw',
    }"
  >
    <div class="hover-box">
      <h3>
        {{ planet.name }}<span class="hidden">{{ planet.latin_name }}</span>
      </h3>
      <p class="hidden">{{ planet.orbit_distance_km.toLocaleString() }} km from the sun</p>
      <p class="hidden">{{ planet.mass }}</p>
    </div>
    <div id="ring-container" v-if="planet.name === 'Saturn'">
      <div id="rings"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'planet-item',
  data() {
    return {
      isActive: false,
    };
  },
  props: ['planet'],
  methods: {
    toggleActive: function() {
      this.isActive = !this.isActive;
    },
    calcWidth: function() {
      return this.planet.equatorial_diameter_km / 10000;
    },
    translate: function() {
      return `translate(-100px, -${this.calcWidth() / 2}px)`;
    },
  },
};
</script>

<style>
h3,
p {
  margin: 0;
}
h3 {
  width: fit-content;
}
span {
  font-size: 0.7em;
  font-style: italic;
  width: fit-content;
}

.hover-box {
  width: 250px;
  display: none;
  position: relative;
  top: 100%;
  cursor: pointer;
}

.planet:hover {
  box-shadow: 0 0 30px rgb(255, 226, 199);
  transition: 0.3s linear 0s;
}

.planet:hover > .hover-box {
  display: block;
}

.hidden {
  display: none;
}

.active {
  width: 250px !important;
  height: 250px !important;
}

.active .hover-box {
  padding: 1rem ;
  display: block;
  transition: 1s ease-in-out 0s;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
}

.active .hover-box * {
  display: block;
}

.planet {
  border-radius: 50%;
  cursor: pointer;
  transform: scale(0.95);
}
#mercury {
  background-color: rgb(255, 197, 5);
  background: url(../../assets/Planets/CartoonPlanets/Mercury.jpg);
  background-size: 100% 100%;
}
#venus {
  background-color: rgb(188, 143, 58);
  background: url(../../assets/Planets/CartoonPlanets/Venus.jpg);
  background-size: 100% 100%;
}
#earth {
  background-color: rgb(45, 45, 255);
  /* box-shadow: 0 0 10px 1px #0ff; */
  background: url(../../assets/Planets/CartoonPlanets/Earth.jpg);
  background-size: 100% 100%;
}
#mars {
  background: rgb(139, 14, 14);
  background: url(../../assets/Planets/CartoonPlanets/Mars.jpg);
  background-size: 100% 100%;
}
#jupiter {
  background-color: rgb(255, 128, 0);
  background: url(../../assets/Planets/CartoonPlanets/Jupiter.jpg);
  background-size: 100% 100%;
}

#saturn {
  background-color: rgb(255, 212, 94);
  background: url(../../assets/Planets/CartoonPlanets/Saturn.jpg);
  background-size: 100% 100%;
}
#ring-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: -2px;
}
#rings {
  background: url(../../assets/Planets/SaturnRing.png);
  background-size: 100% 100%;
  height: 100%;
  width: 275%;
  margin-right: 4%;
  z-index: 9999;
  pointer-events: none;
}

#uranus {
  background-color: rgb(218, 218, 255);
  background: url(../../assets/Planets/CartoonPlanets/Uranus.jpg);
  background-size: 100% 100%;
}
#neptune {
  background-color: rgb(80, 80, 203);
  background: url(../../assets/Planets/CartoonPlanets/Neptune.jpg);
  background-size: 100% 100%;
}
#pluto {
  background-color: grey;
  background: url(../../assets/Planets/CartoonPlanets/Pluto.jpg);
  background-size: 100% 100%;
}
</style>
