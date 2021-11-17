<template>
	<router-link to="/Detail">
		<div class="ad__wrapper">
			<div class="ad__image-wrapper">
				<img class="ad__image" :src="imageSrc">
			</div>
			<div class="ad__content">
				<h2 class="ad__title">{{address}}</h2>
				<p class="ad__price">{{price + currency}}</p>
			</div>
		</div>
	</router-link>
</template>

<style lang="scss">
.ad__wrapper {
		background: #fff;
		border-radius: 16px;
		box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
		overflow: hidden;

		@media screen and (min-width: 768px) {
				flex-direction: row;
				height: 180px;
		}
}

.ad__image-wrapper {
		height: 140px;
		overflow: hidden;
		position: relative;

		@media screen and (min-width: 768px) {
			height: 100%;
			width: 212px;
		}
}

.ad__image {
	left: 50%;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100%;

	@media screen and (min-width: 768px) {
		max-width: 240px;
		min-height: 100%;
		width: auto;
	}
}

.ad__content {
	height: 107px;
	padding: 10px 20px 20px;

	@media screen and (min-width: 768px) {
		padding: 20px;
	}
}

.ad__title {
	font-size: 24px;
	font-weight: 700;
	line-height: 32px;
	margin-bottom: 4px;

	@media screen and (min-width: 768px) {
		font-size: 30px;
		line-height: 40px;
		margin-bottom: 16px;
	}
}

.ad__price {
	font-size: 16px;
	font-weight: 500;
	line-height: 16px;
	margin-bottom: 12px;

	@media screen and (min-width: 768px) {
		font-size: 24px;
	}
}

</style>

<script>
export default {
	name: "Ad",
	props: {
		imageSrc: String,
		address: String,
		price: String,
		currency: String
	},
};
</script>
