<template>
  <div>
    <router-link class="event-link" :to="{ name: 'EventShow', params: {id:event.id}}">
      <b-card class="event-card">
        <span class="time-date">@{{ event.time }} on {{ event.date }}</span>
        <h4 class="title">{{ event.title }}</h4>
        <span class="attending">Number Attending: {{ event.attendees.length }}</span>
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Eventcard",
  props: {
    event: Object
  }
};
</script>

<style scoped lang="scss">
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
