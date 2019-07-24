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
		<div slot="right">
			<div class="button-container">
				<div class="button-large">graphic design</div>
				<div class="button-large">instagram</div>
				<div class="button-large">email campaign</div>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

li
    @include transition
    @include text(xl)
    font-weight: 500
    list-style-type: none
    color: var(--color-N070)

    &:hover
        color: var(--color-N200)
    
ul
    padding: 0

.button-container
    display: flex
    flex-direction: column
    align-items: center

.button-large
    @include space-stack(3rem)
    @include space-squish(4rem)
    @include text(xl)
    border: 5px solid var(--color-text-b-l)
    display: inline-block
    border-radius: 2px
    width: 25ch
    text-align: center
    color: white


</style>