import { createWebHistory, createRouter } from 'vue-router';
import ProductsPage from '../components/ProductsPage.vue';
import RecipePage from '../components/RecipePage.vue';
import CartPage from '../components/CartPage.vue';
const routes = [
    {
        path: '/',
        alias: '/products',
        name: 'products-page', 
        component: ProductsPage, 
    },
    {
        path: '/recipe',
        name: 'recipe-page', 
        component: RecipePage, 
    },
    {
        path: '/shoppingcart',
        name: 'cart-page',
        component: CartPage,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
