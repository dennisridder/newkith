<template>
  <li
    :id="tag"
    :key="tag"
    class="section-Filters_Item cursorInteract"
    :class="tag"
  >
    <span>#{{ tag }}</span>
  </li>
</template>

<script>
import cursorInteraction from "@/mixins/cursorInteraction"

export default {
  mixins: [cursorInteraction],
  props: { tag: String }
}
</script>
