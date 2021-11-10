<template>
  <form
    class="link cursorInteract"
    action="https://newkith.us4.list-manage.com/subscribe/post?u=45a5561023842caf04f0cb311&amp;id=5cfad5aaa4"
    method="post"
    name="mc-embedded-subscribe-form"
    target="_blank"
    novalidate
  >
    <input
      type="email"
      value=""
      name="EMAIL"
      class="email"
      placeholder="email address"
      required
    />
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true">
      <input
        type="text"
        name="b_45a5561023842caf04f0cb311_5cfad5aaa4"
        tabindex="-1"
        value=""
      />
    </div>
    <div class="clear">
      <button
        id="mc-embedded-subscribe"
        type="submit"
        value="Subscribe"
        name="subscribe"
      >
        <div
          class="icon"
          v-html="require('~/assets/images/icon-arrow.svg?include')"
        />
      </button>
    </div>
  </form>
</template>

<style scoped>
form input[type="email"]:focus {
  background-color: transparent;
  color: #fff;
}
</style>
