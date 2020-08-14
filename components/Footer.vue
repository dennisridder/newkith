<template>
  <section class="section section-Footer">
    <div class="footer-Content">
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
          <p>Our Work</p>
        </li>
        <li>
          <p>Our Services</p>
        </li>
        <li>
          <p>What's happening</p>
        </li>
        <li>
          <p>Who we are</p>
        </li>
      </ul>
      <ul>
        <li>
          <p>Cases</p>
        </li>
        <li>
          <p>Talents</p>
        </li>
        <li>
          <p>Academy</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
      </ul>
    </div>
    <div class="footer-Logo">
      <h1>NEWKITH</h1>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-Footer
  position: fixed
  right: 0
  bottom: 0
  left: 0
  padding: 0
  margin: 0
  background: $support-color
  // background: white
  z-index: -1
  display: flex
  flex-direction: column

.footer
  &-Content
    padding: 3rem 3rem
    display: flex
    ul
      flex-basis: 25%
  &-Logo h1
    font-size: 22vw
</style>
