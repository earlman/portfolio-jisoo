<template>
	<Layout>
		<div class="left"></div>
		<h1>hello</h1>
		<p>I'm Jisoo and I design things.</p>
	</Layout>
</template>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
	components: {
		Author,
		PostCard
	},
	metaInfo: {
		title: "Hello, world!"
	}
};
</script>
