/**
  * vue2-auto-form v1.0.0
  * (c) 2018 vinhjaxt
  * @license MIT
  */
   
var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = 'object' === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) { continue; }
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      var this$1 = this;

      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this$1) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this$1, name) &&
              !isNaN(+name.slice(1))) {
            this$1[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      var this$1 = this;

      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this$1.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this$1.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this$1.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this$1.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this$1.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this$1.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      var this$1 = this;

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this$1.tryEntries[i];
        if (entry.tryLoc <= this$1.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this$1.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      var this$1 = this;

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this$1.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this$1.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      var this$1 = this;

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this$1.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof commonjsGlobal === "object" ? commonjsGlobal :
  typeof window === "object" ? window :
  typeof self === "object" ? self : commonjsGlobal
);
});

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof commonjsGlobal === "object" ? commonjsGlobal :
  typeof window === "object" ? window :
  typeof self === "object" ? self : commonjsGlobal;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) { ref = {}; }
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "[ui-pnotify].ui-pnotify .brighttheme{border-radius:0}[ui-pnotify].ui-pnotify .brighttheme.ui-pnotify-container{padding:1.3rem}[ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-confirm,[ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-text,[ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-title{margin-left:1.8rem}[dir=rtl] [ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-confirm,[dir=rtl] [ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-text,[dir=rtl] [ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-title{margin-left:0;margin-right:1.8rem}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-title{font-size:1.2rem;line-height:1.4rem;margin-bottom:1rem;margin-top:-.2rem}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-text{font-size:1rem;line-height:1.2rem;margin-top:0}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-icon{line-height:1}[ui-pnotify].ui-pnotify .brighttheme-notice{background-color:#ffffa2;border:0 solid #ff0;color:#4f4f00}[ui-pnotify].ui-pnotify .brighttheme-info{background-color:#8fcedd;border:0 solid #0286a5;color:#012831}[ui-pnotify].ui-pnotify .brighttheme-success{background-color:#aff29a;border:0 solid #35db00;color:#104300}[ui-pnotify].ui-pnotify .brighttheme-error{background-color:#ffaba2;background-image:repeating-linear-gradient(135deg,transparent,transparent 35px,hsla(0,0%,100%,.3) 0,hsla(0,0%,100%,.3) 70px);border:0 solid #ff1800;color:#4f0800}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-closer,[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-sticker{font-size:1rem;line-height:1.2rem}[ui-pnotify].ui-pnotify .brighttheme-icon-closer,[ui-pnotify].ui-pnotify .brighttheme-icon-error,[ui-pnotify].ui-pnotify .brighttheme-icon-info,[ui-pnotify].ui-pnotify .brighttheme-icon-notice,[ui-pnotify].ui-pnotify .brighttheme-icon-sticker,[ui-pnotify].ui-pnotify .brighttheme-icon-success{border-radius:50%;font-family:Courier New,Courier,monospace;font-size:1rem;font-weight:700;height:1rem;line-height:1rem;position:relative;width:1rem}[ui-pnotify].ui-pnotify .brighttheme-icon-closer:after,[ui-pnotify].ui-pnotify .brighttheme-icon-info:after,[ui-pnotify].ui-pnotify .brighttheme-icon-notice:after,[ui-pnotify].ui-pnotify .brighttheme-icon-sticker:after,[ui-pnotify].ui-pnotify .brighttheme-icon-success:after{left:.2rem;position:absolute;top:0}[ui-pnotify].ui-pnotify .brighttheme-icon-notice{background-color:#2e2e00;color:#ffffa2}[ui-pnotify].ui-pnotify .brighttheme-icon-notice:after{content:\"!\"}[ui-pnotify].ui-pnotify .brighttheme-icon-info{background-color:#012831;color:#8fcedd}[ui-pnotify].ui-pnotify .brighttheme-icon-info:after{content:\"i\"}[ui-pnotify].ui-pnotify .brighttheme-icon-success{background-color:#104300;color:#aff29a}[ui-pnotify].ui-pnotify .brighttheme-icon-success:after{content:\"\\002713\"}[ui-pnotify].ui-pnotify .brighttheme-icon-error{border-bottom:1.2rem solid #2e0400;border-left:.6rem solid transparent;border-radius:0;border-right:.6rem solid transparent;color:#ffaba2;font-size:0;height:0;line-height:0;width:0}[ui-pnotify].ui-pnotify .brighttheme-icon-error:after{content:\"!\";font-family:Courier New,Courier,monospace;font-size:.9rem;font-weight:700;left:-.25rem;line-height:1.4rem;position:absolute;top:.1rem}[ui-pnotify].ui-pnotify .brighttheme-icon-closer,[ui-pnotify].ui-pnotify .brighttheme-icon-sticker{display:inline-block}[ui-pnotify].ui-pnotify .brighttheme-icon-closer:after{content:\"\\002715\"}[ui-pnotify].ui-pnotify .brighttheme-icon-sticker:after{content:\"\\002016\";top:-1px}[ui-pnotify].ui-pnotify .brighttheme-icon-sticker.brighttheme-icon-stuck:after{content:\"\\00003E\"}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-confirm{margin-top:1rem}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-prompt-bar{margin-bottom:1rem}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-action-button{background:0 0;border:none;cursor:pointer;font-weight:700;padding:.4rem 1rem;text-transform:uppercase}[ui-pnotify].ui-pnotify .brighttheme-notice .ui-pnotify-action-button.brighttheme-primary{background-color:#ff0;color:#4f4f00}[ui-pnotify].ui-pnotify .brighttheme-info .ui-pnotify-action-button.brighttheme-primary{background-color:#0286a5;color:#012831}[ui-pnotify].ui-pnotify .brighttheme-success .ui-pnotify-action-button.brighttheme-primary{background-color:#35db00;color:#104300}[ui-pnotify].ui-pnotify .brighttheme-error .ui-pnotify-action-button.brighttheme-primary{background-color:#ff1800;color:#4f0800}";
styleInject(css);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var PNotify = require('pnotify/dist/umd/PNotifyCompat');
var PNotifyButtons = require('pnotify/dist/umd/PNotifyButtons');

var serialize = function serialize(obj, prefix) {
  var str = [];
  var p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + '[' + p + ']' : p;

      var v = obj[p];
      str.push(v !== null && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' ? serialize(v, k) : encodeURIComponent(k) + '=' + encodeURIComponent(v));
    }
  }
  return str.join('&');
};
function getFormData(form) {
  if (!(form instanceof Node && form.tagName.toUpperCase() === 'FORM')) { throw new Error('first argument is not HTMLFormElement'); }
  var haveFile = form.querySelector('[type="file"][name]') != null;
  var data = haveFile ? new FormData() : {};
  var submits = form.querySelectorAll('[name]');
  for (var i = 0, l = submits.length; i < l; i++) {
    var el = submits[i];
    var field = el.getAttribute('name');
    var value = el.getAttribute('value');
    if (!field) { continue; }
    if (el.hasAttribute('type') && el.getAttribute('type').toLowerCase() === 'file' && data instanceof FormData) {
      var fileList = el.files;
      for (var fi = 0, fc = fileList.length; fi < fc; fi++) {
        data.append(field, fileList[fi], fileList[fi]['webkitRelativePath'] ? fileList[fi].webkitRelativePath : fileList[fi].name);
      }
      continue;
    }
    if (el.hasAttribute('type') && ['checkbox', 'radio'].includes(el.getAttribute('type').toLowerCase())) {
      if (el.checked) {
        if (haveFile) {
          data.append(field, value);
        } else {
          data[field] = value;
        }
      }
      continue;
    }
    if (haveFile) {
      data.append(field, el.value);
    } else {
      data[field] = el.value;
    }
  }
  return data;
}

/*
// fix remove on native DOM
Element.prototype.remove = function () {
  this.parentElement.removeChild(this)
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i])
    }
  }
}
// */
function showNotify(type, title, text) {
  var n = new PNotify({
    title: title,
    text: text,
    type: type,
    desktop: {
      desktop: false
    }
  });
  /*
  const el = n.get()
  if (window.jQuery && (el instanceof window.jQuery)) {
    el.click(function (e) {
      window.jQuery(this).remove()
    })
  } else if (el instanceof Node) {
    el.addEventListener('click', function (e) {
      el.parentElement.removeChild(el)
    })
  }
  */
}
var onSubmit = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee($event) {
    var $form, data, ret, i, method, args, headers, res, r, _i;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      var this$1 = this;

      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $form = $event.target;
            data = getFormData($form);

            if (!(typeof this$1.validator === 'function')) {
              _context.next = 18;
              break;
            }

            _context.prev = 3;
            ret = this$1.validator(data, $form);

            if (!(typeof ret.catch === 'function')) {
              _context.next = 9;
              break;
            }

            _context.next = 8;
            return ret;

          case 8:
            ret = _context.sent;

          case 9:
            if (!(ret === false)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt('return');

          case 11:
            if (ret && ret instanceof Object) {
              if (ret instanceof Array) {
                // validator return array set to showNotify
                showNotify.apply(undefined, _toConsumableArray(ret));
              } else if (!ret.success) {
                // validator return {success: "Successfull!"} - show text, {error: 'Show this text'} - show an error, {notice: 'Show notice'} - show a notice
                for (i in ret) {
                  showNotify(('' + i).toLowerCase(), ('' + i).toUpperCase(), '' + ret[i]);
                }
              }
            }
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](3);

            if (_context.t0.message) {
              showNotify('error', 'ERROR', _context.t0.message);
            }
            throw _context.t0;

          case 18:
            // pass all, do request
            method = this$1.method ? this$1.method.toUpperCase() : 'GET';
            args = [this$1.action || location.href, { method: method }];
            headers = {
              Accept: 'application/json, */*'
            };

            if (method !== 'GET') {
              if (data instanceof FormData) {
                // form-data
                // headers['Content-Type'] = 'multipart/form-data' // do not need
                args[1].body = data;
              } else if (this$1.json && this$1.json !== 'false') {
                // json
                headers['Content-Type'] = 'application/json';
                args[1].body = JSON.stringify(data);
              } else {
                // urlencoded
                args[1].body = serialize(data);
                headers['Content-Type'] = 'application/x-www-form-urlencoded';
              }
            }
            args[1].headers = headers;
            if (typeof this$1.beforeSend === 'function') { this$1.beforeSend(args, $form); }
            res = void 0, r = void 0;
            _context.prev = 25;
            _context.next = 28;
            return fetch.apply(undefined, args);

          case 28:
            r = _context.sent;
            _context.prev = 29;
            _context.next = 32;
            return r.json();

          case 32:
            res = _context.sent;

            try {
              if (res && res instanceof Object) {
                if (res.success) {
                  if (typeof this$1.success === 'function') { this$1.success(res, r, $form); } // throw an error to pass the notification
                  if (typeof res.success === 'string') {
                    showNotify('success', 'SUCCESS', res.success);
                  }
                } else {
                  for (_i in res) {
                    showNotify(('' + _i).toLowerCase(), ('' + _i).toUpperCase(), '' + res[_i]);
                  }
                }
              }
            } catch (e) {
              console.error('vue2-auto-form', e);
            }
            _context.next = 41;
            break;

          case 36:
            _context.prev = 36;
            _context.t1 = _context['catch'](29);

            // json error
            console.error('vue2-auto-form', _context.t1);
            if (_context.t1.message) {
              showNotify('error', 'ERROR', _context.t1.message);
            }
            if (typeof this$1.error === 'function') { this$1.error(res, r, $form); }

          case 41:
            _context.next = 47;
            break;

          case 43:
            _context.prev = 43;
            _context.t2 = _context['catch'](25);

            // fetch error
            if (_context.t2.message) {
              showNotify('error', 'ERROR', _context.t2.message);
            }
            if (typeof this$1.error === 'function') { this$1.error(_context.t2, r, $form); }

          case 47:
            if (typeof this$1.complete === 'function') { this$1.complete(res, r, $form); }

          case 48:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 14], [25, 43], [29, 36]]);
  }));

  return function onSubmit(_x) {
    return _ref.apply(this, arguments);
  };
}();

var component = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('form', { on: { "submit": function submit($event) {
          $event.preventDefault();return _vm.onSubmit($event);
        } } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    method: {
      type: String,
      required: false,
      default: 'GET',
      validator: function validator(value) {
        return ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes(value.toUpperCase());
      }
    },
    action: {
      type: String,
      required: false
    },
    json: {
      // true or false or "false"
      default: false
    },
    validator: {
      type: Function,
      required: false
    },
    success: {
      type: Function,
      required: false
    },
    error: {
      type: Function,
      required: false
    },
    complete: {
      type: Function,
      required: false
    },
    beforeSend: {
      type: Function,
      required: false
    }

  },
  methods: {
    onSubmit: function onSubmit$$1($event) {
      onSubmit.call(this, $event);
    }
  }
};

function install$1(Vue, options) {
  // Usage: <auto-form action="/user/login"><input...></auto-form>
  Vue.component('auto-form', component);
}

export default install$1;
