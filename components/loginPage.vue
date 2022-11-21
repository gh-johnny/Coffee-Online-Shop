<template>
  <div>
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
        <span>{{eden}}</span>
      </section>
  </form>
  </div>
  
</template>

<script>
import JsonService from '../services/JsonService.js';


export default {
  name: 'loginPage',  
  props: ["eden"],
  data(){
    return{
      uname:"",
      pword:"",
      userList:new Map(),
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
          console.log(`Hello, ${this.eachUser[1].username}`);
          this.$emit("Marcelo", this.eachUser[1])
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
</style>
