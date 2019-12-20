<template>
  <div class="container-fluid">
    <div id="nav" class="row justify-content-between align-content-center bar">
      <div class="col-2">
        <router-link to="/">
          bug
          <span class="icon">
            <i class="fas fa-bug"></i>
          </span>
          log
        </router-link>
      </div>
      <div class="col-1">
        <span class="icon" data-toggle="modal" data-target=".bd-example-modal-lg">
          <i class="fas fa-exclamation-circle"></i>
        </span>
      </div>
      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Report New Bug:</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addBug()">
                <div class="form-group">
                  <label>title</label>
                  <input
                    class="form-control"
                    placeholder="title..."
                    v-model="newBug.title"
                    required
                  />
                </div>
                <div class="form-group">
                  <label>reported by</label>
                  <input
                    class="form-control"
                    placeholder="name..."
                    v-model="newBug.reportedBy"
                    required
                  />
                </div>
                <div class="form-group">
                  <label>comment</label>
                  <input
                    class="form-control"
                    placeholder="input type..."
                    v-model="newBug.description"
                    required
                  />
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Submit Bug</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "navbar",
  methods: {
    addBug() {
      this.$store.dispatch("create", this.newBug);
      this.newBug = {
        title: "",
        reportedBy: "",
        description: ""
      };
    }
  },
  data() {
    return {
      newBug: {
        title: "",
        reportedBy: "",
        description: ""
      }
    };
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

.icon {
  font-size: 40px;
  color: #2c3e50;
}

.bar {
  background-color: #42b983;
  height: 80px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
