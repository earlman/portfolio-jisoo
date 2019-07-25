<template>
	<Layout>
		<div slot="left">
			<button @click="changeDisplay(`weekday`)">weekday</button>
			<button @click="changeDisplay(`weekend`)">weekend</button>
		</div>
		<div slot="right">
			<div v-for="page in pages" :key="page.id" class="display-area">
                <div v-for="path in page.img_path" :key="path.id">
				    <FeatureImage :img_path="path" v-if="page.name==current_page" />
                </div>

				<!-- <FeatureImage :img_path="page.img_path" v-if="page.name==current_page"></FeatureImage> -->
			</div>
		</div>
	</Layout>
</template>

<script>
import FeatureImage from "~/components/FeatureImage";

export default {
	data() {
		return {
			current_page: "weekday",

			pages: [
				{
					name: "weekday",
					img_path: ["/detail_page/lashes-1.jpg", "/detail_page/lashes-2.jpg"]
				},
				{
					name: "weekend",
					img_path: ["/detail_page/lashes-2.jpg"]
				}
			]
		};
	},
	components: {
		FeatureImage
	},
	methods: {
		changeDisplay(input) {
			this.current_page = input;
		}
	}
};
</script>

<style lang="sass" scoped>


</style>