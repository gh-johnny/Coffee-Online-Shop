<template>
    <div>
        <div class="left-side">
            <figure class="left-video"><video src="../../public/video/Home-video.mp4" autoplay loop></video></figure>
        </div>
        <div class="content">
            <div class="right-side">
                <h2>Membership Joining Page</h2>
                <img src="../../public/img/Coffee++Logo.png" alt="">       
                <button @click="joinMember">Join</button>
                <button>not Now</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MemberShip",
    data(){
        return{
            logedUser:JSON.parse(sessionStorage.getItem('logeduser')),
        }
    },
    methods: {
        joinMember(){
            this.logedUser.membership = true;
            this.logedUser.point = 0;
            sessionStorage.setItem('logeduser',JSON.stringify(this.logedUser))
            this.$router.push({name:'products-page'});
        }
    }
}
</script>