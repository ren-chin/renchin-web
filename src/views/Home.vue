<template>
  <div class="home-page">
    <div class="page-header">
      <img :src="require('@/assets/images/microwave.svg')" />
    </div>

    <WattageSelect v-model:wattage="wattage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import WattageSelect from "@/components/atoms/WattageSelect.vue";

export default defineComponent({
  name: "Home",
  components: {
    WattageSelect,
  },
  setup() {
    const wattage = ref(1000);

    return {
      wattage,
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
</style>
