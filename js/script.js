for(var linkNav=document.querySelectorAll('[href^="#"]'),V=.8,i=0;i<linkNav.length;i++)linkNav[i].addEventListener("click",function(e){e.preventDefault();var r=window.pageYOffset,l=this.href.replace(/[^#]*(.*)/,"$1");t=document.querySelector(l).getBoundingClientRect().top,start=null,requestAnimationFrame(function e(n){null===start&&(start=n);var a=n-start,i=t<0?Math.max(r-a/V,r+t):Math.min(r+a/V,r+t);window.scrollTo(0,i);i!=r+t?requestAnimationFrame(e):location.hash=l})},!1);