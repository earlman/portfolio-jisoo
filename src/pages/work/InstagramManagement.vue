<template>
	<Layout class="instagram-management">
		<div slot="left">
			<h1>instagram management</h1>
			<p>I manage the Instagram page for iKateHouse.com. I research and analyze trends for social media accounts and also take note of which posts do well. I then gather inspiration from other similar accounts to plan how I want to take images. I look at the angle at which the photo is taken, certain backgrounds, and shadows. Then I go through our inventory and see which items can be marketed through Instagram and request the items for the photoshoot.</p>
			<p>We have a photoshoot once a week and take images for one week’s worth of posts. I direct the photoshoot and arrange the items and tell the photographer which angle I want the shot taken. Then I sort through the images and crop them to size and edit the images for uploading.</p>
			<p>I also plan weekly giveaways for our followers and often times advertise certain sale promotions on the account as well.</p>
			<g-link to="/work/">
				<button class="button-back">back to "work"</button>
			</g-link>
		</div>
		<div slot="right">
			<FeatureImage img_path="/instagram.jpg"></FeatureImage>
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

<style lang="scss" scoped>
</style>