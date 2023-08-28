goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17141){
var map__17143 = p__17141;
var map__17143__$1 = cljs.core.__destructure_map(map__17143);
var runtime = map__17143__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17143__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_17613 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_17613)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17152 = runtime;
var G__17153 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_17613);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17152,G__17153) : shadow.remote.runtime.shared.process.call(null,G__17152,G__17153));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17157,res){
var map__17158 = p__17157;
var map__17158__$1 = cljs.core.__destructure_map(map__17158);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17158__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17158__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17159 = res;
var G__17159__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17159,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17159);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17159__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17159__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17173 = arguments.length;
switch (G__17173) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17192,msg,handlers,timeout_after_ms){
var map__17193 = p__17192;
var map__17193__$1 = cljs.core.__destructure_map(map__17193);
var runtime = map__17193__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17193__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17638 = arguments.length;
var i__5770__auto___17639 = (0);
while(true){
if((i__5770__auto___17639 < len__5769__auto___17638)){
args__5775__auto__.push((arguments[i__5770__auto___17639]));

var G__17643 = (i__5770__auto___17639 + (1));
i__5770__auto___17639 = G__17643;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17226,ev,args){
var map__17227 = p__17226;
var map__17227__$1 = cljs.core.__destructure_map(map__17227);
var runtime = map__17227__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17227__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17233 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17236 = null;
var count__17237 = (0);
var i__17238 = (0);
while(true){
if((i__17238 < count__17237)){
var ext = chunk__17236.cljs$core$IIndexed$_nth$arity$2(null,i__17238);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17651 = seq__17233;
var G__17652 = chunk__17236;
var G__17653 = count__17237;
var G__17654 = (i__17238 + (1));
seq__17233 = G__17651;
chunk__17236 = G__17652;
count__17237 = G__17653;
i__17238 = G__17654;
continue;
} else {
var G__17656 = seq__17233;
var G__17657 = chunk__17236;
var G__17658 = count__17237;
var G__17659 = (i__17238 + (1));
seq__17233 = G__17656;
chunk__17236 = G__17657;
count__17237 = G__17658;
i__17238 = G__17659;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17233);
if(temp__5804__auto__){
var seq__17233__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17233__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17233__$1);
var G__17665 = cljs.core.chunk_rest(seq__17233__$1);
var G__17666 = c__5568__auto__;
var G__17667 = cljs.core.count(c__5568__auto__);
var G__17668 = (0);
seq__17233 = G__17665;
chunk__17236 = G__17666;
count__17237 = G__17667;
i__17238 = G__17668;
continue;
} else {
var ext = cljs.core.first(seq__17233__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17670 = cljs.core.next(seq__17233__$1);
var G__17671 = null;
var G__17672 = (0);
var G__17673 = (0);
seq__17233 = G__17670;
chunk__17236 = G__17671;
count__17237 = G__17672;
i__17238 = G__17673;
continue;
} else {
var G__17674 = cljs.core.next(seq__17233__$1);
var G__17675 = null;
var G__17676 = (0);
var G__17677 = (0);
seq__17233 = G__17674;
chunk__17236 = G__17675;
count__17237 = G__17676;
i__17238 = G__17677;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17203){
var G__17204 = cljs.core.first(seq17203);
var seq17203__$1 = cljs.core.next(seq17203);
var G__17205 = cljs.core.first(seq17203__$1);
var seq17203__$2 = cljs.core.next(seq17203__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17204,G__17205,seq17203__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17359,p__17360){
var map__17367 = p__17359;
var map__17367__$1 = cljs.core.__destructure_map(map__17367);
var runtime = map__17367__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17367__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17374 = p__17360;
var map__17374__$1 = cljs.core.__destructure_map(map__17374);
var msg = map__17374__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17374__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17378 = cljs.core.deref(state_ref);
var map__17378__$1 = cljs.core.__destructure_map(map__17378);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17378__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17378__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17402,msg){
var map__17403 = p__17402;
var map__17403__$1 = cljs.core.__destructure_map(map__17403);
var runtime = map__17403__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17403__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17447,key,p__17448){
var map__17449 = p__17447;
var map__17449__$1 = cljs.core.__destructure_map(map__17449);
var state = map__17449__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17449__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17450 = p__17448;
var map__17450__$1 = cljs.core.__destructure_map(map__17450);
var spec = map__17450__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17458,key,spec){
var map__17459 = p__17458;
var map__17459__$1 = cljs.core.__destructure_map(map__17459);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17459__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17468_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17468_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17469_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17469_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17470_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17470_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17471_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17471_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17472_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17472_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17502,key){
var map__17503 = p__17502;
var map__17503__$1 = cljs.core.__destructure_map(map__17503);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17503__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17509,msg){
var map__17510 = p__17509;
var map__17510__$1 = cljs.core.__destructure_map(map__17510);
var runtime = map__17510__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17521,p__17522){
var map__17523 = p__17521;
var map__17523__$1 = cljs.core.__destructure_map(map__17523);
var runtime = map__17523__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17523__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17524 = p__17522;
var map__17524__$1 = cljs.core.__destructure_map(map__17524);
var msg = map__17524__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17536 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17538 = null;
var count__17539 = (0);
var i__17540 = (0);
while(true){
if((i__17540 < count__17539)){
var map__17573 = chunk__17538.cljs$core$IIndexed$_nth$arity$2(null,i__17540);
var map__17573__$1 = cljs.core.__destructure_map(map__17573);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17573__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17745 = seq__17536;
var G__17746 = chunk__17538;
var G__17747 = count__17539;
var G__17748 = (i__17540 + (1));
seq__17536 = G__17745;
chunk__17538 = G__17746;
count__17539 = G__17747;
i__17540 = G__17748;
continue;
} else {
var G__17749 = seq__17536;
var G__17750 = chunk__17538;
var G__17751 = count__17539;
var G__17752 = (i__17540 + (1));
seq__17536 = G__17749;
chunk__17538 = G__17750;
count__17539 = G__17751;
i__17540 = G__17752;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17536);
if(temp__5804__auto__){
var seq__17536__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17536__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17536__$1);
var G__17754 = cljs.core.chunk_rest(seq__17536__$1);
var G__17755 = c__5568__auto__;
var G__17756 = cljs.core.count(c__5568__auto__);
var G__17757 = (0);
seq__17536 = G__17754;
chunk__17538 = G__17755;
count__17539 = G__17756;
i__17540 = G__17757;
continue;
} else {
var map__17582 = cljs.core.first(seq__17536__$1);
var map__17582__$1 = cljs.core.__destructure_map(map__17582);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17582__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17758 = cljs.core.next(seq__17536__$1);
var G__17759 = null;
var G__17760 = (0);
var G__17761 = (0);
seq__17536 = G__17758;
chunk__17538 = G__17759;
count__17539 = G__17760;
i__17540 = G__17761;
continue;
} else {
var G__17762 = cljs.core.next(seq__17536__$1);
var G__17763 = null;
var G__17764 = (0);
var G__17765 = (0);
seq__17536 = G__17762;
chunk__17538 = G__17763;
count__17539 = G__17764;
i__17540 = G__17765;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
