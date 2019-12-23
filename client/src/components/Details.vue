<template>
  <div id="details" class="body">
    <div class="deets row justify-content-between ml-1 mt-2">
      <div class="col-5 card">
        <p>title:</p>
        <h1>{{bug.title}}</h1>
      </div>
      <div class="col-2 text-right">
        <!-- <input id="check" class="form-check-input" type="checkbox" @click="toggle()" /> -->
      </div>
    </div>
    <div class="deets row justify-content-between ml-1">
      <div class="col-5 card text-left">
        <p>reported by:</p>
        <h1>{{bug.reportedBy}}</h1>
      </div>
      <div class="col-4 text-center">
        <h1 class="status open" v-if="bug.closed == false">{{this.status}}</h1>
        <h1 class="status closed" v-else>{{this.status}}</h1>
      </div>
    </div>
    <div class="deets row ml-1">
      <div class="col-5 card text-left">
        <p>description:</p>
        <h1 class>{{bug.description}}</h1>
      </div>
    </div>
    <div class="row mt-3">
      <h1>NOTES</h1>
    </div>
    <div class="row">
      <div class="col">
        <table>
          <tr>
            <th>Reported By</th>
            <th>Note</th>
            <th>Last Modified</th>
          </tr>
          <Note v-for="note in notes" :noteProp="note" :key="note._id" />
        </table>
      </div>
      <div class="col-1">
        <span class="icon" data-toggle="modal" data-target=".note-modal">
          <i class="fas fa-exclamation-circle"></i>
        </span>
      </div>
      <div
        class="modal fade note-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">New Note:</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addNote()">
                <div class="form-group">
                  <label>reported by:</label>
                  <input
                    class="form-control"
                    placeholder="name..."
                    v-model="newNote.reportedBy"
                    required
                  />
                </div>
                <div class="form-group">
                  <label>note:</label>
                  <input
                    class="form-control"
                    placeholder="title..."
                    v-model="newNote.content"
                    required
                  />
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Submit Note</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Note from "../components/Note.vue";
export default {
  name: "deets",
  mounted() {
    this.getActiveBug(this.$route.params.id);
    this.$store.dispatch("getNotes", this.$route.params.id);
  },
  data() {
    return {
      status: this.$store.state.activeBug.closed ? "closed" : "open",
      newNote: {
        content: "",
        bug: "",
        reportedBy: ""
      }
    };
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {
    getActiveBug() {
      this.$store.dispatch("getById", this.$route.params.id);
    },
    toggle() {
      let bug = this.$store.state.activeBug;
      bug.closed = !bug.closed;
      this.$store.dispatch("edit", this.$route.params.id);
    },
    addNote() {
      this.$store.dispatch("createNote", {
        reportedBy: this.newNote.reportedBy,
        content: this.newNote.content,
        bug: this.$route.params.id
      });
      this.$store.dispatch("getNotes", this.bug._id);
    }
  },
  components: { Note }
};
</script>
<style>
#details {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
