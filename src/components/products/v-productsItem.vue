<script>

export default {
    props: {
        product_info: {
            type: Object,
            default() {
                return {}
            }
        }

    }
}
</script>
<template>
      <div class="product-item">
    <div class="status-icon">
      <div class="circle"></div>
    </div>
    <div class="product-image">
      <span class="material-icons"> desktop_windows </span>
    </div>
    <div class="product-name">
      <p>{{ product_info.title }}</p>
    </div>
    <div class="serviceability">Исправен</div>
    <div class="guarantee">
        с {{ product_info.guarantee.start }} 
        по {{ product_info.guarantee.end }}
    </div>
    <div class="condition">Новый</div>
    <div class="price">1000$</div>
    <div class="name-group-prodact">Название группы товаров</div>
    <div class="autor-order">Автор прихода</div>
    <div class="name-order">Название прихода</div>
    <div class="order-date">Дата прихода</div>
    <div class="delete-icon">
      <span class="material-icons"> delete </span>
    </div>
  </div>
</template>
<style>
.product-item {
  display: flex;
  justify-content: space-between;
  width: 95%;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #fff;
  box-sizing: border-box;
}
.product-item div {
  display: flex;
  padding: 0 5px;
  align-items: center;
  box-sizing: border-box;
}
.status-icon {
  display: flex;
  align-items: center;
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-name {
  width: 15%;
  box-sizing: border-box;

}
.name-group-prodact {
  width: 15%;
}
.name-order {
  width: 15%;
}
.circle {
  width: 10px;
  height: 10px;
  background: rgb(102, 255, 0);
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
}
.serviceability {
  padding: 0 5px;
}
</style>