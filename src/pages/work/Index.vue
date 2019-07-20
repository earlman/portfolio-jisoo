<template>
	<Layout class="projects">
		<div slot="left">
			<h1>work</h1>
			<ul>
				<g-link to="/work/graphic-design">
					<li>+graphic design</li>
				</g-link>
				<g-link to="/work/email-templating">
					<li>+email templating</li>
				</g-link>
				<g-link to="/work/instagram-management">
					<li>+instagram management</li>
				</g-link>
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