import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
        history: createWebHistory(import.meta.url.BASE_URL),
        routes: [
            {
                path: '/',
                component: () => import('../pages/Home.vue')
            }
        ]
})

export default router