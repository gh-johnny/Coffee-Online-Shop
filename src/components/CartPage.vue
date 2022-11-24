<template>
   <div>
        <div class="left-side">
             <figure></figure>
        </div>
        <div class="content">
            <aside></aside>
            <div class="right-side">
                <h2>ShoppingCart</h2>
                <cart-table-compo :cartList="cartList" @remItem="remItem"></cart-table-compo>
            </div>
        </div>
    </div> 
</template>
<script>
import CartTableCompo from './CartTableCompo.vue';
export default {
  components: { CartTableCompo },
    name:'CartPage',
    props:['cartAdd'],
    data(){
        return{
            cartList:this.cartAdd,
            logedUser:JSON.parse(sessionStorage.getItem('logeduser')),
        }
    },
    methods:{
        remItem(pid){
            this.cartList.delete(pid);
        }
    },
}
</script>
<style scoped>
h2{
    text-align: center;
    font-family: 'Great Vibes', cursive;
    font-size: 2.3em;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10vh;
    margin-bottom: 3%;
}
.content{
    background: hsl(26deg 100% 78%) 
}
.content > aside{
    background-image: url('../../public/img/cup.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 30%;
    aspect-ratio: 1;
    filter: drop-shadow(3px 3px 3px);
}
.right-side{
    background: hsl(26deg 100% 78%)
}
</style>