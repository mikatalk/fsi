import axios from 'axios'
import {camelizeKeys, decamelizeKeys} from 'humps'

const API = {
  base: 'https://gist.githubusercontent.com/',
  route: 'memikequinn/475999c535ef4e1341f1262484244c68/raw/d77d0f6f4d7e53d7bf5dd7bd1997b27d291d4b0b/db.json'
}

const client = axios.create({
  baseURL: API.base,
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => camelizeKeys(data)
  ],
  transformRequest: [
    data => decamelizeKeys(data),
    ...axios.defaults.transformRequest
  ]
})

export default class ShowsAPI {
  static loadAll () {
    return client.get(API.route)
  }
}
