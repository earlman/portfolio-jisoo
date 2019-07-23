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
    width: 6rem

    svg
        width: 100%
        height: auto

        path
            fill: var(--color-N500)

.header-container
    position: sticky
    width: 100%
    top: 0
    // background-color: var(--color-N400)

    grid-column: 1/-1

header
    max-width: 700px
    display: flex
    justify-content: center
    align-content: center
    max-height: 90px

</style>