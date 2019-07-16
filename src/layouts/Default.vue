<template>
	<div>
		<header>
			<slot name="header">TODO: this should be moved to own component</slot>
		</header>
		<main>
			<div class="left">
				<slot>Default Slot</slot>
			</div>
			<div class="right">
				<slot name="right"></slot>
			</div>
		</main>
		<footer>
			<slot name="footer">TODO: this should be moved to own component</slot>
		</footer>
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
main {
	display: flex;
	justify-content: center;
}

.left {
	width: 50vw;
}
.right {
	width: 50vw;
}

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
