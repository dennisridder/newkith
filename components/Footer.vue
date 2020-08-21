<template>
  <footer class="footer section-Footer">
    <div class="section-Footer_Content">
      <ul>
        <li>
          <p>About</p>
        </li>
        <li>
          <p>&nbsp;</p>
        </li>
        <li>
          We are a digital design studio from Auckland, New Zealand specialising
          in the fields of web, motion and new media design.
        </li>
      </ul>
      <ul></ul>
      <ul>
        <li>
          <p>Navigate</p>
        </li>
        <li>
          <p>&nbsp;</p>
        </li>
        <nuxt-link class="link" to="/" tag="li">Home</nuxt-link>
        <nuxt-link class="link" to="/cases" tag="li">Cases</nuxt-link>
        <nuxt-link class="link" to="/talents" tag="li">Talents</nuxt-link>
        <nuxt-link class="link" to="/blog" tag="li">What's happening</nuxt-link>
        <nuxt-link class="link" to="/about" tag="li">Our Story</nuxt-link>
      </ul>
      <ul>
        <li>
          <p>Contact</p>
        </li>
        <li>
          <p>&nbsp;</p>
        </li>
        <li class="link">
          <a href="mailto:info@newkith.com" target="_blank">
            info@newkith.com
          </a>
        </li>
        <li class="link">
          <a href="tel:0031636101262" target="_blank">
            +31(0)636101262
          </a>
        </li>
        <li class="link">
          <a href="https://goo.gl/maps/EQQuTb834wUmkuQy6" target="_blank">
            Directions
          </a>
        </li>
        <li class="link">
          <a href="https://www.instagram.com/new.kith/" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </div>
    <nuxt-link class="section-Footer_Logo" to="/" tag="div">
      <div v-html="require('~/assets/images/logo.svg?include')" />
    </nuxt-link>
  </footer>
</template>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-Footer
  position: fixed
  right: 0
  bottom: 0
  left: 0
  margin: 0
  background: $support-color
  padding-top: var(--spacing-two)
  z-index: -1
  display: flex
  flex-direction: column
  &_Content
    display: flex
    padding-left: var(--spacing-content-sides)
    padding-right: var(--spacing-content-sides)
    padding-bottom: var(--spacing-two)
    ul
      flex-basis: 25%
    a
      text-decoration: none
    .link
      cursor: pointer
  &_Logo
    padding-left: var(--spacing-content-sides)
    padding-right: var(--spacing-content-sides)
    padding-bottom: var(--spacing-two)
</style>
