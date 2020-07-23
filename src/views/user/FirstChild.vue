<template>
  <div class="first">
    <h1>this is a FirstChild</h1>
          <router-link to="{name: 'first'}">first </router-link> |
      <router-link to="{name: 'second'}">second </router-link>
    <router-view/>
  </div>
</template>
