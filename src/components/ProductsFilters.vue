<template>
  <div class="block__product">
    <label>
      Виберіть продавця:
      <select v-model="sellerValue" :class="sellerColor">
        <option disabled value="">Виберіть продавця</option>
        <option v-for="seller in sellerList" :key="seller" :value="seller">
          {{ seller }}
        </option>
      </select>
    </label>
    <label
      >Виберіть бренд:
      <select v-model="modelValue" :class="modelColor">
        <option disabled value="">Виберіть бренд</option>
        <option v-for="model in modelList" :key="model" :value="model">
          {{ model }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "ProductsFilters",
  data() {
    return {
      sellerColor: "choossInpup",
      modelColor: "choossInpup",
    };
  },

  props: {
    dataList: {
      type: Array,
    },
    seller: {
      type: String,
    },
    sellerModifiers: {
      default: () => ({}),
    },
    model: {
      type: String,
    },
    modelModifiers: {
      default: () => ({}),
    },
  },
  computed: {
    sellerList() {
      let sellerListSet = new Set();
      this.dataList.forEach((product) => {
        sellerListSet.add(product.seller);
      });
      return sellerListSet;
    },
    sellerValue: {
      get() {
        return this.seller;
      },
      set(val) {
        if (this.sellerModifiers.check) {
          this.sellerColor = null;
        }
        this.$emit("update:seller", val);
      },
    },
    modelList() {
      const modelListSet = new Set();
      this.dataList.forEach((product) => {
        modelListSet.add(product.model);
      });
      return modelListSet;
    },
    modelValue: {
      get() {
        return this.model;
      },
      set(val) {
        if (this.modelModifiers.check) this.modelColor = null;
        this.$emit("update:model", val);
      },
    },
  },
};
</script>

<style lang="css" scoped>
.block__product {
  width: 20%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0 0 0;
  border: 1px solid black;
}
.choossInpup {
  border: 1px solid green;
}
label{
  display: flex;
  flex-direction: column;
  
}
</style>