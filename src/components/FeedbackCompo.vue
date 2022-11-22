<template>
    <div id="panel" class="panel-container">
        <strong>How satisfied are you with <br /> this product ???</strong>
        <div class="ratings-container" @click="(e)=>rating(e) ">
          <div class="rating">
   
            <small>Unhappy</small>
          </div>
  
          <div class="rating">
           
            <small>Neutral</small>
          </div>
  
          <div class="rating active">
          
            <small>Satisfied</small>
          </div>
        </div>
        <button class="btn" id="send" @click="sendClick">Send Review</button>
      </div>
</template>
<script>
export default {
    name : 'FeedbackPage',
    data(){
      return{
        selectedRating: ""
      }
    },
    methods: {
        rating(e){
            if(e.target.parentNode.classList.contains('rating')) {
                this.removeActive()
                e.target.parentNode.classList.add('active')
                this.selectedRating = e.target.nextElementSibling.innerHTML
            }
            if(e.target.classList.contains('rating')) {
                this.removeActive()
                e.target.classList.add('active')
                this.selectedRating = e.target.nextElementSibling.innerHTML
            } 
        },
        removeActive(){
          const ratings = document.querySelectorAll('.rating')
          for(let i = 0; i < ratings.length; i++) {
              ratings[i].classList.remove('active')
          }
        },
        sendClick(){
          const panel = document.querySelector('#panel')
          panel.innerHTML = `
        
        Thank You!
        
        Feedback : ${this.selectedRating}
        We'll use your feedback to improve our customer support
            `
        }
    }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
* {
  box-sizing: border-box;
}
body {
  /* background-image: url(/image/coffee-beans-PZWMWMK+sml.jpg);  */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
  height:100vh;
}
.panel-container {
  background-color: #b5e7a0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  max-width: 480px;
  color:#4e54c8;
  margin:10% auto 2% auto;
}
strong {
  font-size: 22px;
}
.panel-container strong {
  line-height: 25px;
}
.ratings-container {
  display: flex;
  margin: 20px 0;
}
.rating {
  flex: 1;
  cursor: pointer;
  padding: 20px;
  margin: 10px 5px;
}
.rating:hover,
.rating.active {
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.rating img {
  width: 40px;
}
.rating small {
  color: #fff;
  display: inline-block;
  margin: 10px 0 0;
}
.rating:hover small,
.rating.active small {
  color: #8f94fb;
}
.btn {
  background-color: #8f94fb;
  color: #000;
  border: 0;
  border-radius: 4px;
  padding: 12px 30px;
  cursor: pointer;
}
.btn:focus {
  outline: 0;
}
.btn:active {
  transform: scale(0.98);
}
.fa-heart {
  color: red;
  font-size: 30px;
  margin-bottom: 10px;
}
.credit a{
    text-decoration: none;
    color: #fff;
  }
  .credit {
      text-align: center;
  }
i {
  color: aliceblue;
}
a {
  color: aliceblue;
  text-decoration: none;
  font-size: 20px;
}
</style>
