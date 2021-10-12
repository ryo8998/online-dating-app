<template>
    <router-link :to="'/chat/'+id" class="col-12">
        <div class="d-flex bg-light my-1">
                <div class="col-xs-4 col-sm-3 col-md-2 col-lg-1 col-4 d-flex justify-content-start px-0">
                    <img height="75" width="75" :src="userPic" alt="">
                </div>
                <div class="d-flex flex-wrap col-11">
                    <div class="d-flex col-12 align-items-center">
                        <p class="my-0">{{message.message}}</p>
                    </div>
                    <div class="d-flex col-12 align-items-center">
                        <p class="my-0">{{message.date}}</p>
                    </div>
                </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props:["message","id"],
    name:"MessageHistory",
    computed:{
        userPic(){
            let user = this.$store.getters.getUserById(this.id);
            return user.userInfo.picture.large;
        },
    }
}
</script>


<style scoped>
img{
    border-radius: 50%;
}
</style>