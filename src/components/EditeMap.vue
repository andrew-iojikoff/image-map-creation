<template>
  <div class="img-container">
    <img ref="img" class="img-map" :src=" imageSrc " alt="Изображение для создания карты">
    <div ref="canvas" class="canvas"></div>
  </div>
</template>
<script>
import {getWinSizeInitial, getCoords, resizeImage} from '../tools/tools';
import { EventBus } from '../event-bus.js';
import { store } from '../store';
import * as d3 from 'd3';

export default {
  name: 'EditeMap',
  data () {
    return {
      svgObj: null,
      svgElem: null,
      currentPolygon: []
    };
  },
  methods: {
    initMap: function () {
      if(!store.state.isImageLoad){
          return false;
      }
      this.svgObj = d3.select(this.$refs.canvas)
        .append("svg")
        .attr("width", this.$refs.canvas.clientWidth)
        .attr("height", this.$refs.canvas.clientHeight)
        .classed("svg-element", true);
      this.svgElem = document.getElementsByClassName('svg-element')[0];
    },

    createNewPolygon: function (event) {
      if(this.currentPolygon === undefined || this.currentPolygon.length <= 1){
        let dotCoords = getCoords(this.svgElem, event);
        this.currentPolygon.push({
            x: dotCoords.x_,
            y: dotCoords.y_
        });
        let circles = this.svgObj.selectAll("circle")
          .data(this.currentPolygon)
          .enter()
          .append("circle")
          .style("stroke", "black")
          .style("fill", "gray")
          .attr("r", 4)
          .attr("cx", dotCoords.x_)
          .attr("cy", dotCoords.y_);
        if(this.currentPolygon.length === 1){

        }
//      }else if(this.currentPolygon.length == 1){

      }else{
        console.log('many');
      }
    },
  },
  computed: {
    imageSrc: function () {
      return this.$store.state.img;
    }
  },
  mounted () {
    this.$refs.img.onload = () => {
      resizeImage(this.$refs.img, this.$refs.canvas);
      this.initMap();
    };
    app.$refs.mainComponent.modManage('addImage');

    EventBus.$on('addRegion', ( $event ) => {
      this.svgElem.addEventListener('click', (event) => {
        this.createNewPolygon(event);
      });
    });
  }
};
</script>
<style scoped>
  .canvas{
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
  .img-map{
    margin-top: 5px;
  }
  .img-container{
    height: auto;
    display: flex;
  }
</style>
