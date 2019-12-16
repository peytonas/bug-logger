<template>
  <tr class="bugComponent">
    <td v-for="bug in bugs" :bugProp="bug" :key="bug._id">{{bug.title}}</td>
  </tr>
</template>
<script>
export default {
  name: "bug",
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  }
};
</script>