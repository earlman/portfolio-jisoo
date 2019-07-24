<template>
	<div class="feature-image" :class="{ cover: cover }">
		<img :src="img_path" :alt="alt" />
	</div>
</template>

<script>
export default {
	props: {
		img_path: {
			type: String,
			default: "/instantglam-nude-natural.jpg"
		},
		alt: {
			type: String,
			default: "feature image"
		},
		cover: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="sass" scoped>

.feature-image
    img
        border-radius: 5px
        max-width: 100%

.cover


</style>