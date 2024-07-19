Vue.component("bike-station", {
  props: ["station"],
  template: `
    <div class="station">
      <div class="name">
        {{ station.name }}
        <span v-if="station.diff > 30" class="diff-over">t30+</span>
        <span v-else class="diff">t{{ station.diff }}</span>
      </div>
      <div class="bike-general">{{ station.general }}</div>
      <div class="bike-electric">{{ station.electric }}</div>
      <div class="space">{{ station.space }}</div>
    </div>
  `,
});
