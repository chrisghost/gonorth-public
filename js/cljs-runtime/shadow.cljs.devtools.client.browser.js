goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22965 = arguments.length;
var i__5770__auto___22966 = (0);
while(true){
if((i__5770__auto___22966 < len__5769__auto___22965)){
args__5775__auto__.push((arguments[i__5770__auto___22966]));

var G__22967 = (i__5770__auto___22966 + (1));
i__5770__auto___22966 = G__22967;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22680){
var G__22681 = cljs.core.first(seq22680);
var seq22680__$1 = cljs.core.next(seq22680);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22681,seq22680__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22685 = cljs.core.seq(sources);
var chunk__22686 = null;
var count__22687 = (0);
var i__22688 = (0);
while(true){
if((i__22688 < count__22687)){
var map__22695 = chunk__22686.cljs$core$IIndexed$_nth$arity$2(null,i__22688);
var map__22695__$1 = cljs.core.__destructure_map(map__22695);
var src = map__22695__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22695__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22695__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22695__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22695__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22696){var e_22968 = e22696;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22968);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22968.message)].join('')));
}

var G__22969 = seq__22685;
var G__22970 = chunk__22686;
var G__22971 = count__22687;
var G__22972 = (i__22688 + (1));
seq__22685 = G__22969;
chunk__22686 = G__22970;
count__22687 = G__22971;
i__22688 = G__22972;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22685);
if(temp__5804__auto__){
var seq__22685__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22685__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22685__$1);
var G__22973 = cljs.core.chunk_rest(seq__22685__$1);
var G__22974 = c__5568__auto__;
var G__22975 = cljs.core.count(c__5568__auto__);
var G__22976 = (0);
seq__22685 = G__22973;
chunk__22686 = G__22974;
count__22687 = G__22975;
i__22688 = G__22976;
continue;
} else {
var map__22697 = cljs.core.first(seq__22685__$1);
var map__22697__$1 = cljs.core.__destructure_map(map__22697);
var src = map__22697__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22698){var e_22977 = e22698;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22977);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22977.message)].join('')));
}

var G__22978 = cljs.core.next(seq__22685__$1);
var G__22979 = null;
var G__22980 = (0);
var G__22981 = (0);
seq__22685 = G__22978;
chunk__22686 = G__22979;
count__22687 = G__22980;
i__22688 = G__22981;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22701 = cljs.core.seq(js_requires);
var chunk__22702 = null;
var count__22703 = (0);
var i__22704 = (0);
while(true){
if((i__22704 < count__22703)){
var js_ns = chunk__22702.cljs$core$IIndexed$_nth$arity$2(null,i__22704);
var require_str_22982 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22982);


var G__22983 = seq__22701;
var G__22984 = chunk__22702;
var G__22985 = count__22703;
var G__22986 = (i__22704 + (1));
seq__22701 = G__22983;
chunk__22702 = G__22984;
count__22703 = G__22985;
i__22704 = G__22986;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22701);
if(temp__5804__auto__){
var seq__22701__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22701__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22701__$1);
var G__22987 = cljs.core.chunk_rest(seq__22701__$1);
var G__22988 = c__5568__auto__;
var G__22989 = cljs.core.count(c__5568__auto__);
var G__22990 = (0);
seq__22701 = G__22987;
chunk__22702 = G__22988;
count__22703 = G__22989;
i__22704 = G__22990;
continue;
} else {
var js_ns = cljs.core.first(seq__22701__$1);
var require_str_22991 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22991);


var G__22992 = cljs.core.next(seq__22701__$1);
var G__22993 = null;
var G__22994 = (0);
var G__22995 = (0);
seq__22701 = G__22992;
chunk__22702 = G__22993;
count__22703 = G__22994;
i__22704 = G__22995;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22706){
var map__22707 = p__22706;
var map__22707__$1 = cljs.core.__destructure_map(map__22707);
var msg = map__22707__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22707__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22707__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22708(s__22709){
return (new cljs.core.LazySeq(null,(function (){
var s__22709__$1 = s__22709;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22709__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22714 = cljs.core.first(xs__6360__auto__);
var map__22714__$1 = cljs.core.__destructure_map(map__22714);
var src = map__22714__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22714__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22714__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22709__$1,map__22714,map__22714__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22707,map__22707__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22708_$_iter__22710(s__22711){
return (new cljs.core.LazySeq(null,((function (s__22709__$1,map__22714,map__22714__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22707,map__22707__$1,msg,info,reload_info){
return (function (){
var s__22711__$1 = s__22711;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22711__$1);
if(temp__5804__auto____$1){
var s__22711__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22711__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22711__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22713 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22712 = (0);
while(true){
if((i__22712 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22712);
cljs.core.chunk_append(b__22713,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22996 = (i__22712 + (1));
i__22712 = G__22996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22713),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22708_$_iter__22710(cljs.core.chunk_rest(s__22711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22713),null);
}
} else {
var warning = cljs.core.first(s__22711__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22708_$_iter__22710(cljs.core.rest(s__22711__$2)));
}
} else {
return null;
}
break;
}
});})(s__22709__$1,map__22714,map__22714__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22707,map__22707__$1,msg,info,reload_info))
,null,null));
});})(s__22709__$1,map__22714,map__22714__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22707,map__22707__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22708(cljs.core.rest(s__22709__$1)));
} else {
var G__22997 = cljs.core.rest(s__22709__$1);
s__22709__$1 = G__22997;
continue;
}
} else {
var G__22998 = cljs.core.rest(s__22709__$1);
s__22709__$1 = G__22998;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22715_22999 = cljs.core.seq(warnings);
var chunk__22716_23000 = null;
var count__22717_23001 = (0);
var i__22718_23002 = (0);
while(true){
if((i__22718_23002 < count__22717_23001)){
var map__22721_23003 = chunk__22716_23000.cljs$core$IIndexed$_nth$arity$2(null,i__22718_23002);
var map__22721_23004__$1 = cljs.core.__destructure_map(map__22721_23003);
var w_23005 = map__22721_23004__$1;
var msg_23006__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22721_23004__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22721_23004__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22721_23004__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22721_23004__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23009)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23007),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23008),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23006__$1)].join(''));


var G__23010 = seq__22715_22999;
var G__23011 = chunk__22716_23000;
var G__23012 = count__22717_23001;
var G__23013 = (i__22718_23002 + (1));
seq__22715_22999 = G__23010;
chunk__22716_23000 = G__23011;
count__22717_23001 = G__23012;
i__22718_23002 = G__23013;
continue;
} else {
var temp__5804__auto___23014 = cljs.core.seq(seq__22715_22999);
if(temp__5804__auto___23014){
var seq__22715_23015__$1 = temp__5804__auto___23014;
if(cljs.core.chunked_seq_QMARK_(seq__22715_23015__$1)){
var c__5568__auto___23016 = cljs.core.chunk_first(seq__22715_23015__$1);
var G__23017 = cljs.core.chunk_rest(seq__22715_23015__$1);
var G__23018 = c__5568__auto___23016;
var G__23019 = cljs.core.count(c__5568__auto___23016);
var G__23020 = (0);
seq__22715_22999 = G__23017;
chunk__22716_23000 = G__23018;
count__22717_23001 = G__23019;
i__22718_23002 = G__23020;
continue;
} else {
var map__22722_23021 = cljs.core.first(seq__22715_23015__$1);
var map__22722_23022__$1 = cljs.core.__destructure_map(map__22722_23021);
var w_23023 = map__22722_23022__$1;
var msg_23024__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22722_23022__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22722_23022__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22722_23022__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22722_23022__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23027)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23025),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23026),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23024__$1)].join(''));


var G__23028 = cljs.core.next(seq__22715_23015__$1);
var G__23029 = null;
var G__23030 = (0);
var G__23031 = (0);
seq__22715_22999 = G__23028;
chunk__22716_23000 = G__23029;
count__22717_23001 = G__23030;
i__22718_23002 = G__23031;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22705_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22705_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22723){
var map__22724 = p__22723;
var map__22724__$1 = cljs.core.__destructure_map(map__22724);
var msg = map__22724__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22724__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22724__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22725 = cljs.core.seq(updates);
var chunk__22727 = null;
var count__22728 = (0);
var i__22729 = (0);
while(true){
if((i__22729 < count__22728)){
var path = chunk__22727.cljs$core$IIndexed$_nth$arity$2(null,i__22729);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22839_23032 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22843_23033 = null;
var count__22844_23034 = (0);
var i__22845_23035 = (0);
while(true){
if((i__22845_23035 < count__22844_23034)){
var node_23036 = chunk__22843_23033.cljs$core$IIndexed$_nth$arity$2(null,i__22845_23035);
if(cljs.core.not(node_23036.shadow$old)){
var path_match_23037 = shadow.cljs.devtools.client.browser.match_paths(node_23036.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23037)){
var new_link_23038 = (function (){var G__22871 = node_23036.cloneNode(true);
G__22871.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23037),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22871;
})();
(node_23036.shadow$old = true);

(new_link_23038.onload = ((function (seq__22839_23032,chunk__22843_23033,count__22844_23034,i__22845_23035,seq__22725,chunk__22727,count__22728,i__22729,new_link_23038,path_match_23037,node_23036,path,map__22724,map__22724__$1,msg,updates,reload_info){
return (function (e){
var seq__22872_23039 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22874_23040 = null;
var count__22875_23041 = (0);
var i__22876_23042 = (0);
while(true){
if((i__22876_23042 < count__22875_23041)){
var map__22880_23043 = chunk__22874_23040.cljs$core$IIndexed$_nth$arity$2(null,i__22876_23042);
var map__22880_23044__$1 = cljs.core.__destructure_map(map__22880_23043);
var task_23045 = map__22880_23044__$1;
var fn_str_23046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880_23044__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880_23044__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23048 = goog.getObjectByName(fn_str_23046,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23047)].join(''));

(fn_obj_23048.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23048.cljs$core$IFn$_invoke$arity$2(path,new_link_23038) : fn_obj_23048.call(null,path,new_link_23038));


var G__23049 = seq__22872_23039;
var G__23050 = chunk__22874_23040;
var G__23051 = count__22875_23041;
var G__23052 = (i__22876_23042 + (1));
seq__22872_23039 = G__23049;
chunk__22874_23040 = G__23050;
count__22875_23041 = G__23051;
i__22876_23042 = G__23052;
continue;
} else {
var temp__5804__auto___23053 = cljs.core.seq(seq__22872_23039);
if(temp__5804__auto___23053){
var seq__22872_23054__$1 = temp__5804__auto___23053;
if(cljs.core.chunked_seq_QMARK_(seq__22872_23054__$1)){
var c__5568__auto___23055 = cljs.core.chunk_first(seq__22872_23054__$1);
var G__23056 = cljs.core.chunk_rest(seq__22872_23054__$1);
var G__23057 = c__5568__auto___23055;
var G__23058 = cljs.core.count(c__5568__auto___23055);
var G__23059 = (0);
seq__22872_23039 = G__23056;
chunk__22874_23040 = G__23057;
count__22875_23041 = G__23058;
i__22876_23042 = G__23059;
continue;
} else {
var map__22881_23060 = cljs.core.first(seq__22872_23054__$1);
var map__22881_23061__$1 = cljs.core.__destructure_map(map__22881_23060);
var task_23062 = map__22881_23061__$1;
var fn_str_23063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881_23061__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881_23061__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23065 = goog.getObjectByName(fn_str_23063,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23064)].join(''));

(fn_obj_23065.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23065.cljs$core$IFn$_invoke$arity$2(path,new_link_23038) : fn_obj_23065.call(null,path,new_link_23038));


var G__23066 = cljs.core.next(seq__22872_23054__$1);
var G__23067 = null;
var G__23068 = (0);
var G__23069 = (0);
seq__22872_23039 = G__23066;
chunk__22874_23040 = G__23067;
count__22875_23041 = G__23068;
i__22876_23042 = G__23069;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23036);
});})(seq__22839_23032,chunk__22843_23033,count__22844_23034,i__22845_23035,seq__22725,chunk__22727,count__22728,i__22729,new_link_23038,path_match_23037,node_23036,path,map__22724,map__22724__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23037], 0));

goog.dom.insertSiblingAfter(new_link_23038,node_23036);


var G__23070 = seq__22839_23032;
var G__23071 = chunk__22843_23033;
var G__23072 = count__22844_23034;
var G__23073 = (i__22845_23035 + (1));
seq__22839_23032 = G__23070;
chunk__22843_23033 = G__23071;
count__22844_23034 = G__23072;
i__22845_23035 = G__23073;
continue;
} else {
var G__23074 = seq__22839_23032;
var G__23075 = chunk__22843_23033;
var G__23076 = count__22844_23034;
var G__23077 = (i__22845_23035 + (1));
seq__22839_23032 = G__23074;
chunk__22843_23033 = G__23075;
count__22844_23034 = G__23076;
i__22845_23035 = G__23077;
continue;
}
} else {
var G__23078 = seq__22839_23032;
var G__23079 = chunk__22843_23033;
var G__23080 = count__22844_23034;
var G__23081 = (i__22845_23035 + (1));
seq__22839_23032 = G__23078;
chunk__22843_23033 = G__23079;
count__22844_23034 = G__23080;
i__22845_23035 = G__23081;
continue;
}
} else {
var temp__5804__auto___23082 = cljs.core.seq(seq__22839_23032);
if(temp__5804__auto___23082){
var seq__22839_23083__$1 = temp__5804__auto___23082;
if(cljs.core.chunked_seq_QMARK_(seq__22839_23083__$1)){
var c__5568__auto___23084 = cljs.core.chunk_first(seq__22839_23083__$1);
var G__23085 = cljs.core.chunk_rest(seq__22839_23083__$1);
var G__23086 = c__5568__auto___23084;
var G__23087 = cljs.core.count(c__5568__auto___23084);
var G__23088 = (0);
seq__22839_23032 = G__23085;
chunk__22843_23033 = G__23086;
count__22844_23034 = G__23087;
i__22845_23035 = G__23088;
continue;
} else {
var node_23089 = cljs.core.first(seq__22839_23083__$1);
if(cljs.core.not(node_23089.shadow$old)){
var path_match_23090 = shadow.cljs.devtools.client.browser.match_paths(node_23089.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23090)){
var new_link_23091 = (function (){var G__22882 = node_23089.cloneNode(true);
G__22882.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23090),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22882;
})();
(node_23089.shadow$old = true);

(new_link_23091.onload = ((function (seq__22839_23032,chunk__22843_23033,count__22844_23034,i__22845_23035,seq__22725,chunk__22727,count__22728,i__22729,new_link_23091,path_match_23090,node_23089,seq__22839_23083__$1,temp__5804__auto___23082,path,map__22724,map__22724__$1,msg,updates,reload_info){
return (function (e){
var seq__22883_23092 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22885_23093 = null;
var count__22886_23094 = (0);
var i__22887_23095 = (0);
while(true){
if((i__22887_23095 < count__22886_23094)){
var map__22891_23096 = chunk__22885_23093.cljs$core$IIndexed$_nth$arity$2(null,i__22887_23095);
var map__22891_23097__$1 = cljs.core.__destructure_map(map__22891_23096);
var task_23098 = map__22891_23097__$1;
var fn_str_23099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22891_23097__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22891_23097__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23101 = goog.getObjectByName(fn_str_23099,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23100)].join(''));

(fn_obj_23101.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23101.cljs$core$IFn$_invoke$arity$2(path,new_link_23091) : fn_obj_23101.call(null,path,new_link_23091));


var G__23102 = seq__22883_23092;
var G__23103 = chunk__22885_23093;
var G__23104 = count__22886_23094;
var G__23105 = (i__22887_23095 + (1));
seq__22883_23092 = G__23102;
chunk__22885_23093 = G__23103;
count__22886_23094 = G__23104;
i__22887_23095 = G__23105;
continue;
} else {
var temp__5804__auto___23106__$1 = cljs.core.seq(seq__22883_23092);
if(temp__5804__auto___23106__$1){
var seq__22883_23107__$1 = temp__5804__auto___23106__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22883_23107__$1)){
var c__5568__auto___23108 = cljs.core.chunk_first(seq__22883_23107__$1);
var G__23109 = cljs.core.chunk_rest(seq__22883_23107__$1);
var G__23110 = c__5568__auto___23108;
var G__23111 = cljs.core.count(c__5568__auto___23108);
var G__23112 = (0);
seq__22883_23092 = G__23109;
chunk__22885_23093 = G__23110;
count__22886_23094 = G__23111;
i__22887_23095 = G__23112;
continue;
} else {
var map__22892_23113 = cljs.core.first(seq__22883_23107__$1);
var map__22892_23114__$1 = cljs.core.__destructure_map(map__22892_23113);
var task_23115 = map__22892_23114__$1;
var fn_str_23116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22892_23114__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22892_23114__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23118 = goog.getObjectByName(fn_str_23116,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23117)].join(''));

(fn_obj_23118.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23118.cljs$core$IFn$_invoke$arity$2(path,new_link_23091) : fn_obj_23118.call(null,path,new_link_23091));


var G__23119 = cljs.core.next(seq__22883_23107__$1);
var G__23120 = null;
var G__23121 = (0);
var G__23122 = (0);
seq__22883_23092 = G__23119;
chunk__22885_23093 = G__23120;
count__22886_23094 = G__23121;
i__22887_23095 = G__23122;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23089);
});})(seq__22839_23032,chunk__22843_23033,count__22844_23034,i__22845_23035,seq__22725,chunk__22727,count__22728,i__22729,new_link_23091,path_match_23090,node_23089,seq__22839_23083__$1,temp__5804__auto___23082,path,map__22724,map__22724__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23090], 0));

goog.dom.insertSiblingAfter(new_link_23091,node_23089);


var G__23123 = cljs.core.next(seq__22839_23083__$1);
var G__23124 = null;
var G__23125 = (0);
var G__23126 = (0);
seq__22839_23032 = G__23123;
chunk__22843_23033 = G__23124;
count__22844_23034 = G__23125;
i__22845_23035 = G__23126;
continue;
} else {
var G__23127 = cljs.core.next(seq__22839_23083__$1);
var G__23128 = null;
var G__23129 = (0);
var G__23130 = (0);
seq__22839_23032 = G__23127;
chunk__22843_23033 = G__23128;
count__22844_23034 = G__23129;
i__22845_23035 = G__23130;
continue;
}
} else {
var G__23131 = cljs.core.next(seq__22839_23083__$1);
var G__23132 = null;
var G__23133 = (0);
var G__23134 = (0);
seq__22839_23032 = G__23131;
chunk__22843_23033 = G__23132;
count__22844_23034 = G__23133;
i__22845_23035 = G__23134;
continue;
}
}
} else {
}
}
break;
}


var G__23135 = seq__22725;
var G__23136 = chunk__22727;
var G__23137 = count__22728;
var G__23138 = (i__22729 + (1));
seq__22725 = G__23135;
chunk__22727 = G__23136;
count__22728 = G__23137;
i__22729 = G__23138;
continue;
} else {
var G__23139 = seq__22725;
var G__23140 = chunk__22727;
var G__23141 = count__22728;
var G__23142 = (i__22729 + (1));
seq__22725 = G__23139;
chunk__22727 = G__23140;
count__22728 = G__23141;
i__22729 = G__23142;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22725);
if(temp__5804__auto__){
var seq__22725__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22725__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22725__$1);
var G__23143 = cljs.core.chunk_rest(seq__22725__$1);
var G__23144 = c__5568__auto__;
var G__23145 = cljs.core.count(c__5568__auto__);
var G__23146 = (0);
seq__22725 = G__23143;
chunk__22727 = G__23144;
count__22728 = G__23145;
i__22729 = G__23146;
continue;
} else {
var path = cljs.core.first(seq__22725__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22893_23147 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22897_23148 = null;
var count__22898_23149 = (0);
var i__22899_23150 = (0);
while(true){
if((i__22899_23150 < count__22898_23149)){
var node_23151 = chunk__22897_23148.cljs$core$IIndexed$_nth$arity$2(null,i__22899_23150);
if(cljs.core.not(node_23151.shadow$old)){
var path_match_23152 = shadow.cljs.devtools.client.browser.match_paths(node_23151.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23152)){
var new_link_23153 = (function (){var G__22925 = node_23151.cloneNode(true);
G__22925.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23152),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22925;
})();
(node_23151.shadow$old = true);

(new_link_23153.onload = ((function (seq__22893_23147,chunk__22897_23148,count__22898_23149,i__22899_23150,seq__22725,chunk__22727,count__22728,i__22729,new_link_23153,path_match_23152,node_23151,path,seq__22725__$1,temp__5804__auto__,map__22724,map__22724__$1,msg,updates,reload_info){
return (function (e){
var seq__22926_23154 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22928_23155 = null;
var count__22929_23156 = (0);
var i__22930_23157 = (0);
while(true){
if((i__22930_23157 < count__22929_23156)){
var map__22934_23158 = chunk__22928_23155.cljs$core$IIndexed$_nth$arity$2(null,i__22930_23157);
var map__22934_23159__$1 = cljs.core.__destructure_map(map__22934_23158);
var task_23160 = map__22934_23159__$1;
var fn_str_23161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23159__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23159__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23163 = goog.getObjectByName(fn_str_23161,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23162)].join(''));

(fn_obj_23163.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23163.cljs$core$IFn$_invoke$arity$2(path,new_link_23153) : fn_obj_23163.call(null,path,new_link_23153));


var G__23164 = seq__22926_23154;
var G__23165 = chunk__22928_23155;
var G__23166 = count__22929_23156;
var G__23167 = (i__22930_23157 + (1));
seq__22926_23154 = G__23164;
chunk__22928_23155 = G__23165;
count__22929_23156 = G__23166;
i__22930_23157 = G__23167;
continue;
} else {
var temp__5804__auto___23168__$1 = cljs.core.seq(seq__22926_23154);
if(temp__5804__auto___23168__$1){
var seq__22926_23169__$1 = temp__5804__auto___23168__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22926_23169__$1)){
var c__5568__auto___23170 = cljs.core.chunk_first(seq__22926_23169__$1);
var G__23171 = cljs.core.chunk_rest(seq__22926_23169__$1);
var G__23172 = c__5568__auto___23170;
var G__23173 = cljs.core.count(c__5568__auto___23170);
var G__23174 = (0);
seq__22926_23154 = G__23171;
chunk__22928_23155 = G__23172;
count__22929_23156 = G__23173;
i__22930_23157 = G__23174;
continue;
} else {
var map__22935_23175 = cljs.core.first(seq__22926_23169__$1);
var map__22935_23176__$1 = cljs.core.__destructure_map(map__22935_23175);
var task_23177 = map__22935_23176__$1;
var fn_str_23178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935_23176__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935_23176__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23180 = goog.getObjectByName(fn_str_23178,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23179)].join(''));

(fn_obj_23180.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23180.cljs$core$IFn$_invoke$arity$2(path,new_link_23153) : fn_obj_23180.call(null,path,new_link_23153));


var G__23181 = cljs.core.next(seq__22926_23169__$1);
var G__23182 = null;
var G__23183 = (0);
var G__23184 = (0);
seq__22926_23154 = G__23181;
chunk__22928_23155 = G__23182;
count__22929_23156 = G__23183;
i__22930_23157 = G__23184;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23151);
});})(seq__22893_23147,chunk__22897_23148,count__22898_23149,i__22899_23150,seq__22725,chunk__22727,count__22728,i__22729,new_link_23153,path_match_23152,node_23151,path,seq__22725__$1,temp__5804__auto__,map__22724,map__22724__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23152], 0));

goog.dom.insertSiblingAfter(new_link_23153,node_23151);


var G__23185 = seq__22893_23147;
var G__23186 = chunk__22897_23148;
var G__23187 = count__22898_23149;
var G__23188 = (i__22899_23150 + (1));
seq__22893_23147 = G__23185;
chunk__22897_23148 = G__23186;
count__22898_23149 = G__23187;
i__22899_23150 = G__23188;
continue;
} else {
var G__23189 = seq__22893_23147;
var G__23190 = chunk__22897_23148;
var G__23191 = count__22898_23149;
var G__23192 = (i__22899_23150 + (1));
seq__22893_23147 = G__23189;
chunk__22897_23148 = G__23190;
count__22898_23149 = G__23191;
i__22899_23150 = G__23192;
continue;
}
} else {
var G__23193 = seq__22893_23147;
var G__23194 = chunk__22897_23148;
var G__23195 = count__22898_23149;
var G__23196 = (i__22899_23150 + (1));
seq__22893_23147 = G__23193;
chunk__22897_23148 = G__23194;
count__22898_23149 = G__23195;
i__22899_23150 = G__23196;
continue;
}
} else {
var temp__5804__auto___23197__$1 = cljs.core.seq(seq__22893_23147);
if(temp__5804__auto___23197__$1){
var seq__22893_23198__$1 = temp__5804__auto___23197__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22893_23198__$1)){
var c__5568__auto___23199 = cljs.core.chunk_first(seq__22893_23198__$1);
var G__23200 = cljs.core.chunk_rest(seq__22893_23198__$1);
var G__23201 = c__5568__auto___23199;
var G__23202 = cljs.core.count(c__5568__auto___23199);
var G__23203 = (0);
seq__22893_23147 = G__23200;
chunk__22897_23148 = G__23201;
count__22898_23149 = G__23202;
i__22899_23150 = G__23203;
continue;
} else {
var node_23204 = cljs.core.first(seq__22893_23198__$1);
if(cljs.core.not(node_23204.shadow$old)){
var path_match_23205 = shadow.cljs.devtools.client.browser.match_paths(node_23204.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23205)){
var new_link_23206 = (function (){var G__22936 = node_23204.cloneNode(true);
G__22936.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23205),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22936;
})();
(node_23204.shadow$old = true);

(new_link_23206.onload = ((function (seq__22893_23147,chunk__22897_23148,count__22898_23149,i__22899_23150,seq__22725,chunk__22727,count__22728,i__22729,new_link_23206,path_match_23205,node_23204,seq__22893_23198__$1,temp__5804__auto___23197__$1,path,seq__22725__$1,temp__5804__auto__,map__22724,map__22724__$1,msg,updates,reload_info){
return (function (e){
var seq__22937_23207 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22939_23208 = null;
var count__22940_23209 = (0);
var i__22941_23210 = (0);
while(true){
if((i__22941_23210 < count__22940_23209)){
var map__22945_23211 = chunk__22939_23208.cljs$core$IIndexed$_nth$arity$2(null,i__22941_23210);
var map__22945_23212__$1 = cljs.core.__destructure_map(map__22945_23211);
var task_23213 = map__22945_23212__$1;
var fn_str_23214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945_23212__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945_23212__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23216 = goog.getObjectByName(fn_str_23214,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23215)].join(''));

(fn_obj_23216.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23216.cljs$core$IFn$_invoke$arity$2(path,new_link_23206) : fn_obj_23216.call(null,path,new_link_23206));


var G__23217 = seq__22937_23207;
var G__23218 = chunk__22939_23208;
var G__23219 = count__22940_23209;
var G__23220 = (i__22941_23210 + (1));
seq__22937_23207 = G__23217;
chunk__22939_23208 = G__23218;
count__22940_23209 = G__23219;
i__22941_23210 = G__23220;
continue;
} else {
var temp__5804__auto___23221__$2 = cljs.core.seq(seq__22937_23207);
if(temp__5804__auto___23221__$2){
var seq__22937_23222__$1 = temp__5804__auto___23221__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22937_23222__$1)){
var c__5568__auto___23223 = cljs.core.chunk_first(seq__22937_23222__$1);
var G__23224 = cljs.core.chunk_rest(seq__22937_23222__$1);
var G__23225 = c__5568__auto___23223;
var G__23226 = cljs.core.count(c__5568__auto___23223);
var G__23227 = (0);
seq__22937_23207 = G__23224;
chunk__22939_23208 = G__23225;
count__22940_23209 = G__23226;
i__22941_23210 = G__23227;
continue;
} else {
var map__22946_23228 = cljs.core.first(seq__22937_23222__$1);
var map__22946_23229__$1 = cljs.core.__destructure_map(map__22946_23228);
var task_23230 = map__22946_23229__$1;
var fn_str_23231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22946_23229__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22946_23229__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23233 = goog.getObjectByName(fn_str_23231,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23232)].join(''));

(fn_obj_23233.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23233.cljs$core$IFn$_invoke$arity$2(path,new_link_23206) : fn_obj_23233.call(null,path,new_link_23206));


var G__23234 = cljs.core.next(seq__22937_23222__$1);
var G__23235 = null;
var G__23236 = (0);
var G__23237 = (0);
seq__22937_23207 = G__23234;
chunk__22939_23208 = G__23235;
count__22940_23209 = G__23236;
i__22941_23210 = G__23237;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23204);
});})(seq__22893_23147,chunk__22897_23148,count__22898_23149,i__22899_23150,seq__22725,chunk__22727,count__22728,i__22729,new_link_23206,path_match_23205,node_23204,seq__22893_23198__$1,temp__5804__auto___23197__$1,path,seq__22725__$1,temp__5804__auto__,map__22724,map__22724__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23205], 0));

goog.dom.insertSiblingAfter(new_link_23206,node_23204);


var G__23238 = cljs.core.next(seq__22893_23198__$1);
var G__23239 = null;
var G__23240 = (0);
var G__23241 = (0);
seq__22893_23147 = G__23238;
chunk__22897_23148 = G__23239;
count__22898_23149 = G__23240;
i__22899_23150 = G__23241;
continue;
} else {
var G__23242 = cljs.core.next(seq__22893_23198__$1);
var G__23243 = null;
var G__23244 = (0);
var G__23245 = (0);
seq__22893_23147 = G__23242;
chunk__22897_23148 = G__23243;
count__22898_23149 = G__23244;
i__22899_23150 = G__23245;
continue;
}
} else {
var G__23246 = cljs.core.next(seq__22893_23198__$1);
var G__23247 = null;
var G__23248 = (0);
var G__23249 = (0);
seq__22893_23147 = G__23246;
chunk__22897_23148 = G__23247;
count__22898_23149 = G__23248;
i__22899_23150 = G__23249;
continue;
}
}
} else {
}
}
break;
}


var G__23250 = cljs.core.next(seq__22725__$1);
var G__23251 = null;
var G__23252 = (0);
var G__23253 = (0);
seq__22725 = G__23250;
chunk__22727 = G__23251;
count__22728 = G__23252;
i__22729 = G__23253;
continue;
} else {
var G__23254 = cljs.core.next(seq__22725__$1);
var G__23255 = null;
var G__23256 = (0);
var G__23257 = (0);
seq__22725 = G__23254;
chunk__22727 = G__23255;
count__22728 = G__23256;
i__22729 = G__23257;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22947){
var map__22948 = p__22947;
var map__22948__$1 = cljs.core.__destructure_map(map__22948);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22949,done,error){
var map__22950 = p__22949;
var map__22950__$1 = cljs.core.__destructure_map(map__22950);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22951,done,error){
var map__22952 = p__22951;
var map__22952__$1 = cljs.core.__destructure_map(map__22952);
var msg = map__22952__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22953){
var map__22954 = p__22953;
var map__22954__$1 = cljs.core.__destructure_map(map__22954);
var src = map__22954__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22954__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22955 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22955) : done.call(null,G__22955));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22956){
var map__22957 = p__22956;
var map__22957__$1 = cljs.core.__destructure_map(map__22957);
var msg__$1 = map__22957__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22957__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22958){var ex = e22958;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22959){
var map__22960 = p__22959;
var map__22960__$1 = cljs.core.__destructure_map(map__22960);
var env = map__22960__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22960__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22961){
var map__22962 = p__22961;
var map__22962__$1 = cljs.core.__destructure_map(map__22962);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22963){
var map__22964 = p__22963;
var map__22964__$1 = cljs.core.__destructure_map(map__22964);
var svc = map__22964__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
