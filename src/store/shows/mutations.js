import * as types from './mutations-types'

export default {
  [types.SET_LOADING_STATE] (state, value) {
    state.loading = value
  },
  [types.SET_LIST_OF_SHOWS] (state, shows) {
    state.shows.length = 0
    state.shows.push(...shows)
  }
}
