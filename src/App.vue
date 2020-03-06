<template>
  <div>
    <!-- Top level menu -->
    <topmenu />
    <div>
    </div>
    <bottombar />

  </div>
</template>

<script>

import topMenu from './components/App/TopMenu.vue'
import bottomBar from './components/App/BottomBar.vue'

import Work from './components/Work/work.vue'

export default {
  name: 'App',
  components: {
    topMenu,
    bottomBar,
    Work
  },
  data: () => ({
    mode: 'normal'
  }),
  computed: {
    local () {
      return local
    },
  },
  created () {

  },
  methods: {

  }
}
</script>
