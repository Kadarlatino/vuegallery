<template lang="html">
  <div class="list-settings">
    <PaginationMain />
    <SelectItemsPerPage />
    <SearchInput />
  </div>
  <div class="grid images-list">
    <ImagesListMain />
  </div>
</template>

<script>
import PaginationMain from '@/components/pagination/PaginationMain.vue';
import SelectItemsPerPage from '@/components/SelectItemsPerPage.vue';
import SearchInput from '@/components/SearchInput.vue';
import ImagesListMain from '@/components/imagesList/ImagesListMain.vue';

export default {
  name: 'Main',
  components: {
    PaginationMain,
    SelectItemsPerPage,
    SearchInput,
    ImagesListMain,
  },
};
</script>

<style lang="scss">
  @import '../scss/variables.scss';
  @import '../scss/mixins.scss';

  .list-settings {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px 0;

    @include respond-to('sm') {
      flex-direction: row;
      justify-content: flex-start;
    }
  }
</style>
