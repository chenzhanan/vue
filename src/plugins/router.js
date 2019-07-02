import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "../components/Home"
import Follow from "../components/Follow"
import Column from "../components/Column"
import Detail from "../components/Detail"
import Login from "../components/Login"
import Reg from "../components/Reg"
import User from "../components/User"
let routes=[
    {path:"/home",component:Home},
    {path:"/follow",component:Follow},
    {path:"/Column",component:Column},
    {path:"/detail",component:Detail,children:[{
        path:":id",component:Detail
    }]},
    {path:"/Login",component:Login,beforEnter(to,from,next){

    }},
    {path:"/reg",component:Reg},
    {path:"/",redirect:"/home"},
    {path:"/user",component:User}
]
let router=new VueRouter({
    mode:"history",
    routes
}
    
)
export default router