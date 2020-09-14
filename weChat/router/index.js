import home from "../components/Home.js"
import me from '../components/Me.js';
import chat from "../components/Chats.js"
import contacts from "../components/Contacts.js"
import discover from "../components/Discover.js"
const routes =[
    {
        path:"/",
        component:home
    },
    {
        path:"/mePag",
        component:me
    },
    {
        path:"/chatPag",
        component:chat
    },
    {
        path:"/contactPag",
        component:contacts
    },
    {
        path:"/discoverPag",
        component:discover
    }
   
]

const router = new VueRouter({
    routes:routes
})

export default router