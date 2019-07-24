<template>
	<Layout class="graphic-design">
		<div slot="left">
			<h1>+graphic design</h1>
			<p>I direct and organize photoshoots for the social media profiles, edit the photographs, and schedule posts.</p>
			<p>I plan montly sales plans and set weekly email campaigns.</p>
		</div>
		<div slot="right">
			<FeatureImage ></FeatureImage>
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