<template>
  <div class="home-page">
    <div class="page-header">
      <img :src="require('@/assets/images/microwave.svg')" />
    </div>

    <WattageSelect v-model:wattage="microwaveWattage" />

    <div class="recipe-container">
      <Recipe v-model:wattage="recipeWattage" v-model:time="recipeTime" />
    </div>

    <button class="submit-button">変換！</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import WattageSelect from "@/components/WattageSelect.vue";
import Recipe from "@/components/Recipe.vue";

export default defineComponent({
  name: "Home",
  components: {
    WattageSelect,
    Recipe,
  },
  setup() {
    const microwaveWattage = ref(1000);
    const recipeWattage = ref(600);
    const recipeTime = ref(90);

    return {
      microwaveWattage,
      recipeWattage,
      recipeTime,
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

.recipe-container {
  width: 80vw;
  padding: 36px;
  margin: 40px auto;
  border: 4px solid #ea554199;
  border-radius: 8px;
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
