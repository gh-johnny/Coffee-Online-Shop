<template>
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
            </article>
            <h2>Products Page</h2>
            <button @click="goCart">Go to Cart</button>
            <div class="coffeePage">
                <div class="coffeeBox" v-for="(product,idx) in coffeeList" :key="idx">
                    <aside class="productImg">{{product[1].coffeeName}}</aside>
                    <div class="text">
                        <h3>{{product[1].coffeeName}}</h3>
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
                console.log(res.data)
                for(let idx in res.data){
                    this.coffeeList.set(res.data[idx].pId,res.data[idx])
                }
                console.log(this.coffeeList)
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
            console.log(val)
        },
        goCart(){
            this.$router.push({
                name:'cart-page'
            })
        },
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
  @import '../css/ProductPageCss.css'; 
</style>