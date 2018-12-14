<template>
  <div class="home">
    <!-- <button class="map" @click="location()">点击获取位置</button> -->
    <div id="map">
        <baidu-map class='baidumap'
        :center="{lng:113.338248,lat:23.176212}"
        :point="{lng:113.338248,lat:23.176212}"
        :zoom="15"
        :scroll-wheel-zoom="true"
        :mapStyle="{styleJson:styleJson}"
        mapType="BMAP_NORMAL_MAP">
        </baidu-map>
    
    </div>
    <Header/>
    <!-- <Homelist/> -->
  </div>
</template>
<script>
import Header from "../../components/Vheader.vue";
import Homelist from "./Homelist.vue";
import axios from "axios";
import { setTimeout } from "timers";
export default {
  name: "home",
  components: {
    Header,
    Homelist
  },
  data() {
    return {
      latitude: "23",
      longitude: "118"
    };
  },
  methods: {
    location() {
      var that = this;
      if (window.plus) {
        plus.geolocation.getCurrentPosition(
          function(p) {
            //   alert(
            //     "Geolocation\nLatitude:" +
            //       p.coords.latitude +
            //       "\nLongitude:" +
            //       p.coords.longitude +
            //       "\nAltitude:" +
            //       p.coords.altitude
            //   );
            that.latitude = p.coords.latitude;
            that.longitude = p.coords.longitude;
            that.sendLocation();
          },
          function(e) {
            alert("Geolocation error: " + e.message);
          }
        );
      } else {
        that.sendLocation();
      }
    },
    sendLocation() {
      var that = this;
      axios
        .get("http://10.3.136.16:9999/map", {
          params: {
            latitude: that.latitude,
            longitude: that.longitude
          }
        })
        .then(data => {
          console.log(data);
        })
        .catch(() => {});
    }
  },
  plusReady() {
    // 确保DOM解析完成
    if (!em || !window.plus || map) {
      return;
    }

    // map = new plus.maps.Map("map");
    // point = new BMap.Point(that.latitude, that.longitude);
    // // map.centerAndZoom(point, 11);
    // map.centerAndZoom(new plus.maps.Point(that.latitude, that.longitude), 12);
    // var marker = new BMap.Marker(point);
    // map.addOverlay(marker);
    var map = new BMap.Map('map');
// 创建地图实例
var point = new BMap.Point(116.404, 39.915);
// 创建点坐标
map.centerAndZoom(point, 11);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point);
map.addOverlay(marker);
  },

  mounted() {
    setInterval(() => {
      this.location();
    }, 5000);
    if (window.plus) {
      this.plusReady();
    } else {
      document.addEventListener("plusready", plusReady, false);
    }
  }
};
</script>
<style scoped>

#map {
  width: 100%;
  position: fixed;
  top: 0px;
  bottom: 0px;
  height: 600px;
  line-height: 600px;
  text-align: center;
  background: #ffffff;
}
.baidumap{
    height: 600px;
    width:100%;
}
</style>