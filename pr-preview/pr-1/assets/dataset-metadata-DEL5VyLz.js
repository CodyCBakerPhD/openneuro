import{k as l,R as o,o as i,n as d,f as c}from"./index-B3fRTVAC.js";import{D as u}from"./data-table-CFVLUKKl.js";import"/openneuro/pr-preview/pr-1/crn/config.js";import"./index-CJJibF1O.js";function m(t){if(t.length===0)return"";const a=Object.keys(t[0]).filter(e=>e!=="__typename"),n=a.join(",")+`
`,s=t.map(e=>a.map(r=>e[r]?`"${e[r].toString().replace(/"/g,'""')}"`:"").join(","));return n+s.join(`
`)}function p(t,a){const n=m(t),s=new Blob([n],{type:"text/csv;charset=utf-8;"}),e=document.createElement("a");if(e.download!==void 0){const r=URL.createObjectURL(s);e.setAttribute("href",r),e.setAttribute("download",a),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)}}const f=d.div`
  background: white;
  overflow-x: scroll;
  padding: 1em;
  height: calc(100vh - 125px);
  white-space: nowrap;
`,b=d.button`
  display: inline-block;
  margin-right: 1em;
`,g=c`
  query {
    publicMetadata {
      datasetId
      datasetUrl
      datasetName
      firstSnapshotCreatedAt
      latestSnapshotCreatedAt
      dxStatus
      tasksCompleted
      trialCount
      grantFunderName
      grantIdentifier
      studyDesign
      studyDomain
      studyLongitudinal
      dataProcessed
      species
      associatedPaperDOI
      openneuroPaperDOI
      seniorAuthor
      adminUsers
      ages
      modalities
      affirmedDefaced
      affirmedConsent
    }
  }
`;function v(){const{loading:t,error:a,data:n}=l(g,{errorPolicy:"all"});return t||a?o.createElement(i,null):o.createElement(f,null,o.createElement("p",null,o.createElement(b,{role:"button",type:"button",className:"on-button on-button--small on-button--primary icon-text","aria-label":"Download",onClick:()=>p(n?.publicMetadata,"openneuro-metadata.csv")},o.createElement("i",{className:"fa fa-download css-0","aria-hidden":"true"}),"Download CSV"),"Metadata collected for all public datasets on OpenNeuro."),o.createElement(u,{data:n?.publicMetadata,downloadFilename:"openneuro-metadata.csv",hideColumns:["__typename","datasetUrl","affirmedDefaced","affirmedConsent"]}))}export{v as DatasetMetadata};
//# sourceMappingURL=dataset-metadata-DEL5VyLz.js.map
