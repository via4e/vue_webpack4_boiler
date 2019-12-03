<template>
  <div class="md-toolbar first-menu">
    <div class="md-toolbar-section-start">
      <div>
        <md-icon md-src="./src/assets/svg/blockflow.svg" />
      </div>

      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>
          {{ text.topmenu.project }}
        </md-button>
        <md-menu-content>
          <md-menu-item>
            <md-button
              class="md-primary"
              @click="loadProject"
            >
              {{ text.topmenu.loadproject }}
            </md-button>
          </md-menu-item>
          <md-menu-item>
            <md-button
              class="md-primary"
              @click="closeProject"
            >
              {{ text.topmenu.closeproject }}
            </md-button>
          </md-menu-item>
          <md-menu-item>
            <md-button
              class="md-primary"
              disabled
            >
              Project Plugins
            </md-button>
          </md-menu-item>
          <md-menu-item>
            <md-button
              class="md-primary"
              disabled
            >
              Gallery
            </md-button>
          </md-menu-item>
          <md-menu-item>
            <md-button
              class="md-primary"
              disabled
            >
              Forum
            </md-button>
          </md-menu-item>
        </md-menu-content>
      </md-menu>

      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>
          {{ text.topmenu.exchange }}
        </md-button>
        <md-menu-content>
          <md-menu-item>
            <md-button
              class="md-primary"
              disabled
            >
              Export
            </md-button>
          </md-menu-item>
          <md-menu-item>
            <md-button
              class="md-primary"
              disabled
            >
              Import
            </md-button>
          </md-menu-item>
          <md-menu-item>
            <md-button
              class="md-primary"
              disabled
            >
              Update
            </md-button>
          </md-menu-item>
        </md-menu-content>
      </md-menu>

      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>
          {{ text.topmenu.snapshots }}
        </md-button>
        <md-menu-content>
          <md-menu-item>
            <md-button
              class="md-primary"
              disabled
            >
              Snapshots
            </md-button>
          </md-menu-item>
        </md-menu-content>
      </md-menu>

      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>
          {{ text.topmenu.help }}
        </md-button>
        <md-menu-content>
          <md-menu-item>
            <md-button
              class="md-primary"
              @click="aboutshow"
            >
              About
            </md-button>
          </md-menu-item>
          <md-menu-item>
            <md-button
              class="md-primary"
              disabled
            >
              Print object counts
            </md-button>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>

    <div class="md-toolbar-section-end">
      <md-button
        md-menu-trigger
        @click="connect"
      >
        {{ text.topmenu.connect }}
      </md-button>
      <!-- Avatar or stub -->
      <div class="menu-avatar">
        <md-icon v-if="userName != 'LOGIN'">
          face
        </md-icon>
      </div>

      <!-- Login -->
      <div
        class="md-button"
        @click="loginshow"
      >
        <div class="md-ripple">
          {{ userName.length ? userName : text.topmenu.login }}
        </div>
      </div>

      <!-- Lang RU/EN -->
      <md-switch
        v-model="lang"
        class="md-primary"
        @change="toggleLanguage"
      >
        {{ locale_title }}
      </md-switch>
    </div>

    <loadproject :loadprojectshow="loadProjectShow" />
    <loginheader :login="loginShow" />
    <about :aboutshow="aboutShow" />
    <connect :connectshow="connectShow" />
  </div>
</template>

<script>
import loginheader from './Login.vue'
import about from './About.vue'
import loadproject from './LoadProject.vue'
import connect from './Connect.vue'

export default {
  name: 'Topmenu',
  components: {
    loginheader,
    loadproject,
    about,
    connect
  },
  data: () => ({
    lang: false
  }),
  computed: {
    text () {
      return this.$store.state.ui.text
    },
    locale_title () {
      switch (this.$store.state.ui.locale) {
        case 'en':
          return 'ENG'
        case 'ru':
          return 'РУС'
        default:
          return 'err'
      }
    },
    loginShow () {
      return this.$store.state.ui.LoginWindowShow
    },
    aboutShow () {
      return this.$store.state.ui.AboutWindowShow
    },
    connectShow () {
      return this.$store.state.ui.ConnectWindowShow
    },
    loadProjectShow () {
      return this.$store.state.ui.LoadProjectDialogShow
    },
    userName () {
      return this.$store.state.user.islogin
        ? localStorage.username
        : ''
    },
    isLogin () {
      return !!this.$store.state.user.islogin
    },
    isProjectLoaded () {
      return !!this.$store.state.projects.isChoosed
    },
    isForumsLoaded () {
      return this.$store.state.forum.isLoaded
    },
    isGalleriesLoaded () {
      return this.$store.state.gallery.isLoaded
    },
    isProjectsListLoaded () {
      return !!this.$store.state.projects.projectsLoaded
    },
    projectName () {
      return this.$store.state.projects.isChoosed
        ? this.$store.state.projects.meta.label
        : 'No project loaded'
    }
  },
  methods: {
    aboutshow () {
      this.$store.dispatch('ABOUTSHOW')
    },
    loginshow () {
      this.$store.dispatch('LOGINSHOW')
    },
    loadProject () {
      this.$store.dispatch('LOADPROJECTSHOW')
    },
    closeProject () {
      this.$store.dispatch('CLOSECURRENTPROJECT')
    },
    connect () {
      this.$store.dispatch('CONNECTWINDOWSHOW')
    },
    toggleLanguage () {
      this.$store.dispatch('TOGGLELANGUAGE')
    }
  }
}
</script>
