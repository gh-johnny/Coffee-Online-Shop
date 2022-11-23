<template>
  <div class="modal-backdrop">
      <div class="modal">
          <header class="modal-header">
              <slot name="header">
                  Choose Your Coffee and Have a great day
              </slot>
              <button type="button" class="btn-close" @click="close">x</button>
          </header>

          <section class="modal-body">
              <aside class="coffeeImg">{{CoffeeOptions.coffeeName}}</aside>
              <div class="bodytest" name="body">
                  <h2>
                    {{CoffeeOptions.coffeeName}}
                  </h2>
                  <h3>
                    Price : $ {{CoffeeOptions.price}} / <small>100g</small>
                  </h3>
                  <div class="modal_main">
                    <div v-show="!flag" class="left">
                      <h5>Disciptions</h5>
                      <p>If you purchage more than 500g you get 5% discount <br/>/ more than 1kg 10% discount</p>
                      <p>Coffee beans Type.
                          <br/>i.	Whole bean (no extra charge).
                          <br/>ii.	powder ($0.5 extra charge per 100g).
                          <br/>iii.	capsule ($2 extra charge per 100g).
                          <br/>iv.	Drip Package ($1 extra charge per 100g).
                          <br/>v.	Beverage (condition)
                      </p>
                    </div>
                    <div v-show="flag" class="left">
                      <h5>Disciptions</h5>
                      <p>If you choose beverage type here are your options</p>
                      <p>Coffee Type.
                          <br/>Esspresso
                          <br/>Americano
                          <br/>Black
                          <br/>Latte
                          <br/>Caramel Latte
                          <br/>Caramel Moch
                      </p>
                      <h5>Pick UP only</h5>
                    </div>
                    <div class="right">
                      <div>
                        <span>Type: </span>
                        <select v-model="selectedOption" v-on:change="totalCh()" class="table-primary form-control">
                          <option value="no" selected disabled>Select your Coffee Type</option>
                          <option v-for="(option,idx) in options" :key="idx" v-bind:value="option.fee">{{option.type}}</option>
                        </select>
                      </div>
                      <div>
                        <span v-show="!flag"> weight(100g) :</span>
                        <input  min='0' v-show="!flag" type="number" v-model="amount" v-on:change="totalCh()">
                      </div>
                      <h5 v-show="flag" > Make My Coffee</h5>
                      <select v-on:change="totalCh()" v-show="flag" v-model="bType">
                        <option value="" selected disabled>Choose your coffee</option>
                        <option>Esspresso</option>
                        <option>Americano</option>
                        <option>Black</option>
                        <option>Latte</option>
                        <option>Caramel Latte</option>
                        <option>Caramel Moch</option>
                      </select>
                      <select v-show="flag" v-model="bTemp">
                        <option value="" selected disabled>Hot or Cold</option>
                        <option>Hot</option>
                        <option>Cold</option>
                      </select>
                      <select v-on:change="totalCh()" v-show="flag" v-model="bSize">
                        <option value="" selected disabled>How about the Size?</option>
                        <option>Small</option>
                        <option>Large</option>
                        <option>Very Large</option>
                      </select>
                      <input  min='0' v-show="flag" type="number" v-model="amount" v-on:change="totalCh()">
                    </div>
                  </div>
              </div>
          </section>

          <footer class="modal-footer">
              <slot name="footer">
                <h3>Total: $ {{total}}</h3>
              </slot>
              <button type="button" class="btn-green" @click="addTocart">Add Cart</button>
          </footer>
      </div>
  </div>
</template>
<script>
import { productClass } from '@/classes/productClass';
import readJson from '../services/JsonService.js'
export default {
  name: 'ProModal',
  props:['CoffeeOptions'],
  data(){
      return{
          selectedOption: "no",
          options: '',
          optionFee:0,
          amount:1,
          bType:"",
          bTemp:"",
          bSize:"",
          flag:false,
          total:0
      }
  },
  methods: {
      close() {
        this.total = 0
        this.amount=1;
        this.selectedOption = "no"
        this.$emit('close');
      },
      addTocart(){
        if(this.selectedOption =="no"){
          alert("You have to choose all the options")
        }else if(this.selectedOption == "Beverage"){
          if(this.bType == "" || this.bSize == "" || this. bTemp== ""){
            alert("You have to choose all the options")
          }else{
            let addCart = new productClass(this.CoffeeOptions.pId,this.CoffeeOptions.coffeeName,this.CoffeeOptions.price,this.selectedOption,this.bType,this.bTemp,this.bSize,this.amount)
            this.total = 0
            this.amount=1;
            this.selectedOption = "no"
            this.flag = false
            // console.log(addCart)
            this.$emit('close');
            this.$emit('cartAdding',addCart);
          }
        }else{
          let addCart = new productClass(this.CoffeeOptions.pId,this.CoffeeOptions.coffeeName,this.CoffeeOptions.price,this.selectedOption,this.bType,this.bTemp,this.bSize,this.amount)
          this.total = 0
          this.amount=1;
          this.selectedOption = "no"
          this.flag = false
          // console.log(addCart)
          this.$emit('close');
          this.$emit('cartAdding',addCart);
        }
      },
      loadJson(){
          readJson.getJson("option")
          .then(res=>{
              // console.log(res.data)
              this.options = res.data
          }).catch(err=>{console.log(err)})
      },
      totalCh(){
        let price = 0;
        let bTypeFee = 0
        let bSizeFee = 0
        if(this.amount <= 4){
          price = this.totalAll()
        }else if(this.amount > 4 && this.amount <=9){
          price = this.totalAll() * 0.95
        }else if(this.amount > 9){
          price = this.totalAll() * 0.90
        }
        if(this.selectedOption == "Beverage"){
          this.flag = true
          this.optionFee = 0;

          if(this.bType == "Esspresso"){
              bTypeFee = 0
          }else if(this.bType == "Americano"){
              bTypeFee = 0
          }else if(this.bType == "Black"){
              bTypeFee = 0
          }else if(this.bType == "Latte"){
              bTypeFee = 1
          }else if(this.bType == "Caramel Latte"){
              bTypeFee = 2
          }else if(this.bType == "Caramel Moch"){
              bTypeFee = 2
          }

          if(this.bSize == "Small"){
              bSizeFee = 0
          }else if(this.bSize == "Large"){
              bSizeFee = 1
          }else if(this.bSize == "Very Large"){
              bSizeFee = 2
          }

        }else{
          this.flag = false
          this.optionFee = this.selectedOption;
        }
        let price2 = ((price + this.optionFee + bTypeFee + bSizeFee) * this.amount).toFixed(2);
        this.total = price2;
      },
      totalAll(){
          let cal = 0;
          cal = this.CoffeeOptions.price
          return cal
      },
  },
  mounted(){
      this.loadJson();
  },
};
</script>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  translate: 21vw;
  height: 80%;
  aspect-ratio: 1;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 10px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  padding: 1%;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

.modal_main{
  display: flex;
}

.coffeeImg{
  width: 100%;
  height: 250px;
  border-radius: 10px;
  border-radius: 10px;
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 2%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-image: url(../../public/img/pexels-jessica-lewis-creative-867466.jpg);
  background-position: center;
  background-size: cover;

}

.left{
  width: 65%;
  text-align: center;
  background-color: #4AAE9B;
  color: white;
  margin-right: 5px;
  border-radius: 10px;
}

.right{
  display: flex;
  flex-direction: column;
}

.right div {
  display: flex;
  flex-direction: column;
}

h2, h3, h5{
  margin: 10px 0px;
} 

</style>