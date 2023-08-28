goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__19278__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19282__i = 0, G__19282__a = new Array(arguments.length -  0);
while (G__19282__i < G__19282__a.length) {G__19282__a[G__19282__i] = arguments[G__19282__i + 0]; ++G__19282__i;}
  args = new cljs.core.IndexedSeq(G__19282__a,0,null);
} 
return G__19278__delegate.call(this,args);};
G__19278.cljs$lang$maxFixedArity = 0;
G__19278.cljs$lang$applyTo = (function (arglist__19284){
var args = cljs.core.seq(arglist__19284);
return G__19278__delegate(args);
});
G__19278.cljs$core$IFn$_invoke$arity$variadic = G__19278__delegate;
return G__19278;
})()
);

(o.error = (function() { 
var G__19285__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19288__i = 0, G__19288__a = new Array(arguments.length -  0);
while (G__19288__i < G__19288__a.length) {G__19288__a[G__19288__i] = arguments[G__19288__i + 0]; ++G__19288__i;}
  args = new cljs.core.IndexedSeq(G__19288__a,0,null);
} 
return G__19285__delegate.call(this,args);};
G__19285.cljs$lang$maxFixedArity = 0;
G__19285.cljs$lang$applyTo = (function (arglist__19289){
var args = cljs.core.seq(arglist__19289);
return G__19285__delegate(args);
});
G__19285.cljs$core$IFn$_invoke$arity$variadic = G__19285__delegate;
return G__19285;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
