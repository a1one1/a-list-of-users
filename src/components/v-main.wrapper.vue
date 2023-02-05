<template>
  <div class="v-main-wrapper">
    <nav class="v-nav">
      <router-link :to="{ name: 'list-users' }">
        <dx-button
          text="List of users"
          styling-mode="outlined"
          type="success"
        />
      </router-link>
      <router-link :to="{ name: 'catalog' }">
        <dx-button text="Shop" styling-mode="outlined" type="success" />
      </router-link>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import dxButton from "devextreme-vue/button";

export default {
  name: "v-main-wrapper",
  components: {
    dxButton,
  },
  props: {},
  data() {
    return {
      title: "Main wrapper",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 1260px;
  margin: 0 auto;
}
.v-nav {
  display: flex;
  justify-content: space-around;
}
</style>
