import{a as o,e as t,g as r,_ as a,l as s}from"./index-e8951e82.js";import{P as l}from"./page-e9c727b2.js";const n=()=>(o.managers.appStateManager.pushToState("authState",{_:"authStateSignedIn"}),t.requestedServerLanguage||t.getCacheLangPack().then(e=>{e.local&&t.getLangPack(e.lang_code)}),i.pageEl.style.display="",r(),Promise.all([a(()=>import("./appDialogsManager-87fc1ffe.js"),["./appDialogsManager-87fc1ffe.js","./avatar-11f89d5c.js","./button-52c053f7.js","./index-e8951e82.js","./index-80a0e9a4.css","./page-e9c727b2.js","./wrapEmojiText-8f2849c2.js","./scrollable-894a3eaa.js","./putPreloader-c4f1f802.js","./htmlToSpan-705cdb34.js","./countryInputField-596e7cbc.js","./textToSvgURL-c6ebb454.js","./codeInputField-08ea059d.js","./appDialogsManager-dc588fa7.css"],import.meta.url),s(),"requestVideoFrameCallback"in HTMLVideoElement.prototype?Promise.resolve():a(()=>import("./requestVideoFrameCallbackPolyfill-d3040205.js"),[],import.meta.url)]).then(([e])=>{e.default.start(),setTimeout(()=>{document.getElementById("auth-pages").remove()},1e3)})),i=new l("page-chats",!1,n);export{i as default};
//# sourceMappingURL=pageIm-bca9c8a1.js.map