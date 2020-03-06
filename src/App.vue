<template>
  <div>
    <!-- Top level menu -->
    <topmenu />
    <div>
      APP
    </div>
    <bottombar />

  </div>
</template>

<script>

import topmenu from './components/App/TopMenu.vue'
import bottombar from './components/App/BottomBar.vue'

import Work from './components/Work/work.vue'

export default {
  name: 'App',
  components: {
    topmenu,
    bottombar,
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
