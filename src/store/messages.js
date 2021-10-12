export default{
    state:{
        messages:[],
    },
    mutations:{
        setMessages(state,payload){
            let targetObj = state.messages.find(ele=>ele.id===payload.id);
            if(targetObj){
              targetObj.message.push(payload.message);
            }else{
              state.messages.push({
                id:payload.id,
                message:[payload.message]
              });
            }
          }
    },
    getters:{
        getMessageById(state){
            return id => {
                return state.messages.find(ele => ele.id === id)
                }
            },
        getMessages(state){
        return () => state.messages;
        }
    }
}