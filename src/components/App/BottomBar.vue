<template>
  <md-bottom-bar class="md-accent bottom-bar">
    <div class="bottom-bar-line">
      <div>
        RnDnet Web Client ver. <b>{{ version }}</b>,
        <span>
          server:
          <b>{{ serverUrl }}</b>
        </span>,
        <span>
          project:
          <b>{{ projectName }}</b>,
        </span>
        <span>graphTestView: <b>{{ isGraphTestView }}</b></span>
      </div>
    </div>
  </md-bottom-bar>
</template>

<script>
export default {
  name: 'BottomBar',
  computed: {
    projectName () {
      return this.$store.state.projects.isChoosed
        ? this.$store.state.projects.meta.label
        : 'No project loaded'
    },
    isGraphTestView () {
      return this.$store.state.config.graphTestView
    },
    serverUrl () {
      return this.$store.state.serverUrl
    },
    version () {
      return this.$store.state.config.version
    }
  }
}
</script>
