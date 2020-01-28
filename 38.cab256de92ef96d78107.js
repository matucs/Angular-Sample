(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{l9c8:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),i=function(){return function(){}}(),u=e("pMnS"),o=e("t68o"),r=e("NcP4"),s=e("xYTU"),a=e("vG4h"),d=e("9AJC"),b=e("gIcY"),c=e("6f7V"),g=e("Ip0R"),m=e("p03g"),C=function(){function n(n){this.httpUtils=n,this.prefix="topCustomersReport/report/"}return n.prototype.getYearList=function(){return this.httpUtils.post(this.prefix+"getYearParameters",{})},n.prototype.getMonthList=function(){return this.httpUtils.post(this.prefix+"getMonthParameters",{})},n.prototype.getFileTypeList=function(){return this.httpUtils.post(this.prefix+"getReportFileTypeParameters",{})},n.prototype.downloadReport=function(n){return this.httpUtils.post(this.prefix+"generate",n,{responseType:"blob"})},n.prototype.getOrganizations=function(n){return this.httpUtils.postAsDataSourceResult(this.prefix+"getOrganizations",n)},n.prototype.getCustomerGroup=function(){return this.httpUtils.post(this.prefix+"getCustomersGroupsType",{})},n}(),h=e("6blF"),p=function(){return function(){this.fileTypeId=1781}}(),f=function(){function n(n,l,e,t,i,u,o){this.service=n,this.router=l,this.activatedRoute=e,this.portalUiService=t,this.uiUtilsService=i,this.stdBag=u,this.cuvdBag=o,this.model=new p,this.yearList=new h.a,this.monthList=new h.a,this.index=[{id:1,value:"\u062d\u062c\u0645 \u0631\u0627\u0628\u0637\u0647"},{id:0,value:"\u062f\u0631\u0622\u0645\u062f\u0632\u0627\u06cc\u06cc"}],this.fileTypeList=[],this.isSubmitting=!1}return n.prototype.ngOnInit=function(){var n=this;this.setPageActions(),this.countPlaceHolder=this.cuvdBag.count,this.toYearPlaceHolder=this.cuvdBag.toYear,this.toMonthPlaceHolder=this.cuvdBag.toMonth,this.yearList=this.service.getYearList(),this.monthList=this.service.getMonthList(),this.organizationsDataProvider=this.createOrganizationDataProvider(),this.service.getCustomerGroup().subscribe(function(l){n.customerGroup=l}),this.service.getFileTypeList().subscribe(function(l){n.fileTypeList=l})},n.prototype.createOrganizationDataProvider=function(){var n=this;return function(l){return n.service.getOrganizations(l)}},n.prototype.countValidaion=function(){this.model.count>5e3?(this.model.count=null,this.countPlaceHolder="\u0645\u0642\u062f\u0627\u0631 \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0646\u0645\u06cc\u062a\u0648\u0627\u0646\u062f \u0628\u06cc\u0634 \u0627\u0632 5000 \u0628\u0627\u0634\u062f"):this.countPlaceHolder=this.cuvdBag.count},n.prototype.toYearValidation=function(){this.model.fromYear>this.model.toYear?(this.model.toYear=null,this.toYearPlaceHolder="\u0633\u0627\u0644 \u0627\u0646\u062a\u062e\u0627\u0628\u06cc \u0646\u0628\u0627\u06cc\u062f \u06a9\u0648\u0686\u06a9\u062a\u0631 \u0627\u0632 \u0633\u0627\u0644 \u0634\u0631\u0648\u0639 \u0628\u0627\u0634\u062f"):this.toYearPlaceHolder=this.cuvdBag.toYear},n.prototype.toMonthValidation=function(){this.model.fromYear===this.model.toYear&&(this.toMonthPlaceHolder=this.model.fromMonth>this.model.toMonth?"\u0645\u0627\u0647 \u0627\u0646\u062a\u062e\u0627\u0628\u06cc \u0646\u0628\u0627\u06cc\u062f \u06a9\u0648\u0686\u06a9\u062a\u0631 \u0627\u0632 \u0645\u0627\u0647 \u0634\u0631\u0648\u0639 \u0628\u0627\u0634\u062f":this.cuvdBag.toMonth)},n.prototype.onFormSubmit=function(){var n,l=this;n=this.service.downloadReport(this.model),this.isSubmitting=!0,n.subscribe(function(n){c.k.SaveBlob(n,"report."+l.fileTypeList.find(function(n){return n.id===l.model.fileTypeId}).dcCode),l.isSubmitting=!1},function(n){l.isSubmitting=!1;var e=new FileReader;e.onload=function(n){l.uiUtilsService.showSnackBar(JSON.parse(n.target.result).message)},e.readAsText(n.error,"utf-8")})},n.prototype.setPageActions=function(){this.portalUiService.clearPageActions()},n}(),v=e("ZYCi"),A=e("qEmC"),q=t.qb({encapsulation:2,styles:[],data:{}});function y(n){return t.Mb(0,[t.Ib(402653184,1,{form:0}),(n()(),t.sb(1,0,null,null,102,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var i=!0,u=n.component;return"submit"===l&&(i=!1!==t.Cb(n,3).onSubmit(e)&&i),"reset"===l&&(i=!1!==t.Cb(n,3).onReset()&&i),"ngSubmit"===l&&(i=!1!==u.onFormSubmit()&&i),i},null,null)),t.rb(2,16384,null,0,b.u,[],null,null),t.rb(3,4210688,[[1,4],["form",4]],0,b.n,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Hb(2048,null,b.c,null,[b.n]),t.rb(5,16384,null,0,b.m,[[4,b.c]],null,null),(n()(),t.sb(6,0,null,null,94,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.sb(7,0,null,null,93,"div",[["class","col-12 col-sm-12 col-md-6"]],null,null,null,null,null)),(n()(),t.sb(8,0,null,null,10,"ocs-drop-down",[["itemText","description"],["itemValue","code"],["name","fromYear"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.fromYear=e)&&t),t},a.t,a.f)),t.rb(9,638976,null,2,c.J,[t.r],{required:[0,"required"],label:[1,"label"],items:[2,"items"],itemValue:[3,"itemValue"],itemText:[4,"itemText"]},null),t.Ib(603979776,2,{_addons:1}),t.Ib(335544320,3,{_host:0}),t.Eb(131072,g.b,[t.h]),t.rb(13,16384,null,0,b.q,[],{required:[0,"required"]},null),t.Hb(1024,null,b.i,function(n,l){return[n,l]},[c.J,b.q]),t.Hb(1024,null,b.j,function(n){return[n]},[c.J]),t.rb(16,671744,[[3,4]],0,b.o,[[2,b.c],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,b.k,null,[b.o]),t.rb(18,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),t.sb(19,0,null,null,10,"ocs-drop-down",[["itemText","description"],["itemValue","code"],["name","fromMonth"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.fromMonth=e)&&t),t},a.t,a.f)),t.rb(20,638976,null,2,c.J,[t.r],{required:[0,"required"],label:[1,"label"],items:[2,"items"],itemValue:[3,"itemValue"],itemText:[4,"itemText"]},null),t.Ib(603979776,4,{_addons:1}),t.Ib(335544320,5,{_host:0}),t.Eb(131072,g.b,[t.h]),t.rb(24,16384,null,0,b.q,[],{required:[0,"required"]},null),t.Hb(1024,null,b.i,function(n,l){return[n,l]},[c.J,b.q]),t.Hb(1024,null,b.j,function(n){return[n]},[c.J]),t.rb(27,671744,[[5,4]],0,b.o,[[2,b.c],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,b.k,null,[b.o]),t.rb(29,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),t.sb(30,0,null,null,10,"ocs-drop-down",[["itemText","description"],["itemValue","code"],["name","toYear"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.toYear=e)&&t),t},a.t,a.f)),t.rb(31,638976,null,2,c.J,[t.r],{required:[0,"required"],label:[1,"label"],items:[2,"items"],itemValue:[3,"itemValue"],itemText:[4,"itemText"]},null),t.Ib(603979776,6,{_addons:1}),t.Ib(335544320,7,{_host:0}),t.Eb(131072,g.b,[t.h]),t.rb(35,16384,null,0,b.q,[],{required:[0,"required"]},null),t.Hb(1024,null,b.i,function(n,l){return[n,l]},[c.J,b.q]),t.Hb(1024,null,b.j,function(n){return[n]},[c.J]),t.rb(38,671744,[[7,4]],0,b.o,[[2,b.c],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,b.k,null,[b.o]),t.rb(40,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),t.sb(41,0,null,null,10,"ocs-drop-down",[["itemText","description"],["itemValue","code"],["name","toMonth"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.toMonth=e)&&t),t},a.t,a.f)),t.rb(42,638976,null,2,c.J,[t.r],{required:[0,"required"],label:[1,"label"],items:[2,"items"],itemValue:[3,"itemValue"],itemText:[4,"itemText"]},null),t.Ib(603979776,8,{_addons:1}),t.Ib(335544320,9,{_host:0}),t.Eb(131072,g.b,[t.h]),t.rb(46,16384,null,0,b.q,[],{required:[0,"required"]},null),t.Hb(1024,null,b.i,function(n,l){return[n,l]},[c.J,b.q]),t.Hb(1024,null,b.j,function(n){return[n]},[c.J]),t.rb(49,671744,[[9,4]],0,b.o,[[2,b.c],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,b.k,null,[b.o]),t.rb(51,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),t.sb(52,0,null,null,9,"ocs-autocomplete",[["itemText","codeTitle"],["itemValue","id"],["name","organizationsList"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.organizationId=e)&&t),t},a.o,a.a)),t.rb(53,114688,null,2,c.r,[],{required:[0,"required"],label:[1,"label"],dataProvider:[2,"dataProvider"],itemValue:[3,"itemValue"],itemText:[4,"itemText"]},null),t.Ib(603979776,10,{_addons:1}),t.Ib(335544320,11,{_host:0}),t.rb(56,16384,null,0,b.q,[],{required:[0,"required"]},null),t.Hb(1024,null,b.i,function(n,l){return[n,l]},[c.r,b.q]),t.Hb(1024,null,b.j,function(n){return[n]},[c.r]),t.rb(59,671744,[[11,4]],0,b.o,[[2,b.c],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,b.k,null,[b.o]),t.rb(61,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),t.sb(62,0,null,null,9,"ocs-drop-down",[["itemText","value"],["itemValue","id"],["name","index"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.indexType=e)&&t),t},a.t,a.f)),t.rb(63,638976,null,2,c.J,[t.r],{required:[0,"required"],label:[1,"label"],items:[2,"items"],itemValue:[3,"itemValue"],itemText:[4,"itemText"]},null),t.Ib(603979776,12,{_addons:1}),t.Ib(335544320,13,{_host:0}),t.rb(66,16384,null,0,b.q,[],{required:[0,"required"]},null),t.Hb(1024,null,b.i,function(n,l){return[n,l]},[c.J,b.q]),t.Hb(1024,null,b.j,function(n){return[n]},[c.J]),t.rb(69,671744,[[13,4]],0,b.o,[[2,b.c],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,b.k,null,[b.o]),t.rb(71,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),t.sb(72,0,null,null,8,"ocs-drop-down",[["itemText","description"],["itemValue","id"],["name","customerGroup"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.customerGroupTypeId=e)&&t),t},a.t,a.f)),t.rb(73,638976,null,2,c.J,[t.r],{label:[0,"label"],items:[1,"items"],itemValue:[2,"itemValue"],itemText:[3,"itemText"]},null),t.Ib(603979776,14,{_addons:1}),t.Ib(335544320,15,{_host:0}),t.Hb(1024,null,b.i,function(n){return[n]},[c.J]),t.Hb(1024,null,b.j,function(n){return[n]},[c.J]),t.rb(78,671744,[[15,4]],0,b.o,[[2,b.c],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,b.k,null,[b.o]),t.rb(80,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),t.sb(81,0,null,null,9,"ocs-number-box",[["class","w-100"],["name","count"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.count=e)&&t),t},a.v,a.h)),t.rb(82,114688,null,2,c.R,[],{required:[0,"required"],label:[1,"label"]},null),t.Ib(603979776,16,{_addons:1}),t.Ib(335544320,17,{_host:0}),t.rb(85,16384,null,0,b.q,[],{required:[0,"required"]},null),t.Hb(1024,null,b.i,function(n,l){return[n,l]},[c.R,b.q]),t.Hb(1024,null,b.j,function(n){return[n]},[c.R]),t.rb(88,671744,[[17,4]],0,b.o,[[2,b.c],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,b.k,null,[b.o]),t.rb(90,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),t.sb(91,0,null,null,9,"ocs-drop-down",[["itemText","description"],["itemValue","id"],["name","fileType"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.fileTypeId=e)&&t),t},a.t,a.f)),t.rb(92,638976,null,2,c.J,[t.r],{required:[0,"required"],label:[1,"label"],items:[2,"items"],itemValue:[3,"itemValue"],itemText:[4,"itemText"]},null),t.Ib(603979776,18,{_addons:1}),t.Ib(335544320,19,{_host:0}),t.rb(95,16384,null,0,b.q,[],{required:[0,"required"]},null),t.Hb(1024,null,b.i,function(n,l){return[n,l]},[c.J,b.q]),t.Hb(1024,null,b.j,function(n){return[n]},[c.J]),t.rb(98,671744,[[19,4]],0,b.o,[[2,b.c],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,b.k,null,[b.o]),t.rb(100,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),t.sb(101,0,null,null,2,"div",[["class","button-row"]],null,null,null,null,null)),(n()(),t.sb(102,0,null,null,1,"ocs-button",[["class","mt-4 ml-2"],["color","primary"],["type","submit"]],[[1,"disabled",0]],null,null,a.p,a.b)),t.rb(103,49152,null,0,c.t,[],{type:[0,"type"],disabled:[1,"disabled"],color:[2,"color"],text:[3,"text"]},null)],function(n,l){var e=l.component;n(l,9,0,!0,e.cuvdBag.fromYear,t.Lb(l,9,2,t.Cb(l,12).transform(e.yearList)),"code","description"),n(l,13,0,!0),n(l,16,0,"fromYear",e.isSubmitting,e.model.fromYear),n(l,20,0,!0,e.cuvdBag.fromMonth,t.Lb(l,20,2,t.Cb(l,23).transform(e.monthList)),"code","description"),n(l,24,0,!0),n(l,27,0,"fromMonth",e.isSubmitting,e.model.fromMonth),n(l,31,0,!0,e.toYearPlaceHolder,t.Lb(l,31,2,t.Cb(l,34).transform(e.yearList)),"code","description"),n(l,35,0,!0),n(l,38,0,"toYear",e.toYearValidation(),e.model.toYear),n(l,42,0,!0,e.toMonthPlaceHolder,t.Lb(l,42,2,t.Cb(l,45).transform(e.monthList)),"code","description"),n(l,46,0,!0),n(l,49,0,"toMonth",e.toMonthValidation(),e.model.toMonth),n(l,53,0,!0,e.cuvdBag.organization,e.organizationsDataProvider,"id","codeTitle"),n(l,56,0,!0),n(l,59,0,"organizationsList",e.model.organizationId),n(l,63,0,!0,e.cuvdBag.indexType,e.index,"id","value"),n(l,66,0,!0),n(l,69,0,"index",e.isSubmitting,e.model.indexType),n(l,73,0,e.cuvdBag.customerLevel,e.customerGroup,"id","description"),n(l,78,0,"customerGroup",e.isSubmitting,e.model.customerGroupTypeId),n(l,82,0,!0,e.countPlaceHolder),n(l,85,0,!0),n(l,88,0,"count",e.countValidaion(),e.model.count),n(l,92,0,!0,e.cuvdBag.fileType,e.fileTypeList,"id","description"),n(l,95,0,!0),n(l,98,0,"fileType",e.isSubmitting,e.model.fileTypeId),n(l,103,0,"submit",!t.Cb(l,3).form.valid,"primary",e.cuvdBag.makeReport)},function(n,l){n(l,1,0,t.Cb(l,5).ngClassUntouched,t.Cb(l,5).ngClassTouched,t.Cb(l,5).ngClassPristine,t.Cb(l,5).ngClassDirty,t.Cb(l,5).ngClassValid,t.Cb(l,5).ngClassInvalid,t.Cb(l,5).ngClassPending),n(l,8,0,t.Cb(l,13).required?"":null,t.Cb(l,18).ngClassUntouched,t.Cb(l,18).ngClassTouched,t.Cb(l,18).ngClassPristine,t.Cb(l,18).ngClassDirty,t.Cb(l,18).ngClassValid,t.Cb(l,18).ngClassInvalid,t.Cb(l,18).ngClassPending),n(l,19,0,t.Cb(l,24).required?"":null,t.Cb(l,29).ngClassUntouched,t.Cb(l,29).ngClassTouched,t.Cb(l,29).ngClassPristine,t.Cb(l,29).ngClassDirty,t.Cb(l,29).ngClassValid,t.Cb(l,29).ngClassInvalid,t.Cb(l,29).ngClassPending),n(l,30,0,t.Cb(l,35).required?"":null,t.Cb(l,40).ngClassUntouched,t.Cb(l,40).ngClassTouched,t.Cb(l,40).ngClassPristine,t.Cb(l,40).ngClassDirty,t.Cb(l,40).ngClassValid,t.Cb(l,40).ngClassInvalid,t.Cb(l,40).ngClassPending),n(l,41,0,t.Cb(l,46).required?"":null,t.Cb(l,51).ngClassUntouched,t.Cb(l,51).ngClassTouched,t.Cb(l,51).ngClassPristine,t.Cb(l,51).ngClassDirty,t.Cb(l,51).ngClassValid,t.Cb(l,51).ngClassInvalid,t.Cb(l,51).ngClassPending),n(l,52,0,t.Cb(l,56).required?"":null,t.Cb(l,61).ngClassUntouched,t.Cb(l,61).ngClassTouched,t.Cb(l,61).ngClassPristine,t.Cb(l,61).ngClassDirty,t.Cb(l,61).ngClassValid,t.Cb(l,61).ngClassInvalid,t.Cb(l,61).ngClassPending),n(l,62,0,t.Cb(l,66).required?"":null,t.Cb(l,71).ngClassUntouched,t.Cb(l,71).ngClassTouched,t.Cb(l,71).ngClassPristine,t.Cb(l,71).ngClassDirty,t.Cb(l,71).ngClassValid,t.Cb(l,71).ngClassInvalid,t.Cb(l,71).ngClassPending),n(l,72,0,t.Cb(l,80).ngClassUntouched,t.Cb(l,80).ngClassTouched,t.Cb(l,80).ngClassPristine,t.Cb(l,80).ngClassDirty,t.Cb(l,80).ngClassValid,t.Cb(l,80).ngClassInvalid,t.Cb(l,80).ngClassPending),n(l,81,0,t.Cb(l,85).required?"":null,t.Cb(l,90).ngClassUntouched,t.Cb(l,90).ngClassTouched,t.Cb(l,90).ngClassPristine,t.Cb(l,90).ngClassDirty,t.Cb(l,90).ngClassValid,t.Cb(l,90).ngClassInvalid,t.Cb(l,90).ngClassPending),n(l,91,0,t.Cb(l,95).required?"":null,t.Cb(l,100).ngClassUntouched,t.Cb(l,100).ngClassTouched,t.Cb(l,100).ngClassPristine,t.Cb(l,100).ngClassDirty,t.Cb(l,100).ngClassValid,t.Cb(l,100).ngClassInvalid,t.Cb(l,100).ngClassPending),n(l,102,0,t.Cb(l,103)._hostDisabled)})}function T(n){return t.Mb(0,[(n()(),t.sb(0,0,null,null,2,"ng-component",[],null,null,null,y,q)),t.Hb(512,null,C,C,[m.a]),t.rb(2,114688,null,0,f,[C,v.l,v.a,c.lb,c.sb,c.nb,A.a],null,null)],function(n,l){n(l,2,0)},null)}var M=t.ob("ng-component",f,T,{},{},[]),x=e("eDkP"),P=e("Fzqc"),V=e("o3x0"),H=e("M2Lx"),I=e("mVsa"),D=e("uGex"),S=e("v9Dh"),Y=e("ZYjt"),k=e("Wf4p"),L=e("vARd"),J=e("4c35"),U=e("dWZg"),j=e("qAlS"),w=e("SMsm"),B=e("UodH"),_=e("de3e"),R=e("seP3"),G=e("9It4"),z=e("lLAP"),F=e("Z+uX"),O=e("Blfk"),Z=e("6Wmm"),E=e("4GxJ"),N={permissions:["/",e("A9q4").a.TopCostomersReport],breadcrumb:[{title:"\u06af\u0632\u0627\u0631\u0634 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0628\u0631\u062a\u0631"}]},W=function(){return function(){}}();e.d(l,"TopCustomersReportModuleNgFactory",function(){return X});var X=t.pb(i,[],function(n){return t.zb([t.Ab(512,t.j,t.eb,[[8,[u.a,o.a,r.a,s.a,s.b,a.L,d.a,M]],[3,t.j],t.y]),t.Ab(4608,b.v,b.v,[]),t.Ab(4608,g.n,g.m,[t.v,[2,g.D]]),t.Ab(4608,x.a,x.a,[x.g,x.c,t.j,x.f,x.d,t.r,t.A,g.d,P.c,[2,g.h]]),t.Ab(5120,x.h,x.i,[x.a]),t.Ab(5120,V.c,V.d,[x.a]),t.Ab(135680,V.e,V.e,[x.a,t.r,[2,g.h],[2,V.b],V.c,[3,V.e],x.c]),t.Ab(4608,H.c,H.c,[]),t.Ab(5120,I.a,I.c,[x.a]),t.Ab(5120,D.a,D.b,[x.a]),t.Ab(5120,S.a,S.b,[x.a]),t.Ab(4608,Y.f,k.a,[[2,k.c],[2,k.e]]),t.Ab(4608,c.sb,c.sb,[V.e,L.b]),t.Ab(1073742336,b.t,b.t,[]),t.Ab(1073742336,b.f,b.f,[]),t.Ab(1073742336,g.c,g.c,[]),t.Ab(1073742336,v.o,v.o,[[2,v.u],[2,v.l]]),t.Ab(1073742336,P.a,P.a,[]),t.Ab(1073742336,J.g,J.g,[]),t.Ab(1073742336,U.b,U.b,[]),t.Ab(1073742336,j.b,j.b,[]),t.Ab(1073742336,x.e,x.e,[]),t.Ab(1073742336,k.e,k.e,[[2,k.b],[2,Y.g]]),t.Ab(1073742336,V.k,V.k,[]),t.Ab(1073742336,w.c,w.c,[]),t.Ab(1073742336,k.i,k.i,[]),t.Ab(1073742336,B.c,B.c,[]),t.Ab(1073742336,H.d,H.d,[]),t.Ab(1073742336,_.c,_.c,[]),t.Ab(1073742336,I.b,I.b,[]),t.Ab(1073742336,k.g,k.g,[]),t.Ab(1073742336,k.f,k.f,[]),t.Ab(1073742336,R.a,R.a,[]),t.Ab(1073742336,D.c,D.c,[]),t.Ab(1073742336,G.a,G.a,[]),t.Ab(1073742336,z.a,z.a,[]),t.Ab(1073742336,S.c,S.c,[]),t.Ab(1073742336,F.a,F.a,[]),t.Ab(1073742336,O.c,O.c,[]),t.Ab(1073742336,Z.a,Z.a,[]),t.Ab(1073742336,L.e,L.e,[]),t.Ab(1073742336,c.a,c.a,[]),t.Ab(1073742336,c.B,c.B,[]),t.Ab(1073742336,c.O,c.O,[]),t.Ab(1073742336,c.Z,c.Z,[]),t.Ab(1073742336,c.ac,c.ac,[]),t.Ab(1073742336,c.fb,c.fb,[]),t.Ab(1073742336,c.S,c.S,[]),t.Ab(1073742336,c.K,c.K,[]),t.Ab(1073742336,E.s,E.s,[]),t.Ab(1073742336,c.U,c.U,[]),t.Ab(1073742336,c.cc,c.cc,[]),t.Ab(1073742336,c.A,c.A,[]),t.Ab(1073742336,c.X,c.X,[]),t.Ab(1073742336,c.G,c.G,[]),t.Ab(1073742336,W,W,[]),t.Ab(1073742336,c.s,c.s,[]),t.Ab(1073742336,c.u,c.u,[]),t.Ab(1073742336,i,i,[]),t.Ab(256,V.b,{hasBackdrop:!0},[]),t.Ab(1024,v.j,function(){return[[{path:"",component:f,data:N}]]},[])])})}}]);