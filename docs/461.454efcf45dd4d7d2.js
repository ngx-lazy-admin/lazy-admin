"use strict";(self.webpackChunkgo_admin_ng=self.webpackChunkgo_admin_ng||[]).push([[461],{1461:(b,c,u)=>{u.r(c),u.d(c,{ModalModule:()=>M});var m=u(9808),s=u(325),t=u(5e3),d=u(4234),p=u(6648),r=u(6042),h=u(2643),_=u(2683);const k=[{path:"",component:(()=>{class a{constructor(o,e,l){this.renderer=o,this.modalService=e,this.dispatch=l,this.model={email:"email@gmail.com"},this.fields=[{key:"email",type:"nz-input",className:"w-25 mb-2 d-inline-block",templateOptions:{label:"Email address",placeholder:"Enter email",required:!0}}],this.modalId=""}ngOnInit(){}create(o){}close(o){this.modalService.closeAll()}open(o){this.modalService.show(o)}search(o){this.modalService.open("search")}form(o){this.modalService.open("form",{fields:this.fields,model:this.model})}dispatchSearch(o){this.dispatch.open("search",{afterClose:()=>{console.log("\u5f39\u7a97\u5173\u95ed\u4e86")}},null)}dispatchForm(o){this.dispatch.open("form")}blank(o){this.dispatch.open("blank")}openBlank(o){this.dispatch.open("blank",{afterOpen:l=>{console.log("\u5f39\u7a97\u6253\u5f00\u4e86"),console.log(l),this.modalId=l.componentInstance.id}})}closeBlank(o){this.dispatch.close(this.modalId)}hideBlank(o){this.dispatch.hide(this.modalId)}showBlank(o){this.dispatch.open("blank")}hideAllBlank(o){this.dispatch.hideAll()}showAllBlank(o){this.dispatch.showAll()}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(t.Qsj),t.Y36(d.Z),t.Y36(p.n))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-modal"]],decls:31,vars:0,consts:[["nz-button","",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(n){return e.open(n)}),t._uU(1," \u6253\u5f00\u5f39\u7a97 "),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(n){return e.create(n)}),t._uU(3," \u521b\u5efa\u5f39\u7a97 "),t.qZA(),t.TgZ(4,"button",0),t.NdJ("click",function(n){return e.close(n)}),t._uU(5," \u663e\u793a\u5168\u90e8 "),t.qZA(),t.TgZ(6,"button",0),t.NdJ("click",function(n){return e.search(n)}),t._uU(7," search "),t.qZA(),t.TgZ(8,"button",0),t.NdJ("click",function(n){return e.form(n)}),t._uU(9," \u5168\u5c40\u641c\u7d22 "),t.qZA(),t.TgZ(10,"button",0),t.NdJ("click",function(n){return e.dispatchSearch(n)}),t._uU(11," dispatchSearch "),t.qZA(),t.TgZ(12,"button",0),t.NdJ("click",function(n){return e.dispatchForm(n)}),t._uU(13," dispatchForm "),t.qZA(),t.TgZ(14,"button",0),t.NdJ("click",function(n){return e.blank(n)}),t._uU(15," \u6253\u5f00\u7a7a\u767d\u5f39\u7a97 "),t.qZA(),t._uU(16," dispatchForm "),t._UZ(17,"br"),t._UZ(18,"br"),t.TgZ(19,"button",0),t.NdJ("click",function(n){return e.openBlank(n)}),t._uU(20," \u6253\u5f00\u5f39\u7a97 "),t.qZA(),t.TgZ(21,"button",0),t.NdJ("click",function(n){return e.closeBlank(n)}),t._uU(22," \u5173\u95ed\u5f39\u7a97 "),t.qZA(),t.TgZ(23,"button",0),t.NdJ("click",function(n){return e.hideBlank(n)}),t._uU(24," \u9690\u85cf\u5f39\u7a97 "),t.qZA(),t.TgZ(25,"button",0),t.NdJ("click",function(n){return e.showBlank(n)}),t._uU(26," \u663e\u793a\u5f39\u7a97 "),t.qZA(),t.TgZ(27,"button",0),t.NdJ("click",function(n){return e.hideAllBlank(n)}),t._uU(28," \u9690\u85cf\u5168\u90e8 "),t.qZA(),t.TgZ(29,"button",0),t.NdJ("click",function(n){return e.showAllBlank(n)}),t._uU(30," \u663e\u793a\u5168\u90e8 "),t.qZA())},directives:[r.ix,h.dQ,_.w],styles:[".ant-modal-wrap{overflow:unset}"]}),a})()}];let A=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[s.Bz.forChild(k)],s.Bz]}),a})();var f=u(4409);let M=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[m.ez,A,d._,f._t,r.sL]]}),a})()}}]);