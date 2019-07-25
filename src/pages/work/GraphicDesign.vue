<template>
	<Layout class="graphic-design" fillright>
		<div slot="left">
			<h1>graphic design</h1>
			<p>I am given projects to design detail pages for certain products that are sold on our ecommerce website. Most of the details pages are for in-house brands that we develop and sell. Some include detail pages for brands we carry. My purpose and goal for creating these detail pages is to give the consumer a better understanding of what the product is.</p>
			<p>I plan the layout of the detail pages and decide what content and images are needed to make my vision come to life.</p>
			<p>I also update our main page banners every few months to cycle images and advertise newer products.</p>
			<g-link to="/work/">
				<button class="button-back">back to "work"</button>
			</g-link>
		</div>
		<div slot="right" class="img_container">
			<FeatureImage :img_path="path" v-for="path in images" :key="path.id" />
		</div>
	</Layout>
</template>

<script>
import FeatureImage from "~/components/FeatureImage";

export default {
	data() {
		return {
			images: [
				"/graphics/lashes.jpg",
				"/graphics/60K_DAY1.jpg",
				"/graphics/60K_DAY2.jpg",
				"/graphics/60K_DAY3.jpg",
				"/graphics/60k_insta_640x640.jpg",
				"/graphics/Free50.jpg",
				"/graphics/instantglam-nailpolish_1.jpg",
				"/graphics/OStudio_concealer-new.jpg"
			]
		};
	},
	components: {
		FeatureImage
	}
};
</script>

<style lang="sass" scoped>

.img_container
    display: flex
    flex-direction: column
    

    @include landscape 
        width: 75%
        margin: auto

    &>*
        @include space-stack(var(--space-md))

</style>