<template>
  <div id="app">
    <div class="test">
      <pyramid v-if="showPyramid" :options="ops" :data="datas" />
    </div>
  </div>
</template>

<script>
import Pyramid from "@/components/Pyramid";
export default {
  name: "App",
  components: {
    Pyramid,
  },
  data() {
    return {
        ops: {},
        showPyramid: false,
        htmlFz: 14,
        datas: [
            { name: '县级', value: 2555 },
            { name: '乡镇', value: 2525 },
            { name: '村级', value: 2555 }
        ]
    }
  },
  mounted() {
    this.initPyramidOpt();
  },
    methods: {
		initPyramidOpt () {
			this.ops = {
				title: '防火人员资源',
				// 主体离边框距离
				distance: [35, 5],
				// 主体偏移值 (x,y)
				offset: [-50, 3],
				// 排序(max , min)优先
				sort: 'max',
				// 颜色
				color: [
					'rgba(44, 115, 166, 0.1)',
					'rgba(44, 115, 166, 0.3)',
					'rgba(44, 115, 166, 0.6)'
					/* 'rgba(150,226,246,0.5)',
					'rgba(93,177,237,0.5)',
					'rgba(44,115,166,0.5)' */
				],
				// 格式化字体输出
				fontFormatter: (val) => {
					return `${val.name} ${val.value}人`;
				},
				tooltip: {
					show: true,
					formatter: (val) => {
						return `
							<div style="margin: 0px 0 0; color:#000; line-height: 1; border: 1px solid rgba(0,129,255,1); background-color: rgba(0,50,99,0.65); border-radius: 4px; padding: 10px; pointer-events: none; box-shadow: rgb(0 0 0 / 20%) 1px 2px 10px; white-space: nowrap;">
								<div style="color: #FFFFFF; font-size: 14px; font-weight: 400; line-height: 1">
									${val.obj.title}
								</div>
								<div style="margin-top: 10px; display: flex; align-item: center;">
									<span
										style="
											display: inline-block;
											margin-right: 4px;
											border-radius: 50%;
											width: 15px;
											height: 15px;
											background-color:  ${val.obj.color};
										"
									></span>
									<span style="font-size: 14px; color: #FFFFFF; font-weight: 400; margin-left: 2px;"> ${val.obj.name}</span>
									<span style="float: right; margin-left: 20px; font-size: 14px; color: #FFFFFF;; font-weight: 900"> ${val.obj.value}人</span>
								</div>
							</div>
						`;
					}
				},
				// 样式
				infoStyle: {
					stroke: true,
					color: '#FFFFFF',
					setLineDash: [4, 4], // 虚线值
					size: 14, // 字体大小
					width: 120, // 设置多少 就会在基础上加上设置的值
					offset: [0, 0],
					dotSize: 2 // 点大小
				}
			};
			this.showPyramid = true;
		}
    },
};
</script>

<style lang="scss">
#app,
body {
  background-color: rgb(72, 72, 72);
  height: 100%;
  .test {
    width: 800px;
    height: 600px;
  }
}
</style>
