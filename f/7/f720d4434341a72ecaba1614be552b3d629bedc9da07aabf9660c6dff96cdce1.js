let partnerDisplay=null;let jobbio_display={widget:async function(params){let script=document.getElementById("jobbio-display-script");let container=params.container;let slug=params.slug;let style=params.style;let location=params.location;let pageSize=params.count;let type=params.type;let content=params.content;let searchTerm=params.searchTerm||"";let api="";window.jobbioLocalisation={title:"Find Your Place In The World",titleJobs:"Jobs For You",titleCompanies:"Companies For You",jobsCTA:"See Job",companiesCTA:"See More",jobsSeeMoreCTA:"Search More Roles",companiesSeeMoreCTA:"See More Companies"};let germanPartners=["computerbild-jobs","nextpit-germany-jobs","basic-thinking","netzwelt-jobs"];let frenchPartners=["journal-du-coin-jobs","nextpit-france-jobs"];if(germanPartners.includes(slug)){window.jobbioLocalisation={title:"Finden Sie Ihren nächsten Job",titleJobs:"Jobs für Sie",titleCompanies:"Unternehmen für Sie",jobsCTA:"Siehe Job",companiesCTA:"Siehe mehr",jobsSeeMoreCTA:"Andere Stellen suchen",companiesSeeMoreCTA:"Siehe weitere Unternehmen"}}if(frenchPartners.includes(slug)){window.jobbioLocalisation={title:"Trouvez votre place dans le monde",titleJobs:"Des offres d'emploi pour vous",titleCompanies:"Des entreprises pour vous",jobsCTA:"Voir l'offre d'emploi",companiesCTA:"En voir plus",jobsSeeMoreCTA:"Afficher plus d'offres",companiesSeeMoreCTA:"Voir plus d'entreprises qui recrutent"}}for(let param in params){params[param]=encodeURIComponent(params[param])}let blockedPartners=[];if(blockedPartners.includes(slug)){return}params=Object.keys(params).redu"},"").slice(0,-1);let url=script.getAttribute("src").replace("/partner_fluid_widgets_v1.6.1/display.min.js","");if(url==="https://d3g4doi210g6ib.cloudfront.net"){api="https://widget-api.jobbiosprintt.com"}else if(url==="https://d1pywsqd87ew9v.cloudfront.net"){api="https://widget-api.jobbio.com"}else if(url.includes("jobbio.")){api=url.replace("widgets.","widget-api.")}else{api=url.replace("widgets.","widget-api.")}let styleSheetUrl=`${url}/partner_fluid_widgets_v1.6.1/assets/css/v1_6_1.css`;let customFontUrl="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap";let tracking=document.createElement("script");let imp=document.createElement("script");let ind_imp=document.createElement("script");imp.id="amply-imp";ind_imp.id="ind-imp";imp.src=`${url}/partner_fluid_widgets_v1.6.1/assets/js/imp.min.js`;ind_imp.src=`${url}/partner_fluid_widgets_v1.6.1/assets/js/ind-imp.min.js`;tracking.id="clktrk";if(location&&location.includes("demo/test")){url="https://widgets.jobbiodev.com";api="https://widget-api.jobbiodev.com";styleSheetUrl="../../assets/css/v1_6_1.css";imp.src="../../assets/js/imp.min.js";ind_imp.src="../../assets/js/ind-imp.min.js"}tracking.append(`function trkclk(source, uuid){
        var data = {
          source: source,
          uuid: uuid
        };
                        
        fetch('${api}/clicks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      };
      function trkrdt(job_id, source, redirecting, redirect_link){
        if(redirecting){
          var data = {
            job_id: job_id,
            source: source,
            link: redirect_link
          };
          
          fetch('${api}/jobs/redirect', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        }
      }`);const existingStylesheet=document.getElementById("stlsht");if(!existingStylesheet){const newStylesheet=document.createElement("link");newStylesheet.setAttribute("rel","stylesheet");newStylesheet.setAttribute("id","stlsht");newStylesheet.setAttribute("href",styleSheetUrl);document.head.appendChild(newStylesheet)}const customFont=document.getElementById("customFont");if(slug!=="computerbild-jobs"){if(!customFont){const newStylesheet=document.createElement("link");newStylesheet.setAttribute("rel","stylesheet");newStylesheet.setAttribute("id","customFont");newStylesheet.setAttribute("href",customFontUrl);document.head.appendChild(newStylesheet)}}if(!document.getElementById("amply-imp")){document.head.append(imp)}if(!document.getElementById("ind-imp")){document.head.append(ind_imp)}if(!document.getElementById("clktrk")){document.body.append(tracking)}await init(api,slug);if(type==="multiple"&&content==="jobs"){await loadJobs(api,slug,searchTerm,pageSize,container,partnerDisplay,style,content)}else if(type==="multiple"&&content==="companies"){await loadCompanies(api,slug,searchTerm,pageSize,container,partnerDisplay,style,content)}else if(type==="multiple"&&content==="articles"){await loadArticles(api,slug,searchTerm,pageSize,container,partnerDisplay,style,content)}else if(type==="single"&&content==="jobs"){await loadJobs(api,slug,searchTerm,pageSize,container,partnerDisplay,style,content,true)}else if(type==="single"&&content==="companies"){await loadCompanies(api,slug,searchTerm,pageSize,container,partnerDisplay,style,content,true)}else if(type==="single"&&content==="articles"){await loadArticles(api,slug,searchTerm,pageSize,container,partnerDisplay,style,content,true)}}};function renderEmptyState(style,type,container){if(style==="masonry"){renderMasonryEmptyState(container,style)}else if(style==="sidebar"){renderSidebarEmptyState(type,container,style)}else if(style==="horizontal"){renderHorizontalEmptyState(type,container)}}async function init(api,slug){const response=await fetch(`${api}/channels/${slug}?widgets=true`);if(!response.ok){return}partnerDisplay=await response.json()}async function loadJobs(api,slug,searchTerm,pageSize,container,partnerDisplay,style,content,single=false){const response=await fetch(`${api}/channels/${slug}/feed?search=${searchTerm}&page_size=${pageSize}&source=${slug}_${style}_jobs_widget&widgets=true&page=${encodeURIComponent(document.location.href)}${single?"&single=true":""}`);if(!response.ok){return}const jobs=await response.json();window.addEventListener("resize",()=>getContainerWidth(container,style));if(style==="masonry"){renderMasonryJobs(api,container,partnerDisplay,jobs,`${slug}_${style}_jobs_widget`,style)}else if(style==="sidebar"){renderSidebarJobs(api,container,partnerDisplay,jobs,`${slug}_${style}_jobs_widget`,single,style)}else if(style==="horizontal"){renderHorizontalJobs(api,container,partnerDisplay,jobs,`${slug}_${style}_jobs_widget`,single,style)}}async function loadCompanies(api,slug,searchTerm,pageSize,container,partnerDisplay,style,content,single=false){const response=await fetch(`${api}/channels/${slug}/featured-companies?page_size=${pageSize}&featured=true&source=${slug}_masonry_${style}_widget&widgets=true${single?"&single=true":""}`);if(!response.ok){return}const companies=await response.json();window.addEventListener("resize",()=>getContainerWidth(container,style));if(style==="masonry"){renderMasonryCompanies(api,container,partnerDisplay,companies,`${slug}_${style}_companies_widget`,style)}else if(style==="sidebar"){renderSidebarCompanies(api,container,partnerDisplay,companies,`${slug}_${style}_companies_widget`,single,style)}else if(style==="horizontal"){renderHorizontalCompanies(api,container,partnerDisplay,companies,`${slug}_${style}_companies_widget`,single,style,pageSize)}}async function loadArticles(api,slug,searchTerm,pageSize,container,partnerDisplay,style,content,single=false){const response=await fetch(`${api}/articles?channel=${slug}&source=${slug}&page_size=${pageSize}&source=${slug}_masonry_${style}_widget&widgets=true${single?"&single=true":""}`);if(!response.ok){return}const articles=await response.json();window.addEventListener("resize));if(style==="masonry"){renderMasonryArticles(container,partnerDisplay,articles,`${slug}_${style}_articles_widget`,style)}else if(style==="sidebar"){renderSidebarArticles(container,partnerDisplay,articles,`${slug}_${style}_articles_widget`,single,style)}else if(style==="horizontal"){renderHorizontalArticles(container,partnerDisplay,articles,`${slug}_${style}_articles_widget`,single,style)}}function renderMasonryJobs(api,container,partnerDisplay,jobs,source,style){getContainerWidth(container,style);let uuid=getUUID();document.getElementById(container).innerHTML+=`<div class="v1_6 type-3">
      <img class="amply-pxl" data-src="${api}/pixels/amply.gif?widget=true&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
      <div class="top-s">${window.jobbioLocalisation.title} <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="masonry horizontal job multiple">
        <div class="list" id="masonry-job-multiple-${container}"></div>
        <div style="text-align: center">
          <a href="${partnerDisplay.routes.jobs_url}?source=jobs_widget" target='_blank' class="more">
            ${window.jobbioLocalisation.jobsSeeMoreCTA}
          </a>
        </div>
      </div>
    </div>`;jobs.map(job=>{let link=job.redirect?job.redirect:partnerDisplay.routes.job_url.replace("[company]",job.company.slug).replace("[job]",job.slug);document.getElementById(`masonry-job-multiple-${container}`).innerHTML+=`<div class="h-item">
        <img class="amply-pxl" data-src="${api}/pixels/amply.gif?job_id=${job.id}&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
        ${partnerDisplay.settings.indeed_impression_tracking?`<img class="indeed-tmn-pxl" data-src="${job.impression_url}" width="0" height="0" style="display:block;margin-bottom:-1px"/>`:""}
        <a href="${link}" class="item" style="background-image:url(${job.company.image_card})" target='_blank' onclick="trkclk('${source}', '${uuid}');trkrdt(${job.id},'${source+"_redirect"}',${!!job.redirect},'${link}')">
          <span class="img" style="background-image:url(${job.company.image_logo})">&nbsp;</span>
          <span class="mt2 mfw4 ellipsis-2">${job.title}</span>
          <span class="mt2 mfw6 ellipsis-1">${job.company.name}</span>
          <span class="mt3 ellipsis-1">${job.location.city||job.location.state||job.location.country||job.location.address}</span>
          ${job.salary_disclosed?`<span class="mt3 ellipsis-1">${job.salary}</span>`:""}
          <span class="btn">${window.jobbioLocalisation.jobsCTA}</span>
        </a>
      </div>`})}function renderMasonryCompanies(api,container,partnerDisplay,companies,source,style){getContainerWidth(container,style);let uuid=getUUID();document.getElementById(container).innerHTML+=`<div class="v1_6 type-3">
      <img class="amply-pxl" data-src="${api}/pixels/amply.gif?widget=true&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
      <div class="top-s">${window.jobbioLocalisation.title} <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="masonry horizontal company multiple">          
        <div class="list" id="masonry-company-multiple-${container}"></div>
        <div style="text-align: center">
          <a href="${partnerDisplay.routes.home_url}?source=companies_widget" target='_blank' class="more">${window.jobbioLocalisation.companiesSeeMoreCTA}</a>
        </div>
      </div>
    </div>`;companies.map(company=>{let cta="View Company";if(company.live_jobs>0){cta=`${company.live_jobs} Jobs`}let link=partnerDisplay.routes.company_url.replace("[company]",company.slug);document.getElementById(`masonry-company-multiple-${container}`).innerHTML+=`<div class="h-item">
        <img class="amply-pxl" data-src="${api}/pixels/amply.gif?company_id=${company.id}&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
        <a href="${link}" class="item" style="background-image:url(${company.image_card})" target='_blank' onclick="trkclk('${source}', '${uuid}')">
          <span class="img" style="background-image:url(${company.image_logo})">&nbsp;</span>
          <span class="mt2 mfw6 ellipsis-2">${company.name}</span>
          <span class="mt3 ellipsis-1">${company.location.city||company.location.state||company.location.country||company.location.address}</span>
          <span class="mt3 ellipsis-1">${cta}</span>
          <span class="btn">${window.jobbioLocalisation.companiesCTA}</span>
        </a>
      </div>`})}function renderMasonryArticles(container,partnerDisplay,articles,source,style){getContainerWidth(container,style);let dateOptions={day:"2-digit",month:"long",year:"numeric"};document.getElementById(container).innerHTML+=`<div class="v1_6 type-3">
      <div class="top-s">${window.jobbioLocalisation.title} <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="masonry horizontal article multiple">          
        <div class="list" id="masonry-article-multiple-${container}"></div>
      </div>
    </div>`;articles.map(article=>{let link=partnerDisplay.routes.article_url.replace("[article]",article.slug);document.getElementById(`masonry-article-multiple-${container}`).innerHTML+=`<div class="h-item">
        <a href="${link}" class="item" style="background-image:url(${article.image})" target='_blank' onclick="trkclk('${source}')">
          <span class="mt2 mfw6 ellipsis-2">${article.title}</span>
          <span class="mt3">${new Date(article.posted_at).toLocaleDateString("en-GB",dateOptions)}</span>
        </a>
      </div>`})}function renderSidebarJobs(api,container,partnerDisplay,jobs,source,single,style){getContainerWidth(container,style);let uuid=getUUID();if(single){let job=jobs;let link=job.redirect?job.redirect:partnerDisplay.routes.job_url.replace("[company]",job.company.slug).replace("[job]",job.slug);document.getElementById(container).innerHTML+=`<div class="v1_6 type-2 by-1">
        <img class="amply-pxl" data-src="${api}/pixels/amply.gif?widget=true&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
        <div class="top-s">&nbsp; <a href="https://amply.co" target='_blank'>BY Amply</a></div>
        <div class="side-bar job single list">
          <img class="amply-pxl" data-src="${api}/pixels/amply.gif?job_id=${job.id}&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
          ${partnerDisplay.settings.indeed_impression_tracking?`<img class="indeed-tmn-pxl" data-src="${job.impression_url}" width="0" height="0" style="display:block;margin-bottom:-1px"/>`:""}
          <a href="${link}" class="item" target='_blank' onclick="trkclk('${source}', '${uuid}');trkrdt(${job.id},'${source+"_redirect"}',${!!job.redirect},'${link}')">
            <span class="img" style="background-image:url(${job.company.image_logo})">&nbsp;</span>
            <span class="mt2 mfw6 ellipsis-2">${job.title}</span>  
            <span class="mt3 ellipsis-1">${job.company.name}</span>
            <span class="mt3 ellipsis-1">${job.location.city||job.location.state||job.location.country||job.location.address}</span>
            ${job.salary_disclosed?`<span class="mt3 ellipsis-1">${job.salary}</span>`:""}
            <span class="arrow">&nbsp;</span>
          </a>
        </div>
      </div>`;return}document.getElementById(container).innerHTML+=`<div class="v1_6 type-2 by-1">
      <img class="amply-pxl" data-src="${api}/pixels/amply.gif?widget=true&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
      <div class="top-s w-title">${window.jobbioLocalisation.titleJobs} <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="side-bar job multiple">          
        <div class="list" id="side-bar-job-multiple-${container}"></div>
        <div style="text-align: center">
          <a href="${partnerDisplay.routes.jobs_url}?source=jobs_widget" target='_blank' class="more">${window.jobbioLocalisation.jobsSeeMoreCTA}</a>
        </div>
      </div>
    </div>`;jobs.map(job=>{let link=job.redirect?job.redirect:partnerDisplay.routes.job_url.replace("[company]",job.company.slug).replace("[job]",job.slug);document.getElementById(`side-bar-job-multiple-${container}`).innerHTML+=`<img class="amply-pxl" data-src="${api}/pixels/amply.gif?job_id=${job.id}&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
      ${partnerDisplay.settings.indeed_impression_tracking?`<img class="indeed-tmn-pxl" data-src="${job.impression_url}" width="0" height="0" style="display:block;margin-bottom:-1px"/>`:""}
      <a class="item" href="${link}" target='_blank' onclick="trkclk('${source}', '${uuid}');trkrdt(${job.id},'${source+"_redirect"}',${!!job.redirect},'${link}')">
        <span class="img" style="background-image:url(${job.company.image_logo})">&nbsp;</span>
        <span class="mt2 mfw6 ellipsis-2">${job.title}</span>  
        <span class="mt3 ellipsis-1">${job.company.name}</span>
        <span class="mt3 ellipsis-1">${job.location.city||job.location.state||job.location.country||job.location.address}</span>  
        ${job.salary_disclosed?`<span class="mt3 ellipsis-1">${job.salary}</span>`:""}
        <span class="arrow">&nbsp;</span>
      </a>`})}function renderSidebarCompanies(api,container,partnerDisplay,companies,source,single,style){getContainerWidth(container,style);let uuid=getUUID();if(single){let company=companies;let cta="View Company";if(company.live_jobs>0){cta=`${company.live_jobs} Jobs`}let link=partnerDisplay.routes.company_url.replace("[company]",company.slug);document.getElementById(container).innerHTML+=`<div class="v1_6 type-2 by-1">
        <img class="amply-pxl" data-src="${api}/pixels/amply.gif?widget=true&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
        <div class="top-s">&nbsp; <a href="https://amply.co" target='_blank'>BY Amply</a></div>
        <div class="side-bar company single list">
          <img class="amply-pxl" data-src="${api}/pixels/amply.gif?company_id=${company.id}&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
          <a href="${link}" class="item" target='_blank' onclick="trkclk('${source}', '${uuid}')">
            <span class="img" style="background-image:url(${company.image_logo})">&nbsp;</span>
            <span class="mt2 mfw6 ellipsis-1">${company.name}</span>
            <span class="mt3 ellipsis-1">${cta}</span>
            <span class="mt3 ellipsis-1">${company.location.city||company.location.state||company.location.country||company.location.address}</span>
            <span class="arrow">&nbsp;</span>
          </a>
        </div>
      </div>`;return}document.getElementById(container).innerHTML+=`<div class="v1_6 type-2 by-1">
      <img class="amply-pxl" data-src="${api}/pixels/amply.gif?widget=true&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
      <div class="top-s w-title">${window.jobbioLocalisation.titleCompanies} <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="side-bar company multiple">          
        <div class="list" id="side-bar-company-multiple-${container}"></div>
        <div style="text-align: center">
          <a href="${partnerDisplay.routes.home_url}?source=companies_widget" target='_blank' class="more">${window.jobbioLocalisation.companiesSeeMoreCTA}</a>
        </div>
      </div>
    </div>`;companies.map(company=>{let cta="View Company";if(company.live_jobs>0){cta=`${company.live_jobs} Jobs`}let link=partnerDisplay.routes.company_url.replace("[company]",company.slug);document.getElementById(`side-bar-company-multiple-${container}`).innerHTML+=`<img class="amply-pxl" data-src="${api}/pixels/amply.gif?company_id=${company.id}&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
      <a class="item" href="${link}" target='_blank' onclick="trkclk('${source}', '${uuid}')">
        <span class="img" style="background-image:url(${company.image_logo})">&nbsp;</span>
        <span class="mt2 mfw6 ellipsis-1">${company.name}</span>
        <span class="mt3 ellipsis-1">${cta}</span>
        <span class="mt3 ellipsis-1">${company.location.city||company.location.state||company.location.country||company.location.address}</span>
        <span class="arrow">&nbsp;</span>
      </a>`})}function renderSidebarArticles(container,partnerDisplay,articles,source,single,style){getContainerWidth(container,style);let dateOptions={day:"2-digit",month:"long",year:"numeric"};if(single){let article=articles[0];let link=partnerDisplay.routes.article_url.replace("[article]",article.slug);document.getElementById(container).innerHTML+=`<div class="v1_6 type-2 by-1">
        <div class="top-s">&nbsp; <a href="https://amply.co" target='_blank'>BY Amply</a></div>
        <div class="side-bar article single list">
          <a class="item" href="${link}" target='_blank' onclick="trkclk('${source}')">
            <span class="img" style="background-image:url(${article.image})">&nbsp;</span>
            <span class="mt2 mfw6 ellipsis-2">${article.title}</span>
            <span class="mt3">${new Date(article.posted_at).toLocaleDateString("en-GB",dateOptions)}</span>
            <span class="arrow">&nbsp;</span>
          </a>
        </div>
      </div>`;return}document.getElementById(container).innerHTML+=`<div class="v1_6 type-2 by-1">
      <div class="top-s">&nbsp; <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="side-bar article multiple">          
        <div class="list" id="side-bar-article-multiple-${container}"></div>
      </div>
    </div>`;articles.map(article=>{let link=partnerDisplay.routes.article_url.replace("[article]",article.slug);document.getElementById(`side-bar-article-multiple-${container}`).innerHTML+=`<a class="item" href="${link}" target='_blank' onclick="trkclk('${source}')">
        <span class="img" style="background-image:url(${article.image})">&nbsp;</span>
        <span class="mt2 mfw6 ellipsis-2">${article.title}</span>
        <span class="mt3">${new Date(article.posted_at).toLocaleDateString("en-GB",dateOptions)}</span>
        <span class="arrow">&nbsp;</span>
      </a>`})}function renderHorizontalJobs(api,container,partnerDisplay,jobs,source,single,style){getContainerWidth(container,style);let uuid=getUUID();if(single){let job=jobs;let link=job.redirect?job.redirect:partnerDisplay.routes.job_url.replace("[company]",job.company.slug).replace("[job]",job.slug);document.getElementById(container).innerHTML+=`<div class="v1_6 type-1 by-1">
        <img class="amply-pxl" data-src="${api}/pixels/amply.gif?widget=true&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
        <div class="top-s">&nbsp; <a href="https://amply.co" target='_blank'>BY Amply</a></div>
        <div class="horizontal job single list">
          <img class="amply-pxl" data-src="${api}/pixels/amply.gif?job_id=${job.id}&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
          ${partnerDisplay.settings.indeed_impression_tracking?`<img class="indeed-tmn-pxl" data-src="${job.impression_url}" width="0" height="0" style="display:block;margin-bottom:-1px"/>`:""}
          <a href="${link}" class="item pt-19" target='_blank' onclick="trkclk('${source}', '${uuid}');trkrdt(${job.id},'${source+"_redirect"}',${!!job.redirect},'${link}')">
            <span class="rw mh-56">
              <img class="c-logo" loading="lazy" src="${job.company.image_logo}">
              <span class="mt1 mfw6 ellipsis-1">${job.company.name}</span>
            </span>
            <span class="mt2 mfw4 m-mt-8 ellipsis-2">${job.title}</span>
            <span class="i-location mt2 ellipsis-1">${job.location.city||job.location.state||job.location.country||job.location.address}</span>
            ${job.salary_disclosed?`<span class="i-salary mt2 ellipsis-1">${job.salary}</span>`:""}
            <span class="btn">${window.jobbioLocalisation.jobsCTA}</span>
          </a>
        </div>
      </div>`;return}document.getElementById(container).innerHTML+=`<div class="v1_6 type-1">
      <img class="amply-pxl" data-src="${api}/pixels/amply.gif?widget=true&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
      <div class="top-s">${window.jobbioLocalisation.title} <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="horizontal job multiple">          
        <div class="list" id="horizontal-job-multiple-${container}"></div>
        <div style="text-align: center">
          <a href="${partnerDisplay.routes.jobs_url}?source=jobs_widget" target='_blank' class="more">${window.jobbioLocalisation.jobsSeeMoreCTA}</a>
        </div>
      </div>
    </div>`;jobs.map(job=>{let link=job.redirect?job.redirect:partnerDisplay.routes.job_url.replace("[company]",job.company.slug).replace("[job]",job.slug);document.getElementById(`horizontal-job-multiple-${container}`).innerHTML+=`<div class="h-item">
        <img class="amply-pxl" data-src="${api}/pixels/amply.gif?job_id=${job.id}&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
        ${partnerDisplay.settings.indeed_impression_tracking?`<img class="indeed-tmn-pxl" data-src="${job.impression_url}" width="0" height="0" style="display:block;margin-bottom:-1px"/>`:""}
        <a href="${link}" class="item pt-19" target='_blank' onclick="trkclk('${source}', '${uuid}');trkrdt(${job.id},'${source+"_redirect"}',${!!job.redirect},'${link}')">
          <span class="rw mh-56">
            <img class="c-logo" loading="lazy" src="${job.company.image_logo}">
            <span class="mt1 mfw6 ellipsis-1">${job.company.name}</span>
          </span>
          <span class="mt2 mfw4 m-mt-8 ellipsis-2 mh-2">${job.title}</span>
          <span class="i-location mt2 ellipsis-1">${job.location.city||job.location.state||job.location.country||job.location.address}</span>
          ${job.salary_disclosed?`<span class="i-salary mt2 ellipsis-1">${job.salary}</span>`:""}
          <span class="btn">${window.jobbioLocalisation.jobsCTA}</span>
        </a>
      </div>`})}function renderHorizontalCompanies(api,container,partnerDisplay,companies,source,single,style,pageSize){getContainerWidth(container,style);let uuid=getUUID();if(single){let company=companies;let cta="View Company";if(company.live_jobs>0){cta=`${company.live_jobs} Jobs`}let link=partnerDisplay.routes.company_url.replace("[company]",company.slug);document.getElementById(container).innerHTML+=`<div class="v1_6 type-1 by-1">
        <img class="amply-pxl" data-src="${api}/pixels/amply.gif?widget=true&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
        <div class="top-s">&nbsp; <a href="https://amply.co" target='_blank'>BY Amply</a></div>
        <div class="horizontal company single list">
          <img class="amply-pxl" data-src="${api}/pixels/amply.gif?company_id=${company.id}&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
          <a href="${link}" class="item pt-19" target='_blank' onclick="trkclk('${source}', '${uuid}')">
            <span class="rw mh-56">
              <img class="c-logo" loading="lazy" src="${company.image_logo}">
              <span class="mt1 mfw6 ellipsis-1">${company.name}</span>
            </span>
            <span class="i-location mt2 ellipsis-1">${company.location.city||company.location.state||company.location.country||company.location.address}</span>
            <span class="i-total mt2 ellipsis-1">${cta}</span>
            <span class="btn">${window.jobbioLocalisation.companiesCTA}</span>
          </a>
        </div>
      </div>`;return}document.getElementById(container).innerHTML+=`<div class="v1_6 type-1">
      <img class="amply-pxl" data-src="${api}/pixels/amply.gif?widget=true&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
      <div class="top-s">${window.jobbioLocalisation.title} <a href="https://amply.co" target='_blank'>BY Amply</a>
      </div>
      <div class="horizontal company multiple count-${pageSize}">          
        <div class="list" id="horizontal-company-multiple-${container}"></div>
        <div style="text-align: center">
          <a href="${partnerDisplay.routes.home_url}?source=companies_widget" target='_blank' class="more">${window.jobbioLocalisation.companiesSeeMoreCTA}</a>
        </div>
      </div>
    </div>`;companies.map(company=>{let cta="View Company";if(company.live_jobs>0){cta=`${company.live_jobs} Jobs`}let link=partnerDisplay.routes.company_url.replace("[company]",company.slug);document.getElementById(`horizontal-company-multiple-${container}`).innerHTML+=`<div class="h-item">
        <img class="amply-pxl" data-src="${api}/pixels/amply.gif?company_id=${company.id}&source=${source}&url=${encodeURIComponent(window.location.href)}&uuid=${uuid}" width="0" height="0" style="display:block;margin-bottom:-1px" />
        <a href="${link}" class="item pt-19" target='_blank' onclick="trkclk('${source}', '${uuid}')">
          <span class="rw mh-56">
            <img class="c-logo" loading="lazy" src="${company.image_logo}">
            <span class="mt1 mfw6 ellipsis-1">${company.name}</span>
          </span>
          <span class="i-location mt2 ellipsis-1">${company.location.city||company.location.state||company.location.country||company.location.address}</span>
          <span class="i-total mt2 ellipsis-1">${cta}</span>
          <span class="btn">${window.jobbioLocalisation.companiesCTA}</span>
        </a>
      </div>`})}function renderHorizontalArticles(container,partnerDisplay,articles,source,single,style){let dateOptions={day:"2-digit",month:"long",year:"numeric"};getContainerWidth(container,style);if(single){let article=articles[0];let link=partnerDisplay.routes.article_url.replace("[article]",article.slug);document.getElementById(container).innerHTML+=`<div class="v1_6 by-1 type-1">
        <div class="top-s">&nbsp; <a href="https://amply.co" target='_blank'>BY Amply</a></div>
        <div class="horizontal article single list">
          <a href="${link}" target='_blank' class="item" onclick="trkclk('${source}')">
            <span class="a-img" style="background-image:url(${article.image})">&nbsp;</span>
            <span class="mt2 mfw4 m-mt-8 ellipsis-2">${article.title}</span>
            <span class="mt2 m-mt-8">${new Date(article.posted_at).toLocaleDateString("en-GB",dateOptions)}</span>
            <span class="btn">Read More</span>
          </a>
        </div>
      </div>`;return}document.getElementById(container).innerHTML+=`<div class="v1_6 type-1">
      <div class="top-s">${window.jobbioLocalisation.title} <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="horizontal article multiple">          
        <div class="list" id="horizontal-article-multiple-${container}"></div>
      </div>
    </div>`;articles.map(article=>{let link=partnerDisplay.routes.article_url.replace("[article]",article.slug);document.getElementById(`horizontal-article-multiple-${container}`).innerHTML+=`<div class="h-item">
        <a href="${link}" target='_blank' class="item" onclick="trkclk('${source}')">
          <span class="a-img" style="background-image:url(${article.image})">&nbsp;</span>
          <span class="mt2 mfw4 m-mt-8 ellipsis-2 mh-2">${article.title}</span>
          <span class="mt2 m-mt-8">${new Date(article.posted_at).toLocaleDateString("en-GB",dateOptions)}</span>
          <span class="btn">Read More</span>
        </a>
      </div>`})}function getContainerWidth(container,style){var containerDom=document.getElementById(container);if(containerDom!=null){var containerWidth=containerDom.clientWidth;var resolution="resolution-1";if(style==="sidebar"){if(containerWidth>=300){resolution="resolution-2"}}else if(style==="horizontal"){if(containerWidth>=978){resolution="resolution-2"}}else{if(containerWidth>=640){resolution="resolution-2"}if(containerWidth>=1024){resolution="resolution-3"}}containerDom.classList.remove("resolution-1","resolution-2","resolution-3");containerDom.classList.add(resolution)}}function renderMasonryEmptyState(container,style){getContainerWidth(container,style);var jobs=[1,2,3,4];document.getElementById(container).innerHTML+=`<div class="v1_6 type-3 empty-state">
      <div class="top-s"><span class="shimmer w-17-pc h-24-px"></span> <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="masonry horizontal job multiple">
        <div class="list" id="masonry-job-multiple-${container}"></div>
      </div>
    </div>`;jobs.map(job=>{document.getElementById(`masonry-job-multiple-${container}`).innerHTML+=`<div class="h-item">
        <a href="javascript:void(0)" class="item">
          <span class="img shimmer">&nbsp;</span>
          <span class="mt2 mfw4 ellipsis-2"><span class="shimmer h-20-px"></span></span>
          <span class="mt2 mfw6 ellipsis-1"><span class="shimmer h-19-px"></span></span>
          <span class="mt3 ellipsis-1"><span class="shimmer h-19-px"></span></span>
          <span class="btn shimmer w-94-px">&nbsp;</span>
        </a>
      </div>`})}function renderSidebarEmptyState(type,container,style){getContainerWidth(container,style);var jobs=[1,2,3,4];if(type==="single"){document.getElementById(container).innerHTML+=`<div class="v1_6 type-2 by-1 empty-state">
        <div class="top-s">&nbsp; <a href="https://amply.co" target='_blank'>BY Amply</a></div>
        <div class="side-bar job single list">
          <a href="javascript:void(0)" class="item">
            <span class="img shimmer">&nbsp;</span>
            <span class="mt2 mfw6 ellipsis-2"><span class="shimmer h-20-px"></span></span>
            <span class="mt3 ellipsis-1"><span class="shimmer h-19-px"></span></span>
            <span class="mt3 ellipsis-1"><span class="shimmer h-19-px"></span></span>
            <span class="arrow shimmer w-14-px">&nbsp;</span>
          </a>
        </div>
      </div>`;return}document.getElementById(container).innerHTML+=`<div class="v1_6 type-2 by-1 empty-state">
      <div class="top-s w-title"><span class="shimmer w-75-pc h-24-px"></span> <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="side-bar job multiple">          
        <div class="list" id="side-bar-job-multiple-${container}"></div>
      </div>
    </div>`;jobs.map(job=>{document.getElementById(`side-bar-job-multiple-${container}`).innerHTML+=`<a href="javascript:void(0)" class="item">
        <span class="img shimmer">&nbsp;</span>
        <span class="mt2 mfw6 ellipsis-2"><span class="shimmer h-20-px"></span></span>
        <span class="mt3 ellipsis-1"><span class="shimmer h-19-px"></span></span>
        <span class="mt3 ellipsis-1"><span class="shimmer h-19-px"></span></span>
        <span class="arrow shimmer w-14-px">&nbsp;</span>
      </a>`})}function renderHorizontalEmptyState(type,container,style){getContainerWidth(container,style);var jobs=[1,2,3,4];if(type==="single"){document.getElementById(container).innerHTML+=`<div class="v1_6 type-1 by-1 empty-state">
        <div class="top-s">&nbsp; <a href="https://amply.co" target='_blank'>BY Amply</a></div>
        <div class="horizontal job single list">
          <a href="javascript:void(0)" class="item">
            <span class="rw mh-56">
              <span class="c-logo shimmer">&nbsp;</span>
              <span class="mt1 mfw6 ellipsis-1"><span class="shimmer w-94-px h-20-px"></span></span>
            </span>
            <span class="mt2 mfw4 m-mt-8 ellipsis-2"><span class="shimmer h-19-px"></span></span>
            <span class="i-location mt2 ellipsis-1"><span class="shimmer h-19-px"></span></span>
            <span class="btn shimmer w-94-px">&nbsp;</span>
          </a>
        </div>
      </div>`;return}document.getElementById(container).innerHTML+=`<div class="v1_6 type-1 empty-state">
      <div class="top-s"><span class="shimmer w-75-pc h-24-px"></span> <a href="https://amply.co" target='_blank'>BY Amply</a></div>
      <div class="horizontal job multiple">          
        <div class="list" id="horizontal-job-multiple-${container}"></div>
      </div>
    </div>`;jobs.map(job=>{document.getElementById(`horizontal-job-multiple-${container}`).innerHTML+=`<div class="h-item">
        <a href="javascript:void(0)" class="item">
          <span class="rw mh-56">
            <span class="c-logo shimmer">&nbsp;</span>
            <span class="mt1 mfw6 ellipsis-1"><span class="shimmer w-94-px h-20-px"></span></span>
          </span>
          <span class="mt2 mfw4 m-mt-8 ellipsis-2"><span class="shimmer h-19-px"></span></span>
          <span class="i-location mt2 ellipsis-1"><span class="shimmer h-19-px"></span></span>
          <span class="btn shimmer w-94-px">&nbsp;</span>
        </a>
      </div>`})}function getUUID(){let date=(new Date).getTime();let uuid="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy])});return uuid}