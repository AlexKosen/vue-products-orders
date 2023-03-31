<script>
export default {

}
</script>

<template>
  <div class="product">
    <div class="status-icon">
        <div class = "circle"></div>
    </div>
    <div class="product-image">
        <span class="material-icons">
desktop_windows
</span>
    </div>
    <div class="product-details">
        <p>Name product</p>
    </div>
    <div class="serviceability">Исправен</div>
    <div class="guarantee">guarantee</div>
    <div class="condition">Новый</div>
    <div class="price">1000$</div>
    <div class="name-group-prodact">Название группы товаров</div>
    <div class="autor-order">Автор прихода</div>
    <div class="name-order">Название прихода</div>
    <div class="order-date">Дата прихода</div>
    <div class="delete-icon">
        <span class="material-icons">
delete
</span>
    </div>
  </div>
</template>

<style>
.product {
  display: flex;
  justify-content: space-between;
  width: 95%;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #fff;
  box-sizing: border-box;
}
.status-icon {
    display: flex;
    align-items: center;
}
.product-image {
  width: 5%;
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-details {
  width: 20%;
  box-sizing: border-box;
}
.circle {
    width: 10px;
    height: 10px;
    background: rgb(102, 255, 0);
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
} 

</style>
