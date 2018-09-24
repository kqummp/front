<template>
  <div id="app">
    <TheHeader>
    </TheHeader>

    <router-view></router-view>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    'TheHeader': Header
  }
}
</script>



<style>
</style>

