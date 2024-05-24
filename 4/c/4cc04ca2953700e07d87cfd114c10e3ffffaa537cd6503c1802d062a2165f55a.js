import{d as t,a7 as a,j as n,bi as s,a6 as r}from"./index-172e3f67.js";const d=({className:e,children:o})=>{const[{scrollbarRightWidth:i}]=a();return n.jsx("div",{style:{width:`calc(100% - ${i})`},className:e,children:o})},l=t(d)`
  position: fixed;
  bottom: 0;
  z-index: 10;
`,p=s`
0% {
  transform: translateY(100%);
}
100% {
  transform: translateY(0);
}`,m=t(l)`
  padding: 10px 15px 0;
  &.slide-in {
    animation: 450ms cubic-bezier(0.43, 0, 0.09, 1) ${p};
  }

  &.collapsed {
    .collapsable-body {
      max-height: 0;
    }
  }

  .constant-head {
    padding-right: 30px;
    .toggle-btn {
      position: absolute;
      top: 5px;
      right: 5px;
      svg {
        padding: 5px;
        width: 35px;
      }
    }

    .headline {
      margin-bottom: 11px;
    }
  }

  .collapsable-body {
    max-height: 300px;
    transition: max-height 450ms cubic-bezier(0.43, 0, 0.09, 1);

    p.text {
      margin-bottom: 20px;
    }

    .button-wrapper {
      flex-direction: column-reverse;
      padding-bottom: 30px;

      & > * {
        width: 100%;
      }
    }
  }

  .text {
    display: inline-block;
    font-size: 1.5rem;

    a {
      text-decoration: underline;
    }
  }

  ${r.sm`
    /* we need to override an inline style here */
    width: 375px !important;
  `}
`;export{m as S};
//# sourceMappingURL=ModalLayerLayout.cd23-f9d54980.js.map
