<template>
  <ul class="filterList">
    <li v-for="tag in array" :id="tag" :key="tag">
      <h4>{{ tag }}</h4>
    </li>
  </ul>
</template>

<script>
export default {
  props: { array: Array },
  mounted() {}
}
</script>
