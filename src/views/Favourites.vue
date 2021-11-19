<template>
<ul class="list">
	<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	  Rendezés
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
	<a class="dropdown-item" @click="orderList('address')">Név szerint</a>
	<a class="dropdown-item" @click="orderList('date')">Dátum szerint</a>
  </div>
</div>
	<li class="list-item" v-for="ad in sortedList" :key="ad.adId">
		<ad :ad-id=ad.adId :image-src="ad.image" :address="ad.address" :price="ad.price" :currency="ad.currency"/>
	</li>
</ul>
</template>

<style lang="scss">
.list {
	list-style: none;
	padding: 0;
}

.list .dropdown {
	text-align: right;
	margin-bottom: 10px;;
}
</style>

<script>
import Ad from '../components/Ad.vue';
export default {
  components: { Ad },
  name: "Favourites",
  data() {
	  return {
		  favourites: [],
		  sortedList: []
	  }
  },
  component: {
	  Ad
  },

  methods: {
	orderList(orderType) {
		if(orderType == 'address') {
			this.sortedList =  this.favourites.sort((a, b) => (a.address > b.address ? 1 : -1));
		}
		if(orderType == 'date') {
			this.sortedList =  this.favourites.sort((a, b) => (a.favouriteDate - b.favouriteDate ? 1 : -1));
		}
	}
  },
  mounted() {
			var favouritesIds = this.$store.state.favourites.map(item => item.adId);
			var favourites = [];
			favouritesIds.forEach(element => favourites.push(
				this.$store.state.ads.find(item => item.adId == element)
			));
			for(var i = 0; i < favouritesIds.length; i++) {
				favourites.find(item => item.adId == favouritesIds[i]).favouriteDate = this.$store.state.favourites[i].date;

			}
			this.favourites = favourites;
			this.sortedList = this.favourites;
	}
};
</script>