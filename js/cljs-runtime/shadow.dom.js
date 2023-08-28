goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20740 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20740(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20742 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20742(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19588 = coll;
var G__19589 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19588,G__19589) : shadow.dom.lazy_native_coll_seq.call(null,G__19588,G__19589));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19631 = arguments.length;
switch (G__19631) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19646 = arguments.length;
switch (G__19646) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19662 = arguments.length;
switch (G__19662) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19670 = arguments.length;
switch (G__19670) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19696 = arguments.length;
switch (G__19696) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19708 = arguments.length;
switch (G__19708) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19720){if((e19720 instanceof Object)){
var e = e19720;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19720;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19729 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19730 = null;
var count__19731 = (0);
var i__19732 = (0);
while(true){
if((i__19732 < count__19731)){
var el = chunk__19730.cljs$core$IIndexed$_nth$arity$2(null,i__19732);
var handler_20754__$1 = ((function (seq__19729,chunk__19730,count__19731,i__19732,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19729,chunk__19730,count__19731,i__19732,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20754__$1);


var G__20755 = seq__19729;
var G__20756 = chunk__19730;
var G__20757 = count__19731;
var G__20758 = (i__19732 + (1));
seq__19729 = G__20755;
chunk__19730 = G__20756;
count__19731 = G__20757;
i__19732 = G__20758;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19729);
if(temp__5804__auto__){
var seq__19729__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19729__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19729__$1);
var G__20759 = cljs.core.chunk_rest(seq__19729__$1);
var G__20760 = c__5568__auto__;
var G__20761 = cljs.core.count(c__5568__auto__);
var G__20762 = (0);
seq__19729 = G__20759;
chunk__19730 = G__20760;
count__19731 = G__20761;
i__19732 = G__20762;
continue;
} else {
var el = cljs.core.first(seq__19729__$1);
var handler_20763__$1 = ((function (seq__19729,chunk__19730,count__19731,i__19732,el,seq__19729__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19729,chunk__19730,count__19731,i__19732,el,seq__19729__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20763__$1);


var G__20764 = cljs.core.next(seq__19729__$1);
var G__20765 = null;
var G__20766 = (0);
var G__20767 = (0);
seq__19729 = G__20764;
chunk__19730 = G__20765;
count__19731 = G__20766;
i__19732 = G__20767;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19749 = arguments.length;
switch (G__19749) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19764 = cljs.core.seq(events);
var chunk__19765 = null;
var count__19766 = (0);
var i__19767 = (0);
while(true){
if((i__19767 < count__19766)){
var vec__19786 = chunk__19765.cljs$core$IIndexed$_nth$arity$2(null,i__19767);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19786,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19786,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20773 = seq__19764;
var G__20774 = chunk__19765;
var G__20775 = count__19766;
var G__20776 = (i__19767 + (1));
seq__19764 = G__20773;
chunk__19765 = G__20774;
count__19766 = G__20775;
i__19767 = G__20776;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19764);
if(temp__5804__auto__){
var seq__19764__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19764__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19764__$1);
var G__20777 = cljs.core.chunk_rest(seq__19764__$1);
var G__20778 = c__5568__auto__;
var G__20779 = cljs.core.count(c__5568__auto__);
var G__20780 = (0);
seq__19764 = G__20777;
chunk__19765 = G__20778;
count__19766 = G__20779;
i__19767 = G__20780;
continue;
} else {
var vec__19790 = cljs.core.first(seq__19764__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19790,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20781 = cljs.core.next(seq__19764__$1);
var G__20782 = null;
var G__20783 = (0);
var G__20784 = (0);
seq__19764 = G__20781;
chunk__19765 = G__20782;
count__19766 = G__20783;
i__19767 = G__20784;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19795 = cljs.core.seq(styles);
var chunk__19796 = null;
var count__19797 = (0);
var i__19798 = (0);
while(true){
if((i__19798 < count__19797)){
var vec__19811 = chunk__19796.cljs$core$IIndexed$_nth$arity$2(null,i__19798);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19811,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20785 = seq__19795;
var G__20786 = chunk__19796;
var G__20787 = count__19797;
var G__20788 = (i__19798 + (1));
seq__19795 = G__20785;
chunk__19796 = G__20786;
count__19797 = G__20787;
i__19798 = G__20788;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19795);
if(temp__5804__auto__){
var seq__19795__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19795__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19795__$1);
var G__20790 = cljs.core.chunk_rest(seq__19795__$1);
var G__20791 = c__5568__auto__;
var G__20792 = cljs.core.count(c__5568__auto__);
var G__20793 = (0);
seq__19795 = G__20790;
chunk__19796 = G__20791;
count__19797 = G__20792;
i__19798 = G__20793;
continue;
} else {
var vec__19820 = cljs.core.first(seq__19795__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19820,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20795 = cljs.core.next(seq__19795__$1);
var G__20796 = null;
var G__20797 = (0);
var G__20798 = (0);
seq__19795 = G__20795;
chunk__19796 = G__20796;
count__19797 = G__20797;
i__19798 = G__20798;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19830_20799 = key;
var G__19830_20800__$1 = (((G__19830_20799 instanceof cljs.core.Keyword))?G__19830_20799.fqn:null);
switch (G__19830_20800__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20807 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20807,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20807,"aria-");
}
})())){
el.setAttribute(ks_20807,value);
} else {
(el[ks_20807] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19913){
var map__19914 = p__19913;
var map__19914__$1 = cljs.core.__destructure_map(map__19914);
var props = map__19914__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19918 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19924 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19924,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19924;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19933 = arguments.length;
switch (G__19933) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19949){
var vec__19951 = p__19949;
var seq__19952 = cljs.core.seq(vec__19951);
var first__19953 = cljs.core.first(seq__19952);
var seq__19952__$1 = cljs.core.next(seq__19952);
var nn = first__19953;
var first__19953__$1 = cljs.core.first(seq__19952__$1);
var seq__19952__$2 = cljs.core.next(seq__19952__$1);
var np = first__19953__$1;
var nc = seq__19952__$2;
var node = vec__19951;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19955 = nn;
var G__19956 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19955,G__19956) : create_fn.call(null,G__19955,G__19956));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19958 = nn;
var G__19959 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19958,G__19959) : create_fn.call(null,G__19958,G__19959));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19962 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19962,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19962,(1),null);
var seq__19965_20821 = cljs.core.seq(node_children);
var chunk__19966_20822 = null;
var count__19967_20823 = (0);
var i__19968_20824 = (0);
while(true){
if((i__19968_20824 < count__19967_20823)){
var child_struct_20829 = chunk__19966_20822.cljs$core$IIndexed$_nth$arity$2(null,i__19968_20824);
var children_20830 = shadow.dom.dom_node(child_struct_20829);
if(cljs.core.seq_QMARK_(children_20830)){
var seq__20000_20832 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20830));
var chunk__20002_20833 = null;
var count__20003_20834 = (0);
var i__20004_20835 = (0);
while(true){
if((i__20004_20835 < count__20003_20834)){
var child_20836 = chunk__20002_20833.cljs$core$IIndexed$_nth$arity$2(null,i__20004_20835);
if(cljs.core.truth_(child_20836)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20836);


var G__20838 = seq__20000_20832;
var G__20839 = chunk__20002_20833;
var G__20840 = count__20003_20834;
var G__20841 = (i__20004_20835 + (1));
seq__20000_20832 = G__20838;
chunk__20002_20833 = G__20839;
count__20003_20834 = G__20840;
i__20004_20835 = G__20841;
continue;
} else {
var G__20842 = seq__20000_20832;
var G__20843 = chunk__20002_20833;
var G__20844 = count__20003_20834;
var G__20845 = (i__20004_20835 + (1));
seq__20000_20832 = G__20842;
chunk__20002_20833 = G__20843;
count__20003_20834 = G__20844;
i__20004_20835 = G__20845;
continue;
}
} else {
var temp__5804__auto___20846 = cljs.core.seq(seq__20000_20832);
if(temp__5804__auto___20846){
var seq__20000_20847__$1 = temp__5804__auto___20846;
if(cljs.core.chunked_seq_QMARK_(seq__20000_20847__$1)){
var c__5568__auto___20849 = cljs.core.chunk_first(seq__20000_20847__$1);
var G__20850 = cljs.core.chunk_rest(seq__20000_20847__$1);
var G__20851 = c__5568__auto___20849;
var G__20852 = cljs.core.count(c__5568__auto___20849);
var G__20853 = (0);
seq__20000_20832 = G__20850;
chunk__20002_20833 = G__20851;
count__20003_20834 = G__20852;
i__20004_20835 = G__20853;
continue;
} else {
var child_20856 = cljs.core.first(seq__20000_20847__$1);
if(cljs.core.truth_(child_20856)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20856);


var G__20857 = cljs.core.next(seq__20000_20847__$1);
var G__20858 = null;
var G__20859 = (0);
var G__20860 = (0);
seq__20000_20832 = G__20857;
chunk__20002_20833 = G__20858;
count__20003_20834 = G__20859;
i__20004_20835 = G__20860;
continue;
} else {
var G__20861 = cljs.core.next(seq__20000_20847__$1);
var G__20862 = null;
var G__20863 = (0);
var G__20864 = (0);
seq__20000_20832 = G__20861;
chunk__20002_20833 = G__20862;
count__20003_20834 = G__20863;
i__20004_20835 = G__20864;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20830);
}


var G__20865 = seq__19965_20821;
var G__20866 = chunk__19966_20822;
var G__20867 = count__19967_20823;
var G__20868 = (i__19968_20824 + (1));
seq__19965_20821 = G__20865;
chunk__19966_20822 = G__20866;
count__19967_20823 = G__20867;
i__19968_20824 = G__20868;
continue;
} else {
var temp__5804__auto___20869 = cljs.core.seq(seq__19965_20821);
if(temp__5804__auto___20869){
var seq__19965_20871__$1 = temp__5804__auto___20869;
if(cljs.core.chunked_seq_QMARK_(seq__19965_20871__$1)){
var c__5568__auto___20872 = cljs.core.chunk_first(seq__19965_20871__$1);
var G__20873 = cljs.core.chunk_rest(seq__19965_20871__$1);
var G__20874 = c__5568__auto___20872;
var G__20875 = cljs.core.count(c__5568__auto___20872);
var G__20876 = (0);
seq__19965_20821 = G__20873;
chunk__19966_20822 = G__20874;
count__19967_20823 = G__20875;
i__19968_20824 = G__20876;
continue;
} else {
var child_struct_20877 = cljs.core.first(seq__19965_20871__$1);
var children_20878 = shadow.dom.dom_node(child_struct_20877);
if(cljs.core.seq_QMARK_(children_20878)){
var seq__20033_20879 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20878));
var chunk__20035_20880 = null;
var count__20036_20881 = (0);
var i__20037_20882 = (0);
while(true){
if((i__20037_20882 < count__20036_20881)){
var child_20883 = chunk__20035_20880.cljs$core$IIndexed$_nth$arity$2(null,i__20037_20882);
if(cljs.core.truth_(child_20883)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20883);


var G__20884 = seq__20033_20879;
var G__20885 = chunk__20035_20880;
var G__20886 = count__20036_20881;
var G__20887 = (i__20037_20882 + (1));
seq__20033_20879 = G__20884;
chunk__20035_20880 = G__20885;
count__20036_20881 = G__20886;
i__20037_20882 = G__20887;
continue;
} else {
var G__20888 = seq__20033_20879;
var G__20889 = chunk__20035_20880;
var G__20890 = count__20036_20881;
var G__20891 = (i__20037_20882 + (1));
seq__20033_20879 = G__20888;
chunk__20035_20880 = G__20889;
count__20036_20881 = G__20890;
i__20037_20882 = G__20891;
continue;
}
} else {
var temp__5804__auto___20892__$1 = cljs.core.seq(seq__20033_20879);
if(temp__5804__auto___20892__$1){
var seq__20033_20895__$1 = temp__5804__auto___20892__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20033_20895__$1)){
var c__5568__auto___20896 = cljs.core.chunk_first(seq__20033_20895__$1);
var G__20897 = cljs.core.chunk_rest(seq__20033_20895__$1);
var G__20898 = c__5568__auto___20896;
var G__20899 = cljs.core.count(c__5568__auto___20896);
var G__20900 = (0);
seq__20033_20879 = G__20897;
chunk__20035_20880 = G__20898;
count__20036_20881 = G__20899;
i__20037_20882 = G__20900;
continue;
} else {
var child_20901 = cljs.core.first(seq__20033_20895__$1);
if(cljs.core.truth_(child_20901)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20901);


var G__20902 = cljs.core.next(seq__20033_20895__$1);
var G__20903 = null;
var G__20904 = (0);
var G__20905 = (0);
seq__20033_20879 = G__20902;
chunk__20035_20880 = G__20903;
count__20036_20881 = G__20904;
i__20037_20882 = G__20905;
continue;
} else {
var G__20906 = cljs.core.next(seq__20033_20895__$1);
var G__20907 = null;
var G__20908 = (0);
var G__20909 = (0);
seq__20033_20879 = G__20906;
chunk__20035_20880 = G__20907;
count__20036_20881 = G__20908;
i__20037_20882 = G__20909;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20878);
}


var G__20910 = cljs.core.next(seq__19965_20871__$1);
var G__20911 = null;
var G__20912 = (0);
var G__20913 = (0);
seq__19965_20821 = G__20910;
chunk__19966_20822 = G__20911;
count__19967_20823 = G__20912;
i__19968_20824 = G__20913;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20068 = cljs.core.seq(node);
var chunk__20069 = null;
var count__20070 = (0);
var i__20071 = (0);
while(true){
if((i__20071 < count__20070)){
var n = chunk__20069.cljs$core$IIndexed$_nth$arity$2(null,i__20071);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20922 = seq__20068;
var G__20923 = chunk__20069;
var G__20924 = count__20070;
var G__20925 = (i__20071 + (1));
seq__20068 = G__20922;
chunk__20069 = G__20923;
count__20070 = G__20924;
i__20071 = G__20925;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20068);
if(temp__5804__auto__){
var seq__20068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20068__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20068__$1);
var G__20927 = cljs.core.chunk_rest(seq__20068__$1);
var G__20928 = c__5568__auto__;
var G__20929 = cljs.core.count(c__5568__auto__);
var G__20930 = (0);
seq__20068 = G__20927;
chunk__20069 = G__20928;
count__20070 = G__20929;
i__20071 = G__20930;
continue;
} else {
var n = cljs.core.first(seq__20068__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20931 = cljs.core.next(seq__20068__$1);
var G__20932 = null;
var G__20933 = (0);
var G__20934 = (0);
seq__20068 = G__20931;
chunk__20069 = G__20932;
count__20070 = G__20933;
i__20071 = G__20934;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20102 = arguments.length;
switch (G__20102) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20116 = arguments.length;
switch (G__20116) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20139 = arguments.length;
switch (G__20139) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20948 = arguments.length;
var i__5770__auto___20949 = (0);
while(true){
if((i__5770__auto___20949 < len__5769__auto___20948)){
args__5775__auto__.push((arguments[i__5770__auto___20949]));

var G__20950 = (i__5770__auto___20949 + (1));
i__5770__auto___20949 = G__20950;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20207_20954 = cljs.core.seq(nodes);
var chunk__20208_20955 = null;
var count__20209_20956 = (0);
var i__20210_20957 = (0);
while(true){
if((i__20210_20957 < count__20209_20956)){
var node_20958 = chunk__20208_20955.cljs$core$IIndexed$_nth$arity$2(null,i__20210_20957);
fragment.appendChild(shadow.dom._to_dom(node_20958));


var G__20959 = seq__20207_20954;
var G__20960 = chunk__20208_20955;
var G__20961 = count__20209_20956;
var G__20962 = (i__20210_20957 + (1));
seq__20207_20954 = G__20959;
chunk__20208_20955 = G__20960;
count__20209_20956 = G__20961;
i__20210_20957 = G__20962;
continue;
} else {
var temp__5804__auto___20963 = cljs.core.seq(seq__20207_20954);
if(temp__5804__auto___20963){
var seq__20207_20964__$1 = temp__5804__auto___20963;
if(cljs.core.chunked_seq_QMARK_(seq__20207_20964__$1)){
var c__5568__auto___20965 = cljs.core.chunk_first(seq__20207_20964__$1);
var G__20966 = cljs.core.chunk_rest(seq__20207_20964__$1);
var G__20967 = c__5568__auto___20965;
var G__20968 = cljs.core.count(c__5568__auto___20965);
var G__20969 = (0);
seq__20207_20954 = G__20966;
chunk__20208_20955 = G__20967;
count__20209_20956 = G__20968;
i__20210_20957 = G__20969;
continue;
} else {
var node_20970 = cljs.core.first(seq__20207_20964__$1);
fragment.appendChild(shadow.dom._to_dom(node_20970));


var G__20971 = cljs.core.next(seq__20207_20964__$1);
var G__20972 = null;
var G__20973 = (0);
var G__20974 = (0);
seq__20207_20954 = G__20971;
chunk__20208_20955 = G__20972;
count__20209_20956 = G__20973;
i__20210_20957 = G__20974;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20193){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20193));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20246_20979 = cljs.core.seq(scripts);
var chunk__20247_20981 = null;
var count__20248_20982 = (0);
var i__20249_20983 = (0);
while(true){
if((i__20249_20983 < count__20248_20982)){
var vec__20267_20984 = chunk__20247_20981.cljs$core$IIndexed$_nth$arity$2(null,i__20249_20983);
var script_tag_20985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20267_20984,(0),null);
var script_body_20986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20267_20984,(1),null);
eval(script_body_20986);


var G__20991 = seq__20246_20979;
var G__20992 = chunk__20247_20981;
var G__20993 = count__20248_20982;
var G__20994 = (i__20249_20983 + (1));
seq__20246_20979 = G__20991;
chunk__20247_20981 = G__20992;
count__20248_20982 = G__20993;
i__20249_20983 = G__20994;
continue;
} else {
var temp__5804__auto___20995 = cljs.core.seq(seq__20246_20979);
if(temp__5804__auto___20995){
var seq__20246_20996__$1 = temp__5804__auto___20995;
if(cljs.core.chunked_seq_QMARK_(seq__20246_20996__$1)){
var c__5568__auto___20997 = cljs.core.chunk_first(seq__20246_20996__$1);
var G__20998 = cljs.core.chunk_rest(seq__20246_20996__$1);
var G__20999 = c__5568__auto___20997;
var G__21000 = cljs.core.count(c__5568__auto___20997);
var G__21001 = (0);
seq__20246_20979 = G__20998;
chunk__20247_20981 = G__20999;
count__20248_20982 = G__21000;
i__20249_20983 = G__21001;
continue;
} else {
var vec__20272_21006 = cljs.core.first(seq__20246_20996__$1);
var script_tag_21007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20272_21006,(0),null);
var script_body_21008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20272_21006,(1),null);
eval(script_body_21008);


var G__21009 = cljs.core.next(seq__20246_20996__$1);
var G__21010 = null;
var G__21011 = (0);
var G__21012 = (0);
seq__20246_20979 = G__21009;
chunk__20247_20981 = G__21010;
count__20248_20982 = G__21011;
i__20249_20983 = G__21012;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20275){
var vec__20276 = p__20275;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20276,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20276,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20280 = arguments.length;
switch (G__20280) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20310 = cljs.core.seq(style_keys);
var chunk__20311 = null;
var count__20312 = (0);
var i__20313 = (0);
while(true){
if((i__20313 < count__20312)){
var it = chunk__20311.cljs$core$IIndexed$_nth$arity$2(null,i__20313);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21028 = seq__20310;
var G__21029 = chunk__20311;
var G__21030 = count__20312;
var G__21031 = (i__20313 + (1));
seq__20310 = G__21028;
chunk__20311 = G__21029;
count__20312 = G__21030;
i__20313 = G__21031;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20310);
if(temp__5804__auto__){
var seq__20310__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20310__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20310__$1);
var G__21033 = cljs.core.chunk_rest(seq__20310__$1);
var G__21034 = c__5568__auto__;
var G__21035 = cljs.core.count(c__5568__auto__);
var G__21036 = (0);
seq__20310 = G__21033;
chunk__20311 = G__21034;
count__20312 = G__21035;
i__20313 = G__21036;
continue;
} else {
var it = cljs.core.first(seq__20310__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21037 = cljs.core.next(seq__20310__$1);
var G__21038 = null;
var G__21039 = (0);
var G__21040 = (0);
seq__20310 = G__21037;
chunk__20311 = G__21038;
count__20312 = G__21039;
i__20313 = G__21040;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20323,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20342 = k20323;
var G__20342__$1 = (((G__20342 instanceof cljs.core.Keyword))?G__20342.fqn:null);
switch (G__20342__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20323,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20347){
var vec__20350 = p__20347;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20350,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20350,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20322){
var self__ = this;
var G__20322__$1 = this;
return (new cljs.core.RecordIter((0),G__20322__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20325,other20326){
var self__ = this;
var this20325__$1 = this;
return (((!((other20326 == null)))) && ((((this20325__$1.constructor === other20326.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20325__$1.x,other20326.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20325__$1.y,other20326.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20325__$1.__extmap,other20326.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20323){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20379 = k20323;
var G__20379__$1 = (((G__20379 instanceof cljs.core.Keyword))?G__20379.fqn:null);
switch (G__20379__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20323);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20322){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20384 = cljs.core.keyword_identical_QMARK_;
var expr__20385 = k__5352__auto__;
if(cljs.core.truth_((pred__20384.cljs$core$IFn$_invoke$arity$2 ? pred__20384.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20385) : pred__20384.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20385)))){
return (new shadow.dom.Coordinate(G__20322,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20384.cljs$core$IFn$_invoke$arity$2 ? pred__20384.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20385) : pred__20384.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20385)))){
return (new shadow.dom.Coordinate(self__.x,G__20322,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20322),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20322){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20322,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20332){
var extmap__5385__auto__ = (function (){var G__20408 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20332,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20332)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20408);
} else {
return G__20408;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20332),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20332),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20431,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20456 = k20431;
var G__20456__$1 = (((G__20456 instanceof cljs.core.Keyword))?G__20456.fqn:null);
switch (G__20456__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20431,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20462){
var vec__20471 = p__20462;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20430){
var self__ = this;
var G__20430__$1 = this;
return (new cljs.core.RecordIter((0),G__20430__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20432,other20433){
var self__ = this;
var this20432__$1 = this;
return (((!((other20433 == null)))) && ((((this20432__$1.constructor === other20433.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20432__$1.w,other20433.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20432__$1.h,other20433.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20432__$1.__extmap,other20433.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20431){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20506 = k20431;
var G__20506__$1 = (((G__20506 instanceof cljs.core.Keyword))?G__20506.fqn:null);
switch (G__20506__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20431);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20430){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20508 = cljs.core.keyword_identical_QMARK_;
var expr__20509 = k__5352__auto__;
if(cljs.core.truth_((pred__20508.cljs$core$IFn$_invoke$arity$2 ? pred__20508.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20509) : pred__20508.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20509)))){
return (new shadow.dom.Size(G__20430,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20508.cljs$core$IFn$_invoke$arity$2 ? pred__20508.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20509) : pred__20508.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20509)))){
return (new shadow.dom.Size(self__.w,G__20430,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20430),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20430){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20430,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20438){
var extmap__5385__auto__ = (function (){var G__20522 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20438,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20438)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20522);
} else {
return G__20522;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20438),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20438),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21156 = (i + (1));
var G__21157 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21156;
ret = G__21157;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20540){
var vec__20541 = p__20540;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20541,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20547 = arguments.length;
switch (G__20547) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21176 = ps;
var G__21177 = (i + (1));
el__$1 = G__21176;
i = G__21177;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20593 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20593,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20593,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20593,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20597_21183 = cljs.core.seq(props);
var chunk__20598_21184 = null;
var count__20599_21186 = (0);
var i__20600_21187 = (0);
while(true){
if((i__20600_21187 < count__20599_21186)){
var vec__20612_21188 = chunk__20598_21184.cljs$core$IIndexed$_nth$arity$2(null,i__20600_21187);
var k_21189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20612_21188,(0),null);
var v_21190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20612_21188,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21189);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21189),v_21190);


var G__21193 = seq__20597_21183;
var G__21194 = chunk__20598_21184;
var G__21195 = count__20599_21186;
var G__21196 = (i__20600_21187 + (1));
seq__20597_21183 = G__21193;
chunk__20598_21184 = G__21194;
count__20599_21186 = G__21195;
i__20600_21187 = G__21196;
continue;
} else {
var temp__5804__auto___21197 = cljs.core.seq(seq__20597_21183);
if(temp__5804__auto___21197){
var seq__20597_21198__$1 = temp__5804__auto___21197;
if(cljs.core.chunked_seq_QMARK_(seq__20597_21198__$1)){
var c__5568__auto___21199 = cljs.core.chunk_first(seq__20597_21198__$1);
var G__21200 = cljs.core.chunk_rest(seq__20597_21198__$1);
var G__21201 = c__5568__auto___21199;
var G__21202 = cljs.core.count(c__5568__auto___21199);
var G__21203 = (0);
seq__20597_21183 = G__21200;
chunk__20598_21184 = G__21201;
count__20599_21186 = G__21202;
i__20600_21187 = G__21203;
continue;
} else {
var vec__20619_21204 = cljs.core.first(seq__20597_21198__$1);
var k_21205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20619_21204,(0),null);
var v_21206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20619_21204,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21205);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21205),v_21206);


var G__21210 = cljs.core.next(seq__20597_21198__$1);
var G__21211 = null;
var G__21212 = (0);
var G__21213 = (0);
seq__20597_21183 = G__21210;
chunk__20598_21184 = G__21211;
count__20599_21186 = G__21212;
i__20600_21187 = G__21213;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20633 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20633,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20633,(1),null);
var seq__20636_21219 = cljs.core.seq(node_children);
var chunk__20638_21220 = null;
var count__20639_21221 = (0);
var i__20640_21222 = (0);
while(true){
if((i__20640_21222 < count__20639_21221)){
var child_struct_21223 = chunk__20638_21220.cljs$core$IIndexed$_nth$arity$2(null,i__20640_21222);
if((!((child_struct_21223 == null)))){
if(typeof child_struct_21223 === 'string'){
var text_21226 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21226),child_struct_21223].join(''));
} else {
var children_21229 = shadow.dom.svg_node(child_struct_21223);
if(cljs.core.seq_QMARK_(children_21229)){
var seq__20667_21230 = cljs.core.seq(children_21229);
var chunk__20669_21231 = null;
var count__20670_21232 = (0);
var i__20671_21233 = (0);
while(true){
if((i__20671_21233 < count__20670_21232)){
var child_21238 = chunk__20669_21231.cljs$core$IIndexed$_nth$arity$2(null,i__20671_21233);
if(cljs.core.truth_(child_21238)){
node.appendChild(child_21238);


var G__21239 = seq__20667_21230;
var G__21240 = chunk__20669_21231;
var G__21241 = count__20670_21232;
var G__21242 = (i__20671_21233 + (1));
seq__20667_21230 = G__21239;
chunk__20669_21231 = G__21240;
count__20670_21232 = G__21241;
i__20671_21233 = G__21242;
continue;
} else {
var G__21243 = seq__20667_21230;
var G__21244 = chunk__20669_21231;
var G__21245 = count__20670_21232;
var G__21246 = (i__20671_21233 + (1));
seq__20667_21230 = G__21243;
chunk__20669_21231 = G__21244;
count__20670_21232 = G__21245;
i__20671_21233 = G__21246;
continue;
}
} else {
var temp__5804__auto___21251 = cljs.core.seq(seq__20667_21230);
if(temp__5804__auto___21251){
var seq__20667_21252__$1 = temp__5804__auto___21251;
if(cljs.core.chunked_seq_QMARK_(seq__20667_21252__$1)){
var c__5568__auto___21256 = cljs.core.chunk_first(seq__20667_21252__$1);
var G__21266 = cljs.core.chunk_rest(seq__20667_21252__$1);
var G__21267 = c__5568__auto___21256;
var G__21268 = cljs.core.count(c__5568__auto___21256);
var G__21269 = (0);
seq__20667_21230 = G__21266;
chunk__20669_21231 = G__21267;
count__20670_21232 = G__21268;
i__20671_21233 = G__21269;
continue;
} else {
var child_21270 = cljs.core.first(seq__20667_21252__$1);
if(cljs.core.truth_(child_21270)){
node.appendChild(child_21270);


var G__21271 = cljs.core.next(seq__20667_21252__$1);
var G__21272 = null;
var G__21273 = (0);
var G__21274 = (0);
seq__20667_21230 = G__21271;
chunk__20669_21231 = G__21272;
count__20670_21232 = G__21273;
i__20671_21233 = G__21274;
continue;
} else {
var G__21275 = cljs.core.next(seq__20667_21252__$1);
var G__21276 = null;
var G__21277 = (0);
var G__21278 = (0);
seq__20667_21230 = G__21275;
chunk__20669_21231 = G__21276;
count__20670_21232 = G__21277;
i__20671_21233 = G__21278;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21229);
}
}


var G__21279 = seq__20636_21219;
var G__21280 = chunk__20638_21220;
var G__21281 = count__20639_21221;
var G__21282 = (i__20640_21222 + (1));
seq__20636_21219 = G__21279;
chunk__20638_21220 = G__21280;
count__20639_21221 = G__21281;
i__20640_21222 = G__21282;
continue;
} else {
var G__21288 = seq__20636_21219;
var G__21289 = chunk__20638_21220;
var G__21290 = count__20639_21221;
var G__21291 = (i__20640_21222 + (1));
seq__20636_21219 = G__21288;
chunk__20638_21220 = G__21289;
count__20639_21221 = G__21290;
i__20640_21222 = G__21291;
continue;
}
} else {
var temp__5804__auto___21292 = cljs.core.seq(seq__20636_21219);
if(temp__5804__auto___21292){
var seq__20636_21294__$1 = temp__5804__auto___21292;
if(cljs.core.chunked_seq_QMARK_(seq__20636_21294__$1)){
var c__5568__auto___21299 = cljs.core.chunk_first(seq__20636_21294__$1);
var G__21300 = cljs.core.chunk_rest(seq__20636_21294__$1);
var G__21301 = c__5568__auto___21299;
var G__21302 = cljs.core.count(c__5568__auto___21299);
var G__21303 = (0);
seq__20636_21219 = G__21300;
chunk__20638_21220 = G__21301;
count__20639_21221 = G__21302;
i__20640_21222 = G__21303;
continue;
} else {
var child_struct_21304 = cljs.core.first(seq__20636_21294__$1);
if((!((child_struct_21304 == null)))){
if(typeof child_struct_21304 === 'string'){
var text_21310 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21310),child_struct_21304].join(''));
} else {
var children_21311 = shadow.dom.svg_node(child_struct_21304);
if(cljs.core.seq_QMARK_(children_21311)){
var seq__20680_21312 = cljs.core.seq(children_21311);
var chunk__20682_21313 = null;
var count__20683_21314 = (0);
var i__20684_21315 = (0);
while(true){
if((i__20684_21315 < count__20683_21314)){
var child_21324 = chunk__20682_21313.cljs$core$IIndexed$_nth$arity$2(null,i__20684_21315);
if(cljs.core.truth_(child_21324)){
node.appendChild(child_21324);


var G__21325 = seq__20680_21312;
var G__21326 = chunk__20682_21313;
var G__21327 = count__20683_21314;
var G__21328 = (i__20684_21315 + (1));
seq__20680_21312 = G__21325;
chunk__20682_21313 = G__21326;
count__20683_21314 = G__21327;
i__20684_21315 = G__21328;
continue;
} else {
var G__21332 = seq__20680_21312;
var G__21333 = chunk__20682_21313;
var G__21334 = count__20683_21314;
var G__21335 = (i__20684_21315 + (1));
seq__20680_21312 = G__21332;
chunk__20682_21313 = G__21333;
count__20683_21314 = G__21334;
i__20684_21315 = G__21335;
continue;
}
} else {
var temp__5804__auto___21336__$1 = cljs.core.seq(seq__20680_21312);
if(temp__5804__auto___21336__$1){
var seq__20680_21341__$1 = temp__5804__auto___21336__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20680_21341__$1)){
var c__5568__auto___21342 = cljs.core.chunk_first(seq__20680_21341__$1);
var G__21343 = cljs.core.chunk_rest(seq__20680_21341__$1);
var G__21344 = c__5568__auto___21342;
var G__21345 = cljs.core.count(c__5568__auto___21342);
var G__21346 = (0);
seq__20680_21312 = G__21343;
chunk__20682_21313 = G__21344;
count__20683_21314 = G__21345;
i__20684_21315 = G__21346;
continue;
} else {
var child_21348 = cljs.core.first(seq__20680_21341__$1);
if(cljs.core.truth_(child_21348)){
node.appendChild(child_21348);


var G__21350 = cljs.core.next(seq__20680_21341__$1);
var G__21351 = null;
var G__21352 = (0);
var G__21353 = (0);
seq__20680_21312 = G__21350;
chunk__20682_21313 = G__21351;
count__20683_21314 = G__21352;
i__20684_21315 = G__21353;
continue;
} else {
var G__21354 = cljs.core.next(seq__20680_21341__$1);
var G__21355 = null;
var G__21356 = (0);
var G__21357 = (0);
seq__20680_21312 = G__21354;
chunk__20682_21313 = G__21355;
count__20683_21314 = G__21356;
i__20684_21315 = G__21357;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21311);
}
}


var G__21358 = cljs.core.next(seq__20636_21294__$1);
var G__21359 = null;
var G__21360 = (0);
var G__21361 = (0);
seq__20636_21219 = G__21358;
chunk__20638_21220 = G__21359;
count__20639_21221 = G__21360;
i__20640_21222 = G__21361;
continue;
} else {
var G__21362 = cljs.core.next(seq__20636_21294__$1);
var G__21363 = null;
var G__21364 = (0);
var G__21365 = (0);
seq__20636_21219 = G__21362;
chunk__20638_21220 = G__21363;
count__20639_21221 = G__21364;
i__20640_21222 = G__21365;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21389 = arguments.length;
var i__5770__auto___21390 = (0);
while(true){
if((i__5770__auto___21390 < len__5769__auto___21389)){
args__5775__auto__.push((arguments[i__5770__auto___21390]));

var G__21391 = (i__5770__auto___21390 + (1));
i__5770__auto___21390 = G__21391;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20695){
var G__20696 = cljs.core.first(seq20695);
var seq20695__$1 = cljs.core.next(seq20695);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20696,seq20695__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20712 = arguments.length;
switch (G__20712) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__16416__auto___21420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_20717){
var state_val_20718 = (state_20717[(1)]);
if((state_val_20718 === (1))){
var state_20717__$1 = state_20717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20717__$1,(2),once_or_cleanup);
} else {
if((state_val_20718 === (2))){
var inst_20714 = (state_20717[(2)]);
var inst_20715 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20717__$1 = (function (){var statearr_20721 = state_20717;
(statearr_20721[(7)] = inst_20714);

return statearr_20721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20717__$1,inst_20715);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__16182__auto__ = null;
var shadow$dom$state_machine__16182__auto____0 = (function (){
var statearr_20723 = [null,null,null,null,null,null,null,null];
(statearr_20723[(0)] = shadow$dom$state_machine__16182__auto__);

(statearr_20723[(1)] = (1));

return statearr_20723;
});
var shadow$dom$state_machine__16182__auto____1 = (function (state_20717){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_20717);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e20725){var ex__16185__auto__ = e20725;
var statearr_20726_21429 = state_20717;
(statearr_20726_21429[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_20717[(4)]))){
var statearr_20727_21430 = state_20717;
(statearr_20727_21430[(1)] = cljs.core.first((state_20717[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21431 = state_20717;
state_20717 = G__21431;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
shadow$dom$state_machine__16182__auto__ = function(state_20717){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__16182__auto____0.call(this);
case 1:
return shadow$dom$state_machine__16182__auto____1.call(this,state_20717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__16182__auto____0;
shadow$dom$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__16182__auto____1;
return shadow$dom$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_20729 = f__16417__auto__();
(statearr_20729[(6)] = c__16416__auto___21420);

return statearr_20729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
