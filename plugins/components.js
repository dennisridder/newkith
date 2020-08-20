import Vue from "vue"
import Page from "~/components/Page.vue"
import PageLanding from "~/components/PageLanding.vue"
import Footer from "~/components/Footer.vue"
import ImageGrid from "~/components/ImageGrid.vue"
import ImageContainerTilt from "~/components/ImageContainerTilt.vue"
import ImageContainerBlog from "~/components/ImageContainerBlog.vue"
import HorizontalImageRow from "~/components/HorizontalImageRow.vue"

Vue.component("blok-page", Page)
Vue.component("blok-page-landing", PageLanding)
Vue.component("blok-footer", Footer)
Vue.component("blok-image-grid", ImageGrid)
Vue.component("blok-image-container-tilt", ImageContainerTilt)
Vue.component("blok-image-container-blog", ImageContainerBlog)
Vue.component("blok-horizontal-image-row", HorizontalImageRow)
