<template>
  <div>
    <main-nav :user='userWelcome' :user2='userWelcome2' :cartAdd="ProductToCart"></main-nav>
    <router-view @shoppingCart="fromProuct" :cartAdd="ProductToCart" @userData='userData' @userData2='userData2'></router-view>
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue'
import { productClass } from './classes/productClass'
export default {
  name: 'App',
  components: {
    MainNav
  },
  data(){
    return{
      cartSet: new Map(),
      ProductToCart: new Map(),
      DataFromProduct:'',
      user:'',
      userWelcome:false,
      userWelcome2: null,
      logedUser:JSON.parse(sessionStorage.getItem('logeduser')),
    }
  },
  methods:{
    fromProuct(val){
      this.DataFromProduct = val
      this.ProductToCart.set(val.pId,val)
      localStorage. setItem("myMap", JSON.stringify(Array.from(this.ProductToCart)))
    },
    userData(val){
      this.userWelcome = val
      // console.log(this.userWelcome)
    },
    userData2(val){
      this.userWelcome2 = val.first_name+" "+val.last_name
      // console.log(this.userWelcome2)
    }
  },
  mounted(){
    if(localStorage.getItem('myMap')){
      // console.log(JSON.parse(localStorage. getItem("myMap")))
      this.test2 = JSON.parse(localStorage. getItem("myMap"))
      for (const key in this.test2) {
        // console.log(this.test2[key][1].pId)
        let test = new productClass(this.test2[key][1].pId,this.test2[key][1].coffeeName,this.test2[key][1].price,this.test2[key][1].type,this.test2[key][1].bType,this.test2[key][1].bTemp,this.test2[key][1].bSize,this.test2[key][1].amount)
        this.ProductToCart.set(test.pId,test)
      }
      // console.log(this.ProductToCart)
    }
    if(!sessionStorage.getItem('logeduser')){
      localStorage. removeItem("myMap");
    }
  }
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
        background-color: white;
    }
</style>
