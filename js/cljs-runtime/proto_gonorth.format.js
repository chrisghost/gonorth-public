goog.provide('proto_gonorth.format');
proto_gonorth.format.pprint = (function proto_gonorth$format$pprint(offset,m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return ".";
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(((3) * offset)))], null),((cljs.core.map_QMARK_(m))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26722){
var vec__26723 = p__26722;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26723,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26723,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),k," -> ",(function (){var G__26726 = (offset + (1));
var G__26727 = v;
return (proto_gonorth.format.pprint.cljs$core$IFn$_invoke$arity$2 ? proto_gonorth.format.pprint.cljs$core$IFn$_invoke$arity$2(G__26726,G__26727) : proto_gonorth.format.pprint.call(null,G__26726,G__26727));
})()], null);
}),m):cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
proto_gonorth.format.pretty_print = (function proto_gonorth$format$pretty_print(m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5523__auto__ = (function proto_gonorth$format$pretty_print_$_iter__26728(s__26729){
return (new cljs.core.LazySeq(null,(function (){
var s__26729__$1 = s__26729;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26729__$1);
if(temp__5804__auto__){
var s__26729__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26729__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__26729__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__26731 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__26730 = (0);
while(true){
if((i__26730 < size__5522__auto__)){
var vec__26732 = cljs.core._nth(c__5521__auto__,i__26730);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(1),null);
cljs.core.chunk_append(b__26731,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),k," -> ",proto_gonorth.format.pprint((1),v)], null));

var G__26738 = (i__26730 + (1));
i__26730 = G__26738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26731),proto_gonorth$format$pretty_print_$_iter__26728(cljs.core.chunk_rest(s__26729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26731),null);
}
} else {
var vec__26735 = cljs.core.first(s__26729__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26735,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26735,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),k," -> ",proto_gonorth.format.pprint((1),v)], null),proto_gonorth$format$pretty_print_$_iter__26728(cljs.core.rest(s__26729__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(m);
})()], null);
});

//# sourceMappingURL=proto_gonorth.format.js.map
