import{t as e}from"./rolldown-runtime.OA-FSkXT.mjs";import{A as t,C as n,D as r,I as i,M as a,P as o,R as s,c,g as l,l as u,o as d,v as f}from"./react.CHBg6kqC.mjs";import{C as ee,r as p,t as m}from"./motion.esWvCIpR.mjs";import{B as h,J as g,M as _,O as v,a as y,at as b,ct as x,dt as S,i as te,k as C,lt as w,mt as T,pt as E,r as D,u as ne,yt as re}from"./framer.CmZHl7sd.mjs";import{S as O,c as ie,w as ae}from"./OIjZRBmWDcIE2B6qgG1j.BE9Cdu88.mjs";import{t as oe}from"./default-utils.C-anYVpX.mjs";import{n as se,r as ce}from"./KyLCbH0PQ.BOsIb-7u.mjs";function k({type:e,url:t,html:n,zoom:r,radius:i,border:a,style:o={}}){return e===`url`&&t?c(j,{url:t,zoom:r,radius:i,border:a,style:o}):e===`html`&&n?c(N,{html:n,style:o}):c(A,{style:o})}function A({style:e}){return c(`div`,{style:{minHeight:B(e),...ae,overflow:`hidden`,...e},children:c(`div`,{style:U,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function j({url:e,zoom:t,radius:n,border:r,style:i}){let s=!i.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let l=ie(),[u,d]=o(l?void 0:!1);return a(()=>{if(!l)return;let t=!0;d(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&d(e)}else{let e=await n.text();console.error(e),d(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),d(e)}),()=>{t=!1}},[e]),l&&s?c(z,{message:`URL embeds do not support auto height.`,style:i}):e.startsWith(`https://`)?u===void 0?c(R,{}):u instanceof Error?c(z,{message:u.message,style:i}):u===!0?c(z,{message:`Can’t embed ${e} due to its content security policy.`,style:i}):c(`iframe`,{src:e,style:{...V,...i,...r,zoom:t,borderRadius:n,transformOrigin:`top center`},loading:`lazy`,fetchPriority:l?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:M(l)}):c(z,{message:`Unsupported protocol.`,style:i})}function M(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function N({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return c(n||r?F:P,{html:e,...t})}return c(I,{html:e,...t})}function P({html:e,style:t}){let n=r(),[i,l]=o(0);a(()=>{let e=n.current?.contentWindow;function t(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&l(r)}return s.addEventListener(`message`,t),e?.postMessage(`getEmbedHeight`,`*`),()=>{s.removeEventListener(`message`,t)}},[]);let u=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,d={...V,...t};return t.height||(d.height=i+`px`),c(`iframe`,{ref:n,style:d,srcDoc:u})}function F({html:e,style:t}){let n=r();return a(()=>{let t=n.current;if(t)return t.innerHTML=e,L(t),()=>{t.innerHTML=``}},[e]),c(`div`,{ref:n,style:{...H,...t}})}function I({html:e,style:t}){return c(`div`,{style:{...H,...t},dangerouslySetInnerHTML:{__html:e}})}function L(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)L(t)}function R(){return c(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...O,overflow:`hidden`},children:c(`div`,{style:U,children:`Loading…`})})}function z({message:e,style:t}){return c(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:B(t),...O,overflow:`hidden`,...t},children:c(`div`,{style:U,children:e})})}function B(e){if(!e.height)return 200}var V,H,U,W=e((()=>{i(),d(),n(),g(),oe(),C(k,{type:{type:y.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:y.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:y.String,displayTextArea:!0,hidden(e){return e.type!==`html`}},border:{title:`Border`,type:y.Border,optional:!0,hidden(e){return e.type!==`url`}},radius:{type:y.BorderRadius,title:`Radius`,hidden(e){return e.type!==`url`}},zoom:{title:`Zoom`,defaultValue:1,type:y.Number,hidden(e){return e.type!==`url`},min:.1,max:1,step:.1,displayStepper:!0}}),V={width:`100%`,height:`100%`,border:`none`},H={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},U={textAlign:`center`,minWidth:140}})),G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),g(),m(),n(),W(),se(),G=h(k),K={},q=`framer-XBN9b`,J={Vw9ajBTsm:`framer-v-dpkb9t`},Y=({value:e})=>S()?null:c(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),X=({height:e,id:t,width:n,...r})=>({...r}),Z=re(l(function(e,n){let i=r(null),a=n??i,o=f(),{activeLocale:s,setLocale:l}=E();b();let{style:d,className:m,layoutId:h,variant:g,...v}=X(e);T(t(()=>ce(void 0,s),[void 0,s]));let[y,S]=w(g,K,!1),C=_(q);return x({}),c(ne.Provider,{value:{primaryVariantId:`Vw9ajBTsm`,variantClassNames:J},children:u(p,{id:h??o,children:[c(Y,{value:`html body { background: var(--token-056bbe86-7e05-4e0e-9a91-0365b100480b, rgb(18, 19, 23)); }`}),c(ee.div,{...v,className:_(C,`framer-dpkb9t`,m),ref:a,style:{...d},children:c(D,{children:c(te,{className:`framer-1m4v4jg-container`,isModuleExternal:!0,nodeId:`DtB12J_uj`,scopeId:`KyLCbH0PQ`,children:c(k,{height:`100%`,html:``,id:`DtB12J_uj`,layoutId:`DtB12J_uj`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`url`,url:`https://test.app.mobiliz.seferiai.com/calculator-frame?embeded=true`,width:`100%`,zoom:1})})})}),c(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-XBN9b.framer-1snic9j, .framer-XBN9b .framer-1snic9j { display: block; }`,`.framer-XBN9b.framer-dpkb9t { align-content: center; align-items: center; background-color: var(--token-056bbe86-7e05-4e0e-9a91-0365b100480b, #121317); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-XBN9b .framer-1m4v4jg-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`],`framer-XBN9b`),Q=Z,Z.displayName=`Page`,Z.defaultProps={height:1080,width:1200},v(Z,[{explicitInter:!0,fonts:[]},...G],{supportsExplicitInterCodegen:!0}),$={exports:{Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerKyLCbH0PQ`,slots:[],annotations:{framerIntrinsicWidth:`1200`,framerAutoSizeImages:`true`,framerIntrinsicHeight:`1080`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,framerDisplayContentsDiv:`false`,framerScrollSections:`* @framerResponsiveScreen`,framerContractVersion:`1`,framerColorSyntax:`true`,framerComponentViewportWidth:`true`,framerAcceptsLayoutTemplate:`true`,framerImmutableVariables:`true`}},__FramerMetadata__:{type:`variable`}}}}))();export{$ as __FramerMetadata__,Q as default};
//# sourceMappingURL=RpZ7W5BdRGjNzYCYa9Fr_P75CpvZUQ5hjyDoswq-uYE.B8070rVv.mjs.map