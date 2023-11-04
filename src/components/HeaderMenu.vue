<template>
  <div class="header">
    <img class="logo" src="@/assets/logo.png">
    <h1>Заголовок</h1>
    </div>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  max-width: $desktop ;
}
.logo {
  width: 100px;
  height: 50px;
}
h1 {
  margin: 40px 0 0;
}
</style>
