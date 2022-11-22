<template>
    <div>
        <cart-table-compo :cartList="cartList" @remItem="remItem"></cart-table-compo>
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
    mounted(){
        this.logedUser.point = 100;
        console.log(this.logedUser);

        // console.log("hi luke");
        // console.log(this.cartList);
    }
}
</script>