<template>
  <div class="home-page">
    <div class="page-header">
      <img :src="require('@/assets/images/microwave.svg')" />
    </div>

    <WattageSelect />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WattageSelect from "@/components/atoms/WattageSelect.vue";

export default defineComponent({
  name: "Home",
  components: {
    WattageSelect,
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
