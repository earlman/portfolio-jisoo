<template>
	<div class="feature-image">
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
		}
	}
};
</script>

<style lang="sass" scoped>

.feature-image
    
    img
        border-radius: 3px
        max-width: 100%

</style>