export default{
    state:{
        users:[],
    },
    mutations:{
        setAllUsers(state,payload){
            if(state.users.length!==0) return;
            state.users = payload;
          },
    },
    actions:{
        fetchUsers(context){
            fetch("https://randomuser.me/api/?results=100").then(response=> response.json()).then(data=>{
              let users = [];
              for(let result of data.results){
                let user = {
                  id:result.login.uuid,
                  userInfo:{
                    name:result.name,
                    gender:result.gender,
                    email:result.email,
                    dob:result.dob,
                    picture:result.picture,
                    cell:result.cell,
                    state:result.location.state,
                  }
                };
                users.push(user);
              }
              context.commit("setAllUsers",users);
            })
          }
    },
    getters:{
        getUserById(state){
            return id => {
              return state.users.find(user => user.id === id);
            }
          },
          getUserInfoForList(state){
            return state.users.map(ele=> {
              return {id:ele.id,
                      age:ele.userInfo.dob.age,
                      userName:ele.userInfo.name,
                      picture:ele.userInfo.picture.large,
                      gender:ele.userInfo.gender,
                    }
            })
          },
    }

}