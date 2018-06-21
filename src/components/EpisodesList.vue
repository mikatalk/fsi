<template>
  <div class="episodes-list">
    Episodes list
    <div
      v-for="(episode, index) of episodes"
      :key="index" >
      <h3 class="title">{{episode.title}}</h3>
      <h4 class="caption">{{episode.caption}}</h4>
      <p class="description" v-html="episode.description" />
      <img width="60" :src="episode.pictureUrl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpisodesList',
  props: {
    episodes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">

.episodes-list {

}
</style>
