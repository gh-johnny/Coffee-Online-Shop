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
                <div>
                    <input v-model="mPoint" type="number" placeholder="Put in the point">
                    <button @click="usePoint" type="button">Use point</button>
                    <p>Available Point: {{this.logedUser.point}} - {{this.mPoint}}</p>
                </div>
                <h2>Total:{{this.tmpPrice.toFixed(2)}}<small>({{this.totalPrice.toFixed(2)}}-{{this.mPoint}}Point)</small></h2>
            </section>
            <section>
                <h3>Shipping Info</h3>
                <form onsubmit="return false;">
                    <label>Address: <input v-model="shipAddr" type="text" placeholder="Write address" required></label>
                    <label>Phone: <input v-model="shipTel" type="tel" placeholder="Write phone number" required></label>
                    <hr>
                    <label>[Card Information]</label>
                    <p>Card number: <input v-model="cardNum" type="text" placeholder="**** **** **** ****" required></p>
                    <p>Expiry(MM/YY): <input v-model="cardExp" type="text" placeholder="MM/YY" required></p>
                    <p>Card code: <input v-model="cardCvc" type="text" placeholder="cvc" required></p>
                    <p><input v-model="chBox" type="checkbox" required> Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our "Privacy policy" and "terms and conditions".</p>
                    <button @click="orderFunc" type="submit">Place order</button>
                </form>
            </section>
        </article>
    </div>
</template>
<script>
export default {
    name:'CartTableCompo',
    props:['cartList'],
    data(){
        return{
            coffeeItems:this.cartList,
            subTotal:0,
            totalPrice:0,
            tmpPrice:0,
            mPoint:0,
            logedUser:'',
            pointFlag:true,
            totalPoint:0,
            tmpPoint:0,
            shipAddr:'',
            shipTel:'',
            cardNum:'',
            cardExp:'',
            cardCvc:'',
            chBox:false,
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
        },
        usePoint(){
            this.totalPoint = this.logedUser.point;
            this.tmpPrice = this.totalPrice;
            if(this.mPoint < this.totalPoint && 0 < (this.tmpPrice - this.mPoint) ){
                this.tmpPrice -= this.mPoint;
            }else{
                alert("Check the available point");
            }
        },
        orderFunc(){
            this.shipAddr='';
            this.shipTel='';
            this.cardNum='';
            this.cardExp='';
            this.cardCvc='';
            this.chBox = false;
            this.logedUser.point -= this.mPoint;
            this.mPoint = 0;
            sessionStorage.setItem('logeduser',JSON.stringify(this.logedUser));
        }
    },
    watch:{
        coffeeItems:{
            handler(){
                this.coffeeItems.forEach((value)=>{
                this.totalPrice += (value.eachPrice() * value.amount);
                })
            },
            deep:true,
            immediate:true,
        },
    },
    mounted(){
        this.logedUser = JSON.parse(sessionStorage.getItem('logeduser'));

    }
}
</script>