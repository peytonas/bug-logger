<template>
<body>
  <div id="deets">
    <Deets />
  </div>
</body>
</template>
<script>
import Deets from "@/components/Details.vue";
export default {
  name: "deets",
  components: { Deets }
};
</script>
<style>
#deets {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>