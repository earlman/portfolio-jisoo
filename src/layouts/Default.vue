<template>
	<div>
		<transition name="fade" appear>
			<main>
				<div class="left">
					<HeaderLeft />
					<div class="content-area">
						<slot name="left">Left Slot</slot>
					</div>
				</div>
				<div class="right" :class="{ background : cover }">
					<HeaderRight />
					<div class="content-area">
						<slot name="right">Right Slot</slot>
					</div>
				</div>
			</main>
		</transition>

		<!-- <footer></footer> -->
		<div class="background-color"></div>
	</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import HeaderLeft from "~/components/HeaderLeft.vue";
import HeaderRight from "~/components/HeaderRight.vue";

export default {
	props: {
		cover: { type: Boolean, default: false }
	},
	components: {
		Logo,
		HeaderLeft,
		HeaderRight
	}
};
</script>

<style lang="sass" scoped>
// took off 'scoped' in order to style parent files

.fade-enter-active 
    transition: opacity .6s ease-out

.fade-enter 
    opacity: 0



main
    display: grid
    grid-template-columns: 1fr
    align-content: stretch
    min-height: 100vh

    // max-height: 100vh
    // overflow: hidden

    @include landscape
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
        

.left
    display: grid      
    grid-template-columns: 1fr minmax(250px, 700px)
    grid-template-rows: auto 1fr
    max-height: 100vh

    @include landscape
        position: sticky
        top: 0

    .content-area
        grid-row: 2
        grid-column: 2
        align-self: center

.right
    background-color: var(--color-N400)
    display: grid
    // height: 100vh
    // overflow: auto
    grid-template-columns: minmax(250px, 700px) 1fr
    grid-template-rows: auto 1fr

    .content-area
        width: 100%
        grid-row: 2
        grid-column: 1

.content-area
    padding: 5vw
    align-self: center
    width: 100%

// TODO: make conditional class
.background
    background: url('/cover_photo.jpg') no-repeat
    background-size: auto 100%
    background-position: left


</style>
