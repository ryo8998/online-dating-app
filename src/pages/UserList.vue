<template>
    <div class="card-deck">
        <div class="d-flex col-12 flex-wrap my-2">
            <div class="d-flex col-sm-6 col-md-4 justify-content-center my-2">
                <div >
                    <label for="gender-select" class="mx-2">Filter:</label>
                </div>
                <div>
                    <select id="gender-select" class="form-select col-12" aria-label="Default select example" v-model="selectedGender">
                        <option v-for="ele in gender" :key="ele" >{{ele}}</option>
                    </select>
                </div>
            </div>
            <div class="d-flex col-sm-6 col-md-4 justify-content-center my-2">
                <div>
                    <label for="gender-select" class="mx-2">Sort:</label>
                </div>
                <div>
                    <select id="sort-age" class="form-select col-12" aria-label="Default select example" v-model="selectedSortOption">
                        <option v-for="ele in sortOption" :key="ele" >{{ele}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="d-flex flex-wrap col-12">
                <router-link  v-for="user in sortUserList"  :to="'/user-detail/'+user.id" :key="user.id" class="d-flex col-sm-6 col-md-4 justify-content-center my-2"> 
                    <user-card :user="user" ></user-card>
                </router-link>
            </div>
        </div>
        
   
</template>

<script>
// import { mapGetters } from "vuex"
import UserCard from "../components/UserCard.vue"
export default {
    components:{UserCard},
    data:function(){
        return {
            gender:["Select gender","Male","Female"],
            selectedGender:"Select gender",
            sortOption:["Sort by","Age"],
            selectedSortOption:"Sort by",
        }
    },
    name:"UserList",
    created:function(){
        this.$store.dispatch("fetchUsers")
    },
    computed:{
        getUserInfoForList:function(){
            return this.$store.getters.getUserInfoForList;
        },
        filterUserList:function(){
            if(this.selectedGender==="Select gender") return this.getUserInfoForList;
            return this.getUserInfoForList.filter(ele=>ele.gender===this.selectedGender.toLowerCase());
        },
        sortUserList:function(){
            if(this.selectedSortOption === "Sort by") return this.filterUserList;
            return this.filterUserList.slice().sort((a,b)=> a.age - b.age);
        }
    }
}
</script>