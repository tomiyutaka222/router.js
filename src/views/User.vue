<template>
  <div class="user">
    <h1>{{this.$route.params.id}}</h1>
          <router-link tag="button" to="{name: 'first'}">first </router-link> |
      <router-link tag="button" to="{name: 'second'}">second </router-link>
    <router-view/>
  </div>
</template>

<style>
.router-link-exact-active{
  font-size: 30px;
  color: red;
}

</style>
