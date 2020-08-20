<template>
  <ul class="tagList">
    <li v-for="tag in array" :id="tag" :key="tag">
      <h4>#{{ tag }}</h4>
    </li>
  </ul>
</template>

<script>
export default {
  props: { array: Object },
  mounted() {
    // console.log("TAG LIST", this.array)
  }
}
</script>
