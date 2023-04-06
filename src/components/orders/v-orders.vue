<script>
import vOrdersItem from "./v-ordersItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    vOrdersItem,
  },
  data() {
    return {
      className: "order-item",
      isShow: false,
    };
  },

  methods: {
    ...mapActions(["GET_ORDERS_FROM_API", "DELETE_ORDER_ITEM"]),

    showInfoProduct() {
      this.className = "order-item-shirt";
      this.isShow = true;
    },
    deleteShowInfoProduct() {
      this.className = "order-item"
      this.isShow = false;
      this.DELETE_ORDER_ITEM()
    },

  },
  computed: {
    ...mapGetters(["ORDERS","ORDERITEM", "PRODUCTS"]),

    showOrderItem() {
      let orderItem = [];
      for(let item of this.PRODUCTS) {
        if(this.ORDERITEM.date === item.date) {
          orderItem.push(item)
        }
      }
      return { orderItem }
    }
  },
  mounted() {
    this.GET_ORDERS_FROM_API();
  },
};
</script>

<template>
  <div class="order-wrapper">
    <div class="order-header">
      <div class="order-icon-add">
        <i class="material-icons">add_circle_outline</i>
      </div>
      <div class="order-title">Приходы/ {{ ORDERS.length }}</div>
    </div>
    <div class="container-item">
      <div :class="className">
        <vOrdersItem
          v-for="item in ORDERS"
          :key="item.id"
          :order_item="item"
          :isShow="isShow"
          @showInfo="showInfoProduct"
        />
      </div>

      <div class="order-item-container-product-info" v-show="isShow">
        <div
          class="order-item-container-btn-cancel"
          @click="deleteShowInfoProduct"
        >
          <i class="material-icons">cancel</i>
        </div>
        <div class="order-item-container-header">
          <div class="order-item-container-product-title">
           Приход: {{ORDERITEM.title}} от {{ ORDERITEM.date }}
          </div>
          <div class="order-item-container-product-icon">
            <i class="material-icons">add_circle_outline</i>
            <p class="order-item-addProduct">Добавить продукт</p>
          </div>
        </div>
        <div class="order-item-container-product" 
        v-for="item in showOrderItem.orderItem"
        :key="item.id">
          <div>
            <div class="circle" :class="{ 'circle': true, 'green': item.isNew, 'grey': !item.isNew }"></div>
          </div>
          <div class="order-item-img">
            <img :src="'images/' + item.photo" alt="img" style="width:100%; height:100%;"/>
          </div>
          <div>{{ item.title }}</div>
          <div>{{ item.isNew ? 'Свободен' : 'В ремонте' }}</div>
          <div><span class="material-icons"> delete </span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.order-header {
  display: flex;
  justify-content: flex-start;
  text-align: center;
  margin-bottom: 20px;
}
.order-icon-add {
  margin-right: 15px;
  color: rgb(9, 216, 9);
}
.order-title {
  font-weight: 600;
  font-size: 18px;
}
.container-item {
  display: flex;
  align-items: flex-start;
}

.order-item {
  width: 90%;
}
.order-item-shirt {
  width: 35%;
}
.order-item-container-product-info {
  display: flex;
  flex-direction: column;
  width: 45%;
  position: relative;
  margin-left: 5px;
  border: 1px solid #ccc;
}
.order-item-container-btn-cancel {
  position: absolute;
  top: -13px;
  right: -13px;
  color: grey;
}
.order-item-container-header {
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-weight: 600;
}
.order-item-container-product-icon {
  display: flex;
  text-align: center;
  color: rgb(9, 216, 9);
  margin-top: 5px;
}
.order-item-container-product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: #ccc 1px solid;
  min-height: 50px;
  background-color: #fff;
  margin: 1px;
  padding: 10px;
}
.order-item-img {
  flex: 0 0 10%;
  max-width: 10%;
  position: relative;
  width: 100%;
}
</style>
