<template>
    <div>
        <table>
            <thead v-if="this.coffeeItems.size!=0">
                <tr>
                    <th>Product</th>
                    <th>Size</th>
                    <th>Hot/Cold</th>
                    <th>Type</th>
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
                    <td><button @click="remItem(coffee[1].pId)">x</button></td>
                </tr>
            </tbody>
        </table>
        <article>
            <article>
                <h2>-Your Order</h2>
                <h3>Details</h3>
            </article>
            <section>
                <ul v-for="(coffee,idx) in coffeeItems" :key="idx">
                    <li v-if="coffee[1].type !== 'Beverage'">
                        <p><span>{{coffee[1].coffeeName}}</span> x {{coffee[1].amount}}(100g)</p>
                    </li>
                    <li v-if="coffee[1].type === 'Beverage'">
                        <p><span>{{coffee[1].coffeeName}}</span> x {{coffee[1].amount}} Glass</p><p>Type: {{coffee[1].bTemp}} {{coffee[1].bType}}</p><p>Size: {{coffee[1].bSize}}</p>
                    </li>
                </ul>
                <section>
                    <h3>SubTotal: {{this.subTotal.toFixed(2)}}<small>({{this.totalPrice.toFixed(2)}}(price) - {{this.discountPrice.toFixed(2)}}(discount) + {{this.tax.toFixed(2)}}(tax))</small></h3>
                    <input v-model="mPoint" type="number" placeholder="Insert Points" min="0" :max='logedUser.point'/>
                    <button @click="usePoint" type="button">Apply Points</button>
                    <p>Available Points: {{ this.logedUser.point }} - {{this.mPoint}}</p>
                </section>
                <h2>-Total:{{this.tmpPrice.toFixed(2)}}<small>({{this.subTotal.toFixed(2)}}-{{this.mPoint}}Points)</small></h2>
                <small>Reward Points: {{this.addPoint}}</small>
            </section>
            <section>
                <h2>-Shipping Info</h2>
                <form>
                    <label>Address: <input v-model="shipAddr" type="text" placeholder="Write address" required></label>
                    <label>Phone: <input v-model="shipTel" type="tel" placeholder="Write phone number" required></label>
                    <br/>
                    <br/>
                    <label>[Card Information]</label>
                    <p>Card number: <input v-model="cardNum" type="text" placeholder="**** **** **** ****" required></p>
                    <p>Expiry(MM/YY): <input v-model="cardExp" type="text" placeholder="MM/YY" required></p>
                    <p>Card code: <input v-model="cardCvc" type="text" placeholder="cvc" required></p>
                    <p><input v-model="chBox" type="checkbox" required> Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our "Privacy policy" and "terms and conditions".</p>
                    <button @click="orderFunc" type="submit">Place order</button>
                </form>
            </section>
        </article>
        <div>
        </div>
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
            tax:0,
            discountPrice:0,
            mPoint:0,
            logedUser:'',
            pointFlag:true,
            totalPoint:0,
            tmpPoint:0,
            addPoint:0,
            shipAddr:'',
            shipTel:'',
            cardNum:'',
            cardExp:'',
            cardCvc:'',
            chBox:false,
            show: false
        }
    },
    methods:{
        remItem(pid){
            // console.log(pid);
            this.totalPrice = 0;
            this.discountPrice = 0;
            this.$emit("remItem",pid);
        },
        goHome(){
            this.$router.push({
                name:'products-page'
            })
        },
        usePoint(){
            this.totalPoint = this.logedUser.point;
            this.tmpPrice = this.subTotal;
            if(this.mPoint < this.totalPoint && 0 < (this.tmpPrice - this.mPoint) ){
                this.tmpPrice -= this.mPoint;
            }else{
                alert("Check your available points");
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
            this.logedUser.point += this.addPoint;
            this.mPoint = 0;
            sessionStorage.setItem('logeduser',JSON.stringify(this.logedUser));
            localStorage.clear()
            location.reload();
            this.show = true;
            return false;
        }
    },
    watch:{
        coffeeItems:{
            handler(){
                this.addPoint = 0;
                this.coffeeItems.forEach((value)=>{
                    this.totalPrice += (value.eachPrice() * value.amount);
                    this.discountPrice += parseFloat(value.discount());
                })
                this.tax = (this.totalPrice - this.discountPrice)*0.05;
                this.tmpPrice = this.totalPrice - this.discountPrice + this.tax;
                this.subTotal = this.totalPrice - this.discountPrice + this.tax;
                this.addPoint = parseInt(this.tmpPrice * 0.05);
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
<style scoped>
/* Shopping Cart */
div{
    margin-left: 15%;
} 
table{
    width: 90%;
    border-collapse: collapse;
}
tr{
    border-bottom: 1px solid black;
}
tr > *{
    text-align: center;
}
th{
    background: rgba(174, 33, 33, 0.182);
    border: 1px solid black;
}
thead > tr{
    height: 10vh;
}
thead > tr > *{
    width: 12.5%;
}
tbody > tr{
    height: 20vh;
}
table button{
    background-color: rgba(252, 30, 30, 0.264);
    color: red;
    border: 1px solid red;
    border-radius: 5px;
    width: 70%;
    aspect-ratio: 1;
    margin: 10px;
}
table button:hover{
    cursor: pointer;
    background-color: rgba(252, 30, 30, 0.405);
}
/* Order Details */
article > article{
    font-size: 1.4em;
    margin-left: 5%;
}
ul{
    margin-top: 3%;
    margin-bottom: 3%;
}
input{
    background: transparent;
    border: 0px none transparent;
    border-bottom: 2px solid rgba(252, 30, 30, 0.264);
    padding: 2%;
}
button{
    margin-top: 2%;
    margin-bottom: 2%;
    background: transparent;
    border: 2px solid rgba(252, 30, 30, 0.264);
    border-radius: 5px 5px 0px 0px;
    padding: 2%;
}
button:hover{
   cursor: pointer;
   background: hsl(26deg 100% 82%) ;
}
section > h2{
    margin-left: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
}
form > p:nth-child(9){
    width: 70%;
    margin-top: 5%;
}
</style>