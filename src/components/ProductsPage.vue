<template>
<div>
    <section class="left-side">
        <figure class="left-video"><video src="../../public/video/Products-video.mp4" autoplay loop></video></figure>
    </section>
    <section class="content">
        <section class="right-side">
            <div class="productPage">
                <div class="PageDetails">
                    <h2>Products Page</h2>
                    <div class="coffeePage">
                        <div class="coffeeBox" v-for="(product,idx) in coffeeList" :key="idx">
                            <aside class="productImg">{{product[1].coffeeName}}</aside>
                            <div class="text">
                                <!-- <h3>{{product[1].coffeeName}}</h3> -->
                                <h3> $ {{product[1].price}} / <small>100g</small></h3>
                                <button type="button" class="btn toModal" @click="showModal(product[1])" >Select!</button>
                            </div>
                        </div>  
                    </div>
                    <div>
                        <ProModal v-show="isModalVisible" @close="closeModal" @cartAdding="cartAdding" :CoffeeOptions="getProduct"></ProModal>
                    </div>
                </div>
            </div>
        </section>
    </section>
</div>
</template>
<script>
import readJson from '../services/JsonService.js'
import ProModal from './ProModal.vue';
import { productClass } from '@/classes/productClass';
export default {
    name: 'ProductsPage',
    components:{
        ProModal
    },
    data(){
        return{
            selectedCoffee: '',
            coffeeList: new Map(),
            getProduct:'',
            isModalVisible: false,
        }
    },
    methods:{
        loadJson(){
            readJson.getJson("coffee")
            .then(res=>{
                // console.log(res.data)
                for(let idx in res.data){
                    this.coffeeList.set(res.data[idx].pId,res.data[idx])
                }
                // console.log(this.coffeeList)
            })
            .catch(er=>{
                console.log(er)
            })
        },
        showModal(val) {
            this.isModalVisible = true;
            let coffeeOject = new productClass(val.pId,val.coffeeName,val.price,"","","","",1)
            this.getProduct = coffeeOject;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        cartAdding(val) {
            this.$emit('shoppingCart',val);
            // console.log(val)
        }
    },
    mounted(){
        this.loadJson();
    }
}
</script>
<style scoped>
*{
    transition: 0.5s;
}   
h2{
    font-family: 'Great Vibes', cursive;
}
.PageDetails{
    padding-left: 8%;
    padding-right: 8%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    z-index: 2;
}
.coffeePage{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 4em;
}
.text{
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.coffeeBox{
    border: 0.2px solid rgb(239, 239, 239);
    box-shadow: 1px 1px 3px;
    border-radius: 10px;
    padding: 2%;
    width: 30%;
    background-color: rgb(255, 248, 248);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(70, 67, 67);
}
.coffeeBox:hover{
    scale: 1.02;
    color: rgb(98, 51, 18);
    cursor: default;
}
aside{
    text-shadow: 1px 1px 3px black;
}
.coffeeImg{
    border-radius: 5px;
}
.productImg{
    height: 170px;
    width: 100%;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(../../public/img/pexels-jessica-lewis-creative-867466.jpg);
    background-position: center;
    background-size: cover;
}
.toModal{
    padding: 5%;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
}
.toModal:hover{
    background-color: rgb(76, 37, 37);
    color: white;
}
small{
    color: rgb(185, 189, 189);
} 
</style>