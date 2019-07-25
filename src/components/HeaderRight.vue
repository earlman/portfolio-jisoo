<template>
	<div class="header-container">
		<header>
			<nav class="main_nav" :class="{darktext: darktext }">
				<ul>
					<li>
						<g-link to="/about" active-class="active">about</g-link>
					</li>
					<li>
						<g-link to="/work" active-class="active">work</g-link>
					</li>
					<li>
						<g-link to="/contact" active-class="active">contact</g-link>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<script>
import Logo from "~/../img/logo.svg";

export default {
	props: {
		darktext: {
			type: Boolean,
			default: false
		}
	},
	components: {
		Logo
	}
};
</script>

<style lang="sass" scoped>

.header-container
    position: sticky
    top: 0
    width: 100%
    // background-color: var(--color-N400)
    grid-column: 1/-1


header
    display: flex
    max-height: 100px

    @include portrait
        justify-content: center

.main_nav  
    width: 100%

    ul
        list-style-type: none
        height: 100%
        display: flex
        justify-content: flex-end
        padding: 0

    li
        flex-grow: 1
        max-width: 16ch

    a   
        @include transition
        @include text(lg)
        color: var(--color-text-b-l)
        font-weight: 300
        opacity: .7


        // &:hover
        //     font-weight: 400
        
        &:hover
            opacity: 1

        &.active
            font-weight: 700
            opacity: 1

    &.darktext
        a
            color: var(--color-text-h)

</style>