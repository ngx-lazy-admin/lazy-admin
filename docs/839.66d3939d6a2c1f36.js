"use strict";(self.webpackChunkgo_admin_ng=self.webpackChunkgo_admin_ng||[]).push([[839],{9839:(h,C,o)=>{o.r(C),o.d(C,{FormModule:()=>Ee});var l=o(9808),d=o(3075),E=o(7429),v=o(8776),p=o(3478),f=o(1945),z=o(7525),P=o(6042),L=o(19),y=o(3640),A=o(4147),D=o(2359),O=o(868),Z=o(4390),m=o(325),R=o(1721),w=o(8929),U=o(7625),x=o(9857),N=o(3268),b=o(9630),I=o(1008),e=o(5e3),T=o(591),Y=o(1086),j=o(2868),J=o(9836),S=o(520);let W=(()=>{class n{constructor(t){this.http=t,this._destroy$=new w.xQ,this._menu$=new T.X(null),this._baseFieldUrl="api",this._menus=[],this._activeMenu=null,this._tabset$=new T.X([]),this._tabset=[],this.breadcrumb=[]}get change$(){return this._menu$.asObservable()}get tabsetChange$(){return this._tabset$.asObservable()}getField(t){return t=t.replace("/blank",""),console.log(t),this.http.get(this._baseFieldUrl+t).pipe((0,j.b)(i=>{console.log(i)}))}getFieldByOf(){return(0,Y.of)(J.EP)}ngOnDestroy(){this._destroy$.next(),this._destroy$.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(S.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var K=o(9439),Q=o(5527),H=o(4234),G=o(9838),k=o(4409),B=o(2683),$=o(3390);let X=(()=>{class n{constructor(){this.id="",this.onMin=new e.vpe,this.onMax=new e.vpe,this.form=new d.cw({})}min(t){this.click&&this.click("min",t)}max(t){this.click&&this.click("max",t)}close(t){this.click&&this.click("close",t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["custom-modal-content"]],inputs:{fields:"fields",model:"model",nzTitle:"nzTitle",modal:"modal",id:"id",click:"click"},outputs:{onMin:"onMin",onMax:"onMax"},decls:8,vars:1,consts:[[1,"modal-wrap"],["cdkDrag","","cdkDragHandle","","cdkDragRootElement",".ant-modal-content",1,"ant-modal-header","p-0","d-block",2,"cursor","move"],[1,"d-flex","justify-content-between"],[1,"p-3"],[1,"d-flex","align-items-center",2,"cursor","auto"],["nz-icon","","nzType","close","nzTheme","outline",1,"p-3",3,"click"],["id","viewer","name","viewer","allow","fullscreen; xr-spatial-tracking;","src","https://threejs.org/examples/webgl_animation_keyframes.html",2,"display","unset"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._uU(4),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"i",5),e.NdJ("click",function(){return i.close(i.id)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(7,"iframe",6),e.qZA()),2&t&&(e.xp6(4),e.hij("",i.nzTitle||"\u6807\u9898"," "))},directives:[k.Zt,k.Bh,B.w,$.Ls],styles:[".modal-wrap[_ngcontent-%COMP%]{margin:-24px;cursor:pointer}.ant-modal-header[_ngcontent-%COMP%]{position:absolute;width:100%;background-color:#0000000d;border:none}iframe#viewer[_ngcontent-%COMP%]{display:block!important;width:1200px;height:500px}"]}),n})(),V=(()=>{class n{constructor(t,i,s){this.modal=t,this.rendererFactory=i,this.document=s,this.currentIndex=500,this._hideAllStatus=!1,this.renderer=this.rendererFactory.createRenderer(null,null)}open(t){var i;const s=this.randomString(32);this._hideAllStatus=!1;const r=this.modal.create(Object.assign({nzContent:X,nzWidth:1200,nzViewContainerRef:this.viewContainerRef,nzZIndex:this.currentIndex,nzStyle:{left:20*this.modal.openModals.length+"px",top:20*this.modal.openModals.length+100+"px"},nzFooter:null,nzComponentParams:{id:s,fields:t.fields,model:t.model,title:t.title,modal:this.modal,click:(c,_)=>{"close"==c?this.close(_):"min"==c&&this.hide(_)}},nzClosable:!1},t));if(r.afterOpen.subscribe(()=>{console.log("[afterOpen] emitted!")}),r.afterClose.subscribe(c=>{console.log("[afterClose] The result is:",c)}),this.renderer.listen(r.containerInstance.modalElementRef.nativeElement,"click",c=>{(r.containerInstance.config.nzZIndex||0)<this.currentIndex&&(r.containerInstance.config.nzZIndex=++this.currentIndex),r.containerInstance.config.nzZIndex=++this.currentIndex}),r){const c=null===(i=r.getElement().parentElement)||void 0===i?void 0:i.parentElement;null==c||c.classList.add("pointer-events-none")}return r}img(){}close(t){const i=this.modal.openModals.find(s=>{var r;return(null===(r=s.componentInstance)||void 0===r?void 0:r.id)===t});i&&i.destroy()}hide(t){var i;const s=this.modal.openModals.find(r=>{var c;return(null===(c=r.componentInstance)||void 0===c?void 0:c.id)===t});if(s){const r=null===(i=s.getElement().parentElement)||void 0===i?void 0:i.parentElement;null==r||r.classList.add("pointer-events-none")}}show(t){t.stopPropagation(),this._hideAllStatus=!1,this.modal.openModals.map(i=>{this.showModal(i)})}closeAll(){this.modal.closeAll()}hideAll(){this._hideAllStatus||(this._hideAllStatus=!0,this.modal.openModals.map(t=>{this.hideModal(t)}),this.currentIndex=1001)}showModal(t){var i;const s=t.getConfig();let r=null===(i=s.nzWrapClassName)||void 0===i?void 0:i.split(" ");(null==r?void 0:r.find(c=>"d-none"===c))&&(r=null==r?void 0:r.filter(c=>"d-none"!==c)),t.updateConfig(Object.assign(Object.assign({},s),{nzWrapClassName:null==r?void 0:r.join(" ")}))}hideModal(t){var i;const s=t.getConfig();let r=null===(i=s.nzWrapClassName)||void 0===i?void 0:i.split(" ");(null==r?void 0:r.find(c=>"d-none"===c))||null==r||r.push("d-none"),t.updateConfig(Object.assign(Object.assign({},s),{nzZIndex:1e3,nzWrapClassName:null==r?void 0:r.join(" ")}))}randomString(t){t=t||32;var i="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",s=i.length,r="";for(let c=0;c<t;c++)r+=i.charAt(Math.floor(Math.random()*s));return r}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(y.Sf),e.LFG(e.FYo),e.LFG(l.K0))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var q=o(1485),ee=o(6944),te=o(7653),oe=o(13),ne=o(2198);function ie(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"form",7),e._UZ(2,"formly-form",8),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(1),e.Q6J("form",t.form)("fields",t.field)("model",t.model)}}const re=function(){return{language:"json"}};let se=(()=>{class n{constructor(t){this.cd=t,this.id="",this.onMin=new e.vpe,this.onMax=new e.vpe,this._fields=[],this.code="",this.form=new d.cw({}),this.field=[],this.searchChange$=new T.X(""),this.searchChange$.asObservable().pipe((0,oe.b)(300)).pipe((0,ne.h)(i=>!!i)).subscribe(i=>{console.log("search:"+i);try{this.field=(0,te.o9)(i)}catch(s){console.log(s)}finally{this.cd.detectChanges()}})}min(t){this.click&&this.click("min",t)}max(t){this.click&&this.click("max",t)}close(t){this.click&&this.click("close",t)}set fields(t){this._fields=t,this.setCode(t)}get fields(){return this._fields}setCode(t){this.code=(0,b.format)(JSON.stringify(t),{parser:"json",plugins:[I]}),this.field=JSON.parse(JSON.stringify(t))}editorInitialized(t){t.onDidChangeModelContent(()=>{let i=t.getValue();console.log("editor:"+i),this.searchChange$.next(i)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["custom-modal-content"]],inputs:{model:"model",nzTitle:"nzTitle",modal:"modal",id:"id",click:"click",fields:"fields"},outputs:{onMin:"onMin",onMax:"onMax"},decls:10,vars:8,consts:[[1,"row",2,"height","100%"],[1,"col-6",2,"height","100%","position","relative"],[2,"height","100%","position","relative"],["nzTitle","Fields",2,"height","100vh","position","relative"],[1,"editor",2,"height","100vh",3,"nzEditorMode","ngModel","nzEditorOption","nzEditorInitialized"],["nzTitle","Model"],[4,"ngIf"],[1,"col-6","w-50",3,"formGroup"],[1,"row",3,"form","fields","model"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"nz-tabset",2),e.TgZ(3,"nz-tab",3),e.TgZ(4,"nz-code-editor",4),e.NdJ("nzEditorInitialized",function(r){return i.editorInitialized(r)}),e.qZA(),e.qZA(),e.TgZ(5,"nz-tab",5),e.TgZ(6,"pre"),e._uU(7),e.ALo(8,"json"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(9,ie,3,4,"ng-container",6),e.qZA()),2&t&&(e.xp6(4),e.Q6J("nzEditorMode","normal")("ngModel",i.code)("nzEditorOption",e.DdM(7,re)),e.xp6(3),e.hij(" ",e.lcZ(8,5,i.model),""),e.xp6(2),e.Q6J("ngIf",i.field&&i.field.length))},directives:[O.xH,O.xw,Z.XZ,d.JJ,d.On,l.O5,d._Y,d.JL,d.sg,v.T7],pipes:[l.Ts],styles:[".modal-wrap[_ngcontent-%COMP%]{margin:-24px;cursor:pointer}"]}),n})();var le=o(9860);let ae=(()=>{class n{constructor(t,i,s,r){this.modal=t,this.rendererFactory=i,this.drawerService=s,this.document=r,this.renderer=this.rendererFactory.createRenderer(null,null)}create(t,i=null){i&&i.stopPropagation();const s=(0,le.O1)(32);return this.drawerService.create(Object.assign({nzContent:se,nzViewContainerRef:this.viewContainerRef,nzContentParams:{id:s,fields:t.fields,model:t.model,modal:this.modal,click:(c,_)=>{console.log(c,_)}},nzClosable:!1},t))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(y.Sf),e.LFG(e.FYo),e.LFG(A.ai),e.LFG(l.K0))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var de=o(2643),ce=o(1941);function he(n,a){if(1&n&&(e.TgZ(0,"nz-page-header",5),e.TgZ(1,"nz-page-header-title"),e._uU(2),e.qZA(),e.TgZ(3,"nz-page-header-content"),e._UZ(4,"div",6),e.ALo(5,"marked"),e.qZA(),e.qZA()),2&n){const t=e.oxw(3);e.xp6(2),e.Oqu(null==t.info?null:t.info.title),e.xp6(2),e.Q6J("innerHtml",e.lcZ(5,2,null==t.info?null:t.info.content),e.oJD)}}function ue(n,a){if(1&n){const t=e.EpF();e.ynx(0),e._UZ(1,"nz-alert",1),e.YNc(2,he,6,4,"nz-page-header",2),e.TgZ(3,"form",3),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw(2).submit()}),e.TgZ(4,"formly-form",4),e.NdJ("modelChange",function(s){return e.CHM(t),e.oxw(2).model=s}),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("ngIf",t.info),e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(1),e.Q6J("form",t.form)("fields",t.fields)("model",t.model)("options",t.options)}}function fe(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"nz-result",7),e.TgZ(2,"div",8),e.TgZ(3,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).backHome()}),e._uU(4,"Back Home"),e.qZA(),e.qZA(),e.qZA(),e.BQk()}}function me(n,a){1&n&&(e.ynx(0),e.TgZ(1,"nz-result",10),e.TgZ(2,"div",8),e.TgZ(3,"button",11),e._uU(4,"Back Home"),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&n&&(e.xp6(3),e.Q6J("routerLink","dashboard/analysis"))}function _e(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"nz-result",12),e.TgZ(2,"div",8),e.TgZ(3,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).backHome()}),e._uU(4,"Back Home"),e.qZA(),e.qZA(),e.qZA(),e.BQk()}}function ge(n,a){if(1&n&&(e.ynx(0),e.YNc(1,ue,5,6,"ng-container",0),e.YNc(2,fe,5,0,"ng-container",0),e.YNc(3,me,5,1,"ng-container",0),e.YNc(4,_e,5,0,"ng-container",0),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",200==t.status),e.xp6(1),e.Q6J("ngIf",403==t.status),e.xp6(1),e.Q6J("ngIf",404==t.status),e.xp6(1),e.Q6J("ngIf",500==t.status)}}const ve=[{canDeactivate:[],path:"",pathMatch:"full",component:(()=>{class n{constructor(t,i,s,r,c,_,ze,ye,Oe,xe,Te){var F;this.cd=t,this.fieldService=i,this.route=s,this.router=r,this.ngZone=c,this.nzConfigService=_,this.routeCache=ze,this.modalService=ye,this.previewService=Oe,this.codeEditorService=xe,this.http=Te,this.model={},this.form=new d.cw({}),this.fields=[],this.options={formState:{caches:"1"}},this.loading=!0,this.status=200,this.codeType="json",this.isVisible=!1,this.code="",this.cacheFields="",this.destroy$=new w.xQ,this.rooterChange=this.router.events.subscribe(u=>{if(u instanceof m.m2){console.log(u),this.loading=!0,this.cd.markForCheck();const M=this.routeCache.get(this.router.url);M?(this.render(M),this.routeCache.recoveryHistoryPosition(this.router.url)):(this.loading=!0,this.fieldService.getField(this.router.url).subscribe(g=>{this.routeCache.set(this.router.url,g),this.render(this.routeCache.get(this.router.url))},g=>{this.loading=!1,this.status=null==g?void 0:g.status,this.clearData(),this.cd.markForCheck()}))}}),this.route.paramMap.subscribe(u=>{console.log(u)});const Fe=(null===(F=this.nzConfigService.getConfigForComponent("codeEditor"))||void 0===F?void 0:F.defaultEditorOption)||{};this.nzConfigService.set("codeEditor",{defaultEditorOption:Object.assign(Object.assign({},Fe),{theme:"vs-dark",minimap:{enabled:!1},language:"javascript",autoIndent:!0,formatOnPaste:!0,formatOnType:!0,wordwrap:"on"})}),(0,x.Z)("Esc",(u,M)=>{this.isVisible=!1,this.cd.markForCheck()}),(0,x.Z)(".",(u,M)=>{this.codeEditorService.create({nzHeight:"100vh",nzPlacement:"bottom",nzWrapClassName:"dragModal",nzOnOk:()=>new Promise(Pe=>setTimeout(Pe,1e3)),fields:this.cacheFields,model:this.model,nzMask:!1})}),(0,x.Z)("m",(u,M)=>{})}render(t){this.loading=!0,this.info=null==t?void 0:t.info;try{this.form.reset({},{onlySelf:!1,emitEvent:!1}),this.form=new d.cw({}),this.cacheFields=null==t?void 0:t.fields,this.fields="string"==typeof(null==t?void 0:t.fields)?(0,N.o9)(null==t?void 0:t.fields):t.fields,this.model=null==t?void 0:t.data,this.options.formState.cacheFields=t.fields,this.code=(0,b.format)(JSON.stringify(t.fields),{parser:"json",plugins:[I]})}catch(i){this.fields=[],this.model={},this.info=null,console.log(i)}finally{this.status=200,this.loading=!1,this.cd.detectChanges()}}clearData(){this.fields=[],this.model={},this.info=null,this.form.reset(),this.cd.detectChanges(),this.cd.markForCheck()}setup(){this.ngZone.runOutsideAngular(()=>(0,R.ov)().pipe((0,U.R)(this.destroy$)).subscribe(()=>{}))}submit(){}preview(t){this.previewService.open(t)}backHome(){this.http.get("web/file/1111").subscribe(t=>{console.log("111")})}ngOnDestroy(){this.rooterChange&&this.rooterChange.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(W),e.Y36(m.gz),e.Y36(m.F0),e.Y36(e.R0b),e.Y36(K.jY),e.Y36(Q.Q),e.Y36(H.Z),e.Y36(V),e.Y36(ae),e.Y36(S.eN))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-form"]],hostAttrs:[1,"p-3","d-block"],decls:1,vars:1,consts:[[4,"ngIf"],["nzType","info","nzCloseable","","nzDescription","\u952e\u76d8\u70b9\u51fb . , \u53ef\u4ee5\u7f16\u8f91\u5f53\u524d\u9875\u9762\u914d\u7f6e, \u70b9\u51fb M \u53ef\u4ee5\u628a\u5f53\u524d\u9875\u9762\u8f6c\u5f39\u7a97",1,"mb-3"],["class","bg-white mb-3",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row",3,"form","fields","model","options","modelChange"],[1,"bg-white","mb-3"],[3,"innerHtml"],["nzStatus","403","nzTitle","403","nzSubTitle","Sorry, you are not authorized to access this page."],["nz-result-extra",""],["nz-button","","nzType","primary",3,"click"],["nzStatus","404","nzTitle","404","nzSubTitle","Sorry, the page you visited does not exist."],["nz-button","","nzType","primary",3,"routerLink"],["nzStatus","500","nzTitle","500","nzSubTitle","Sorry, there is an error on server."]],template:function(t,i){1&t&&e.YNc(0,ge,5,4,"ng-container",0),2&t&&e.Q6J("ngIf",!i.loading&&i.form)},directives:[l.O5,D.r,f.$O,f.u9,f.u5,d._Y,d.JL,d.sg,v.T7,p.ml,p.ey,P.ix,de.dQ,B.w,m.rH],pipes:[ce.r],styles:[".editor[_ngcontent-%COMP%]{height:200px}.mGraph-wrapper[_ngcontent-%COMP%]{width:100%;height:500px;background:#fff;position:relative;display:flex;align-items:center;justify-content:center}.mGraph-wrapper[_ngcontent-%COMP%]   .mGraph[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden}"],changeDetection:0}),n})()}];let pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.Bz.forChild(ve)],m.Bz]}),n})();var Me=o(9731),Ce=o(5503);let Ee=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,pe,d.u5,d.UX,Ce.D,G.v,L.j,y.Qp,p.XD,A.BL,Z.qw,f.KJ,P.sL,z.j,E.eL,D.L,O.we,v.X0,q.D,ee.c,Me.kx]]}),n})()},7653:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o9:()=>execEval});var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8776),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5e3),_angular_common_http__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(520),ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9727),src_app_services_menu_full_screen_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3660);const execEval=code=>eval("("+code+")"),execFunc=h=>"string"==typeof h?execEval(h):h;let ShareFieldType=(()=>{class h extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__.fS{constructor(o,l,d,E,v,p,f,z){super(),this.cd=o,this.http=l,this.zone=d,this.message=E,this.config=v,this.fullScreenService=p,this.elRef=f,this.elementRef=z}clickAction(o,l){this.zone.runOutsideAngular(()=>{try{if("string"==typeof o[l]){const d=execEval(null==o?void 0:o[l]);d&&d(this.field,this)}}catch(d){console.log(d)}finally{console.log("click finally")}})}clickDefault(o,l){this.zone.runOutsideAngular(()=>{try{if("string"==typeof o[l]){const d=execEval(null==o?void 0:o[l]);d&&d(this.field,this)}}catch(d){console.log(d)}finally{console.log("click finally")}})}click(o){o?this.clickAction(o,"click"):this.to.click&&this.clickDefault(this.to.click,"click")}change(o){o?this.clickAction(o,"change"):this.to.click&&this.clickDefault(this.to.click,"change")}confirm(o){this.zone.runOutsideAngular(()=>{var l;(null==o?void 0:o.confirm)?o.confirm(this.field,this):(null===(l=this.to)||void 0===l?void 0:l.confirm)&&this.to.confirm(this.field,this)}),o?this.clickAction(o,"change"):this.to.click&&this.clickDefault(this.to.click,"change")}close(o){this.message.success("close"),this.zone.runOutsideAngular(()=>{var l;(null==o?void 0:o.close)?o.close(this.field,this):(null===(l=this.to)||void 0===l?void 0:l.close)&&this.to.close(this.field,this)})}cancel(o){this.message.success("cancel"),this.zone.runOutsideAngular(()=>{var l;(null==o?void 0:o.cancel)?o.cancel(this.field,this):(null===(l=this.to)||void 0===l?void 0:l.cancel)&&this.to.cancel(this.field,this)})}submit(o){Object.values(o.controls).forEach(l=>{l.invalid&&(l.markAsDirty(),l.updateValueAndValidity({onlySelf:!0}))})}}return h.\u0275fac=function(o){return new(o||h)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__.sBO),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.eN),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__.R0b),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__.dD),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__.o),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(src_app_services_menu_full_screen_service__WEBPACK_IMPORTED_MODULE_4__.E),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SBq),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SBq))},h.\u0275dir=_angular_core__WEBPACK_IMPORTED_MODULE_1__.lG2({type:h,features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__.qOj]}),h})()}}]);