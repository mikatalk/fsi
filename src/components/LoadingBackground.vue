<template>
  <div class="loading-background">
    Loading...
  </div>
</template>

<script>
export default {
  name: 'LoadingBackground'
}
</script>

<style lang="scss">
@keyframes loading-animation{
  0%{
    background-position: -100vw 0
  }
  100%{
    background-position: 100vwpx 0
  }
}
.loading-background {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #eee;
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: loading-animation;
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 100vw 100vh;
}
</style>
