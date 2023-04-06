<script>


export default {
  data() {
    return {
      currentTime: new Date(),
      currentDay: '',
    }
  },
  computed: {
    formattedTime() {
      const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      };
      return this.currentTime.toLocaleDateString('ru-RU', options).replace(',', '');
    }
  },

  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
    this.currentDay = new Date().toLocaleString('ru-RU', { weekday: 'long' });


  }
}
</script>

<template>
  <nav class="top-menu">
    <ul>
      <li class="top-menu-img">
        <img :src="'images/' + 'Infinix Logo.png'" alt="img" style="width:100%; height:100%;"/>
      </li>
      <li>
        <input
          type="text"
          id="inputField"
          name="inputField"
          placeholder="Поиск"
        />
      </li>
      <li>
        <p>{{ currentDay }}</p>
        <p>{{ formattedTime }}</p>
      </li>
    </ul>
  </nav>
</template>

<style>
.top-menu {
  background-color: #fff;
  color: #000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  height: 100px;
  position: fixed;
  left: 0;
  right: 20%;
  top: 0;
  z-index: 2;
}

.top-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.top-menu-img {
  width: 100px;
}
.top-menu li, p {
  margin: 0 10px;
}

.top-menu a {
  display: block;
  color: #000;
  text-decoration: none;
  padding: 10px;
  height: 100%;
  transition: background-color 0.3s ease;
}

.top-menu a:hover {
  background-color: #ddd;
}

input[type="text"] {
  width: 350px;
  padding: 2px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  outline: none;
}

input[type="text"]:focus {
  background-color: #f1f1f1;
  box-shadow: inset 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
}

</style>
