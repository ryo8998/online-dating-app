<template>
    <div class="container-fluid d-flex flex-wrap">
        <message-history v-for="message in getMessages" :key="message.id" :id="message.id" :message="message.message.slice(-1)[0]"></message-history>
    </div>
</template>

<script>
import MessageHistory from '../components/MessageHistory.vue'
export default {
    components:{MessageHistory},
    computed:{
        getMessages:function(){
            return this.$store.getters.getMessages()
        }
    }
}
</script>