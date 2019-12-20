<template>
  <tr class="bug" @click="selectBug(bugProp._id)">
    <td>{{bugProp.title}}</td>
    <td>{{bugProp.reportedBy}}</td>
    <td class="status open">{{this.status}}</td>
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
    if ("closed") {
      let elem = document.getElementsByClassName("status");
      elem.classList.remove("open");
      elem.classList.add("closed");
    }
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