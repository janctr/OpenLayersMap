"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4645],{21856:function(e,t,r){var o=r(49208),a=r(15264),n=r(41564),s=r(29810),p=r(87240),i=r(88292),c=r(44689),w=r(23986),u=r(12185),m=r(10135),l=r(27542);(0,r(28487).n0)();const y=new s.A({format:new o.A,url:function(e){return"https://ahocevar.com/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=osm:water_areas&outputFormat=application/json&srsname=EPSG:4326&bbox="+e.join(",")+",EPSG:4326"},strategy:(0,l.Vs)((0,m.EN)({tileSize:512}))}),h=new w.A({source:y,style:new i.Ay({stroke:new c.A({color:"rgba(0, 0, 255, 1.0)",width:2})})}),g=new u.A({source:new a.A({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",tileSize:512,maxZoom:20})});new n.A({layers:[g,h],target:document.getElementById("map"),view:new p.Ay({center:[-80.0298,43.4578],maxZoom:19,zoom:12})})}},function(e){var t;t=21856,e(e.s=t)}]);
//# sourceMappingURL=vector-wfs-geographic.js.map