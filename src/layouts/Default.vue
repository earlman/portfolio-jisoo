<template>
	<div class>
		<transition name="fade" appear>
			<main>
				<div class="left">
					<Header />
					<slot name="left">Left Slot</slot>
				</div>
				<div class="right">
					<Header />
					<slot name="right">Right Slot</slot>
				</div>
			</main>
		</transition>

		<!-- <footer></footer> -->
		<div class="background-color"></div>
	</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Header from "~/components/Header.vue";

export default {
	props: {
		showLogo: { default: true }
	},
	components: {
		Logo,
		Header
	}
};
</script>

<style lang="sass" scoped>
// took off 'scoped' in order to style parent files

.fade-enter-active 
  transition: opacity .8s

.fade-enter 
  opacity: 0


.layout
    display: flex
    flex-direction: column

main
    display: grid
    grid-template-columns: 1fr
    align-content: stretch

    @include landscape
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))

    &>div
        display: flex
        flex-direction: column       

.right
    background-color: var(--color-N400)
    height: 100vh
    overflow: auto

</style>
