<template lang="html">
  <div class="images-list__item">
    <div class="images-list__text-block">
      {{itemAuthor}}
    </div>
    <a :href="itemUrl" class="images-list__link" target="_blank">
      <img :src="'https://picsum.photos/id/' + itemId + '/367/267'" alt="" width="367">
    </a>
  </div>
</template>

<script>
export default {
  name: 'ImagesListItem',
  props: {
    itemAuthor: String,
    itemUrl: String,
    itemDownloadUrl: String,
    itemData: Number,
    itemId: String,
  },
};
</script>

<style lang="scss" scoped>
  .images-list {
    &__item {
      border-radius: 5px;
      box-shadow: 0px 0px 5px 0px rgba(34, 60, 80, 0.2);
      overflow: hidden;
      position: relative;
      transition: all .5s ease-in-out;
      top: 0;

      &:hover {
        box-shadow: 0px 5px 5px 0px rgba(34, 60, 80, 0.5);
        top: -5px;
      }
    }

    &__link {
      &, img {
        display: block;
      }
    }

    &__text-block {
      background: rgba(0, 0, 0, .6);
      bottom: 0;
      color: var(--white);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      width: 100%;
      padding: 10px;
      position: absolute;
      z-index: 1;
    }
  }
</style>
