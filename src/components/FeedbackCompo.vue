<template>
    <div class="content">
      <figure class="left-video"><img src="../../public/img/feedbackPicture.png" alt="Coffee Cup"></figure>
      <div class="right-side">
        <h2>Feedback Page</h2>
          <div id="panel" class="panel-container">
        <strong>How satisfied are you with <br /> your experience ???</strong>
        <div class="ratings-container" @click="(e)=>rating(e) ">
          <div class="rating">
            Unhappy
          </div>
          <div class="rating">
            Neutral
          </div>
          <div class="rating active">
            Satisfied
          </div>
        </div>
        <button class="btn" id="send" @click="sendClick">Send Review</button>
      </div>
      </div>
    </div>
</template>
<script>
export default {
    name : 'FeedbackPage',
    data(){
      return{
        selectedRating: "Satisfied",
      }
    },
    methods: {
        rating(e){
            if(e.target.classList.contains('rating')) {
                this.removeActive()
                e.target.classList.add('active')
                this.selectedRating = e.target.innerText
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
        <br/>
        -Feedback : ${this.selectedRating}-
        <br/>
        We'll use your feedback to improve our customer support
            `
        }
    }
}
</script>

<style scoped>
h2{
    font-family: 'Great Vibes', cursive;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10vh;
    font-size: 2.3em;
}
.content{
  background: #ffc99f;
}
.right-side{
   background: #C69B7B;
}
.panel-container {
  background-color: white;
  box-shadow: 3 10px 3px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  max-width: 480px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
}
.rating:hover,
.rating.active {
  border-radius: 4px;
  border: 1px solid grey;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
}
.rating img {
  width: 40px;
}
.rating small {
  display: inline-block;
  margin: 10px 0 0;
  border-radius: 20px;
}
.btn {
  background-color: gainsboro;
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
.btn:hover{
  background: rgb(182, 181, 181);
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
img{
    width: 100%;
    filter: drop-shadow(1px 1px 60px white);
}
figure{
    width: 20%;
    position: absolute;
    left: 5%;
    bottom: 25%;
}
</style>
