import * as types from './mutations-types'
import ShowsAPI from '@/api/ShowsApi'
import Show from './../../entities/Show.js'

export const loadAll = ({ commit }) => {
  commit(types.SET_LOADING_STATE, true)
  ShowsAPI.loadAll().then(response => {
    const data = response.data.map(show => new Show(show))
    console.log('data received:', data)
    commit(types.SET_LIST_OF_SHOWS, data)
    commit(types.SET_LOADING_STATE, false)
  })
}
