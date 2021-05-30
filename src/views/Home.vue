<template>
  <div class="home-page">
    <div class="page-header">
      <img :src="require('@/assets/images/microwave.svg')" />
    </div>

    <WattageSelect v-model:wattage="microwaveWattage" />

    <button class="submit-button">変換！</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import WattageSelect from "@/components/WattageSelect.vue";

export default defineComponent({
  name: "Home",
  components: {
    WattageSelect,
  },
  setup() {
    const microwaveWattage = ref(1000);

    return {
      microwaveWattage,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: center;
  padding: 56px;
}

.submit-button {
  width: 152px;
  height: 152px;
  padding-left: 16px;
  margin-top: 32px;
  font-family: keifont, sans-serif;
  font-size: 22px;
  color: #fff;
  background: #ea5541;
  border: none;
  border-radius: 50%;
}
</style>
