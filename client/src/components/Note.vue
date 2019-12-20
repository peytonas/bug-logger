<template>
  <tr class="note">
    <th>{{noteProp.reportedBy}}</th>
    <th>{{noteProp.content}}</th>
    <th>{{this.newDate}}</th>
    <th class="text-center">
      <i class="fas fa-dumpster" @click="deleteNote(noteProp.id)"></i>
    </th>
  </tr>
</template>
<script>
export default {
  name: "note",
  data() {
    return {
      newDate: this.noteProp.updatedAt
        .substring(0, this.noteProp.updatedAt.length - 8)
        .toString()
        .split("T")
        .join(" ")
    };
  },
  mounted() {},
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {
    deleteNote() {
      this.$store.dispatch("delete", this.noteprop.id);
    }
  },
  props: ["noteProp"]
};
</script>