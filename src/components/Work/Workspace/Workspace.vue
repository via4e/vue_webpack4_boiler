<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item packages-list">
        <div v-if="packages.length">
          <md-table class="compare-table">
            <h2 class="md-title upper">
              {{ text.work.work_pan.packages }}
            </h2>
            <md-table-row class="capi">
              <md-table-head>{{ text.work.work_pan.choosed }}</md-table-head>
              <md-table-head>ID</md-table-head>
              <md-table-head>{{ text.work.work_pan.created }}</md-table-head>
              <md-table-head>{{ text.work.work_pan.label }}</md-table-head>
              <md-table-head>{{ text.work.work_pan.instance }}</md-table-head>
              <md-table-head>{{ text.work.work_pan.episode }}</md-table-head>
              <md-table-head>{{ text.work.work_pan.images }}</md-table-head>
            </md-table-row>
            <md-table-row
              v-for="(item, index) in packages"
              :key="index"
              @click="choosedPackage(item.id)"
            >
              <md-table-cell>
                <md-checkbox
                  v-model="choosedCheckboxes"
                  :value="item.id"
                />
              </md-table-cell>
              <md-table-cell md-numeric>
                {{ item.id }}
              </md-table-cell>
              <md-table-cell>{{ item.created.slice(0, 16) }}</md-table-cell>
              <md-table-cell>{{ item.label }}</md-table-cell>
              <md-table-cell />
              <md-table-cell>{{ default_episode }}</md-table-cell>
              <md-table-cell>
                <div v-if="item.images.length">
                  <span
                    v-for="(pics, ind) in item.images"
                    :key="ind"
                  >{{ pics.name }}<br>
                  </span>
                </div>
                <div v-else>
                  <span>Нет изображения</span>
                </div>
              </md-table-cell>
            </md-table-row>
          </md-table>
        </div>
      </div>
      <div class="md-layout-item">
        <div
          v-show="viewPackage"
          class="view-graphic"
        >
          <div class="md-title">
            Package ID:{{ currentPackage }}
          </div>
          <iframe
            :srcdoc="packagepic"
            frameborder="0"
          />
        </div>
      </div>
    </div>

    <div class="md-layout">
      <md-button
        class="md-raised md-primary"
        @click="compareShowWindow()"
      >
        Сравнить выбранные
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workspace',
  data: () => ({
    choosedCheckboxes: [],
    viewPackage: false,
    currentPackage: null
  }),
  computed: {
    text () {
      return this.$store.state.ui.text
    },
    default_episode () {
      return this.$store.state.episodes.default.id
    },
    packages () {
      return this.$store.state.packages.isLoaded
        ? this.$store.state.packages.packages
        : []
    },
    packagepic () {
      return this.$store.state.packages.current_pic
        ? this.$store.state.packages.current_pic
        : 'false'
    }
  },
  watch: {
    choosedCheckboxes: function (newPackageArray) {
      console.log('watch', newPackageArray)
      for (let i in newPackageArray) {
        this.$store.commit('SETCHOOSEDPACKAGES', this.choosedCheckboxes)
        this.$store.dispatch('LOADPACKAGEPIC', newPackageArray[i])
      }
    }
  },
  methods: {
    choosedPackage (id) {
      this.viewPackage = true
      this.currentPackage = id
      this.$store.dispatch('LOADPACKAGEPIC', id)
    },
    compareShowWindow () {
      this.$store.commit('COMPAREWINDOWTOGGLE')
    }
  }
}
</script>

<style lang="scss">
.compare-table {
  min-width: 680px;
  max-height: 800px;
  overflow: scroll;
}
</style>
