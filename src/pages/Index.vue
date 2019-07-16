<template>
	<Layout :show-logo="true">
		<!-- Author intro -->
		<Author :show-title="true" />
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
