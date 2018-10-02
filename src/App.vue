<template>
  <div id="app">
    <div id="nav">
        <router-link to ="/index">报餐</router-link>
        <div class="day">
            <day></day>
        </div>
    </div>
    <router-view/>

  </div>
</template>

<script>
    import  day from '@/components/Datecp.vue'
    export default {
        name:'app',
        components:{
            day
        }
    }
</script>

<style>
  *{
    margin: 0;
    padding:0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
  height:667px;
  width:375px;

  display:flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: "宋体";
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a:-webkit-any-link {
    cursor: pointer;
  }

</style>
