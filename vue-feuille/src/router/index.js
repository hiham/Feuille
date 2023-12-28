import { createWebHistory,createRouter } from "vue-router";


const routes = [
    {
        path : "/",
        alias : "/home",
        name : "home",
        component : () => import("@/components/DashBoard.vue")
    },
    {
        path : "/register",
        alias : "/register",
        name : "register",
        component : () => import("@/components/RegisterForm.vue")
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;