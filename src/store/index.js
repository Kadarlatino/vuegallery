import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    api: 'https://picsum.photos/v2/list',
    imagesData: [],
    startPage: 1,
    currentPage: Number(window.location.hash.replace('#page-', '')) || 1,
    itemsPerPage: 5,
    search: '',
    labels: {
      prev: 'Prev Page',
      next: 'Next Page',
      search: 'Search author',
      itemsToShow: {
        5: 'Show 5 items per page',
        10: 'Show 10 items per page',
        30: 'Show 30 items per page',
        100: 'Show 100 items per page',
      },
    },
  },
  getters: {
    imagesData(state) {
      return state.imagesData;
    },
  },
  mutations: {
    updateImagesData(state, playload) {
      state.imagesData = playload;
    },
    updateItemsPerPage(state, playload) {
      state.itemsPerPage = playload;
    },
    updateSearch(state, playload) {
      state.search = playload;
    },
    updatePageNumber(state, playload) {
      state.currentPage = playload;
    },
  },
  actions: {
    loadData({ state, commit }) {
      axios
        .get(`${state.api}?page=${state.currentPage}&limit=${state.itemsPerPage}`)
        .then((response) => {
          commit('updateImagesData', response.data);
        });
    },
    updateImagesData(context) {
      context.commit('updateImagesData');
    },
  },
  modules: {
  },
});
