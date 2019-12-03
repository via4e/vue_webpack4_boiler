<template>
  <md-dialog :md-active.sync="aboutshow">
    <div class="md-layout">
      <div class="md-layout-item">
        <div class="about">
          <div>Веб-клиент платформы RNDNET</div>
          <div>Версия от {{ this.$store.state.config.version }}</div>
          <hr>
          <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
          <hr>
          <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
        </div>
      </div>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-75" />
      <div class="md-layout-item">
        <md-button @click="aboutshowtoggle">
          ОК
        </md-button>
      </div>
    </div>
  </md-dialog>
</template>

<script>
export default {
  props: { aboutshow: Boolean },
  methods: {
    aboutshowtoggle () {
      this.$store.dispatch('ABOUTSHOW')
    }
  }
}
</script>
