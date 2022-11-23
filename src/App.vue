<template>
  <div>
    <main-nav :userWelcome='userWelcome'></main-nav>
     <router-view @shoppingCart="fromProuct" :cartAdd="ProductToCart" @userData='userData'></router-view>
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue'

export default {
  name: 'App',
  components: {
    MainNav
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
      // console.log(this.DataFromProduct)
      this.ProductToCart.set(val.pId,val)
      // console.log(this.ProductToCart)
      // console.log(this.DataFromProduct.totalCal()) 
    },
    logedUser(val){
      this.logeduser = val
    },
    userData(val){
      this.userWelcome = val
    }
  },
}
</script> 
<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Sono', sans-serif;
  }
  html{
     width: 100vw;
    height: 100vh;
    overflow: hidden; 
  }
  .left-video{
	filter: brightness(50%);
  }
  .left-side{
        position: absolute;
        left: -35vw;
        z-index: -1;
    }
  .content{
        position: absolute;
        width: 100%;
        height: 100vh;
        z-index: -1;
    }
    .right-side{
        position: fixed; 
        overflow: scroll;
		overflow-x: hidden;
        z-index: 70;
        top: 0;
        right: 0;
        height: 100%;
        width: 60vw;
        padding-left: 10vw;
        background-color: white;
    }
</style>
