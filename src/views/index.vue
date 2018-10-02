<template>
    <div class="container">
        <div class="fenge"></div>
        <div class="main">
            <nav>
                <router-link to="/breakfast">早餐</router-link>
                <router-link to="/lunch">中餐</router-link>
                <router-link to="/dinner">晚餐</router-link>
            </nav>
            <div class="product-content">
                <router-view></router-view>
            </div>
        </div>
        <div class="footer">
            <div>
                <div><p>更多功能</p></div>
            </div>
            <div>
                <div>
                    <img src="#" alt="">
                    <p>报餐</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="#" alt="">
                    <p>就餐</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{

        }
    }
</script>

<style scoped>
    .container{
        height: 85%;
        display:flex;
        justify-content: space-between;
        flex-direction: column;
        /*background: #f5f5f5;*/
    }
    .main{
        height:80%;
    }
    .footer{
        height:10%
    }
    .fenge{
        background: #f5f5f5;
        height:15px;
    }
    /* 导航*/
    nav{
        display:flex;
        justify-content:space-around;
        font-weight: 400;
        font-style: normal;
        font-size: 14px;

    }
    nav a{
        text-decoration: none;
        color: #555;
    }
    nav a.router-link-exact-active{
        color:rgb(255, 153, 153);
    }

    /*产品模块*/
    .product-content{
        margin-top:30px;
        width: 100%;
        height:90%;
    }


    /*footer底部*/
    .footer{
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
    }
    .footer>div{
        width:33%;
    }
    .footer>div:nth-child(1){
        width: 34%;
        color: #333333;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .footer>div:nth-child(2){
        background: #ff9999;
    }
    .footer>div:nth-child(3){
        background: #999900;
    }

</style>
