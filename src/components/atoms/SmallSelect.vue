<template>
  <div ref="containerElem" class="select-container">
    <div
      v-for="item in list"
      :key="item.id"
      :ref="setItemRef"
      :id="`select-item-${item.id}`"
      class="select-item"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, PropType, ref } from "vue";
import { debounce } from "lodash";

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
    list: {
      type: Array as PropType<{ id: number; name: string }[]>,
      required: true,
    },
  },
  emits: ["update:value"],
  setup(props, { emit }) {
    const containerElem = ref(null as HTMLElement | null);
    const itemElemList = [] as HTMLElement[];

    nextTick(() => {
      if (containerElem.value === null)
        throw new Error("not found containerElem");

      const itemIndex = props.list.findIndex((item) => item.id === props.value);
      if (itemIndex === -1) throw new Error(`not found item (${props.value})`);

      const itemElem = itemElemList[itemIndex];
      if (itemElem === null)
        throw new Error(`not found itemElem (${itemIndex})`);

      const itemRect = itemElem.getBoundingClientRect();
      containerElem.value.scrollTo(
        0,
        itemRect.top - containerElem.value.offsetTop
      );

      const current = { value: props.value };
      containerElem.value.addEventListener(
        "scroll",
        debounce(() => {
          if (containerElem.value === null) throw new Error();

          const itemId =
            props.list[Math.round(containerElem.value.scrollTop / 24)].id;
          if (itemId === current.value) return;

          emit("update:value", itemId);
          current.value = itemId;
        }, 500)
      );
    });

    return {
      containerElem,
      setItemRef(el: HTMLElement | null) {
        if (el) itemElemList.push(el);
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.select-container {
  height: 40px;
  padding: 8px 8px;
  overflow-y: scroll;
  color: #ea5541;
  cursor: pointer;
  background: #ea554126;
  border-radius: 8px;
  scroll-snap-type: y mandatory;
}

.select-item {
  height: 24px;
  font-size: 20px;
  scroll-snap-align: center;
}
</style>
