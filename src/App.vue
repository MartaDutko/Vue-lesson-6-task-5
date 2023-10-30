<template>
  <products-filters
    :dataList="dataProduct"
    v-model:seller.check="sellerVal"
    v-model:model.check="modelVal"
  />

  <product-list :dataList="filterProductList" />
  
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ProductsFilters from "./components/ProductsFilters.vue";
import { dataProduct } from "./constans/data";
export default {
  name: "App",
  components: {
    ProductsFilters,
    ProductList,
  },
  data() {
    return {
      dataProduct,
      sellerVal: null,
      modelVal: null,
    };
  },
  computed: {
    filterProductList() {
      if (this.sellerVal || this.modelVal) {
        return this.dataProduct.filter((el) => this.search(el));
      } else return this.dataProduct;
    },
  },
  methods: {
    isExist(el, property, filter) {
      return !filter || el[property] === filter;
    },
    search(el) {
      return (
        this.isExist(el, "seller", this.sellerVal) &&
        this.isExist(el, "model", this.modelVal)
      );
    },
  },
};
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding: 20px 0;
}
</style>
