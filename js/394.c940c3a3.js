"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[394],{1394:function(t,i,e){e.r(i),e.d(i,{default:function(){return H}});var n=e(3396),s=e(7139),a=e(9242);const l=t=>((0,n.dD)("data-v-72098f81"),t=t(),(0,n.Cn)(),t),d=l((()=>(0,n._)("i",{class:"fa-solid fa-bars"},null,-1))),o=[d],c=(0,n.uE)('<div class="item" data-v-72098f81><i class="fa-solid fa-book" data-v-72098f81></i><div class="text" data-v-72098f81>系統一</div></div><div class="item" data-v-72098f81><i class="fa-solid fa-book" data-v-72098f81></i><div class="text" data-v-72098f81>系統二</div></div><div class="item" data-v-72098f81><i class="fa-solid fa-book" data-v-72098f81></i><div class="text" data-v-72098f81>系統三</div></div>',3),u=l((()=>(0,n._)("div",{class:"top"},[(0,n._)("img",{id:"nvlg",class:"nav_logo",src:"https://www.yoyorock.com/images/logo_rockmobile.png",title:"滾石移動 Rock Mobile"})],-1))),r={class:"inputbox"},m=l((()=>(0,n._)("div",{class:"input-text"},"訊息表格",-1))),p={class:"input-btn"},v={class:"table"},h=l((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"内容"),(0,n._)("th",null,"新增时间"),(0,n._)("th",null,"操作")])],-1))),f={key:0},g=["onClick"],_=l((()=>(0,n._)("i",{class:"fas fa-edit"},null,-1))),C=[_],I=l((()=>(0,n._)("i",{class:"fas fa-save"},null,-1))),k=[I],w=["onClick"],b=l((()=>(0,n._)("i",{class:"fas fa-trash-alt"},null,-1))),y=[b];function x(t,i,e,l,d,_){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",{class:(0,s.C_)([{close:d.isActive},"sidebar"])},[(0,n._)("div",{onClick:i[0]||(i[0]=(...t)=>_.toggleClass&&_.toggleClass(...t)),class:"bar"},o),c],2),(0,n._)("div",{class:(0,s.C_)([{close:d.isActive},"content"])},[u,(0,n._)("div",r,[m,(0,n._)("div",p,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":i[1]||(i[1]=t=>d.inputContent=t),class:"form-control",placeholder:"輸入內容"},null,512),[[a.nr,d.inputContent]]),(0,n._)("button",{class:"btn",onClick:i[2]||(i[2]=(...t)=>_.addItem&&_.addItem(...t))},"新增")])]),(0,n._)("div",v,[(0,n._)("table",null,[h,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(d.items,((t,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",null,[t.editing?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:1,"onUpdate:modelValue":i[3]||(i[3]=t=>d.editInputContent=t),class:"form-control",placeholder:"修改内容"},null,512)),[[a.nr,d.editInputContent]]):((0,n.wg)(),(0,n.iD)("span",f,(0,s.zw)(t.content),1))]),(0,n._)("td",null,(0,s.zw)(_.formatDate(t.timestamp)),1),(0,n._)("td",null,[t.editing?((0,n.wg)(),(0,n.iD)("span",{key:1,onClick:i[4]||(i[4]=(...t)=>_.addItem&&_.addItem(...t)),class:"text-success",style:{cursor:"pointer"}},k)):((0,n.wg)(),(0,n.iD)("span",{key:0,onClick:t=>_.editItem(e),class:"text-primary",style:{cursor:"pointer"}},C,8,g)),(0,n._)("span",{onClick:t=>_.deleteItem(e),class:"text-danger",style:{cursor:"pointer"}},y,8,w)])])))),128))])])])],2)],64)}e(560);var D={data(){return{inputContent:"",editInputContent:"",items:[],editingIndex:-1,isActive:!1}},methods:{addItem(){""!==this.editInputContent.trim()?-1===this.editingIndex?this.items.push({content:this.editInputContent,timestamp:new Date,editing:!1}):(this.items[this.editingIndex].content=this.editInputContent,this.items[this.editingIndex].editing=!1,this.editingIndex=-1):""!==this.inputContent.trim()&&(this.items.push({content:this.inputContent,timestamp:new Date,editing:!1}),this.inputContent="")},editItem(t){this.editingIndex=t,this.editInputContent=this.items[t].content,this.items[t].editing=!0},deleteItem(t){this.items.splice(t,1)},formatDate(t){const i={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1};return new Date(t).toLocaleDateString(void 0,i)},toggleClass(){this.isActive=!this.isActive}}},A=e(89);const z=(0,A.Z)(D,[["render",x],["__scopeId","data-v-72098f81"]]);var H=z}}]);
//# sourceMappingURL=394.c940c3a3.js.map