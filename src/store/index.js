import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ads: [],
    favourites: [],
  },
  mutations: {
    GET_ADS: (state, ads) => {
      state.ads = ads;
    },
    GET_FAVOURITES: (state, favourites) => {
      state.favourites = favourites;
    },
  },
  actions: {},
  modules: {},
});

const getAds = () => {
  fetch("listings.json")
    .then((response) => response.json())
    .then((data) => store.commit("GET_ADS", data.ads));
};

getAds();

export default store;
