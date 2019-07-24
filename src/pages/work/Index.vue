<template>
	<Layout class="projects">
		<div slot="left">
			<h1>work</h1>
			<!-- <ul>
				<g-link to="/work/graphic-design">
					<li>+graphic design</li>
				</g-link>
				<g-link to="/work/email-templating">
					<li>+email templating</li>
				</g-link>
				<g-link to="/work/instagram-management">
					<li>+instagram management</li>
				</g-link>
			</ul>-->
		</div>
		<div slot="right">
			<div class="button-container">
				<g-link to="/work/graphic-design">
					<div class="button-large">graphic design</div>
				</g-link>
				<g-link to="/work/email-templating">
					<div class="button-large">instagram</div>
				</g-link>
				<g-link to="/work/instagram-management">
					<div class="button-large">email campaign</div>
				</g-link>
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

    &>*
        @include space-stack(var(--space-md))


.button-large
    @include text(xl)
    border: 5px solid var(--color-text-b-l)
    display: inline-block
    border-radius: 5px
    width: 20ch
    text-align: center
    color: white
    padding: var(--space-md)



    &:hover
        

</style>