<template>
	<div class="feature-image">
		<img :src="image_path" :alt="alt" />
	</div>
</template>

<script>
export default {
	props: {
		image_path: {
			type: String,
			default: "/instantglam-nude-natural.jpg"
		},
		alt: {
			type: String,
			default: "feature image"
		}
	}
};
</script>

<style lang="sass" scoped>

.feature-image
    img
        border-radius: 3px

</style>