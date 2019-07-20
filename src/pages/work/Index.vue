<template>
	<Layout class="projects">
		<div slot="left">
			<h1>work</h1>
			<ul>
				<li>+graphic design</li>
				<li>+marketing</li>
				<li>+photography</li>
			</ul>
		</div>
	</Layout>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

li
    @include text(xl)
    font-weight: 500
    list-style-type: none
    color: var(--color-N070)
    
ul
    padding: 0

</style>