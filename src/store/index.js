import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config/config.json'

// Modules
import nodes from './modules/nodes'
import instance from './modules/instance'
import packages from './modules/packages'
import episodes from './modules/episodes'
import projects from './modules/projects'
import forum from './modules/forum'
import gallery from './modules/gallery'
import user from './modules/user'
import ui from './modules/ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serverUrl: config.serverUrl,
    fullServerUrl: config.serverUrl + '/api',
    all_servers: config.urls,
    config: config
  },
  getters: {},
  mutations: {
    SETSERVER (state, payload) {
      state.serverUrl = payload
      state.fullServerUrl = payload + '/api'

      console.log(
        'state.fullServerUrl',
        state.fullServerUrl,
        'payload',
        payload
      )
    }
  },
  actions: {
    SETNEWSERVER (context, payload) {
      context.commit('SETSERVER', payload)
      context.commit('CONNECTWINDOWSHOW')
    }
  },
  modules: {
    nodes,
    instance,
    packages,
    episodes,
    projects,
    forum,
    gallery,
    user,
    ui
  }
})
