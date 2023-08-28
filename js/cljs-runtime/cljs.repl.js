goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20935){
var map__20938 = p__20935;
var map__20938__$1 = cljs.core.__destructure_map(map__20938);
var m = map__20938__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20938__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20938__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20942_21432 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20943_21433 = null;
var count__20944_21436 = (0);
var i__20945_21439 = (0);
while(true){
if((i__20945_21439 < count__20944_21436)){
var f_21441 = chunk__20943_21433.cljs$core$IIndexed$_nth$arity$2(null,i__20945_21439);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21441], 0));


var G__21443 = seq__20942_21432;
var G__21444 = chunk__20943_21433;
var G__21445 = count__20944_21436;
var G__21446 = (i__20945_21439 + (1));
seq__20942_21432 = G__21443;
chunk__20943_21433 = G__21444;
count__20944_21436 = G__21445;
i__20945_21439 = G__21446;
continue;
} else {
var temp__5804__auto___21447 = cljs.core.seq(seq__20942_21432);
if(temp__5804__auto___21447){
var seq__20942_21449__$1 = temp__5804__auto___21447;
if(cljs.core.chunked_seq_QMARK_(seq__20942_21449__$1)){
var c__5568__auto___21454 = cljs.core.chunk_first(seq__20942_21449__$1);
var G__21455 = cljs.core.chunk_rest(seq__20942_21449__$1);
var G__21456 = c__5568__auto___21454;
var G__21457 = cljs.core.count(c__5568__auto___21454);
var G__21458 = (0);
seq__20942_21432 = G__21455;
chunk__20943_21433 = G__21456;
count__20944_21436 = G__21457;
i__20945_21439 = G__21458;
continue;
} else {
var f_21462 = cljs.core.first(seq__20942_21449__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21462], 0));


var G__21463 = cljs.core.next(seq__20942_21449__$1);
var G__21464 = null;
var G__21465 = (0);
var G__21466 = (0);
seq__20942_21432 = G__21463;
chunk__20943_21433 = G__21464;
count__20944_21436 = G__21465;
i__20945_21439 = G__21466;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21467 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21467], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21467)))?cljs.core.second(arglists_21467):arglists_21467)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20975_21479 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20976_21480 = null;
var count__20977_21481 = (0);
var i__20978_21482 = (0);
while(true){
if((i__20978_21482 < count__20977_21481)){
var vec__21018_21483 = chunk__20976_21480.cljs$core$IIndexed$_nth$arity$2(null,i__20978_21482);
var name_21484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21018_21483,(0),null);
var map__21021_21485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21018_21483,(1),null);
var map__21021_21486__$1 = cljs.core.__destructure_map(map__21021_21485);
var doc_21487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021_21486__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021_21486__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21484], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21488], 0));

if(cljs.core.truth_(doc_21487)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21487], 0));
} else {
}


var G__21489 = seq__20975_21479;
var G__21490 = chunk__20976_21480;
var G__21491 = count__20977_21481;
var G__21492 = (i__20978_21482 + (1));
seq__20975_21479 = G__21489;
chunk__20976_21480 = G__21490;
count__20977_21481 = G__21491;
i__20978_21482 = G__21492;
continue;
} else {
var temp__5804__auto___21493 = cljs.core.seq(seq__20975_21479);
if(temp__5804__auto___21493){
var seq__20975_21498__$1 = temp__5804__auto___21493;
if(cljs.core.chunked_seq_QMARK_(seq__20975_21498__$1)){
var c__5568__auto___21499 = cljs.core.chunk_first(seq__20975_21498__$1);
var G__21500 = cljs.core.chunk_rest(seq__20975_21498__$1);
var G__21501 = c__5568__auto___21499;
var G__21502 = cljs.core.count(c__5568__auto___21499);
var G__21503 = (0);
seq__20975_21479 = G__21500;
chunk__20976_21480 = G__21501;
count__20977_21481 = G__21502;
i__20978_21482 = G__21503;
continue;
} else {
var vec__21024_21504 = cljs.core.first(seq__20975_21498__$1);
var name_21505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21024_21504,(0),null);
var map__21027_21506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21024_21504,(1),null);
var map__21027_21507__$1 = cljs.core.__destructure_map(map__21027_21506);
var doc_21508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027_21507__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027_21507__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21505], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21509], 0));

if(cljs.core.truth_(doc_21508)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21508], 0));
} else {
}


var G__21514 = cljs.core.next(seq__20975_21498__$1);
var G__21515 = null;
var G__21516 = (0);
var G__21517 = (0);
seq__20975_21479 = G__21514;
chunk__20976_21480 = G__21515;
count__20977_21481 = G__21516;
i__20978_21482 = G__21517;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21045 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21046 = null;
var count__21047 = (0);
var i__21048 = (0);
while(true){
if((i__21048 < count__21047)){
var role = chunk__21046.cljs$core$IIndexed$_nth$arity$2(null,i__21048);
var temp__5804__auto___21520__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21520__$1)){
var spec_21521 = temp__5804__auto___21520__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21521)], 0));
} else {
}


var G__21522 = seq__21045;
var G__21523 = chunk__21046;
var G__21524 = count__21047;
var G__21525 = (i__21048 + (1));
seq__21045 = G__21522;
chunk__21046 = G__21523;
count__21047 = G__21524;
i__21048 = G__21525;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21045);
if(temp__5804__auto____$1){
var seq__21045__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21045__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21045__$1);
var G__21526 = cljs.core.chunk_rest(seq__21045__$1);
var G__21527 = c__5568__auto__;
var G__21528 = cljs.core.count(c__5568__auto__);
var G__21529 = (0);
seq__21045 = G__21526;
chunk__21046 = G__21527;
count__21047 = G__21528;
i__21048 = G__21529;
continue;
} else {
var role = cljs.core.first(seq__21045__$1);
var temp__5804__auto___21530__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21530__$2)){
var spec_21531 = temp__5804__auto___21530__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21531)], 0));
} else {
}


var G__21533 = cljs.core.next(seq__21045__$1);
var G__21534 = null;
var G__21535 = (0);
var G__21536 = (0);
seq__21045 = G__21533;
chunk__21046 = G__21534;
count__21047 = G__21535;
i__21048 = G__21536;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21538 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__21539 = cljs.core.ex_cause(t);
via = G__21538;
t = G__21539;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21131 = datafied_throwable;
var map__21131__$1 = cljs.core.__destructure_map(map__21131);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21131__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21131__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21131__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21132 = cljs.core.last(via);
var map__21132__$1 = cljs.core.__destructure_map(map__21132);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21132__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21132__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21132__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21133 = data;
var map__21133__$1 = cljs.core.__destructure_map(map__21133);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21134 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21134__$1 = cljs.core.__destructure_map(map__21134);
var top_data = map__21134__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21134__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21136 = phase;
var G__21136__$1 = (((G__21136 instanceof cljs.core.Keyword))?G__21136.fqn:null);
switch (G__21136__$1) {
case "read-source":
var map__21143 = data;
var map__21143__$1 = cljs.core.__destructure_map(map__21143);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21146 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21146__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21146,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21146);
var G__21146__$2 = (cljs.core.truth_((function (){var fexpr__21150 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21150.cljs$core$IFn$_invoke$arity$1 ? fexpr__21150.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21150.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21146__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21146__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21146__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21146__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21152 = top_data;
var G__21152__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21152,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21152);
var G__21152__$2 = (cljs.core.truth_((function (){var fexpr__21155 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21155.cljs$core$IFn$_invoke$arity$1 ? fexpr__21155.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21155.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21152__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21152__$1);
var G__21152__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21152__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21152__$2);
var G__21152__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21152__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21152__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21152__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21152__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21158 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21158,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21158,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21158,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21158,(3),null);
var G__21161 = top_data;
var G__21161__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21161,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21161);
var G__21161__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21161__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21161__$1);
var G__21161__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21161__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21161__$2);
var G__21161__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21161__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21161__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21161__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21161__$4;
}

break;
case "execution":
var vec__21164 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21126_SHARP_){
var or__5045__auto__ = (p1__21126_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__21171 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21171.cljs$core$IFn$_invoke$arity$1 ? fexpr__21171.cljs$core$IFn$_invoke$arity$1(p1__21126_SHARP_) : fexpr__21171.call(null,p1__21126_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__21178 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21178__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21178,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21178);
var G__21178__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21178__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21178__$1);
var G__21178__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21178__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21178__$2);
var G__21178__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21178__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21178__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21178__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21178__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21136__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21191){
var map__21192 = p__21191;
var map__21192__$1 = cljs.core.__destructure_map(map__21192);
var triage_data = map__21192__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21214 = phase;
var G__21214__$1 = (((G__21214 instanceof cljs.core.Keyword))?G__21214.fqn:null);
switch (G__21214__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21215 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21216 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21217 = loc;
var G__21218 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21224_21591 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21225_21592 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21227_21593 = true;
var _STAR_print_fn_STAR__temp_val__21228_21594 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21227_21593);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21228_21594);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21182_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21182_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21225_21592);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21224_21591);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21215,G__21216,G__21217,G__21218) : format.call(null,G__21215,G__21216,G__21217,G__21218));

break;
case "macroexpansion":
var G__21283 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21284 = cause_type;
var G__21285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21286 = loc;
var G__21287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21283,G__21284,G__21285,G__21286,G__21287) : format.call(null,G__21283,G__21284,G__21285,G__21286,G__21287));

break;
case "compile-syntax-check":
var G__21293 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21295 = cause_type;
var G__21296 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21297 = loc;
var G__21298 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21293,G__21295,G__21296,G__21297,G__21298) : format.call(null,G__21293,G__21295,G__21296,G__21297,G__21298));

break;
case "compilation":
var G__21305 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21306 = cause_type;
var G__21307 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21308 = loc;
var G__21309 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21305,G__21306,G__21307,G__21308,G__21309) : format.call(null,G__21305,G__21306,G__21307,G__21308,G__21309));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21317 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21318 = symbol;
var G__21321 = loc;
var G__21322 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21337_21602 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21338_21603 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21339_21604 = true;
var _STAR_print_fn_STAR__temp_val__21340_21605 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21339_21604);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21340_21605);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21185_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21185_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21338_21603);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21337_21602);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21317,G__21318,G__21321,G__21322) : format.call(null,G__21317,G__21318,G__21321,G__21322));
} else {
var G__21374 = "Execution error%s at %s(%s).\n%s\n";
var G__21375 = cause_type;
var G__21376 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21377 = loc;
var G__21378 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21374,G__21375,G__21376,G__21377,G__21378) : format.call(null,G__21374,G__21375,G__21376,G__21377,G__21378));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21214__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
