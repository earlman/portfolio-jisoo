<template>
	<Layout>
		<div slot="header">This is the Header</div>
		<div slot="main">
			<h1>hello</h1>
		</div>
		<div slot="footer">This is the Footer</div>
		<div slot="right">
			<p>Should show up on the right</p>
			<g-image src="~/../img/cover.jpg" width="800"></g-image>
		</div>

		<p>I'm Jisoo and I design things. This should show up in the default location (the left)</p>
	</Layout>
</template>

<script>
export default {
	components: {},
	metaInfo: {
		title: "I Design Graphics"
	}
};
</script>
