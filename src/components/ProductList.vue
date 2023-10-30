<template>
  <div class="block__product" v-if="isExist">
    <div v-for="product in dataList" :key="product.id" class="product__card">
      <a :href="product.link">
        <img :src="product.imgSrc" />
        <p class="tittle">{{ product.tittle }}</p>
        <p class="price">{{ product.price }} ₴</p>
      </a>
    </div>
  </div>
  <div class="block__product" v-else>Oops nothing found</div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    dataList: {
      type: Array,
    },
  },
  computed: {
    isExist() {
      return this.dataList.length > 0  
    }
  },
};
</script>

<style lang="css" scoped>
.block__product {
  width: 70%;
  height: 100%;
  border: 1px solid black;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: inherit;
  overflow: scroll;
}

.product__card {
  width: 19%;
  height: 30%;
  padding: 15px;
  border: 1px solid rgb(216, 213, 213);
}
.product__card:hover {
  border: 1px solid black;
}
img {
  width: 90%;
}
p{
    padding: 0;
    margin: 0;
}
a {
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tittle {
  text-align: center;
  font-size: 15px;
  color: black;
}
.price {
  color: red;
}
</style>