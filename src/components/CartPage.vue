<template>
   <div>
        <div class="left-side">
             <figure class="left-video"><video src="../../public/video/Home-video.mp4" autoplay loop></video></figure>
        </div>
        <div class="content">
            <div class="right-side">
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
    mounted(){
   
    }
}
</script>