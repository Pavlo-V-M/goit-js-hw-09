const e=document.querySelector(".form");function o(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{t?n({position:e,delay:o}):l({position:e,delay:o})}),o)}))}e.addEventListener("submit",(t=>{t.preventDefault();const n=Number(e.delay.value),l=Number(e.step.value),i=Number(e.amount.value);if(n<0||l<0||0===i)console.log("Invalid input values");else for(let e=0;e<i;e+=1){o(e+1,n+l*e).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.a5e92bd0.js.map