<template>
  <div class="show-card">
    <h2 class="title">{{show.name}}</h2>
    <p class="summary" v-html="show.summary" />
    <ol class="seasons">
      <li v-for="(season, index) of show.seasons"
        :key="index">
        Season {{index+1}}
        <episodes-list :episodes="season.episodes" />
      </li>
    </ol>

  </div>
</template>

<script>
import EpisodesList from '@/components/EpisodesList'
export default {
  name: 'ShowCard',
  components: {
    'episodes-list': EpisodesList
  },
  props: {
    show: {
      type: Object,
      required: true
    },
    cardIndex: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss">
.show-card {
  .title {

  }
  .summary {

  }
  .seasons {

  }
}
</style>
