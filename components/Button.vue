<template>
  <a
    :href="'https://' + blok.hyperlink"
    data-target="_blank"
    rel="noreferrer"
    class="button cursorInteract"
  >
    <span>{{ blok.text }}</span>
    <div
      v-if="iconChooser === 'instagram'"
      class="icon"
      v-html="require('~/assets/images/icon-instagram.svg?include')"
    />
    <div
      v-if="iconChooser === 'mail'"
      class="icon"
      v-html="require('~/assets/images/icon-mail.svg?include')"
    />
    <div
      v-if="iconChooser === 'youtube'"
      class="icon"
      v-html="require('~/assets/images/icon-youtube.svg?include')"
    />
    <div
      v-if="iconChooser === 'phone'"
      class="icon"
      v-html="require('~/assets/images/icon-call.svg?include')"
    />
    <div
      v-if="iconChooser === 'facebook'"
      class="icon"
      v-html="require('~/assets/images/icon-facebook.svg?include')"
    />
    <div
      v-if="iconChooser === 'tiktok'"
      class="icon"
      v-html="require('~/assets/images/icon-tiktok.svg?include')"
    />
    <div
      v-if="iconChooser === 'twitter'"
      class="icon"
      v-html="require('~/assets/images/icon-twitter.svg?include')"
    />
    <div
      v-if="iconChooser === 'snapchat'"
      class="icon"
      v-html="require('~/assets/images/icon-snapchat.svg?include')"
    />
    <div
      v-if="iconChooser === 'linkedin'"
      class="icon"
      v-html="require('~/assets/images/icon-linkedin.svg?include')"
    />
    <div
      v-if="iconChooser === 'spotify'"
      class="icon"
      v-html="require('~/assets/images/icon-spotify.svg?include')"
    />
  </a>
</template>

<script>
import cursorInteraction from "@/mixins/cursorInteraction"

export default {
  mixins: [cursorInteraction],
  props: {
    blok: Object
  },
  data() {
    return {
      iconChooser: ""
    }
  },
  mounted() {
    this.dynamicIconChooser()
  },
  methods: {
    dynamicIconChooser() {
      if (this.blok.hyperlink.includes("instagram")) {
        this.iconChooser = "instagram"
      } else if (this.blok.hyperlink.includes("mail")) {
        this.iconChooser = "mail"
      } else if (this.blok.hyperlink.includes("youtube")) {
        this.iconChooser = "youtube"
      } else if (this.blok.hyperlink.includes("tel")) {
        this.iconChooser = "phone"
      } else if (this.blok.hyperlink.includes("facebook")) {
        this.iconChooser = "facebook"
      } else if (this.blok.hyperlink.includes("tiktok")) {
        this.iconChooser = "tiktok"
      } else if (this.blok.hyperlink.includes("twitter")) {
        this.iconChooser = "twitter"
      } else if (this.blok.hyperlink.includes("snapchat")) {
        this.iconChooser = "snapchat"
      } else if (this.blok.hyperlink.includes("linkedin")) {
        this.iconChooser = "linkedin"
      } else if (this.blok.hyperlink.includes("spotify")) {
        this.iconChooser = "spotify"
      } else {
        this.iconChooser = ""
      }
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.button
  display: inline-flex
  align-items: center
  border: $border
  margin-right: var(--button-margins)
  margin-bottom: var(--button-margins)
  padding: var(--button-padding-top) var(--button-padding-sides)
  line-height: 1
  transition: background $transition-button, color $transition-button
  text-decoration: none
  cursor: pointer
  &:last-child
    margin-right: 0
  &:hover
    background: $bg-hover
    color: $color-hover
  .icon
    margin-left: .5rem
</style>
