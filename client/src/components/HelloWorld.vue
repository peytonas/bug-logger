<template>
<body>
  <div class="row">
    <div class="col hello">
      <h1>{{ msg }}</h1>
      <!-- <router-link to="/about">
        <span class="icon">
          <i class="fas fa-exclamation-circle"></i>
        </span>
      </router-link>-->
    </div>
  </div>
  <table>
    <tr>
      <th>Title</th>
      <th>Reported By</th>
      <th>Status</th>
      <th>Last Modified</th>
    </tr>
    <Bug v-for="bug in bugs" :bugProp="bug" :key="bug._id" />
  </table>
</body>
</template>

<script>
import Bug from "../components/BugComponent.vue";
export default {
  name: "HelloWorld",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  props: {
    msg: String
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  components: { Bug }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
