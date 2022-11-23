<template>
    <div>
        <div class="left-side">
            <figure class="left-video"><video src="../../public/video/Home-video.mp4" autoplay loop></video></figure>
        </div>
        <div class="content">
            <div class="right-side">
                <h2>Home Page</h2>
                <img src="../../public/img/Home-videoPic.png" >
                <img src="../../public/img/Home-videoPic.png" >
                                <img src="../../public/img/Home-videoPic.png" >
                                                
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    methods:{
        pageMaker(){
            this.$emit('pageMarker', 'Home');
        }
    },
    mounted(){
        this.pageMaker()
    }

}
</script>
<style>
  
</style>