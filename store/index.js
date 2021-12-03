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
    async nuxtServerInit({ commit }, { app }) {
      let getPosts = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "blog/"
      })
      let posts = getPosts.data.stories.map(bp => {
        return {
          id: bp.uuid,
          slug: bp.slug,
          created_at: bp.created_at,
          title: bp.content.title,
          thumbnail: bp.content.thumbnail,
          taglist: bp.tag_list,
          content: bp
        }
      })
      commit("posts/update", posts)

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
          title: bp.content.name,
          thumbnail: bp.content.thumbnail,
          taglist: bp.tag_list
        }
      })
      commit("talents/update", talents)

      let getJobs = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "jobs/"
      })
      let jobs = getJobs.data.stories.map(bp => {
        return {
          id: bp.slug,
          title: bp.content.name,
          thumbnail: bp.content.thumbnail,
          taglist: bp.tag_list
        }
      })
      commit("jobs/update", jobs)

      let getGeneral = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "general/"
      })
      let general = getGeneral.data.stories.map(bp => {
        return {
          content: bp.content
        }
      })
      commit("general/update", general)
    }
  }
}
