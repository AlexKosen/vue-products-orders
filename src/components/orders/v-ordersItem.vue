<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    order_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),

    // totalSumUSD(products) {
    //   let usdTotal = products.reduce((total, product) => {
    //     // перевіряємо, чи властивість "price" містить об'єкт з "symbol" === "USD"
    //     let usdPrice = product.price.find((p) => p.symbol === "USD");
    //     if (usdPrice) {
    //       // додаємо до загальної суми ціну у "USD"
    //       return total + usdPrice.value;
    //     } else {
    //       return total;
    //     }
    //   }, 0);
    // },
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),

    formattedDateOrder() {
      const dateParts = this.order_item.date.split(" ")[0].split("-");
      return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    },

    totalSumOrder() {
      let totalUSD = 0;
      let totalUAH = 0;
      let quantityProduct = 0;
      for (let item of this.PRODUCTS)
        if (this.order_item.date === item.date) {
        quantityProduct += 1
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
  <div class="order-item">
    <div class="order-item-container">
      <div class="row">
        <div class="col-md-1">{{ order_item.title }}</div>
        <div class="col-md-2">
          <div class="col-md-2-icon">
            <i class="material-icons">format_line_spacing</i>
          </div>
          <div class="col-md-2-title">{{totalSumOrder.quantityProduct}} Продукта</div>
        </div>
        <div class="col-md-3">{{ formattedDateOrder }}</div>
        <div class="col-md-4">
            <p>{{ totalSumOrder.totalUSD }} USD</p>
            <p>{{ totalSumOrder.totalUAH }} UAH</p>
        </div>
        <div class="col-md-5"><span class="material-icons"> delete </span></div>
      </div>
    </div>
  </div>
</template>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
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
  flex-wrap: wrap;
  max-width: 20%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col-md-2-icon {
    flex: 1 1 auto;
}
.col-md-2-title {
    flex: 1 1 auto;
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
</style>
