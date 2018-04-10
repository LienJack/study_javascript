<template>
  <div class="wrap">
      <div class="box">
          <ul class="box-content">
              <li v-for="(item, index) in items" :key="index" :class="item.classname"><h1>{{item.page}}</h1></li>
          </ul>
      </div>
      <!-- 用来测试 -->
      <div class="btn">
        <button @click="pre">pre</button>
        <button @click="next" >next</button>
      </div>
  </div>
</template>

<script>
export default {
  name:'imgMove',
  data:function(){
    return{
      items:[
        {
          page:1,
          classname:"img1"
        },
         {
          page:2,
          classname:"img2"
        },
         {
          page:3,
          classname:"img3"
        },
        {
          page:4,
          classname:"img4"
        }
      ]
    }
  },
  methods:{
    next(){
      console.log("next");
    },
    pre(){
      console.log("pre");
    }
  }
}
</script>

<style>
  .btn{
    zoom:1;
    position: absolute;
    bottom: 20%;
    left: 45%;
  }
  ul,li{
    list-style: none;
    padding: 0px;
    margin: 0px;
    }
  .box-content{
    width:667px;
    height: 375px;
    overflow: hidden;

  }
  .box-content li{
    display:inline-block;
    width: 667px;
    height: 375px;
  }
  .img1{
    background-color: red;
  }

  .img2{
    background-color: blue;
  }

  .img3{
    background-color: green;
  }

   .img4{
    background-color: yellow;
  }
</style>
