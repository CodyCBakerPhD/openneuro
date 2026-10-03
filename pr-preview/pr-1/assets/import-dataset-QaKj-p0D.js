import{d as s,e as D,X as E,R as e,n as p,B as I,aT as g,f as S,aU as w,aV as y,h as b}from"./index-B3fRTVAC.js";import{L as R,a as v}from"./logged-out-2DMd9aU5.js";import"/openneuro/pr-preview/pr-1/crn/config.js";const L=S`
  mutation importRemoteDataset($datasetId: ID!, $url: String!) {
    importRemoteDataset(datasetId: $datasetId, url: $url)
  }
`,U=p.div`
  margin-top: 1em;
`,A=p.input`
  width: 100%;
`,C=({url:t,disabled:a,affirmedDefaced:i,affirmedConsent:n,syntheticDataset:o})=>{const[l,c]=s.useState(!1),[r,m]=s.useState(!1),[u]=D(L),f=E();let d=e.createElement(I,{className:"btn-modal-action",primary:!0,label:"Start Import",size:"medium",disabled:a,onClick:async()=>{const h=await g(f)({affirmedDefaced:i,affirmedConsent:n,syntheticDataset:o});try{await u({variables:{datasetId:h,url:t}}),c(!0)}catch{m(!0)}}});return l&&!r&&(d=e.createElement("p",null,"This import has been started and you will receive an email when it is complete.")),r&&(d=e.createElement("p",null,"An error was encountered importing this URL. This may indicate the URL is inaccessible or is not the correct zip format. Please contact support if you have verified the bundle is correct and still experience this error.")),e.createElement(e.Fragment,null,e.createElement("label",null,"Source URL",e.createElement(A,{type:"text",disabled:!0,value:t,id:"import-url"})),e.createElement(U,null,d))};function x(){const{search:t}=b();return e.useMemo(()=>new URLSearchParams(t),[t])}const M=p.div`
  background: white;

  .container {
    max-width: 60em;
    min-height: calc(100vh - 125px);
  }
`,F=()=>{const t=x().get("url"),[a,i]=s.useState(!1),[n,o]=s.useState(!1),[l,c]=s.useState(!1);return e.createElement(M,null,e.createElement("div",{className:"container"},e.createElement("h2",null,"Import a dataset from remote URL"),e.createElement("p",null,"Use this page to import a new OpenNeuro dataset from"," ",e.createElement("a",{href:"https://brainlife.io/ezbids/"},"ezBIDS"),". After submitting an import, please allow some time for processing and you will receive an email notification when complete."),e.createElement(R,null,e.createElement(w,{affirmedDefaced:a,affirmedConsent:n,syntheticDataset:l,showInputs:!0,onChange:({affirmedDefaced:r,affirmedConsent:m,syntheticDataset:u})=>{i(r),o(m),c(u)}}),e.createElement(C,{url:t,disabled:y(a,n),affirmedDefaced:a,affirmedConsent:n,syntheticDataset:!1})),e.createElement(v,null,e.createElement("p",null,"Please sign in to continue."))))};export{F as ImportDataset};
//# sourceMappingURL=import-dataset-QaKj-p0D.js.map
