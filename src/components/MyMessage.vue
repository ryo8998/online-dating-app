<template>
    <div class="d-flex flex-column col-12 px-0" >
        <div id="my-message" class="d-flex my-1">
            <div class="d-flex flex-wrap col-sm-9 col-md-10 col-11">
                <div class="d-flex col-12 align-items-center justify-content-start">
                    <p class="my-0">{{message.message}}</p>
                </div>
                <div class="d-flex col-12 align-items-center justify-content-start">
                    <p class="my-0">{{message.date}}</p>
                </div>
            </div>
            <div class="col-sm-3 col-md-2 col-1 d-flex justify-content-end">
                <div>
                    <img height="75" width="75" src="https://images.daznservices.com/di/library/GOAL/6a/bf/lionel-messi-barcelona-2020-21_fsb9c37x37x01vkxip76akyp8.jpg?t=1561199177&quality=100" alt="">
                </div>
            </div>
        </div>
        <div id="response-message" class="d-flex bg-light my-1 col-12">
                <div class="col-xs-4 col-sm-3 col-md-2 col-lg-1 col-4 d-flex justify-content-start px-0">
                        <img height="75" width="75" :src="userPic" alt="">
                </div>
                <div class="d-flex flex-wrap col-xs-7 col-sm-8 col-md-9 col-10 px-0">
                    <div class="d-flex col-12 align-items-center justify-content-start">
                        <p class="my-0 px-0">I want you to stay in FC Barcelona</p>
                    </div>
                    <div class="d-flex col-12 align-items-center justify-content-start">
                        <p class="my-0">{{message.date}}</p>
                    </div>
                </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props:["message"],
    computed:{
        userPic(){
            let user = this.$store.getters.getUserById(this.$route.params.id);
            return user.userInfo.picture.large;
        },
    }
}
</script>

<style scoped>
img{
    border-radius: 50%;
}
#my-message{
    background-color: #CAE5FF;
}
</style>