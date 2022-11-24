<template>
    <nav>
        <aside>
            <span v-show="!sesssionCheck" >Welcome {{user2}}!</span>
            <span v-show="sesssionCheck" >Welcome {{displayName}}!</span>
        </aside>
        <ul v-if="sesssionCheck">
            <li><router-link to='/home'>Home</router-link></li>
            <li><router-link to='/products'>Products</router-link></li>
            <li><router-link to='/recipe'>Recipes</router-link></li>
            <li><router-link to='/membership'>Membership</router-link></li>
            <li><router-link to='/shoppingcart'>Shopping Cart</router-link></li>
            <li><router-link to='/feedback'>Feedback</router-link></li>
        </ul>
        <ul v-else>
            <li><router-link v-show="!user" to='/login'>Login</router-link></li>
            <li><router-link to='/home'>Home</router-link></li>
            <li><router-link to='/products'>Products</router-link></li>
            <li><router-link to='/recipe'>Recipes</router-link></li>
            <li><router-link to='/shoppingcart'>Shopping Cart</router-link></li>
            <li><router-link to='/feedback'>Feedback</router-link></li>
        </ul>
        <article>
            <form v-if="sesssionCheck">
                <button v-show="sesssionCheck" @click="logout">Logout</button>
            </form>
            <form v-else>
                <button v-show="user" @click="logout">Logout</button>
            </form>
            <figure @click="redirectToCheckout"><div>{{cartAdd.size}}</div></figure>
        </article>
    </nav>
</template>
<script>
export default {
    name: 'MainNav',
    props:['user',"user2",'cartAdd'],
    data(){
        return{
            logedUser:JSON.parse(sessionStorage.getItem('logeduser')),
            logFullname:'',
            sesssionCheck:false
        }
    },
    methods:{    
        logout(){
            sessionStorage.removeItem("logeduser")
            localStorage. removeItem("myMap");
            this.$router.push({name:'login-page'})
        },
        redirectToCheckout(){
            this.$router.push({name: 'shopping-cart'})
        }
    },
    mounted(){
        if(sessionStorage.getItem('logeduser')){
            this.displayName = this.logedUser.first_name;
            this.sesssionCheck = true
        }
    },
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
        justify-content: space-evenly;
        align-items: center;
        bottom: 35%;
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
        transition: 300ms;
        position: relative;
    }
    figure > div{
        background: greenyellow;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center; 
        top: -30%;
        left: -20%;
        transform: scaleX(-1);
    }
    button{
        background: transparent;
        border: 2px solid black;
        border-radius: 5px;
        padding: 3%;
        transition: 300ms;
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
    button:hover{
        cursor: pointer;
        box-shadow: 2px 2px 1px #666666;
    }
    article > figure:hover{
        cursor: pointer;
        filter: drop-shadow(1px 3px 1px #666666);
        -webkit-filter: drop-shadow(1px 3px 1px #666666);
    }
</style>