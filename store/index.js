export const state = () => ({
  cacheVersion: ""
})

export const mutations = {
  setCacheVersion(state, version) {
    state.cacheVersion = version
  }
}

export const actions = {
  loadCacheVersion({ commit }) {
    return this.$storyapi.get(`cdn/spaces/me`).then(res => {
      commit("setCacheVersion", res.data.space.version)
    })
  }
}

export default {
  actions: {
    // put asynchronous functions that can call one or more mutation functions
    async nuxtServerInit({ commit }, { app }) {
      let getCases = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "cases/"
      })
      let cases = getCases.data.stories.map(bp => {
        return {
          id: bp.slug,
          title: bp.content.title,
          thumbnail: bp.content.thumbnail,
          taglist: bp.tag_list
        }
      })
      commit("cases/update", cases)
      let getTalents = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "talents/"
      })
      let talents = getTalents.data.stories.map(bp => {
        return {
          id: bp.slug,
          name: bp.content.name,
          thumbnail: bp.content.thumbnail
        }
      })
      commit("talents/update", talents)
    }
  }
}
