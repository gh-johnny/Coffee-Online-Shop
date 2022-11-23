<template>
  <div>
    <main-nav :user='userWelcome' :user2='userWelcome2' :cartAdd="ProductToCart"></main-nav>
    <router-view @shoppingCart="fromProuct" :cartAdd="ProductToCart" @userData='userData' @userData2='userData2'></router-view>
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
      user:'',
      userWelcome:false,
      userWelcome2: null
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
    userData(val){
      this.userWelcome = val
      console.log(this.userWelcome)
    },
    userData2(val){
      this.userWelcome2 = val.first_name+" "+val.last_name
      console.log(this.userWelcome2)
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
