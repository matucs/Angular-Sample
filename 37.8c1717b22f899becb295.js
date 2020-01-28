(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"8Ybq":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=function(){return function(){}}(),i=e("pMnS"),r=e("t68o"),o=e("NcP4"),a=e("xYTU"),s=e("vG4h"),b=e("9AJC"),c=e("6f7V"),d=e("ZYCi"),p=e("Ip0R"),m=e("p03g"),g=function(){function n(n){this.http=n,this.prefix="salesRevenueGrouping/list/"}return n.prototype.getAll=function(n){return this.http.postAsDataSourceResult(this.prefix+"getSalesRevenueGroupings",n)},n.prototype.delete=function(n){return this.http.post(this.prefix+"deleteSalesRevenueGrouping",n)},n.prototype.getCustomerGroupTypeList=function(){return this.http.post(this.prefix+"CustomerGroupType",{})},n}(),f=e("A9q4"),h=e("6blF"),v=function(){function n(n,l,e,t,u,i,r,o,a){this.service=n,this.uiService=l,this.layoutService=e,this.ls=t,this.router=u,this.activatedRoute=i,this.userIdentityService=r,this.stdBag=o,this.cuvdBag=a,this.customerGroupTypeList=new h.a}return n.prototype.ngOnInit=function(){var n=this.userIdentityService.user;this.createPermission=n.hasAnyPermissionIn(["/",f.a.salesRevenueGroupingInsert]),this.editPermission=n.hasAnyPermissionIn(["/",f.a.salesRevenueGroupingEdit]),this.deletePermission=n.hasAnyPermissionIn(["/",f.a.salesRevenueGroupingDelete]),this.setPageActions(),this.dataProvider=this.createDataProvider(),this.customerGroupTypeList=this.service.getCustomerGroupTypeList()},n.prototype.createDataProvider=function(){var n=this;return function(l){return n.service.getAll(l)}},n.prototype.onDeleteClick=function(n){var l=this;this.service.delete(n.id).subscribe(function(e){l.table.removeRow(function(l){return l.id===n.id})})},n.prototype.setPageActions=function(){this.createPermission&&this.layoutService.setPageActions([{icon:"fas fa-plus-circle",title:this.stdBag.add,type:"navigate",url:"../insert",relativeTo:this.activatedRoute}])},n}(),C=e("qEmC"),y=t.qb({encapsulation:2,styles:[],data:{}});function A(n){return t.Mb(0,[(n()(),t.Kb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.component.cuvdBag.customerGroupType)})}function x(n){return t.Mb(0,[(n()(),t.Kb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.context.$implicit.customerGroupType)})}function M(n){return t.Mb(0,[(n()(),t.Kb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.component.cuvdBag.name)})}function I(n){return t.Mb(0,[(n()(),t.Kb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.context.$implicit.name)})}function G(n){return t.Mb(0,[(n()(),t.Kb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.component.cuvdBag.fromAmount)})}function P(n){return t.Mb(0,[(n()(),t.sb(0,0,null,null,2,"ocs-number",[],null,null,null,s.A,s.m)),t.rb(1,49152,null,0,c.Vb,[],{value:[0,"value"]},null),t.Hb(256,null,t.v,"fa",[])],function(n,l){n(l,1,0,l.context.$implicit.fromAmount)},null)}function T(n){return t.Mb(0,[(n()(),t.Kb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.component.cuvdBag.toAmount)})}function q(n){return t.Mb(0,[(n()(),t.sb(0,0,null,null,2,"ocs-number",[],null,null,null,s.A,s.m)),t.rb(1,49152,null,0,c.Vb,[],{value:[0,"value"]},null),t.Hb(256,null,t.v,"fa",[])],function(n,l){n(l,1,0,l.context.$implicit.toAmount)},null)}function w(n){return t.Mb(0,[(n()(),t.jb(0,null,null,0))],null,null)}function k(n){return t.Mb(0,[(n()(),t.sb(0,0,null,null,4,"ocs-button",[["appearance","link"],["icon","far fa-edit"]],[[1,"disabled",0]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Cb(n,1).onClick()&&u),u},s.p,s.b)),t.rb(1,16384,null,0,d.m,[d.l,d.a,[8,null],t.G,t.k],{routerLink:[0,"routerLink"]},null),t.Db(2,3),t.rb(3,212992,null,0,c.gb,[t.k,t.G],{text:[0,"text"]},null),t.rb(4,49152,null,0,c.t,[],{appearance:[0,"appearance"],icon:[1,"icon"]},null)],function(n,l){var e=l.component,t=n(l,2,0,"..",l.parent.context.$implicit.id,"edit");n(l,1,0,t),n(l,3,0,e.cuvdBag.edit),n(l,4,0,"link","far fa-edit")},function(n,l){n(l,0,0,t.Cb(l,4)._hostDisabled)})}function R(n){return t.Mb(0,[(n()(),t.sb(0,0,null,null,3,"ocs-button",[["appearance","link"],["color","danger"],["confirmPreset","warning"],["icon","far fa-trash-alt"],["requireConfirm",""]],[[1,"disabled",0]],[[null,"confirm"]],function(n,l,e){var t=!0;return"confirm"===l&&(t=!1!==n.component.onDeleteClick(n.parent.context.$implicit)&&t),t},s.p,s.b)),t.rb(1,212992,null,0,c.mb,[c.sb,c.nb,t.k],{confirmPreset:[0,"confirmPreset"]},{confirm:"confirm"}),t.rb(2,212992,null,0,c.gb,[t.k,t.G],{text:[0,"text"]},null),t.rb(3,49152,null,0,c.t,[],{appearance:[0,"appearance"],color:[1,"color"],icon:[2,"icon"]},null)],function(n,l){var e=l.component;n(l,1,0,"warning"),n(l,2,0,e.stdBag.delete),n(l,3,0,"link","danger","far fa-trash-alt")},function(n,l){n(l,0,0,t.Cb(l,3)._hostDisabled)})}function S(n){return t.Mb(0,[(n()(),t.jb(16777216,null,null,1,null,k)),t.rb(1,16384,null,0,p.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(n()(),t.jb(16777216,null,null,1,null,R)),t.rb(3,16384,null,0,p.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(n()(),t.jb(0,null,null,0))],function(n,l){var e=l.component;n(l,1,0,e.editPermission),n(l,3,0,e.deletePermission)},null)}function D(n){return t.Mb(0,[t.Ib(402653184,1,{table:0}),(n()(),t.sb(1,0,null,null,43,"ocs-data-table",[],null,null,null,s.s,s.e)),t.rb(2,1622016,[[1,4]],1,c.D,[],{dataProvider:[0,"dataProvider"],autoLoad:[1,"autoLoad"],filterable:[2,"filterable"]},null),t.Ib(603979776,2,{_columns:1}),(n()(),t.sb(4,0,null,null,8,"column",[["dataType","multi"],["displayMode","main-row"],["filterDropdownTextField","description"],["filterDropdownValueField","id"],["name","customerGroupType"],["priority","3"]],null,null,null,null,null)),t.rb(5,16384,[[2,4]],2,c.C,[],{name:[0,"name"],priority:[1,"priority"],displayMode:[2,"displayMode"],filterable:[3,"filterable"],dataType:[4,"dataType"],filterDropdownItems:[5,"filterDropdownItems"],filterDropdownTextField:[6,"filterDropdownTextField"],filterDropdownValueField:[7,"filterDropdownValueField"],filterPrependEmptyItem:[8,"filterPrependEmptyItem"]},null),t.Ib(335544320,3,{header:0}),t.Ib(335544320,4,{content:0}),t.Eb(131072,p.b,[t.h]),(n()(),t.jb(0,null,null,1,null,A)),t.rb(10,16384,[[3,4]],0,c.F,[t.O],null,null),(n()(),t.jb(0,null,null,1,null,x)),t.rb(12,212992,[[4,4]],0,c.E,[t.O],null,null),(n()(),t.sb(13,0,null,null,7,"column",[["dataType","string"],["displayMode","main-row"],["name","name"],["priority","3"]],null,null,null,null,null)),t.rb(14,16384,[[2,4]],2,c.C,[],{name:[0,"name"],priority:[1,"priority"],displayMode:[2,"displayMode"],filterable:[3,"filterable"],dataType:[4,"dataType"]},null),t.Ib(335544320,5,{header:0}),t.Ib(335544320,6,{content:0}),(n()(),t.jb(0,null,null,1,null,M)),t.rb(18,16384,[[5,4]],0,c.F,[t.O],null,null),(n()(),t.jb(0,null,null,1,null,I)),t.rb(20,212992,[[6,4]],0,c.E,[t.O],null,null),(n()(),t.sb(21,0,null,null,7,"column",[["displayMode","main-row"],["name","fromAmount"],["priority","3"]],null,null,null,null,null)),t.rb(22,16384,[[2,4]],2,c.C,[],{name:[0,"name"],priority:[1,"priority"],displayMode:[2,"displayMode"]},null),t.Ib(335544320,7,{header:0}),t.Ib(335544320,8,{content:0}),(n()(),t.jb(0,null,null,1,null,G)),t.rb(26,16384,[[7,4]],0,c.F,[t.O],null,null),(n()(),t.jb(0,null,null,1,null,P)),t.rb(28,212992,[[8,4]],0,c.E,[t.O],null,null),(n()(),t.sb(29,0,null,null,7,"column",[["displayMode","main-row"],["name","toAmount"],["priority","3"]],null,null,null,null,null)),t.rb(30,16384,[[2,4]],2,c.C,[],{name:[0,"name"],priority:[1,"priority"],displayMode:[2,"displayMode"]},null),t.Ib(335544320,9,{header:0}),t.Ib(335544320,10,{content:0}),(n()(),t.jb(0,null,null,1,null,T)),t.rb(34,16384,[[9,4]],0,c.F,[t.O],null,null),(n()(),t.jb(0,null,null,1,null,q)),t.rb(36,212992,[[10,4]],0,c.E,[t.O],null,null),(n()(),t.sb(37,0,null,null,7,"column",[["displayMode","main-row"],["name","actions"],["priority","5"]],null,null,null,null,null)),t.rb(38,16384,[[2,4]],2,c.C,[],{name:[0,"name"],priority:[1,"priority"],displayMode:[2,"displayMode"],actionColumn:[3,"actionColumn"]},null),t.Ib(335544320,11,{header:0}),t.Ib(335544320,12,{content:0}),(n()(),t.jb(0,null,null,1,null,w)),t.rb(42,16384,[[11,4]],0,c.F,[t.O],null,null),(n()(),t.jb(0,null,null,1,null,S)),t.rb(44,212992,[[12,4]],0,c.E,[t.O],{textAlign:[0,"textAlign"]},null)],function(n,l){var e=l.component;n(l,2,0,e.dataProvider,!1,!0),n(l,5,0,"customerGroupType","3","main-row",!0,"multi",t.Lb(l,5,5,t.Cb(l,8).transform(e.customerGroupTypeList)),"description","id",!1),n(l,12,0),n(l,14,0,"name","3","main-row",!0,"string"),n(l,20,0),n(l,22,0,"fromAmount","3","main-row"),n(l,28,0),n(l,30,0,"toAmount","3","main-row"),n(l,36,0),n(l,38,0,"actions","5","main-row",!0),n(l,44,0,"left")},null)}function j(n){return t.Mb(0,[(n()(),t.sb(0,0,null,null,2,"ng-component",[],null,null,null,D,y)),t.Hb(512,null,g,g,[m.a]),t.rb(2,114688,null,0,v,[g,c.sb,c.lb,c.m,d.l,d.a,c.ub,c.nb,C.a],null,null)],function(n,l){n(l,2,0)},null)}var L=t.ob("ng-component",v,j,{},{},[]),B=e("gIcY"),H=function(){function n(n){this.http=n,this.prefix="salesRevenueGrouping/",this._prefixLevel2="edit/"}return Object.defineProperty(n.prototype,"isEdit",{set:function(n){this._prefixLevel2=n?"edit/":"add/"},enumerable:!0,configurable:!0}),n.prototype.getModel=function(n){return this.http.post(this.prefix+this._prefixLevel2+"getSalesRevenueGrouping",n)},n.prototype.add=function(n){return this.http.post(this.prefix+this._prefixLevel2+"addSalesRevenueGrouping",n)},n.prototype.edit=function(n){return this.http.post(this.prefix+this._prefixLevel2+"editSalesRevenueGrouping",n)},n.prototype.getCustomerGroupTypeList=function(){return this.http.post(this.prefix+this._prefixLevel2+"CustomerGroupType",{})},n}(),_=function(){return function(){}}(),F=function(){function n(n,l,e,t,u,i,r){this.service=n,this.router=l,this.activatedRoute=e,this.portalUiService=t,this.uiUtilsService=u,this.stdBag=i,this.cuvdBag=r,this.model=new _,this.customerGroupTypeList=new h.a}return n.prototype.ngOnInit=function(){var n=this;this.setPageActions();var l=this.model.id=+this.activatedRoute.snapshot.params.id;this.service.isEdit=this.editMode=Number.isInteger(l),this.customerGroupTypeList=this.service.getCustomerGroupTypeList(),this.editMode&&this.service.getModel(l).subscribe(function(e){n.model=e,n.portalUiService.setBreadcrumbItem("cuvd/sales-revenue-grouping/edit",!0,[{name:"title",value:n.model.name},{name:"id",value:l.toString()}])})},n.prototype.onFormSubmit=function(){var n,l,e=this;this.editMode?(n=this.service.edit(this.model),l=["../../list"]):(n=this.service.add(this.model),l=["../list"]),this.form.form.disable(),n.subscribe(function(n){e.form.form.enable(),e.uiUtilsService.showSnackBar(e.cuvdBag.operationDone),e.router.navigate(l,{relativeTo:e.activatedRoute})},function(n){e.form.form.enable()})},n.prototype.setPageActions=function(){this.portalUiService.clearPageActions()},n.prototype.onAddNewItemPageAction=function(){alert(this.editMode)},n.prototype.onDisabledForm=function(){this.form.form.disable()},n}(),O=t.qb({encapsulation:2,styles:[],data:{}});function V(n){return t.Mb(0,[t.Ib(402653184,1,{form:0}),(n()(),t.sb(1,0,null,null,52,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var u=!0,i=n.component;return"submit"===l&&(u=!1!==t.Cb(n,3).onSubmit(e)&&u),"reset"===l&&(u=!1!==t.Cb(n,3).onReset()&&u),"ngSubmit"===l&&(u=!1!==i.onFormSubmit()&&u),u},null,null)),t.rb(2,16384,null,0,B.u,[],null,null),t.rb(3,4210688,[[1,4],["form",4]],0,B.n,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Hb(2048,null,B.c,null,[B.n]),t.rb(5,16384,null,0,B.m,[[4,B.c]],null,null),(n()(),t.sb(6,0,null,null,44,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.sb(7,0,null,null,43,"div",[["class","col-12 col-sm-12 col-md-6"]],null,null,null,null,null)),(n()(),t.sb(8,0,null,null,10,"ocs-drop-down",[["itemText","description"],["itemValue","id"],["name","customerGroupType"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.customerGroupTypeId=e)&&t),t},s.t,s.f)),t.rb(9,638976,null,2,c.J,[t.r],{required:[0,"required"],label:[1,"label"],items:[2,"items"],itemValue:[3,"itemValue"],itemText:[4,"itemText"]},null),t.Ib(603979776,2,{_addons:1}),t.Ib(335544320,3,{_host:0}),t.Eb(131072,p.b,[t.h]),t.rb(13,16384,null,0,B.q,[],{required:[0,"required"]},null),t.Hb(1024,null,B.i,function(n,l){return[n,l]},[c.J,B.q]),t.Hb(1024,null,B.j,function(n){return[n]},[c.J]),t.rb(16,671744,[[3,4]],0,B.o,[[2,B.c],[6,B.i],[8,null],[6,B.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,B.k,null,[B.o]),t.rb(18,16384,null,0,B.l,[[4,B.k]],null,null),(n()(),t.sb(19,0,null,null,9,"ocs-text-box",[["class","w-100"],["name","name"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.name=e)&&t),t},s.z,s.l)),t.rb(20,114688,null,2,c.eb,[],{required:[0,"required"],label:[1,"label"]},null),t.Ib(603979776,4,{_addons:1}),t.Ib(335544320,5,{_host:0}),t.rb(23,16384,null,0,B.q,[],{required:[0,"required"]},null),t.Hb(1024,null,B.i,function(n,l){return[n,l]},[c.eb,B.q]),t.Hb(1024,null,B.j,function(n){return[n]},[c.eb]),t.rb(26,671744,[[5,4]],0,B.o,[[2,B.c],[6,B.i],[8,null],[6,B.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,B.k,null,[B.o]),t.rb(28,16384,null,0,B.l,[[4,B.k]],null,null),(n()(),t.sb(29,0,null,null,10,"ocs-number-box",[["class","w-100"],["name","fromAmount"]],[[1,"required",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.fromAmount=e)&&t),t},s.v,s.h)),t.rb(30,114688,null,2,c.R,[],{required:[0,"required"],label:[1,"label"],maxlength:[2,"maxlength"]},null),t.Ib(603979776,6,{_addons:1}),t.Ib(335544320,7,{_host:0}),t.rb(33,16384,null,0,B.q,[],{required:[0,"required"]},null),t.rb(34,540672,null,0,B.g,[],{maxlength:[0,"maxlength"]},null),t.Hb(1024,null,B.i,function(n,l,e){return[n,l,e]},[c.R,B.q,B.g]),t.Hb(1024,null,B.j,function(n){return[n]},[c.R]),t.rb(37,671744,[[7,4]],0,B.o,[[2,B.c],[6,B.i],[8,null],[6,B.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,B.k,null,[B.o]),t.rb(39,16384,null,0,B.l,[[4,B.k]],null,null),(n()(),t.sb(40,0,null,null,10,"ocs-number-box",[["class","w-100"],["name","toAmount"]],[[1,"required",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.model.toAmount=e)&&t),t},s.v,s.h)),t.rb(41,114688,null,2,c.R,[],{required:[0,"required"],label:[1,"label"],maxlength:[2,"maxlength"]},null),t.Ib(603979776,8,{_addons:1}),t.Ib(335544320,9,{_host:0}),t.rb(44,16384,null,0,B.q,[],{required:[0,"required"]},null),t.rb(45,540672,null,0,B.g,[],{maxlength:[0,"maxlength"]},null),t.Hb(1024,null,B.i,function(n,l,e){return[n,l,e]},[c.R,B.q,B.g]),t.Hb(1024,null,B.j,function(n){return[n]},[c.R]),t.rb(48,671744,[[9,4]],0,B.o,[[2,B.c],[6,B.i],[8,null],[6,B.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,B.k,null,[B.o]),t.rb(50,16384,null,0,B.l,[[4,B.k]],null,null),(n()(),t.sb(51,0,null,null,2,"footer",[],null,null,null,null,null)),(n()(),t.sb(52,0,null,null,1,"ocs-button",[["class","mt-4 ml-2"],["color","primary"],["type","submit"]],[[1,"disabled",0]],null,null,s.p,s.b)),t.rb(53,49152,null,0,c.t,[],{type:[0,"type"],disabled:[1,"disabled"],color:[2,"color"],text:[3,"text"]},null)],function(n,l){var e=l.component;n(l,9,0,!0,e.cuvdBag.customerGroupType,t.Lb(l,9,2,t.Cb(l,12).transform(e.customerGroupTypeList)),"id","description"),n(l,13,0,!0),n(l,16,0,"customerGroupType",e.model.customerGroupTypeId),n(l,20,0,!0,e.cuvdBag.name),n(l,23,0,!0),n(l,26,0,"name",e.model.name),n(l,30,0,!0,e.cuvdBag.fromAmount,18),n(l,33,0,!0),n(l,34,0,18),n(l,37,0,"fromAmount",e.model.fromAmount),n(l,41,0,!0,e.cuvdBag.toAmount,18),n(l,44,0,!0),n(l,45,0,18),n(l,48,0,"toAmount",e.model.toAmount),n(l,53,0,"submit",!t.Cb(l,3).form.valid||t.Cb(l,3).disabled,"primary",e.cuvdBag.confirmButton)},function(n,l){n(l,1,0,t.Cb(l,5).ngClassUntouched,t.Cb(l,5).ngClassTouched,t.Cb(l,5).ngClassPristine,t.Cb(l,5).ngClassDirty,t.Cb(l,5).ngClassValid,t.Cb(l,5).ngClassInvalid,t.Cb(l,5).ngClassPending),n(l,8,0,t.Cb(l,13).required?"":null,t.Cb(l,18).ngClassUntouched,t.Cb(l,18).ngClassTouched,t.Cb(l,18).ngClassPristine,t.Cb(l,18).ngClassDirty,t.Cb(l,18).ngClassValid,t.Cb(l,18).ngClassInvalid,t.Cb(l,18).ngClassPending),n(l,19,0,t.Cb(l,23).required?"":null,t.Cb(l,28).ngClassUntouched,t.Cb(l,28).ngClassTouched,t.Cb(l,28).ngClassPristine,t.Cb(l,28).ngClassDirty,t.Cb(l,28).ngClassValid,t.Cb(l,28).ngClassInvalid,t.Cb(l,28).ngClassPending),n(l,29,0,t.Cb(l,33).required?"":null,t.Cb(l,34).maxlength?t.Cb(l,34).maxlength:null,t.Cb(l,39).ngClassUntouched,t.Cb(l,39).ngClassTouched,t.Cb(l,39).ngClassPristine,t.Cb(l,39).ngClassDirty,t.Cb(l,39).ngClassValid,t.Cb(l,39).ngClassInvalid,t.Cb(l,39).ngClassPending),n(l,40,0,t.Cb(l,44).required?"":null,t.Cb(l,45).maxlength?t.Cb(l,45).maxlength:null,t.Cb(l,50).ngClassUntouched,t.Cb(l,50).ngClassTouched,t.Cb(l,50).ngClassPristine,t.Cb(l,50).ngClassDirty,t.Cb(l,50).ngClassValid,t.Cb(l,50).ngClassInvalid,t.Cb(l,50).ngClassPending),n(l,52,0,t.Cb(l,53)._hostDisabled)})}function E(n){return t.Mb(0,[(n()(),t.sb(0,0,null,null,2,"ng-component",[],null,null,null,V,O)),t.Hb(512,null,H,H,[m.a]),t.rb(2,114688,null,0,F,[H,d.l,d.a,c.lb,c.sb,c.nb,C.a],null,null)],function(n,l){n(l,2,0)},null)}var U=t.ob("ng-component",F,E,{},{},[]),K=e("eDkP"),J=e("Fzqc"),Z=e("o3x0"),$=e("M2Lx"),Y=e("mVsa"),N=e("uGex"),z=e("v9Dh"),W=e("ZYjt"),X=e("Wf4p"),Q=e("vARd"),nn=e("4c35"),ln=e("dWZg"),en=e("qAlS"),tn=e("SMsm"),un=e("UodH"),rn=e("de3e"),on=e("seP3"),an=e("9It4"),sn=e("lLAP"),bn=e("Z+uX"),cn=e("Blfk"),dn=e("6Wmm"),pn=e("4GxJ"),mn={permissions:["/",f.a.salesRevenueGroupingList],breadcrumb:[{title:"\u0645\u062f\u06cc\u0631\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u067e\u0627\u06cc\u0647"},{title:"\u06af\u0631\u0648\u0647\u200c\u0628\u0646\u062f\u06cc \u062f\u0631\u0622\u0645\u062f \u0641\u0631\u0648\u0634",url:"cuvd/sales-revenue-grouping/list"}]},gn={permissions:["/",f.a.salesRevenueGroupingEdit],breadcrumb:[{title:"\u0645\u062f\u06cc\u0631\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u067e\u0627\u06cc\u0647"},{title:"\u06af\u0631\u0648\u0647\u200c\u0628\u0646\u062f\u06cc \u062f\u0631\u0622\u0645\u062f \u0641\u0631\u0648\u0634",url:"cuvd/sales-revenue-grouping/list"},{title:"#title#",key:"cuvd/sales-revenue-grouping/edit",show:!1,url:"cuvd/sales-revenue-grouping/#id#/edit"},{title:"\u0627\u0635\u0644\u0627\u062d"}]},fn={permissions:["/",f.a.salesRevenueGroupingInsert],breadcrumb:[{title:"\u0645\u062f\u06cc\u0631\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u067e\u0627\u06cc\u0647"},{title:"\u06af\u0631\u0648\u0647\u200c\u0628\u0646\u062f\u06cc \u062f\u0631\u0622\u0645\u062f \u0641\u0631\u0648\u0634",url:"cuvd/sales-revenue-grouping/list"},{title:"\u0627\u0641\u0632\u0648\u062f\u0646",url:"cuvd/sales-revenue-grouping/insert"}]},hn=function(){return function(){}}();e.d(l,"SalesRevenueGroupingModuleNgFactory",function(){return vn});var vn=t.pb(u,[],function(n){return t.zb([t.Ab(512,t.j,t.eb,[[8,[i.a,r.a,o.a,a.a,a.b,s.L,b.a,L,U]],[3,t.j],t.y]),t.Ab(4608,B.v,B.v,[]),t.Ab(4608,p.n,p.m,[t.v,[2,p.D]]),t.Ab(4608,K.a,K.a,[K.g,K.c,t.j,K.f,K.d,t.r,t.A,p.d,J.c,[2,p.h]]),t.Ab(5120,K.h,K.i,[K.a]),t.Ab(5120,Z.c,Z.d,[K.a]),t.Ab(135680,Z.e,Z.e,[K.a,t.r,[2,p.h],[2,Z.b],Z.c,[3,Z.e],K.c]),t.Ab(4608,$.c,$.c,[]),t.Ab(5120,Y.a,Y.c,[K.a]),t.Ab(5120,N.a,N.b,[K.a]),t.Ab(5120,z.a,z.b,[K.a]),t.Ab(4608,W.f,X.a,[[2,X.c],[2,X.e]]),t.Ab(4608,c.sb,c.sb,[Z.e,Q.b]),t.Ab(1073742336,B.t,B.t,[]),t.Ab(1073742336,B.f,B.f,[]),t.Ab(1073742336,p.c,p.c,[]),t.Ab(1073742336,d.o,d.o,[[2,d.u],[2,d.l]]),t.Ab(1073742336,J.a,J.a,[]),t.Ab(1073742336,nn.g,nn.g,[]),t.Ab(1073742336,ln.b,ln.b,[]),t.Ab(1073742336,en.b,en.b,[]),t.Ab(1073742336,K.e,K.e,[]),t.Ab(1073742336,X.e,X.e,[[2,X.b],[2,W.g]]),t.Ab(1073742336,Z.k,Z.k,[]),t.Ab(1073742336,tn.c,tn.c,[]),t.Ab(1073742336,X.i,X.i,[]),t.Ab(1073742336,un.c,un.c,[]),t.Ab(1073742336,$.d,$.d,[]),t.Ab(1073742336,rn.c,rn.c,[]),t.Ab(1073742336,Y.b,Y.b,[]),t.Ab(1073742336,X.g,X.g,[]),t.Ab(1073742336,X.f,X.f,[]),t.Ab(1073742336,on.a,on.a,[]),t.Ab(1073742336,N.c,N.c,[]),t.Ab(1073742336,an.a,an.a,[]),t.Ab(1073742336,sn.a,sn.a,[]),t.Ab(1073742336,z.c,z.c,[]),t.Ab(1073742336,bn.a,bn.a,[]),t.Ab(1073742336,cn.c,cn.c,[]),t.Ab(1073742336,dn.a,dn.a,[]),t.Ab(1073742336,Q.e,Q.e,[]),t.Ab(1073742336,c.a,c.a,[]),t.Ab(1073742336,c.B,c.B,[]),t.Ab(1073742336,c.O,c.O,[]),t.Ab(1073742336,c.Z,c.Z,[]),t.Ab(1073742336,c.ac,c.ac,[]),t.Ab(1073742336,c.fb,c.fb,[]),t.Ab(1073742336,c.S,c.S,[]),t.Ab(1073742336,c.K,c.K,[]),t.Ab(1073742336,pn.s,pn.s,[]),t.Ab(1073742336,c.U,c.U,[]),t.Ab(1073742336,c.cc,c.cc,[]),t.Ab(1073742336,c.A,c.A,[]),t.Ab(1073742336,c.X,c.X,[]),t.Ab(1073742336,c.G,c.G,[]),t.Ab(1073742336,hn,hn,[]),t.Ab(1073742336,c.u,c.u,[]),t.Ab(1073742336,u,u,[]),t.Ab(256,Z.b,{hasBackdrop:!0},[]),t.Ab(1024,d.j,function(){return[[{path:"list",component:v,data:mn},{path:":id/edit",component:F,data:gn},{path:"insert",component:F,data:fn}]]},[])])})}}]);