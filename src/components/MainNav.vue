<template>
    <div>
        <nav>
            <ul>
                <li><router-link to='/'>Home</router-link></li>
                <li><router-link to='/recipe'>Recipes</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'MainNav',
}
</script>