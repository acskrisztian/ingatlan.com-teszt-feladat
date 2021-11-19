<template>
  <div class="details">
    <div v-if="!isMobile" class="details__top-bar">
      <router-link class="details__back-button" to="/">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.7912 11.0051H7.62124L12.5012 6.12508C12.8912 5.73508 12.8912 5.09508 12.5012 4.70508C12.3144 4.51783 12.0608 4.4126 11.7962 4.4126C11.5317 4.4126 11.2781 4.51783 11.0912 4.70508L4.50124 11.2951C4.11124 11.6851 4.11124 12.3151 4.50124 12.7051L11.0912 19.2951C11.4812 19.6851 12.1112 19.6851 12.5012 19.2951C12.8912 18.9051 12.8912 18.2751 12.5012 17.8851L7.62124 13.0051H18.7912C19.3412 13.0051 19.7912 12.5551 19.7912 12.0051C19.7912 11.4551 19.3412 11.0051 18.7912 11.0051Z"
            fill="#323EC8"
          />
        </svg>
        <span>Vissza</span>
      </router-link>
      <div class="details__title-container">
        <p class="details__title">Részletek</p>
      </div>
    </div>
    <router-link v-else class="details__mobile-back-button" to="/">
      <svg
        width="11"
        height="18"
        viewBox="0 0 11 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.9443 17.4446C9.14493 17.6342 9.39836 17.75 9.69403 17.75C10.2959 17.75 10.75 17.2867 10.75 16.6971C10.75 16.4022 10.6338 16.139 10.4332 15.9389L3.316 9L10.4332 2.06107C10.6338 1.86101 10.75 1.58724 10.75 1.30295C10.75 0.713297 10.2959 0.25 9.69403 0.25C9.39836 0.25 9.15549 0.355295 8.9443 0.555355L1.10903 8.18923C0.876716 8.41035 0.75 8.69464 0.75 9C0.75 9.30536 0.876716 9.56859 1.10903 9.80024L8.9443 17.4446Z"
          fill="white"
        />
      </svg>
    </router-link>
    <div class="details__content-wrapper">
      <div v-if="isTablet" class="details__image-wrapper-mobile">
        <img class="details__image" :src="this.selectedAd.image" />
      </div>
      <div v-else class="details__image-container">
        <div class="details__image-wrapper">
          <img class="details__image" :src="this.selectedAd.image" />
        </div>
        <div class="details__image-wrapper">
          <img class="details__image" :src="this.selectedAd.image" />
        </div>
        <div class="details__image-wrapper">
          <div class="details__image-wrapper details__image-wrapper--small">
            <img class="details__image" :src="this.selectedAd.image" />
          </div>
          <div class="details__image-wrapper details__image-wrapper--small">
            <img class="details__image" :src="this.selectedAd.image" />
          </div>
        </div>
      </div>
      <div class="details__content">
        <favourite class="details__favourite-button" :id="id"></favourite>
        <h2 class="details__title">{{ this.selectedAd.address }}</h2>
        <p class="details__price">
          {{ this.selectedAd.price + " " + this.selectedAd.currency }}
        </p>
        <div class="details__date">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.25 2H11.5V1.25C11.5 0.8375 11.1625 0.5 10.75 0.5C10.3375 0.5 10 0.8375 10 1.25V2H4V1.25C4 0.8375 3.6625 0.5 3.25 0.5C2.8375 0.5 2.5 0.8375 2.5 1.25V2H1.75C0.9175 2 0.2575 2.675 0.2575 3.5L0.25 14C0.25 14.825 0.9175 15.5 1.75 15.5H12.25C13.075 15.5 13.75 14.825 13.75 14V3.5C13.75 2.675 13.075 2 12.25 2ZM12.25 13.25C12.25 13.6625 11.9125 14 11.5 14H2.5C2.0875 14 1.75 13.6625 1.75 13.25V5.75H12.25V13.25ZM4.75 8.75V7.25H3.25V8.75H4.75ZM6.25 7.25H7.75V8.75H6.25V7.25ZM10.75 8.75V7.25H9.25V8.75H10.75Z"
              fill="#191919"
            />
          </svg>
          <span>{{ this.selectedAd.uploadDate }}</span>
        </div>
        <div class="details__description-container">
          <p>{{ this.selectedAd.description }}</p>
        </div>
        <button
          type="button"
          class="details__contact"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Kapcsolatfelvétel
        </button>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">
              Kapcsolatfelvétel
            </h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <dl>
              <dt>email cím:</dt>
              <dd>{{ this.selectedAd.contact.email }}</dd>
              <dt>Telefon:</dt>
              <dd>
                <span
                  v-for="item in this.selectedAd.contact.parsedPhoneNumbers"
                  :key="item"
                  >{{ item }}</span
                >
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.details {
  @media screen and (min-width: 768px) {
    margin: 0 20px;
  }
}
.details__top-bar {
  display: flex;
  height: 60px;
  margin-bottom: 80px;
}
.details__back-button {
  background: #ebecfa;
  border-radius: 8px;
  color: #323ec8;
  font-weight: 700;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 170px;
  &:hover {
    color: #323ec8;
  }
}

.details__back-button svg {
  margin-right: 12px;
}

.details__mobile-back-button {
  align-items: center;
  background: #485563;
  border-radius: 10px;
  display: flex;
  height: 40px;
  justify-content: center;
  left: 16px;
  position: absolute;
  top: 52px;
  width: 40px;
  z-index: 1;
}

.details__title-container {
  align-items: center;
  background: #fff;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 9px 30px;
  height: 100%;
  flex-grow: 1;
  filter: drop-shadow(0px 0px 20px rgba(50, 62, 200, 0.1));
}

.details__title {
  font-size: 24px;
  font-weight: 700;
  line-break: 23px;
  margin: 0;
}

.details__image-wrapper-mobile {
  height: 463px;
  margin: -20px -20px 0 -20px;
  position: relative;
  overflow: hidden;
}

.details__image-container {
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
}

.details__image-wrapper {
  position: relative;
  width: calc(32% - 13px);
  margin-right: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-right: 0;
    flex-grow: 1;
  }
}

.details__image-wrapper--small {
  position: relative;
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
  margin: 0;
  &:first-child {
    margin-bottom: 20px;
  }
}

.details__image {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  min-height: 100%;
  min-width: 100%;
}

.details__content {
  position: relative;
  padding: 0 5px;
  background: #fff;
  margin: 0 -20px -20px -20px;
  padding: 25px 25px 40px;

  @media screen and (min-width: 768px) {
    box-shadow: 0px 0px 10px rgba(50, 62, 200, 0.2);
    border-radius: 16px;
    margin: 40px 0 0;
    padding: 20px;
  }
}

.details__title {
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

.details__price {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
}

.details__date {
  font-size: 16px;
  margin-top: 12px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 12px;
  }
}

.details__favourite-button {
  position: absolute;
  top: 35px;
  right: 25px;

  @media screen and (min-width: 768px) {
    top: 35px;
    right: 25px;
  }
}

.details__description-container {
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin: 15px -10px;
  padding: 16px;
  min-height: 146px;

  & p {
    font-size: 12px;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
}

.details__contact {
  color: #fff;
  background-color: #323ec8;
  box-shadow: 0px 0px 10px rgba(50, 62, 200, 0.2);
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  border: none;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 308px;
    margin: 0 0 0 auto;
  }
}
</style>
<script>
import isMobile from "../common/IsMobile";
import Favourite from "../components/Favourite.vue";

export default {
  name: "Detail",
  data() {
    return {
      selectedAd: null,
    };
  },
  props: ["id"],
  mixins: [isMobile],
  components: {
    Favourite,
  },
  created() {
    this.selectedAd = this.$store.state.ads.find((ad) => ad.adId == this.id);
  },
};
</script>
