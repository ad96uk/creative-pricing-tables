document.querySelectorAll(".price-plan").forEach((e=>{e.addEventListener("click",(function(){var a;(a=e).classList.contains("expanded")?(a.classList.remove("expanded"),a.style.zIndex=1):(document.querySelectorAll(".price-plan.expanded").forEach((e=>{e.classList.remove("expanded")})),a.classList.add("expanded"))}))}));