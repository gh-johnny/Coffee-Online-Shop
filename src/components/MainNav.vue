<template>
    <div>
        <nav>
            <ul>
                <li><router-link to='/'>Home</router-link></li>
                <li><router-link to='/recipe'>Recipes</router-link></li>
                <li><router-link to='/login'>Login</router-link></li>
                <li><router-link to='/shoppingcart'>shoppingcart</router-link></li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'MainNav',
}
</script>