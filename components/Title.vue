<template>
  <ul class="title">
    <li>
      <h1 class="title-Single">{{ words }}</h1>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    words: String
  }
}
</script>
