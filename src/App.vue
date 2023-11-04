<template>
  <HeaderMenu />
  <router-view />
  <LoaderModel v-if="systemStore.isLoading" />
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'
import LoaderModel from '@/components/LoaderModel.vue'
import { useSystemStore } from '@/stores'

export default {
  name: 'App',
  components: {
    HeaderMenu,
    LoaderModel,
  },
  data () {
        return {
            systemStore: useSystemStore()
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 120px;
}
</style>
