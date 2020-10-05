import Vue from "vue"
import VueLazyload from "vue-lazyload"

Vue.filter("transformImage", (image, option) => {
  if (!image) return ""
  if (!option) return ""

  let imageService = "//img2.storyblok.com/"
  let path = image.replace("//a.storyblok.com", "")
  return imageService + option + path
})

Vue.use(VueLazyload, {
  preLoad: 2
})

Vue.filter("dashify", function(value) {
  if (typeof value === "undefined") {
    return "undefined"
  }
  let dashified = value
    .toString()
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .replace(/[ _]/g, "-")

  return "blok-" + dashified
})

Vue.filter("shuffle", function(values) {
  for (var i = values.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = values[i]
    values[i] = values[j]
    values[j] = temp
  }
  return values
})

Vue.filter("removeFirst", function(values) {
  return values.slice(1)
})

Vue.filter("showOnlyFirstX", function(values, amount) {
  return values.slice(0, amount)
})

Vue.filter("orderObjectByName", function(values) {
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const itemA = a.title.toUpperCase()
    const itemB = b.title.toUpperCase()

    let comparison = 0
    if (itemA > itemB) {
      comparison = 1
    } else if (itemA < itemB) {
      comparison = -1
    }
    // return comparison
    return comparison * -1 // Invert
  }
  values.sort(compare)
})

// Remove duplicates
Vue.filter("unique", function(values) {
  return values.filter(function(element, index, self) {
    return index == self.indexOf(element)
  })
})
