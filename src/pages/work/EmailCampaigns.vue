<template>
	<Layout class="email">
		<div slot="left">
			<h1>email campaigns</h1>
			<p>I am in charge of planning monthly sales campaigns. We have two sales that run every week - one weekday sale and one weekend sale. I plan the sales out in a calendar on Excel and keep track of when I need to send out the sale campaign emails. I also send out two emails for each sale campaign in a week. If there is a holiday, I will typically put it in the calender a week or a weekend before. Other weeks, I will come up with my own sale ideas either through specific brand sales or category sales. I make sure that sales aren’t repeated for a minimum of 3 months. We select products for sales that we are trying to cycle. Often times we also select popular products that we believe are selling lower than its potential so that we can increase sales.</p>
			<g-link to="/work/">
				<button class="button-back">back to "work"</button>
			</g-link>
		</div>
		<div slot="right">
			<div class="img_container">
				<g-link to="/work/email-examples">
					<button>see email examples</button>
				</g-link>
				<FeatureImage img_path="/schedule/salesplan1.png"></FeatureImage>
				<FeatureImage img_path="/schedule/salesplan2.png"></FeatureImage>
			</div>
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

<style lang="sass" scoped>

.img_container

    &>*

        @include space-stack(var(--space-md))

</style>