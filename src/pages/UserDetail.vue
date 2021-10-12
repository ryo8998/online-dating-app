<template>
    <div class="container d-flex justify-content-center">
        <table class="table table-bordered mt-3">
            <tbody>
                <tr>
                    <td id="image-container" colspan="2">
                        <img :src="userPic">
                        <router-link :to="'/chat/' + userId">
                            <button id="chat-button" class="btn btn-secondary">Chat Page</button>
                        </router-link>
                    </td>
                    
                </tr>
                <tr>
                    <td class="col-4">Name:</td>
                    <td class="col-8">{{userName}}</td>
                </tr>
                <tr>
                    <td class="col-4">Gender:</td>
                    <td class="col-8">{{userGender}}</td>
        
                </tr>
                <tr>
                    <td class="col-4">Day of Birth / Age:</td>
                    <td class="col-8">{{userBirthday}}</td>
                </tr>
                <tr>
                    <td class="col-4">State:</td>
                    <td class="col-8">{{userState}}</td>
                </tr>
                <tr>
                    <td class="col-4">Email:</td>
                    <td class="col-8">{{userEmail}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:"UserDetail",
    data:function(){
        return {
            user:""
        }
    },
    computed:{
        userEmail(){
            return this.user.userInfo.email;
        },
        userName(){
            let fullname = this.user.userInfo.name.first + " " + this.user.userInfo.name.last;
            return fullname;
        },
        userGender(){
            return this.user.userInfo.gender;
        },
        userBirthday(){
            let userDob = this.user.userInfo.dob.date.substring(0,10) + " / " + this.user.userInfo.dob.age;
            return userDob;
        },
        userPic(){
            return this.user.userInfo.picture.large;
        },
        userState(){
            return this.user.userInfo.state;
        },
        userId(){
            return this.user.id;
        }
    },
    created:function(){
        this.user = this.$store.getters.getUserById(this.$route.params.id);
    }

}
</script>

<style scoped>
#image-container{
    height: 50vh;
    position: relative;
}
img{
    height: 100%;
    width:auto;
}
#chat-button{
    position: absolute;
    top:90%;
    left: calc(50% - 35px);
}
</style>