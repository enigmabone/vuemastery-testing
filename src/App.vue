<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'EventList' }">Event List</router-link>|
      <router-link :to="{ name: 'EventShow'}">Show Event #1</router-link>|
      <router-link :to="{ name: 'EventCreate'}">Create Event</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
#app {
  text-align: center;
}
</style>
