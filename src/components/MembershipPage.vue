<template>
    <div>
        <div class="content">
            <figure><img src="../../public/img/MembershipDraw.png" alt="Friends drinking coffee"></figure>
            <div class="right-side">
                <aside></aside>
                <h2>Membership Joining Page</h2>  
                <section>
                    <article>
                        <p>Come join us in this coffee adventure</p>
                        <small>Benefits everywhere!</small>
                    </article>    
                        <button class='join' @click="joinMember">Join</button>
                        <button class="notNow">not now</button>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MemberShip",
    data(){
        return{
            logedUser:JSON.parse(sessionStorage.getItem('logeduser')),
        }
    },
    methods: {
        joinMember(){
            this.logedUser.membership = true;
            this.logedUser.point = 0;
            sessionStorage.setItem('logeduser',JSON.stringify(this.logedUser))
            this.$router.push({name:'products-page'});
        }
    }
}
</script>
<style scoped>
.content{
    background-image: url('../../public/img/MembershipPic.jpg');
    background-attachment: fixed;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
}
aside{
    background-image: url('../../public/img/MembershipPic.jpg');
    background-attachment: fixed;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
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
section{
    display: grid;
    place-content: center;
    height: 70vh;
    font-size: 1.2em;
}
article{
    margin-bottom: 10%;
}
figure{
    translate: -5vw 30vh;
    width: 40%;
}
img{
    width: 100%;
}
.join{
    border: 0px none transparent;
    padding: 1em;
    background: #FFBA47;
    border-radius: 1em;
    margin-bottom: 5%;
    transition: 200ms;
    box-shadow: 2px 2px;
}
.join:hover{
    cursor: pointer;
    background: #ffa70f;
}
.notNow{
    background: transparent;
    border: 0px none transparent;
    position: relative;
    text-decoration: underline;    
}
.notNow:hover{
    cursor: pointer;
    color: grey;
}
</style>