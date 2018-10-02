<template>
    <div class="content">
        <a @click="decreaseDay" class="left"></a><h1 class="time">{{year}}年{{month}}月{{day}}日</h1><a  class="right"  @click="addDay"></a>
    </div>
</template>

<script>
    export default {
        name: "dd",
        data(){
            return{
                timestamp:'',
                day:'',
                month:'',
                year:'',
            }
        },

        //钩子函数，加载完成执行
        mounted: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered
                this.timestamp = new Date().getTime();
                this.inverter()
            })
        },

        methods:{
            // 转换器，时间戳转成日期
            inverter: function () {
                this.day = new Date(this.timestamp).getDate();
                this.month = new Date(this.timestamp).getMonth() + 1;
                this.year = new Date(this.timestamp).getFullYear();
            },
            addDay:function(){
                this.timestamp +=(1000*60*60*24)
                this.inverter()
            },
            decreaseDay:function() {
                this.timestamp -=(1000*60*60*24)
                this.inverter()
            },
        }
    }
</script>

<style scoped>
    .content{
        display: flex;
        justify-content: space-around;
    }
    .content a{
        font-size: 14px;
        height: 32px;
        width:32px;
        background-image: url('../../public/img/icons/day-.png');
    }
    .content .right{
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
    }

</style>
