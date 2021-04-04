<template lang="html">
  <button
    v-on:click="listPagesChangeHandle(direction)"
    :class="'pagination__btn pagination__btn--' + direction">
    {{ labelBtn }}
  </button>
</template>

<script>
export default {
  name: 'PaginationBtn',
  props: {
    labelBtn: String,
    direction: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pageNumber: this.$store.state.currentPage,
    };
  },
  methods: {
    listPagesChangeHandle(value) {
      const newId = this.$store.state.currentPage;
      let pageNum;

      switch (value) {
        case 'prev':
          if (newId > 1) {
            pageNum = newId - 1;
            window.location.hash = `#page-${pageNum}`;
            this.$store.commit('updatePageNumber', pageNum);
          }
          break;
        case 'next':
          pageNum = newId + 1;
          window.location.hash = `#page-${pageNum}`;
          this.$store.commit('updatePageNumber', newId + 1);
          break;
        default:
          break;
      }

      this.$store.dispatch('loadData');
    },
  },
};
</script>

<style lang="scss" scoped>
  .pagination {
    &__btn {
      background: var(--dark-orange);
      border: 0;
      color: var(--white);
      cursor: pointer;
      padding: 10px 15px;
      transition: all .5s ease-in-out;
      white-space: nowrap;

      &:focus {
        outline: none;
        border: 0;
      }

      &:hover {
        background: var(--light-orange);
      }

      &--prev {
        margin-right: 2px;
      }
    }
  }
</style>
