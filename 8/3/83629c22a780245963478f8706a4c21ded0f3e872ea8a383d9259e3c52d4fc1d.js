/* Pogo */
div[data-pogo] { display: grid; align-content: center; justify-content: center; }
div[data-pogo] iframe { margin-left: auto; margin-right: auto; }
div[data-pogo="amazon"] { display: block; }
div[data-pogo="main"], div[data-pogo="incontent"], div[data-pogo="sidebar"]  { min-height: 280px; }

div[data-pogo="incontent"] { margin: 10px auto; }
div[data-pogo="incontent"].apscustom { min-height: 0; display: block; }
div[data-aps-custom-status="rendered"].apscustom { margin: 1.5rem auto; }

div.mobileOnly { display: grid; }
div.deskOnly { display: none; }

div[data-pogo].hasPogoNative { display: block; }
.content-lift { display: block; }
.content-lift .image { display: block; }
.content-lift .image img { max-width: 100%; border-radius: .375rem; border: 1px solid rgb(245 245 244); }
.content-lift .text { display: block; }
.content-lift .title { display: block; }
.content-lift .deck { display: none; }
.content-lift .sponsored-by { display: block; }

.content-lift .image { margin-bottom: 1rem; }
.content-lift .title { line-height: 1.25; font-weight: 500; font-size: 1.25rem; margin-top: 0.5rem; }
.content-lift:hover .title { text-decoration-color: #cfffdd; text-decoration-line: underline; text-decoration-skip-ink: none; text-decoration-thickness: 0.5rem; text-underline-offset: -0.25rem; }
.content-lift .sponsored-by { font-family: akshar,Segoe UI,Helvetica Neue,Helvetica,Roboto,sans-serif; font-size: 0.875rem; text-transform: uppercase; color: rgb(2 136 88); line-height: 1; margin-top: 0.25rem; }

div[data-ga-module="content-list"] .content-lift { }
div[data-ga-module="content-list"] .content-lift .text {  }
div[data-ga-module="content-list"] .content-lift .image { }
div[data-ga-module="content-list"] .content-lift .title { letter-spacing: .025em; font-family: akshar,Segoe UI,Helvetica Neue,Helvetica,Roboto,sans-serif; line-height: 1.75rem; }
div[data-ga-module="content-list"] .content-lift .sponsored-by { }

.zmgad-full-width { padding-top: 1.5rem; padding-bottom: 1.5rem; display: block; }

div[data-pogo=footer]:before, div[data-pogo=incontent]:before, div[data-pogo=main]:before, div[data-pogo=sidebar]:before {
    color: #a5a5a5 !important;
    content: "ADVERTISEMENT";
    display: block;
    font-family: inter,Segoe UI,Helvetica Neue,Helvetica,Roboto,sans-serif;
    font-size: .75rem !important;
    letter-spacing: .025em;
    margin-bottom: 10px;
    text-align: center
}


@media (min-width: 768px) {
    div[data-ga-module="content-list"] .content-lift { display: flex; flex-direction: row; flex-wrap: nowrap; max-width: 56rem; margin:0; margin-top: 1rem; padding: 0.5rem 0; }
    div[data-ga-module="content-list"] .content-lift .image { width: 100%; max-width: 24%; margin-right: 1.5rem; margin-bottom: 0; aspect-ratio: 245/138; }
    div[data-ga-module="content-list"] .content-lift .deck { display: block; line-height: 1.25; margin-top: 0.25rem; }

    div[data-pogo=incontent],div[data-pogo=main],div[data-pogo=top] {
        min-height:120px
    }
}


@media (max-width: 640px) {
  div[data-pogo="top"] { min-height: 50px; }
}

@media (min-width: 1024px) {
    div[data-pogo="top"], div[data-pogo="main"] { min-height: 290px; }
    div[data-pogo="sidebar"] { min-height: 280px; align-content: flex-start; margin-top: 0px; /* min-height: 630px; */}

    div.mobileOnly { display: none; }
    div.deskOnly { display: grid; }
    .pgSticky { position: sticky; top: 1rem; margin-bottom: 1rem; }

}

@media (min-width: 1360px) {
    div[data-ga-module].sticky.top-12 { top: 1rem; }
    aside div.mt-24.h-[574px] { margin-top: 4rem; }
}
