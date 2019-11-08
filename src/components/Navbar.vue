<template>
  <div>
    <b-navbar toggleable="sm" class="navbar-main">
      <b-navbar-brand>
        <router-link :to="{ name: 'EventList' }">Events App</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link :to="{ name: 'EventList' }">Event List</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'EventCreate'}">Create Event</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'User', params: {username: 'Kyle'}}">Kyle</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped lang="scss">
.navbar-main {
  background: #243e5e;
  color: #ffffff;
  margin-bottom: 2rem;
  .navbar-brand a {
    color: #ffffff;
    &:hover {
      color: #eeeeee;
      text-decoration: none;
    }
  }
  .nav-item {
    a {
      color: #ffffff;
      &:hover {
        color: #eeeeee;
        text-decoration: none;
      }
    }
  }
}
</style>