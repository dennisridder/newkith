<template>
  <div v-editable="blok" class="media youtube">
    <div class="media-Container media-Video">
      <iframe
        id="mediaPlayer"
        type="text/html"
        width="640"
        height="360"
        frameborder="0"
        :src="'https://www.youtube.com/embed/' + blok.video_id"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {}
}
</script>
