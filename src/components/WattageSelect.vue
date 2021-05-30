<template>
  <div class="wattage-select">
    <span class="wattage-description">使うレンジ</span>
    <div id="wattage-container" class="wattage-container">
      <div
        v-for="item in list"
        :key="item.id"
        :id="`wattage-${item.id}`"
        class="wattage-item"
      >
        {{ item.name }}
      </div>
    </div>
    <span class="wattage-unit">W</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { debounce } from "lodash";
import { wattageList } from "@/common/wattageList";

export default defineComponent({
  props: {
    wattage: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:wattage"],
  setup(props, { emit }) {
    nextTick(() => {
      const containerElem = document.getElementById("wattage-container");
      if (containerElem === null) throw new Error();

      const itemElem = document.getElementById(`wattage-${props.wattage}`);
      if (itemElem === null) throw new Error();

      const itemRect = itemElem.getBoundingClientRect();
      containerElem.scrollTo(0, itemRect.top - containerElem.offsetTop);

      const currentWattage = { value: props.wattage };
      containerElem.addEventListener(
        "scroll",
        debounce(() => {
          const wattage =
            wattageList[Math.round(containerElem.scrollTop / 30)].id;
          if (wattage === currentWattage.value) return;

          emit("update:wattage", wattage);
          currentWattage.value = wattage;
        }, 500)
      );
    });

    return {
      list: wattageList,
    };
  },
});
</script>

<style lang="scss" scoped>
.wattage-select {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ea5541;
}

.wattage-description {
  height: 22px;
  margin-right: 8px;
  font-size: 22px;
}

.wattage-unit {
  height: 30px;
  margin-left: 4px;
  font-size: 26px;
}

.wattage-container {
  height: 52px;
  padding: 12px;
  overflow-y: scroll;
  cursor: pointer;
  background: #ea554126;
  border-radius: 8px;
  scroll-snap-type: y mandatory;
}

.wattage-item {
  height: 30px;
  font-size: 26px;
  scroll-snap-align: center;
}
</style>
