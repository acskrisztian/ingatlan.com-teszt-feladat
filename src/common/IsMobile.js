export default {
	data() {
		return {
			screenWidth: null
		}
	},
    computed: {
		isMobile() {
			return this.screenWidth <= 767;
		},
		isTablet() {
			return this.screenWidth <= 991;
		}
	},
    mounted() {
		this.screenWidth = window.innerWidth;
		window.addEventListener('resize', () => {
			this.screenWidth = window.innerWidth;
		})	
	},
}