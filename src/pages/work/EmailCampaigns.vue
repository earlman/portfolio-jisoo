<template>
	<Layout class="email">
		<div slot="left">
			<h1>email campaigns</h1>
			<p>I am in charge of planning monthly sales campaigns. We have two sales that run every week - one weekday sale and one weekend sale. I plan the sales out in a calendar on Excel and keep track of when I need to send out the sale campaign emails. I also send out two emails for each sale campaign in a week. If there is a holiday, I will typically put it in the calender a week or a weekend before. Other weeks, I will come up with my own sale ideas either through specific brand sales or category sales. I make sure that sales aren’t repeated for a minimum of 3 months. We select products for sales that we are trying to cycle. Often times we also select popular products that we believe are selling lower than its potential so that we can increase sales.</p>
			<button class="button-back">
				<g-link to="/work/">back to "work"</g-link>
			</button>
		</div>
		<div slot="right">
			<FeatureImage img_path="/code.png"></FeatureImage>
		</div>
	</Layout>
</template>

<script>
import FeatureImage from "~/components/FeatureImage";

export default {
	components: {
		FeatureImage
	}
};
</script>

<style lang="scss" scoped>
</style>