<template>
	<Layout class="index">
		<div slot="left"></div>
		<div slot="right">
			<div class="button-container">
				<div class="button-large">graphic design</div>
				<div class="button-large">instagram</div>
				<div class="button-large">email campaign</div>
			</div>
			<!-- <g-image src="~/../img/cover.jpg" width="800"></g-image> -->
		</div>
	</Layout>
</template>

<script>
export default {
	components: {},
	metaInfo: {
		title: "I Design Graphics"
	}
};
</script>

<style lang="sass" scoped>

.button-container
    display: flex
    flex-direction: column
    align-items: center

.button-large
    @include space-stack(3rem)
    @include space-squish(4rem)
    @include text(xl)
    border: 5px solid var(--color-text-b-l)
    display: inline-block
    border-radius: 2px
    width: 25ch
    text-align: center
    color: white

</style>
