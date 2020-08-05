<template>
  <div class="page">
    <blok-page-landing :words="['What\'s', 'is', 'Happening']" />
    <section>
      <ul class="blogList">
        <!-- prettier-ignore -->
        <li v-for="post in blogList" :id="post.content.id" :key="post.content.id">
        <nuxt-link :to="post.full_slug" tag="div">
          <h2>{{ post.content.title }}</h2>
        </nuxt-link>
      </li>
      </ul>
    </section>
  </div>
</template>

<script>
import gsap from "gsap"
import $ from "jquery"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: "blog/"
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      stories: { content: {} },
      blogList: {}
    }
  },
  mounted() {
    // console.log("blogS INDEX", this.stories)
    this.removeFirstOfarray()
    // this.changePerspective()
    // document
    //   .querySelectorAll(".image-Container")
    //   .forEach(item =>
    //     item.addEventListener("mousemove", this.imagePerspective)
    //   )
  },
  destroyed() {},
  methods: {
    removeFirstOfarray() {
      var arr = this.stories
      arr.shift()
      this.blogList = arr
    },
    changePerspective() {
      // console.log("CHANGEPERSPECTIVE")
      gsap.set(".image-Container", {
        perspective: $(".image-Container").width()
      })
    },
    imagePerspective(e) {
      // console.log("ACTIVE")
      if (e.timeout) clearTimeout(e.timeout)
      setTimeout(this.callParallax.bind(null, e), 400)
    },
    callParallax(e) {
      this.parallaxIt(e, "img", -30)
    },
    parallaxIt(e, target, movement) {
      var $this = $(".image-Container")
      var relX = e.pageX - $this.offset().left
      var relY = e.pageY - $this.offset().top

      gsap.to(target, 1, {
        rotationY: ((relX - $this.width() / 2) / $this.width()) * movement,
        rotationX: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: "power2.out"
      })
    }
  }
}
</script>
