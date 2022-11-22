<template>
    <div>
        <table border="1">
            <thead>
                <h1>ShoppingCart</h1>
                <tr>
                    <th>Product Name</th>
                    <th>Coffee Size</th>
                    <th>Coffee Hot/Cold</th>
                    <th>Coffee Type</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Subtotal</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(coffee,idx) in coffeeItems" :key="idx">
                    <td scope="row">{{coffee[1].coffeeName}}</td>
                    <td>{{coffee[1].bSize}}</td>
                    <td>{{coffee[1].bTemp}}</td>
                    <td>{{coffee[1].bType}}</td>
                    <td>{{coffee[1].price}}</td>
                    <td>{{coffee[1].amount}}</td>
                    <td>{{coffee[1].totalCal()}}</td>
                    <td><button @click="remItem(coffee[1].pId)">Remove</button></td>
                </tr>
            </tbody>
            <tfoot>
                Total:{{this.totalPrice.toFixed(2)}}
            </tfoot>
        </table>
        <button @click="goHome">Go Back</button>
    </div>
</template>
<script>
export default {
    name:'CartTableCompo',
    props:['cartList'],
    data(){
        return{
            coffeeItems:this.cartList,
            totalPrice:0,
        }
    },
    methods:{
        remItem(pid){
            console.log(pid);
            this.totalPrice = 0;
            this.$emit("remItem",pid);
        },
        goHome(){
            this.$router.push({
                name:'products-page'
            })
        }
    },
    watch:{
        coffeeItems:{
            handler(){
                this.coffeeItems.forEach((value)=>{
                this.totalPrice += (value.price*value.amount);
                    // this.totalPrice += value.totalCal();
                })
            },
            deep:true,
            immediate:true,
        }
    },
    mounted(){

    }
}
</script>