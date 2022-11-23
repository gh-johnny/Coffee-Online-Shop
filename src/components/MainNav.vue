<template>
    <nav>
        <aside>
            <span>Welcome {{fullName}}!</span>
        </aside>
        <ul>
            <li><router-link v-show="logflag" to='/login'>Login</router-link></li>
            <li><router-link to='/home'>Home</router-link></li>
            <li><router-link to='/products'>Products</router-link></li>
            <li><router-link to='/recipe'>Recipes</router-link></li>
            <li><router-link to='/shoppingcart'>Shopping Cart</router-link></li>
        </ul>
        <article>
            <button @click="logout">Logout</button>
            <figure><div>{{}}</div></figure><!-- counter for shopping cart items...? -->
        </article>
    </nav>
</template>
<script>
export default {
    name: 'MainNav',
    data(){
        return{
            logedUser:JSON.parse(sessionStorage.getItem('logeduser')),
            fullName: "Nobody",
            logflag:true
        }
    },
    methods:{    
        logout(){
            sessionStorage.removeItem("logeduser")
            this.$router.push({name:'login-page'})
        },
    },
    watch:{

    },
    mounted(){
        if(sessionStorage.getItem('logeduser')){
            this.fullName = this.logedUser.first_name+" "+this.logedUser.last_name;
            this.memberstat = this.logedUser.membership;
            this.mempoint = this.logedUser.point;
            this.logflag = false
        }
    }
}
</script>
<style scoped>
    :root{
        --black: #4f4f4d;
    }
    nav{
        position: fixed;
        height: 100vh;
        width: 12.5em;
        background-color: white;
        border-right: 1px solid #4f4f4d;
        border-left: 1px solid #4f4f4d;
        left: 30%;
        top: 0;
        display: grid;
        place-items: center;
    }
    /* User info */
    aside{
        position: absolute;
        top: 0;
        width: 100%;
        height: 3em;
        display: flex;
        align-items: center;
        padding-left: 5%;
    }
    /* Shopping Cart */
    article{
        position: absolute;
        display: flex;
        justify-content: flex-end;
        bottom: 15%;
        width: 100%;
        height: 5em;
        /* border: 1px solid red; */
    }
    article > figure{
        background-image: url('../../public/img/shopping-cart.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 50px;
        aspect-ratio: 1;
        transform: scaleX(-1);
    }
    /* Nav links */
    ul{
        width: 100%;
        height: 60%;
    }
    li{
        display: flex;
        margin-bottom: 5px;

    }
    a{
        width: 100%;
        padding: 2%;
        text-align: center;
        color: var(--black);
        text-decoration: none;
        position: relative;
    }
    a::before{
        content: '';
        position: absolute;
        width: 10%;
        height: 1px;
        right: 0;
        top: -10%;
        background-color: #4f4f4d;
        transition: 300ms;
    }
    a::after{
        content: '';
        position: absolute;
        width: 10%;
        height: 1px;
        left: 0;
        bottom: -10%;
        background-color: #4f4f4d;
        transition: 400ms;
    }
    a:hover::before{
        width: 40%;
    }
    a:hover::after{
        width: 40%;
    }
</style>