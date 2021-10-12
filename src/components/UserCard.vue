<template>
    <div >
        <div class="card">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><rect fill="transparent" width="50%" height="50%"/><text fill="#dee2e6" dy=".3em" x="100%" y="100%">Image cap</text><image :href="user.picture" x="0" y="0" height="100%" width="100%"/></svg>
            <div class="card-body">
                <h5 class="card-title">{{user.userName.title}} {{user.userName.first}} {{user.userName.last}}</h5>
                <p class="card-text">age:{{user.age}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'UserCard',
    props:['user'],
 
}
</script>