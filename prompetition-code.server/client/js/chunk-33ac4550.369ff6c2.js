(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33ac4550"],{"00a3":function(t,a,c){},"48d1":function(t,a,c){"use strict";c("00a3")},"8df8":function(t,a,c){"use strict";c.d(a,"a",(function(){return d}));var e=c("83fc"),o=c("9f2e"),s=c("8a4e"),n=c("2b20");class i{async getTopics(){try{const t=await n["a"].get("api/topics");e["a"].topics=t.data.map(t=>new o["a"](t))}catch(t){s["a"].error("Couldnt retrieve topics \n",t)}}async getTodaysTopic(){try{const t=await n["a"].get("api/topics/dailyChallenge");e["a"].todaysTopic=new o["a"](t.data),e["a"].activeTopic=e["a"].todaysTopic}catch(t){s["a"].error(t)}}async getTopicById(t){try{const a=await n["a"].get("api/topics/"+t);e["a"].activeTopic=new o["a"](a.data[0])}catch(a){s["a"].error(a)}}}const d=new i},cd0f:function(t,a,c){"use strict";c.r(a);var e=c("7a23");const o=Object(e["G"])("data-v-1bbdd091");Object(e["u"])("data-v-1bbdd091");const s={class:"col-12"},n=Object(e["h"])("input",{type:"date",name:"date",id:"date",class:"my-3 rounded p-2 border border-dark"},null,-1);Object(e["s"])();const i=o((t,a,c,o,i,d)=>{const r=Object(e["y"])("Topic");return Object(e["r"])(),Object(e["d"])("div",s,[n,(Object(e["r"])(!0),Object(e["d"])(e["a"],null,Object(e["x"])(o.state.topics,t=>(Object(e["r"])(),Object(e["d"])(r,{key:t.id,topic:t},null,8,["topic"]))),128))])});var d=c("83fc"),r=c("8df8"),p={name:"Topics",setup(){Object(e["p"])(()=>{r["a"].getTopics()});const t=Object(e["v"])({topics:Object(e["b"])(()=>d["a"].topics)});return{state:t}}};c("48d1");p.render=i,p.__scopeId="data-v-1bbdd091";a["default"]=p}}]);