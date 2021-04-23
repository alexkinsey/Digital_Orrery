<template>
  <div class="solar-system-wrapper">
    <div class="linear-view-info">
      <h1>Scale View</h1>
      <p>All planets and the Sun are to scale</p>
      <p>Distances are not to scale</p>
    </div>

    <section id="solar-system">
      <div
        id="sun"
        class="planet"
        :style="{
          width: this.calcWidth() + 'vw',
          height: this.calcWidth() + 'vw',
        }"
      >
      </div>
      <planet-item v-for="planet in planets" :key="planet.id" :planet="planet" />
    </section>
  </div>
</template>

<script>
import PlanetItem from './LinearPlanet.vue';

export default {
  name: 'linear-view',
  props: ['planets', 'sun'],
  data() {
    return {
      isTopView: true,
    };
  },
  components: {
    'planet-item': PlanetItem,
  },
  methods: {
    calcWidth: function() {
      return this.sun.equatorial_diameter_km / 10000;
    },
  },
};
</script>

<style>
.solar-system-wrapper {
  background: url(../../assets/background.jpg) fixed;
}

#solar-system {
  width: 225vw;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row-reverse;
  z-index: -999;
}

.linear-view-info {
  position: absolute;
  top: 5rem;
  left: 5rem;
  z-index: 999;
  text-shadow: 0 0px 5px black;
}

.change-view-button {
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  background-color: black;
  color: white;
  font-size: 0.8rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  transition: 0.15s;

  position: fixed;
  bottom: 5rem;
  left: 5rem;
  z-index: 999;
}
.change-view-button:hover {
  background-color: rgb(122, 13, 13);
  box-shadow: 0 0 2rem red;
}
.change-view-button:active {
  background-color: rgb(255, 0, 0);
}

#sun {
  background-color: rgb(255, 255, 0);
  background: url(../../assets/Planets/Sun.gif);
  filter: blur(3px) brightness(3);
}
</style>
