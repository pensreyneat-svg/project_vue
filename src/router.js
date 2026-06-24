import SignIn from "@/componets/auth/SignIn.vue";
import SignUp from "@/componets/auth/SignUp.vue";
import Dashboard from "@/componets/pages/Dashboard.vue";
import Profile from "@/componets/auth/Profile.vue";
import Navbar from '@/componets/includes/Navbar.vue';
import Sidebar from '@/componets/includes/Sidebar.vue';
import Footer from '@/componets/includes/Footer.vue';      
import widget from '@/componets/pages/Widget.vue'; 

import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "SignIn",
        component: SignIn
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp
    },
    {
        path: '/profile',
        name: 'Profile',
        components: {
            navbar: Navbar,
            sidebar:Sidebar,
            footer: Footer,
            default: Profile,
        },
        meta: { guarded: true },
    },
     {
        path: '/widget',
        name: 'Widget',
        components: {
            navbar: Navbar,
            sidebar:Sidebar,
            footer: Footer,
            default: widget,
        },
        meta: { guarded: true },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        components: {
            navbar: Navbar,
            sidebar:Sidebar,
            footer: Footer,
            default: Dashboard,
        },
        meta: { guarded: true },
    },
    {
        path: "/:path(.*)*", redirect: { name: 'SignIn' }
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
export default router;