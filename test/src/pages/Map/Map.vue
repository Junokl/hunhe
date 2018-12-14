<template>
  <div @click="getPuls()">点击获取位置</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  motheds: {
    getPuls() {
      plus.geolocation.getCurrentPosition(
        function(p) {
          alert(
            "Geolocation\nLatitude:" +
              p.coords.latitude +
              "\nLongitude:" +
              p.coords.longitude +
              "\nAltitude:" +
              p.coords.altitude
          );
        },
        function(e) {
          alert("Geolocation error: " + e.message);
        }
      );
    }
  },
  mounted(){
      
  }
};
</script>
<style scoped>
</style>
