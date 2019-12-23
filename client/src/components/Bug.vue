<template>
  <tr class="bug" @click="selectBug(bugProp._id)">
    <td>{{bugProp.title}}</td>
    <td>{{bugProp.reportedBy}}</td>
    <td class="status open" v-if="bugProp.closed == false">{{this.status}}</td>
    <td class="status closed" v-else>{{this.status}}</td>
    <td>{{this.newDate}}</td>
  </tr>
</template>
<script>
import router from "../router";
export default {
  name: "bug",
  mounted() {},
  data() {
    return {
      status: this.bugProp.closed ? "closed" : "open",
      newDate: this.bugProp.createdAt
        .substring(0, this.bugProp.createdAt.length - 8)
        .toString()
        .split("T")
        .join(" ")
    };
  },
  methods: {
    selectBug(bugPropId) {
      router.push({ path: `/bugs/` + bugPropId });
    }
  },
  props: ["bugProp"]
};
</script>
<style>
.open {
  color: red;
}
.closed {
  color: green;
}
</style>