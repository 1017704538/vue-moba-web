<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper1.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper2.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper3.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3">
          <i class="sprite sprite-blz"></i>
          <div class="py-2">爆料站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-gsz"></i>
          <div class="py-2">故事站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-zbsc"></i>
          <div class="py-2">周边商城</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-tyf"></i>
          <div class="py-2">体验服</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-xrzq"></i>
          <div class="py-2">新人专区</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-rycc"></i>
          <div class="py-2">荣耀·传承</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-wzyd"></i>
          <div class="py-2">王者营地</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-gzh"></i>
          <div class="py-2">公众号</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-blz"></i>
          <div class="py-2">版本介绍</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-blz"></i>
          <div class="py-2">对局环境</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-blz"></i>
          <div class="py-2">无限王者团</div>
        </div> 
        <div class="nav-item mb-3">
          <i class="sprite sprite-blz"></i>
          <div class="py-2">创意互动营</div>
        </div>               
      </div>

      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home",
          clickable: true //允许分页点击跳转
        },
        //自动播放
        autoplay: {
          delay: 2000
        }
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  created() {}
};
</script>


<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
