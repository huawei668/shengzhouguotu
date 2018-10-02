<template>
	<div class="lunch">
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
        name: 'lunch',
        data:function () {
            return{
                footList:['产品一','产品二','产品三','产品四'],
                footImg:['图片一','图片二','图片三','图片三']
            }
        },
    }

</script>

<style>

</style>
