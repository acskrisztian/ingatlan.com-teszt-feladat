<template>
  <div class="ad">
    <router-link :to="detailUrl">
      <div class="ad__wrapper">
        <div class="ad__image-wrapper">
          <img class="ad__image" :src="imageSrc" />
        </div>
        <div class="ad__content">
          <h2 class="ad__title">{{ address }}</h2>
          <p class="ad__price">{{ price + " " + currency }}</p>
          <div v-if="isFavourite" class="ad__favourite-date">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.25 3H13.5V2.25C13.5 1.8375 13.1625 1.5 12.75 1.5C12.3375 1.5 12 1.8375 12 2.25V3H6V2.25C6 1.8375 5.6625 1.5 5.25 1.5C4.8375 1.5 4.5 1.8375 4.5 2.25V3H3.75C2.9175 3 2.2575 3.675 2.2575 4.5L2.25 15C2.25 15.825 2.9175 16.5 3.75 16.5H14.25C15.075 16.5 15.75 15.825 15.75 15V4.5C15.75 3.675 15.075 3 14.25 3ZM14.25 14.25C14.25 14.6625 13.9125 15 13.5 15H4.5C4.0875 15 3.75 14.6625 3.75 14.25V6.75H14.25V14.25ZM6.75 9.75V8.25H5.25V9.75H6.75ZM8.25 8.25H9.75V9.75H8.25V8.25ZM12.75 9.75V8.25H11.25V9.75H12.75Z"
                fill="#191919"
              />
            </svg>
            <span>{{ favouriteDate }}</span>
          </div>
        </div>
      </div>
    </router-link>
    <favourite class="ad__favourite-button" :id="adId"></favourite>
  </div>
</template>

<style lang="scss">
.ad {
  position: relative;
}

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
  display: flex;
  flex-direction: column;
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
  padding-right: 45px;

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

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
}

.ad__favourite-date {
  align-items: center;
  display: flex;
  font-size: 16px;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    margin-top: auto;
  }
}

.ad__favourite-date svg {
  margin-right: 8px;
}

.ad__favourite-button {
  position: absolute;
  right: 20px;
  top: 160px;

  @media screen and (min-width: 768px) {
    top: 30px;
  }
}
</style>

<script>
import Favourite from "./Favourite.vue";
export default {
  name: "Ad",
  props: {
    imageSrc: String,
    adId: Number,
    address: String,
    price: Number,
    currency: String,
  },
  components: {
    Favourite,
  },
  computed: {
    detailUrl() {
      return "/Details/" + this.adId;
    },
    isFavourite() {
      return this.$store.state.favourites.find((item) => item.adId == this.adId)
        ? true
        : false;
    },
    favouriteDate() {
      return this.$store.state.favourites.find((item) => item.adId == this.adId)
        .date;
    },
  },
};
</script>
