!function(e){var t=e.document,n=t.documentElement,i=n.getAttribute("data-use-rem");if(null!==i){var a="NaN"==parseInt(i).toString()?640:parseInt(i),d=a/100,o=n.clientWidth||320;n.style.fontSize=o/d+"px";var r=document.createElement("div"),s=0,l=0;r.style.cssText="height:0;width:1rem;",t.body.appendChild(r);var v=function(){if(s=r.offsetWidth,s!==Math.round(o/d)){l=o/d/s;var e=o*l/d;n.style.fontSize=e+"px"}else t.body.removeChild(r)};setTimeout(v,20);var c=function(){var e=n.clientWidth;e!==o&&(o=e,n.style.fontSize=e*(l?l:1)/d+"px")};if(t.addEventListener){var f="orientationchange"in e?"orientationchange":"resize";e.addEventListener(f,c,!1),t.addEventListener("DOMContentLoaded",c,!1)}}}(window);