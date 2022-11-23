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
                    <!-- <h3>hello</h3> -->
                    <td scope="row">{{coffee[1].coffeeName}}</td>
                    <td v-if="coffee[1].bSize !== ''">{{coffee[1].bSize}}</td>
                    <td v-if="coffee[1].bSize === ''">-</td>
                    <td v-if="coffee[1].bTemp !== ''">{{coffee[1].bTemp}}</td>
                    <td v-if="coffee[1].bTemp === ''">-</td>
                    <td v-if="coffee[1].bType!== ''">{{coffee[1].bType}}</td>
                    <td v-if="coffee[1].bType === ''">-</td>
                    <td>{{coffee[1].eachPrice()}}</td>
                    <td>{{coffee[1].amount}}</td>
                    <td>{{coffee[1].totalCal()}}</td>
                    <td><button @click="remItem(coffee[1].pId)">Remove</button></td>
                </tr>
            </tbody>
        </table>
        <article>
            <h2>Your Order</h2>
            <section>
                <h3>Order Details</h3>
                <ul v-for="(coffee,idx) in coffeeItems" :key="idx">
                    <li v-if="coffee[1].type !== 'Beverage'">
                        <p><span>{{coffee[1].coffeeName}}</span> x {{coffee[1].amount}}(100g)</p>
                    </li>
                    <li v-if="coffee[1].type === 'Beverage'">
                        <p><span>{{coffee[1].coffeeName}}</span> x {{coffee[1].amount}} Glass</p><p>Type: {{coffee[1].bTemp}} {{coffee[1].bType}}</p><p>Size: {{coffee[1].bSize}}</p>
                    </li>
                </ul>
                <h3>SubTotal: price - discount + tax</h3>
                <h2>Total:{{this.totalPrice.toFixed(2)}}</h2>
            </section>
            <section>
                <h3>Shipping Info</h3>
                <form>
                    <label>Address: <input v-model="shipAddr" type="text" required></label>
                    <label>Phone: <input v-model="shipTel" type="tel" required></label>
                    <label>Card Information </label>
                    <input type="text">
                </form>
            </section>
        </article>
        <!-- <button @click="goHome">Go Back</button> -->
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
                this.totalPrice += (value.eachPrice() * value.amount);
                    // this.totalPrice += value.totalCal();
                })
            },
            deep:true,
            immediate:true,
        }
    },
    mounted(){
        // console.log(this.coffeeItems);
    }
}
</script>