<template>
  <div class="home">

    <transition name="fade">
      <loading-background
        v-if="isLoading" />
    </transition>

    <show-card
      v-if="!isLoading"
      v-for="(show, index) of shows"
      :key="index"
      :card-index="index"
      :show="show" />

  </div>
</template>

<script>
// @ is an alias to /src
import ShowCard from '@/components/ShowCard'
import LoadingBackground from '@/components/LoadingBackground'
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    'show-card': ShowCard,
    'loading-background': LoadingBackground
  },
  created () {
    this.$store.dispatch('shows/loadAll')
  },
  computed: {
    ...mapGetters({
      'isLoading': 'shows/isLoading',
      'shows': 'shows/shows'
    })
  },
  methods: {
    delayEnterAnimation (el, done) {
      console.log('this.index', el, this.cardIndex)
      setTimeout(done, el.key * 3000)
    }
  }
}
</script>
