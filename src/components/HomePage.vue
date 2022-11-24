<template>
    <div>
        <div class="content">
            <figure class="left-video"><img src="../../public/img/coffee-cup.png" alt="Coffee Cup"></figure>
            <div class="right-side">
                <h2>Home Page</h2> 
                <div class="container">
                    <section>
                        <h2>Become a Member!!!</h2>
                        <h4>-Gain points by purchasing our products</h4>
                        <h4>-5% of your final purchase is converted in points</h4>
                        <h4>-Points are equivalent to a dollar!!!</h4>
                        <button type="button" @click="redirectToMembership">Join now &#8594;</button>
                    </section>
                    <section>
                         <h2>Important</h2>
                            <p>If you purchase more than 500g, you get 5% discount <br/>/ more than 1kg, 10% discount</p>
                            <hr/>
                            <p>Coffee beans Type:
                                <br/>
                          <br/>-Whole bean: (no extra charge).
                          <br/>-Powder: ($0.5 extra charge per 100g).
                          <br/>-Capsule: ($2 extra charge per 100g).
                          <br/>-Drip Package: ($1 extra charge per 100g).
                          <br/>-Beverage: Pick up only
                            </p>
                    </section>
                </div>                                           
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    methods:{
        pageMaker(){
            this.$emit('pageMarker', 'Home');
        },
        redirectToMembership(){
            this.$router.push({name:'shopping-cart'})
        }
    },
    mounted(){
        this.pageMaker()
    }
}
</script>
<style scoped>
.content{
    background-image: url('../../public/img/MembershipPic.jpg');
}
.right-side{
    margin-left: 10%;
     background: #C69B7B;
    display: flex;
    flex-direction: column;
    row-gap: 9vh;
    /* overflow: hidden; */
}
.container{
    width: 100%;
    display: flex;
    justify-content: center
}
.container > section{
    background-image: linear-gradient(45deg, #EEC373 ,#f1aa24);
    box-shadow: 3px 3px 3px;
    border-radius: 10px;
    padding: 2%;
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
    width: 50%;
}
.container  > section:nth-child(1){
    height: 60vh;
}
.container  > section:nth-child(2){
    background-image: linear-gradient(45deg, #EEC373 ,#f1aa24);
    width: 30%;
}
.container > * > h2{
    font-family: 'Sono', sans-serif;
    font-size: 1.8em;
}
.container > section > button{
    border: 0px none;
    text-decoration: underline;
    width: 40%;
    padding: 1%;
    border-radius: 10px;
    background: transparent;
    font-size: 1em;

}
.container > section > button:hover{
    cursor: pointer;
    color: rgb(46, 46, 46);
}
h2{
    font-family: 'Great Vibes', cursive;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10vh;
    font-size: 2.3em;
}
img{
    width: 100%;
}
figure{
    width: 20%;
    position: absolute;
    left: 5%;
    bottom: 25%;
}
  
</style>