<template lang="html">
  <div class="pagination">
    <PaginationBtn
      :labelBtn="labelPrev"
      :disabled="false"
      :direction="'prev'"
    />
    <PaginationBtn
      :labelBtn="labelNext"
      :disabled="false"
      :direction="'next'"
    />
</div>
</template>

<script>
import PaginationBtn from '@/components/pagination/PaginationBtn.vue';

export default {
  name: 'PaginationMain',
  components: {
    PaginationBtn,
  },
  data() {
    return {
      labelPrev: this.$store.state.labels.prev,
      labelNext: this.$store.state.labels.next,
    };
  },
};
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
  }
</style>
