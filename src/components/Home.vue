<template>
    <div id="home">
        <Banner dataName="home" :banner="banner"></Banner>
        <List :list="list" dataName="home"></List>
    </div>
</template>
<script>
    import Banner from "./Banner"
    import List from "./List"
    export default {
        components:{
            Banner,List
        },
        data(){
            return {list:[],banner:{}}
        },
        mounted(){
            axios({
                url:"/api/home"
            }).then(res=>{this.list=res.data.data;})
            axios({
              url:"/api/banner"
            }).then(res=>{this.banner=res.data.data
               
            })
            // axios({
            //     url:"/api/home/detail"
            // }).then((res)=>{console.log(res)}
            //     )
        } 
         
        
    }
    
</script>