(function(t){function e(e){for(var n,l,o=e[0],s=e[1],d=e[2],u=0,p=[];u<o.length;u++)l=o[u],i[l]&&p.push(i[l][0]),i[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},r=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0002":function(t,e,a){},"2cbd":function(t,e,a){"use strict";var n=a("d011"),i=a.n(n);i.a},"4d0e":function(t,e,a){"use strict";a.r(e);var n=a("c879"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("gantt",{attrs:{title:t.title,items:t.items}})],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"gantt-topbar"},[a("div",{staticClass:"gantt-title",domProps:{innerHTML:t._s(t.title)}}),a("div",{staticClass:"gantt-actions"},[a("div",{staticClass:"prev",on:{click:t.prev}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("polyline",{attrs:{points:"15 18 9 12 15 6"}})])]),a("flat-pickr",{ref:"input",model:{value:t.localStartDate,callback:function(e){t.localStartDate=e},expression:"localStartDate"}}),a("flat-pickr",{ref:"input",model:{value:t.localEndDate,callback:function(e){t.localEndDate=e},expression:"localEndDate"}}),a("div",{staticClass:"next",on:{click:t.next}},[a("svg",{staticClass:"feather feather-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("polyline",{attrs:{points:"9 18 15 12 9 6"}})])])],1)]),a("div",{ref:"gantt",staticClass:"gantt-chart"},[a("div",{staticClass:"gantt-header"},[a("div",{staticClass:"gantt-table",style:{width:t.table_width+"px"}},t._l(t.fields,function(e,n){return a("div",{key:n,staticClass:"table-cell",style:{width:e.width+"px"}},[t._v(t._s(e.label))])})),a("div",{staticClass:"gantt-graph",style:{width:t.graph_width+"px"}},t._l(t.dates,function(e,n){return a("div",{key:n,staticClass:"table-cell",style:{width:t.cell_width+"px"}},[t._v("\n                    "+t._s(t._f("moment")(e,"D MMM"))+"\n                ")])}))]),a("div",{staticClass:"gantt-content"},[a("div",{staticClass:"gantt-table",style:{width:t.table_width+"px"}},[t._l(t.items,function(e,n){return[a("div",{key:n,staticClass:"table-row"},t._l(Object.keys(e),function(n,i){return t.fields.hasOwnProperty(n)?a(t.fields[n].component,{key:i,tag:"component",staticClass:"table-cell",attrs:{width:t.fields[n].width},model:{value:e[n],callback:function(a){t.$set(e,n,a)},expression:"item[field]"}}):t._e()}))]})],2),a("div",{staticClass:"gantt-graph",style:{width:t.graph_width+"px"}},[t._l(t.items,function(e,n){return[a("div",{key:n,staticClass:"table-row"},t._l(t.dates,function(n,i){return a("div",{key:i,staticClass:"table-cell",style:{width:t.cell_width+"px"}},[t.compareDate(n,e.start_date)?a("div",{staticClass:"marker"}):t._e()])}))]})],2)]),t.canEdit?a("div",{staticClass:"gantt-content new"},[a("div",{staticClass:"gantt-table",style:{width:t.table_width+"px"}},[a("div",{staticClass:"table-row"},t._l(t.fields,function(t,e){return a(t.component,{key:e,tag:"component",staticClass:"table-cell",attrs:{width:t.width,placeholder:t.placeholder}})}))]),a("div",{staticClass:"gantt-graph",style:{width:t.graph_width+"px"}},[a("div",{staticClass:"table-row"})])]):t._e()])])},o=[],s=(a("456d"),a("ac6a"),a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{width:t.width+"px"}},[a("input",{ref:"input",staticClass:"cell",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.onUpdate(e.target.value)},blur:function(e){t.edit=!1}}})])}),d=[],c={props:{value:{type:String,required:!1},editable:{type:Boolean,default:!0,required:!1},width:{type:Number,default:300},placeholder:{type:String,default:"Add a new task..."}},methods:{onUpdate(t){this.$emit("input",t)}}},u=c,p=a("2877");function f(t){var e=a("7819");e.__inject__&&e.__inject__(t)}var h=Object(p["a"])(u,s,d,!1,f,"2551aa55",null,!0);h.options.__file="gantt-text.vue";var m=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{width:t.width+"px"},on:{click:t.editCell}},[a("flat-pickr",{ref:"input",attrs:{placeholder:t.placeholder,config:t.config},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},_=[],g={props:{value:{type:String,required:!1},editable:{type:Boolean,default:!0,required:!1},width:{type:Number,default:300},placeholder:{type:String,default:"01 Jan"}},data(){return{edit:!1,config:{altInputClass:"cell",altInput:!0,altFormat:"d M",dateFormat:"Y-m-d"}}},methods:{onUpdate(){this.$emit("input",value)},editCell(){this.editable&&(this.edit=!0)}}},w=g;function y(t){var e=a("4d0e");e.__inject__&&e.__inject__(t)}var b=Object(p["a"])(w,v,_,!1,y,"4db5b536",null,!0);b.options.__file="gantt-date.vue";var k=b.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{width:t.width+"px"}},[a("input",{ref:"input",staticClass:"cell",attrs:{type:"number",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.onUpdate(e.target.value)},blur:function(e){t.edit=!1}}})])},C=[],D={props:{value:{type:Number,required:!1},editable:{type:Boolean,default:!0,required:!1},width:{type:Number,default:95},placeholder:{type:String,default:"0"}},methods:{onUpdate:function(t){this.$emit("input",t)}}},S=D,j=(a("2cbd"),Object(p["a"])(S,x,C,!1,null,"5b4c379a",null));j.options.__file="gantt-number.vue";var M=j.exports,O={name:"Gantt",components:{GanttText:m,GanttDate:k,GanttNumber:M},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}},fields:{type:Object,default:function(){return{summary:{label:"Summary",component:"gantt-text",width:300,placeholder:"Add a new task..."},start_date:{label:"Start date",component:"gantt-date",width:95,placeholder:"Start"},end_date:{label:"End date",component:"gantt-date",width:95,placeholder:"End"},duration:{label:"Days",component:"gantt-number",width:50,placeholder:"0",max:!1,min:1}}}},levels:{type:Number,default:2},dateLimit:{type:Number,default:12},startDate:{type:String,default:function(){return n["a"].moment().format("YYYY-MM-DD HH:mm:ss")}},endDate:{type:String,default:function(){return n["a"].moment().add(7,"d").format("YYYY-MM-DD HH:mm:ss")}},canEdit:{type:Boolean,default:!0}},data:function(){return{gantt_width:0,table_width:0,graph_width:0,cell_width:0,dateFormat:"YYYY-MM-DD HH:mm:ss",localStartDate:this.startDate,localEndDate:this.endDate}},mounted:function(){var t=this;console.log("Mount triggered"),Object.keys(this.fields).forEach(function(e){t.table_width+=t.fields[e].width}),this.gantt_width=this.$refs.gantt.offsetWidth,this.graph_width=this.gantt_width-this.table_width,this.cell_width=this.graph_width/this.dateLimit},updated:function(){console.log("update triggered")},methods:{compareDate:function(t,e){return this.$moment(t).format("Y-M-D")===this.$moment(e).format("Y-M-D")},prev:function(){this.localStartDate=this.$moment(this.localStartDate).subtract(1,"d").format(this.dateFormat)},next:function(){this.localStartDate=this.$moment(this.localStartDate).add(1,"d").format(this.dateFormat)}},computed:{dates:function(){console.log("dates updated");for(var t=[],e=0;e<this.dateLimit;e++)t.push(this.$moment(this.localStartDate,this.dateFormat).add(e,"days").format(this.dateFormat));return t}},watch:{dates:function(){this.localEndDate=this.dates[this.dates.length-1]}}},Y=O,$=(a("725e"),Object(p["a"])(Y,l,o,!1,null,"2b46b5c6",null));$.options.__file="gantt.vue";var E=$.exports,P={name:"app",components:{Gantt:E},data:function(){return{title:"<p><strong>Salamander</strong> Gantt chart</p>",items:[{id:1,summary:"This is a task.",start_date:"2018-11-02 00:00",end_date:"2018-11-03 00:00",duration:1},{id:2,summary:"This is a task with a longer description.",start_date:"2018-11-03 00:00",end_date:"2018-11-04 00:00",duration:1},{id:3,summary:"You should first complete the first task.",start_date:"2018-11-04 00:00",end_date:"2018-01-11 00:00",duration:7},{id:4,summary:"And then, you should complete the second task.",start_date:"2018-11-07 00:00",end_date:"2018-11-09 00:00",duration:9},{id:5,summary:"Do not start with the last task.",start_date:"2018-11-09 00:00",end_date:"2018-11-15 00:00",duration:6},{id:6,summary:"It will make your project manager mad.",start_date:"2018-11-15 00:00",end_date:"2018-11-17 00:00",duration:2},{id:7,summary:"Very very very... mad.",start_date:"2018-11-17 00:00",end_date:"2018-11-19 00:00",duration:2},{id:8,summary:"But you only code once ;).",start_date:"2018-11-19 00:00",end_date:"2018-11-21 00:00",duration:2}]}}},B=P,F=Object(p["a"])(B,i,r,!1,null,null,null);F.options.__file="App.vue";var H=F.exports,N=a("c38f"),T=a.n(N);a("a1a3"),a("0952");n["a"].config.productionTip=!1,n["a"].use(a("2ead")),n["a"].component("flatPickr",T.a),new n["a"]({render:function(t){return t(H)}}).$mount("#app")},"725e":function(t,e,a){"use strict";var n=a("0002"),i=a.n(n);i.a},7819:function(t,e,a){"use strict";a.r(e);var n=a("f5bc"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},a1a3:function(t,e,a){},c879:function(t,e,a){},d011:function(t,e,a){},f5bc:function(t,e,a){}});
//# sourceMappingURL=app.5b905030.js.map