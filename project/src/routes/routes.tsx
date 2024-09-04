import { lazy } from 'solid-js'

export const routes = [
    {
        path: "/",
        component: lazy(() => import("pages/Home"))
    },
    {
        path: "/Bikes",
        component: lazy(() => import("pages/Bikes"))
    },
    {
        path: "/Budget",
        component: lazy(() => import("pages/Budget"))
    },
    {
        path: "/Contact",
        component: lazy(() => import("pages/Contact"))
    },
    {
        path: "/Insurance",
        component: lazy(() => import("pages/Insurance"))
    },
    {
        path: "/Internal_bikes",
        component: lazy(() => import("pages/Internal_bikes"))
    },
]