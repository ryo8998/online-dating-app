<template>
    <div id="main-container" class="container-fluid mt-2 h-75" >
        <div id="message-container" class="h-100" ref="messageContainer">
            <my-message v-for="message in getMessageById" :key="message.message" :message="message"></my-message>
        </div>
        <div class="input-group my-1">
            <input @keyup.enter="sendMessage()" v-model="inputMessage" type="text" class="form-control" placeholder="message" aria-label="message" aria-describedby="button-addon">
            <div class="input-group-append">
                <button  @click="sendMessage()" class="btn btn-outline-secondary" type="button" id="button-addon2">送信</button>
            </div>
        </div>
    </div>
</template>
<script>
import MyMessage from '../components/MyMessage.vue'
export default {
    components:{MyMessage},
    data:function(){
        return {
            inputMessage:""
        }
    },
    methods:{
        sendMessage(){
            const messageDate = new Date();
            this.$store.commit("setMessages",{
                id:this.$route.params.id,
                message:{
                    message:this.inputMessage,
                    date: messageDate.toLocaleDateString() + " " + messageDate.toLocaleTimeString(),
                }
            }
        )
        this.inputMessage = "";
        },
    },
    computed:{
        getMessageById(){
            let messages = this.$store.getters.getMessageById(this.$route.params.id);
            return messages ? messages.message: [];
        }
    },
    updated:function(){
            let target = this.$refs.messageContainer;
            target.scrollTop = target.scrollHeight
    }
}
</script>
<style scoped>

.input-group {
    position: absolute;
    bottom:5%;
    offset: auto;
    width:97%;
}
#message-container{
    overflow: auto;
}
</style>