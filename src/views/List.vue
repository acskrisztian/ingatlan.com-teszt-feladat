<template>
<ul class="list">
    <li class="list-item" v-for="ad in ads" :key="ad.adId">
        <ad :image-src="ad.image" :address="ad.address" :price="ad.price" :currency="ad.currency"/>
    </li>
</ul>
</template>

<style lang="scss">
.list {
    list-style: none;
    padding: 0;
}
</style>

<script>
import Ad from '../components/Ad.vue';
export default {
  components: { Ad },
  name: "List",
  data() {
      return {
          ads: []
      }
  },
  component: {
      Ad
  },
  mounted() {
      fetch("listings.json")
        .then(response => response.json())
        .then(data => (this.ads = data.ads));
    }
};
</script>