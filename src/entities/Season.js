import Episode from './Episode'

export default class Season {
  constructor (slug, title, episodes = []) {
    this.slug = slug
    this.title = title
    this.episodes = episodes.map(episode => new Episode(
      episode.title,
      episode.caption,
      episode.description,
      episode.pictureUrl
    ))
  }
}
