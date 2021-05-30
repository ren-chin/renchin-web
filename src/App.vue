<template>
  <router-view />
</template>

<style lang="scss">
@import "./assets/stylesheets/reset";
@import "./assets/stylesheets/keifont";

#app {
  font-family: heisei-maru-gothic-std, sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
