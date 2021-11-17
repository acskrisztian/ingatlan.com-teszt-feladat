<template>
	<div id="app">
		<header class="header">
			<button class="hamburger-button" v-if="isMobile">
				<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.5C3.45 8.5 3 8.05 3 7.5C3 6.95 3.45 6.5 4 6.5H20C20.55 6.5 21 6.95 21 7.5C21 8.05 20.55 8.5 20 8.5H4ZM4 13.5H20C20.55 13.5 21 13.05 21 12.5C21 11.95 20.55 11.5 20 11.5H4C3.45 11.5 3 11.95 3 12.5C3 13.05 3.45 13.5 4 13.5ZM4 18.5H20C20.55 18.5 21 18.05 21 17.5C21 16.95 20.55 16.5 20 16.5H4C3.45 16.5 3 16.95 3 17.5C3 18.05 3.45 18.5 4 18.5Z" fill="#323EC8"/>
				</svg>
			</button>
		</header>
		<main>
			<router-view />
		</main>
		<footer class="footer"/>
	</div>
</template>

<style lang="scss">

main {
	background: #fafbff;
	padding: 23px 20px;

	@media screen and (min-width: 768px) {
		padding: 40px 20px;
	}
}

.header {
	align-items: center;
	background: #fff;
	border-radius: 0px 0px 16px 16px;
	box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
	display: flex;
	height: 65px;
}

.hamburger-button {
	background: transparent;
	border: none;
	padding: 20px;

}

.footer {
	background: #fff;
	box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
	height: 100px;
}
</style>
<script>
export default {
	name: "App",
	computed: {
		isMobile() {
			return innerWidth <= 760;
		}
	}
};
</script>
