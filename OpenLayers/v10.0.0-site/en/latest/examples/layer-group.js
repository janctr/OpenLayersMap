"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2840],{34915:function(e,n,s){var i=s(41564),o=s(28e3),t=s(14407),c=s(87240),a=s(12185),r=s(99110),u=s(28487);const l="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ";!function e(n,s){s.getLayers().forEach((function(s,i){const o=n+i;!function(e,n){const s=$(e+" input.visible");s.on("change",(function(){n.setVisible(this.checked)})),s.prop("checked",n.getVisible());const i=$(e+" input.opacity");i.on("input",(function(){n.setOpacity(parseFloat(this.value))})),i.val(String(n.getOpacity()))}(o,s),s instanceof r.A&&e(o,s)}))}("#layer",new i.A({layers:[new a.A({source:new o.A}),new r.A({layers:[new a.A({source:new t.A({url:"https://api.tiles.mapbox.com/v4/mapbox.20110804-hoa-foodinsecurity-3month.json?secure&access_token="+l,crossOrigin:"anonymous"})}),new a.A({source:new t.A({url:"https://api.tiles.mapbox.com/v4/mapbox.world-borders-light.json?secure&access_token="+l,crossOrigin:"anonymous"})})]})],target:"map",view:new c.Ay({center:(0,u.Rb)([37.4057,8.81566]),zoom:4})}).getLayerGroup()),$("#layertree li > span").click((function(){$(this).siblings("fieldset").toggle()})).siblings("fieldset").hide()}},function(e){var n;n=34915,e(e.s=n)}]);
//# sourceMappingURL=layer-group.js.map