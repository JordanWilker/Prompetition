(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15fe602c"],{"8e65":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var s=a("83fc"),c=a("41cb"),n=a("8a4e"),o=a("2b20"),u=a("fd98");class r{async startDuel(){try{const e=await o["a"].post("api/duels/startDuel");c["a"].push({name:"Duels",params:{id:e.data.id}})}catch(e){n["a"].error("Couldnt retrieve duels \n",e)}}async getDuels(){const e=await o["a"].get("api/duels");s["a"].duels=e.data.map(e=>new u["a"](e))}async test(e){return await o["a"].get("api/duels/test/"+e)}async getDuelById(e){const t=await o["a"].get("api/duels/"+e);s["a"].activeDuel=new u["a"](t.data)}async createUserBody(e,t){return await o["a"].put("api/duels/"+e.id,t)}async createDuelVote(e){return await o["a"].post("api/duelvotes",{duelId:e})}async increaseDuelVoteA(e){await o["a"].put(`api/duels/${e}/a`),this.getDuelById(e)}async increaseDuelVoteB(e){await o["a"].put(`api/duels/${e}/b`),this.getDuelById(e)}}const d=new r},be28:function(e,t,a){"use strict";a.r(t);var s=a("7a23");const c=Object(s["G"])("data-v-51ff651a");Object(s["u"])("data-v-51ff651a");const n={key:0},o={class:"component text-light"},u=Object(s["g"])(" Duel "),r={class:"form-group"},d=Object(s["h"])("label",{for:"exampleFormControlTextarea1"},"Write Reply",-1),i=Object(s["h"])("button",{class:"btn btn-success",type:"submit"}," Submit ",-1);Object(s["s"])();const l=c((e,t,a,c,l,b)=>c.state.activeDuel.body?(Object(s["r"])(),Object(s["d"])("div",n,[Object(s["h"])("div",o,[u,Object(s["h"])("button",{class:"btn btn-danger",onClick:t[1]||(t[1]=(...e)=>c.test&&c.test(...e)),hidden:""}," TEsting "),Object(s["g"])(" "+Object(s["A"])(c.state.activeDuel.body),1),Object(s["h"])("form",{onSubmit:t[3]||(t[3]=Object(s["F"])((...e)=>c.createUserBody&&c.createUserBody(...e),["prevent"]))},[Object(s["h"])("div",r,[d,Object(s["E"])(Object(s["h"])("textarea",{class:"form-control",id:"bodyA",rows:"3","onUpdate:modelValue":t[2]||(t[2]=e=>c.state.body=e)},null,512),[[s["C"],c.state.body]])]),i],32)])])):Object(s["e"])("",!0));var b=a("d89f"),p=a("6c02"),y=a("8e65"),j=a("83fc"),O={name:"Component",setup(){const e=Object(p["c"])(),t=Object(p["d"])();Object(s["p"])(()=>{b["a"].emit("join:room",e.params.id),y["a"].getDuelById(e.params.id)});const a=Object(s["v"])({body:"",activeDuel:Object(s["b"])(()=>j["a"].activeDuel),account:Object(s["b"])(()=>j["a"].account),user:Object(s["b"])(()=>j["a"].user)});return{state:a,test(){y["a"].test(e.params.id),logger.log(j["a"].activeDuel)},async createUserBody(){await y["a"].createUserBody(j["a"].activeDuel,{body:a.body}),logger.log("Bames Nonds having a stronk, call a bondulance"),t.push("list")}}},components:{}};O.render=l,O.__scopeId="data-v-51ff651a";t["default"]=O}}]);