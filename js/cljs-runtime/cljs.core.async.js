goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16568 = (function (f,blockable,meta16569){
this.f = f;
this.blockable = blockable;
this.meta16569 = meta16569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16570,meta16569__$1){
var self__ = this;
var _16570__$1 = this;
return (new cljs.core.async.t_cljs$core$async16568(self__.f,self__.blockable,meta16569__$1));
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16570){
var self__ = this;
var _16570__$1 = this;
return self__.meta16569;
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16569","meta16569",2109483950,null)], null);
}));

(cljs.core.async.t_cljs$core$async16568.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16568");

(cljs.core.async.t_cljs$core$async16568.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16568");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16568.
 */
cljs.core.async.__GT_t_cljs$core$async16568 = (function cljs$core$async$__GT_t_cljs$core$async16568(f,blockable,meta16569){
return (new cljs.core.async.t_cljs$core$async16568(f,blockable,meta16569));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16566 = arguments.length;
switch (G__16566) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async16568(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16600 = arguments.length;
switch (G__16600) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16608 = arguments.length;
switch (G__16608) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16614 = arguments.length;
switch (G__16614) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19557 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19557) : fn1.call(null,val_19557));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19557) : fn1.call(null,val_19557));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16620 = arguments.length;
switch (G__16620) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19559 = n;
var x_19560 = (0);
while(true){
if((x_19560 < n__5636__auto___19559)){
(a[x_19560] = x_19560);

var G__19561 = (x_19560 + (1));
x_19560 = G__19561;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16629 = (function (flag,meta16630){
this.flag = flag;
this.meta16630 = meta16630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16631,meta16630__$1){
var self__ = this;
var _16631__$1 = this;
return (new cljs.core.async.t_cljs$core$async16629(self__.flag,meta16630__$1));
}));

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16631){
var self__ = this;
var _16631__$1 = this;
return self__.meta16630;
}));

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16630","meta16630",2133149366,null)], null);
}));

(cljs.core.async.t_cljs$core$async16629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16629");

(cljs.core.async.t_cljs$core$async16629.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16629.
 */
cljs.core.async.__GT_t_cljs$core$async16629 = (function cljs$core$async$__GT_t_cljs$core$async16629(flag,meta16630){
return (new cljs.core.async.t_cljs$core$async16629(flag,meta16630));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async16629(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16636 = (function (flag,cb,meta16637){
this.flag = flag;
this.cb = cb;
this.meta16637 = meta16637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16638,meta16637__$1){
var self__ = this;
var _16638__$1 = this;
return (new cljs.core.async.t_cljs$core$async16636(self__.flag,self__.cb,meta16637__$1));
}));

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16638){
var self__ = this;
var _16638__$1 = this;
return self__.meta16637;
}));

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16637","meta16637",-338281216,null)], null);
}));

(cljs.core.async.t_cljs$core$async16636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16636");

(cljs.core.async.t_cljs$core$async16636.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16636.
 */
cljs.core.async.__GT_t_cljs$core$async16636 = (function cljs$core$async$__GT_t_cljs$core$async16636(flag,cb,meta16637){
return (new cljs.core.async.t_cljs$core$async16636(flag,cb,meta16637));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async16636(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16641_SHARP_){
var G__16649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16641_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16649) : fret.call(null,G__16649));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16642_SHARP_){
var G__16650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16642_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16650) : fret.call(null,G__16650));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19562 = (i + (1));
i = G__19562;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19563 = arguments.length;
var i__5770__auto___19564 = (0);
while(true){
if((i__5770__auto___19564 < len__5769__auto___19563)){
args__5775__auto__.push((arguments[i__5770__auto___19564]));

var G__19565 = (i__5770__auto___19564 + (1));
i__5770__auto___19564 = G__19565;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16670){
var map__16671 = p__16670;
var map__16671__$1 = cljs.core.__destructure_map(map__16671);
var opts = map__16671__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16665){
var G__16666 = cljs.core.first(seq16665);
var seq16665__$1 = cljs.core.next(seq16665);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16666,seq16665__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16687 = arguments.length;
switch (G__16687) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16416__auto___19572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_16718){
var state_val_16719 = (state_16718[(1)]);
if((state_val_16719 === (7))){
var inst_16713 = (state_16718[(2)]);
var state_16718__$1 = state_16718;
var statearr_16724_19573 = state_16718__$1;
(statearr_16724_19573[(2)] = inst_16713);

(statearr_16724_19573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (1))){
var state_16718__$1 = state_16718;
var statearr_16725_19574 = state_16718__$1;
(statearr_16725_19574[(2)] = null);

(statearr_16725_19574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (4))){
var inst_16696 = (state_16718[(7)]);
var inst_16696__$1 = (state_16718[(2)]);
var inst_16697 = (inst_16696__$1 == null);
var state_16718__$1 = (function (){var statearr_16732 = state_16718;
(statearr_16732[(7)] = inst_16696__$1);

return statearr_16732;
})();
if(cljs.core.truth_(inst_16697)){
var statearr_16733_19575 = state_16718__$1;
(statearr_16733_19575[(1)] = (5));

} else {
var statearr_16734_19576 = state_16718__$1;
(statearr_16734_19576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (13))){
var state_16718__$1 = state_16718;
var statearr_16735_19577 = state_16718__$1;
(statearr_16735_19577[(2)] = null);

(statearr_16735_19577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (6))){
var inst_16696 = (state_16718[(7)]);
var state_16718__$1 = state_16718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16718__$1,(11),to,inst_16696);
} else {
if((state_val_16719 === (3))){
var inst_16715 = (state_16718[(2)]);
var state_16718__$1 = state_16718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16718__$1,inst_16715);
} else {
if((state_val_16719 === (12))){
var state_16718__$1 = state_16718;
var statearr_16764_19583 = state_16718__$1;
(statearr_16764_19583[(2)] = null);

(statearr_16764_19583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (2))){
var state_16718__$1 = state_16718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16718__$1,(4),from);
} else {
if((state_val_16719 === (11))){
var inst_16706 = (state_16718[(2)]);
var state_16718__$1 = state_16718;
if(cljs.core.truth_(inst_16706)){
var statearr_16770_19586 = state_16718__$1;
(statearr_16770_19586[(1)] = (12));

} else {
var statearr_16771_19587 = state_16718__$1;
(statearr_16771_19587[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (9))){
var state_16718__$1 = state_16718;
var statearr_16772_19590 = state_16718__$1;
(statearr_16772_19590[(2)] = null);

(statearr_16772_19590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (5))){
var state_16718__$1 = state_16718;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16773_19591 = state_16718__$1;
(statearr_16773_19591[(1)] = (8));

} else {
var statearr_16774_19592 = state_16718__$1;
(statearr_16774_19592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (14))){
var inst_16711 = (state_16718[(2)]);
var state_16718__$1 = state_16718;
var statearr_16775_19593 = state_16718__$1;
(statearr_16775_19593[(2)] = inst_16711);

(statearr_16775_19593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (10))){
var inst_16703 = (state_16718[(2)]);
var state_16718__$1 = state_16718;
var statearr_16781_19594 = state_16718__$1;
(statearr_16781_19594[(2)] = inst_16703);

(statearr_16781_19594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (8))){
var inst_16700 = cljs.core.async.close_BANG_(to);
var state_16718__$1 = state_16718;
var statearr_16783_19595 = state_16718__$1;
(statearr_16783_19595[(2)] = inst_16700);

(statearr_16783_19595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_16788 = [null,null,null,null,null,null,null,null];
(statearr_16788[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_16788[(1)] = (1));

return statearr_16788;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_16718){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_16718);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e16789){var ex__16185__auto__ = e16789;
var statearr_16790_19596 = state_16718;
(statearr_16790_19596[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_16718[(4)]))){
var statearr_16791_19597 = state_16718;
(statearr_16791_19597[(1)] = cljs.core.first((state_16718[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19598 = state_16718;
state_16718 = G__19598;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_16718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_16718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_16794 = f__16417__auto__();
(statearr_16794[(6)] = c__16416__auto___19572);

return statearr_16794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__16799){
var vec__16801 = p__16799;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16801,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16801,(1),null);
var job = vec__16801;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16416__auto___19601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_16808){
var state_val_16809 = (state_16808[(1)]);
if((state_val_16809 === (1))){
var state_16808__$1 = state_16808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16808__$1,(2),res,v);
} else {
if((state_val_16809 === (2))){
var inst_16805 = (state_16808[(2)]);
var inst_16806 = cljs.core.async.close_BANG_(res);
var state_16808__$1 = (function (){var statearr_16821 = state_16808;
(statearr_16821[(7)] = inst_16805);

return statearr_16821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16808__$1,inst_16806);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0 = (function (){
var statearr_16822 = [null,null,null,null,null,null,null,null];
(statearr_16822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__);

(statearr_16822[(1)] = (1));

return statearr_16822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1 = (function (state_16808){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_16808);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e16823){var ex__16185__auto__ = e16823;
var statearr_16824_19605 = state_16808;
(statearr_16824_19605[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_16808[(4)]))){
var statearr_16825_19606 = state_16808;
(statearr_16825_19606[(1)] = cljs.core.first((state_16808[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19608 = state_16808;
state_16808 = G__19608;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__ = function(state_16808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1.call(this,state_16808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_16829 = f__16417__auto__();
(statearr_16829[(6)] = c__16416__auto___19601);

return statearr_16829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16832){
var vec__16833 = p__16832;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16833,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16833,(1),null);
var job = vec__16833;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19610 = n;
var __19611 = (0);
while(true){
if((__19611 < n__5636__auto___19610)){
var G__16839_19612 = type;
var G__16839_19613__$1 = (((G__16839_19612 instanceof cljs.core.Keyword))?G__16839_19612.fqn:null);
switch (G__16839_19613__$1) {
case "compute":
var c__16416__auto___19615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19611,c__16416__auto___19615,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async){
return (function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = ((function (__19611,c__16416__auto___19615,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async){
return (function (state_16853){
var state_val_16854 = (state_16853[(1)]);
if((state_val_16854 === (1))){
var state_16853__$1 = state_16853;
var statearr_16860_19617 = state_16853__$1;
(statearr_16860_19617[(2)] = null);

(statearr_16860_19617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16854 === (2))){
var state_16853__$1 = state_16853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16853__$1,(4),jobs);
} else {
if((state_val_16854 === (3))){
var inst_16851 = (state_16853[(2)]);
var state_16853__$1 = state_16853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16853__$1,inst_16851);
} else {
if((state_val_16854 === (4))){
var inst_16843 = (state_16853[(2)]);
var inst_16844 = process__$1(inst_16843);
var state_16853__$1 = state_16853;
if(cljs.core.truth_(inst_16844)){
var statearr_16890_19621 = state_16853__$1;
(statearr_16890_19621[(1)] = (5));

} else {
var statearr_16891_19622 = state_16853__$1;
(statearr_16891_19622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16854 === (5))){
var state_16853__$1 = state_16853;
var statearr_16896_19623 = state_16853__$1;
(statearr_16896_19623[(2)] = null);

(statearr_16896_19623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16854 === (6))){
var state_16853__$1 = state_16853;
var statearr_16902_19624 = state_16853__$1;
(statearr_16902_19624[(2)] = null);

(statearr_16902_19624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16854 === (7))){
var inst_16849 = (state_16853[(2)]);
var state_16853__$1 = state_16853;
var statearr_16904_19626 = state_16853__$1;
(statearr_16904_19626[(2)] = inst_16849);

(statearr_16904_19626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19611,c__16416__auto___19615,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async))
;
return ((function (__19611,switch__16181__auto__,c__16416__auto___19615,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0 = (function (){
var statearr_16913 = [null,null,null,null,null,null,null];
(statearr_16913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__);

(statearr_16913[(1)] = (1));

return statearr_16913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1 = (function (state_16853){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_16853);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e16926){var ex__16185__auto__ = e16926;
var statearr_16928_19627 = state_16853;
(statearr_16928_19627[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_16853[(4)]))){
var statearr_16929_19628 = state_16853;
(statearr_16929_19628[(1)] = cljs.core.first((state_16853[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19629 = state_16853;
state_16853 = G__19629;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__ = function(state_16853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1.call(this,state_16853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__;
})()
;})(__19611,switch__16181__auto__,c__16416__auto___19615,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async))
})();
var state__16418__auto__ = (function (){var statearr_16936 = f__16417__auto__();
(statearr_16936[(6)] = c__16416__auto___19615);

return statearr_16936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
});})(__19611,c__16416__auto___19615,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async))
);


break;
case "async":
var c__16416__auto___19632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19611,c__16416__auto___19632,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async){
return (function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = ((function (__19611,c__16416__auto___19632,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async){
return (function (state_16957){
var state_val_16958 = (state_16957[(1)]);
if((state_val_16958 === (1))){
var state_16957__$1 = state_16957;
var statearr_16964_19634 = state_16957__$1;
(statearr_16964_19634[(2)] = null);

(statearr_16964_19634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16958 === (2))){
var state_16957__$1 = state_16957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16957__$1,(4),jobs);
} else {
if((state_val_16958 === (3))){
var inst_16953 = (state_16957[(2)]);
var state_16957__$1 = state_16957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16957__$1,inst_16953);
} else {
if((state_val_16958 === (4))){
var inst_16942 = (state_16957[(2)]);
var inst_16944 = async(inst_16942);
var state_16957__$1 = state_16957;
if(cljs.core.truth_(inst_16944)){
var statearr_16965_19639 = state_16957__$1;
(statearr_16965_19639[(1)] = (5));

} else {
var statearr_16966_19640 = state_16957__$1;
(statearr_16966_19640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16958 === (5))){
var state_16957__$1 = state_16957;
var statearr_16967_19641 = state_16957__$1;
(statearr_16967_19641[(2)] = null);

(statearr_16967_19641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16958 === (6))){
var state_16957__$1 = state_16957;
var statearr_16975_19642 = state_16957__$1;
(statearr_16975_19642[(2)] = null);

(statearr_16975_19642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16958 === (7))){
var inst_16951 = (state_16957[(2)]);
var state_16957__$1 = state_16957;
var statearr_16976_19643 = state_16957__$1;
(statearr_16976_19643[(2)] = inst_16951);

(statearr_16976_19643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19611,c__16416__auto___19632,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async))
;
return ((function (__19611,switch__16181__auto__,c__16416__auto___19632,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0 = (function (){
var statearr_16982 = [null,null,null,null,null,null,null];
(statearr_16982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__);

(statearr_16982[(1)] = (1));

return statearr_16982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1 = (function (state_16957){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_16957);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e16985){var ex__16185__auto__ = e16985;
var statearr_16986_19647 = state_16957;
(statearr_16986_19647[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_16957[(4)]))){
var statearr_16993_19648 = state_16957;
(statearr_16993_19648[(1)] = cljs.core.first((state_16957[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19649 = state_16957;
state_16957 = G__19649;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__ = function(state_16957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1.call(this,state_16957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__;
})()
;})(__19611,switch__16181__auto__,c__16416__auto___19632,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async))
})();
var state__16418__auto__ = (function (){var statearr_16998 = f__16417__auto__();
(statearr_16998[(6)] = c__16416__auto___19632);

return statearr_16998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
});})(__19611,c__16416__auto___19632,G__16839_19612,G__16839_19613__$1,n__5636__auto___19610,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16839_19613__$1)].join('')));

}

var G__19651 = (__19611 + (1));
__19611 = G__19651;
continue;
} else {
}
break;
}

var c__16416__auto___19652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_17047){
var state_val_17048 = (state_17047[(1)]);
if((state_val_17048 === (7))){
var inst_17043 = (state_17047[(2)]);
var state_17047__$1 = state_17047;
var statearr_17053_19657 = state_17047__$1;
(statearr_17053_19657[(2)] = inst_17043);

(statearr_17053_19657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17048 === (1))){
var state_17047__$1 = state_17047;
var statearr_17054_19658 = state_17047__$1;
(statearr_17054_19658[(2)] = null);

(statearr_17054_19658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17048 === (4))){
var inst_17005 = (state_17047[(7)]);
var inst_17005__$1 = (state_17047[(2)]);
var inst_17006 = (inst_17005__$1 == null);
var state_17047__$1 = (function (){var statearr_17060 = state_17047;
(statearr_17060[(7)] = inst_17005__$1);

return statearr_17060;
})();
if(cljs.core.truth_(inst_17006)){
var statearr_17061_19660 = state_17047__$1;
(statearr_17061_19660[(1)] = (5));

} else {
var statearr_17063_19661 = state_17047__$1;
(statearr_17063_19661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17048 === (6))){
var inst_17005 = (state_17047[(7)]);
var inst_17013 = (state_17047[(8)]);
var inst_17013__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17035 = [inst_17005,inst_17013__$1];
var inst_17036 = (new cljs.core.PersistentVector(null,2,(5),inst_17033,inst_17035,null));
var state_17047__$1 = (function (){var statearr_17068 = state_17047;
(statearr_17068[(8)] = inst_17013__$1);

return statearr_17068;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17047__$1,(8),jobs,inst_17036);
} else {
if((state_val_17048 === (3))){
var inst_17045 = (state_17047[(2)]);
var state_17047__$1 = state_17047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17047__$1,inst_17045);
} else {
if((state_val_17048 === (2))){
var state_17047__$1 = state_17047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17047__$1,(4),from);
} else {
if((state_val_17048 === (9))){
var inst_17040 = (state_17047[(2)]);
var state_17047__$1 = (function (){var statearr_17075 = state_17047;
(statearr_17075[(9)] = inst_17040);

return statearr_17075;
})();
var statearr_17076_19664 = state_17047__$1;
(statearr_17076_19664[(2)] = null);

(statearr_17076_19664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17048 === (5))){
var inst_17011 = cljs.core.async.close_BANG_(jobs);
var state_17047__$1 = state_17047;
var statearr_17077_19665 = state_17047__$1;
(statearr_17077_19665[(2)] = inst_17011);

(statearr_17077_19665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17048 === (8))){
var inst_17013 = (state_17047[(8)]);
var inst_17038 = (state_17047[(2)]);
var state_17047__$1 = (function (){var statearr_17081 = state_17047;
(statearr_17081[(10)] = inst_17038);

return statearr_17081;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17047__$1,(9),results,inst_17013);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0 = (function (){
var statearr_17082 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__);

(statearr_17082[(1)] = (1));

return statearr_17082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1 = (function (state_17047){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_17047);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e17083){var ex__16185__auto__ = e17083;
var statearr_17084_19666 = state_17047;
(statearr_17084_19666[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_17047[(4)]))){
var statearr_17085_19667 = state_17047;
(statearr_17085_19667[(1)] = cljs.core.first((state_17047[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19668 = state_17047;
state_17047 = G__19668;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__ = function(state_17047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1.call(this,state_17047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_17086 = f__16417__auto__();
(statearr_17086[(6)] = c__16416__auto___19652);

return statearr_17086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


var c__16416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_17133){
var state_val_17134 = (state_17133[(1)]);
if((state_val_17134 === (7))){
var inst_17129 = (state_17133[(2)]);
var state_17133__$1 = state_17133;
var statearr_17138_19671 = state_17133__$1;
(statearr_17138_19671[(2)] = inst_17129);

(statearr_17138_19671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (20))){
var state_17133__$1 = state_17133;
var statearr_17139_19672 = state_17133__$1;
(statearr_17139_19672[(2)] = null);

(statearr_17139_19672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (1))){
var state_17133__$1 = state_17133;
var statearr_17140_19673 = state_17133__$1;
(statearr_17140_19673[(2)] = null);

(statearr_17140_19673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (4))){
var inst_17096 = (state_17133[(7)]);
var inst_17096__$1 = (state_17133[(2)]);
var inst_17097 = (inst_17096__$1 == null);
var state_17133__$1 = (function (){var statearr_17142 = state_17133;
(statearr_17142[(7)] = inst_17096__$1);

return statearr_17142;
})();
if(cljs.core.truth_(inst_17097)){
var statearr_17144_19674 = state_17133__$1;
(statearr_17144_19674[(1)] = (5));

} else {
var statearr_17145_19675 = state_17133__$1;
(statearr_17145_19675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (15))){
var inst_17109 = (state_17133[(8)]);
var state_17133__$1 = state_17133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17133__$1,(18),to,inst_17109);
} else {
if((state_val_17134 === (21))){
var inst_17124 = (state_17133[(2)]);
var state_17133__$1 = state_17133;
var statearr_17146_19677 = state_17133__$1;
(statearr_17146_19677[(2)] = inst_17124);

(statearr_17146_19677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (13))){
var inst_17126 = (state_17133[(2)]);
var state_17133__$1 = (function (){var statearr_17147 = state_17133;
(statearr_17147[(9)] = inst_17126);

return statearr_17147;
})();
var statearr_17148_19678 = state_17133__$1;
(statearr_17148_19678[(2)] = null);

(statearr_17148_19678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (6))){
var inst_17096 = (state_17133[(7)]);
var state_17133__$1 = state_17133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17133__$1,(11),inst_17096);
} else {
if((state_val_17134 === (17))){
var inst_17117 = (state_17133[(2)]);
var state_17133__$1 = state_17133;
if(cljs.core.truth_(inst_17117)){
var statearr_17149_19679 = state_17133__$1;
(statearr_17149_19679[(1)] = (19));

} else {
var statearr_17150_19680 = state_17133__$1;
(statearr_17150_19680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (3))){
var inst_17131 = (state_17133[(2)]);
var state_17133__$1 = state_17133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17133__$1,inst_17131);
} else {
if((state_val_17134 === (12))){
var inst_17106 = (state_17133[(10)]);
var state_17133__$1 = state_17133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17133__$1,(14),inst_17106);
} else {
if((state_val_17134 === (2))){
var state_17133__$1 = state_17133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17133__$1,(4),results);
} else {
if((state_val_17134 === (19))){
var state_17133__$1 = state_17133;
var statearr_17163_19684 = state_17133__$1;
(statearr_17163_19684[(2)] = null);

(statearr_17163_19684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (11))){
var inst_17106 = (state_17133[(2)]);
var state_17133__$1 = (function (){var statearr_17164 = state_17133;
(statearr_17164[(10)] = inst_17106);

return statearr_17164;
})();
var statearr_17165_19685 = state_17133__$1;
(statearr_17165_19685[(2)] = null);

(statearr_17165_19685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (9))){
var state_17133__$1 = state_17133;
var statearr_17166_19687 = state_17133__$1;
(statearr_17166_19687[(2)] = null);

(statearr_17166_19687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (5))){
var state_17133__$1 = state_17133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17168_19688 = state_17133__$1;
(statearr_17168_19688[(1)] = (8));

} else {
var statearr_17170_19690 = state_17133__$1;
(statearr_17170_19690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (14))){
var inst_17111 = (state_17133[(11)]);
var inst_17109 = (state_17133[(8)]);
var inst_17109__$1 = (state_17133[(2)]);
var inst_17110 = (inst_17109__$1 == null);
var inst_17111__$1 = cljs.core.not(inst_17110);
var state_17133__$1 = (function (){var statearr_17171 = state_17133;
(statearr_17171[(11)] = inst_17111__$1);

(statearr_17171[(8)] = inst_17109__$1);

return statearr_17171;
})();
if(inst_17111__$1){
var statearr_17172_19691 = state_17133__$1;
(statearr_17172_19691[(1)] = (15));

} else {
var statearr_17174_19692 = state_17133__$1;
(statearr_17174_19692[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (16))){
var inst_17111 = (state_17133[(11)]);
var state_17133__$1 = state_17133;
var statearr_17175_19694 = state_17133__$1;
(statearr_17175_19694[(2)] = inst_17111);

(statearr_17175_19694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (10))){
var inst_17103 = (state_17133[(2)]);
var state_17133__$1 = state_17133;
var statearr_17176_19695 = state_17133__$1;
(statearr_17176_19695[(2)] = inst_17103);

(statearr_17176_19695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (18))){
var inst_17114 = (state_17133[(2)]);
var state_17133__$1 = state_17133;
var statearr_17177_19697 = state_17133__$1;
(statearr_17177_19697[(2)] = inst_17114);

(statearr_17177_19697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17134 === (8))){
var inst_17100 = cljs.core.async.close_BANG_(to);
var state_17133__$1 = state_17133;
var statearr_17178_19698 = state_17133__$1;
(statearr_17178_19698[(2)] = inst_17100);

(statearr_17178_19698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0 = (function (){
var statearr_17183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__);

(statearr_17183[(1)] = (1));

return statearr_17183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1 = (function (state_17133){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_17133);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e17184){var ex__16185__auto__ = e17184;
var statearr_17185_19699 = state_17133;
(statearr_17185_19699[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_17133[(4)]))){
var statearr_17186_19703 = state_17133;
(statearr_17186_19703[(1)] = cljs.core.first((state_17133[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19704 = state_17133;
state_17133 = G__19704;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__ = function(state_17133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1.call(this,state_17133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_17187 = f__16417__auto__();
(statearr_17187[(6)] = c__16416__auto__);

return statearr_17187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));

return c__16416__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17190 = arguments.length;
switch (G__17190) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17196 = arguments.length;
switch (G__17196) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17225 = arguments.length;
switch (G__17225) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16416__auto___19710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_17269){
var state_val_17270 = (state_17269[(1)]);
if((state_val_17270 === (7))){
var inst_17264 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17271_19711 = state_17269__$1;
(statearr_17271_19711[(2)] = inst_17264);

(statearr_17271_19711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (1))){
var state_17269__$1 = state_17269;
var statearr_17277_19712 = state_17269__$1;
(statearr_17277_19712[(2)] = null);

(statearr_17277_19712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (4))){
var inst_17245 = (state_17269[(7)]);
var inst_17245__$1 = (state_17269[(2)]);
var inst_17246 = (inst_17245__$1 == null);
var state_17269__$1 = (function (){var statearr_17292 = state_17269;
(statearr_17292[(7)] = inst_17245__$1);

return statearr_17292;
})();
if(cljs.core.truth_(inst_17246)){
var statearr_17297_19713 = state_17269__$1;
(statearr_17297_19713[(1)] = (5));

} else {
var statearr_17298_19714 = state_17269__$1;
(statearr_17298_19714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (13))){
var state_17269__$1 = state_17269;
var statearr_17300_19715 = state_17269__$1;
(statearr_17300_19715[(2)] = null);

(statearr_17300_19715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (6))){
var inst_17245 = (state_17269[(7)]);
var inst_17251 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17245) : p.call(null,inst_17245));
var state_17269__$1 = state_17269;
if(cljs.core.truth_(inst_17251)){
var statearr_17301_19716 = state_17269__$1;
(statearr_17301_19716[(1)] = (9));

} else {
var statearr_17302_19717 = state_17269__$1;
(statearr_17302_19717[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (3))){
var inst_17266 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17269__$1,inst_17266);
} else {
if((state_val_17270 === (12))){
var state_17269__$1 = state_17269;
var statearr_17307_19718 = state_17269__$1;
(statearr_17307_19718[(2)] = null);

(statearr_17307_19718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (2))){
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17269__$1,(4),ch);
} else {
if((state_val_17270 === (11))){
var inst_17245 = (state_17269[(7)]);
var inst_17255 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17269__$1,(8),inst_17255,inst_17245);
} else {
if((state_val_17270 === (9))){
var state_17269__$1 = state_17269;
var statearr_17333_19719 = state_17269__$1;
(statearr_17333_19719[(2)] = tc);

(statearr_17333_19719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (5))){
var inst_17248 = cljs.core.async.close_BANG_(tc);
var inst_17249 = cljs.core.async.close_BANG_(fc);
var state_17269__$1 = (function (){var statearr_17338 = state_17269;
(statearr_17338[(8)] = inst_17248);

return statearr_17338;
})();
var statearr_17345_19721 = state_17269__$1;
(statearr_17345_19721[(2)] = inst_17249);

(statearr_17345_19721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (14))){
var inst_17262 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17354_19722 = state_17269__$1;
(statearr_17354_19722[(2)] = inst_17262);

(statearr_17354_19722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (10))){
var state_17269__$1 = state_17269;
var statearr_17369_19723 = state_17269__$1;
(statearr_17369_19723[(2)] = fc);

(statearr_17369_19723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (8))){
var inst_17257 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
if(cljs.core.truth_(inst_17257)){
var statearr_17376_19724 = state_17269__$1;
(statearr_17376_19724[(1)] = (12));

} else {
var statearr_17377_19725 = state_17269__$1;
(statearr_17377_19725[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_17390 = [null,null,null,null,null,null,null,null,null];
(statearr_17390[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_17390[(1)] = (1));

return statearr_17390;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_17269){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_17269);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e17391){var ex__16185__auto__ = e17391;
var statearr_17394_19726 = state_17269;
(statearr_17394_19726[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_17269[(4)]))){
var statearr_17395_19727 = state_17269;
(statearr_17395_19727[(1)] = cljs.core.first((state_17269[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19728 = state_17269;
state_17269 = G__19728;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_17269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_17269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_17401 = f__16417__auto__();
(statearr_17401[(6)] = c__16416__auto___19710);

return statearr_17401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_17441){
var state_val_17442 = (state_17441[(1)]);
if((state_val_17442 === (7))){
var inst_17437 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
var statearr_17451_19733 = state_17441__$1;
(statearr_17451_19733[(2)] = inst_17437);

(statearr_17451_19733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (1))){
var inst_17409 = init;
var inst_17410 = inst_17409;
var state_17441__$1 = (function (){var statearr_17452 = state_17441;
(statearr_17452[(7)] = inst_17410);

return statearr_17452;
})();
var statearr_17453_19734 = state_17441__$1;
(statearr_17453_19734[(2)] = null);

(statearr_17453_19734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (4))){
var inst_17414 = (state_17441[(8)]);
var inst_17414__$1 = (state_17441[(2)]);
var inst_17417 = (inst_17414__$1 == null);
var state_17441__$1 = (function (){var statearr_17460 = state_17441;
(statearr_17460[(8)] = inst_17414__$1);

return statearr_17460;
})();
if(cljs.core.truth_(inst_17417)){
var statearr_17463_19736 = state_17441__$1;
(statearr_17463_19736[(1)] = (5));

} else {
var statearr_17466_19737 = state_17441__$1;
(statearr_17466_19737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (6))){
var inst_17414 = (state_17441[(8)]);
var inst_17410 = (state_17441[(7)]);
var inst_17422 = (state_17441[(9)]);
var inst_17422__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17410,inst_17414) : f.call(null,inst_17410,inst_17414));
var inst_17425 = cljs.core.reduced_QMARK_(inst_17422__$1);
var state_17441__$1 = (function (){var statearr_17476 = state_17441;
(statearr_17476[(9)] = inst_17422__$1);

return statearr_17476;
})();
if(inst_17425){
var statearr_17481_19738 = state_17441__$1;
(statearr_17481_19738[(1)] = (8));

} else {
var statearr_17482_19739 = state_17441__$1;
(statearr_17482_19739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (3))){
var inst_17439 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17441__$1,inst_17439);
} else {
if((state_val_17442 === (2))){
var state_17441__$1 = state_17441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17441__$1,(4),ch);
} else {
if((state_val_17442 === (9))){
var inst_17422 = (state_17441[(9)]);
var inst_17410 = inst_17422;
var state_17441__$1 = (function (){var statearr_17491 = state_17441;
(statearr_17491[(7)] = inst_17410);

return statearr_17491;
})();
var statearr_17493_19740 = state_17441__$1;
(statearr_17493_19740[(2)] = null);

(statearr_17493_19740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (5))){
var inst_17410 = (state_17441[(7)]);
var state_17441__$1 = state_17441;
var statearr_17496_19741 = state_17441__$1;
(statearr_17496_19741[(2)] = inst_17410);

(statearr_17496_19741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (10))){
var inst_17431 = (state_17441[(2)]);
var state_17441__$1 = state_17441;
var statearr_17497_19742 = state_17441__$1;
(statearr_17497_19742[(2)] = inst_17431);

(statearr_17497_19742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17442 === (8))){
var inst_17422 = (state_17441[(9)]);
var inst_17427 = cljs.core.deref(inst_17422);
var state_17441__$1 = state_17441;
var statearr_17501_19743 = state_17441__$1;
(statearr_17501_19743[(2)] = inst_17427);

(statearr_17501_19743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__16182__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16182__auto____0 = (function (){
var statearr_17505 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17505[(0)] = cljs$core$async$reduce_$_state_machine__16182__auto__);

(statearr_17505[(1)] = (1));

return statearr_17505;
});
var cljs$core$async$reduce_$_state_machine__16182__auto____1 = (function (state_17441){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_17441);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e17506){var ex__16185__auto__ = e17506;
var statearr_17507_19744 = state_17441;
(statearr_17507_19744[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_17441[(4)]))){
var statearr_17508_19745 = state_17441;
(statearr_17508_19745[(1)] = cljs.core.first((state_17441[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19746 = state_17441;
state_17441 = G__19746;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16182__auto__ = function(state_17441){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16182__auto____1.call(this,state_17441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16182__auto____0;
cljs$core$async$reduce_$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16182__auto____1;
return cljs$core$async$reduce_$_state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_17511 = f__16417__auto__();
(statearr_17511[(6)] = c__16416__auto__);

return statearr_17511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));

return c__16416__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_17518){
var state_val_17520 = (state_17518[(1)]);
if((state_val_17520 === (1))){
var inst_17512 = cljs.core.async.reduce(f__$1,init,ch);
var state_17518__$1 = state_17518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17518__$1,(2),inst_17512);
} else {
if((state_val_17520 === (2))){
var inst_17514 = (state_17518[(2)]);
var inst_17515 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17514) : f__$1.call(null,inst_17514));
var state_17518__$1 = state_17518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17518__$1,inst_17515);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16182__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16182__auto____0 = (function (){
var statearr_17531 = [null,null,null,null,null,null,null];
(statearr_17531[(0)] = cljs$core$async$transduce_$_state_machine__16182__auto__);

(statearr_17531[(1)] = (1));

return statearr_17531;
});
var cljs$core$async$transduce_$_state_machine__16182__auto____1 = (function (state_17518){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_17518);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e17533){var ex__16185__auto__ = e17533;
var statearr_17534_19750 = state_17518;
(statearr_17534_19750[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_17518[(4)]))){
var statearr_17535_19751 = state_17518;
(statearr_17535_19751[(1)] = cljs.core.first((state_17518[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19752 = state_17518;
state_17518 = G__19752;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16182__auto__ = function(state_17518){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16182__auto____1.call(this,state_17518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16182__auto____0;
cljs$core$async$transduce_$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16182__auto____1;
return cljs$core$async$transduce_$_state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_17546 = f__16417__auto__();
(statearr_17546[(6)] = c__16416__auto__);

return statearr_17546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));

return c__16416__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17557 = arguments.length;
switch (G__17557) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_17611){
var state_val_17612 = (state_17611[(1)]);
if((state_val_17612 === (7))){
var inst_17590 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
var statearr_17619_19754 = state_17611__$1;
(statearr_17619_19754[(2)] = inst_17590);

(statearr_17619_19754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (1))){
var inst_17576 = cljs.core.seq(coll);
var inst_17578 = inst_17576;
var state_17611__$1 = (function (){var statearr_17624 = state_17611;
(statearr_17624[(7)] = inst_17578);

return statearr_17624;
})();
var statearr_17627_19755 = state_17611__$1;
(statearr_17627_19755[(2)] = null);

(statearr_17627_19755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (4))){
var inst_17578 = (state_17611[(7)]);
var inst_17588 = cljs.core.first(inst_17578);
var state_17611__$1 = state_17611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17611__$1,(7),ch,inst_17588);
} else {
if((state_val_17612 === (13))){
var inst_17603 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
var statearr_17632_19756 = state_17611__$1;
(statearr_17632_19756[(2)] = inst_17603);

(statearr_17632_19756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (6))){
var inst_17593 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
if(cljs.core.truth_(inst_17593)){
var statearr_17637_19757 = state_17611__$1;
(statearr_17637_19757[(1)] = (8));

} else {
var statearr_17642_19758 = state_17611__$1;
(statearr_17642_19758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (3))){
var inst_17608 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17611__$1,inst_17608);
} else {
if((state_val_17612 === (12))){
var state_17611__$1 = state_17611;
var statearr_17648_19760 = state_17611__$1;
(statearr_17648_19760[(2)] = null);

(statearr_17648_19760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (2))){
var inst_17578 = (state_17611[(7)]);
var state_17611__$1 = state_17611;
if(cljs.core.truth_(inst_17578)){
var statearr_17655_19761 = state_17611__$1;
(statearr_17655_19761[(1)] = (4));

} else {
var statearr_17660_19762 = state_17611__$1;
(statearr_17660_19762[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (11))){
var inst_17600 = cljs.core.async.close_BANG_(ch);
var state_17611__$1 = state_17611;
var statearr_17669_19763 = state_17611__$1;
(statearr_17669_19763[(2)] = inst_17600);

(statearr_17669_19763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (9))){
var state_17611__$1 = state_17611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17679_19769 = state_17611__$1;
(statearr_17679_19769[(1)] = (11));

} else {
var statearr_17682_19770 = state_17611__$1;
(statearr_17682_19770[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (5))){
var inst_17578 = (state_17611[(7)]);
var state_17611__$1 = state_17611;
var statearr_17685_19774 = state_17611__$1;
(statearr_17685_19774[(2)] = inst_17578);

(statearr_17685_19774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (10))){
var inst_17606 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
var statearr_17687_19775 = state_17611__$1;
(statearr_17687_19775[(2)] = inst_17606);

(statearr_17687_19775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (8))){
var inst_17578 = (state_17611[(7)]);
var inst_17595 = cljs.core.next(inst_17578);
var inst_17578__$1 = inst_17595;
var state_17611__$1 = (function (){var statearr_17691 = state_17611;
(statearr_17691[(7)] = inst_17578__$1);

return statearr_17691;
})();
var statearr_17692_19776 = state_17611__$1;
(statearr_17692_19776[(2)] = null);

(statearr_17692_19776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_17703 = [null,null,null,null,null,null,null,null];
(statearr_17703[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_17703[(1)] = (1));

return statearr_17703;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_17611){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_17611);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e17704){var ex__16185__auto__ = e17704;
var statearr_17705_19780 = state_17611;
(statearr_17705_19780[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_17611[(4)]))){
var statearr_17708_19781 = state_17611;
(statearr_17708_19781[(1)] = cljs.core.first((state_17611[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19782 = state_17611;
state_17611 = G__19782;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_17611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_17611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_17713 = f__16417__auto__();
(statearr_17713[(6)] = c__16416__auto__);

return statearr_17713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));

return c__16416__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17742 = arguments.length;
switch (G__17742) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19793 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19793(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19794 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19794(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19803 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19803(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19807 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19807(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17786 = (function (ch,cs,meta17787){
this.ch = ch;
this.cs = cs;
this.meta17787 = meta17787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17788,meta17787__$1){
var self__ = this;
var _17788__$1 = this;
return (new cljs.core.async.t_cljs$core$async17786(self__.ch,self__.cs,meta17787__$1));
}));

(cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17788){
var self__ = this;
var _17788__$1 = this;
return self__.meta17787;
}));

(cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17787","meta17787",-899805855,null)], null);
}));

(cljs.core.async.t_cljs$core$async17786.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17786");

(cljs.core.async.t_cljs$core$async17786.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17786");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17786.
 */
cljs.core.async.__GT_t_cljs$core$async17786 = (function cljs$core$async$__GT_t_cljs$core$async17786(ch,cs,meta17787){
return (new cljs.core.async.t_cljs$core$async17786(ch,cs,meta17787));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async17786(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16416__auto___19818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_17937){
var state_val_17938 = (state_17937[(1)]);
if((state_val_17938 === (7))){
var inst_17933 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
var statearr_17942_19819 = state_17937__$1;
(statearr_17942_19819[(2)] = inst_17933);

(statearr_17942_19819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (20))){
var inst_17831 = (state_17937[(7)]);
var inst_17843 = cljs.core.first(inst_17831);
var inst_17844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17843,(0),null);
var inst_17845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17843,(1),null);
var state_17937__$1 = (function (){var statearr_17943 = state_17937;
(statearr_17943[(8)] = inst_17844);

return statearr_17943;
})();
if(cljs.core.truth_(inst_17845)){
var statearr_17944_19823 = state_17937__$1;
(statearr_17944_19823[(1)] = (22));

} else {
var statearr_17945_19824 = state_17937__$1;
(statearr_17945_19824[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (27))){
var inst_17877 = (state_17937[(9)]);
var inst_17793 = (state_17937[(10)]);
var inst_17875 = (state_17937[(11)]);
var inst_17883 = (state_17937[(12)]);
var inst_17883__$1 = cljs.core._nth(inst_17875,inst_17877);
var inst_17884 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17883__$1,inst_17793,done);
var state_17937__$1 = (function (){var statearr_17950 = state_17937;
(statearr_17950[(12)] = inst_17883__$1);

return statearr_17950;
})();
if(cljs.core.truth_(inst_17884)){
var statearr_17951_19825 = state_17937__$1;
(statearr_17951_19825[(1)] = (30));

} else {
var statearr_17952_19826 = state_17937__$1;
(statearr_17952_19826[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (1))){
var state_17937__$1 = state_17937;
var statearr_17953_19827 = state_17937__$1;
(statearr_17953_19827[(2)] = null);

(statearr_17953_19827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (24))){
var inst_17831 = (state_17937[(7)]);
var inst_17850 = (state_17937[(2)]);
var inst_17851 = cljs.core.next(inst_17831);
var inst_17806 = inst_17851;
var inst_17807 = null;
var inst_17808 = (0);
var inst_17809 = (0);
var state_17937__$1 = (function (){var statearr_17954 = state_17937;
(statearr_17954[(13)] = inst_17806);

(statearr_17954[(14)] = inst_17808);

(statearr_17954[(15)] = inst_17807);

(statearr_17954[(16)] = inst_17850);

(statearr_17954[(17)] = inst_17809);

return statearr_17954;
})();
var statearr_17955_19828 = state_17937__$1;
(statearr_17955_19828[(2)] = null);

(statearr_17955_19828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (39))){
var state_17937__$1 = state_17937;
var statearr_17961_19829 = state_17937__$1;
(statearr_17961_19829[(2)] = null);

(statearr_17961_19829[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (4))){
var inst_17793 = (state_17937[(10)]);
var inst_17793__$1 = (state_17937[(2)]);
var inst_17794 = (inst_17793__$1 == null);
var state_17937__$1 = (function (){var statearr_17963 = state_17937;
(statearr_17963[(10)] = inst_17793__$1);

return statearr_17963;
})();
if(cljs.core.truth_(inst_17794)){
var statearr_17968_19831 = state_17937__$1;
(statearr_17968_19831[(1)] = (5));

} else {
var statearr_17971_19832 = state_17937__$1;
(statearr_17971_19832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (15))){
var inst_17806 = (state_17937[(13)]);
var inst_17808 = (state_17937[(14)]);
var inst_17807 = (state_17937[(15)]);
var inst_17809 = (state_17937[(17)]);
var inst_17827 = (state_17937[(2)]);
var inst_17828 = (inst_17809 + (1));
var tmp17957 = inst_17806;
var tmp17958 = inst_17808;
var tmp17959 = inst_17807;
var inst_17806__$1 = tmp17957;
var inst_17807__$1 = tmp17959;
var inst_17808__$1 = tmp17958;
var inst_17809__$1 = inst_17828;
var state_17937__$1 = (function (){var statearr_17975 = state_17937;
(statearr_17975[(13)] = inst_17806__$1);

(statearr_17975[(14)] = inst_17808__$1);

(statearr_17975[(15)] = inst_17807__$1);

(statearr_17975[(17)] = inst_17809__$1);

(statearr_17975[(18)] = inst_17827);

return statearr_17975;
})();
var statearr_17976_19837 = state_17937__$1;
(statearr_17976_19837[(2)] = null);

(statearr_17976_19837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (21))){
var inst_17854 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
var statearr_17980_19838 = state_17937__$1;
(statearr_17980_19838[(2)] = inst_17854);

(statearr_17980_19838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (31))){
var inst_17883 = (state_17937[(12)]);
var inst_17887 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17883);
var state_17937__$1 = state_17937;
var statearr_17981_19839 = state_17937__$1;
(statearr_17981_19839[(2)] = inst_17887);

(statearr_17981_19839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (32))){
var inst_17876 = (state_17937[(19)]);
var inst_17877 = (state_17937[(9)]);
var inst_17874 = (state_17937[(20)]);
var inst_17875 = (state_17937[(11)]);
var inst_17889 = (state_17937[(2)]);
var inst_17890 = (inst_17877 + (1));
var tmp17977 = inst_17876;
var tmp17978 = inst_17874;
var tmp17979 = inst_17875;
var inst_17874__$1 = tmp17978;
var inst_17875__$1 = tmp17979;
var inst_17876__$1 = tmp17977;
var inst_17877__$1 = inst_17890;
var state_17937__$1 = (function (){var statearr_17988 = state_17937;
(statearr_17988[(19)] = inst_17876__$1);

(statearr_17988[(9)] = inst_17877__$1);

(statearr_17988[(20)] = inst_17874__$1);

(statearr_17988[(21)] = inst_17889);

(statearr_17988[(11)] = inst_17875__$1);

return statearr_17988;
})();
var statearr_17989_19840 = state_17937__$1;
(statearr_17989_19840[(2)] = null);

(statearr_17989_19840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (40))){
var inst_17906 = (state_17937[(22)]);
var inst_17910 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17906);
var state_17937__$1 = state_17937;
var statearr_17990_19841 = state_17937__$1;
(statearr_17990_19841[(2)] = inst_17910);

(statearr_17990_19841[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (33))){
var inst_17893 = (state_17937[(23)]);
var inst_17895 = cljs.core.chunked_seq_QMARK_(inst_17893);
var state_17937__$1 = state_17937;
if(inst_17895){
var statearr_17991_19842 = state_17937__$1;
(statearr_17991_19842[(1)] = (36));

} else {
var statearr_17992_19843 = state_17937__$1;
(statearr_17992_19843[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (13))){
var inst_17821 = (state_17937[(24)]);
var inst_17824 = cljs.core.async.close_BANG_(inst_17821);
var state_17937__$1 = state_17937;
var statearr_17993_19844 = state_17937__$1;
(statearr_17993_19844[(2)] = inst_17824);

(statearr_17993_19844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (22))){
var inst_17844 = (state_17937[(8)]);
var inst_17847 = cljs.core.async.close_BANG_(inst_17844);
var state_17937__$1 = state_17937;
var statearr_17994_19853 = state_17937__$1;
(statearr_17994_19853[(2)] = inst_17847);

(statearr_17994_19853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (36))){
var inst_17893 = (state_17937[(23)]);
var inst_17897 = cljs.core.chunk_first(inst_17893);
var inst_17898 = cljs.core.chunk_rest(inst_17893);
var inst_17900 = cljs.core.count(inst_17897);
var inst_17874 = inst_17898;
var inst_17875 = inst_17897;
var inst_17876 = inst_17900;
var inst_17877 = (0);
var state_17937__$1 = (function (){var statearr_17996 = state_17937;
(statearr_17996[(19)] = inst_17876);

(statearr_17996[(9)] = inst_17877);

(statearr_17996[(20)] = inst_17874);

(statearr_17996[(11)] = inst_17875);

return statearr_17996;
})();
var statearr_17997_19862 = state_17937__$1;
(statearr_17997_19862[(2)] = null);

(statearr_17997_19862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (41))){
var inst_17893 = (state_17937[(23)]);
var inst_17912 = (state_17937[(2)]);
var inst_17913 = cljs.core.next(inst_17893);
var inst_17874 = inst_17913;
var inst_17875 = null;
var inst_17876 = (0);
var inst_17877 = (0);
var state_17937__$1 = (function (){var statearr_18001 = state_17937;
(statearr_18001[(19)] = inst_17876);

(statearr_18001[(9)] = inst_17877);

(statearr_18001[(25)] = inst_17912);

(statearr_18001[(20)] = inst_17874);

(statearr_18001[(11)] = inst_17875);

return statearr_18001;
})();
var statearr_18002_19869 = state_17937__$1;
(statearr_18002_19869[(2)] = null);

(statearr_18002_19869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (43))){
var state_17937__$1 = state_17937;
var statearr_18003_19870 = state_17937__$1;
(statearr_18003_19870[(2)] = null);

(statearr_18003_19870[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (29))){
var inst_17921 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
var statearr_18008_19871 = state_17937__$1;
(statearr_18008_19871[(2)] = inst_17921);

(statearr_18008_19871[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (44))){
var inst_17930 = (state_17937[(2)]);
var state_17937__$1 = (function (){var statearr_18009 = state_17937;
(statearr_18009[(26)] = inst_17930);

return statearr_18009;
})();
var statearr_18010_19873 = state_17937__$1;
(statearr_18010_19873[(2)] = null);

(statearr_18010_19873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (6))){
var inst_17866 = (state_17937[(27)]);
var inst_17865 = cljs.core.deref(cs);
var inst_17866__$1 = cljs.core.keys(inst_17865);
var inst_17867 = cljs.core.count(inst_17866__$1);
var inst_17868 = cljs.core.reset_BANG_(dctr,inst_17867);
var inst_17873 = cljs.core.seq(inst_17866__$1);
var inst_17874 = inst_17873;
var inst_17875 = null;
var inst_17876 = (0);
var inst_17877 = (0);
var state_17937__$1 = (function (){var statearr_18012 = state_17937;
(statearr_18012[(19)] = inst_17876);

(statearr_18012[(28)] = inst_17868);

(statearr_18012[(9)] = inst_17877);

(statearr_18012[(20)] = inst_17874);

(statearr_18012[(27)] = inst_17866__$1);

(statearr_18012[(11)] = inst_17875);

return statearr_18012;
})();
var statearr_18013_19874 = state_17937__$1;
(statearr_18013_19874[(2)] = null);

(statearr_18013_19874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (28))){
var inst_17893 = (state_17937[(23)]);
var inst_17874 = (state_17937[(20)]);
var inst_17893__$1 = cljs.core.seq(inst_17874);
var state_17937__$1 = (function (){var statearr_18015 = state_17937;
(statearr_18015[(23)] = inst_17893__$1);

return statearr_18015;
})();
if(inst_17893__$1){
var statearr_18016_19884 = state_17937__$1;
(statearr_18016_19884[(1)] = (33));

} else {
var statearr_18017_19887 = state_17937__$1;
(statearr_18017_19887[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (25))){
var inst_17876 = (state_17937[(19)]);
var inst_17877 = (state_17937[(9)]);
var inst_17880 = (inst_17877 < inst_17876);
var inst_17881 = inst_17880;
var state_17937__$1 = state_17937;
if(cljs.core.truth_(inst_17881)){
var statearr_18018_19894 = state_17937__$1;
(statearr_18018_19894[(1)] = (27));

} else {
var statearr_18019_19895 = state_17937__$1;
(statearr_18019_19895[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (34))){
var state_17937__$1 = state_17937;
var statearr_18026_19896 = state_17937__$1;
(statearr_18026_19896[(2)] = null);

(statearr_18026_19896[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (17))){
var state_17937__$1 = state_17937;
var statearr_18027_19897 = state_17937__$1;
(statearr_18027_19897[(2)] = null);

(statearr_18027_19897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (3))){
var inst_17935 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17937__$1,inst_17935);
} else {
if((state_val_17938 === (12))){
var inst_17859 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
var statearr_18028_19904 = state_17937__$1;
(statearr_18028_19904[(2)] = inst_17859);

(statearr_18028_19904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (2))){
var state_17937__$1 = state_17937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17937__$1,(4),ch);
} else {
if((state_val_17938 === (23))){
var state_17937__$1 = state_17937;
var statearr_18033_19905 = state_17937__$1;
(statearr_18033_19905[(2)] = null);

(statearr_18033_19905[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (35))){
var inst_17919 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
var statearr_18034_19906 = state_17937__$1;
(statearr_18034_19906[(2)] = inst_17919);

(statearr_18034_19906[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (19))){
var inst_17831 = (state_17937[(7)]);
var inst_17835 = cljs.core.chunk_first(inst_17831);
var inst_17836 = cljs.core.chunk_rest(inst_17831);
var inst_17837 = cljs.core.count(inst_17835);
var inst_17806 = inst_17836;
var inst_17807 = inst_17835;
var inst_17808 = inst_17837;
var inst_17809 = (0);
var state_17937__$1 = (function (){var statearr_18039 = state_17937;
(statearr_18039[(13)] = inst_17806);

(statearr_18039[(14)] = inst_17808);

(statearr_18039[(15)] = inst_17807);

(statearr_18039[(17)] = inst_17809);

return statearr_18039;
})();
var statearr_18040_19907 = state_17937__$1;
(statearr_18040_19907[(2)] = null);

(statearr_18040_19907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (11))){
var inst_17806 = (state_17937[(13)]);
var inst_17831 = (state_17937[(7)]);
var inst_17831__$1 = cljs.core.seq(inst_17806);
var state_17937__$1 = (function (){var statearr_18042 = state_17937;
(statearr_18042[(7)] = inst_17831__$1);

return statearr_18042;
})();
if(inst_17831__$1){
var statearr_18043_19910 = state_17937__$1;
(statearr_18043_19910[(1)] = (16));

} else {
var statearr_18044_19911 = state_17937__$1;
(statearr_18044_19911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (9))){
var inst_17861 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
var statearr_18045_19912 = state_17937__$1;
(statearr_18045_19912[(2)] = inst_17861);

(statearr_18045_19912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (5))){
var inst_17801 = cljs.core.deref(cs);
var inst_17802 = cljs.core.seq(inst_17801);
var inst_17806 = inst_17802;
var inst_17807 = null;
var inst_17808 = (0);
var inst_17809 = (0);
var state_17937__$1 = (function (){var statearr_18046 = state_17937;
(statearr_18046[(13)] = inst_17806);

(statearr_18046[(14)] = inst_17808);

(statearr_18046[(15)] = inst_17807);

(statearr_18046[(17)] = inst_17809);

return statearr_18046;
})();
var statearr_18047_19915 = state_17937__$1;
(statearr_18047_19915[(2)] = null);

(statearr_18047_19915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (14))){
var state_17937__$1 = state_17937;
var statearr_18048_19916 = state_17937__$1;
(statearr_18048_19916[(2)] = null);

(statearr_18048_19916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (45))){
var inst_17927 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
var statearr_18049_19921 = state_17937__$1;
(statearr_18049_19921[(2)] = inst_17927);

(statearr_18049_19921[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (26))){
var inst_17866 = (state_17937[(27)]);
var inst_17923 = (state_17937[(2)]);
var inst_17924 = cljs.core.seq(inst_17866);
var state_17937__$1 = (function (){var statearr_18050 = state_17937;
(statearr_18050[(29)] = inst_17923);

return statearr_18050;
})();
if(inst_17924){
var statearr_18051_19922 = state_17937__$1;
(statearr_18051_19922[(1)] = (42));

} else {
var statearr_18052_19923 = state_17937__$1;
(statearr_18052_19923[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (16))){
var inst_17831 = (state_17937[(7)]);
var inst_17833 = cljs.core.chunked_seq_QMARK_(inst_17831);
var state_17937__$1 = state_17937;
if(inst_17833){
var statearr_18056_19925 = state_17937__$1;
(statearr_18056_19925[(1)] = (19));

} else {
var statearr_18059_19926 = state_17937__$1;
(statearr_18059_19926[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (38))){
var inst_17916 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
var statearr_18060_19927 = state_17937__$1;
(statearr_18060_19927[(2)] = inst_17916);

(statearr_18060_19927[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (30))){
var state_17937__$1 = state_17937;
var statearr_18061_19928 = state_17937__$1;
(statearr_18061_19928[(2)] = null);

(statearr_18061_19928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (10))){
var inst_17807 = (state_17937[(15)]);
var inst_17809 = (state_17937[(17)]);
var inst_17820 = cljs.core._nth(inst_17807,inst_17809);
var inst_17821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17820,(0),null);
var inst_17822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17820,(1),null);
var state_17937__$1 = (function (){var statearr_18062 = state_17937;
(statearr_18062[(24)] = inst_17821);

return statearr_18062;
})();
if(cljs.core.truth_(inst_17822)){
var statearr_18063_19929 = state_17937__$1;
(statearr_18063_19929[(1)] = (13));

} else {
var statearr_18064_19931 = state_17937__$1;
(statearr_18064_19931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (18))){
var inst_17857 = (state_17937[(2)]);
var state_17937__$1 = state_17937;
var statearr_18065_19932 = state_17937__$1;
(statearr_18065_19932[(2)] = inst_17857);

(statearr_18065_19932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (42))){
var state_17937__$1 = state_17937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17937__$1,(45),dchan);
} else {
if((state_val_17938 === (37))){
var inst_17906 = (state_17937[(22)]);
var inst_17893 = (state_17937[(23)]);
var inst_17793 = (state_17937[(10)]);
var inst_17906__$1 = cljs.core.first(inst_17893);
var inst_17907 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17906__$1,inst_17793,done);
var state_17937__$1 = (function (){var statearr_18066 = state_17937;
(statearr_18066[(22)] = inst_17906__$1);

return statearr_18066;
})();
if(cljs.core.truth_(inst_17907)){
var statearr_18067_19934 = state_17937__$1;
(statearr_18067_19934[(1)] = (39));

} else {
var statearr_18068_19935 = state_17937__$1;
(statearr_18068_19935[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17938 === (8))){
var inst_17808 = (state_17937[(14)]);
var inst_17809 = (state_17937[(17)]);
var inst_17811 = (inst_17809 < inst_17808);
var inst_17812 = inst_17811;
var state_17937__$1 = state_17937;
if(cljs.core.truth_(inst_17812)){
var statearr_18070_19939 = state_17937__$1;
(statearr_18070_19939[(1)] = (10));

} else {
var statearr_18071_19940 = state_17937__$1;
(statearr_18071_19940[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__16182__auto__ = null;
var cljs$core$async$mult_$_state_machine__16182__auto____0 = (function (){
var statearr_18072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18072[(0)] = cljs$core$async$mult_$_state_machine__16182__auto__);

(statearr_18072[(1)] = (1));

return statearr_18072;
});
var cljs$core$async$mult_$_state_machine__16182__auto____1 = (function (state_17937){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_17937);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e18073){var ex__16185__auto__ = e18073;
var statearr_18074_19941 = state_17937;
(statearr_18074_19941[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_17937[(4)]))){
var statearr_18075_19942 = state_17937;
(statearr_18075_19942[(1)] = cljs.core.first((state_17937[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19945 = state_17937;
state_17937 = G__19945;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16182__auto__ = function(state_17937){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16182__auto____1.call(this,state_17937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16182__auto____0;
cljs$core$async$mult_$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16182__auto____1;
return cljs$core$async$mult_$_state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_18077 = f__16417__auto__();
(statearr_18077[(6)] = c__16416__auto___19818);

return statearr_18077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18079 = arguments.length;
switch (G__18079) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19950 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19950(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19954 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19954(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19957 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19957(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19960 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19960(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19961 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19961(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19969 = arguments.length;
var i__5770__auto___19970 = (0);
while(true){
if((i__5770__auto___19970 < len__5769__auto___19969)){
args__5775__auto__.push((arguments[i__5770__auto___19970]));

var G__19977 = (i__5770__auto___19970 + (1));
i__5770__auto___19970 = G__19977;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18113){
var map__18114 = p__18113;
var map__18114__$1 = cljs.core.__destructure_map(map__18114);
var opts = map__18114__$1;
var statearr_18117_19978 = state;
(statearr_18117_19978[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18119_19979 = state;
(statearr_18119_19979[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18121_19980 = state;
(statearr_18121_19980[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18101){
var G__18103 = cljs.core.first(seq18101);
var seq18101__$1 = cljs.core.next(seq18101);
var G__18104 = cljs.core.first(seq18101__$1);
var seq18101__$2 = cljs.core.next(seq18101__$1);
var G__18105 = cljs.core.first(seq18101__$2);
var seq18101__$3 = cljs.core.next(seq18101__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18103,G__18104,G__18105,seq18101__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18142 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18143){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18143 = meta18143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18144,meta18143__$1){
var self__ = this;
var _18144__$1 = this;
return (new cljs.core.async.t_cljs$core$async18142(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18143__$1));
}));

(cljs.core.async.t_cljs$core$async18142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18144){
var self__ = this;
var _18144__$1 = this;
return self__.meta18143;
}));

(cljs.core.async.t_cljs$core$async18142.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18142.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18142.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18142.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18142.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18142.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18142.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18142.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18143","meta18143",-1532982725,null)], null);
}));

(cljs.core.async.t_cljs$core$async18142.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18142");

(cljs.core.async.t_cljs$core$async18142.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18142");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18142.
 */
cljs.core.async.__GT_t_cljs$core$async18142 = (function cljs$core$async$__GT_t_cljs$core$async18142(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18143){
return (new cljs.core.async.t_cljs$core$async18142(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18143));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18142(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__16416__auto___19992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_18240){
var state_val_18241 = (state_18240[(1)]);
if((state_val_18241 === (7))){
var inst_18199 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
if(cljs.core.truth_(inst_18199)){
var statearr_18244_19993 = state_18240__$1;
(statearr_18244_19993[(1)] = (8));

} else {
var statearr_18245_19994 = state_18240__$1;
(statearr_18245_19994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (20))){
var inst_18192 = (state_18240[(7)]);
var state_18240__$1 = state_18240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18240__$1,(23),out,inst_18192);
} else {
if((state_val_18241 === (1))){
var inst_18170 = calc_state();
var inst_18171 = cljs.core.__destructure_map(inst_18170);
var inst_18172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18171,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18171,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18171,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18176 = inst_18170;
var state_18240__$1 = (function (){var statearr_18252 = state_18240;
(statearr_18252[(8)] = inst_18173);

(statearr_18252[(9)] = inst_18176);

(statearr_18252[(10)] = inst_18174);

(statearr_18252[(11)] = inst_18172);

return statearr_18252;
})();
var statearr_18253_19996 = state_18240__$1;
(statearr_18253_19996[(2)] = null);

(statearr_18253_19996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (24))){
var inst_18180 = (state_18240[(12)]);
var inst_18176 = inst_18180;
var state_18240__$1 = (function (){var statearr_18257 = state_18240;
(statearr_18257[(9)] = inst_18176);

return statearr_18257;
})();
var statearr_18258_19997 = state_18240__$1;
(statearr_18258_19997[(2)] = null);

(statearr_18258_19997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (4))){
var inst_18194 = (state_18240[(13)]);
var inst_18192 = (state_18240[(7)]);
var inst_18191 = (state_18240[(2)]);
var inst_18192__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18191,(0),null);
var inst_18193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18191,(1),null);
var inst_18194__$1 = (inst_18192__$1 == null);
var state_18240__$1 = (function (){var statearr_18260 = state_18240;
(statearr_18260[(13)] = inst_18194__$1);

(statearr_18260[(7)] = inst_18192__$1);

(statearr_18260[(14)] = inst_18193);

return statearr_18260;
})();
if(cljs.core.truth_(inst_18194__$1)){
var statearr_18264_19998 = state_18240__$1;
(statearr_18264_19998[(1)] = (5));

} else {
var statearr_18265_19999 = state_18240__$1;
(statearr_18265_19999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (15))){
var inst_18213 = (state_18240[(15)]);
var inst_18181 = (state_18240[(16)]);
var inst_18213__$1 = cljs.core.empty_QMARK_(inst_18181);
var state_18240__$1 = (function (){var statearr_18266 = state_18240;
(statearr_18266[(15)] = inst_18213__$1);

return statearr_18266;
})();
if(inst_18213__$1){
var statearr_18268_20006 = state_18240__$1;
(statearr_18268_20006[(1)] = (17));

} else {
var statearr_18270_20007 = state_18240__$1;
(statearr_18270_20007[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (21))){
var inst_18180 = (state_18240[(12)]);
var inst_18176 = inst_18180;
var state_18240__$1 = (function (){var statearr_18271 = state_18240;
(statearr_18271[(9)] = inst_18176);

return statearr_18271;
})();
var statearr_18272_20008 = state_18240__$1;
(statearr_18272_20008[(2)] = null);

(statearr_18272_20008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (13))){
var inst_18206 = (state_18240[(2)]);
var inst_18207 = calc_state();
var inst_18176 = inst_18207;
var state_18240__$1 = (function (){var statearr_18273 = state_18240;
(statearr_18273[(9)] = inst_18176);

(statearr_18273[(17)] = inst_18206);

return statearr_18273;
})();
var statearr_18274_20015 = state_18240__$1;
(statearr_18274_20015[(2)] = null);

(statearr_18274_20015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (22))){
var inst_18233 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
var statearr_18278_20018 = state_18240__$1;
(statearr_18278_20018[(2)] = inst_18233);

(statearr_18278_20018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (6))){
var inst_18193 = (state_18240[(14)]);
var inst_18197 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18193,change);
var state_18240__$1 = state_18240;
var statearr_18279_20019 = state_18240__$1;
(statearr_18279_20019[(2)] = inst_18197);

(statearr_18279_20019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (25))){
var state_18240__$1 = state_18240;
var statearr_18280_20020 = state_18240__$1;
(statearr_18280_20020[(2)] = null);

(statearr_18280_20020[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (17))){
var inst_18183 = (state_18240[(18)]);
var inst_18193 = (state_18240[(14)]);
var inst_18215 = (inst_18183.cljs$core$IFn$_invoke$arity$1 ? inst_18183.cljs$core$IFn$_invoke$arity$1(inst_18193) : inst_18183.call(null,inst_18193));
var inst_18216 = cljs.core.not(inst_18215);
var state_18240__$1 = state_18240;
var statearr_18282_20024 = state_18240__$1;
(statearr_18282_20024[(2)] = inst_18216);

(statearr_18282_20024[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (3))){
var inst_18237 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18240__$1,inst_18237);
} else {
if((state_val_18241 === (12))){
var state_18240__$1 = state_18240;
var statearr_18286_20025 = state_18240__$1;
(statearr_18286_20025[(2)] = null);

(statearr_18286_20025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (2))){
var inst_18180 = (state_18240[(12)]);
var inst_18176 = (state_18240[(9)]);
var inst_18180__$1 = cljs.core.__destructure_map(inst_18176);
var inst_18181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18180__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18180__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18180__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18240__$1 = (function (){var statearr_18287 = state_18240;
(statearr_18287[(18)] = inst_18183);

(statearr_18287[(12)] = inst_18180__$1);

(statearr_18287[(16)] = inst_18181);

return statearr_18287;
})();
return cljs.core.async.ioc_alts_BANG_(state_18240__$1,(4),inst_18185);
} else {
if((state_val_18241 === (23))){
var inst_18224 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
if(cljs.core.truth_(inst_18224)){
var statearr_18289_20026 = state_18240__$1;
(statearr_18289_20026[(1)] = (24));

} else {
var statearr_18290_20027 = state_18240__$1;
(statearr_18290_20027[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (19))){
var inst_18219 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
var statearr_18291_20028 = state_18240__$1;
(statearr_18291_20028[(2)] = inst_18219);

(statearr_18291_20028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (11))){
var inst_18193 = (state_18240[(14)]);
var inst_18203 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18193);
var state_18240__$1 = state_18240;
var statearr_18292_20029 = state_18240__$1;
(statearr_18292_20029[(2)] = inst_18203);

(statearr_18292_20029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (9))){
var inst_18193 = (state_18240[(14)]);
var inst_18210 = (state_18240[(19)]);
var inst_18181 = (state_18240[(16)]);
var inst_18210__$1 = (inst_18181.cljs$core$IFn$_invoke$arity$1 ? inst_18181.cljs$core$IFn$_invoke$arity$1(inst_18193) : inst_18181.call(null,inst_18193));
var state_18240__$1 = (function (){var statearr_18297 = state_18240;
(statearr_18297[(19)] = inst_18210__$1);

return statearr_18297;
})();
if(cljs.core.truth_(inst_18210__$1)){
var statearr_18298_20030 = state_18240__$1;
(statearr_18298_20030[(1)] = (14));

} else {
var statearr_18299_20031 = state_18240__$1;
(statearr_18299_20031[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (5))){
var inst_18194 = (state_18240[(13)]);
var state_18240__$1 = state_18240;
var statearr_18300_20032 = state_18240__$1;
(statearr_18300_20032[(2)] = inst_18194);

(statearr_18300_20032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (14))){
var inst_18210 = (state_18240[(19)]);
var state_18240__$1 = state_18240;
var statearr_18301_20039 = state_18240__$1;
(statearr_18301_20039[(2)] = inst_18210);

(statearr_18301_20039[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (26))){
var inst_18229 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
var statearr_18303_20040 = state_18240__$1;
(statearr_18303_20040[(2)] = inst_18229);

(statearr_18303_20040[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (16))){
var inst_18221 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
if(cljs.core.truth_(inst_18221)){
var statearr_18304_20041 = state_18240__$1;
(statearr_18304_20041[(1)] = (20));

} else {
var statearr_18305_20042 = state_18240__$1;
(statearr_18305_20042[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (10))){
var inst_18235 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
var statearr_18306_20043 = state_18240__$1;
(statearr_18306_20043[(2)] = inst_18235);

(statearr_18306_20043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (18))){
var inst_18213 = (state_18240[(15)]);
var state_18240__$1 = state_18240;
var statearr_18307_20044 = state_18240__$1;
(statearr_18307_20044[(2)] = inst_18213);

(statearr_18307_20044[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (8))){
var inst_18192 = (state_18240[(7)]);
var inst_18201 = (inst_18192 == null);
var state_18240__$1 = state_18240;
if(cljs.core.truth_(inst_18201)){
var statearr_18308_20045 = state_18240__$1;
(statearr_18308_20045[(1)] = (11));

} else {
var statearr_18309_20046 = state_18240__$1;
(statearr_18309_20046[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__16182__auto__ = null;
var cljs$core$async$mix_$_state_machine__16182__auto____0 = (function (){
var statearr_18314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18314[(0)] = cljs$core$async$mix_$_state_machine__16182__auto__);

(statearr_18314[(1)] = (1));

return statearr_18314;
});
var cljs$core$async$mix_$_state_machine__16182__auto____1 = (function (state_18240){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_18240);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e18315){var ex__16185__auto__ = e18315;
var statearr_18316_20047 = state_18240;
(statearr_18316_20047[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_18240[(4)]))){
var statearr_18317_20048 = state_18240;
(statearr_18317_20048[(1)] = cljs.core.first((state_18240[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20050 = state_18240;
state_18240 = G__20050;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16182__auto__ = function(state_18240){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16182__auto____1.call(this,state_18240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16182__auto____0;
cljs$core$async$mix_$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16182__auto____1;
return cljs$core$async$mix_$_state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_18318 = f__16417__auto__();
(statearr_18318[(6)] = c__16416__auto___19992);

return statearr_18318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20054 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20054(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20057 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20057(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20058 = (function() {
var G__20059 = null;
var G__20059__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20059__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20059 = function(p,v){
switch(arguments.length){
case 1:
return G__20059__1.call(this,p);
case 2:
return G__20059__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20059.cljs$core$IFn$_invoke$arity$1 = G__20059__1;
G__20059.cljs$core$IFn$_invoke$arity$2 = G__20059__2;
return G__20059;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18322 = arguments.length;
switch (G__18322) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20058(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20058(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18336 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18337){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18337 = meta18337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18338,meta18337__$1){
var self__ = this;
var _18338__$1 = this;
return (new cljs.core.async.t_cljs$core$async18336(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18337__$1));
}));

(cljs.core.async.t_cljs$core$async18336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18338){
var self__ = this;
var _18338__$1 = this;
return self__.meta18337;
}));

(cljs.core.async.t_cljs$core$async18336.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18336.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18336.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18336.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18336.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18336.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18337","meta18337",2034625618,null)], null);
}));

(cljs.core.async.t_cljs$core$async18336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18336");

(cljs.core.async.t_cljs$core$async18336.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18336.
 */
cljs.core.async.__GT_t_cljs$core$async18336 = (function cljs$core$async$__GT_t_cljs$core$async18336(ch,topic_fn,buf_fn,mults,ensure_mult,meta18337){
return (new cljs.core.async.t_cljs$core$async18336(ch,topic_fn,buf_fn,mults,ensure_mult,meta18337));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18326 = arguments.length;
switch (G__18326) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18324_SHARP_){
if(cljs.core.truth_((p1__18324_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18324_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18324_SHARP_.call(null,topic)))){
return p1__18324_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18324_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18336(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__16416__auto___20075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_18443){
var state_val_18444 = (state_18443[(1)]);
if((state_val_18444 === (7))){
var inst_18439 = (state_18443[(2)]);
var state_18443__$1 = state_18443;
var statearr_18445_20076 = state_18443__$1;
(statearr_18445_20076[(2)] = inst_18439);

(statearr_18445_20076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (20))){
var state_18443__$1 = state_18443;
var statearr_18446_20077 = state_18443__$1;
(statearr_18446_20077[(2)] = null);

(statearr_18446_20077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (1))){
var state_18443__$1 = state_18443;
var statearr_18447_20078 = state_18443__$1;
(statearr_18447_20078[(2)] = null);

(statearr_18447_20078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (24))){
var inst_18421 = (state_18443[(7)]);
var inst_18431 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18421);
var state_18443__$1 = state_18443;
var statearr_18450_20079 = state_18443__$1;
(statearr_18450_20079[(2)] = inst_18431);

(statearr_18450_20079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (4))){
var inst_18369 = (state_18443[(8)]);
var inst_18369__$1 = (state_18443[(2)]);
var inst_18370 = (inst_18369__$1 == null);
var state_18443__$1 = (function (){var statearr_18451 = state_18443;
(statearr_18451[(8)] = inst_18369__$1);

return statearr_18451;
})();
if(cljs.core.truth_(inst_18370)){
var statearr_18452_20080 = state_18443__$1;
(statearr_18452_20080[(1)] = (5));

} else {
var statearr_18453_20081 = state_18443__$1;
(statearr_18453_20081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (15))){
var inst_18415 = (state_18443[(2)]);
var state_18443__$1 = state_18443;
var statearr_18454_20082 = state_18443__$1;
(statearr_18454_20082[(2)] = inst_18415);

(statearr_18454_20082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (21))){
var inst_18436 = (state_18443[(2)]);
var state_18443__$1 = (function (){var statearr_18455 = state_18443;
(statearr_18455[(9)] = inst_18436);

return statearr_18455;
})();
var statearr_18456_20083 = state_18443__$1;
(statearr_18456_20083[(2)] = null);

(statearr_18456_20083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (13))){
var inst_18397 = (state_18443[(10)]);
var inst_18399 = cljs.core.chunked_seq_QMARK_(inst_18397);
var state_18443__$1 = state_18443;
if(inst_18399){
var statearr_18457_20084 = state_18443__$1;
(statearr_18457_20084[(1)] = (16));

} else {
var statearr_18458_20085 = state_18443__$1;
(statearr_18458_20085[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (22))){
var inst_18428 = (state_18443[(2)]);
var state_18443__$1 = state_18443;
if(cljs.core.truth_(inst_18428)){
var statearr_18459_20086 = state_18443__$1;
(statearr_18459_20086[(1)] = (23));

} else {
var statearr_18460_20087 = state_18443__$1;
(statearr_18460_20087[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (6))){
var inst_18369 = (state_18443[(8)]);
var inst_18421 = (state_18443[(7)]);
var inst_18423 = (state_18443[(11)]);
var inst_18421__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18369) : topic_fn.call(null,inst_18369));
var inst_18422 = cljs.core.deref(mults);
var inst_18423__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18422,inst_18421__$1);
var state_18443__$1 = (function (){var statearr_18462 = state_18443;
(statearr_18462[(7)] = inst_18421__$1);

(statearr_18462[(11)] = inst_18423__$1);

return statearr_18462;
})();
if(cljs.core.truth_(inst_18423__$1)){
var statearr_18463_20088 = state_18443__$1;
(statearr_18463_20088[(1)] = (19));

} else {
var statearr_18464_20089 = state_18443__$1;
(statearr_18464_20089[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (25))){
var inst_18433 = (state_18443[(2)]);
var state_18443__$1 = state_18443;
var statearr_18465_20090 = state_18443__$1;
(statearr_18465_20090[(2)] = inst_18433);

(statearr_18465_20090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (17))){
var inst_18397 = (state_18443[(10)]);
var inst_18406 = cljs.core.first(inst_18397);
var inst_18407 = cljs.core.async.muxch_STAR_(inst_18406);
var inst_18408 = cljs.core.async.close_BANG_(inst_18407);
var inst_18409 = cljs.core.next(inst_18397);
var inst_18382 = inst_18409;
var inst_18383 = null;
var inst_18384 = (0);
var inst_18385 = (0);
var state_18443__$1 = (function (){var statearr_18466 = state_18443;
(statearr_18466[(12)] = inst_18408);

(statearr_18466[(13)] = inst_18382);

(statearr_18466[(14)] = inst_18383);

(statearr_18466[(15)] = inst_18385);

(statearr_18466[(16)] = inst_18384);

return statearr_18466;
})();
var statearr_18467_20092 = state_18443__$1;
(statearr_18467_20092[(2)] = null);

(statearr_18467_20092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (3))){
var inst_18441 = (state_18443[(2)]);
var state_18443__$1 = state_18443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18443__$1,inst_18441);
} else {
if((state_val_18444 === (12))){
var inst_18417 = (state_18443[(2)]);
var state_18443__$1 = state_18443;
var statearr_18468_20093 = state_18443__$1;
(statearr_18468_20093[(2)] = inst_18417);

(statearr_18468_20093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (2))){
var state_18443__$1 = state_18443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18443__$1,(4),ch);
} else {
if((state_val_18444 === (23))){
var state_18443__$1 = state_18443;
var statearr_18469_20094 = state_18443__$1;
(statearr_18469_20094[(2)] = null);

(statearr_18469_20094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (19))){
var inst_18369 = (state_18443[(8)]);
var inst_18423 = (state_18443[(11)]);
var inst_18426 = cljs.core.async.muxch_STAR_(inst_18423);
var state_18443__$1 = state_18443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18443__$1,(22),inst_18426,inst_18369);
} else {
if((state_val_18444 === (11))){
var inst_18382 = (state_18443[(13)]);
var inst_18397 = (state_18443[(10)]);
var inst_18397__$1 = cljs.core.seq(inst_18382);
var state_18443__$1 = (function (){var statearr_18471 = state_18443;
(statearr_18471[(10)] = inst_18397__$1);

return statearr_18471;
})();
if(inst_18397__$1){
var statearr_18472_20096 = state_18443__$1;
(statearr_18472_20096[(1)] = (13));

} else {
var statearr_18473_20098 = state_18443__$1;
(statearr_18473_20098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (9))){
var inst_18419 = (state_18443[(2)]);
var state_18443__$1 = state_18443;
var statearr_18474_20101 = state_18443__$1;
(statearr_18474_20101[(2)] = inst_18419);

(statearr_18474_20101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (5))){
var inst_18379 = cljs.core.deref(mults);
var inst_18380 = cljs.core.vals(inst_18379);
var inst_18381 = cljs.core.seq(inst_18380);
var inst_18382 = inst_18381;
var inst_18383 = null;
var inst_18384 = (0);
var inst_18385 = (0);
var state_18443__$1 = (function (){var statearr_18475 = state_18443;
(statearr_18475[(13)] = inst_18382);

(statearr_18475[(14)] = inst_18383);

(statearr_18475[(15)] = inst_18385);

(statearr_18475[(16)] = inst_18384);

return statearr_18475;
})();
var statearr_18476_20104 = state_18443__$1;
(statearr_18476_20104[(2)] = null);

(statearr_18476_20104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (14))){
var state_18443__$1 = state_18443;
var statearr_18483_20105 = state_18443__$1;
(statearr_18483_20105[(2)] = null);

(statearr_18483_20105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (16))){
var inst_18397 = (state_18443[(10)]);
var inst_18401 = cljs.core.chunk_first(inst_18397);
var inst_18402 = cljs.core.chunk_rest(inst_18397);
var inst_18403 = cljs.core.count(inst_18401);
var inst_18382 = inst_18402;
var inst_18383 = inst_18401;
var inst_18384 = inst_18403;
var inst_18385 = (0);
var state_18443__$1 = (function (){var statearr_18484 = state_18443;
(statearr_18484[(13)] = inst_18382);

(statearr_18484[(14)] = inst_18383);

(statearr_18484[(15)] = inst_18385);

(statearr_18484[(16)] = inst_18384);

return statearr_18484;
})();
var statearr_18485_20108 = state_18443__$1;
(statearr_18485_20108[(2)] = null);

(statearr_18485_20108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (10))){
var inst_18382 = (state_18443[(13)]);
var inst_18383 = (state_18443[(14)]);
var inst_18385 = (state_18443[(15)]);
var inst_18384 = (state_18443[(16)]);
var inst_18390 = cljs.core._nth(inst_18383,inst_18385);
var inst_18391 = cljs.core.async.muxch_STAR_(inst_18390);
var inst_18392 = cljs.core.async.close_BANG_(inst_18391);
var inst_18393 = (inst_18385 + (1));
var tmp18478 = inst_18382;
var tmp18479 = inst_18383;
var tmp18480 = inst_18384;
var inst_18382__$1 = tmp18478;
var inst_18383__$1 = tmp18479;
var inst_18384__$1 = tmp18480;
var inst_18385__$1 = inst_18393;
var state_18443__$1 = (function (){var statearr_18486 = state_18443;
(statearr_18486[(13)] = inst_18382__$1);

(statearr_18486[(14)] = inst_18383__$1);

(statearr_18486[(17)] = inst_18392);

(statearr_18486[(15)] = inst_18385__$1);

(statearr_18486[(16)] = inst_18384__$1);

return statearr_18486;
})();
var statearr_18487_20109 = state_18443__$1;
(statearr_18487_20109[(2)] = null);

(statearr_18487_20109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (18))){
var inst_18412 = (state_18443[(2)]);
var state_18443__$1 = state_18443;
var statearr_18488_20110 = state_18443__$1;
(statearr_18488_20110[(2)] = inst_18412);

(statearr_18488_20110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (8))){
var inst_18385 = (state_18443[(15)]);
var inst_18384 = (state_18443[(16)]);
var inst_18387 = (inst_18385 < inst_18384);
var inst_18388 = inst_18387;
var state_18443__$1 = state_18443;
if(cljs.core.truth_(inst_18388)){
var statearr_18489_20113 = state_18443__$1;
(statearr_18489_20113[(1)] = (10));

} else {
var statearr_18490_20114 = state_18443__$1;
(statearr_18490_20114[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_18492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18492[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_18492[(1)] = (1));

return statearr_18492;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_18443){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_18443);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e18493){var ex__16185__auto__ = e18493;
var statearr_18494_20117 = state_18443;
(statearr_18494_20117[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_18443[(4)]))){
var statearr_18495_20118 = state_18443;
(statearr_18495_20118[(1)] = cljs.core.first((state_18443[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20119 = state_18443;
state_18443 = G__20119;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_18443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_18443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_18496 = f__16417__auto__();
(statearr_18496[(6)] = c__16416__auto___20075);

return statearr_18496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18499 = arguments.length;
switch (G__18499) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18503 = arguments.length;
switch (G__18503) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18506 = arguments.length;
switch (G__18506) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__16416__auto___20131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_18553){
var state_val_18554 = (state_18553[(1)]);
if((state_val_18554 === (7))){
var state_18553__$1 = state_18553;
var statearr_18557_20133 = state_18553__$1;
(statearr_18557_20133[(2)] = null);

(statearr_18557_20133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (1))){
var state_18553__$1 = state_18553;
var statearr_18558_20134 = state_18553__$1;
(statearr_18558_20134[(2)] = null);

(statearr_18558_20134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (4))){
var inst_18511 = (state_18553[(7)]);
var inst_18510 = (state_18553[(8)]);
var inst_18513 = (inst_18511 < inst_18510);
var state_18553__$1 = state_18553;
if(cljs.core.truth_(inst_18513)){
var statearr_18559_20135 = state_18553__$1;
(statearr_18559_20135[(1)] = (6));

} else {
var statearr_18560_20136 = state_18553__$1;
(statearr_18560_20136[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (15))){
var inst_18538 = (state_18553[(9)]);
var inst_18544 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18538);
var state_18553__$1 = state_18553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18553__$1,(17),out,inst_18544);
} else {
if((state_val_18554 === (13))){
var inst_18538 = (state_18553[(9)]);
var inst_18538__$1 = (state_18553[(2)]);
var inst_18539 = cljs.core.some(cljs.core.nil_QMARK_,inst_18538__$1);
var state_18553__$1 = (function (){var statearr_18561 = state_18553;
(statearr_18561[(9)] = inst_18538__$1);

return statearr_18561;
})();
if(cljs.core.truth_(inst_18539)){
var statearr_18562_20138 = state_18553__$1;
(statearr_18562_20138[(1)] = (14));

} else {
var statearr_18563_20140 = state_18553__$1;
(statearr_18563_20140[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (6))){
var state_18553__$1 = state_18553;
var statearr_18564_20141 = state_18553__$1;
(statearr_18564_20141[(2)] = null);

(statearr_18564_20141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (17))){
var inst_18546 = (state_18553[(2)]);
var state_18553__$1 = (function (){var statearr_18566 = state_18553;
(statearr_18566[(10)] = inst_18546);

return statearr_18566;
})();
var statearr_18567_20145 = state_18553__$1;
(statearr_18567_20145[(2)] = null);

(statearr_18567_20145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (3))){
var inst_18551 = (state_18553[(2)]);
var state_18553__$1 = state_18553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18553__$1,inst_18551);
} else {
if((state_val_18554 === (12))){
var _ = (function (){var statearr_18568 = state_18553;
(statearr_18568[(4)] = cljs.core.rest((state_18553[(4)])));

return statearr_18568;
})();
var state_18553__$1 = state_18553;
var ex18565 = (state_18553__$1[(2)]);
var statearr_18569_20146 = state_18553__$1;
(statearr_18569_20146[(5)] = ex18565);


if((ex18565 instanceof Object)){
var statearr_18570_20148 = state_18553__$1;
(statearr_18570_20148[(1)] = (11));

(statearr_18570_20148[(5)] = null);

} else {
throw ex18565;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (2))){
var inst_18509 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18510 = cnt;
var inst_18511 = (0);
var state_18553__$1 = (function (){var statearr_18573 = state_18553;
(statearr_18573[(11)] = inst_18509);

(statearr_18573[(7)] = inst_18511);

(statearr_18573[(8)] = inst_18510);

return statearr_18573;
})();
var statearr_18574_20149 = state_18553__$1;
(statearr_18574_20149[(2)] = null);

(statearr_18574_20149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (11))){
var inst_18517 = (state_18553[(2)]);
var inst_18518 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18553__$1 = (function (){var statearr_18575 = state_18553;
(statearr_18575[(12)] = inst_18517);

return statearr_18575;
})();
var statearr_18576_20151 = state_18553__$1;
(statearr_18576_20151[(2)] = inst_18518);

(statearr_18576_20151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (9))){
var inst_18511 = (state_18553[(7)]);
var _ = (function (){var statearr_18577 = state_18553;
(statearr_18577[(4)] = cljs.core.cons((12),(state_18553[(4)])));

return statearr_18577;
})();
var inst_18524 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18511) : chs__$1.call(null,inst_18511));
var inst_18525 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18511) : done.call(null,inst_18511));
var inst_18526 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18524,inst_18525);
var ___$1 = (function (){var statearr_18578 = state_18553;
(statearr_18578[(4)] = cljs.core.rest((state_18553[(4)])));

return statearr_18578;
})();
var state_18553__$1 = state_18553;
var statearr_18579_20155 = state_18553__$1;
(statearr_18579_20155[(2)] = inst_18526);

(statearr_18579_20155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (5))){
var inst_18536 = (state_18553[(2)]);
var state_18553__$1 = (function (){var statearr_18580 = state_18553;
(statearr_18580[(13)] = inst_18536);

return statearr_18580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18553__$1,(13),dchan);
} else {
if((state_val_18554 === (14))){
var inst_18542 = cljs.core.async.close_BANG_(out);
var state_18553__$1 = state_18553;
var statearr_18581_20157 = state_18553__$1;
(statearr_18581_20157[(2)] = inst_18542);

(statearr_18581_20157[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (16))){
var inst_18549 = (state_18553[(2)]);
var state_18553__$1 = state_18553;
var statearr_18582_20158 = state_18553__$1;
(statearr_18582_20158[(2)] = inst_18549);

(statearr_18582_20158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (10))){
var inst_18511 = (state_18553[(7)]);
var inst_18529 = (state_18553[(2)]);
var inst_18530 = (inst_18511 + (1));
var inst_18511__$1 = inst_18530;
var state_18553__$1 = (function (){var statearr_18583 = state_18553;
(statearr_18583[(7)] = inst_18511__$1);

(statearr_18583[(14)] = inst_18529);

return statearr_18583;
})();
var statearr_18584_20163 = state_18553__$1;
(statearr_18584_20163[(2)] = null);

(statearr_18584_20163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18554 === (8))){
var inst_18534 = (state_18553[(2)]);
var state_18553__$1 = state_18553;
var statearr_18585_20168 = state_18553__$1;
(statearr_18585_20168[(2)] = inst_18534);

(statearr_18585_20168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_18586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18586[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_18586[(1)] = (1));

return statearr_18586;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_18553){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_18553);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e18587){var ex__16185__auto__ = e18587;
var statearr_18588_20175 = state_18553;
(statearr_18588_20175[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_18553[(4)]))){
var statearr_18589_20176 = state_18553;
(statearr_18589_20176[(1)] = cljs.core.first((state_18553[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20179 = state_18553;
state_18553 = G__20179;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_18553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_18553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_18590 = f__16417__auto__();
(statearr_18590[(6)] = c__16416__auto___20131);

return statearr_18590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18593 = arguments.length;
switch (G__18593) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16416__auto___20189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_18641){
var state_val_18642 = (state_18641[(1)]);
if((state_val_18642 === (7))){
var inst_18615 = (state_18641[(7)]);
var inst_18614 = (state_18641[(8)]);
var inst_18614__$1 = (state_18641[(2)]);
var inst_18615__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18614__$1,(0),null);
var inst_18616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18614__$1,(1),null);
var inst_18617 = (inst_18615__$1 == null);
var state_18641__$1 = (function (){var statearr_18646 = state_18641;
(statearr_18646[(7)] = inst_18615__$1);

(statearr_18646[(9)] = inst_18616);

(statearr_18646[(8)] = inst_18614__$1);

return statearr_18646;
})();
if(cljs.core.truth_(inst_18617)){
var statearr_18648_20197 = state_18641__$1;
(statearr_18648_20197[(1)] = (8));

} else {
var statearr_18649_20198 = state_18641__$1;
(statearr_18649_20198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (1))){
var inst_18600 = cljs.core.vec(chs);
var inst_18603 = inst_18600;
var state_18641__$1 = (function (){var statearr_18651 = state_18641;
(statearr_18651[(10)] = inst_18603);

return statearr_18651;
})();
var statearr_18652_20199 = state_18641__$1;
(statearr_18652_20199[(2)] = null);

(statearr_18652_20199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (4))){
var inst_18603 = (state_18641[(10)]);
var state_18641__$1 = state_18641;
return cljs.core.async.ioc_alts_BANG_(state_18641__$1,(7),inst_18603);
} else {
if((state_val_18642 === (6))){
var inst_18635 = (state_18641[(2)]);
var state_18641__$1 = state_18641;
var statearr_18654_20200 = state_18641__$1;
(statearr_18654_20200[(2)] = inst_18635);

(statearr_18654_20200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (3))){
var inst_18637 = (state_18641[(2)]);
var state_18641__$1 = state_18641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18641__$1,inst_18637);
} else {
if((state_val_18642 === (2))){
var inst_18603 = (state_18641[(10)]);
var inst_18606 = cljs.core.count(inst_18603);
var inst_18607 = (inst_18606 > (0));
var state_18641__$1 = state_18641;
if(cljs.core.truth_(inst_18607)){
var statearr_18659_20201 = state_18641__$1;
(statearr_18659_20201[(1)] = (4));

} else {
var statearr_18660_20202 = state_18641__$1;
(statearr_18660_20202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (11))){
var inst_18603 = (state_18641[(10)]);
var inst_18626 = (state_18641[(2)]);
var tmp18655 = inst_18603;
var inst_18603__$1 = tmp18655;
var state_18641__$1 = (function (){var statearr_18662 = state_18641;
(statearr_18662[(11)] = inst_18626);

(statearr_18662[(10)] = inst_18603__$1);

return statearr_18662;
})();
var statearr_18664_20206 = state_18641__$1;
(statearr_18664_20206[(2)] = null);

(statearr_18664_20206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (9))){
var inst_18615 = (state_18641[(7)]);
var state_18641__$1 = state_18641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18641__$1,(11),out,inst_18615);
} else {
if((state_val_18642 === (5))){
var inst_18632 = cljs.core.async.close_BANG_(out);
var state_18641__$1 = state_18641;
var statearr_18672_20214 = state_18641__$1;
(statearr_18672_20214[(2)] = inst_18632);

(statearr_18672_20214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (10))){
var inst_18629 = (state_18641[(2)]);
var state_18641__$1 = state_18641;
var statearr_18674_20216 = state_18641__$1;
(statearr_18674_20216[(2)] = inst_18629);

(statearr_18674_20216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18642 === (8))){
var inst_18615 = (state_18641[(7)]);
var inst_18616 = (state_18641[(9)]);
var inst_18603 = (state_18641[(10)]);
var inst_18614 = (state_18641[(8)]);
var inst_18621 = (function (){var cs = inst_18603;
var vec__18610 = inst_18614;
var v = inst_18615;
var c = inst_18616;
return (function (p1__18591_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18591_SHARP_);
});
})();
var inst_18622 = cljs.core.filterv(inst_18621,inst_18603);
var inst_18603__$1 = inst_18622;
var state_18641__$1 = (function (){var statearr_18679 = state_18641;
(statearr_18679[(10)] = inst_18603__$1);

return statearr_18679;
})();
var statearr_18681_20225 = state_18641__$1;
(statearr_18681_20225[(2)] = null);

(statearr_18681_20225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_18683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18683[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_18683[(1)] = (1));

return statearr_18683;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_18641){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_18641);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e18684){var ex__16185__auto__ = e18684;
var statearr_18687_20233 = state_18641;
(statearr_18687_20233[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_18641[(4)]))){
var statearr_18689_20234 = state_18641;
(statearr_18689_20234[(1)] = cljs.core.first((state_18641[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20235 = state_18641;
state_18641 = G__20235;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_18641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_18641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_18691 = f__16417__auto__();
(statearr_18691[(6)] = c__16416__auto___20189);

return statearr_18691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18701 = arguments.length;
switch (G__18701) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16416__auto___20241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_18735){
var state_val_18736 = (state_18735[(1)]);
if((state_val_18736 === (7))){
var inst_18716 = (state_18735[(7)]);
var inst_18716__$1 = (state_18735[(2)]);
var inst_18717 = (inst_18716__$1 == null);
var inst_18718 = cljs.core.not(inst_18717);
var state_18735__$1 = (function (){var statearr_18740 = state_18735;
(statearr_18740[(7)] = inst_18716__$1);

return statearr_18740;
})();
if(inst_18718){
var statearr_18741_20242 = state_18735__$1;
(statearr_18741_20242[(1)] = (8));

} else {
var statearr_18742_20243 = state_18735__$1;
(statearr_18742_20243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (1))){
var inst_18708 = (0);
var state_18735__$1 = (function (){var statearr_18743 = state_18735;
(statearr_18743[(8)] = inst_18708);

return statearr_18743;
})();
var statearr_18744_20244 = state_18735__$1;
(statearr_18744_20244[(2)] = null);

(statearr_18744_20244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (4))){
var state_18735__$1 = state_18735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18735__$1,(7),ch);
} else {
if((state_val_18736 === (6))){
var inst_18730 = (state_18735[(2)]);
var state_18735__$1 = state_18735;
var statearr_18745_20245 = state_18735__$1;
(statearr_18745_20245[(2)] = inst_18730);

(statearr_18745_20245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (3))){
var inst_18732 = (state_18735[(2)]);
var inst_18733 = cljs.core.async.close_BANG_(out);
var state_18735__$1 = (function (){var statearr_18747 = state_18735;
(statearr_18747[(9)] = inst_18732);

return statearr_18747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18735__$1,inst_18733);
} else {
if((state_val_18736 === (2))){
var inst_18708 = (state_18735[(8)]);
var inst_18713 = (inst_18708 < n);
var state_18735__$1 = state_18735;
if(cljs.core.truth_(inst_18713)){
var statearr_18749_20250 = state_18735__$1;
(statearr_18749_20250[(1)] = (4));

} else {
var statearr_18750_20254 = state_18735__$1;
(statearr_18750_20254[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (11))){
var inst_18708 = (state_18735[(8)]);
var inst_18721 = (state_18735[(2)]);
var inst_18723 = (inst_18708 + (1));
var inst_18708__$1 = inst_18723;
var state_18735__$1 = (function (){var statearr_18752 = state_18735;
(statearr_18752[(8)] = inst_18708__$1);

(statearr_18752[(10)] = inst_18721);

return statearr_18752;
})();
var statearr_18754_20255 = state_18735__$1;
(statearr_18754_20255[(2)] = null);

(statearr_18754_20255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (9))){
var state_18735__$1 = state_18735;
var statearr_18760_20256 = state_18735__$1;
(statearr_18760_20256[(2)] = null);

(statearr_18760_20256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (5))){
var state_18735__$1 = state_18735;
var statearr_18762_20257 = state_18735__$1;
(statearr_18762_20257[(2)] = null);

(statearr_18762_20257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (10))){
var inst_18727 = (state_18735[(2)]);
var state_18735__$1 = state_18735;
var statearr_18764_20260 = state_18735__$1;
(statearr_18764_20260[(2)] = inst_18727);

(statearr_18764_20260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (8))){
var inst_18716 = (state_18735[(7)]);
var state_18735__$1 = state_18735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18735__$1,(11),out,inst_18716);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_18769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18769[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_18769[(1)] = (1));

return statearr_18769;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_18735){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_18735);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e18773){var ex__16185__auto__ = e18773;
var statearr_18774_20266 = state_18735;
(statearr_18774_20266[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_18735[(4)]))){
var statearr_18775_20270 = state_18735;
(statearr_18775_20270[(1)] = cljs.core.first((state_18735[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20271 = state_18735;
state_18735 = G__20271;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_18735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_18735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_18780 = f__16417__auto__();
(statearr_18780[(6)] = c__16416__auto___20241);

return statearr_18780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18794 = (function (f,ch,meta18789,_,fn1,meta18795){
this.f = f;
this.ch = ch;
this.meta18789 = meta18789;
this._ = _;
this.fn1 = fn1;
this.meta18795 = meta18795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18796,meta18795__$1){
var self__ = this;
var _18796__$1 = this;
return (new cljs.core.async.t_cljs$core$async18794(self__.f,self__.ch,self__.meta18789,self__._,self__.fn1,meta18795__$1));
}));

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18796){
var self__ = this;
var _18796__$1 = this;
return self__.meta18795;
}));

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18786_SHARP_){
var G__18811 = (((p1__18786_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18786_SHARP_) : self__.f.call(null,p1__18786_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18811) : f1.call(null,G__18811));
});
}));

(cljs.core.async.t_cljs$core$async18794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18789","meta18789",251004400,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18788","cljs.core.async/t_cljs$core$async18788",-453278675,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18795","meta18795",1334808094,null)], null);
}));

(cljs.core.async.t_cljs$core$async18794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18794");

(cljs.core.async.t_cljs$core$async18794.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18794.
 */
cljs.core.async.__GT_t_cljs$core$async18794 = (function cljs$core$async$__GT_t_cljs$core$async18794(f,ch,meta18789,_,fn1,meta18795){
return (new cljs.core.async.t_cljs$core$async18794(f,ch,meta18789,_,fn1,meta18795));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18788 = (function (f,ch,meta18789){
this.f = f;
this.ch = ch;
this.meta18789 = meta18789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18790,meta18789__$1){
var self__ = this;
var _18790__$1 = this;
return (new cljs.core.async.t_cljs$core$async18788(self__.f,self__.ch,meta18789__$1));
}));

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18790){
var self__ = this;
var _18790__$1 = this;
return self__.meta18789;
}));

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18794(self__.f,self__.ch,self__.meta18789,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18826 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18826) : self__.f.call(null,G__18826));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18789","meta18789",251004400,null)], null);
}));

(cljs.core.async.t_cljs$core$async18788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18788");

(cljs.core.async.t_cljs$core$async18788.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18788.
 */
cljs.core.async.__GT_t_cljs$core$async18788 = (function cljs$core$async$__GT_t_cljs$core$async18788(f,ch,meta18789){
return (new cljs.core.async.t_cljs$core$async18788(f,ch,meta18789));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18788(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18843 = (function (f,ch,meta18844){
this.f = f;
this.ch = ch;
this.meta18844 = meta18844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18845,meta18844__$1){
var self__ = this;
var _18845__$1 = this;
return (new cljs.core.async.t_cljs$core$async18843(self__.f,self__.ch,meta18844__$1));
}));

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18845){
var self__ = this;
var _18845__$1 = this;
return self__.meta18844;
}));

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18844","meta18844",-317508697,null)], null);
}));

(cljs.core.async.t_cljs$core$async18843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18843");

(cljs.core.async.t_cljs$core$async18843.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18843.
 */
cljs.core.async.__GT_t_cljs$core$async18843 = (function cljs$core$async$__GT_t_cljs$core$async18843(f,ch,meta18844){
return (new cljs.core.async.t_cljs$core$async18843(f,ch,meta18844));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18843(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18869 = (function (p,ch,meta18870){
this.p = p;
this.ch = ch;
this.meta18870 = meta18870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18871,meta18870__$1){
var self__ = this;
var _18871__$1 = this;
return (new cljs.core.async.t_cljs$core$async18869(self__.p,self__.ch,meta18870__$1));
}));

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18871){
var self__ = this;
var _18871__$1 = this;
return self__.meta18870;
}));

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18870","meta18870",-1882133341,null)], null);
}));

(cljs.core.async.t_cljs$core$async18869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18869");

(cljs.core.async.t_cljs$core$async18869.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18869.
 */
cljs.core.async.__GT_t_cljs$core$async18869 = (function cljs$core$async$__GT_t_cljs$core$async18869(p,ch,meta18870){
return (new cljs.core.async.t_cljs$core$async18869(p,ch,meta18870));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18869(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18914 = arguments.length;
switch (G__18914) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16416__auto___20297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_18947){
var state_val_18948 = (state_18947[(1)]);
if((state_val_18948 === (7))){
var inst_18942 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
var statearr_18956_20298 = state_18947__$1;
(statearr_18956_20298[(2)] = inst_18942);

(statearr_18956_20298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (1))){
var state_18947__$1 = state_18947;
var statearr_18957_20300 = state_18947__$1;
(statearr_18957_20300[(2)] = null);

(statearr_18957_20300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (4))){
var inst_18925 = (state_18947[(7)]);
var inst_18925__$1 = (state_18947[(2)]);
var inst_18927 = (inst_18925__$1 == null);
var state_18947__$1 = (function (){var statearr_18958 = state_18947;
(statearr_18958[(7)] = inst_18925__$1);

return statearr_18958;
})();
if(cljs.core.truth_(inst_18927)){
var statearr_18959_20301 = state_18947__$1;
(statearr_18959_20301[(1)] = (5));

} else {
var statearr_18960_20302 = state_18947__$1;
(statearr_18960_20302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (6))){
var inst_18925 = (state_18947[(7)]);
var inst_18931 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18925) : p.call(null,inst_18925));
var state_18947__$1 = state_18947;
if(cljs.core.truth_(inst_18931)){
var statearr_18962_20304 = state_18947__$1;
(statearr_18962_20304[(1)] = (8));

} else {
var statearr_18963_20305 = state_18947__$1;
(statearr_18963_20305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (3))){
var inst_18944 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18947__$1,inst_18944);
} else {
if((state_val_18948 === (2))){
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18947__$1,(4),ch);
} else {
if((state_val_18948 === (11))){
var inst_18934 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
var statearr_18968_20306 = state_18947__$1;
(statearr_18968_20306[(2)] = inst_18934);

(statearr_18968_20306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (9))){
var state_18947__$1 = state_18947;
var statearr_18969_20307 = state_18947__$1;
(statearr_18969_20307[(2)] = null);

(statearr_18969_20307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (5))){
var inst_18929 = cljs.core.async.close_BANG_(out);
var state_18947__$1 = state_18947;
var statearr_18971_20308 = state_18947__$1;
(statearr_18971_20308[(2)] = inst_18929);

(statearr_18971_20308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (10))){
var inst_18938 = (state_18947[(2)]);
var state_18947__$1 = (function (){var statearr_18972 = state_18947;
(statearr_18972[(8)] = inst_18938);

return statearr_18972;
})();
var statearr_18973_20309 = state_18947__$1;
(statearr_18973_20309[(2)] = null);

(statearr_18973_20309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (8))){
var inst_18925 = (state_18947[(7)]);
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18947__$1,(11),out,inst_18925);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_18978 = [null,null,null,null,null,null,null,null,null];
(statearr_18978[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_18978[(1)] = (1));

return statearr_18978;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_18947){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_18947);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e18979){var ex__16185__auto__ = e18979;
var statearr_18980_20314 = state_18947;
(statearr_18980_20314[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_18947[(4)]))){
var statearr_18981_20315 = state_18947;
(statearr_18981_20315[(1)] = cljs.core.first((state_18947[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20316 = state_18947;
state_18947 = G__20316;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_18947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_18947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_18983 = f__16417__auto__();
(statearr_18983[(6)] = c__16416__auto___20297);

return statearr_18983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18989 = arguments.length;
switch (G__18989) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_19082){
var state_val_19086 = (state_19082[(1)]);
if((state_val_19086 === (7))){
var inst_19078 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
var statearr_19093_20321 = state_19082__$1;
(statearr_19093_20321[(2)] = inst_19078);

(statearr_19093_20321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (20))){
var inst_19046 = (state_19082[(7)]);
var inst_19059 = (state_19082[(2)]);
var inst_19060 = cljs.core.next(inst_19046);
var inst_19024 = inst_19060;
var inst_19025 = null;
var inst_19026 = (0);
var inst_19027 = (0);
var state_19082__$1 = (function (){var statearr_19095 = state_19082;
(statearr_19095[(8)] = inst_19027);

(statearr_19095[(9)] = inst_19026);

(statearr_19095[(10)] = inst_19059);

(statearr_19095[(11)] = inst_19025);

(statearr_19095[(12)] = inst_19024);

return statearr_19095;
})();
var statearr_19096_20324 = state_19082__$1;
(statearr_19096_20324[(2)] = null);

(statearr_19096_20324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (1))){
var state_19082__$1 = state_19082;
var statearr_19100_20327 = state_19082__$1;
(statearr_19100_20327[(2)] = null);

(statearr_19100_20327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (4))){
var inst_19009 = (state_19082[(13)]);
var inst_19009__$1 = (state_19082[(2)]);
var inst_19011 = (inst_19009__$1 == null);
var state_19082__$1 = (function (){var statearr_19102 = state_19082;
(statearr_19102[(13)] = inst_19009__$1);

return statearr_19102;
})();
if(cljs.core.truth_(inst_19011)){
var statearr_19103_20329 = state_19082__$1;
(statearr_19103_20329[(1)] = (5));

} else {
var statearr_19104_20330 = state_19082__$1;
(statearr_19104_20330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (15))){
var state_19082__$1 = state_19082;
var statearr_19110_20331 = state_19082__$1;
(statearr_19110_20331[(2)] = null);

(statearr_19110_20331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (21))){
var state_19082__$1 = state_19082;
var statearr_19111_20333 = state_19082__$1;
(statearr_19111_20333[(2)] = null);

(statearr_19111_20333[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (13))){
var inst_19027 = (state_19082[(8)]);
var inst_19026 = (state_19082[(9)]);
var inst_19025 = (state_19082[(11)]);
var inst_19024 = (state_19082[(12)]);
var inst_19039 = (state_19082[(2)]);
var inst_19043 = (inst_19027 + (1));
var tmp19107 = inst_19026;
var tmp19108 = inst_19025;
var tmp19109 = inst_19024;
var inst_19024__$1 = tmp19109;
var inst_19025__$1 = tmp19108;
var inst_19026__$1 = tmp19107;
var inst_19027__$1 = inst_19043;
var state_19082__$1 = (function (){var statearr_19113 = state_19082;
(statearr_19113[(14)] = inst_19039);

(statearr_19113[(8)] = inst_19027__$1);

(statearr_19113[(9)] = inst_19026__$1);

(statearr_19113[(11)] = inst_19025__$1);

(statearr_19113[(12)] = inst_19024__$1);

return statearr_19113;
})();
var statearr_19114_20334 = state_19082__$1;
(statearr_19114_20334[(2)] = null);

(statearr_19114_20334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (22))){
var state_19082__$1 = state_19082;
var statearr_19120_20335 = state_19082__$1;
(statearr_19120_20335[(2)] = null);

(statearr_19120_20335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (6))){
var inst_19009 = (state_19082[(13)]);
var inst_19020 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19009) : f.call(null,inst_19009));
var inst_19022 = cljs.core.seq(inst_19020);
var inst_19024 = inst_19022;
var inst_19025 = null;
var inst_19026 = (0);
var inst_19027 = (0);
var state_19082__$1 = (function (){var statearr_19127 = state_19082;
(statearr_19127[(8)] = inst_19027);

(statearr_19127[(9)] = inst_19026);

(statearr_19127[(11)] = inst_19025);

(statearr_19127[(12)] = inst_19024);

return statearr_19127;
})();
var statearr_19128_20338 = state_19082__$1;
(statearr_19128_20338[(2)] = null);

(statearr_19128_20338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (17))){
var inst_19046 = (state_19082[(7)]);
var inst_19051 = cljs.core.chunk_first(inst_19046);
var inst_19053 = cljs.core.chunk_rest(inst_19046);
var inst_19054 = cljs.core.count(inst_19051);
var inst_19024 = inst_19053;
var inst_19025 = inst_19051;
var inst_19026 = inst_19054;
var inst_19027 = (0);
var state_19082__$1 = (function (){var statearr_19129 = state_19082;
(statearr_19129[(8)] = inst_19027);

(statearr_19129[(9)] = inst_19026);

(statearr_19129[(11)] = inst_19025);

(statearr_19129[(12)] = inst_19024);

return statearr_19129;
})();
var statearr_19133_20341 = state_19082__$1;
(statearr_19133_20341[(2)] = null);

(statearr_19133_20341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (3))){
var inst_19080 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19082__$1,inst_19080);
} else {
if((state_val_19086 === (12))){
var inst_19068 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
var statearr_19137_20344 = state_19082__$1;
(statearr_19137_20344[(2)] = inst_19068);

(statearr_19137_20344[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (2))){
var state_19082__$1 = state_19082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19082__$1,(4),in$);
} else {
if((state_val_19086 === (23))){
var inst_19076 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
var statearr_19142_20345 = state_19082__$1;
(statearr_19142_20345[(2)] = inst_19076);

(statearr_19142_20345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (19))){
var inst_19063 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
var statearr_19143_20346 = state_19082__$1;
(statearr_19143_20346[(2)] = inst_19063);

(statearr_19143_20346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (11))){
var inst_19046 = (state_19082[(7)]);
var inst_19024 = (state_19082[(12)]);
var inst_19046__$1 = cljs.core.seq(inst_19024);
var state_19082__$1 = (function (){var statearr_19150 = state_19082;
(statearr_19150[(7)] = inst_19046__$1);

return statearr_19150;
})();
if(inst_19046__$1){
var statearr_19151_20348 = state_19082__$1;
(statearr_19151_20348[(1)] = (14));

} else {
var statearr_19152_20349 = state_19082__$1;
(statearr_19152_20349[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (9))){
var inst_19070 = (state_19082[(2)]);
var inst_19071 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19082__$1 = (function (){var statearr_19153 = state_19082;
(statearr_19153[(15)] = inst_19070);

return statearr_19153;
})();
if(cljs.core.truth_(inst_19071)){
var statearr_19154_20353 = state_19082__$1;
(statearr_19154_20353[(1)] = (21));

} else {
var statearr_19156_20354 = state_19082__$1;
(statearr_19156_20354[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (5))){
var inst_19014 = cljs.core.async.close_BANG_(out);
var state_19082__$1 = state_19082;
var statearr_19158_20355 = state_19082__$1;
(statearr_19158_20355[(2)] = inst_19014);

(statearr_19158_20355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (14))){
var inst_19046 = (state_19082[(7)]);
var inst_19049 = cljs.core.chunked_seq_QMARK_(inst_19046);
var state_19082__$1 = state_19082;
if(inst_19049){
var statearr_19159_20356 = state_19082__$1;
(statearr_19159_20356[(1)] = (17));

} else {
var statearr_19160_20357 = state_19082__$1;
(statearr_19160_20357[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (16))){
var inst_19066 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
var statearr_19165_20358 = state_19082__$1;
(statearr_19165_20358[(2)] = inst_19066);

(statearr_19165_20358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (10))){
var inst_19027 = (state_19082[(8)]);
var inst_19025 = (state_19082[(11)]);
var inst_19037 = cljs.core._nth(inst_19025,inst_19027);
var state_19082__$1 = state_19082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19082__$1,(13),out,inst_19037);
} else {
if((state_val_19086 === (18))){
var inst_19046 = (state_19082[(7)]);
var inst_19057 = cljs.core.first(inst_19046);
var state_19082__$1 = state_19082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19082__$1,(20),out,inst_19057);
} else {
if((state_val_19086 === (8))){
var inst_19027 = (state_19082[(8)]);
var inst_19026 = (state_19082[(9)]);
var inst_19029 = (inst_19027 < inst_19026);
var inst_19030 = inst_19029;
var state_19082__$1 = state_19082;
if(cljs.core.truth_(inst_19030)){
var statearr_19174_20368 = state_19082__$1;
(statearr_19174_20368[(1)] = (10));

} else {
var statearr_19175_20369 = state_19082__$1;
(statearr_19175_20369[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16182__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16182__auto____0 = (function (){
var statearr_19188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19188[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16182__auto__);

(statearr_19188[(1)] = (1));

return statearr_19188;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16182__auto____1 = (function (state_19082){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_19082);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e19190){var ex__16185__auto__ = e19190;
var statearr_19191_20370 = state_19082;
(statearr_19191_20370[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_19082[(4)]))){
var statearr_19192_20371 = state_19082;
(statearr_19192_20371[(1)] = cljs.core.first((state_19082[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20373 = state_19082;
state_19082 = G__20373;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16182__auto__ = function(state_19082){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16182__auto____1.call(this,state_19082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16182__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16182__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_19198 = f__16417__auto__();
(statearr_19198[(6)] = c__16416__auto__);

return statearr_19198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));

return c__16416__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19206 = arguments.length;
switch (G__19206) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19229 = arguments.length;
switch (G__19229) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19244 = arguments.length;
switch (G__19244) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16416__auto___20377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_19273){
var state_val_19274 = (state_19273[(1)]);
if((state_val_19274 === (7))){
var inst_19267 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19275_20378 = state_19273__$1;
(statearr_19275_20378[(2)] = inst_19267);

(statearr_19275_20378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (1))){
var inst_19249 = null;
var state_19273__$1 = (function (){var statearr_19276 = state_19273;
(statearr_19276[(7)] = inst_19249);

return statearr_19276;
})();
var statearr_19277_20380 = state_19273__$1;
(statearr_19277_20380[(2)] = null);

(statearr_19277_20380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (4))){
var inst_19252 = (state_19273[(8)]);
var inst_19252__$1 = (state_19273[(2)]);
var inst_19253 = (inst_19252__$1 == null);
var inst_19254 = cljs.core.not(inst_19253);
var state_19273__$1 = (function (){var statearr_19279 = state_19273;
(statearr_19279[(8)] = inst_19252__$1);

return statearr_19279;
})();
if(inst_19254){
var statearr_19280_20381 = state_19273__$1;
(statearr_19280_20381[(1)] = (5));

} else {
var statearr_19283_20382 = state_19273__$1;
(statearr_19283_20382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (6))){
var state_19273__$1 = state_19273;
var statearr_19287_20383 = state_19273__$1;
(statearr_19287_20383[(2)] = null);

(statearr_19287_20383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (3))){
var inst_19269 = (state_19273[(2)]);
var inst_19271 = cljs.core.async.close_BANG_(out);
var state_19273__$1 = (function (){var statearr_19290 = state_19273;
(statearr_19290[(9)] = inst_19269);

return statearr_19290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19273__$1,inst_19271);
} else {
if((state_val_19274 === (2))){
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19273__$1,(4),ch);
} else {
if((state_val_19274 === (11))){
var inst_19252 = (state_19273[(8)]);
var inst_19261 = (state_19273[(2)]);
var inst_19249 = inst_19252;
var state_19273__$1 = (function (){var statearr_19291 = state_19273;
(statearr_19291[(10)] = inst_19261);

(statearr_19291[(7)] = inst_19249);

return statearr_19291;
})();
var statearr_19292_20387 = state_19273__$1;
(statearr_19292_20387[(2)] = null);

(statearr_19292_20387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (9))){
var inst_19252 = (state_19273[(8)]);
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19273__$1,(11),out,inst_19252);
} else {
if((state_val_19274 === (5))){
var inst_19252 = (state_19273[(8)]);
var inst_19249 = (state_19273[(7)]);
var inst_19256 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19252,inst_19249);
var state_19273__$1 = state_19273;
if(inst_19256){
var statearr_19294_20390 = state_19273__$1;
(statearr_19294_20390[(1)] = (8));

} else {
var statearr_19295_20391 = state_19273__$1;
(statearr_19295_20391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (10))){
var inst_19264 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
var statearr_19296_20392 = state_19273__$1;
(statearr_19296_20392[(2)] = inst_19264);

(statearr_19296_20392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19274 === (8))){
var inst_19249 = (state_19273[(7)]);
var tmp19293 = inst_19249;
var inst_19249__$1 = tmp19293;
var state_19273__$1 = (function (){var statearr_19297 = state_19273;
(statearr_19297[(7)] = inst_19249__$1);

return statearr_19297;
})();
var statearr_19298_20393 = state_19273__$1;
(statearr_19298_20393[(2)] = null);

(statearr_19298_20393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_19299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19299[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_19299[(1)] = (1));

return statearr_19299;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_19273){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_19273);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e19300){var ex__16185__auto__ = e19300;
var statearr_19301_20394 = state_19273;
(statearr_19301_20394[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_19273[(4)]))){
var statearr_19302_20395 = state_19273;
(statearr_19302_20395[(1)] = cljs.core.first((state_19273[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20397 = state_19273;
state_19273 = G__20397;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_19273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_19273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_19303 = f__16417__auto__();
(statearr_19303[(6)] = c__16416__auto___20377);

return statearr_19303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19305 = arguments.length;
switch (G__19305) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16416__auto___20404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_19343){
var state_val_19344 = (state_19343[(1)]);
if((state_val_19344 === (7))){
var inst_19339 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
var statearr_19347_20405 = state_19343__$1;
(statearr_19347_20405[(2)] = inst_19339);

(statearr_19347_20405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (1))){
var inst_19306 = (new Array(n));
var inst_19307 = inst_19306;
var inst_19308 = (0);
var state_19343__$1 = (function (){var statearr_19348 = state_19343;
(statearr_19348[(7)] = inst_19307);

(statearr_19348[(8)] = inst_19308);

return statearr_19348;
})();
var statearr_19349_20406 = state_19343__$1;
(statearr_19349_20406[(2)] = null);

(statearr_19349_20406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (4))){
var inst_19311 = (state_19343[(9)]);
var inst_19311__$1 = (state_19343[(2)]);
var inst_19312 = (inst_19311__$1 == null);
var inst_19313 = cljs.core.not(inst_19312);
var state_19343__$1 = (function (){var statearr_19350 = state_19343;
(statearr_19350[(9)] = inst_19311__$1);

return statearr_19350;
})();
if(inst_19313){
var statearr_19351_20407 = state_19343__$1;
(statearr_19351_20407[(1)] = (5));

} else {
var statearr_19352_20409 = state_19343__$1;
(statearr_19352_20409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (15))){
var inst_19333 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
var statearr_19353_20410 = state_19343__$1;
(statearr_19353_20410[(2)] = inst_19333);

(statearr_19353_20410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (13))){
var state_19343__$1 = state_19343;
var statearr_19354_20413 = state_19343__$1;
(statearr_19354_20413[(2)] = null);

(statearr_19354_20413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (6))){
var inst_19308 = (state_19343[(8)]);
var inst_19329 = (inst_19308 > (0));
var state_19343__$1 = state_19343;
if(cljs.core.truth_(inst_19329)){
var statearr_19356_20414 = state_19343__$1;
(statearr_19356_20414[(1)] = (12));

} else {
var statearr_19357_20415 = state_19343__$1;
(statearr_19357_20415[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (3))){
var inst_19341 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19343__$1,inst_19341);
} else {
if((state_val_19344 === (12))){
var inst_19307 = (state_19343[(7)]);
var inst_19331 = cljs.core.vec(inst_19307);
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19343__$1,(15),out,inst_19331);
} else {
if((state_val_19344 === (2))){
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19343__$1,(4),ch);
} else {
if((state_val_19344 === (11))){
var inst_19323 = (state_19343[(2)]);
var inst_19324 = (new Array(n));
var inst_19307 = inst_19324;
var inst_19308 = (0);
var state_19343__$1 = (function (){var statearr_19359 = state_19343;
(statearr_19359[(10)] = inst_19323);

(statearr_19359[(7)] = inst_19307);

(statearr_19359[(8)] = inst_19308);

return statearr_19359;
})();
var statearr_19360_20416 = state_19343__$1;
(statearr_19360_20416[(2)] = null);

(statearr_19360_20416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (9))){
var inst_19307 = (state_19343[(7)]);
var inst_19321 = cljs.core.vec(inst_19307);
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19343__$1,(11),out,inst_19321);
} else {
if((state_val_19344 === (5))){
var inst_19311 = (state_19343[(9)]);
var inst_19307 = (state_19343[(7)]);
var inst_19316 = (state_19343[(11)]);
var inst_19308 = (state_19343[(8)]);
var inst_19315 = (inst_19307[inst_19308] = inst_19311);
var inst_19316__$1 = (inst_19308 + (1));
var inst_19317 = (inst_19316__$1 < n);
var state_19343__$1 = (function (){var statearr_19361 = state_19343;
(statearr_19361[(12)] = inst_19315);

(statearr_19361[(11)] = inst_19316__$1);

return statearr_19361;
})();
if(cljs.core.truth_(inst_19317)){
var statearr_19362_20424 = state_19343__$1;
(statearr_19362_20424[(1)] = (8));

} else {
var statearr_19363_20425 = state_19343__$1;
(statearr_19363_20425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (14))){
var inst_19336 = (state_19343[(2)]);
var inst_19337 = cljs.core.async.close_BANG_(out);
var state_19343__$1 = (function (){var statearr_19366 = state_19343;
(statearr_19366[(13)] = inst_19336);

return statearr_19366;
})();
var statearr_19368_20426 = state_19343__$1;
(statearr_19368_20426[(2)] = inst_19337);

(statearr_19368_20426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (10))){
var inst_19327 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
var statearr_19369_20427 = state_19343__$1;
(statearr_19369_20427[(2)] = inst_19327);

(statearr_19369_20427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (8))){
var inst_19307 = (state_19343[(7)]);
var inst_19316 = (state_19343[(11)]);
var tmp19365 = inst_19307;
var inst_19307__$1 = tmp19365;
var inst_19308 = inst_19316;
var state_19343__$1 = (function (){var statearr_19370 = state_19343;
(statearr_19370[(7)] = inst_19307__$1);

(statearr_19370[(8)] = inst_19308);

return statearr_19370;
})();
var statearr_19371_20429 = state_19343__$1;
(statearr_19371_20429[(2)] = null);

(statearr_19371_20429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_19375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19375[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_19375[(1)] = (1));

return statearr_19375;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_19343){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_19343);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e19376){var ex__16185__auto__ = e19376;
var statearr_19377_20437 = state_19343;
(statearr_19377_20437[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_19343[(4)]))){
var statearr_19378_20439 = state_19343;
(statearr_19378_20439[(1)] = cljs.core.first((state_19343[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20449 = state_19343;
state_19343 = G__20449;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_19343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_19343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_19379 = f__16417__auto__();
(statearr_19379[(6)] = c__16416__auto___20404);

return statearr_19379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19384 = arguments.length;
switch (G__19384) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16416__auto___20451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16417__auto__ = (function (){var switch__16181__auto__ = (function (state_19436){
var state_val_19437 = (state_19436[(1)]);
if((state_val_19437 === (7))){
var inst_19429 = (state_19436[(2)]);
var state_19436__$1 = state_19436;
var statearr_19439_20452 = state_19436__$1;
(statearr_19439_20452[(2)] = inst_19429);

(statearr_19439_20452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (1))){
var inst_19388 = [];
var inst_19389 = inst_19388;
var inst_19390 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19436__$1 = (function (){var statearr_19441 = state_19436;
(statearr_19441[(7)] = inst_19389);

(statearr_19441[(8)] = inst_19390);

return statearr_19441;
})();
var statearr_19443_20458 = state_19436__$1;
(statearr_19443_20458[(2)] = null);

(statearr_19443_20458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (4))){
var inst_19393 = (state_19436[(9)]);
var inst_19393__$1 = (state_19436[(2)]);
var inst_19394 = (inst_19393__$1 == null);
var inst_19395 = cljs.core.not(inst_19394);
var state_19436__$1 = (function (){var statearr_19445 = state_19436;
(statearr_19445[(9)] = inst_19393__$1);

return statearr_19445;
})();
if(inst_19395){
var statearr_19448_20459 = state_19436__$1;
(statearr_19448_20459[(1)] = (5));

} else {
var statearr_19450_20460 = state_19436__$1;
(statearr_19450_20460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (15))){
var inst_19389 = (state_19436[(7)]);
var inst_19421 = cljs.core.vec(inst_19389);
var state_19436__$1 = state_19436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19436__$1,(18),out,inst_19421);
} else {
if((state_val_19437 === (13))){
var inst_19415 = (state_19436[(2)]);
var state_19436__$1 = state_19436;
var statearr_19451_20461 = state_19436__$1;
(statearr_19451_20461[(2)] = inst_19415);

(statearr_19451_20461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (6))){
var inst_19389 = (state_19436[(7)]);
var inst_19417 = inst_19389.length;
var inst_19418 = (inst_19417 > (0));
var state_19436__$1 = state_19436;
if(cljs.core.truth_(inst_19418)){
var statearr_19452_20467 = state_19436__$1;
(statearr_19452_20467[(1)] = (15));

} else {
var statearr_19453_20474 = state_19436__$1;
(statearr_19453_20474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (17))){
var inst_19426 = (state_19436[(2)]);
var inst_19427 = cljs.core.async.close_BANG_(out);
var state_19436__$1 = (function (){var statearr_19457 = state_19436;
(statearr_19457[(10)] = inst_19426);

return statearr_19457;
})();
var statearr_19458_20475 = state_19436__$1;
(statearr_19458_20475[(2)] = inst_19427);

(statearr_19458_20475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (3))){
var inst_19431 = (state_19436[(2)]);
var state_19436__$1 = state_19436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19436__$1,inst_19431);
} else {
if((state_val_19437 === (12))){
var inst_19389 = (state_19436[(7)]);
var inst_19408 = cljs.core.vec(inst_19389);
var state_19436__$1 = state_19436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19436__$1,(14),out,inst_19408);
} else {
if((state_val_19437 === (2))){
var state_19436__$1 = state_19436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19436__$1,(4),ch);
} else {
if((state_val_19437 === (11))){
var inst_19389 = (state_19436[(7)]);
var inst_19397 = (state_19436[(11)]);
var inst_19393 = (state_19436[(9)]);
var inst_19405 = inst_19389.push(inst_19393);
var tmp19459 = inst_19389;
var inst_19389__$1 = tmp19459;
var inst_19390 = inst_19397;
var state_19436__$1 = (function (){var statearr_19460 = state_19436;
(statearr_19460[(7)] = inst_19389__$1);

(statearr_19460[(8)] = inst_19390);

(statearr_19460[(12)] = inst_19405);

return statearr_19460;
})();
var statearr_19461_20477 = state_19436__$1;
(statearr_19461_20477[(2)] = null);

(statearr_19461_20477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (9))){
var inst_19390 = (state_19436[(8)]);
var inst_19401 = cljs.core.keyword_identical_QMARK_(inst_19390,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19436__$1 = state_19436;
var statearr_19462_20478 = state_19436__$1;
(statearr_19462_20478[(2)] = inst_19401);

(statearr_19462_20478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (5))){
var inst_19397 = (state_19436[(11)]);
var inst_19398 = (state_19436[(13)]);
var inst_19390 = (state_19436[(8)]);
var inst_19393 = (state_19436[(9)]);
var inst_19397__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19393) : f.call(null,inst_19393));
var inst_19398__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19397__$1,inst_19390);
var state_19436__$1 = (function (){var statearr_19470 = state_19436;
(statearr_19470[(11)] = inst_19397__$1);

(statearr_19470[(13)] = inst_19398__$1);

return statearr_19470;
})();
if(inst_19398__$1){
var statearr_19477_20479 = state_19436__$1;
(statearr_19477_20479[(1)] = (8));

} else {
var statearr_19478_20480 = state_19436__$1;
(statearr_19478_20480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (14))){
var inst_19397 = (state_19436[(11)]);
var inst_19393 = (state_19436[(9)]);
var inst_19410 = (state_19436[(2)]);
var inst_19411 = [];
var inst_19412 = inst_19411.push(inst_19393);
var inst_19389 = inst_19411;
var inst_19390 = inst_19397;
var state_19436__$1 = (function (){var statearr_19479 = state_19436;
(statearr_19479[(14)] = inst_19410);

(statearr_19479[(7)] = inst_19389);

(statearr_19479[(8)] = inst_19390);

(statearr_19479[(15)] = inst_19412);

return statearr_19479;
})();
var statearr_19486_20481 = state_19436__$1;
(statearr_19486_20481[(2)] = null);

(statearr_19486_20481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (16))){
var state_19436__$1 = state_19436;
var statearr_19487_20482 = state_19436__$1;
(statearr_19487_20482[(2)] = null);

(statearr_19487_20482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (10))){
var inst_19403 = (state_19436[(2)]);
var state_19436__$1 = state_19436;
if(cljs.core.truth_(inst_19403)){
var statearr_19488_20483 = state_19436__$1;
(statearr_19488_20483[(1)] = (11));

} else {
var statearr_19489_20484 = state_19436__$1;
(statearr_19489_20484[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (18))){
var inst_19423 = (state_19436[(2)]);
var state_19436__$1 = state_19436;
var statearr_19490_20487 = state_19436__$1;
(statearr_19490_20487[(2)] = inst_19423);

(statearr_19490_20487[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19437 === (8))){
var inst_19398 = (state_19436[(13)]);
var state_19436__$1 = state_19436;
var statearr_19491_20488 = state_19436__$1;
(statearr_19491_20488[(2)] = inst_19398);

(statearr_19491_20488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16182__auto__ = null;
var cljs$core$async$state_machine__16182__auto____0 = (function (){
var statearr_19499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19499[(0)] = cljs$core$async$state_machine__16182__auto__);

(statearr_19499[(1)] = (1));

return statearr_19499;
});
var cljs$core$async$state_machine__16182__auto____1 = (function (state_19436){
while(true){
var ret_value__16183__auto__ = (function (){try{while(true){
var result__16184__auto__ = switch__16181__auto__(state_19436);
if(cljs.core.keyword_identical_QMARK_(result__16184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16184__auto__;
}
break;
}
}catch (e19503){var ex__16185__auto__ = e19503;
var statearr_19504_20494 = state_19436;
(statearr_19504_20494[(2)] = ex__16185__auto__);


if(cljs.core.seq((state_19436[(4)]))){
var statearr_19505_20495 = state_19436;
(statearr_19505_20495[(1)] = cljs.core.first((state_19436[(4)])));

} else {
throw ex__16185__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20496 = state_19436;
state_19436 = G__20496;
continue;
} else {
return ret_value__16183__auto__;
}
break;
}
});
cljs$core$async$state_machine__16182__auto__ = function(state_19436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16182__auto____1.call(this,state_19436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16182__auto____0;
cljs$core$async$state_machine__16182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16182__auto____1;
return cljs$core$async$state_machine__16182__auto__;
})()
})();
var state__16418__auto__ = (function (){var statearr_19509 = f__16417__auto__();
(statearr_19509[(6)] = c__16416__auto___20451);

return statearr_19509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16418__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
