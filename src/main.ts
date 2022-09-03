import { createApp } from 'vue'
import App from '@/App.vue'
import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router"
import '@/index.css'

const routes = [
    {
        path: "/",
        component: () => import("@/views/IndexPage.vue"),
        name: 'index',
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'default',
        redirect: "/"
    } ,
] as RouteRecordRaw[]

const router = createRouter({
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
            }
        }
    },
    history: createWebHistory(),
    routes,
});

createApp(App).use(router)
    .mount('#app')
