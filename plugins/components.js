import Vue from "vue"
import Page from "~/components/Page.vue"
import PageHomepage from "~/components/PageHomepage.vue"
import Landing from "~/components/Landing.vue"
import Footer from "~/components/Footer.vue"
import ButtonsContainer from "~/components/ButtonsContainer.vue"
import Button from "~/components/Button.vue"
import ButtonCollaborate from "~/components/ButtonCollaborate.vue"
import LogosContainer from "~/components/LogosContainer.vue"
import Logo from "~/components/Logo.vue"
import Image from "~/components/Image.vue"
import Youtube from "~/components/Youtube.vue"
import Vimeo from "~/components/Vimeo.vue"
import TagList from "~/components/TagList.vue"
import FilterList from "~/components/FilterList.vue"
import Text from "~/components/Text.vue"
import Quote from "~/components/Quote.vue"
import ImageGrid from "~/components/ImageGrid.vue"
import ImageContainer from "~/components/ImageContainer.vue"

Vue.component("blok-page", Page)
Vue.component("blok-page-homepage", PageHomepage)
Vue.component("blok-landing", Landing)
Vue.component("blok-footer", Footer)
Vue.component("blok-tag-list", TagList)
Vue.component("blok-filter-list", FilterList)
Vue.component("blok-buttons-container", ButtonsContainer)
Vue.component("blok-button", Button)
Vue.component("blok-button-collaborate", ButtonCollaborate)
Vue.component("blok-logos-container", LogosContainer)
Vue.component("blok-logo", Logo)
Vue.component("blok-image", Image)
Vue.component("blok-youtube", Youtube)
Vue.component("blok-vimeo", Vimeo)
Vue.component("blok-text", Text)
Vue.component("blok-quote", Quote)
Vue.component("blok-image-grid", ImageGrid)
Vue.component("blok-image-container", ImageContainer)
