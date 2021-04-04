<template lang="html">
  <select
    name="SelectItemsPerPage"
    @change="itemsPerPageHandle($event)"
    >
    <option
      v-for="(item, index) in options"
      :key="index"
      :value="index"
    >
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectItemsPerPage',
  methods: {
    itemsPerPageHandle(event) {
      this.$store.commit('updateItemsPerPage', event.target.value);
      this.$store.dispatch('loadData');
    },
  },
  data() {
    return {
      options: this.$store.state.labels.itemsToShow,
    };
  },
};
</script>
