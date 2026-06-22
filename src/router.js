import SignIn from "@/componets/auth/SignIn.vue";
import SignUp from "@/componets/auth/SignUp.vue";
import Dashboard from "@/componets/pages/dashboard.vue";
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
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/:path(.*)*",
        redirect: { name: 'SignIn' }
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
export default router;