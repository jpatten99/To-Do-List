(()=>{"use strict";function e(){console.log("I get called from print.js!")}document.body.appendChild(function(){const n=document.createElement("div"),t=document.createElement("button");return n.innerHTML="Test Text",t.innerHTML="Click me and check the console!",t.onclick=e,n.appendChild(t),n.classList.add("hello"),n}())})();