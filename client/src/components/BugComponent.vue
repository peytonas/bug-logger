<template>
  <tr class="bugComponent">
    <td>{{bugProp.title}}</td>
    <td>{{bugProp.reportedBy}}</td>
    <td>{{this.status}}</td>
    <td>{{bugProp.createdAt}}</td>
  </tr>
</template>
<script>
export default {
  name: "bug",
  data() {
    return {
      status: this.bugProp.closed ? "closed" : "open"
    };
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  props: ["bugProp"]
};
</script>