<template>
	<div>
		<template slot="header">TODO: this should be moved to own component</template>
		<template slot="main"></template>
		<template slot="footer">TODO: this should be moved to own component</template>
		<p>hi</p>
	</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
	props: {
		showLogo: { default: true }
	},
	components: {
		Logo,
		ToggleTheme
	}
};
</script>

<style lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: var(--header-height);
	padding: 0 calc(var(--space) / 2);
	top: 0;
	z-index: 10;

	&__left,
	&__right {
		display: flex;
		align-items: center;
	}

	@media screen and (min-width: 1300px) {
		//Make header sticky for large screens
		position: sticky;
		width: 100%;
	}
}

.main {
	margin: 0 auto;
	padding: 1.5vw 15px 0;
}

.footer {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: calc(var(--space) / 2);
	text-align: center;
	font-size: 0.8em;

	> span {
		margin: 0 0.35em;
	}

	a {
		color: currentColor;
	}
}
</style>
