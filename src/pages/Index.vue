<template>
	<Layout class="index" cover="true" darktext="true">
		<div slot="left">
			<h1>hello</h1>
			<h3>I'm Jisoo & I design things</h3>
		</div>
		<div slot="right">
			<!-- <FeatureImage img_path="/cover_photo.jpg" cover></FeatureImage> -->
		</div>
	</Layout>
</template>

<script>
import FeatureImage from "~/components/FeatureImage";

export default {
	components: { FeatureImage },
	metaInfo: {
		title: "I Design Graphics"
	}
};
</script>

<style lang="sass" scoped>


</style>
