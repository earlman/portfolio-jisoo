<template>
	<div class="layout">
		<Header />
		<transition name="fade" appear>
			<main>
				<div class="left">
					<slot name="left">Left Slot</slot>
				</div>
				<div class="right">
					<slot name="right">Right Slot</slot>
				</div>
			</main>
		</transition>

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

<style lang="sass">
// took off 'scoped' in order to style parent files

.fade-enter-active 
  transition: opacity .8s

.fade-enter 
  opacity: 0


.layout
    display: grid
    grid-template-columns: 1fr 1fr
    // 'auto' sets the header and footer to content height, 1fr stretches the middle area
    grid-template-rows: auto 1fr auto
    height: 100vh
    width: 100vw
    max-width: 100% //fixes problem with horizontal scrollbar appearing

    @include portrait
        grid-template-columns: 1fr


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

        @include landscape
            grid-row: 1/-1
            grid-column: 2
            background-color: var(--color-N400)
            z-index: -1

main 
    display: grid
    grid-template-columns: 1fr
    flex-wrap: wrap
    justify-content: center
    flex-grow: 1


    @include landscape
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))


    &>div
        min-width: 250px
        max-width: 700px
        margin: var(--space-md)
        flex-grow: 1
        flex-basis: 50vw
        display: flex
        justify-content: center

.left
    &>div
        display: flex
        flex-direction: column
        justify-content: center


.right
    

    &>div
        display: flex
        flex-direction: column
        justify-content: center



</style>
