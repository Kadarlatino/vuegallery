<template lang="html">
  <input type="text" v-model="search" :placeholder="labelSearch"/>
</template>

<script>
export default {
  name: 'SearchInput',
  computed: {
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit('updateSearch', value);
      },
    },
  },
  data() {
    return {
      labelSearch: this.$store.state.labels.search,
    };
  },
};
</script>

<style lang="css" scoped>
</style>
