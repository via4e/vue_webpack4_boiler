<template>
  <div class="page-container">
    <!-- Top level menu -->
    <topmenu />
    <div v-if="isProjectLoaded">
      <!-- Second level menu -->
      <secondmenu />
      <!-- Content -->
      <div class="content-page">
        <md-content
          name="GraphContent"
          class="graph-view"
          :class="{
            'prj-view-normal': viewMode =='normal' ? true : false,
            'prj-view-master': viewMode =='graph' ? true : false,
            'prj-view-slave': viewMode =='workspace' ? true : false,
          }"
        >
          <graphwrapper :testmode="isGraphTestView" />
        </md-content>
        <md-content
          name="WorkContent"
          class="work-view"
          :class="{
            'prj-view-normal': viewMode =='normal' ? true : false,
            'prj-view-master': viewMode =='workspace' ? true : false,
            'prj-view-slave': viewMode =='graph' ? true : false,
          }"
        >
          <workwindow />
        </md-content>
      </div>
    </div>
    <div v-else>
      <div class="content-page">
        <start
          :login="isLogin"
          :loaded="isProjectsListLoaded"
          :forums="isForumsLoaded"
          :galleries="isGalleriesLoaded"
        />
      </div>
    </div>
    <bottombar />

    <compare
      v-show="compareShow"
      class="view-compare"
    />
  </div>
</template>

<script>
import local from './config/local.json'

import topmenu from './components/App/TopMenu.vue'
import secondmenu from './components/App/SecondMenu.vue'
import bottombar from './components/App/BottomBar.vue'
import start from './components/App/StartScreen.vue'

import graphwrapper from './components/Graph/graphWrapper.vue'
import workwindow from './components/Work/workWindow.vue'

import compare from './components/Work/Workspace/CompareItems.vue'

export default {
  name: 'App',
  components: {
    topmenu,
    secondmenu,
    start,
    compare,
    bottombar,
    graphwrapper,
    workwindow
  },
  data: () => ({
    mode: 'normal'
  }),
  computed: {
    isGraphTestView () {
      return this.$store.state.config.graphTestView
    },
    local () {
      return local
    },
    userName () {
      return this.$store.state.user.islogin
        ? this.$store.state.user.user_name
        : 'LOGIN'
    },
    isLogin () {
      return !!this.$store.state.user.islogin
    },
    isProjectLoaded () {
      return !!this.$store.state.projects.isChoosed
    },
    isForumsLoaded () {
      return !!this.$store.state.forum.isLoaded
    },
    isGalleriesLoaded () {
      return !!this.$store.state.gallery.isLoaded
    },
    isProjectsListLoaded () {
      return !!this.$store.state.projects.projectsLoaded
    },
    projectName () {
      return this.$store.state.projects.isChoosed
        ? this.$store.state.projects.meta.label
        : 'No project loaded'
    },
    isPackagePic () {
      return !!this.$store.state.packages.current_pic_show
    },
    packagepic () {
      return this.$store.state.packages.current_pic
        ? this.$store.state.packages.current_pic
        : 'false'
    },
    compareShow () {
      return this.$store.state.ui.CompareWindowShow
    },
    viewMode () {
      return this.$store.state.ui.projectViewMode
    }
  },
  beforeCreate () {
    localStorage.username = ''
    localStorage.token = ''
  },
  created () {
    this.$store.dispatch('UITEXT', local)
  },
  methods: {
    hideFrame () {
      this.$store.commit('HIDEPIC')
    }
  }
}
</script>
