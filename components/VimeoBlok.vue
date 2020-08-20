<template>
  <div v-editable="blok" class="media vimeo">
    <div class="media-Container media-Video">
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
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log(this.blok, "MEDIA BLOK YOUTUBE")
  }
}
</script>
