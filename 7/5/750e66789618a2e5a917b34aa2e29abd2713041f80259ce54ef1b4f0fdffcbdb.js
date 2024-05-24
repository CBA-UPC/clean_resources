/**
 * @file
 * Table sort indicator.
 *
 * @see tablesort-indicator.html.twig
 */

.tablesort {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: 100%;
}
.tablesort--asc {
  background-image: url(../../../images/core/icons/787878/twistie-down.svg);
}
.tablesort--desc {
  background-image: url(../../../images/core/icons/787878/twistie-up.svg);
}
', 'aui-overlay-manager', 'dd-constrain', 'aui-io-request', 'opportal-dispatcher']
                    },
                    'opportal-permalink': {
                        fullpath: '/o/OPPortalEE/js/opportal/opportal-permalink/opportal-permalink.js',
                        requires: ['node', 'anim', 'io-base', 'aui-modal', 'opportal-dialog', 'event-focus','event-key']
                    },
                    'opportal-treeSelector': {
                        fullpath: '/o/OPPortalEE/js/opportal/opportal-treeSelector/opportal-treeSelector.js',
                        requires: ['node', 'anim', 'aui-modal', 'opportal-dialog', 'event-focus','event-key', 'aui-tree-view']
                    },
                    'opportal-dispatcher': {
                        fullpath: '/o/OPPortalEE/js/opportal/opportal-dispatcher/opportal-dispatcher.js',
                        requires: ['base', 'node-base', 'io-base', 'get', 'async-queue', 'classnamemanager']
                    },
                    'opportal-tools': {
                        fullpath: '/o/OPPortalEE/js/opportal/opportal-tools/opportal-tools.js',
                        requires: ['node', 'node-event-simulate']
                    },
                    'opportal-placeholder': {
                        fullpath: '/o/OPPortalEE/js/opportal/opportal-placeholder/opportal-placeholder.js',
                        requires: ['node', 'base-build', 'plugin', 'classnamemanager', 'attribute-base']
                    },
                    'opportal-accessibility': {
                        fullpath: '/o/OPPortalEE/js/opportal/opportal-accessibility/opportal-accessibility.js',
                        requires: ['node', 'base-build', 'plugin']
                    },
                    dojo: {
                        fullpath: '//ajax.googleapis.com/ajax/libs/dojo/1.10.0/dojo/dojo.js'
                    },
                    'opportal-labels': {
                        fullpath: '/o/OPPortalEE/js/opportal/opportal-labels/opportal-labels.js',
                        requires: []
                    },
                    'gallery-storage-lite': {
                        fullpath: '/o/OPPortalEE/js/opportal/gallery-storage-lite/gallery-storage-lite.js',
                        requires: ["event-base", "event-custom", "event-custom-complex", "json", "node-base"]
                    },
                    'opportal-hierarchicBrowser': {
                        fullpath: '/o/OPPortalEE/js/opportal/opportal-hierarchicBrowser/opportal-hierarchicBrowser.js',
                        requires: ['node']
                    },
                    'opportal-numericInput': {
                        fullpath: '/o/OPPortalEE/js/opportal/opportal-numericInput/opportal-numericInput.js',
                        requires: ['node', 'base-build', 'plugin', 'classnamemanager', 'attribute-base']
                    },
                    'opportal-publicationSlide': {
                        fullpath: '/o/OPPortalEE/js/opportal/opportal-publicationSlide/opportal-publicationSlide.js',
                        requires: ['node', 'base-build', 'plugin', 'classnamemanager']
                    }
                }
            }
        }
    };

    A.applyConfig(portalConfig);
/*
    A._setup();
*/
})(AUI());