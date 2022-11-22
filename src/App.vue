<template>
  <div>
    <button @click="logout">Logout</button>
    <main-nav></main-nav>
    <router-view @shoppingCart="fromProuct" :cartAdd="ProductToCart"></router-view>
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue'


export default {
  name: 'App',
  components: {
    MainNav,
  },
  data(){
    return{
      ProductToCart: new Map(),
      DataFromProduct:'',
    }
  },
  methods:{
    fromProuct(val){
      this.DataFromProduct = val
      console.log(this.DataFromProduct)
      this.ProductToCart.set(val.pId,val)
      console.log(this.ProductToCart)
      console.log(this.DataFromProduct.totalCal())
      console.log(this.DataFromProduct.eachPrice())
    },
    logedUser(val){
      this.logeduser = val
    },
    logout(){
      sessionStorage.removeItem("logeduser")
      this.$router.push({name:'login-page'})
    }
  },
  mounted(){
    console.log(sessionStorage["logeduser"])
  }
}

</script>

<style>

</style>