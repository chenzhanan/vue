<template>
    <div id="column">
       
        <List :list=list dataName="column"></List>
    
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
            url:"/api/column"
        }).then(res=>{this.list=res.data.data
         
        }
         
        )
    }
}
</script>
<style scoped>
    #floow{padding-top:.7rem}
</style>