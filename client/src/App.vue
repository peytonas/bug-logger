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
        <span class="icon">
          <i class="fas fa-exclamation-circle"></i>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-4 text-left">
        <router-view />
      </div>
    </div>
  </div>
</template>

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
