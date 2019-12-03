<template>
  <!--- v-show="choosedNode" -->
  <div class="page-container">
    <!-- Routed content -->
    <div v-if="isChoosed">
      <div class="md-toolbar work-toolbar">
        <div class="md-button">
          <div class="md-ripple">
            <router-link
              to="/editor"
              class="md-editor"
            >
              {{ text.work.editor }}
            </router-link>
          </div>
        </div>

        <div class="md-button">
          <div class="md-ripple">
            <router-link
              to="/nodepanel"
              class="md-editor"
            >
              {{ text.work.node_panel }}
            </router-link>
          </div>
        </div>

        <div class="md-button">
          <div class="md-ripple">
            <router-link
              to="/workspace"
              class="md-editor"
            >
              {{ text.work.workspace }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="work-area">
        <router-view />
      </div>
    </div>
    <!-- Project info -->
    <div
      v-else
      class="work-area"
    >
      <div class="md-layout">
        <md-toolbar>
          <span class="md-title">Проект: {{ currentProject.label }} (ID:{{ currentProject.id }})</span>
        </md-toolbar>
      </div>
      <div class="md-layout">
        <md-content>
          <img :src="minipic(currentProject.id)">
        </md-content>
      </div>
      <div class="md-layout">
        <md-toolbar>
          <span
            v-if="currentProject.description.length"
            class="md-title"
          >Описание: {{ currentProject.description }}</span>
        </md-toolbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkWindow',
  props: {
    local: {
      type: Object,
      default: () => {}
    }
  },
  data: function () {
    return {
      test: true
    }
  },
  computed: {
    text () {
      return this.$store.state.ui.text
    },
    isChoosed () {
      return this.$store.state.nodes.isChoosed
    },
    choosedNode () {
      return this.$store.state.nodes.isChoosed
        ? this.$store.state.nodes.current_node
        : false
    },
    currentProject () {
      return this.$store.state.projects.meta
    }
  },
  mounted () {
    console.log('workWindow.vue current prj:', this.$store.state.projects.meta)
  },
  methods: {
    minipic (id) {
      let pics = this.$store.state.projects.projects_pics
      let minipic = ''
      let nopic = true
      for (let i in pics) {
        // console.log('minipic', id, 'projects_pics id', pics[i].id)
        if (pics[i].id === id) {
          minipic = pics[i].pic
          nopic = false
        }
      }
      if (nopic) {
        this.$store.dispatch('LOADPROJECTPIC', id)
      }
      minipic.length ? null : (minipic = 'src/assets/img/no.png')
      console.log('minipic', id, minipic)
      return minipic
    }
  }
}
</script>
