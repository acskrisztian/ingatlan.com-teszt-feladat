<template>
  <div class="home">
    <div class="home__col-left">
      <div v-if="isTablet" v-show="menuOpened" class="home__navigation">
        <router-link class="home__navigation-link" to="/Lista">
          <span>Hirdetések</span>
          <span>Lista</span>
        </router-link>
        <router-link class="home__navigation-link" to="/Kedvencek">
          <span>Kedvencek</span>
          <span>Kedvenceim</span>
        </router-link>
      </div>
      <div v-else id="nav" class="home__navigation">
        <router-link class="home__navigation-link" to="/Lista">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 13C4.55 13 5 12.55 5 12C5 11.45 4.55 11 4 11C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13Z"
              fill="#323EC8"
            />
            <path
              d="M4 17C4.55 17 5 16.55 5 16C5 15.45 4.55 15 4 15C3.45 15 3 15.45 3 16C3 16.55 3.45 17 4 17Z"
              fill="#323EC8"
            />
            <path
              d="M4 9C4.55 9 5 8.55 5 8C5 7.45 4.55 7 4 7C3.45 7 3 7.45 3 8C3 8.55 3.45 9 4 9Z"
              fill="#323EC8"
            />
            <path
              d="M8 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13Z"
              fill="#323EC8"
            />
            <path
              d="M8 17H20C20.55 17 21 16.55 21 16C21 15.45 20.55 15 20 15H8C7.45 15 7 15.45 7 16C7 16.55 7.45 17 8 17Z"
              fill="#323EC8"
            />
            <path
              d="M7 8C7 8.55 7.45 9 8 9H20C20.55 9 21 8.55 21 8C21 7.45 20.55 7 20 7H8C7.45 7 7 7.45 7 8Z"
              fill="#323EC8"
            />
          </svg>
          <span>Lista</span>
        </router-link>
        <router-link class="home__navigation-link" to="/Kedvencek">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0001 17.5198L16.1501 20.0298C16.9101 20.4898 17.8401 19.8098 17.6401 18.9498L16.5401 14.2298L20.2101 11.0498C20.8801 10.4698 20.5201 9.36977 19.6401 9.29977L14.8101 8.88977L12.9201 4.42977C12.5801 3.61977 11.4201 3.61977 11.0801 4.42977L9.19007 8.87977L4.36007 9.28977C3.48007 9.35977 3.12007 10.4598 3.79007 11.0398L7.46007 14.2198L6.36007 18.9398C6.16007 19.7998 7.09007 20.4798 7.85007 20.0198L12.0001 17.5198Z"
              fill="#323EC8"
            />
          </svg>
          <span>Kedvencek</span>
        </router-link>
      </div>
    </div>
    <div class="home__col-right">
      <div class="home__title-container">
        <p class="home__title">{{ this.$route.name }}</p>
        <span class="home__counter"
          >{{
            this.$route.path == "/Lista" ? listLength : favouritesLength
          }}
          db</span
        >
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.home {
  @media screen and (min-width: 768px) {
    display: flex;
  }
}

.home__col-left {
  left: 0;
  position: absolute;
  top: 65px;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: 992px) {
    left: auto;
    max-width: 300px;
    padding-right: 40px;
    position: relative;
    top: auto;
  }
}

.home__col-right {
  flex-grow: 1;
  @media screen and (min-width: 992px) {
    max-width: calc(100% - 300px);
  }
}

.home__navigation {
  background-color: #fff;
  color: #323ec8;
  padding: 20px;

  @media screen and (min-width: 768px) {
    border-radius: 16px;
    box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
    width: 260px;
  }
}

.home__navigation-link {
  align-items: center;
  border-radius: 8px;
  display: block;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 44px;
  padding: 0 20px;

  &:first-child {
    margin-bottom: 14px;
  }

  &.router-link-active {
    background: #ebecfa;
  }
}

.home__navigation-link svg {
  margin-right: 14px;
}

.home__title-container {
  align-items: center;
  background: #fff;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 9px 30px;

  @media screen and (min-width: 768px) {
    padding: 14px 30px;
  }
}

.home__title {
  font-size: 18px;
  font-weight: 700;
  line-break: 23px;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
}

.home__counter {
  color: #666;
  font-size: 14px;
  font-weight: 700;
}
</style>

<script>
import isMobile from "../common/IsMobile";
export default {
  name: "Home",
  mixins: [isMobile],
  computed: {
    menuOpened() {
      return this.$attrs.menuOpened;
    },
    listLength() {
      return this.$store.state.ads.length;
    },
    favouritesLength() {
      return this.$store.state.favourites.length;
    },
  },
};
</script>
