<template>
	<Layout class="graphic-design">
		<div slot="left">
			<h1>graphic design</h1>
			<p>I am given projects to design detail pages for certain products that are sold on our ecommerce website. Most of the details pages are for in-house brands that we develop and sell. Some include detail pages for brands we carry. My purpose and goal for creating these detail pages is to give the consumer a better understanding of what the product is.</p>
			<p>I plan the layout of the detail pages and decide what content and images are needed to make my vision come to life.</p>
			<p>I also update our main page banners every few months to cycle images and advertise newer products.</p>
		</div>
		<div slot="right">
			<FeatureImage></FeatureImage>
		</div>
	</Layout>
</template>

<script>
import FeatureImage from "~/components/FeatureImage";

export default {
	components: {
		FeatureImage
	}
};
</script>

<style lang="sass" scoped>
.p
    display: grid
    height: 2000px
</style>