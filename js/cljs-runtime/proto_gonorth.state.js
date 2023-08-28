goog.provide('proto_gonorth.state');
proto_gonorth.state.initial_game_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"day","day",-274800446),(0),new cljs.core.Keyword(null,"latitude","latitude",394867543),(1000),new cljs.core.Keyword(null,"backpack","backpack",-1122466631),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wood","wood",149241168),(10),new cljs.core.Keyword(null,"food","food",1842183121),(10),new cljs.core.Keyword(null,"planks","planks",-1273477453),(0)], null)], null),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"adventure","adventure",345447446),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"settlement","settlement",-1178759071)], null)], null);
proto_gonorth.state.prices = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"farm","farm",1490097503),(function (level){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wood","wood",149241168),level], null);
}),new cljs.core.Keyword(null,"forester","forester",1643233607),(function (level){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wood","wood",149241168),level], null);
}),new cljs.core.Keyword(null,"sawmill","sawmill",-168857744),(function (level){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wood","wood",149241168),level], null);
}),new cljs.core.Keyword(null,"research","research",1623468570),(function (level){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wood","wood",149241168),((100) * level)], null);
})], null)], null);
proto_gonorth.state.in_outs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"farm","farm",1490097503),(function (level,settlement_stats,workers){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"food","food",1842183121),((workers * (level * new cljs.core.Keyword(null,"fertility","fertility",-508056913).cljs$core$IFn$_invoke$arity$1(settlement_stats))) | (0))], null)], null);
}),new cljs.core.Keyword(null,"forester","forester",1643233607),(function (level,settlement_stats,workers){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wood","wood",149241168),(((workers * level) * new cljs.core.Keyword(null,"woodlands","woodlands",858279556).cljs$core$IFn$_invoke$arity$1(settlement_stats)) | (0))], null)], null);
}),new cljs.core.Keyword(null,"sawmill","sawmill",-168857744),(function (level,_,workers){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wood","wood",149241168),(workers * level)], null),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"planks","planks",-1273477453),(workers * level)], null)], null);
}),new cljs.core.Keyword(null,"research","research",1623468570),(function (_,___$1,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.PersistentArrayMap.EMPTY], null);
})], null)], null);
proto_gonorth.state.price_of_building = (function proto_gonorth$state$price_of_building(building,level){
var fexpr__16730 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(proto_gonorth.state.prices,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),building], null));
return (fexpr__16730.cljs$core$IFn$_invoke$arity$1 ? fexpr__16730.cljs$core$IFn$_invoke$arity$1(level) : fexpr__16730.call(null,level));
});
proto_gonorth.state.in_out_of_building = (function proto_gonorth$state$in_out_of_building(building,level,jobs,settlement_stats){
var G__16732 = level;
var G__16733 = settlement_stats;
var G__16734 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(jobs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [building,new cljs.core.Keyword(null,"affected","affected",1728500803)], null));
var fexpr__16731 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(proto_gonorth.state.in_outs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),building], null));
return (fexpr__16731.cljs$core$IFn$_invoke$arity$3 ? fexpr__16731.cljs$core$IFn$_invoke$arity$3(G__16732,G__16733,G__16734) : fexpr__16731.call(null,G__16732,G__16733,G__16734));
});
proto_gonorth.state.latitude_to_boost = (function proto_gonorth$state$latitude_to_boost(l){
var pred__16735 = cljs.core._LT_;
var expr__16736 = l;
if(cljs.core.truth_((pred__16735.cljs$core$IFn$_invoke$arity$2 ? pred__16735.cljs$core$IFn$_invoke$arity$2((990),expr__16736) : pred__16735.call(null,(990),expr__16736)))){
return (0);
} else {
if(cljs.core.truth_((pred__16735.cljs$core$IFn$_invoke$arity$2 ? pred__16735.cljs$core$IFn$_invoke$arity$2((900),expr__16736) : pred__16735.call(null,(900),expr__16736)))){
return (1);
} else {
return (10);
}
}
});
proto_gonorth.state.next_adventure_screen = (function proto_gonorth$state$next_adventure_screen(game){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"found","found",-584700170),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wood","wood",149241168),new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"woodlands","woodlands",858279556),(proto_gonorth.state.latitude_to_boost(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(game)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() + (1))),new cljs.core.Keyword(null,"fertility","fertility",-508056913),(proto_gonorth.state.latitude_to_boost(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(game)) + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() + (1)))], null),new cljs.core.Keyword(null,"ennemies","ennemies",-1047788458),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"friendlies","friendlies",-639764756),cljs.core.PersistentArrayMap.EMPTY], null);
});
proto_gonorth.state.has_resource = (function proto_gonorth$state$has_resource(st,rs,nb){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"resources","resources",1632806811),rs], null)) >= nb);
});
proto_gonorth.state.has_resources = (function proto_gonorth$state$has_resources(st,rss){
return cljs.core.every_QMARK_((function (p__16738){
var vec__16739 = p__16738;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16739,(1),null);
return proto_gonorth.state.has_resource(st,k,v);
}),rss);
});
proto_gonorth.state.add_resources = (function proto_gonorth$state$add_resources(st,rss){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"resources","resources",1632806811)], null),(function (p1__16742_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16742_SHARP_,rss], 0));
}));
});
proto_gonorth.state.merge_resources = (function proto_gonorth$state$merge_resources(from,to){
return cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,k,(function (p1__16743_SHARP_){
return (p1__16743_SHARP_ + v);
}));
}),to,from);
});
proto_gonorth.state.can_buy = (function proto_gonorth$state$can_buy(st,building,level){
return cljs.core.every_QMARK_((function (p__16744){
var vec__16745 = p__16744;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16745,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16745,(1),null);
return proto_gonorth.state.has_resource(st,k,v);
}),proto_gonorth.state.price_of_building(building,level));
});
proto_gonorth.state.pay = (function proto_gonorth$state$pay(st,price){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"resources","resources",1632806811)], null),(function (rs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__16749){
var vec__16750 = p__16749;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,k,(function (p1__16748_SHARP_){
return (p1__16748_SHARP_ - v);
}));
}),rs,cljs.core.seq(price));
}));
});
proto_gonorth.state.produce = (function proto_gonorth$state$produce(st,in_out){
if(proto_gonorth.state.has_resources(st,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(in_out))){
return proto_gonorth.state.add_resources(proto_gonorth.state.pay(st,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(in_out)),new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(in_out));
} else {
return st;
}
});
proto_gonorth.state.affected_jobs = (function proto_gonorth$state$affected_jobs(st){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"affected","affected",1728500803),cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null)))));
});
proto_gonorth.state.remove_random_worker = (function proto_gonorth$state$remove_random_worker(st){
var vec__16753 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__16756){
var vec__16757 = p__16756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16757,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16757,(1),null);
return (new cljs.core.Keyword(null,"affected","affected",1728500803).cljs$core$IFn$_invoke$arity$1(v) > (0));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null))));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"jobs","jobs",-313607120),k,new cljs.core.Keyword(null,"affected","affected",1728500803)], null),cljs.core.dec);
});
proto_gonorth.state.job_population_matching = (function proto_gonorth$state$job_population_matching(st){
while(true){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"population","population",-1209901867)], null)) < proto_gonorth.state.affected_jobs(st))){
var G__16768 = proto_gonorth.state.remove_random_worker(st);
st = G__16768;
continue;
} else {
return st;
}
break;
}
});
proto_gonorth.state.make_people_eat = (function proto_gonorth$state$make_people_eat(st){
var food_rest = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"food","food",1842183121)], null)) - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"population","population",-1209901867)], null)));
if((food_rest < (0))){
return proto_gonorth.state.job_population_matching(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(st,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"food","food",1842183121)], null),(0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"population","population",-1209901867)], null),(function (p1__16760_SHARP_){
return (p1__16760_SHARP_ + food_rest);
})));
} else {
return cljs.core.assoc_in(st,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"food","food",1842183121)], null),food_rest);
}
});
proto_gonorth.state.consume_explore_resources = (function proto_gonorth$state$consume_explore_resources(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"backpack","backpack",-1122466631),new cljs.core.Keyword(null,"food","food",1842183121)], null),cljs.core.dec);
});
proto_gonorth.state.take_resources_in_backpack = (function proto_gonorth$state$take_resources_in_backpack(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"backpack","backpack",-1122466631)], null),(function (p1__16761_SHARP_){
return proto_gonorth.state.merge_resources(p1__16761_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
}));
});
proto_gonorth.state.next_day = (function proto_gonorth$state$next_day(st){
return (function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"adventure","adventure",345447446))){
var next_screen = proto_gonorth.state.next_adventure_screen(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833)], null)));
return (function (_s){
return cljs.core.assoc_in(_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(_s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"backpack","backpack",-1122466631),new cljs.core.Keyword(null,"food","food",1842183121)], null)) < (0)))?new cljs.core.Keyword(null,"game-over","game-over",-607322695):new cljs.core.Keyword(null,"adventure","adventure",345447446)));
})(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(proto_gonorth.state.consume_explore_resources(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"adventure","adventure",345447446)], null),next_screen),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"latitude","latitude",394867543)], null),cljs.core.dec)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"backpack","backpack",-1122466631)], null),(function (p1__16762_SHARP_){
return proto_gonorth.state.merge_resources(new cljs.core.Keyword(null,"found","found",-584700170).cljs$core$IFn$_invoke$arity$1(next_screen),p1__16762_SHARP_);
})));
} else {
var all_in_outs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16763_SHARP_){
return proto_gonorth.state.in_out_of_building(cljs.core.first(p1__16763_SHARP_),cljs.core.second(p1__16763_SHARP_),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"location","location",1815599388)], null)));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"buildings","buildings",-308691065)], null)));
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Ins : ",cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16764_SHARP_,p2__16765_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16764_SHARP_,p2__16765_SHARP_], 0));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),all_in_outs))], 0));
var ___$1 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["outs : ",cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16766_SHARP_,p2__16767_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16766_SHARP_,p2__16767_SHARP_], 0));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"out","out",-910545517),all_in_outs))], 0));
var with_new_ressources = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return proto_gonorth.state.produce(acc,v);
}),s,all_in_outs);
var food_and_deaths = proto_gonorth.state.make_people_eat(with_new_ressources);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["population : ",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"population","population",-1209901867)], null))], 0));

if((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"population","population",-1209901867)], null)) > (0))))){
return cljs.core.assoc_in(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
return food_and_deaths;
}
}
})(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"day","day",-274800446)], null),cljs.core.inc));
});
proto_gonorth.state.establish_settlement = (function proto_gonorth$state$establish_settlement(st){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"settlement","settlement",-1178759071)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"farm","farm",1490097503),(0),new cljs.core.Keyword(null,"forester","forester",1643233607),(0),new cljs.core.Keyword(null,"sawmill","sawmill",-168857744),(0),new cljs.core.Keyword(null,"research","research",1623468570),(0)], null),new cljs.core.Keyword(null,"resources","resources",1632806811),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"backpack","backpack",-1122466631)], null)),new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"adventure","adventure",345447446),new cljs.core.Keyword(null,"location","location",1815599388)], null)),new cljs.core.Keyword(null,"population","population",-1209901867),(3),new cljs.core.Keyword(null,"jobs","jobs",-313607120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sawmill","sawmill",-168857744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"available","available",-1470697127),(function (settlement){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(settlement,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"sawmill","sawmill",-168857744)], null)) > (0));
}),new cljs.core.Keyword(null,"affected","affected",1728500803),(0)], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"adventure","adventure",345447446)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"backpack","backpack",-1122466631)], null),cljs.core.PersistentArrayMap.EMPTY);
});
proto_gonorth.state.buy_building = (function proto_gonorth$state$buy_building(st,building,level){
if(proto_gonorth.state.can_buy(st,building,level)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(proto_gonorth.state.pay(st,proto_gonorth.state.price_of_building(building,level)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"buildings","buildings",-308691065),building], null),cljs.core.inc);
} else {
return st;
}
});
proto_gonorth.state.available_workers = (function proto_gonorth$state$available_workers(st){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"population","population",-1209901867)], null)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"affected","affected",1728500803),cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null))))));
});
proto_gonorth.state.add_worker = (function proto_gonorth$state$add_worker(st,job){
if((proto_gonorth.state.available_workers(st) > (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"jobs","jobs",-313607120),job,new cljs.core.Keyword(null,"affected","affected",1728500803)], null),cljs.core.inc);
} else {
return st;
}
});

//# sourceMappingURL=proto_gonorth.state.js.map
