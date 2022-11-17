<template>
  <div>
    <main-nav></main-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue'


export default {
  name: 'App',
  components: {
    MainNav
    
  }
}
</script>

<style>

</style>
