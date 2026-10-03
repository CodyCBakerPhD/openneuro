import{n as a,R as e,aP as i,L as t,aZ as r,ag as m,aS as l}from"./index-B3fRTVAC.js";import"/openneuro/pr-preview/pr-1/crn/config.js";function o(){const n=a.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    img {
      width: 30%;
      max-width: 200px;
      margin-right: 20px;
      height: auto;
    }
    label {
      font-weight: bold;
    }
      p:first-of-type{ margin-top:0}
  `;return e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement("img",{src:i,alt:""}),e.createElement("p",null,e.createElement("div",null,e.createElement("label",null,"Used with permission:")," ",e.createElement("a",{href:"https://mne.tools/mne-nirs/stable/index.html"},"MNE-NIRS")),e.createElement("div",null,e.createElement("label",null,"Locations used: "," "),e.createElement(t,{to:"/"},"OpenNeuro"),", ",e.createElement(t,{to:"/search/modality/nirs?query=%7B%22modality_selected%22%3A%22nirs%22%7D"},"NIRS Modality Search")))),e.createElement(n,null,e.createElement("img",{src:r,alt:""}),e.createElement("p",null,e.createElement("div",null,e.createElement("label",null,"Used with permission:")," ",e.createElement("a",{href:"https://braininitiative.nih.gov/"},"NIH BRAIN Initiative",e.createElement("sup",null,"®"))),e.createElement("div",null,e.createElement("label",null,"Locations used: "," "),e.createElement(t,{to:"/"},"OpenNeuro"),", ",e.createElement(t,{to:"/search/nih?query=%7B%22brain_initiative%22%3A%22true%22%7D"},"NIH BRAIN Initiative Portal")))))}const c=a.div`
  background: white;

  .container {
    max-width: 60em;
  }
`;function E(){return e.createElement(c,null,e.createElement(m,null,e.createElement("title",null,"Image Attribution - ",l.pageTitle),e.createElement("meta",{name:"description",content:`Image Attribution of the ${l.pageTitle} data archive`})),e.createElement("div",{className:"container"},e.createElement("h2",null,"OpenNeuro Image Attribution"),e.createElement(o,null)))}export{E as ImageAttribution};
//# sourceMappingURL=image-attribution-C8BbXLQ1.js.map
