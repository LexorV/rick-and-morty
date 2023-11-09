<template>
  <div class="header">
    <router-link to='/'><img class="logo" src="@/assets/logo.png">
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content:center;
  align-items: center;
  max-width: $desktop ;
  margin-bottom: 20px;
}
.logo {
  width: 250px;
  height: 75px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
}
h1 {
  margin: 0;
}
</style>
