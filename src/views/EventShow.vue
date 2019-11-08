<template>
  <div>
    <div>@{{event.time}} on {{event.date}}</div>
    <h1>Showing Event: {{ event.title }}</h1>
    <h5>Organized by: {{event.organizer}}</h5>
    <h5>Category: {{event.category}}</h5>
    <div>Location: {{event.location}}</div>
    <h4>Event Details</h4>
    <div>{{event.description}}</div>
    <h4>Attendees: {{event.attendees ? event.attendees.length:0}}</h4>

    <ul>
      <li v-for="(attendee, index) in event.attendees" :key="index">{{attendee.name}}</li>
    </ul>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  name: "EventShow",
  props: ["id"],
  data() {
    return {
      event: {}
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data;
      })
      .catch(error => {
        console.log("There was an error: " + error.response);
      });
  }
};
</script>

<style scoped lang="scss">
</style>