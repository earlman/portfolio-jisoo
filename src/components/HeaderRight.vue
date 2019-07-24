<template>
	<div class="header-container">
		<header>
			<nav class="main_nav">
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
    max-width: 700px
    display: flex
    justify-content: center
    max-height: 90px

.main_nav  
    width: 100%


    ul
        list-style-type: none
        height: 100%
        display: flex
        justify-content: center
        padding: 0

    li
        flex-grow: 1        

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


</style>