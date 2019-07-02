<template>
    <div id="Follow">
        
        <List :list="list" dataName="follow"></List>
       
    </div>
</template>
<script>
   
    import List from "./List"
    
    export default {
    data(){
        return {
            list:[]
        }
    },
    components:{
       List
    },
    mounted(){
        axios({
            url:"api/follow"
        }).then(res=>this.list=res.data.data)
    }
}
</script>
<style scoped>
    #follow{padding-top:.7rem}
</style>