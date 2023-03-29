<script>
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'
export default {};
</script>

<template>
  <div class="sidebar">
    <div class="avatar">
        <img src="https://placekitten.com/200/200" alt="User Avatar">
    </div>
    <ul>
      <li><a href="#">Приход</a></li>
      <li><a href="#">Группы</a></li>
      <li><a href="#">Продукты</a></li>
    </ul>
  </div>
</template>

<style>
.sidebar {
  width: 250px;
  height: 100%;
  position: fixed;
  left: 0;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  padding: 20px;
  z-index: -1;
}

.sidebar ul {
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
}

.sidebar li a {
  display: block;
  color: #000;
  padding: 10px 0;
  text-decoration: none;
}

.sidebar li a:hover {
  background-color: #ddd;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  margin: 30px 0;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
