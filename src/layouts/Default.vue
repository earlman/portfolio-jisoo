<template>
	<div class="layout">
		<Header />
		<main>
			<div class="left">
				<slot name="left">Left Slot</slot>
			</div>
			<div class="right">
				<slot name="right">Right Slot</slot>
			</div>
		</main>
		<footer></footer>
		<div class="background-color"></div>
	</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";
import Header from "~/components/Header.vue";

export default {
	props: {
		showLogo: { default: true }
	},
	components: {
		Logo,
		ToggleTheme,
		Header
	}
};
</script>

<style lang="sass" scoped>

.layout
    display: grid
    grid-template-columns: 1fr 1fr
    // 'auto' sets the header and footer to content height, 1fr stretches the middle area
    grid-template-rows: auto 1fr auto
    height: 100vh

    .header-container
        grid-row: 1
        grid-column: 1/-1

    main
        grid-row: 2
        grid-column: 1/-1

    footer
        grid-row: 3
        grid-column: 1/-1

    .background-color
        grid-row: 1/4
        grid-column: 2
        background-color: var(--color-N400)
        z-index: -1

main 
    display: flex
    flex-wrap: wrap
    justify-content: center
    flex-grow: 1

    &>div
        min-width: 400px
        max-width: 700px
        margin: var(--space-md)
        flex-grow: 1
        flex-basis: 50vw
        display: grid
        place-items: center

.left
    // background-color: var(--color-R400)
    opacity: .8

.right
    // background-color: var(--color-Y400)
    opacity: .8

    *
        color: white


</style>
