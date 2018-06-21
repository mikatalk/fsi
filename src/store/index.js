import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import shows from './shows'

// const debug = process.env.NODE_ENV === 'development'
// set to false for deom purpose only
const debug = false

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    shows
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
