!function(r){var n={};function t(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return r[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=r,t.c=n,t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,n){if(1&n&&(r=t(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var i in r)t.d(e,i,function(n){return r[n]}.bind(null,i));return e},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="",t(t.s=4)}([function(r,n,t){"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t=function(r,n){var t=r[1]||"",e=r[3];if(!e)return t;if(n&&"function"==typeof btoa){var i=(a=e,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[t].concat(o).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(n,r);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(r,t,e){"string"==typeof r&&(r=[[null,r,""]]);var i={};if(e)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<r.length;s++){var c=[].concat(r[s]);e&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(r,n,t){"use strict";t.r(n);var e=t(0),i=t.n(e),o=t(3),a=i()(!1);a.i(o.a),a.push([r.i,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap);"]),a.push([r.i,"* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-family: 'Rubik', sans-serif;\r\n\tscroll-behavior: smooth;\r\n\tcolor: #000;\r\n}\r\n\r\n.container {\r\n\tmax-width: 90%;\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tpadding: 0.5rem 0.5rem;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nheader {\r\n\tbackground-color: #fff;\r\n}\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 1rem 1.5rem;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nnav.sticky {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tpadding: 1rem 2rem;\r\n\tz-index: 2;\r\n\tbackground-color: #fff;\r\n\tanimation: fadeIn 0.5s ease-in-out;\r\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n\toverflow: hidden;\r\n}\r\n\r\nnav .wood-craft {\r\n\tfont-weight: 500;\r\n\tfont-size: 22px;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.menu-toggle {\r\n\tposition: relative;\r\n}\r\n\r\n.menu-toggle .fa-shopping-cart {\r\n\tfont-size: 1.3rem;\r\n\tcolor: #000;\r\n\tcursor: pointer;\r\n}\r\n\r\n.menu-toggle .circle {\r\n\tposition: absolute;\r\n\twidth: 15px;\r\n\theight: 15px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: rgb(221, 9, 9);\r\n\ttop: -5px;\r\n\tright: -10px;\r\n\ttext-align: center;\r\n\tcolor: white;\r\n\tfont-size: 12px;\r\n\ttransform: scale(1);\r\n}\r\n\r\n.circle.num {\r\n\tanimation: scale 0.7s ease-in-out;\r\n}\r\n\r\n.jumbotron-img {\r\n\tmin-width: 220px;\r\n\tmax-width: 500px;\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\tpadding: 1.5rem 0 0.3rem 0;\r\n}\r\n\r\n.best-seller {\r\n\tfont-weight: 400;\r\n\tletter-spacing: 0.1rem;\r\n\tmargin-bottom: 0.5rem;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.jumbotron-h1 {\r\n\tfont-weight: 500;\r\n\tfont-size: 1.7rem;\r\n\tmargin-bottom: 0.3rem;\r\n}\r\n\r\n.jumbotron-p {\r\n\tfont-weight: 100;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.jumbotron-button {\r\n\tmargin: 1.5rem 0;\r\n\tdisplay: block;\r\n\twidth: 140px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: #000;\r\n\tborder: 1px solid black;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 13px;\r\n\tletter-spacing: 0.5px;\r\n\tpadding: 0.6rem 0.5rem;\r\n\tcursor: pointer;\r\n}\r\n\r\n.jumbotron-button:hover {\r\n\tbackground-color: #000;\r\n\tcolor: white;\r\n\ttransition: all 0.2s ease;\r\n}\r\n\r\nsection#card-product {\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.cards {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\twidth: 70%;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-evenly;\r\n}\r\n.card {\r\n\tbox-sizing: border-box;\r\n\theight: 350px;\r\n\tpadding: 1rem;\r\n\tmargin-top: 3rem;\r\n}\r\n.card .card-img1 {\r\n\tmax-width: 178px;\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\tobject-fit: cover;\r\n}\r\n.card .card-img2 {\r\n\tmax-width: 120px;\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\tobject-fit: cover;\r\n}\r\n.card .card-img3 {\r\n\tmax-width: 200px;\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\tobject-fit: cover;\r\n\twidth: 100%;\r\n}\r\n\r\n.card h1 {\r\n\tmargin: 0 auto;\r\n\tpadding: 1rem 0 0.5rem 0;\r\n\tfont-weight: 500;\r\n\tfont-size: 20px;\r\n\ttext-align: center;\r\n}\r\n\r\n.card h2 {\r\n\tmargin: 0 auto;\r\n\tpadding: 0 0.5rem 1rem 0.5rem;\r\n\twidth: 180px;\r\n\tfont-size: 18px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n}\r\n\r\n.card .card-button {\r\n\tdisplay: block;\r\n\twidth: 100px;\r\n\tcolor: #000;\r\n\tborder: 1px solid #000;\r\n\tpadding: 0.6rem 0.5rem;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 13px;\r\n}\r\n\r\n.card-button:hover {\r\n\tbackground-color: #000;\r\n\tcolor: white;\r\n\ttransition: all 0.2s ease;\r\n}\r\n\r\n.cards .tiga {\r\n\tmargin-bottom: 3rem;\r\n}\r\n\r\n/* MODAL */\r\n\r\n.modal {\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%) scale(0);\r\n\ttransition: all 200ms ease-in-out;\r\n\tbackground-color: #fff;\r\n\r\n\tmin-width: 80%;\r\n\tmax-width: 80%;\r\n\r\n\tz-index: 10;\r\n\tbox-sizing: border-box;\r\n\tpadding: 1.5rem;\r\n\tbox-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.modal.active {\r\n\ttransform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n.modal-header .card-img1 {\r\n\tmax-width: 180px;\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\tobject-fit: cover;\r\n\ttransition: all 200ms ease-in-out;\r\n}\r\n.modal-header .card-img2 {\r\n\tmax-width: 120px;\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\tobject-fit: cover;\r\n\ttransition: all 200ms ease-in-out;\r\n}\r\n.modal-header .card-img3 {\r\n\tmax-width: 200px;\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\tobject-fit: cover;\r\n\twidth: 100%;\r\n\ttransition: all 200ms ease-in-out;\r\n}\r\n\r\n.modal-header .fa-times {\r\n\tdisplay: block;\r\n\ttext-align: right;\r\n\tfont-size: 1.2rem;\r\n\tcursor: pointer;\r\n}\r\n\r\n.modal .modal-body {\r\n\tmargin: 0.5rem 0;\r\n}\r\n\r\n.title-prod h2 {\r\n\tfont-weight: 500;\r\n\tfont-size: 22px;\r\n}\r\n\r\n.title-prod h3 {\r\n\tmargin-bottom: 0.2rem;\r\n\tfont-weight: 400;\r\n\tfont-size: 20px;\r\n}\r\n.modal-body .description {\r\n\ttext-align: left;\r\n\tmargin: 0.5rem 0 1rem 0;\r\n\tfont-weight: 300;\r\n\toverflow: hidden;\r\n}\r\n\r\n.description p {\r\n\tfont-weight: 100;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.modal-body .add-to-cart {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\tmax-width: 200px;\r\n\twidth: 200px;\r\n\tmargin: 0 auto;\r\n\tcursor: pointer;\r\n}\r\n\r\n/* Chrome, Safari, Edge, Opera */\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n\t-webkit-appearance: none;\r\n\tmargin: 0;\r\n}\r\n\r\n/* Firefox */\r\ninput[type='number'] {\r\n\t-moz-appearance: textfield;\r\n}\r\n\r\ninput#quantity {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\ttext-align: center;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.modal-body .cart {\r\n\tbackground-color: #000;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding: 1rem;\r\n\tbox-sizing: border-box;\r\n\theight: 30px;\r\n\tcolor: #fff;\r\n\tjustify-content: space-between;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 13px;\r\n}\r\n\r\n.modal-body .cart .fa-shopping-cart {\r\n\tcolor: #fff;\r\n\tmargin-left: 0.5rem;\r\n}\r\n\r\n#overlay {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\topacity: 0;\r\n\ttransition: 200ms ease-in-out;\r\n\tpointer-events: none;\r\n\tz-index: 2;\r\n}\r\n\r\n#overlay.active {\r\n\topacity: 1;\r\n\tpointer-events: all;\r\n}\r\n\r\n.notification {\r\n\tposition: fixed;\r\n\ttop: 4.5rem;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%) translateY(-500%);\r\n\ttransition: all 0.2s ease-in-out;\r\n\tbackground-color: #fff;\r\n\tpadding: 0.5rem 1rem;\r\n\tcolor: black;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 0.5rem;\r\n\twidth: 300px;\r\n\t/* border: 1px solid black; */\r\n\t/* box-shadow: 0 0 25px rgba(0, 0, 0, 0.2); */\r\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tz-index: 1;\r\n}\r\n\r\n.notification.active {\r\n\ttransform: translateX(-50%) translateY(0);\r\n\toverflow: hidden;\r\n}\r\n\r\n.notification .name-brand {\r\n\tfont-weight: 500;\r\n\tcolor: black;\r\n}\r\n.notification .message {\r\n\tcolor: black;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.notification .fa-check-circle {\r\n\tfont-size: 22px;\r\n\tcolor: black;\r\n}\r\n\r\n.cart-page {\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%) translateY(100%);\r\n\ttransition: all 0.5s ease-in-out;\r\n\tbackground-color: #fff;\r\n\t/* border: 1px solid black; */\r\n\tmin-width: 350px;\r\n\tmax-width: 700px;\r\n\tmax-height: 85%;\r\n\tmin-height: 50%;\r\n\t/* overflow: auto; */\r\n\t/* width: 100%; */\r\n\tz-index: 0;\r\n\tbox-sizing: border-box;\r\n\tpadding: 1.5rem;\r\n\tbox-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\r\n\tborder-top-right-radius: 1rem;\r\n\tborder-top-left-radius: 1rem;\r\n\tz-index: 9;\r\n}\r\n\r\n.cart-page.active {\r\n\ttransform: translateX(-50%) translateY(0);\r\n}\r\n\r\n.cart-page .cart-page-header {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\r\n\tborder-bottom: 0.5px solid #181818;\r\n\tpadding: 0rem 0 1rem 0;\r\n}\r\n\r\n.cart-page-header h3 {\r\n\tfont-size: 20px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.cart-page-header .fa-chevron-down {\r\n\tfont-size: 1.2rem;\r\n\tcursor: pointer;\r\n}\r\n\r\ninput#cart-check {\r\n\twidth: 15px;\r\n\theight: 15px;\r\n}\r\n.cart-page-body .cart-1 {\r\n\tdisplay: flex;\r\n\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\tbox-sizing: border-box;\r\n\tpadding: 0.2rem 0 0.2rem 0;\r\n\tborder-radius: 0.5rem;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n.cart-1 .item {\r\n\twidth: 100px;\r\n}\r\n\r\n.item img {\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n}\r\n.cart-1 .item-detail {\r\n\tmin-width: 170px;\r\n}\r\n\r\n.item-detail input#quantity {\r\n\tmargin-top: 0.5rem;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\ttext-align: center;\r\n\tbox-sizing: border-box;\r\n\toverflow: visible;\r\n}\r\n\r\n.cart-status {\r\n\tmargin: 1rem 0;\r\n}\r\n\r\n.cart-status.active {\r\n\tdisplay: none;\r\n}\r\n.checkout-button {\r\n\tborder: 1px solid black;\r\n\ttext-align: center;\r\n\tpadding: 0.5rem 0;\r\n\tbackground-color: #000;\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n\tmargin-top: 1rem;\r\n\tmargin-bottom: 0.5rem;\r\n\tdisplay: none;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 15px;\r\n\tletter-spacing: 0.02rem;\r\n}\r\n\r\n.checkout-button a {\r\n   text-decoration: none;\r\n   color: #fff;\r\n   display: block;\r\n}\r\n.delete-button {\r\n\tborder: 1px solid black;\r\n\ttext-align: center;\r\n\tpadding: 0.5rem 0;\r\n\tletter-spacing: 0.05rem;\r\n\tcolor: black;\r\n\tcursor: pointer;\r\n\tdisplay: none;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 15px;\r\n\tletter-spacing: 0.02rem;\r\n}\r\n\r\n.delete-button a {\r\n   text-decoration: none;\r\n   color: #000;\r\n   display: block;\r\n}\r\n\r\n.checkout-button.active {\r\n\tdisplay: block;\r\n}\r\n\r\n.delete-button.active {\r\n\tdisplay: block;\r\n}\r\n\r\nsection#redeem {\r\n\tmargin: 1rem 0 5rem 0;\r\n}\r\n\r\nsection#redeem h1 {\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.redeem-title {\r\n\tpadding-bottom: 1.5rem;\r\n}\r\n\r\n.input-redeem {\r\n\tmargin: 1.5rem auto;\r\n\tmax-width: 500px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n\r\n#redeem-code {\r\n\tmargin: 0 auto;\r\n\tdisplay: block;\r\n\tmax-width: 500px;\r\n\twidth: 100%;\r\n\tpadding: 0.6rem 0;\r\n\tborder-radius: 1rem;\r\n\tborder: 1px solid black;\r\n\ttext-align: center;\r\n\tfont-size: 17px;\r\n\tcolor: black;\r\n}\r\n#redeem-code:focus {\r\n\toutline: none;\r\n}\r\n\r\n.fa-telegram-plane {\r\n\tposition: absolute;\r\n\tright: 0.5rem;\r\n\ttop: 0.6rem;\r\n\tz-index: 0;\r\n\tcursor: pointer;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.testimonials {\r\n\tdisplay: flex;\r\n\r\n\tjustify-content: space-evenly;\r\n\r\n\tposition: relative;\r\n\theight: 200px;\r\n}\r\n\r\n.testimonial-title {\r\n\ttext-align: center;\r\n\tmargin-bottom: 1.5rem;\r\n}\r\n\r\n.testi {\r\n\ttext-align: center;\r\n\tpadding: 1rem;\r\n\tbackground-color: rgb(255, 255, 255);\r\n\tmin-width: 300px;\r\n\tmax-width: 350px;\r\n\tmax-height: 110px;\r\n\tdisplay: none;\r\n}\r\n\r\n.testi h1 {\r\n\tfont-size: 1.1rem;\r\n\tmargin: 0.5rem auto;\r\n\tfont-weight: 500;\r\n}\r\n.testi p {\r\n\tmargin: 0 auto;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.testi.active {\r\n\tdisplay: block;\r\n\tanimation: fadeIn 0.5s ease-in-out;\r\n\tanimation: fadeOut 0.5s ease-in-out;\r\n}\r\n\r\nsection#payment {\r\n\tmargin-bottom: 5rem;\r\n}\r\n\r\n.payment-logo {\r\n\tmargin: 0 auto;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.payment-logo img {\r\n\tmax-width: 200px;\r\n}\r\n\r\nfooter {\r\n\ttext-align: center;\r\n\tbackground-color: #141414;\r\n\tpadding: 1rem 0;\r\n}\r\n\r\nfooter p {\r\n\tcolor: white;\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n\t.jumbotron-cont {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: space-evenly;\r\n\t}\r\n\r\n\t.jumbotron-h1 {\r\n\t\tfont-size: 2rem;\r\n\t}\r\n\t.jumbotron-p {\r\n\t\tmax-width: 500px;\r\n\t\tfont-size: 1rem;\r\n\t}\r\n\r\n\tnav.sticky {\r\n\t\tpadding: 1rem 3rem;\r\n\t}\r\n\r\n\t.modal {\r\n\t\tmin-width: 40%;\r\n\t\tmax-width: 40%;\r\n\t}\r\n\r\n\t.cart-page {\r\n\t\tmin-width: 500px;\r\n\t}\r\n}\r\n@keyframes fadeIn {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n@keyframes fadeOut {\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes scale {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1.2);\r\n\t}\r\n}\r\n",""]),n.default=a},function(r,n,t){"use strict";var e,i=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},o=function(){var r={};return function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}r[n]=t}return r[n]}}(),a=[];function s(r){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===r){n=t;break}return n}function c(r,n){for(var t={},e=[],i=0;i<r.length;i++){var o=r[i],c=n.base?o[0]+n.base:o[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var p=s(l),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(a[p].references++,a[p].updater(m)):a.push({identifier:l,updater:g(m,n),references:1}),e.push(l)}return e}function d(r){var n=document.createElement("style"),e=r.attributes||{};if(void 0===e.nonce){var i=t.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(r){n.setAttribute(r,e[r])})),"function"==typeof r.insert)r.insert(n);else{var a=o(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,p=(l=[],function(r,n){return l[r]=n,l.filter(Boolean).join("\n")});function m(r,n,t,e){var i=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(r.styleSheet)r.styleSheet.cssText=p(n,i);else{var o=document.createTextNode(i),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(o,a[n]):r.appendChild(o)}}function f(r,n,t){var e=t.css,i=t.media,o=t.sourceMap;if(i?r.setAttribute("media",i):r.removeAttribute("media"),o&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}var u=null,b=0;function g(r,n){var t,e,i;if(n.singleton){var o=b++;t=u||(u=d(n)),e=m.bind(null,t,o,!1),i=m.bind(null,t,o,!0)}else t=d(n),e=f.bind(null,t,n),i=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)};return e(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;e(r=n)}else i()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var e=0;e<t.length;e++){var i=s(t[e]);a[i].references--}for(var o=c(r,n),d=0;d<t.length;d++){var l=s(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=o}}}},function(r,n,t){"use strict";var e=t(0),i=t.n(e)()(!1);i.push([r.i,'.loader-wrapper{\r\n   position: fixed;\r\n   background-color: #fff;\r\n   width: 100%;\r\n   height: 100%;\r\n   top: 0;\r\n   left: 0;\r\n   bottom: 0;\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   z-index: 20;\r\n   /* display: none; */\r\n}\r\n\r\n.loader {\r\n   --path: #2f3545;\r\n   --dot: #5628ee;\r\n   --duration: 3s;\r\n   width: 44px;\r\n   height: 44px;\r\n   position: relative;\r\n }\r\n .loader:before {\r\n   content: "";\r\n   width: 6px;\r\n   height: 6px;\r\n   border-radius: 50%;\r\n   position: absolute;\r\n   display: block;\r\n   background: var(--dot);\r\n   top: 37px;\r\n   left: 19px;\r\n   -webkit-transform: translate(-18px, -18px);\r\n           transform: translate(-18px, -18px);\r\n   -webkit-animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\r\n           animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\r\n }\r\n .loader svg {\r\n   display: block;\r\n   width: 100%;\r\n   height: 100%;\r\n }\r\n .loader svg rect,\r\n .loader svg polygon,\r\n .loader svg circle {\r\n   fill: none;\r\n   stroke: var(--path);\r\n   stroke-width: 10px;\r\n   stroke-linejoin: round;\r\n   stroke-linecap: round;\r\n }\r\n .loader svg polygon {\r\n   stroke-dasharray: 145 76 145 76;\r\n   stroke-dashoffset: 0;\r\n   -webkit-animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\r\n           animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\r\n }\r\n .loader svg rect {\r\n   stroke-dasharray: 192 64 192 64;\r\n   stroke-dashoffset: 0;\r\n   -webkit-animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\r\n           animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\r\n }\r\n .loader svg circle {\r\n   stroke-dasharray: 150 50 150 50;\r\n   stroke-dashoffset: 75;\r\n   -webkit-animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\r\n           animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\r\n }\r\n .loader.triangle {\r\n   width: 48px;\r\n }\r\n .loader.triangle:before {\r\n   left: 21px;\r\n   -webkit-transform: translate(-10px, -18px);\r\n           transform: translate(-10px, -18px);\r\n   -webkit-animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\r\n           animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\r\n }\r\n \r\n @-webkit-keyframes pathTriangle {\r\n   33% {\r\n     stroke-dashoffset: 74;\r\n   }\r\n   66% {\r\n     stroke-dashoffset: 147;\r\n   }\r\n   100% {\r\n     stroke-dashoffset: 221;\r\n   }\r\n }\r\n \r\n @keyframes pathTriangle {\r\n   33% {\r\n     stroke-dashoffset: 74;\r\n   }\r\n   66% {\r\n     stroke-dashoffset: 147;\r\n   }\r\n   100% {\r\n     stroke-dashoffset: 221;\r\n   }\r\n }\r\n @-webkit-keyframes dotTriangle {\r\n   33% {\r\n     -webkit-transform: translate(0, 0);\r\n             transform: translate(0, 0);\r\n   }\r\n   66% {\r\n     -webkit-transform: translate(10px, -18px);\r\n             transform: translate(10px, -18px);\r\n   }\r\n   100% {\r\n     -webkit-transform: translate(-10px, -18px);\r\n             transform: translate(-10px, -18px);\r\n   }\r\n }\r\n @keyframes dotTriangle {\r\n   33% {\r\n     -webkit-transform: translate(0, 0);\r\n             transform: translate(0, 0);\r\n   }\r\n   66% {\r\n     -webkit-transform: translate(10px, -18px);\r\n             transform: translate(10px, -18px);\r\n   }\r\n   100% {\r\n     -webkit-transform: translate(-10px, -18px);\r\n             transform: translate(-10px, -18px);\r\n   }\r\n }\r\n @-webkit-keyframes pathRect {\r\n   25% {\r\n     stroke-dashoffset: 64;\r\n   }\r\n   50% {\r\n     stroke-dashoffset: 128;\r\n   }\r\n   75% {\r\n     stroke-dashoffset: 192;\r\n   }\r\n   100% {\r\n     stroke-dashoffset: 256;\r\n   }\r\n }\r\n @keyframes pathRect {\r\n   25% {\r\n     stroke-dashoffset: 64;\r\n   }\r\n   50% {\r\n     stroke-dashoffset: 128;\r\n   }\r\n   75% {\r\n     stroke-dashoffset: 192;\r\n   }\r\n   100% {\r\n     stroke-dashoffset: 256;\r\n   }\r\n }\r\n @-webkit-keyframes dotRect {\r\n   25% {\r\n     -webkit-transform: translate(0, 0);\r\n             transform: translate(0, 0);\r\n   }\r\n   50% {\r\n     -webkit-transform: translate(18px, -18px);\r\n             transform: translate(18px, -18px);\r\n   }\r\n   75% {\r\n     -webkit-transform: translate(0, -36px);\r\n             transform: translate(0, -36px);\r\n   }\r\n   100% {\r\n     -webkit-transform: translate(-18px, -18px);\r\n             transform: translate(-18px, -18px);\r\n   }\r\n }\r\n @keyframes dotRect {\r\n   25% {\r\n     -webkit-transform: translate(0, 0);\r\n             transform: translate(0, 0);\r\n   }\r\n   50% {\r\n     -webkit-transform: translate(18px, -18px);\r\n             transform: translate(18px, -18px);\r\n   }\r\n   75% {\r\n     -webkit-transform: translate(0, -36px);\r\n             transform: translate(0, -36px);\r\n   }\r\n   100% {\r\n     -webkit-transform: translate(-18px, -18px);\r\n             transform: translate(-18px, -18px);\r\n   }\r\n }\r\n @-webkit-keyframes pathCircle {\r\n   25% {\r\n     stroke-dashoffset: 125;\r\n   }\r\n   50% {\r\n     stroke-dashoffset: 175;\r\n   }\r\n   75% {\r\n     stroke-dashoffset: 225;\r\n   }\r\n   100% {\r\n     stroke-dashoffset: 275;\r\n   }\r\n }\r\n @keyframes pathCircle {\r\n   25% {\r\n     stroke-dashoffset: 125;\r\n   }\r\n   50% {\r\n     stroke-dashoffset: 175;\r\n   }\r\n   75% {\r\n     stroke-dashoffset: 225;\r\n   }\r\n   100% {\r\n     stroke-dashoffset: 275;\r\n   }\r\n }\r\n .loader {\r\n   display: inline-block;\r\n   margin: 0 16px;\r\n }\r\n \r\n html {\r\n   -webkit-font-smoothing: antialiased;\r\n }\r\n \r\n * {\r\n   box-sizing: border-box;\r\n }\r\n *:before, *:after {\r\n   box-sizing: border-box;\r\n }\r\n \r\n /* body {\r\n   min-height: 100vh;\r\n   background: #f5f9ff;\r\n   display: -webkit-box;\r\n   display: flex;\r\n   -webkit-box-pack: center;\r\n           justify-content: center;\r\n   -webkit-box-align: center;\r\n           align-items: center;\r\n } */\r\n body .dribbble {\r\n   position: fixed;\r\n   display: block;\r\n   right: 20px;\r\n   bottom: 20px;\r\n }\r\n body .dribbble img {\r\n   display: block;\r\n   height: 28px;\r\n }\r\n ',""]),n.a=i},function(r,n,t){"use strict";t.r(n);t(5),t(6),t(7);var e,i,o=document.querySelector(".modal"),a=document.querySelector(".modal-header img"),s=document.querySelector("#overlay"),c=document.querySelector(".cards"),d=document.querySelector(".fa-times"),l=document.querySelector(".cart-page"),p=document.querySelector(".fa-shopping-cart"),m=document.querySelector(".fa-chevron-down"),f=0,u=[];function b(){o.classList.remove("active"),s.classList.remove("active"),setTimeout((function(){"card-img1"==a.classList.value&&a.classList.remove("card-img1"),"card-img2"==a.classList.value&&a.classList.remove("card-img2"),"card-img3"==a.classList.value&&a.classList.remove("card-img3")}),500)}function g(r){o.classList.add("active"),s.classList.add("active");var n=r.target.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute("src"),t=r.target.previousElementSibling.textContent,e=r.target.previousElementSibling.previousElementSibling.textContent;"../image/1.png"===n&&a.classList.add("card-img1"),"../image/2.png"===n&&a.classList.add("card-img2"),"../image/3.png"===n&&a.classList.add("card-img3"),a.setAttribute("src","".concat(n));var i=document.querySelector(".title-prod h3"),c=document.querySelector(".title-prod h2");i.innerHTML="".concat(t),c.innerHTML="".concat(e),s.addEventListener("click",b)}function x(r){var n=document.querySelector(".notification");n.classList.add("active"),b(),document.querySelector("p.name-brand").innerHTML="".concat(r),h(),setTimeout((function(){n.classList.remove("active")}),2500)}function h(r){document.querySelector("p.message").innerHTML="".concat(r)}function v(r){var n,t,e=r.target.parentElement.previousElementSibling.previousElementSibling.children[1].textContent,i=r.target.parentElement.previousElementSibling.previousElementSibling.children[0].textContent,o=r.target.parentElement.previousElementSibling.previousElementSibling.parentElement.previousElementSibling.children[1].getAttribute("src"),a=r.target.previousElementSibling.value,s=document.querySelector(".cart-page-body");u.includes(e)?(x(e),h("Already in your cart")):(u.push(e),s.innerHTML+='\n         <div class="cart-1">\n            <div class="check">\n               <input type="checkbox" name="cart-check" id="cart-check" checked >\n            </div>\n            <div class="item">\n               <img src="'.concat(o,'" alt="" width="70px">\n            </div>\n            <div class="item-detail">\n               <p>').concat(e,"</p>\n               <p>").concat(i,'</p>\n               <input type="number" name="quantity" id="quantity" autofocus value="').concat(a,'" min="1" max="10">\n            </div>\n         </div> '),function(){f+=1;var r=document.querySelector(".circle");r.classList.add("num"),setTimeout((function(){r.classList.remove("num")}),1e3),r.innerHTML="".concat(f)}(),x(e),h("Successfully added to your cart"),n=document.querySelector(".checkout-button"),t=document.querySelector(".delete-button"),document.querySelector(".cart-status").classList.add("active"),n.classList.add("active"),t.classList.add("active"))}function y(){l.classList.remove("active"),s.classList.remove("active")}e=document.querySelectorAll(".testi"),i=0,setInterval((function(){4===i&&(i=0),e[i].classList.add("active"),setTimeout((function(){e[i].classList.remove("active"),i+=1}),5900)}),3e3),p.addEventListener("click",(function(){l.classList.add("active"),s.classList.add("active")})),s.addEventListener("click",y),m.addEventListener("click",y),o.addEventListener("click",(function(r){"cart"==r.target.className&&v(r)})),d.addEventListener("click",b),window.addEventListener("scroll",(function(){var r=document.querySelector("nav");window.scrollY>0?r.classList.add("sticky"):r.classList.remove("sticky")})),c.addEventListener("click",(function(r){"card-button det1"==r.target.className&&g(r),"card-button det2"==r.target.className&&g(r),"card-button det3"==r.target.className&&g(r)}))},function(r,n,t){var e=t(2),i=t(1);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[r.i,i,""]]);var o={insert:"head",singleton:!1};e(i,o);r.exports=i.locals||{}},function(r,n){document.querySelector("body").innerHTML+='\n<div class="loader-wrapper">\n<div class="loader">\n    <svg viewBox="0 0 80 80">\n        <circle id="test" cx="40" cy="40" r="32"></circle>\n    </svg>\n</div>\n\n<div class="loader triangle">\n    <svg viewBox="0 0 86 80">\n        <polygon points="43 8 79 72 7 72"></polygon>\n    </svg>\n</div>\n\n<div class="loader">\n    <svg viewBox="0 0 80 80">\n        <rect x="8" y="8" width="64" height="64"></rect>\n    </svg>\n</div>\n\n\x3c!-- dribbble --\x3e\n<a class="dribbble" href="https://dribbble.com/shots/5878367-Loaders" target="_blank"><img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt=""></a>\n</div>\n',window.addEventListener("load",(function(){var r=document.querySelector(".loader-wrapper");setTimeout((function(){r.style.display="none"}),1500)}))},function(r,n,t){var e=t(2),i=t(8);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[r.i,i,""]]);var o={insert:"head",singleton:!1};e(i,o);r.exports=i.locals||{}},function(r,n,t){"use strict";t.r(n);var e=t(0),i=t.n(e),o=t(1),a=i()(!1);a.i(o.default),a.push([r.i,"section#login {\r\n   height: 100vh;\r\n   background-color: #fff;\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n}\r\n\r\n.login-wrapper{\r\n   /* border: 1px solid black; */\r\n   max-width: 400px;\r\n   height: 350px;\r\n   margin: 0 auto;\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: center;\r\n   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n\r\n.login-content{\r\n   /* border: 1px solid black; */\r\n   padding: 3rem;\r\n   /* height: 300px; */\r\n}\r\n\r\n.login-content h1{\r\n   font-size: 25px;\r\n   margin-bottom: 1.6rem;\r\n}\r\n\r\n.login-content input {\r\n   display: block;\r\n   padding: .25rem .3rem;\r\n   width: 220px;\r\n   margin: .5rem 0;\r\n   font-size: 1rem;\r\n   font-weight: 400;\r\n}\r\n\r\n.login-content .login-button {\r\n   text-align: center;\r\n\ttext-decoration: none;\r\n   color: #fff;\r\n   background-color: #000;\r\n\tborder: 1px solid black;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 13px;\r\n\tletter-spacing: 0.5px;\r\n\tpadding: 0.6rem 0.5rem;\r\n   cursor: pointer;\r\n   display: block;\r\n   margin-top: 1.5rem;\r\n}\r\n\r\n.login-content p {\r\n   width: 220px;\r\n   margin-top: 1.2rem;\r\n   font-weight: 400;\r\n   font-size: .9rem;\r\n}\r\n",""]),n.default=a}]);