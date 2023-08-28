goog.provide('proto_gonorth.core');
if((typeof proto_gonorth !== 'undefined') && (typeof proto_gonorth.core !== 'undefined') && (typeof proto_gonorth.core.state !== 'undefined')){
} else {
proto_gonorth.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(proto_gonorth.state.initial_game_state);
}
proto_gonorth.core.go_further = (function proto_gonorth$core$go_further(){
return cljs.core.reset_BANG_(proto_gonorth.core.state,proto_gonorth.state.next_day(cljs.core.deref(proto_gonorth.core.state)));
});
proto_gonorth.core.establish_settlement = (function proto_gonorth$core$establish_settlement(){
return cljs.core.reset_BANG_(proto_gonorth.core.state,proto_gonorth.state.establish_settlement(cljs.core.deref(proto_gonorth.core.state)));
});
proto_gonorth.core.go_on_adventure = (function proto_gonorth$core$go_on_adventure(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(proto_gonorth.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"adventure","adventure",345447446));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(proto_gonorth.core.state,proto_gonorth.state.take_resources_in_backpack);

return proto_gonorth.core.go_further();
});
proto_gonorth.core.next_day = (function proto_gonorth$core$next_day(){
return cljs.core.reset_BANG_(proto_gonorth.core.state,proto_gonorth.state.next_day(cljs.core.deref(proto_gonorth.core.state)));
});
proto_gonorth.core.buy_building = (function proto_gonorth$core$buy_building(k,l){
return cljs.core.reset_BANG_(proto_gonorth.core.state,proto_gonorth.state.buy_building(cljs.core.deref(proto_gonorth.core.state),k,l));
});
proto_gonorth.core.add_worker = (function proto_gonorth$core$add_worker(k){
return cljs.core.reset_BANG_(proto_gonorth.core.state,proto_gonorth.state.add_worker(cljs.core.deref(proto_gonorth.core.state),k));
});
proto_gonorth.core.settlement_tab_home = (function proto_gonorth$core$settlement_tab_home(){
return cljs.core.reset_BANG_(proto_gonorth.core.state,cljs.core.assoc_in(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"tab","tab",-559583621)], null),new cljs.core.Keyword(null,"settlement","settlement",-1178759071)));
});
proto_gonorth.core.settlement_tab_research = (function proto_gonorth$core$settlement_tab_research(){
return cljs.core.reset_BANG_(proto_gonorth.core.state,cljs.core.assoc_in(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"tab","tab",-559583621)], null),new cljs.core.Keyword(null,"research","research",1623468570)));
});
proto_gonorth.core.show_resources_short = (function proto_gonorth$core$show_resources_short(rs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20501){
var vec__20502 = p__20501;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"icon-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["icon ",cljs.core.name(k)].join('')], null)], null),v], null);
}),rs)], null);
});
proto_gonorth.core.show_stats = (function proto_gonorth$core$show_stats(k,v){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(k)," : ",v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["stats-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null));
});
proto_gonorth.core.show_resources = (function proto_gonorth$core$show_resources(k,v){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"icon-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["icon ",cljs.core.name(k)].join('')], null)], null),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["found-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null));
});
proto_gonorth.core.show_building = (function proto_gonorth$core$show_building(k,level,settlement_stats,jobs){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(k)," : ",level], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"icon consume"], null)], null),proto_gonorth.core.show_resources_short(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1((function (){var G__20506 = level;
var G__20507 = settlement_stats;
var G__20508 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jobs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"affected","affected",1728500803)], null));
var fexpr__20505 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(proto_gonorth.state.in_outs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),k], null));
return (fexpr__20505.cljs$core$IFn$_invoke$arity$3 ? fexpr__20505.cljs$core$IFn$_invoke$arity$3(G__20506,G__20507,G__20508) : fexpr__20505.call(null,G__20506,G__20507,G__20508));
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"|"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"icon produce"], null)], null),proto_gonorth.core.show_resources_short(new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1((function (){var G__20510 = level;
var G__20511 = settlement_stats;
var G__20512 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jobs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"affected","affected",1728500803)], null));
var fexpr__20509 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(proto_gonorth.state.in_outs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),k], null));
return (fexpr__20509.cljs$core$IFn$_invoke$arity$3 ? fexpr__20509.cljs$core$IFn$_invoke$arity$3(G__20510,G__20511,G__20512) : fexpr__20509.call(null,G__20510,G__20511,G__20512));
})()))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"button buy-building",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return proto_gonorth.core.buy_building(k,(level + (1)));
})], null),"+1",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),proto_gonorth.core.show_resources_short(proto_gonorth.state.price_of_building(k,(level + (1))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["building-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null));
});
proto_gonorth.core.show_job = (function proto_gonorth$core$show_job(k,job){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(k)," : ",new cljs.core.Keyword(null,"affected","affected",1728500803).cljs$core$IFn$_invoke$arity$1(job)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return proto_gonorth.core.add_worker(k);
})], null),"+1"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["job-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null));
});
proto_gonorth.core.adventure_screen = (function proto_gonorth$core$adventure_screen(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Going on a an adventure"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return proto_gonorth.core.go_further();
})], null),"Go further"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return proto_gonorth.core.establish_settlement();
})], null),"Establish settlement"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Current location"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function proto_gonorth$core$adventure_screen_$_iter__20513(s__20514){
return (new cljs.core.LazySeq(null,(function (){
var s__20514__$1 = s__20514;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20514__$1);
if(temp__5804__auto__){
var s__20514__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20514__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20514__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20516 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20515 = (0);
while(true){
if((i__20515 < size__5522__auto__)){
var vec__20517 = cljs.core._nth(c__5521__auto__,i__20515);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20517,(1),null);
cljs.core.chunk_append(b__20516,proto_gonorth.core.show_stats(k,v));

var G__20593 = (i__20515 + (1));
i__20515 = G__20593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20516),proto_gonorth$core$adventure_screen_$_iter__20513(cljs.core.chunk_rest(s__20514__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20516),null);
}
} else {
var vec__20520 = cljs.core.first(s__20514__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20520,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20520,(1),null);
return cljs.core.cons(proto_gonorth.core.show_stats(k,v),proto_gonorth$core$adventure_screen_$_iter__20513(cljs.core.rest(s__20514__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"adventure","adventure",345447446),new cljs.core.Keyword(null,"location","location",1815599388)], null)));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Backpack :"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function proto_gonorth$core$adventure_screen_$_iter__20523(s__20524){
return (new cljs.core.LazySeq(null,(function (){
var s__20524__$1 = s__20524;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20524__$1);
if(temp__5804__auto__){
var s__20524__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20524__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20524__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20526 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20525 = (0);
while(true){
if((i__20525 < size__5522__auto__)){
var vec__20527 = cljs.core._nth(c__5521__auto__,i__20525);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20527,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20527,(1),null);
cljs.core.chunk_append(b__20526,proto_gonorth.core.show_resources(k,v));

var G__20594 = (i__20525 + (1));
i__20525 = G__20594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20526),proto_gonorth$core$adventure_screen_$_iter__20523(cljs.core.chunk_rest(s__20524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20526),null);
}
} else {
var vec__20530 = cljs.core.first(s__20524__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20530,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20530,(1),null);
return cljs.core.cons(proto_gonorth.core.show_resources(k,v),proto_gonorth$core$adventure_screen_$_iter__20523(cljs.core.rest(s__20524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"backpack","backpack",-1122466631)], null)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"You found :"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function proto_gonorth$core$adventure_screen_$_iter__20533(s__20534){
return (new cljs.core.LazySeq(null,(function (){
var s__20534__$1 = s__20534;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20534__$1);
if(temp__5804__auto__){
var s__20534__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20534__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20534__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20536 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20535 = (0);
while(true){
if((i__20535 < size__5522__auto__)){
var vec__20537 = cljs.core._nth(c__5521__auto__,i__20535);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20537,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20537,(1),null);
cljs.core.chunk_append(b__20536,proto_gonorth.core.show_resources(k,v));

var G__20595 = (i__20535 + (1));
i__20535 = G__20595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20536),proto_gonorth$core$adventure_screen_$_iter__20533(cljs.core.chunk_rest(s__20534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20536),null);
}
} else {
var vec__20540 = cljs.core.first(s__20534__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20540,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20540,(1),null);
return cljs.core.cons(proto_gonorth.core.show_resources(k,v),proto_gonorth$core$adventure_screen_$_iter__20533(cljs.core.rest(s__20534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"adventure","adventure",345447446),new cljs.core.Keyword(null,"found","found",-584700170)], null)));
})()], null)], null);
});
proto_gonorth.core.settlement_screen = (function proto_gonorth$core$settlement_screen(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Settlement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return proto_gonorth.core.next_day();
})], null),"Next day"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return proto_gonorth.core.go_on_adventure();
})], null),"Go on an adventure"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return proto_gonorth.core.settlement_tab_home();
})], null),"Settlement"], null),(((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"research","research",1623468570)], null)) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return proto_gonorth.core.settlement_tab_research();
})], null),"Research"], null):null)], null),(function (){var pred__20543 = cljs.core._EQ_;
var expr__20544 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"tab","tab",-559583621)], null));
if(cljs.core.truth_((pred__20543.cljs$core$IFn$_invoke$arity$2 ? pred__20543.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"research","research",1623468570),expr__20544) : pred__20543.call(null,new cljs.core.Keyword(null,"research","research",1623468570),expr__20544)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"research"], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["day : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"day","day",-274800446)], null)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"area stats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function proto_gonorth$core$settlement_screen_$_iter__20546(s__20547){
return (new cljs.core.LazySeq(null,(function (){
var s__20547__$1 = s__20547;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20547__$1);
if(temp__5804__auto__){
var s__20547__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20547__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20547__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20549 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20548 = (0);
while(true){
if((i__20548 < size__5522__auto__)){
var vec__20550 = cljs.core._nth(c__5521__auto__,i__20548);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20550,(1),null);
cljs.core.chunk_append(b__20549,proto_gonorth.core.show_stats(k,v));

var G__20596 = (i__20548 + (1));
i__20548 = G__20596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20549),proto_gonorth$core$settlement_screen_$_iter__20546(cljs.core.chunk_rest(s__20547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20549),null);
}
} else {
var vec__20553 = cljs.core.first(s__20547__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20553,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20553,(1),null);
return cljs.core.cons(proto_gonorth.core.show_stats(k,v),proto_gonorth$core$settlement_screen_$_iter__20546(cljs.core.rest(s__20547__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"location","location",1815599388)], null)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Population : ",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"population","population",-1209901867)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Available workers : ",proto_gonorth.state.available_workers(cljs.core.deref(proto_gonorth.core.state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"resources"], null),(function (){var iter__5523__auto__ = (function proto_gonorth$core$settlement_screen_$_iter__20556(s__20557){
return (new cljs.core.LazySeq(null,(function (){
var s__20557__$1 = s__20557;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20557__$1);
if(temp__5804__auto__){
var s__20557__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20557__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20557__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20559 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20558 = (0);
while(true){
if((i__20558 < size__5522__auto__)){
var vec__20560 = cljs.core._nth(c__5521__auto__,i__20558);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20560,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20560,(1),null);
cljs.core.chunk_append(b__20559,proto_gonorth.core.show_resources(k,v));

var G__20597 = (i__20558 + (1));
i__20558 = G__20597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20559),proto_gonorth$core$settlement_screen_$_iter__20556(cljs.core.chunk_rest(s__20557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20559),null);
}
} else {
var vec__20563 = cljs.core.first(s__20557__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20563,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20563,(1),null);
return cljs.core.cons(proto_gonorth.core.show_resources(k,v),proto_gonorth$core$settlement_screen_$_iter__20556(cljs.core.rest(s__20557__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"buildings"], null),(function (){var locstats = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"location","location",1815599388)], null));
var jobs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null));
var iter__5523__auto__ = (function proto_gonorth$core$settlement_screen_$_iter__20566(s__20567){
return (new cljs.core.LazySeq(null,(function (){
var s__20567__$1 = s__20567;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20567__$1);
if(temp__5804__auto__){
var s__20567__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20567__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20567__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20569 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20568 = (0);
while(true){
if((i__20568 < size__5522__auto__)){
var vec__20570 = cljs.core._nth(c__5521__auto__,i__20568);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20570,(1),null);
cljs.core.chunk_append(b__20569,proto_gonorth.core.show_building(k,v,locstats,jobs));

var G__20598 = (i__20568 + (1));
i__20568 = G__20598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20569),proto_gonorth$core$settlement_screen_$_iter__20566(cljs.core.chunk_rest(s__20567__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20569),null);
}
} else {
var vec__20573 = cljs.core.first(s__20567__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20573,(1),null);
return cljs.core.cons(proto_gonorth.core.show_building(k,v,locstats,jobs),proto_gonorth$core$settlement_screen_$_iter__20566(cljs.core.rest(s__20567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"buildings","buildings",-308691065)], null)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"jobs"], null),(function (){var iter__5523__auto__ = (function proto_gonorth$core$settlement_screen_$_iter__20576(s__20577){
return (new cljs.core.LazySeq(null,(function (){
var s__20577__$1 = s__20577;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20577__$1);
if(temp__5804__auto__){
var s__20577__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20577__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20577__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20579 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20578 = (0);
while(true){
if((i__20578 < size__5522__auto__)){
var vec__20580 = cljs.core._nth(c__5521__auto__,i__20578);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20580,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20580,(1),null);
cljs.core.chunk_append(b__20579,proto_gonorth.core.show_job(k,v));

var G__20599 = (i__20578 + (1));
i__20578 = G__20599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20579),proto_gonorth$core$settlement_screen_$_iter__20576(cljs.core.chunk_rest(s__20577__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20579),null);
}
} else {
var vec__20583 = cljs.core.first(s__20577__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20583,(1),null);
return cljs.core.cons(proto_gonorth.core.show_job(k,v),proto_gonorth$core$settlement_screen_$_iter__20576(cljs.core.rest(s__20577__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null)));
})()], null)], null);
}
})()], null);
});
proto_gonorth.core.game_over_screen = (function proto_gonorth$core$game_over_screen(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"GAME OVER"], null)], null);
});
proto_gonorth.core.state_debug = (function proto_gonorth$core$state_debug(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),"State"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20586_20600 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20587_20601 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20588_20602 = true;
var _STAR_print_fn_STAR__temp_val__20589_20603 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20588_20602);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20589_20603);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(proto_gonorth.core.state));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20587_20601);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20586_20600);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})()], null)], null);
});
proto_gonorth.core.home_page = (function proto_gonorth$core$home_page(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"GoNorth proto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"current latitude ",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"latitude","latitude",394867543)], null))], null),(function (){var pred__20590 = cljs.core._EQ_;
var expr__20591 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(proto_gonorth.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(cljs.core.truth_((pred__20590.cljs$core$IFn$_invoke$arity$2 ? pred__20590.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adventure","adventure",345447446),expr__20591) : pred__20590.call(null,new cljs.core.Keyword(null,"adventure","adventure",345447446),expr__20591)))){
return proto_gonorth.core.adventure_screen();
} else {
if(cljs.core.truth_((pred__20590.cljs$core$IFn$_invoke$arity$2 ? pred__20590.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settlement","settlement",-1178759071),expr__20591) : pred__20590.call(null,new cljs.core.Keyword(null,"settlement","settlement",-1178759071),expr__20591)))){
return proto_gonorth.core.settlement_screen();
} else {
if(cljs.core.truth_((pred__20590.cljs$core$IFn$_invoke$arity$2 ? pred__20590.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game-over","game-over",-607322695),expr__20591) : pred__20590.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),expr__20591)))){
return proto_gonorth.core.game_over_screen();
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"You should not see this"], null);
}
}
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),proto_gonorth.core.state_debug()], null);
});
proto_gonorth.core.mount_root = (function proto_gonorth$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_gonorth.core.home_page], null),document.getElementById("app"));
});
proto_gonorth.core.init_BANG_ = (function proto_gonorth$core$init_BANG_(){
return proto_gonorth.core.mount_root();
});
goog.exportSymbol('proto_gonorth.core.init_BANG_', proto_gonorth.core.init_BANG_);

//# sourceMappingURL=proto_gonorth.core.js.map
