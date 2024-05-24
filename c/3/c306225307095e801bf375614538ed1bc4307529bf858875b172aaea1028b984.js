article_articleode'
          )}`
        ).then(({ data }) =>
          data.map(({ path_name, url }, index) =>
            navigation_navigationPathTemplate({
              title: path_name,
              __attr__href: `//${url}`,
              __attr__index: index
            })
          )
        )
    }),
    panel: header_menuNavTemplate({
      'menu-item': public_asyncLoader({
        __attr__promise: () =>
          request(
            `//${
              !!hostname.includes('huanqiu-ltd')
                ? window.global_constant.global_path
                : window.location.host
            }/api/black_json`
          ).then(({ data }) =>
            data.map(({ name, desc, children }, index) =>
              header_menuItemTemplate({
                __attr__index: index,
                title: name,
                subtitle: desc,
                children: JSON.stringify(children)
              })
            )
          )
      })
    }),
    ad:
      !['2', '3', '4'].includes(
        nodeText('article > textarea.article-ext-serious')
      ) &&
      public_fragmentTemplate({
        __edit__id: 'controls_csr_topheader_ad_csr_topheader_ad',
        content: public_advLoader({
          __attr__id: document.getElementById('csr_topheader_ad')
            ? document.getElementById('csr_topheader_ad').textContent
            : '',
          __attr__style: !window.AD_SURVEY_Add_AdPos
            ? '{}'
            : '{ background: #fff; padding: 15px 0px;}'
        })
      })
  }),
  head: article_articleHeadTemplate({
    ad1:
      !['2', '3', '4'].includes(
        nodeText('article > textarea.article-ext-serious')
      ) &&
      public_fragmentTemplate({
        __edit__id: 'controls_csr_bottomheaderl_ad_csr_bottomheaderl_ad',
        content: public_advLoader({
          __attr__id: document.getElementById('csr_bottomheaderl_ad')
            ? document.getElementById('csr_bottomheaderl_ad').textContent
            : '',
          __attr__style: !window.AD_SURVEY_Add_AdPos
            ? '{}'
            : '{ background: #fff; padding: 15px 0px;}'
        })
      }),
    ad2:
      !['2', '3', '4'].includes(
        nodeText('article > textarea.article-ext-serious')
      ) &&
      public_fragmentTemplate({
        __edit__id: 'controls_csr_bottomheaderr_ad_csr_bottomheaderr_ad',
        content: public_advLoader({
          __attr__id: document.getElementById('csr_bottomheaderr_ad')
            ? document.getElementById('csr_bottomheaderr_ad').textContent
            : '',
          __attr__style: !window.AD_SURVEY_Add_AdPos
            ? '{}'
            : '{ background: #fff; padding: 15px 0px;}'
        })
      }),
    title: nodeText('article > textarea.article-title') || '',
    exttopic:  (['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) && nodeText('article > textarea.article-ext-topic') && nodeText('article > textarea.article-ext-topic')!=null && nodeText('article > textarea.article-ext-topic')!='' && nodeText('article > textarea.article-ext-topic')!=undefined) ? nodeText('article > textarea.article-ext-topic') : '',
    subtitle: (['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) && nodeText('article > textarea.article-subtitle') && nodeText('article > textarea.article-subtitle')!=null && nodeText('article > textarea.article-subtitle')!='' && nodeText('article > textarea.article-subtitle')!=undefined) ? nodeText('article > textarea.article-subtitle') : '',
    source: `来源：${nodeHTML('article > textarea.article-source-name') || ''}`,
    author: `${
      nodeHTML('article > textarea.article-author') != '[]' &&
      nodeHTML('article > textarea.article-author').trim() != '' &&
      nodeHTML('article > textarea.article-author') != '作者：'
        ? '作者：' +
          nodeHTML('article > textarea.article-author').replace('作者：', '')
        : ''
    }`,
    data: JSON.stringify(
      nodeList('.fix_aid .item').map((item) => ({
        aid: item['item-aid'],
        fix: item['item-fix'],
      }))
    )
  }),
  left: [
    layout_layoutBlockTemplate({
      bd: article_articleContentTemplate({
        __edit__id: 'controls_csr_article_csr_article',
        __attr__aid: nodeText('textarea.article-aid'),
        __attr__catnode: nodeText('textarea.article-catnode'),
        __attr__weibo: `http://service.weibo.com/share/share.php?url=https://${nodeText(
          'textarea.article-host'
        )}/${
          nodeText('textarea.article-addltype') === 'gallery'
            ? 'gallery'
            : 'article'
        }/${nodeText('textarea.article-aid')}&pic=https:${
          !['undefined', ''].includes(nodeText('textarea.article-cover'))
            ? nodeText('textarea.article-cover')
            : '//rs2.huanqiucdn.cn/huanqiu/image/www/common/200.jpg'
        }&title=${nodeText('textarea.article-title')}`,
        __attr__host: nodeText('textarea.article-host'),
        __attr__addltype: nodeText('textarea.article-addltype'),
        __attr__header: nodeText('textarea.article-title').replace(
          /^\s+|\s+$/g,
          ''
        ),
        __attr__serious:
          nodeText('article > textarea.article-ext-serious') || '',
        __attr__cover:
          nodeText('textarea.article-cover') != 'undefined'
            ? nodeText('textarea.article-cover')
            : '',
        __attr__time: nodeText('textarea.article-ext-xtime'),
        YYYY:
          nodeText('textarea.article-ext-xtime') &&
          formatDate(nodeText('textarea.article-ext-xtime'), 'YYYY'),
        MM:
          nodeText('textarea.article-ext-xtime') &&
          formatDate(nodeText('textarea.article-ext-xtime'), 'MM/DD'),
        HH:
          nodeText('textarea.article-ext-xtime') &&
          formatDate(nodeText('textarea.article-ext-xtime'), 'HH:mm'),
        content: nodeHTML('article > textarea.article-content'),
        editor: nodeText('article > textarea.article-editor-name'),
        copyright: nodeText('article > textarea.article-copyright')
      })
    }),
    nodeHTML('article > textarea.article-ext-relation') &&
      nodeHTML('article > textarea.article-ext-relation') != '[]' &&
      layout_layoutBlockTemplate({
        __attr__style: `{background: #f9f9f9;padding: 16px 20px 20px;}`,
        hd: layout_layoutHdTemplate({
          __attr__line: true,
          title: '相关新闻'
        }),
        bd: layout_layoutBdTemplate({
          'txt-item': public_asyncLoader({
            __attr__promise: () => {
              var oStr = nodeHTML('article > textarea.article-ext-relation');
              oStr = oStr.slice(1);
              oStr = oStr.substring(0, oStr.length - 1);
              return request(
                `//${
                  !!hostname.includes('huanqiu-ltd')
                    ? window.global_constant.global_path
                    : window.location.host
                }/api/article/about?aids=${oStr}`
              ).then(({ list }) =>
                list.map(({ aid, addltype, title, xtime, host }) => {
                  if (!aid) return null;
                  addltype = addltype == 'gallery' ? 'gallery' : 'article';
                  if (aid) {
                    return sketch_sketchTxtTemplate({
                      __attr__href: `//${host}/${addltype}/${aid}`,
                      __attr__time: `right`,
                      title: title,
                      time: xtime && formatDate(xtime)
                    });
                  }
                })
              );
            }
          })
        })
      })
  ],
  feed:
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
    layout_layoutBlockTemplate({
      hd: layout_layoutHdTemplate({
        __attr__line: true,
        title: '推荐阅读'
      }),
      bd: layout_layoutBdTemplate({
        'feed-item': sketch_sketchFeedTemplate({
          __attr__host: !!hostname.includes('huanqiu-ltd')
            ? window.global_constant.global_path
            : window.location.host,
          __attr__api: `/api/list`,
          __attr__number: `4`,
          __attr__limit: 24,
          __attr__animation: true,
          __attr__jsonp_ad: true,
          __attr__ad: JSON.stringify({
            3: [
              ['7009495'],
              ['7009496'],
              ['7009497'],
              ['7009498'],
              ['7009499'],
              ['7009500'],
              ['7009501'],
              ['7009502'],
              ['7009503'],
              ['7009504'],
              ['7009505']
            ]
          })
        })
      })
    }),
  right1: [
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      !window.AD_SURVEY_Add_AdPos &&
      article_articleOtherTemplate({}),
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      public_fragmentTemplate({
        __edit__id: 'controls_csr_article_ad_1_csr_article_ad_1',
        content: public_advLoader({
          __attr__id: document.getElementById('csr_other_1')
            ? document.getElementById('csr_other_1').textContent
            : '',
          __attr__style: !window.AD_SURVEY_Add_AdPos
            ? '{}'
            : '{ background: #f9f9f9; padding: 15px; height: 280px; margin-bottom: 20px; }'
        })
      }),
    // 环球时事
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      layout_layoutSideBlockTemplate({
        hd: layout_layoutHdTemplate({
          __edit__id: 'controls_csr_article_aside_hqss_csr_article_aside_hqss',
          __attr__id: 'controls_csr_article_aside_hqss_csr_article_aside_hqss',
          __attr__line: true,
          __attr__href: 'https://world.huanqiu.com',
          more: `<i class="iconfont icon-side-more"></i>`,
          title: nodeText('.article_aside_hqss .hd textarea.title')
        }),
        bd: [
          layout_layoutBdTemplate({
            __edit__id: 'lets_csr_article_aside_hqss1_csr_article_aside_hqss1',
            'txt-item': [
              public_fragmentTemplate({
                content: nodeList('.article_aside_hqss .bd .item')
                  .slice(0, 1)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__strong: true,
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                content: nodeList('.article_aside_hqss .bd .item')
                  .slice(1, 3)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              })
            ]
          }),
          layout_layoutBdTemplate({
            'txt-item': [
              public_fragmentTemplate({
                __edit__id:
                  'lets_csr_article_aside_hqss2_csr_article_aside_hqss2',
                content: nodeList('.article_aside_hqss .bd .item')
                  .slice(3, 5)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                __edit__id:
                  'lets_csr_article_aside_hqss3_csr_article_aside_hqss3',
                content: nodeList('.article_aside_hqss .bd .item')
                  .slice(5, 6)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              })
            ]
          }),
          layout_layoutBdTemplate({
            __edit__id: 'lets_csr_article_aside_hqss4_csr_article_aside_hqss4',
            'txt-item': [
              public_fragmentTemplate({
                content: nodeList('.article_aside_hqss .bd .item')
                  .slice(6, 7)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      __attr__strong: true,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                content: nodeList('.article_aside_hqss .bd .item')
                  .slice(7, 8)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              })
            ]
          }),
          layout_layoutBdTemplate({
            'txt-item': [
              public_fragmentTemplate({
                __edit__id:
                  'lets_csr_article_aside_hqss5_csr_article_aside_hqss5',
                content: nodeList('.article_aside_hqss .bd .item')
                  .slice(8, 10)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                __edit__id:
                  'lets_csr_article_aside_hqss6_csr_article_aside_hqss6',
                content: nodeList('.article_aside_hqss .bd .item')
                  .slice(10, 11)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                __edit__id:
                  'lets_csr_article_aside_hqss7_csr_article_aside_hqss7',
                content: nodeList('.article_aside_hqss .bd .item')
                  .slice(11, 12)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              })
            ]
          })
        ]
      }),
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      public_fragmentTemplate({
        __edit__id: 'controls_csr_article_ad_2_csr_article_ad_2',
        content: public_advLoader({
          __attr__id: document.getElementById('csr_other_2')
            ? document.getElementById('csr_other_2').textContent
            : '',
          __attr__style: !window.AD_SURVEY_Add_AdPos
            ? '{}'
            : '{ background: #f9f9f9; padding: 15px; height: 280px; margin-bottom: 20px; }'
        })
      }),
    // 环球业界
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      layout_layoutSideBlockTemplate({
        hd: layout_layoutHdTemplate({
          __edit__id: 'controls_csr_article_aside_hqyj_csr_article_aside_hqyj',
          __attr__id: 'controls_csr_article_aside_hqyj_csr_article_aside_hqyj',
          __attr__line: true,
          __attr__href: 'https://finance.huanqiu.com',
          more: `<i class="iconfont icon-side-more"></i>`,
          title: nodeText('.article_aside_hqyj .hd textarea.title')
        }),
        bd: [
          layout_layoutBdFlexTemplate({
            'flex-1': public_fragmentTemplate({
              __edit__id:
                'lets_csr_article_aside_hqyjt1_csr_article_aside_hqyjt1',
              __attr__style: 'div {flex:1;}',
              content: nodeList('.article_aside_hqyj .bd .item')
                .slice(0, 1)
                .map((item) =>
                  image_imageImgTemplate({
                    __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                    __attr__image: item['item-cover'],
                    __attr__animation: true,
                    __attr__number: 2,
                    __attr__title: 'center',
                    title: item['item-subtitle'],
                    time: item['item-time'] && formatDate(item['item-time'])
                  })
                )
            }),
            'flex-2': public_fragmentTemplate({
              __edit__id:
                'lets_csr_article_aside_hqyjt2_csr_article_aside_hqyjt2',
              __attr__style: 'div {flex:1;}',
              content: nodeList('.article_aside_hqyj .bd .item')
                .slice(1, 2)
                .map((item) =>
                  image_imageImgTemplate({
                    __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                    __attr__image: item['item-cover'],
                    __attr__animation: true,
                    __attr__number: 2,
                    __attr__title: 'center',
                    title: item['item-subtitle'],
                    time: item['item-time'] && formatDate(item['item-time'])
                  })
                )
            })
          }),
          layout_layoutBdTemplate({
            'txt-item': [
              public_fragmentTemplate({
                __attr__style: 'div { width: 290px}',
                __edit__id:
                  'lets_csr_article_aside_hqyjb1_csr_article_aside_hqyjb1',
                content: nodeList('.article_aside_hqyj .bd .item')
                  .slice(2, 4)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                __attr__style: 'div { width: 290px}',
                __edit__id:
                  'lets_csr_article_aside_hqyjb2_csr_article_aside_hqyjb2',
                content: nodeList('.article_aside_hqyj .bd .item')
                  .slice(4, 5)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                __attr__style: 'div { width: 290px}',
                __edit__id:
                  'lets_csr_article_aside_hqyjb3_csr_article_aside_hqyjb3',
                content: nodeList('.article_aside_hqyj .bd .item')
                  .slice(5, 7)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              })
            ]
          })
        ]
      }),
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      public_fragmentTemplate({
        __edit__id: 'controls_csr_article_ad_3_csr_article_ad_3',
        content: public_advLoader({
          __attr__id: document.getElementById('csr_other_3')
            ? document.getElementById('csr_other_3').textContent
            : '',
          __attr__style: !window.AD_SURVEY_Add_AdPos
            ? '{}'
            : '{ background: #f9f9f9; padding: 15px; height: 280px; margin-bottom: 20px; }'
        })
      }),
    // 环球风尚
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      layout_layoutSideBlockTemplate({
        hd: layout_layoutHdTemplate({
          __edit__id: 'controls_csr_article_aside_hqfc_csr_article_aside_hqfc',
          __attr__id: 'controls_csr_article_aside_hqfc_csr_article_aside_hqfc',
          __attr__line: true,
          __attr__href: 'https://fashion.huanqiu.com',
          more: `<i class="iconfont icon-side-more"></i>`,
          title: nodeText('.article_aside_hqfc .hd textarea.title')
        }),
        bd: layout_layoutBdFlexTemplate({
          'flex-1': public_fragmentTemplate({
            __edit__id: 'lets_csr_article_aside_hqfc1_csr_article_aside_hqfc1',
            __attr__style: 'div {flex:1;}',
            content: nodeList('.article_aside_hqfc .bd .item')
              .slice(0, 1)
              .map((item) =>
                image_imageImgTemplate({
                  __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                  __attr__image: item['item-cover'],
                  __attr__animation: true,
                  __attr__title: 'center',
                  title: item['item-title'],
                  time: item['item-time'] && formatDate(item['item-time'])
                })
              )
          }),
          'flex-2': public_fragmentTemplate({
            __edit__id: 'lets_csr_article_aside_hqfc2_csr_article_aside_hqfc2',
            __attr__style: 'div { flex:1}',
            content: nodeList('.article_aside_hqfc .bd .item')
              .slice(1, 2)
              .map((item) =>
                image_imageImgTemplate({
                  __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                  __attr__image: item['item-cover'],
                  __attr__animation: true,
                  __attr__title: 'center',
                  title: item['item-title'],
                  time: item['item-time'] && formatDate(item['item-time'])
                })
              )
          }),
          'flex-3': public_fragmentTemplate({
            __edit__id: 'lets_csr_article_aside_hqfc3_csr_article_aside_hqfc3',
            __attr__style: 'div { flex:1}',
            content: nodeList('.article_aside_hqfc .bd .item')
              .slice(2, 3)
              .map((item) =>
                image_imageImgTemplate({
                  __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                  __attr__image: item['item-cover'],
                  __attr__animation: true,
                  __attr__title: 'center',
                  title: item['item-title'],
                  time: item['item-time'] && formatDate(item['item-time'])
                })
              )
          }),
          'flex-4': public_fragmentTemplate({
            __edit__id: 'lets_csr_article_aside_hqfc4_csr_article_aside_hqfc4',
            __attr__style: 'div { flex:1}',
            content: nodeList('.article_aside_hqfc .bd .item')
              .slice(3, 4)
              .map((item) =>
                image_imageImgTemplate({
                  __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                  __attr__image: item['item-cover'],
                  __attr__animation: true,
                  __attr__title: 'center',
                  title: item['item-title'],
                  time: item['item-time'] && formatDate(item['item-time'])
                })
              )
          })
        })
      })
  ],
  right2: [
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      public_fragmentTemplate({
        __edit__id: 'controls_csr_article_ad_4_csr_article_ad_4',
        content: public_advLoader({
          __attr__id: document.getElementById('csr_other_4')
            ? document.getElementById('csr_other_4').textContent
            : '',
          __attr__style: !window.AD_SURVEY_Add_AdPos
            ? '{}'
            : '{ background: #f9f9f9; padding: 15px; height: 280px; margin-bottom: 20px; }'
        })
      }),
    // 环球产经
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      layout_layoutSideBlockTemplate({
        hd: layout_layoutHdTemplate({
          __edit__id: 'controls_csr_article_aside_hqcj_csr_article_aside_hqcj',
          __attr__id: 'controls_csr_article_aside_hqcj_csr_article_aside_hqcj',
          __attr__line: true,
          __attr__href: 'https://lx.huanqiu.com',
          more: `<i class="iconfont icon-side-more"></i>`,
          title: nodeText('.article_aside_hqcj .hd textarea.title')
        }),
        bd: [
          layout_layoutBdFlexTemplate({
            'flex-1': public_fragmentTemplate({
              __edit__id:
                'lets_csr_article_aside_hqcjt1_csr_article_aside_hqcjt1',
              __attr__style: 'div {flex:1;}',
              content: nodeList('.article_aside_hqcj .bd .item')
                .slice(0, 1)
                .map((item) =>
                  image_imageImgTemplate({
                    __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                    __attr__image: item['item-cover'],
                    __attr__animation: true,
                    __attr__number: 2,
                    __attr__title: 'center',
                    title: item['item-subtitle'],
                    time: item['item-time'] && formatDate(item['item-time'])
                  })
                )
            }),
            'flex-2': public_fragmentTemplate({
              __edit__id:
                'lets_csr_article_aside_hqcjt2_csr_article_aside_hqcjt2',
              __attr__style: 'div {flex:1;}',
              content: nodeList('.article_aside_hqcj .bd .item')
                .slice(1, 2)
                .map((item) =>
                  image_imageImgTemplate({
                    __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                    __attr__image: item['item-cover'],
                    __attr__animation: true,
                    __attr__number: 2,
                    __attr__title: 'center',
                    title: item['item-subtitle'],
                    time: item['item-time'] && formatDate(item['item-time'])
                  })
                )
            })
          }),
          layout_layoutBdTemplate({
            'txt-item': [
              public_fragmentTemplate({
                __edit__id:
                  'lets_csr_article_aside_hqcjb1_csr_article_aside_hqcjb1',
                content: nodeList('.article_aside_hqcj .bd .item')
                  .slice(2, 3)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                __edit__id:
                  'lets_csr_article_aside_hqcjb2_csr_article_aside_hqcjb2',
                content: nodeList('.article_aside_hqcj .bd .item')
                  .slice(3, 4)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                __edit__id:
                  'lets_csr_article_aside_hqcjb3_csr_article_aside_hqcjb3',
                content: nodeList('.article_aside_hqcj .bd .item')
                  .slice(4, 5)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                __edit__id:
                  'lets_csr_article_aside_hqcjb4_csr_article_aside_hqcjb4',
                content: nodeList('.article_aside_hqcj .bd .item')
                  .slice(5, 6)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              }),
              public_fragmentTemplate({
                __edit__id:
                  'lets_csr_article_aside_hqcjb5_csr_article_aside_hqcjb5',
                content: nodeList('.article_aside_hqcj .bd .item')
                  .slice(6, 7)
                  .map((item) =>
                    sketch_sketchTxtTemplate({
                      __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                      title: item['item-title']
                    })
                  )
              })
            ]
          })
        ]
      }),
    // 体育·旅游
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      layout_layoutSideBlockTemplate({
        hd: layout_layoutHdTemplate({
          __edit__id: 'controls_csr_article_aside_tyly_csr_article_aside_tyly',
          __attr__id: 'controls_csr_article_aside_tyly_csr_article_aside_tyly',
          __attr__line: true,
          title: nodeText('.article_aside_tyly .hd textarea.title')
        }),
        bd: layout_layoutBdTemplate({
          'img-item': [
            public_fragmentTemplate({
              __edit__id:
                'lets_csr_article_aside_tyly1_csr_article_aside_tyly1',
              __attr__style:
                'div { display: flex;justify-content: space-between;flex-wrap: wrap;}',
              content: nodeList('.article_aside_tyly .bd .item')
                .slice(0, 2)
                .map((item) =>
                  image_imageImgTemplate({
                    __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                    __attr__image: item['item-cover'],
                    __attr__animation: true,
                    __attr__title: 'center',
                    title: item['item-title'],
                    time: item['item-time'] && formatDate(item['item-time'])
                  })
                )
            }),
            public_fragmentTemplate({
              __edit__id:
                'lets_csr_article_aside_tyly2_csr_article_aside_tyly2',
              __attr__style:
                'div { display: flex;justify-content: space-between;flex-wrap: wrap;}',
              content: nodeList('.article_aside_tyly .bd .item')
                .slice(2, 4)
                .map((item) =>
                  image_imageImgTemplate({
                    __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                    __attr__image: item['item-cover'],
                    __attr__animation: true,
                    __attr__title: 'center',
                    title: item['item-title'],
                    time: item['item-time'] && formatDate(item['item-time'])
                  })
                )
            })
          ]
        })
      }),
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      public_fragmentTemplate({
        __edit__id: 'controls_csr_article_ad_5_csr_article_ad_5',
        content: public_advLoader({
          __attr__id: document.getElementById('csr_other_5')
            ? document.getElementById('csr_other_5').textContent
            : '',
          __attr__style: !window.AD_SURVEY_Add_AdPos
            ? '{}'
            : '{ background: #f9f9f9; padding: 15px; height: 280px; margin-bottom: 20px; }'
        })
      }),
    // 趣云购
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      layout_layoutSideBlockTemplate({
        hd: layout_layoutHdTemplate({
          __edit__id:
            'controls_csr_article_aside_hqqyg_csr_article_aside_hqqyg',
          __attr__line: true,
          __attr__href:
            'https://shop91383817.youzan.com/v2/showcase/homepage?alias=xKm5S6rjcJ&dc_ps=2617908957523691520.300001',
          more: `<i class="iconfont icon-side-more"></i>`,
          title: nodeText('.article_aside_hqqyg .hd textarea.title')
        }),
        bd: layout_layoutBdFlexTemplate({
          __edit__id: 'lets_csr_article_aside_hqqyg_csr_article_aside_hqqyg',
          'flex-1': public_fragmentTemplate({
            __attr__style: 'div {flex:1;}',
            content: nodeList('.article_aside_hqqyg .bd .item')
              .slice(0, 1)
              .map((item) =>
                image_imageImgTemplate({
                  __attr__outsite: nodeText(
                    '.article_aside_hqqyg .bd .item-outsite-url'
                  ),
                  __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                  __attr__image: item['item-cover'],
                  __attr__animation: true,
                  __attr__title: 'center',
                  title: item['item-title']
                })
              )
          }),
          'flex-2': public_fragmentTemplate({
            __attr__style: 'div {flex:1;}',
            content: nodeList('.article_aside_hqqyg .bd .item')
              .slice(1, 2)
              .map((item) =>
                image_imageImgTemplate({
                  __attr__outsite: nodeText(
                    '.article_aside_hqqyg .bd .item-outsite-url'
                  ),
                  __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                  __attr__image: item['item-cover'],
                  __attr__animation: true,
                  __attr__title: 'center',
                  title: item['item-title']
                })
              )
          }),
          'flex-3': public_fragmentTemplate({
            __attr__style: 'div {flex:1;}',
            content: nodeList('.article_aside_hqqyg .bd .item')
              .slice(2, 3)
              .map((item) =>
                image_imageImgTemplate({
                  __attr__outsite: nodeText(
                    '.article_aside_hqqyg .bd .item-outsite-url'
                  ),
                  __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                  __attr__image: item['item-cover'],
                  __attr__animation: true,
                  __attr__title: 'center',
                  title: item['item-title']
                })
              )
          }),
          'flex-4': public_fragmentTemplate({
            __attr__style: 'div {flex:1;}',
            content: nodeList('.article_aside_hqqyg .bd .item')
              .slice(3, 4)
              .map((item) =>
                image_imageImgTemplate({
                  __attr__outsite: nodeText(
                    '.article_aside_hqqyg .bd .item-outsite-url'
                  ),
                  __attr__href: `//${item['item-cnf-host']}/${item['item-addltype']}/${item['item-aid']}`,
                  __attr__image: item['item-cover'],
                  __attr__animation: true,
                  __attr__title: 'center',
                  title: item['item-title']
                })
              )
          })
        })
      }),
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      public_fragmentTemplate({
        __edit__id: 'controls_csr_article_ad_6_csr_article_ad_6',
        content: public_advLoader({
          __attr__id: document.getElementById('csr_other_6')
            ? document.getElementById('csr_other_6').textContent
            : '',
          __attr__style: !window.AD_SURVEY_Add_AdPos
            ? '{}'
            : '{ background: #f9f9f9; padding: 15px; height: 280px; margin-bottom: 20px; }'
        })
      }),
    // 接下来
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      article_articleNextTemplate({
        title: '接下来',
        ad: public_advLoader({
          __attr__id: document.getElementById('csr_other_7')
            ? document.getElementById('csr_other_7').textContent
            : '',
          __attr__style: !window.AD_SURVEY_Add_AdPos
            ? '{}'
            : '{ background: #f9f9f9;padding: 20px 0 10px;}',
          __edit__id: 'controls_csr_article_ad_7_csr_article_ad_7'
        }),
        close:
          document.getElementById('csr_other_7') &&
          document.getElementById('csr_other_7').textContent
            ? '<i class="iconfont icon-close"></i>'
            : '',
        item: public_asyncLoader({
          __attr__promise: () =>
            requestMemorize(
              `//${
                !!hostname.includes('huanqiu-ltd')
                  ? window.global_constant.global_path
                  : window.location.host
              }/api/article/next?catnode=${nodeText(
                'textarea.article-catnode'
              )}&ctime=${nodeText(
                'article > textarea.article-ext-xtime'
              )}&aid=${nodeText('article > textarea.article-aid')}&limit=2`
            ).then(({ list }) => list.map((item) => item))
        })
      })
  ],
  coupletad: [
    !['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) &&
      public_fragmentTemplate({
        __edit__id: 'controls_csr_article_dl_ad_csr_article_dl_ad',
        content: public_advLoader({
          __attr__id: document.getElementById('csr_article_dl_ad')
            ? document.getElementById('csr_article_dl_ad').textContent
            : ''
        })
      })
  ],
  footer:
    ['2', '3', '4'].includes(
      nodeText('article > textarea.article-ext-serious')
    ) && article_articleFooterTemplate({})
});

turn d})}else{b.iSlider=b.iSlider||d}}})(window||this);
        
        <!-- iSlider.animate.min.js-->
        !function(e,t){"function"==typeof require&&"object"==typeof module&&module&&"object"==typeof exports&&exports?t(require("islider.js")):"function"==typeof define&&define.amd?define(["islider.js"],function(e){t(e)}):t(e.iSlider)}(window?window:this,function(e){"use strict";e&&e.regPlugin("dot",function(e){function t(){var e=document.createDocumentFragment();a.forEach(function(e,t){e.removeEventListener(r,d[t],!1)}),a=[],d=[],l.innerHTML="";for(var t=0;t<o.length;t++)a[t]=document.createElement("li"),a[t].className="islider-dot",a[t].setAttribute("index",t),t===i.slideIndex&&(a[t].className+=" active"),d[t]=function(){i.slideTo(parseInt(this.getAttribute("index"),10))},a[t].addEventListener(r,d[t],!1),e.appendChild(a[t]);l.appendChild(e)}function n(e){return"relative"===e?i.wrap:Boolean(e.nodeName)&&Boolean(e.nodeType)?e:i.wrap.parentNode}var i=this,o=i.data,a=[],d=[],r=i.deviceEvents.endEvt,l=document.createElement("ul");l.className="islider-dot-wrap",t(),n(!(!e||null==e.locate)&&e.locate).appendChild(l),i.on("slideChange",function(){for(var e=0;e<o.length;e++)a[e].className="islider-dot",e===this.slideIndex&&(a[e].className+=" active")}),i.on("loadData",function(){o=this.data,t()},1)})});
        
        <!-- iSlider.plugin.button.min.js-->
        !function(e,i){"function"==typeof require&&"object"==typeof module&&module&&"object"==typeof exports&&exports?i(require("islider.js")):"function"==typeof define&&define.amd?define(["islider.js"],function(e){i(e)}):i(e.iSlider)}(window?window:this,function(e){"use strict";e&&e.regPlugin("button",function(){for(var e=this,i=[],t=[],n=0;n<2;n++)i[n]=document.createElement("div"),i[n].className="islider-btn-outer",t[n]=document.createElement("div"),t[n].className="islider-btn-inner",0===n?(i[n].className+=" left",i[n].dir=-1):(i[n].className+=" right",i[n].dir=1),i[n].addEventListener("click",function(){var i=parseInt(this.getAttribute("dir"),10);e.slideTo(e.slideIndex+i)}),i[n].appendChild(t[n]),e.wrap.appendChild(i[n],e.wrap.nextSibling)})});
        
        <!-- iSlider.plugin.dot.min.js-->
        !function(e,t){"function"==typeof require&&"object"==typeof module&&module&&"object"==typeof exports&&exports?t(require("./iSlider")):"function"==typeof define&&define.amd?define(["./iSlider"],function(e){t(e)}):t(e.iSlider)}(window?window:this,function(e){"use strict";e&&e.extend(e._animateFuncs,{rotate:function(){function t(t,s,i,n,r,a){var o="X"===s?"Y":"X";this.isVertical&&(r=-r,Math.abs(a)>1&&(a=-a));var l=t.parentElement;e.setStyle(l,"perspective",4*i),t.style.visibility="visible",a>0&&2===n&&(t.style.visibility="hidden"),a<0&&0===n&&(t.style.visibility="hidden"),t.style.zIndex=1===n?1:0,t.style.cssText+=e.styleProp("backface-visibility")+":hidden;"+e.styleProp("transform-style")+":preserve-3d;position:absolute;",e.setStyle(t,"transform","rotate"+o+"("+90*(r/i+n-1)+"deg) translateZ("+.889*i/2+"px) scale(0.889)")}return t.effect=e.styleProp("transform"),t.reverse=!0,t}(),flip:function(){function t(t,s,i,n,r,a){this.isVertical&&(r=-r);var o=t.parentElement;e.setStyle(o,"perspective",4*i),t.style.visibility="visible",a>0&&2===n&&(t.style.visibility="hidden"),a<0&&0===n&&(t.style.visibility="hidden"),t.style.cssText+="position:absolute;"+e.styleProp("backface-visibility")+":hidden",e.setStyle(t,"transform","translateZ("+i/2+"px) rotate"+("X"===s?"Y":"X")+"("+180*(r/i+n-1)+"deg) scale(0.875)")}return t.effect=e.styleProp("transform"),t.reverse=!0,t}(),depth:function(){function t(t,s,i,n,r,a){var o=.18*(4-Math.abs(n-1)),l=t.parentElement;e.setStyle(l,"perspective",4*i),t.style.zIndex=1===n?1:0,e.setStyle(t,"transform","scale("+o+") translateZ(0) translate"+s+"("+(r+1.3*i*(n-1))+"px)")}return t.effect=e.styleProp("transform"),t}(),flow:function(){function t(t,s,i,n,r,a){var o=Math.abs(r),l="X"===s?"Y":"X",c="X"===s?1:-1,f=Math.abs(r/i),y=t.parentElement;e.setStyle(y,"perspective",4*i),1===n?t.style.zIndex=i-o:t.style.zIndex=r>0?(1-n)*o:(n-1)*o,e.setStyle(t,"transform","scale(0.7, 0.7) translateZ("+(150*f-150)*Math.abs(n-1)+"px)translate"+s+"("+(r+i*(n-1))+"px)rotate"+l+"("+c*(30-30*f)*(1-n)+"deg)")}return t.effect=e.styleProp("transform"),t}(),card:function(){function t(t,s,i,n,r,a){var o=Math.abs(r),l=1,c=1;o>0?1===n&&(l=1-.2*Math.abs(n-1)-Math.abs(.2*r/i).toFixed(6),c=0):1!==n&&((a>0&&0===n||a<0&&2===n)&&(l=1-.2*Math.abs(n-1)),c=0),t.style.zIndex=c,e.setStyle(t,"transform","scale("+l+") translateZ(0) translate"+s+"("+((1+.2*Math.abs(n-1))*r+i*(n-1))+"px)")}return t.effect=e.styleProp("transform"),t}(),fade:function(){function e(e,t,s,i,n,r){e.style.zIndex=1===i?1:0,n=Math.abs(n),1===i?e.style.opacity=1-n/s:e.style.opacity=n/s}return e.effect="opacity",e}(),zoomout:function(){function t(t,i,n,r,a){var o,l,c,f=a/n;switch(r){case 0:s&&window.clearTimeout(s),l=f<1?f:1,c=2-.5*f,o=2;var y=1e3*parseInt(window.getComputedStyle(t)[e.styleProp("transitionDuration",1)]);y>0&&(s=window.setTimeout(function(){t.style.zIndex=0},y));break;case 1:l=1-f,c=1-.5*f,o=1;break;case 2:l=f>0?f:0,c=.5-.5*f,o=0}t.style.cssText+="z-index:"+o+";opacity:"+l+";"+e.styleProp("transform")+":scale("+c+");"}var s;return t.reverse=!0,t}()})});
        
        renderNewStyle();
    }else {
        var oldStyleContainer = document.getElementById("wrapper");
        oldStyleContainer.style.display = "block";
        renderOldStyle();
    }
    function renderNewStyle(){var e=function(i){return document.createElement(i)};var g=function(i){return i+"px"};var v=config.rsi0-2;var l=config.rsi1-2;var f=config.rss1||"#ffffff";var x=l/8;var k=v-2;var r=l-x-2;var h=document.getElementById("container");h.style.width=g(v);h.style.height=g(l);h.style.background=f;h.style["padding-bottom"]=g(x);var o=document.getElementById("desc_bottom");o.style.height=g(x);var d=document.getElementById("desc_title");o.style.lineHeight=g(x);if(v<250){o.style.fontSize="14px"}var w=[];ads=ads.slice(0,4);for(var q=0;q<ads.length;q++){w.push({content:(function(){var y=e("a");var i=e("img");i.className="pic";i.src=ads[q].image_url;i.style.width=g(k);i.style.height=g(r);y.href=ads[q].curl;y.target="_blank";y.appendChild(i);return y})()})}var u=document.getElementById("iSlider-wrapper");u.style.width=g(v);if(u.offsetWidth===0){var n=document.getElementById("wrapper");n.style.display="block";h.style.display="none";renderOldStyle()}else{var j=new iSlider({dom:u,data:w,duration:4000,isLooping:1,isAutoplay:1,fillseam:true,animateTime:300,plugins:["dot","button"],wakeupAutoplayDazetime:1});var b=document.querySelector(".islider-outer");b.style.width=g(v);b.style.height=g(r);var c=document.getElementsByClassName("islider-btn-outer");var a=c[0].offsetHeight/2;var m=g(r/2-a);c[0].style.top=m;c[1].style.top=m;var p=document.getElementsByClassName("islider-node");for(var q=0;q<p.length;q++){var t=p[q];t.style.width=g(k);t.style.height=g(r-1.5)}u.onmouseover=function(){c[0].style.opacity=0.44;c[1].style.opacity=0.44};u.onmouseout=function(){c[0].style.opacity=0;c[1].style.opacity=0};d.innerHTML=ads[0].title;d.href=ads[0].curl;j.on("slideChange",function(i){d.innerHTML=ads[i].title;d.href=ads[i].curl});var s=navigator.userAgent.toLowerCase();if(/webkit/i.test(s)&&!(/chrome/i.test(s)&&/webkit/i.test(s)&&/mozilla/i.test(s))){h.style.position="-webkit-sticky"}}}function renderOldStyle(){var v=-20;var w=55;var l=280;var a=200;var c=5;var Q=config.nav_space;var F=1;var M=0;var x=Math.max(parseInt((config.rsi1-6-2)/config.nav_percent),config.nav_min_h);var C=config.rsi0-6-2;var n=config.rsi1-6-2-x-c;var O=C/n;if(O<1.4){a=n;l=parseInt(a*1.4)}else{if(O>1.4){l=C;a=parseInt(l/1.4)}else{a=n;l=C}}a=Math.min(350,a);l=Math.max(250,l);var K=0-parseInt((l-C)/2);var J=0-parseInt((a-n)/2);var t=x-F*2;var P=parseInt(1.4*t);ads=ads.concat(ads);var D=ads.length*(P+Q+F*2);var I=C;distance=C-D+Q;var g=config.rss1||"#ffffff";var T=parseInt(n/3.5);var r=config.img_bigger?".slides:hover img {                -webkit-transition: -webkit-transform .5s ease-in;                 -moz-transition: -moz-transform .5s ease-in;                 -ms-transition: -ms-transform .5s ease-in;                 -o-transition: -o-transform .5s ease-in;                 transition: transform .5s ease-in;                 -webkit-transform: scale(1.07);                 -moz-transform: scale(1.07);                 -ms-transform: scale(1.07);                 -o-transform: scale(1.07);                 transform: scale(1.07);            }":"";var j='            #wrapper {width:{wrapper_width}px;height:{wrapper_height}px;background-color:{wrapper_bg_color};overflow:hidden;border:1px solid #CCC}            .pic-window {position:relative;width:{box_width}px;height:{box_height}px;overflow:hidden;margin-bottom:{box_bottom_margin}px;position:relative;}             .pic-box {border-bottom:1px solid #ccc;height:{box_height}px;width:{box_width}px;*display:inline}            .mask {display:none;height:{box_height}px;width:{box_width}px;position:absolute;top:0px;background-color:rgba(0,0,0,0.5);filter: progid:DXImageTransform.Microsoft.Gradient(enabled="true", GradientType=1,StartColorstr=#6F000000, EndColorstr=#6F000000);text-decoration:none;}            .mask_head {height:{mask_head_height}px;margin-top:{mask_head_margin_top}px;background-color:rgba(1,33,100,0.5);    box-shadow: 0 1px 4px 0 #000;}            .mask_title {float:left;;height:{mask_title_height}px;padding:{mask_padding}px;color:#FFFFFF;font-size:{mask_font}px;background:linear-gradient(90deg, #033E98, #3285FF);font-weight:900;background-color:#3285FF;}            .mask_desc {color:#FFFFFF;line-height:{mask_head_height}px;margin-left:{mask_padding}px;margin-top:{mask_desc_margin_top}px;}            .slides {float:left;display:none;}            .show {display:block;}            .pic-box img {width:{pic_width}px; height:{pic_height}px;position:absolute;left:{img_pos_x}px;top:{img_pos_y}px}            .arrow1 {float:left;;border-width:{mask_arrow_height}px;border-style:solid;border-color:#3285FF transparent transparent #3285FF;font-size:0px;line-height:0px;}            .arrow2 {float:right;;border-width:{mask_arrow_height}px;border-style:solid;border-color:transparent #3285FF #3285FF transparent;font-size:0px;line-height:0px;}            .desc {padding-left:5px;text-decoration:none;position:absolute;height:{desc_height}px;width:{box_width}px;bottom:{desc_bottom}px;font-weight:900;left:0px;font-size:20px;color:#fff;line-height:{desc_line_height}px;                background-image: -webkit-linear-gradient(90deg, #000, 70%, rgba(255, 255, 255, 0));                background-image:    -moz-linear-gradient(90deg, #000, 70%, rgba(255, 255, 255, 0));                 background-image:      -o-linear-gradient(90deg, #000,  rgba(255, 255, 255, 0));                 background-image:         linear-gradient(90deg, #000,  rgba(255, 255, 255, 0));                background:               linear-gradient(90deg, #000,  rgba(255, 255, 255, 0));                filter: progid:DXImageTransform.Microsoft.Gradient(enabled="true", GradientType=1,StartColorstr=#FF000000, EndColorstr=#00FFFFFF);                -webkit-transition: bottom .15s ease-in;                 -moz-transition: bottom .15s ease-in;                 -ms-transition: bottom .15s ease-in;                 -o-transition: bottom .15s ease-in;                 transition: bottom .15s ease-in;             }';if(config.hover==1){j+=".slides:hover .mask{display:block;}                .slides:hover .desc{display:none;}"}j+=".mask_desc_highlight {display:inline-block;padding:2px;margin:1px;line-height:14px;border-radius:3px;background-color:#9A9A9A;color:#FFFFFF;}            .nav-window {width:{nav_win_width}px;height:{nav_height}px;overflow:hidden;position:relative;float:left;margin:0px}            .nav {position:absolute;width:{nav_width}px;height:{nav_height}px;top:0px;left:0px;}            .thumb {width:{thumb_width}px;height:{thumb_height}px;float:left;margin-right:{thumb_margin_right}px;position:relative;border:{thumb_border}px solid #ccc}            .thumb-border {border:{thumb_border}px solid #f70}            .thumb img {width:{thumb_width}px; height:{thumb_height}px;}            .thumb-mask {width:{thumb_width}px ;height:{nav_height}px;position:absolute;top:0px;left:0px;background-color:#ffffff;opacity:{opacity};filter:alpha(opacity={opacity_ie})}            .pointer {cursor:pointer}            .thumb-select {opacity:0;filter:alpha(opacity=0);}            .slides:hover {display:block;}";var o='<div class="slides" id="pic_{index}" style="overflow:hidden">                 <a href="{curl}" target="_blank" class="pointer">                <div class="pic-box">                 <div class="img"><img src="{image_url}" id="img_{index}" class="figure"></div></div>                <div class="desc" id="desc_{index}">                     {title}                </div>                <div class="mask">                    <div class="mask_head">                        <div class="mask_title">                            {title}                        </div>                        <div class="arrow1"></div>                    </div>                </div>                </a>            </div>';var f='            <div class="thumb">                 <a href="{curl}" target="_blank" class="pointer">                <img src="{image_url}" />                 <div class="thumb-mask" pic="{index}" id="thumb_{index}"></div>                </a>            </div>';function u(V,U){var W=U;for(key in V){var i=new RegExp("{"+key+"}","g");W=W.replace(i,V[key])}return W}var b="";var R="";for(var L=0;L<ads.length;++L){ads[L].index=L;ads[L].curl=ads[L].curl.replace(/stid=\d*&/,"stid=117&");b+=u(ads[L],o);ads[L].curl=ads[L].curl.replace(/stid=\d*&/,"stid=117&");R+=u(ads[L],f)}var E=config.logIS?"":'<a id="baiduLogo" class="bd-logo2" href="http://wangmeng.baidu.com/" title="" style="zoom: 1;cursor: default;">&nbsp;</a>';var q=' <div style="padding:3px;">            <div id="pic" class="pic-window">'+b+'</div>            <div>            <div class="nav-window">                <div id="nav" class="nav">'+R+"</div>            </div>            </div>"+E+"</div>";document.getElementById("wrapper").innerHTML=q;if(bdJinglianExpFlag>0){var B=document.getElementById("baiduLogo");if(B){B.setAttribute("title",bdJinglianHoverTitle);B.setAttribute("href","javascript:void(0)")}}else{var B=document.getElementById("baiduLogo");if(B){B.setAttribute("title","百度联盟推广");B.setAttribute("target","_blank");B.setAttribute("href","http://wangmeng.baidu.com/")}}function p(W){var X=document;var U=X.createElement("style");U.setAttribute("type","text/css");if(U.styleSheet){U.styleSheet.cssText=W}else{var i=X.createTextNode(W);U.appendChild(i)}var V=X.getElementsByTagName("head");if(V.length){V[0].appendChild(U)}else{X.documentElement.appendChild(U)}}p(u({wrapper_width:config.rsi0-2,wrapper_height:config.rsi1-2,wrapper_bg_color:g,pic_width:l,pic_height:a,box_width:C,box_height:n,nav_height:x,desc_height:w,desc_line_height:w+v,thumb_width:P,thumb_height:t,img_pos_x:K,img_pos_y:J,nav_width:D,nav_win_width:C,box_bottom_margin:c,desc_bottom:v,thumb_margin_right:Q,thumb_border:F,arrow_line_height:x-5,mask_head_height:T,mask_font:parseInt(T/3)+2,mask_padding:parseInt(T/4),mask_arrow_height:parseInt(T/2),mask_title_height:T-2*parseInt(T/4),mask_head_margin_top:parseInt(n/4),mask_desc_margin_top:parseInt((n-T-parseInt(n/4))/3),opacity:M,opacity_ie:(M*100)},j));function N(i){return i||window.event}function h(V,U,i){var W=typeof document.body.style.MozUserSelect!="undefined";if(U=="mousewheel"&&W){U="DOMMouseScroll"}V.addEventListener?V.addEventListener(U,i,false):V.attachEvent?V.attachEvent("on"+U,i):V["on"+U]=i}function m(U,i){if(N(U).type=="mouseover"){return !s(i,N(U).relatedTarget||N(U).fromElement)&&!((N(U).relatedTarget||N(U).fromElement)===i)}else{return !s(i,N(U).relatedTarget||N(U).toElement)&&!((N(U).relatedTarget||N(U).toElement)===i)}}function s(i,U){if(!(U&&i)){return false}if(i.contains){return i!=U&&i.contains(U)}else{return !!(i.compareDocumentPosition(U)&16)}}var H={prime:document.getElementById("pic_0"),thumb:document.getElementById("thumb_0"),parent:document.getElementById("thumb_0").parentNode.parentNode,id:0,timer:0,fade_timer:0};H.thumb.className="thumb-mask thumb-select";H.prime.className="slides show";H.parent.className="thumb thumb-border";function e(){clearTimeout(H.timer);var U=(parseInt(H.id)+1)%ads.length;var i=3000;if(carous_adv){i=Math.max(Math.min((ads.length-U)*1000,5000),2000)}H.timer=setTimeout(e,i);y(d())}function d(){var i=H.id;return document.getElementById("thumb_"+(++i%ads.length))}function A(){var i=H.id;i=--i%ads.length;if(i==-1){i=ads.length/2-1}return document.getElementById("thumb_"+i)}function z(i,V,W){i=0-i;var U=V+W;G(i,U,function(X){return X<=W-i})}function k(i,V,W){var U=V+W;G(i,U,function(X){return X>=W-i})}function G(V,W,U){var X=document.getElementById("nav");var i=0;var Y=0;clearInterval(H.scroll);H.scroll=setInterval(function(){i=parseInt(X.style.left)||0;if(U(Y)){clearInterval(H.scroll);X.style.left=W+"px";return}var Z=i+V;X.style.left=Z+"px";if(V<0&&Z<=0-D/2){W+=D/2;X.style.left=(Z+D/2)+"px"}if(V>0&&Z>=0){W-=D/2;X.style.left=(Z-D/2)+"px"}Y+=V},20)}function S(){var X=H.id;var U=(P+Q+F*2)*X;var i=U+P+F*2;var V=document.getElementById("nav");var W=parseInt(V.style.left)||0;abs_left=U+W;abs_right=abs_left+P+F*2;if(abs_left<0){k(5,W,0-U-W)}else{if(abs_right>I){z(5,W,I-abs_right)}}}function y(V){if(!!H&&!!H.thumb&&!!H.prime){H.prime.className="slides";H.thumb.className="thumb-mask";H.parent.className="thumb";clearInterval(H.fade_timer);var W=H.id;var U=document.getElementById("img_"+W);U.style.opacity!=undefined?U.style.opacity=1:U.style.filter="alpha(opacity=100)"}V.className="thumb-mask thumb-select";var W=V.getAttribute("pic");H.prime=document.getElementById("pic_"+W);H.thumb=V;H.parent=V.parentNode.parentNode;H.id=W;var U=document.getElementById("img_"+W);U.style.opacity!=undefined?U.style.opacity=0:U.style.filter="alpha(opacity=0)";H.prime.className="slides show";H.parent.className="thumb thumb-border";var i=0;H.fade_timer=setInterval(function(){i+=20;if(i>=100){clearInterval(H.fade_timer)}U.style.opacity!=undefined?U.style.opacity=i/100:U.style.filter="alpha(opacity="+i+")"},50);S()}h(document,"mouseover",function(U){var i=U.srcElement?U.srcElement:U.target;if(m(U,i)){if(!i.className){return}clearTimeout(H.timer);if(i.className==="thumb-mask"){y(i)}}});h(document.getElementById("wrapper"),"mouseout",function(U){var i=U.srcElement?U.srcElement:U.target;if(m(U,i)){if(!i.className){return}clearTimeout(H.timer);H.timer=setTimeout(e,3000)}});if(config.mousewheel){h(document,"mousewheel",function(U){function V(W){W=W||event;return(W.wheelDelta?W.wheelDelta/120:-(W.detail%3==0?W.detail/3:W.detail))}function i(W){W=W||event;if(W.preventDefault){W.preventDefault()}W.returnValue=false}i(U);if(-1==V(U)){y(d())}else{y(A())}return false})}clearTimeout(H.timer);H.timer=setTimeout(e,4000)};
</script>
<script>
// 添加logo是否显示
var defaultIsShow = false;
var config = {"at":3,"conBW":0,"consl":1,"dft":0,"exp_flag":0,"hover_flag":1,"n":"52094055_3_cpr","nav_min_h":25,"nav_percent":9,"nav_space":5,"pat":17,"rsi0":300,"rsi1":250,"staticDomain":"cpro.baidustatic.com","temp_exp_flag":0,"titFS":12,"titTA":"left"};
var logoCon={logoIsShow:function(){var c=document.getElementsByTagName("a");for(var a=0;a<c.length;a++){var b=c[a].className;if(b==="bd-logo"||b==="bd-logo2"||b==="bd-logo3"||b==="bd-logo4"||b==="bd-logo5"||b==="bd-logo1"){if(typeof config.consl=="undefined"){config.consl=1}if(defaultIsShow&&config.consl){c[a].style.display="block"}else{c[a].style.display="none"}}}}};logoCon.logoIsShow();
</script>
<script>
window.onload=function(){var a=document.getElementById("wrapper");if(a.style.display==="none"){logo.init({containerId:"iSlider-wrapper",closeDirect:true,feedbackParentId:"container",deviceType:1})}else{logo.init({containerId:"wrapper",closeDirect:true,feedbackParentId:"wrapper",deviceType:1})}};
</script>
<script type="text/javascript">
    function addFliterForImg(){var a=config.saturate;var e=config.contrast;var f=document.querySelectorAll("img");for(var c=f.length-1;c>=0;c--){var d=f[c];if(d.src.length>0&&d.width>10&&d.height>10){var b;if(a&&e){b="-webkit-filter:saturate("+a/100+") contrast("+e/100+")"}else{if(a){b="-webkit-filter:saturate("+a/100+")"}else{if(e){b="-webkit-filter:contrast("+e/100+")"}}}if(d.style.cssText.indexOf("filter")===-1){d.style.cssText+=b}}}}if(config.saturate||config.contrast){if(document.all){window.attachEvent("onload",addFliterForImg)}else{window.addEventListener("load",addFliterForImg,false)}};
</script>
</html>
