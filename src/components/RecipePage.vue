<template>
    <div>
        <div class="content">
          <figure class="left-video"><img src="../../public/img/latte.png" alt="Coffee Cup"></figure>
            <div class="right-side">
          <h2>Famous Coffees</h2>
                <div class="container">
  <div class="bar">
    <div class="bold"><h3>Bold</h3></div>
    <div class="circle top"></div>
    <div class="circle middle"></div>
    <div class="circle bottom"></div>
    <div class="creamy"><h3>Creamy</h3></div>
  </div>
  <div class="coffee-cups">
    <div class="cup-small doppio">
      <div class="handle"></div>
    </div>
    <div class="cup americano">
      <div class="handle"></div>
    </div>
    <div class="cup-small macchiato">
      <div class="handle"></div>
    </div>
    <div class="cup-small flatwhite">
      <div class="handle"></div>
    </div>
    <div class="cup cappuccino">
      <div class="handle"></div>
    </div>
    <div class="cup-long latte">
      <div class="handle"></div>
      <div class="bottom-handle"></div>
    </div>
  </div>
  <div class="info">
    <div class="first">
      <h1>Doppio</h1>
      <p>Double shot of espresso. Straight.</p>
    </div>
    <div class="second">
      <h1>Americano</h1>
      <p>Shots of espresso diluted with water</p>
    </div>
    <div class="third">
      <h1>Macchiato</h1>
      <p>Espresso with a dash of frothy foamed milk.</p>
    </div>
    <div class="fourth">
      <h1>Flat White</h1>
      <p>Double shot of espresso with steamed milk.</p>
    </div>
    <div class="fifth">
      <h1>Cappuccino</h1>
      <p>Double shot of espresso topped with an airy thick layer of foamed milk.</p>
    </div>
    <div class="sixth">
      <h1>Caffe Latte</h1>
      <p>A shot of espresso in steamed milk lightly topped with foam.</p>
    </div>
    
  </div>
</div>

<div class="key">
  <div class="circle espresso"><p class="small">espresso</p></div>
  <div class="circle milk"><p class="small">steamed milk</p></div>
  <div class="circle foam"><p class="small">milk foam</p></div>
  <div class="circle water"><p class="small">water</p></div>
</div>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    name: 'RecipePage',
}
</script>
<style scoped>
h2{
    font-family: 'Great Vibes', cursive;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10vh;
    font-size: 2.3em;
}
.content{
  background: #ffc99f;
}
.right-side{
    margin-left: 10%;
    background: #C69B7B;
    display: flex;
    flex-direction: column;
}
html{
  display: grid;
  min-height: 100%;
}
body{
  display: grid;
  text-transform: uppercase;
}

h3{
  font-size: 0.8em;
  letter-spacing: 1px;
  font-weight: 100;
}
img{
    width: 100%;
    filter: brightness(130%);
}
figure{
    width: 20%;
    position: absolute;
    left: 5%;
    bottom: 25%;
}
.container {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 500px;
  height: 140vh;
}
.bar {
  position: absolute;
  height: 85%;
  width: 2px;
  left: 7%;
  top: 7.5%;
  background:#F4E8DA;
}
.circle {
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 50%;
  left: -5px;
  border: 1px solid#F4E8DA;
  box-shadow: 0px 0px 7px rgba(#F4E8DA, 100%);
}
.top {
  background:#5B4644;
  top: -1%;
}
.middle {
  background: #87624F;
  top: 38%;
}
.bottom {
  background:#DAB7A3;
  bottom: -1%;
}
.bold {
  color: white;
  font-size: 1.5em;
  position: absolute;
  top: -7%;
  left: -17px;
}
.creamy {
  color:white;
  font-size: 1.5em;
  position: absolute;
  bottom: -7%;
  left: -27px;
}
.info {
  width: 55%;
  height: 100%;
  position: absolute;
  left: 43%;
}
.coffee-cups {
  width: 40%;
  height: 100%;
  position: absolute;
  left: 10%;
  top: 3%;
}
.handle {
  position: absolute;
  height: 20px;
  width: 15px;
  background: transparent;
  border-radius: 50% 30%;
  left: 95%;
  top: 10%;
  z-index: -1;
  border: 2px solid#F4E8DA;
}

.cup {
  position: absolute;
  width: 70px;
  height: 55px;
  background:#252C32;
  border: 2px solid#F4E8DA;
  border-radius: 0 0 5rem 5rem;
  left: 20%;
}

.cup-small {
  position: absolute;
  width: 55px;
  height: 40px;
  background:#252C32;
  border: 2px solid#F4E8DA;
  border-radius: 0 0 5rem 5rem;
  left: 23%;
}

.cup-long {
  position: absolute;
  width: 60px;
  height: 70px;
  background:white;
  border: 2px solid#F4E8DA;
  border-radius: 10% 10% 50% 50%;
  left: 22%;
}

.doppio {
  top: 5%;
  background: linear-gradient(to bottom,  #C69B7B 40%,#5B4644 40%, #87624F 70%);
}

.americano {
  top: 18.5%;
  background: linear-gradient(to bottom, #C69B7B 13%,#859FB5 13%,#859FB5 50%, #87624F 50%);
}

.macchiato {
  top: 35%;
   background: linear-gradient(to bottom,#C69B7B 20%,#F4E8DA 20%,#F4E8DA 40%, #87624F 40%);
}

.flatwhite {
  top: 50%;
  background: linear-gradient(to bottom,#C69B7B 10%,#F4E8DA 10%,#DAB7A3 60%, #87624F 65%,#5B4644 90%);
}

.cappuccino {
  top: 64%;
  background: linear-gradient(to bottom,#F4E8DA 20%,#DAB7A3 50%,#DAB7A3 55%, #87624F 60%);
}

.latte {
  top: 81%;
  background: linear-gradient(to bottom,white 5%,#F4E8DA 5%,#F4E8DA 30%,#DAB7A3 30%,#DAB7A3 70%, #87624F 70%);
}


h1 {
  color: #4f4f4d;
  font-size: 1em;
  letter-spacing: 3px;
}

p {
  color:#4f4f4d;
  text-transform: none;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  margin-top: -5px;
}

.first, .second, .third, .fourth, .fifth, .sixth {
  position: absolute;
}

.first {
  top: 7%;
}

.second {
  top: 21%;
}

.third {
  top: 36%;
}

.fourth {
  top: 52%;
}

.fifth {
  top: 65%;
}

.sixth {
  top: 83%;
}

.small {
  margin-left: 20px;
  margin-top: -1px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.key {
  position: relative;
  margin: auto;
  width: 500px;
  height: 200px;
}

.espresso {
  background:#5B4644;
  position: absolute;
  left: 17%;
}

.milk {
  background:#DAB7A3;
  position: absolute;
  left: 40%;
}

.foam {
  background:#F4E8DA;
  position: absolute;
  left: 63%;
}

.water {
  background:#859FB5;
  position: absolute;
  left: 83%;
}

</style>