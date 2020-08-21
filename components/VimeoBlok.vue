<template>
  <section
    v-editable="blok"
    class="section section-Media section-ImageContent vimeo"
  >
    <div class="section-Media_Container">
      <iframe
        :src="'https://player.vimeo.com/video/' + blok.video_id"
        width="640"
        height="360"
        frameborder="0"
        transparent="true"
        autoplay="true"
        autopause="true"
        :title="blok.video_title"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
