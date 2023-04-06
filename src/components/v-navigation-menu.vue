<script>
export default {};
</script>

<template>
  <div class="sidebar">
    <div class="avatar">
      <img src="https://placekitten.com/200/200" alt="User Avatar" />
    </div>
    <ul>
      <li href="/orders" :class="{ active: $route.path === '/orders' }">
        <router-link :to="{ name: 'orders' }">Приходы</router-link>
      </li>
      <li href="/" :class="{ active: $route.path === '/' }">
        <router-link :to="{ name: 'product' }">Продукты</router-link>
      </li>
      <li><a>Группы</a></li>
    </ul>
  </div>
</template>

<style>
.sidebar {
  width: 200px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  padding-left: 40px;
  z-index: 1;
}
.sidebar ul {
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
}
.sidebar li a {
  display: block;
  padding: 8px 0;
  color: black;
  text-decoration: none;
}

.sidebar li a:hover {
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  /* background-color: #e6e3e3;
  width: 100px;
  border-radius: 8px; */
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 130px 0 20px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.active {
  padding-top: 1px;
  width: 80px;
  border-bottom: 2px solid rgb(9, 216, 9);
}
</style>
