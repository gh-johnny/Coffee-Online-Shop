
<template>
  <div>
    <div class="left-side">
      <figure class="left-video"><video src="../../public/video/Home-video.mp4" autoplay loop></video></figure>
    </div>
    <div class="content">
      <div class="right-side">
    <form>
    <h1>
      Welcome
    </h1>
    
      <section>
        <aside>
          <label for="username">Username: </label>
          <input v-model="uname" type="text" name="username" placeholder="Type your Username">
        </aside>

        <aside>
          <label for="password">Password: </label>
          <input v-model="pword" type="text" name="password" placeholder="Type your Password">
        </aside>
        <input type="button" value="Submit" @click="submit">
      </section>
      <!-- <h2>{{message}}</h2> -->
    </form>
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
      message: "",
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
            console.log(this.eachUser[1])
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
            this.message = "Your Username or Password is wrong check again"
          }
      }
    }
    
    
  },
  mounted() {
    this.getJson()
  }
}
</script>
