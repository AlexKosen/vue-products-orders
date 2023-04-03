<script>
import { mapActions, mapGetters } from "vuex";

export default {
  emits: ["showInfo"],
  props: {
    order_item: {
      type: Object,
      default() {
        return {};
      },
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),

    showInfoProduct() {
      this.$emit("showInfo");
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),

    formattedDateOrder() {
      const dateParts = this.order_item.date.split(" ")[0].split("-");
      return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    },

    isShowCol() {
      return this.isShow
    },

    totalSumOrder() {
      let totalUSD = 0;
      let totalUAH = 0;
      let quantityProduct = 0;
      for (let item of this.PRODUCTS)
        if (this.order_item.date === item.date) {
          quantityProduct += 1;
          for (let price of item.price) {
            if (price.symbol === "USD") {
              totalUSD += price.value;
            } else if (price.symbol === "UAH") {
              totalUAH += price.value;
            }
          }
        }
      return { totalUSD, totalUAH, quantityProduct };
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>
<template>
  <div class="container">
  <div class="order-item-container">
    <div class="row">
      <div class="col-md-1" v-show="!isShowCol">{{ order_item.title }}</div>
      <div class="col-md-2">
        <div class="col-md-2-icon">
          <i class="material-icons" @click="showInfoProduct"
            >format_line_spacing</i
          >
        </div>
        <div class="col-md-2-title">
          {{ totalSumOrder.quantityProduct }} Продуктов
        </div>
      </div>
      <div class="col-md-3">{{ formattedDateOrder }}</div>
      <div class="col-md-4" v-show="!isShowCol">
        <p>{{ totalSumOrder.totalUSD }} USD</p>
        <p>{{ totalSumOrder.totalUAH }} UAH</p>
      </div>
      <div class="col-md-5" v-show="!isShowCol"><span class="material-icons"> delete </span></div>
      <div class="order-item-container-product-info" v-show="isShowCol">
    <div>i</div>
    <div>img</div>
    <div>Название продукта</div>
    <div>Свободен</div>
    <div><span class="material-icons"> delete </span></div>
  </div>
    </div>
  </div>
  <!-- <div class="order-item-container-product-info" v-show="isShowCol">
    <div>i</div>
    <div>img</div>
    <div>Название продукта</div>
    <div>Свободен</div>
    <div><span class="material-icons"> delete </span></div>
  </div> -->
</div>
</template>

<style>
.container {

}
.order-item-container {
  margin-bottom: 10px;
  background-color: #fff;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 10px;
  /* margin-right: -15px;
  margin-left: -15px; */
}

.col-md-1 {
  flex: 0 0 30%;
  max-width: 30%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col-md-2 {
  flex: 0 0 20%;
  display: flex;
  flex-wrap: wrap;
  max-width: 20%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col-md-3 {
  flex: 0 0 15%;
  max-width: 15%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col-md-4 {
  flex: 0 0 10%;
  max-width: 10%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col-md-5 {
  flex: 0 0 5%;
  max-width: 5%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.order-item-container-product-info {
  display: flex;
  margin-left: 10px;
}
</style>
