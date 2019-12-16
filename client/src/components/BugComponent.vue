<template>
  <tr class="bugComponent">
    <td>{{bugProp.title}}</td>
    <td>{{bugProp.reportedBy}}</td>
    <td id="status">{{bugProp.closed}}</td>
    <td>{{bugProp.createdAt}}</td>
  </tr>
</template>
<script>
export default {
  name: "bug",
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {
    status() {
      if (bugProp.closed == false) {
        bugProp.closed = "open";
      }
    }
  },
  props: ["bugProp"]
};
</script>