<template>
    <div>
        <article class="message-box">   
            <h1>404</h1>
            <p>Page not found</p>
            <aside class="buttons-con">
                <article class="action-link-wrap">
                    <a onclick="history.back(-1)" class="link-button link-back-button">Go Back</a>
                    <a href="" class="link-button">Go to Home Page</a>
                </article>
            </aside>
        </article>
    </div>
</template>
<script>
export default {
    name: 'PagenotFound',
}
</script>
<style scoped>
div{
    background: #EEC373;
}
.message-box {
  height: 200px;
  width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: 50px;
  font-weight: 300;
}
.message-box h1 {
  font-size: 60px;
  line-height: 46px;
  margin-bottom: 40px;
}
.buttons-con .action-link-wrap {
  margin-top: 40px;
}
.buttons-con .action-link-wrap a {
  background: #EEC373;
  padding: 8px 25px;
  border-radius: 4px;
  color: #FFF;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s linear;
  cursor: pointer;
  text-decoration: none;
  margin-right: 10px
}
.buttons-con .action-link-wrap a:hover {
  background: #5A5C6C;
  color: #fff;
}
@keyframes float {
	100% {
    transform: translateY(20px);
  }
}
</style>