<template lang="html">
  <ImagesListItem
    v-for="item in imagesData"
    :key="item.id"
    :itemId="item.id"
    :itemAuthor="item.author"
    :itemUrl="item.url"
    :itemDownloadUrl="item.download_url"
    />
</template>

<script>
import ImagesListItem from '@/components/imagesList/ImagesListItem.vue';

export default {
  name: 'ImagesListMain',
  components: {
    ImagesListItem,
  },
  methods: {
    filteredList() {
      return this.imagesData.filter(
        (item) => item.author.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
  mounted() {
    this.$store.dispatch('loadData');
  },
  computed: {
    imagesData() {
      const searchText = this.$store.state.search;
      return this.$store.state.imagesData.filter(
        (item) => item.author.toLowerCase().includes(searchText.toLowerCase()),
      );
    },
  },
};
</script>
