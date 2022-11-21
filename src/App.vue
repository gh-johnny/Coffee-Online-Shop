<template>
  <div>
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
    }
  }
}

</script>

<style>

</style>
