<template>
	<Layout class="contact">
		<div slot="left">
			<div class="headers">
				<h1>contact</h1>
				<h2 class="landscape">email</h2>
				<h2 class="landscape">phone number</h2>
				<h2 class="landscape">instagram</h2>
			</div>
		</div>
		<div slot="right">
			<div class="info">
				<h1>me</h1>
				<h2>jisoohuh@gmail.com</h2>
				<h2>224.522.5587</h2>
				<h2>@jisoohuh</h2>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>



.headers
    &>*
        @include space-stack(var(--space-md))

    @include landscape
        text-align: right


.info
    &>*
        @include space-stack(var(--space-md))
        
    h1, h2, p
        color: var(--color-text-b-l)

.landscape
    @include portrait
        display: none

</style>