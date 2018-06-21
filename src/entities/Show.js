import Season from './Season'

export default class Show {
  constructor ({name, summary, seasons}) {
    this.name = name
    this.summary = summary
    this.seasons = seasons.map(season => new Season(
      season.slug,
      season.title,
      season.showEpisodes
    ))
  }
}
