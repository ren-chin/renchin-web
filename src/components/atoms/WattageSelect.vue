<template>
  <div class="wattage-select">
    <span class="wattage-description">使うレンジ</span>
    <div class="wattage-container">
      <div v-for="item in list" :key="item.id" class="wattage-item">
        {{ item.name }}
      </div>
    </div>
    <span class="wattage-unit">W</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      list: [
        1500, 1400, 1300, 1200, 1000, 900, 800, 700, 600, 500, 400, 300, 200,
      ].map((wattage) => {
        return {
          id: wattage,
          name: `${wattage}`,
        };
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
.wattage-select {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ea5541;
}
.wattage-description {
  font-size: 22px;
  margin-right: 8px;
  height: 22px;
}
.wattage-unit {
  font-size: 26px;
  margin-left: 4px;
  height: 30px;
}
.wattage-container {
  height: 52px;
  padding: 12px;
  background: #ea554126;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  cursor: pointer;
  border-radius: 8px;
}
.wattage-item {
  height: 30px;
  font-size: 26px;
  scroll-snap-align: center;
}
</style>
