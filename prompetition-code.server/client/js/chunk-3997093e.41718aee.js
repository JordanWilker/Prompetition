(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3997093e"],{e542:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const s=Object(c["G"])("data-v-625a0e1a");Object(c["u"])("data-v-625a0e1a");const n={class:"col-md-6 box text-center text-light"},i={class:"row"},b={class:"row d-inline-flex align-items-center justify-content-center w-100"},l={class:"col-sm-8"},r={key:0,class:"d-flex justify-content-end align-content-center"},j={key:0},o=Object(c["h"])("button",{class:"btn btn-primary",type:"submit"}," Submit ",-1),u={class:"col-sm-2"},O=Object(c["h"])("div",{class:"row d-inline-flex justify-content-between w-50 my-4"},[Object(c["h"])("div",null,[Object(c["g"])(" 0 "),Object(c["h"])("i",{class:"fa fa-trophy fa-2x",title:"Daily Wins","aria-hidden":"true"})]),Object(c["h"])("div",null,[Object(c["g"])(" 0 "),Object(c["h"])("i",{class:"fa fa-heart fa-2x",title:"Competitive Likes","aria-hidden":"true"})]),Object(c["h"])("div",null,[Object(c["g"])(" 0 "),Object(c["h"])("i",{class:"fa fa-heart-o fa-2x",title:"Practice Likes","aria-hidden":"true"})])],-1),d={class:"row"},m={key:0,class:"col-12"},h={key:1,class:"col-12"},v={key:2,class:"col-12"},p={class:"position-fixed w-100 p-0 bg-custom text-cblue"},f={class:"navbar-nav d-flex flex-row p-0 w-100 justify-content-around"},w={class:"nav-item btn"},k={class:"nav-item btn"},y={class:"nav-item btn"};Object(c["s"])();const g=s((e,t,a,s,g,N)=>{const U=Object(c["y"])("UserWins"),x=Object(c["y"])("UserSubmissions"),S=Object(c["y"])("UserPractices");return Object(c["r"])(),Object(c["d"])("div",n,[Object(c["h"])("div",i,[Object(c["h"])("div",b,[Object(c["h"])("div",l,[s.state.editName?(Object(c["r"])(),Object(c["d"])("form",{key:1,onSubmit:t[4]||(t[4]=Object(c["F"])((...e)=>s.submitNewNickname&&s.submitNewNickname(...e),["prevent"]))},[Object(c["E"])(Object(c["h"])("input",{type:"text",name:"username",placeholder:"New Nickname... ","onUpdate:modelValue":t[2]||(t[2]=e=>s.state.newName=e)},null,512),[[c["C"],s.state.newName]]),Object(c["h"])("div",null,[o,Object(c["h"])("button",{class:"btn btn-primary",type:"button",onClick:t[3]||(t[3]=e=>s.state.editName=!s.state.editName)}," Cancel ")])],32)):(Object(c["r"])(),Object(c["d"])("div",r,[Object(c["h"])("h1",null,[s.state.activeUser==s.account?(Object(c["r"])(),Object(c["d"])("span",j," Welcome ")):Object(c["e"])("",!0),Object(c["g"])(" "+Object(c["A"])(s.state.activeUser.name),1)]),s.state.activeUser.id==s.account.id?(Object(c["r"])(),Object(c["d"])("i",{key:0,class:"fa fa-pencil","aria-hidden":"true",onClick:t[1]||(t[1]=e=>s.state.editName=!s.state.editName)})):Object(c["e"])("",!0)]))]),Object(c["h"])("div",u,[Object(c["h"])("img",{class:"rounded",src:s.state.user.picture,alt:""},null,8,["src"])])])]),O,Object(c["h"])("div",d,["wins"==s.state.pageState?(Object(c["r"])(),Object(c["d"])("div",m,[Object(c["h"])(U,{user:s.state.activeUser},null,8,["user"])])):Object(c["e"])("",!0),"submissions"==s.state.pageState?(Object(c["r"])(),Object(c["d"])("div",h,[Object(c["h"])(x,{user:s.state.activeUser},null,8,["user"])])):Object(c["e"])("",!0),"practices"==s.state.pageState?(Object(c["r"])(),Object(c["d"])("div",v,[Object(c["h"])(S,{user:s.state.activeUser},null,8,["user"])])):Object(c["e"])("",!0)]),Object(c["h"])("nav",p,[Object(c["h"])("ul",f,[Object(c["h"])("li",w,[Object(c["h"])("a",{class:"nav-link hoverable p-3 px-5",onClick:t[5]||(t[5]=e=>s.changeState("wins"))}," Wins ")]),Object(c["h"])("li",k,[Object(c["h"])("a",{class:"nav-link hoverable p-3 px-5",onClick:t[6]||(t[6]=e=>s.changeState("submissions"))}," Submissions ")]),Object(c["h"])("li",y,[Object(c["h"])("a",{class:"nav-link hoverable p-3 px-5",onClick:t[7]||(t[7]=e=>s.changeState("practices"))}," Practice ")])])])])});var N=a("83fc"),U=a("473f"),x=a("6c02"),S=a("c3ac"),C=a("02f2"),W=a("4803"),P=a("a838"),A={name:"Account",setup(){const e=Object(x["c"])(),t=Object(c["v"])({pageState:"wins",activeUser:Object(c["b"])(()=>N["a"].activeUserView),user:Object(c["b"])(()=>N["a"].user),editName:!1,newName:N["a"].account.name,responses:Object(c["b"])(()=>N["a"].responses),votes:Object(c["b"])(()=>N["a"].votes)});return Object(c["p"])(async()=>{e.params.id?U["a"].getUser(e.params.id):t.activeUser=Object(c["b"])(()=>N["a"].account),await P["a"].getAllResponses()}),{state:t,account:Object(c["b"])(()=>N["a"].account),changeState(e="wins"){t.pageState=e},submitNewNickname(){U["a"].editUserName(t.newName),t.editName=!1}}},components:{UserWins:S["default"],UserSubmissions:C["default"],UserPractices:W["default"]}};a("ffad");A.render=g,A.__scopeId="data-v-625a0e1a";t["default"]=A},f3b1:function(e,t,a){},ffad:function(e,t,a){"use strict";a("f3b1")}}]);