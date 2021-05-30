<template>
  <div class="recipe-component">
    <div class="recipe-description">パッケージ記載のレンチン時間</div>
    <div class="recipe-body">
      <SmallSelect v-model:value="computedWattage" :list="wattageList" />
      <span class="recipe-text">Wで</span>
      <SmallSelect v-model:value="minute" :list="minuteList" />
      <span class="recipe-text">分</span>
      <SmallSelect v-model:value="second" :list="secondList" />
      <span class="recipe-text">秒</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import SmallSelect from "@/components/atoms/SmallSelect.vue";
import { wattageList } from "@/common/wattageList";

export default defineComponent({
  components: {
    SmallSelect,
  },
  props: {
    wattage: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:wattage", "update:time"],
  setup(props, { emit }) {
    const minute = computed({
      get: () => {
        return Math.floor(props.time / 60);
      },
      set: (minute) => {
        emit("update:time", minute * 60 + second.value);
      },
    });
    const second = computed({
      get: () => {
        return props.time % 60;
      },
      set: (second) => {
        emit("update:time", minute.value * 60 + second);
      },
    });

    return {
      wattageList,
      computedWattage: computed({
        get: () => props.wattage,
        set: (value) => {
          emit("update:wattage", value);
        },
      }),
      minuteList: [...Array(20)].map((_, i) => {
        const minute = 20 - i;
        return { id: minute, name: `${minute}` };
      }),
      minute,
      secondList: [...Array(60)].map((_, i) => {
        const second = 60 - i;
        return { id: second, name: `${second}` };
      }),
      second,
    };
  },
});
</script>

<style lang="scss" scoped>
.recipe-component {
  color: #ea5541;
}

.recipe-description {
  font-size: 16px;
}

.recipe-body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.recipe-text {
  display: inline-block;
  margin: 0 4px;
}
</style>
