var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("iQIUW");function i(e,t){const r=Math.random()>.3;return new Promise(((o,n)=>{setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}({form:document.querySelector(".form"),button:document.querySelector("button")}).form.addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.currentTarget.delay.value);const r=Number(e.currentTarget.step.value),o=Number(e.currentTarget.amount.value);for(let e=0;e<=o;e+=1)i(e,t).then((({position:e,delay:t})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}));t+=r}));
//# sourceMappingURL=03-promises.d202466c.js.map