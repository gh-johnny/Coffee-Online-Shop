<template>
  <div>
    <loginPage></loginPage>
    
  </div>
</template>

<script>
import loginPage from './components/loginPage.vue'

export default {
  name: 'App',
  components: {
    loginPage
  },
  data() {
    return {
      name: ""
    }
  },
  methods: {
    testFunction(value) {
      switch(value) {
        case "Eden" :
        this.name = "Eden"
        break;

        case "Daniel" :
          this.name = "Daniel"
          break;
      }
    },

    childEvent(userObj) {
      console.log(userObj)
    }
  },
  mounted(){
    this.testFunction(`Daniel`)
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
  margin-top: 60px;
}
</style>
