<template>
	<Layout class="email">
		<div slot="left">
			<h1>+email design</h1>
		</div>
		<div slot="right">
			<FeatureImage img_path="/code.png"></FeatureImage>
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