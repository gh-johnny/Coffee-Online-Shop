import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import HomePage from '../components/HomePage.vue'
import ProductsPage from '../components/ProductsPage.vue'
import RecipePage from '../components/RecipePage.vue'
import ShoppingCart from '../components/CartPage.vue'
import MemberShip from '../components/MembershipPage.vue'
import FeedbackCompo from '../components/FeedbackCompo.vue'
import PagenotFound from '../components/PagenotFound.vue'
const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login-page',
        component: LoginPage
    },
    {
        path: '/products',
        name: 'products-page', 
        component: ProductsPage
    },
    {
        path: '/recipe',
        name: 'recipe-page', 
        component: RecipePage 
    },
    {
        path: '/shoppingcart',
        name: 'shopping-cart', 
        component: ShoppingCart 
    },
    {
        path: '/membership',
        name: 'member-ship', 
        component: MemberShip 
    },
    {
        path: '/feedback',
        name: 'feedback-compo', 
        component: FeedbackCompo 
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'pagenot-found', 
        component: PagenotFound 
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
