import { createWebHistory, createRouter } from 'vue-router'
import ProductsPage from '../components/ProductsPage.vue'
import RecipePage from '../components/RecipePage.vue'
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
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
