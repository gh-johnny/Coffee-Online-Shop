<template>
<div>
    <section class="left-side">
    </section>
    <section class="content">
        <aside></aside>
        <section class="right-side">
            <div class="productPage">
                <div class="PageDetails">
                    <article v-if="memberstat === !null">
                        <h2>Welcome {{this.fullName}}</h2>
                        <h3 v-show="memberstat">Membership: Gold Member |  Point: {{this.mempoint}}</h3>
                        <h3 v-show="!memberstat">Membership : None</h3>
                    </article>
                    <article v-if="memberstat === false">
                        <h2>Welcome {{this.fullName}}</h2>
                        <h3 v-show="!memberstat">Membership : None</h3>
                        <button @click="join()">Join the Membership</button>
                    </article>
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
            logedUser:JSON.parse(sessionStorage.getItem('logeduser')),
            fullName:'',
            memberstat: null,
            mempoint:0
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
        },
        goCart(){
            this.$router.push({
                name:'cart-page'
            })
        },
        join(){
            this.$router.push({name:'membership-cart'})
        }
    },
    mounted(){
        this.loadJson();
        if(sessionStorage.getItem('logeduser')){
            this.fullName = this.logedUser.first_name+" "+this.logedUser.last_name;
            this.memberstat = this.logedUser.membership;
            this.mempoint = this.logedUser.point;
        }
    }
}
</script>
<style scoped>
h2{
    font-family: 'Great Vibes', cursive;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10vh;
    font-size: 2.3em;
}
h3{
    border: 1px solid black;
    border-radius: 10px;
    padding: 2%;
}
.content{
    background: #C69B7B;
}
.content > aside{
    background-image: url('../../public/img/coffee-beans.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 15%;
    aspect-ratio: 1;
    position: absolute;
    left: 5%;
    bottom: 25%;
    rotate: 5deg;
}
.right-side{
    background: #C69B7B;
}
.PageDetails{
    padding-left: 15%;
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
    row-gap: 2vh;
    color: rgb(70, 67, 67);
}
.coffeeBox:hover{
    scale: 1.02;
    color: rgb(98, 51, 18);
    cursor: default;
}
aside{
    text-shadow: 2px 2px 5px black;
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
.coffeeBox:nth-child(odd) .productImg {
    background-image: url(../../public/img/3.jpg);
}
.coffeeBox:nth-child(4) .productImg {
    background-image: url(../../public/img/4.jpg);
}
.coffeeBox:nth-child(7) .productImg {
    background-image: url(../../public/img/12.jpg);
}
.coffeeBox:nth-child(8) .productImg {
    background-image: url(../../public/img/11.jpg);
}
.coffeeBox:nth-child(12) .productImg {
    background-image: url(../../public/img/2.jpg);
}
.coffeeBox:nth-child(14) .productImg {
    background-image: url(../../public/img/15.jpg);
}
.coffeeBox:nth-child(3) .productImg {
    background-image: url(../../public/img/7.jpg);
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