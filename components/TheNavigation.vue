<template>
  <header>
    <nav>
      <ul>
        <nuxt-link to="/" tag="li">Home</nuxt-link>
        <nuxt-link to="/talents" tag="li">Management</nuxt-link>
        <nuxt-link to="/cases" tag="li">Creative</nuxt-link>
        <nuxt-link to="/blog" tag="li">What's happening</nuxt-link>
        <nuxt-link to="/about" tag="li">Who We Are</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNavigation"
}
</script>
