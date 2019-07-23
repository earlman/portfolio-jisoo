<template>
	<NewDefault>
		<div slot="left">
			<h1>some text about stuff</h1>
		</div>
		<div slot="right">
			<FeatureImage></FeatureImage>
		</div>
	</NewDefault>
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