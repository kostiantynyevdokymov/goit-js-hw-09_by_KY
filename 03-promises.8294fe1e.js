!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i");({form:document.querySelector(".form"),button:document.querySelector("button")}).form.addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,o=n.delay,t=n.step,i=n.amount,u=Number(o.value),a=0;a<Number(i.value);a+=1)c(a,u).then((function(e){var n=e.position,o=e.delay;setTimeout((function(){r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{useIcon:!1})}),o)})).catch((function(e){var n=e.position,o=e.delay;setTimeout((function(){r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{useIcon:!1})}),o)})),u+=Number(t.value);function c(e,n){var o=Math.random()>.3;return new Promise((function(t,r){o?t({position:e,delay:n}):r({position:e,delay:n})}))}}))}();
//# sourceMappingURL=03-promises.8294fe1e.js.map
