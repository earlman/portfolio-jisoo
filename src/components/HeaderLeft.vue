<template>
	<div class="header-container">
		<header>
			<div class="logo">
				<g-link to="/">
					<Logo viewBox="0 0 1798 726" />
				</g-link>
			</div>
		</header>
	</div>
</template>

<script>
import Logo from "~/../img/logo.svg";

export default {
	components: {
		Logo
	}
};
</script>

<style lang="sass" scoped>

.logo
    width: 8rem

    svg
        width: 100%
        height: auto

        path
            fill: var(--color-N500)

.header-container
    position: sticky
    top: 0
    // background-color: var(--color-N400)


header
    width: 100%
    display: flex
    justify-content: space-between
    align-content: center

.main_nav

    
    ul
        list-style-type: none
        display: flex
        place-items: center
        height: 100%

    li
        @include space-inline(4rem)

    a   
        @include text(lg)
        color: var(--color-text-b-l)
        font-weight: 300
        opacity: .7
        transition: all 0.4s ease


        // &:hover
        //     font-weight: 400
        
        &:hover
            opacity: 1

        &.active
            font-weight: 700
            opacity: 1


</style>