
<template>
  <div>
    <div class="content">
      <figure><img src="../../public/img/loginPic.png" alt="Coffee++ Barista"></figure>
      <div class="right-side">
        <div id="container">
          <div id="right">
            <h1 id="login">LogIn</h1><br>
            <!-- Login saved in a JSON file -->
            <input v-model="uname" type="text" name="username" placeholder="Type your Username" class="client-info">
            <input v-model="pword" type="password" name="password" placeholder="Type your Password" class="client-info">
            <button type="button" @click="submit" class="client-info">Login</button>
          </div>
          <span v-if="feedbackFlag">Username/password incorrect</span>
        </div>
      </div>
  </div>
</div>
</template>
<script>
import JsonService from '../services/JsonService.js';
import { userClass } from '../classes/userClass.js';
export default {
  name: 'loginPage',
  data(){
    return{
      uname:"",
      pword:"",
      userList:new Map(),
      logedUser: null,
      feedbackFlag: false
    }
  },
  methods: {
    // Getting the data from Json File
    getJson(){
      JsonService.getJson('userdata')
      .then(res=>{
        for(this.user of res.data){
          this.userList.set(this.user.id, this.user)
        }
      })
      // Catch the error
      .catch(e=>{console.log(e)})
    },
    // Submit the userdata
    submit(){
        for(this.eachUser of this.userList){
          if(this.uname == this.eachUser[1].username && this.pword == this.eachUser[1].password){
            // console.log(this.eachUser[1])
            let logedUser = new userClass(this.eachUser[1].id, this.eachUser[1].first_name, this.eachUser[1].last_name, this.eachUser[1].username, this.eachUser[1].email,this.eachUser[1].membership)
            logedUser.setSession();
            if(logedUser.membership){
              let logeduser = logedUser.toObject();
              logeduser.point = Math.floor(Math.random()*1000);
              sessionStorage.setItem('logeduser',JSON.stringify(logeduser));
            }
            this.$emit("userData", true)
            this.$emit("userData2", logedUser)
            this.$router.push({name:'products-page'});
          }else{
            this.feedbackFlag = true
          }
      }
    }
  },
  mounted() {
    this.getJson()
  }
}
</script>
<style scoped>
:root {
  --box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}
span{
  position: absolute;
  bottom: 25%;
  color: rgba(226, 29, 29, 0.737);
}
img{
  width: 100%;
}
figure{
  width: 30%;
  position: absolute;
  left: 0;
}
.right-side {
  background: #C69B7B;
}
.content{
  background-image: url('../../public/img/MembershipPic.jpg');
    background-attachment: fixed;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
}
#container {
  width: 100%;
  height: 80%;
  display: grid;
  place-items: center;
  box-shadow: var(--box-shadow);
}
#login {
  padding-top: 35%;
  text-align: center;
  text-shadow: var(--box-shadow);
}
.client-info {
  display: block;
  margin: 20px auto;
  width: 110%;
  height: 50px;
  border: solid #999 1px;
  border-radius: 5px;
  transition: 200ms;
  box-shadow: var(--box-shadow);
  padding: 5%;
}
.client-info:focus {
  width: 130%;
}
button{
  text-align: center;
}
button:hover{
  cursor: pointer;
}
button:focus{
  width: 110%;
}
</style>