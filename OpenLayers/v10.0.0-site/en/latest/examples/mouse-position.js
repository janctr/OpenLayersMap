"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1080],{64915:function(e,t,n){var o=n(41564),c=n(8841),s=n(28e3),a=n(12185),r=n(87240),i=n(61341),u=n(76825);const m=new c.A({coordinateFormat:(0,i.z)(4),projection:"EPSG:4326",className:"custom-mouse-position",target:document.getElementById("mouse-position")});new o.A({controls:(0,u.N)().extend([m]),layers:[new a.A({source:new s.A})],target:"map",view:new r.Ay({center:[0,0],zoom:2})});document.getElementById("projection").addEventListener("change",(function(e){m.setProjection(e.target.value)}));document.getElementById("precision").addEventListener("change",(function(e){const t=(0,i.z)(e.target.valueAsNumber);m.setCoordinateFormat(t)}))}},function(e){var t;t=64915,e(e.s=t)}]);
//# sourceMappingURL=mouse-position.js.map