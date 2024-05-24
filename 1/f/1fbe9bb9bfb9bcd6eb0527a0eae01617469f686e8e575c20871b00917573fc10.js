#sidebarToggle,
.toolbarButtonSpacer,
#viewFind,
#openFile,
#print,
#download,
#viewBookmark,
.verticalToolbarSeparator,
#secondaryToolbarToggle,
#scaleSelectContainer {
    display: none !important;
}

.toolbar {
    position: fixed;
    bottom: 0;
    height: 32px;
}

#mainContainer {
    min-width: 150px;
}

#viewerContainer {
    top: 0;
    bottom: 32px;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
}

#loadingBar {
    position: absolute;
    top: -4px;
}

@media screen and (min-device-width: 600px) {
    #viewerContainer {
        overflow: hidden;
    }
}

@media (max-width: 510px) and (min-device-width: 600px) {
    #scaleSelectContainer,
    #pageNumberLabel {
        /*display: block;*/
    }
}

#presentationMode {
    /*display: block !important;*/
}

@media all and (max-width: 640px) {
    .hiddenSmallView,
    .hiddenSmallView * {
        display: block;
    }

    .visibleSmallView {
        display: inherit;
    }

    .toolbarButtonSpacer {
        width: 0;
    }
}

html[dir='ltr'] .toolbarButton.pageUp::before {
    /*content: url(images/toolbarButton-prevPage.png);*/
}

html[dir='ltr'] .toolbarButton.pageDown::before {
    /*content: url(images/toolbarButton-nextPage.png);*/
}

@media screen and (min-resolution: 2dppx) {
    html[dir='ltr'] .toolbarButton.pageUp::before {
        /*content: url(images/toolbarButton-prevPage@2x.png);*/
    }

    html[dir='ltr'] .toolbarButton.pageDown::before {
        /*content: url(images/toolbarButton-nextPage@2x.png);*/
    }
}

.pageUp,
.pageDown {
    /*float: none !important;*/
}

#toolbarViewer,
.toolbar,
#toolbarContainer {
    height: 40px;
}
#toolbarViewer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#viewerContainer {
    bottom: 40px;
}

#toolbarViewerLeft,
#toolbarViewerRight {
    margin-top: 5px;
}

#toolbarViewerLeft {
    margin-left: 5px;
}

.toolbarField.pageNumber {
    width: 25px;
}

#toolbarContainer,
.findbar,
.secondaryToolbar {
    background-color: #222;
    background-image: none;
}

body {
    background-color: #000;
    background-image: none;
}

.toolbarViewer {

}


    #toolbarViewerMiddle,
    #toolbarViewerMiddle .splitToolbarButton {
        margin:0;
        display: flex;
        align-items: center;
    }


