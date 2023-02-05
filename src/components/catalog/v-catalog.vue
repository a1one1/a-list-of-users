<template>
  <div class="v-catalog">
    <div class="v-catalog__navigate">
      <router-link :to="{ name: 'catalog' }"><span>Catalog</span></router-link>
      <router-link :to="{ name: 'cart', params: { cart_data: CART } }"
        ><span>Cart</span></router-link
      >
    </div>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "@/components/catalog/catalog-item/v-catalog-item";
import dxButton from "devextreme-vue/button";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    dxButton,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_WITH_SERVER", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_WITH_SERVER();
  },
};
</script>

<style lang="scss">
.v-catalog {
  a {
    text-decoration: none;
    color: black;
  }
  &__navigate {
    padding: 20px 0;
    width: 300px;
    margin: 0 auto;
    font-size: 32px;
    cursor: default;
    display: flex;
    justify-content: space-between;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: solid 1px #aeaeae;
  }
}
</style>
