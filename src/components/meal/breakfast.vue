<template>
	<div class="breakfast">
		<ul>
			<li v-for="foot in footList">
				<img src="#" alt="">
				<p>{{foot}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: 'breakfast',
		data:function () {
			return{
                footList:['产品一','产品二','产品三','产品四'],
                footImg:['图片一','图片二','图片三','图片三']
			}
        },
    }

</script>

<style>
    .breakfast{
        width:100%;
        heigth:100%;
    }
    .breakfast>ul{
        width: 100%;
        display:flex;
        justify-content: space-between;
        flex-wrap:wrap;


    }
    .breakfast>ul>li{
        width:30%;
        list-style:none;
    }
</style>
