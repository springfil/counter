<template>
<div class="container">
  <h1>Counter</h1>
 <my-component />
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 380px;
  margin: 35px auto;
  overflow: auto;
  min-height: 200px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

</style>