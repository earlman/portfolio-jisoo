<template>
	<div class="header-container">
		<header>
			<div class="logo">
				<Logo viewBox="0 0 1798 726" />
			</div>
			<nav class="main_nav">
				<ul>
					<li>about</li>
					<li>projects</li>
					<li>contact</li>
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

.logo
    width: 8rem

    svg
        width: 100%
        height: auto

        path
            fill: var(--color-N500)

.header-container
    @include grid-template
    // background-color: var(--color-N400)


header
    @include grid-full
    display: flex
    justify-content: space-between
    align-content: center

.main_nav
    @include text(lg)
    
    ul
        list-style-type: none
        display: flex
        place-items: center
        height: 100%

    li
        @include space-inline(4rem)
        color: var(--color-text-b-l)
        font-weight: 300

</style>