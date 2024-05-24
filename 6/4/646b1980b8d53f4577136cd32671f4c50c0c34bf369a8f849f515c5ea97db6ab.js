/**
 * Pingdom

$.fn.dataTableExt.oPagination.four_button = {
    /*
     * Function: oPagination.four_button.fnInit
     * Purpose:  Initalise dom elements required for pagination with a list of the pages
     * Returns:  -
     * Inputs:   object:oSettings - dataTables settings object
     *           node:nPaging - the DIV which contains this pagination control
     *           function:fnCallbackDraw - draw function which must be called on update
     */
    "fnInit": function ( oSettings, nPaging, fnCallbackDraw )
    {
        nFirst = $("<a />", { text: oSettings.oLanguage.oPaginate.sFirst }).addClass('paginate_button first');
        nPrevious = $("<a />", { text: oSettings.oLanguage.oPaginate.sPrevious }).addClass('paginate_button previous');
        nNext = $("<a />", { text: oSettings.oLanguage.oPaginate.sNext }).addClass('paginate_button next');
        nLast = $("<a />", { text: oSettings.oLanguage.oPaginate.sLast }).addClass('paginate_button last');

        $(nPaging)
            .append(nFirst)
            .append(nPrevious)
            .append($("<span />", { text: 'Page ' }))
            .append($('<span />', { text: 'n' }))
            .append($('<span />', { text: ' of ' }))
            .append($('<span />', { text: 'n' }))
            .append(nNext)
            .append(nLast);

        nFirst.click( function () {
            oSettings.oApi._fnPageChange( oSettings, "first" );
            fnCallbackDraw( oSettings );
        });

        nPrevious.click( function() {
            oSettings.oApi._fnPageChange( oSettings, "previous" );
            fnCallbackDraw( oSettings );
        });

        nNext.click( function() {
            oSettings.oApi._fnPageChange( oSettings, "next" );
            fnCallbackDraw( oSettings );
        });

        nLast.click( function() {
            oSettings.oApi._fnPageChange( oSettings, "last" );
            fnCallbackDraw( oSettings );
        });
    },

    /*
     * Function: oPagination.four_button.fnUpdate
     * Purpose:  Update the list of page buttons shows
     * Returns:  -
     * Inputs:   object:oSettings - dataTables settings object
     *           function:fnCallbackDraw - draw function which must be called on update
     */
    "fnUpdate": function ( oSettings, fnCallbackDraw )
    {
        if ( !oSettings.aanFeatures.p )
        {
            return;
        }

        var pageSize = oSettings._iDisplayLength;
        var currentPage = Math.ceil((oSettings._iDisplayStart + pageSize) / pageSize);
        var totalPages = Math.ceil(oSettings.fnRecordsDisplay() / pageSize);

        /* Loop over each instance of the pager */
        var an = oSettings.aanFeatures.p;
        for ( var i=0, iLen = an.length ; i < iLen ; i++ )
        {
            var links = an[i].getElementsByTagName('a');

            if ( oSettings._iDisplayStart === 0 )
            {
                links[0].className = "paginate_button first disabled";
                links[1].className = "paginate_button previous disabled";

                links[0].href = '#';
                links[1].href = '#';
            }
            else
            {
                links[0].className = "paginate_button first enabled";
                links[1].className = "paginate_button previous enabled";

                links[0].href = '?page=' + (currentPage - 1) + '&pagesize=' + pageSize;
                links[1].href = '?page=1&pagesize=' + pageSize;
            }

            if ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() )
            {
                links[2].className = "paginate_button next disabled";
                links[3].className = "paginate_button last disabled";

                links[2].href = '#';
                links[3].href = '#';
            }
            else
            {
                links[2].className = "paginate_button next enabled";
                links[3].className = "paginate_button last enabled";

                links[2].href = '?page=' + (currentPage + 1) + '&pagesize=' + pageSize;
                links[3].href = '?page=' + totalPages + '&pagesize=' + pageSize;
            }

            var spans = an[i].getElementsByTagName('span');

            spans[1].innerHTML = currentPage;
            spans[3].innerHTML = totalPages;
        }
    }
};

jQuery.fn.dataTableExt.oApi.fnSetFilteringDelay = function ( oSettings, iDelay ) {
	/*
	 * Type:        Plugin for DataTables (www.datatables.net) JQuery plugin.
	 * Name:        dataTableExt.oApi.fnSetFilteringDelay
	 * Version:     2.2.1
	 * Description: Enables filtration delay for keeping the browser more
	 *              responsive while searching for a longer keyword.
	 * Inputs:      object:oSettings - dataTables settings object
	 *              integer:iDelay - delay in miliseconds
	 * Returns:     JQuery
	 * Usage:       $('#example').dataTable().fnSetFilteringDelay(250);
	 * Requires:	  DataTables 1.6.0+
	 *
	 * Author:      Zygimantas Berziunas (www.zygimantas.com) and Allan Jardine (v2)
	 * Created:     7/3/2009
	 * Language:    Javascript
	 * License:     GPL v2 or BSD 3 point style
	 * Contact:     zygimantas.berziunas /AT\ hotmail.com
	 */
	var
		_that = this,
		iDelay = (typeof iDelay == 'undefined') ? 250 : iDelay;

	this.each( function ( i ) {
		$.fn.dataTableExt.iApiIndex = i;
		var
			$this = this,
			oTimerId = null,
			sPreviousSearch = null,
			anControl = $( 'input', _that.fnSettings().aanFeatures.f );

			anControl.unbind( 'keyup' ).bind( 'keyup', function() {
			var $$this = $this;

			if (sPreviousSearch === null || sPreviousSearch != anControl.val()) {
				window.clearTimeout(oTimerId);
				sPreviousSearch = anControl.val();
				oTimerId = window.setTimeout(function() {
					$.fn.dataTableExt.iApiIndex = i;
					_that.fnFilter( anControl.val() );
				}, iDelay);
			}
		});

		return this;
	} );
	return this;
}

// Default options
var dataTableOptions = {
    'iDisplayLength': 10,
    'aLengthMenu': [5, 10, 20, 35, 50],
    'sDom': '<"H"f>t<"F"lrp>',
    'sPaginationType': 'four_button',
    'bAutoWidth': false,
    'bStateSave': true,
    'iCookieDuration': 86400*30,
    'sCookiePrefix': 'pingdom_',
    'bServerSide': true,
    'bProcessing': true,
    'fnServerData': function (sSource, aoData, fnCallback) {
        // Replace pagination with progress indicator
        $('.dataTables_paginate').hide();
        $('.dataTables_length').hide();
        $('.dataTables_processing').show();

        $.ajax({
            'dataType': 'json',
            'type': 'GET',
            'url': sSource,
            'data': aoData,
            'success': fnCallback,
            'error': function(jqXHR, textStatus, errorThrown) {
                // Hide progress indicator
                $('.dataTables_processing').hide();

                // Show error message in a td, wrapping the full length
                var ths = $('.dataTables_wrapper th').length;

                $('.dataTables_wrapper tbody').empty();
                $('.dataTables_wrapper tbody').append($('<tr><td colspan="' + ths + '">There was an error updating the page. Please try again later.</td></tr>'));
            }
        });
    },
    'fnDrawCallback': function () {
        // Replace progress indicator with pagination
        $('.dataTables_processing').hide();

        var settings = this.fnSettings();
        // Hide dropdown with "N rows per page" if there are fewer rows than the smallest N
        $('.dataTables_length').toggle(settings.aLengthMenu[0] < settings.fnRecordsDisplay());
        // Hide filter input box if all rows in database fit inside the smallest "N rows per page"
        $('.dataTables_filter').toggle(settings.aLengthMenu[0] < settings.fnRecordsTotal());
        // Hide pagination buttons if all displayed rows fit on the current page
        $('.dataTables_paginate').toggle(settings._iDisplayLength < settings.fnRecordsDisplay());

        // Show sorting triangles as Unicode characters
        $('.sorting .triangle').text('');
        $('.sorting_asc .triangle').text(' ▲');
        $('.sorting_desc .triangle').text(' ▼');

        $(window).trigger('datatable-draw');
    },
    oLanguage: {
        'sProcessing': 'Loading data...',
        'sLengthMenu': 'Show _MENU_ rows per page',
        'sZeroRecords': 'No matching rows found',
        'sSearch': 'Filter:',
        'oPaginate': {
            'sFirst':    '',
            'sPrevious': '',
            'sNext':     '',
            'sLast':     ''
        }
    }
};
ngs-more-visible">Making warnings more visible</a></li>
<li class="toctree-l3"><a class="reference internal" href="#enabling-pdf-and-epub-builds">Enabling PDF and EPUB builds</a></li>
</ul>
</li>
<li class="toctree-l2"><a class="reference internal" href="#versioning-documentation">Versioning documentation</a><ul>
<li class="toctree-l3"><a class="reference internal" href="#creating-a-new-version">Creating a new version</a></li>
<li class="toctree-l3"><a class="reference internal" href="#modifying-versions">Modifying versions</a></li>
</ul>
</li>
<li class="toctree-l2"><a class="reference internal" href="#getting-insights-from-your-projects">Getting insights from your projects</a><ul>
<li class="toctree-l3"><a class="reference internal" href="#browsing-traffic-analytics">Browsing traffic analytics</a></li>
<li class="toctree-l3"><a class="reference internal" href="#browsing-search-analytics">Browsing search analytics</a></li>
</ul>
</li>
<li class="toctree-l2"><a class="reference internal" href="#where-to-go-from-here">Where to go from here</a></li>
</ul>
</li>
<li class="toctree-l1"><a class="reference internal" href="../intro/getting-started-with-sphinx.html">Getting started with Sphinx</a></li>
<li class="toctree-l1"><a class="reference internal" href="../intro/getting-started-with-mkdocs.html">Getting started with MkDocs</a></li>
<li class="toctree-l1"><a class="reference internal" href="../intro/import-guide.html">Importing your documentation</a></li>
<li class="toctree-l1"><a class="reference internal" href="../config-file/index.html">Configuration file tutorial</a></li>
<li class="toctree-l1"><a class="reference internal" href="../examples.html">Example projects</a></li>
</ul>
<p class="caption" role="heading"><span class="caption-text">💡 Explanation</span></p>
<ul>
<li class="toctree-l1"><a class="reference internal" href="../choosing-a-site.html">Choosing between our two platforms</a></li>
<li class="toctree-l1"><a class="reference internal" href="../integrations.html">Continuous Documentation Deployment</a></li>
<li class="toctree-l1"><a class="reference internal" href="../downloadable-documentation.html">Understanding offline formats</a></li>
<li class="toctree-l1"><a class="reference internal" href="../environment-variables.html">Understanding environment variables</a></li>
<li class="toctree-l1"><a class="reference internal" href="../subprojects.html">Subprojects: host multiple projects on a single domain</a></li>
<li class="toctree-l1"><a class="reference internal" href="../localization.html">Localization of documentation</a></li>
<li class="toctree-l1"><a class="reference internal" href="../explanation/advanced.html">Deep dive into Read the Docs</a></li>
<li class="toctree-l1"><a class="reference internal" href="../explanation/methodology.html">Methodology and best practice</a></li>
</ul>
<p class="caption" role="heading"><span class="caption-text">🪄 How-to guides</span></p>
<ul>
<li class="toctree-l1"><a class="reference internal" href="../guides/setup/index.html">Project setup and configuration</a></li>
<li class="toctree-l1"><a class="reference internal" href="../guides/build/index.html">Build process</a></li>
<li class="toctree-l1"><a class="reference internal" href="../guides/maintenance/index.html">Upgrading and maintaining projects</a></li>
<li class="toctree-l1"><a class="reference internal" href="../guides/content/index.html">Content, themes and SEO</a></li>
<li class="toctree-l1"><a class="reference internal" href="../guides/access/index.html">Security and access</a></li>
<li class="toctree-l1"><a class="reference internal" href="../guides/management/index.html">Account management</a></li>
<li class="toctree-l1"><a class="reference internal" href="../guides/best-practice/index.html">Best practice</a></li>
<li class="toctree-l1"><a class="reference internal" href="../guides/troubleshooting/index.html">Troubleshooting problems</a></li>
</ul>
<p class="caption" role="heading"><span class="caption-text">📚 Reference</span></p>
<ul>
<li class="toctree-l1"><a class="reference internal" href="../reference/features.html">Feature reference</a></li>
<li class="toctree-l1"><a class="reference internal" href="../config-file/v2.html">Configuration file v2 (.readthedocs.yaml)</a></li>
<li class="toctree-l1"><a class="reference internal" href="../builds.html">Build process overview</a></li>
<li class="toctree-l1"><a class="reference internal" href="../build-customization.html">Build process customization</a></li>
<li class="toctree-l1"><a class="reference internal" href="../server-side-search/syntax.html">Search query syntax</a></li>
<li class="toctree-l1"><a class="reference internal" href="../faq.html">Frequently asked questions</a></li>
<li class="toctree-l1"><a class="reference internal" href="../api/index.html">Public API</a></li>
<li class="toctree-l1"><a class="reference internal" href="../changelog.html">Changelog</a></li>
<li class="toctree-l1"><a class="reference internal" href="../about/index.html">About Read the Docs</a></li>
<li class="toctree-l1"><a class="reference external" href="https://dev.readthedocs.io">Developer Documentation</a></li>
</ul>

        </div>
      </div>
    </nav>

    <section data-toggle="wy-nav-shift" class="wy-nav-content-wrap"><nav class="wy-nav-top" aria-label="Mobile navigation menu" >
          <i data-toggle="wy-nav-top" class="fa fa-bars"></i>
          <a href="../index.html">Read the Docs user documentation</a>
      </nav>

      <div class="wy-nav-content">
        <div class="rst-content">
          <div role="navigation" aria-label="Page navigation">
  <ul class="wy-breadcrumbs">
      <li><a href="../index.html" class="icon icon-home" aria-label="Home"></a></li>
      <li class="breadcrumb-item active">Read the Docs tutorial</li>
      <li class="wy-breadcrumbs-aside">
              <a href="https://github.com/readthedocs/readthedocs.org/blob/e5143773fc0826515f5bf508d4b659d8e9a4303f/docs/user/tutorial/index.rst" class="fa fa-github"> Edit on GitHub</a>
      </li>
  </ul>
  <hr/>
</div>
          <div role="main" class="document" itemscope="itemscope" itemtype="http://schema.org/Article">
  
           <div itemprop="articleBody">
             
  <section id="read-the-docs-tutorial">
<h1>Read the Docs tutorial<a class="headerlink" href="#read-the-docs-tutorial" title="Link to this heading"></a></h1>
<p>In this tutorial you will create a documentation project on Read the Docs
by importing a Sphinx project from a GitHub repository,
tailor its configuration, and explore several useful features of the platform.</p>
<p>The tutorial is aimed at people interested in learning
how to use Read the Docs to host their documentation projects.
You will fork a fictional software library
similar to the one developed in the <a class="hxr-hoverxref hxr-tooltip reference external" href="https://www.sphinx-doc.org/en/master/tutorial/index.html" title="(in Sphinx v7.3.0)"><span class="xref std std-doc">official Sphinx tutorial</span></a>.
No prior experience with Sphinx is required
and you can follow this tutorial without having done the Sphinx one.</p>
<p>The only things you will need are
a web browser, an Internet connection, and a GitHub account
(you can <a class="reference external" href="https://github.com/signup">register for a free account</a> if you don’t have one).
You will use Read the Docs Community, which means that the project will be public.</p>
<section id="getting-started">
<h2>Getting started<a class="headerlink" href="#getting-started" title="Link to this heading"></a></h2>
<section id="preparing-your-project-on-github">
<h3>Preparing your project on GitHub<a class="headerlink" href="#preparing-your-project-on-github" title="Link to this heading"></a></h3>
<p>To start, <a class="reference external" href="https://github.com/login">sign in to GitHub</a>
and navigate to <a class="reference external" href="https://github.com/readthedocs/tutorial-template/">the tutorial GitHub template</a>,
where you will see a green <span class="guilabel">Use this template</span> button.
Click it to open a new page that will ask you for some details:</p>
<ul class="simple">
<li><p>Leave the default “Owner”, or change it to something better for a tutorial project.</p></li>
<li><p>Introduce an appropriate “Repository name”, for example <code class="docutils literal notranslate"><span class="pre">rtd-tutorial</span></code>.</p></li>
<li><p>Make sure the project is “Public”, rather than “Private”.</p></li>
</ul>
<p>After that, click on the green <span class="guilabel">Create repository from template</span> button,
which will generate a new repository on your personal account
(or the one of your choosing).
This is the repository you will import on Read the Docs,
and it contains the following files:</p>
<dl class="simple">
<dt><code class="docutils literal notranslate"><span class="pre">.readthedocs.yaml</span></code></dt><dd><p>Read the Docs configuration file.
Required to setup the documentation build process.</p>
</dd>
<dt><code class="docutils literal notranslate"><span class="pre">README.rst</span></code></dt><dd><p>Basic description of the repository, you will leave it untouched.</p>
</dd>
<dt><code class="docutils literal notranslate"><span class="pre">pyproject.toml</span></code></dt><dd><p>Python project metadata that makes it installable.
Useful for automatic documentation generation from sources.</p>
</dd>
<dt><code class="docutils literal notranslate"><span class="pre">lumache.py</span></code></dt><dd><p>Source code of the fictional Python library.</p>
</dd>
<dt><code class="docutils literal notranslate"><span class="pre">docs/</span></code></dt><dd><p>Directory holding all the Sphinx documentation sources,
including the Sphinx configuration <code class="docutils literal notranslate"><span class="pre">docs/source/conf.py</span></code>
and the root document <code class="docutils literal notranslate"><span class="pre">docs/source/index.rst</span></code> written in reStructuredText.</p>
</dd>
</dl>
<figure class="align-center" id="id3">
<a class="reference internal image-reference" href="../_images/github-template.png"><img alt="GitHub template for the tutorial" src="../_images/github-template.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">GitHub template for the tutorial</span><a class="headerlink" href="#id3" title="Link to this image"></a></p>
</figcaption>
</figure>
</section>
<section id="sign-up-for-read-the-docs">
<h3>Sign up for Read the Docs<a class="headerlink" href="#sign-up-for-read-the-docs" title="Link to this heading"></a></h3>
<p>To sign up for a Read the Docs account,
navigate to the <a class="reference external" href="https://readthedocs.org/accounts/signup/">Sign Up page</a>
and choose the option <span class="guilabel">Sign up with GitHub</span>.
On the authorization page, click the green <span class="guilabel">Authorize readthedocs</span> button.</p>
<figure class="align-center" id="id4">
<a class="reference internal image-reference" href="../_images/github-authorization.png"><img alt="GitHub authorization page" src="../_images/github-authorization.png" style="width: 60%;" /></a>
<figcaption>
<p><span class="caption-text">GitHub authorization page</span><a class="headerlink" href="#id4" title="Link to this image"></a></p>
</figcaption>
</figure>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Read the Docs needs elevated permissions to perform certain operations
that ensure that the workflow is as smooth as possible,
like installing <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-webhook"><span class="xref std std-term">webhooks</span></a>.
If you want to learn more,
check out <a class="hxr-hoverxref hxr-tooltip reference internal" href="../guides/setup/git-repo-automatic.html#permissions-for-connected-accounts"><span class="std std-ref">Permissions for connected accounts</span></a>.</p>
</div>
<p>After that, you will be redirected to Read the Docs,
where you will need to confirm your e-mail and username.
Clicking the <span class="guilabel">Sign Up »</span> button will create your account
and redirect you to your <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-dashboard"><span class="xref std std-term">dashboard</span></a>.</p>
<p>By now, you should have two email notifications:</p>
<ul class="simple">
<li><p>One from GitHub, telling you that “A third-party OAuth application …
was recently authorized to access your account”. You don’t need to do
anything about it.</p></li>
<li><p>Another one from Read the Docs, prompting you to “verify your email
address”. Click on the link to finalize the process.</p></li>
</ul>
<p>Once done, your Read the Docs account is created
and ready to import your first project.</p>
<p>Welcome!</p>
<figure class="align-center" id="id5">
<a class="reference internal image-reference" href="../_images/rtd-empty-dashboard.png"><img alt="Read the Docs empty dashboard" src="../_images/rtd-empty-dashboard.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">Read the Docs empty dashboard</span><a class="headerlink" href="#id5" title="Link to this image"></a></p>
</figcaption>
</figure>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Our commercial site offers some extra features,
like support for private projects.
You can learn more about <a class="reference internal" href="../choosing-a-site.html"><span class="doc">our two different sites</span></a>.</p>
</div>
</section>
</section>
<section id="first-steps">
<h2>First steps<a class="headerlink" href="#first-steps" title="Link to this heading"></a></h2>
<section id="importing-the-project-to-read-the-docs">
<h3>Importing the project to Read the Docs<a class="headerlink" href="#importing-the-project-to-read-the-docs" title="Link to this heading"></a></h3>
<p>To import your GitHub project to Read the Docs,
first click on the <span class="guilabel">Import a Project</span> button on your dashboard
(or browse to <a class="reference external" href="https://readthedocs.org/dashboard/import/">the import page</a> directly).
You should see your GitHub account under the “Filter repositories” list on the right.
If the list of repositories is empty, click the 🔄 button,
and after that all your repositories will appear on the center.</p>
<figure class="align-center" id="id6">
<a class="reference internal image-reference" href="../_images/rtd-import-projects.gif"><img alt="Import projects workflow" src="../_images/rtd-import-projects.gif" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">Import projects workflow</span><a class="headerlink" href="#id6" title="Link to this image"></a></p>
</figcaption>
</figure>
<p>Locate your <code class="docutils literal notranslate"><span class="pre">rtd-tutorial</span></code> project
(possibly clicking <span class="guilabel">next ››</span> at the bottom if you have several pages of projects),
and then click on the ➕ button to the right of the name.
The next page will ask you to fill some details about your Read the Docs project:</p>
<dl class="simple">
<dt>Name</dt><dd><p>The name of the project. It has to be unique across all the service,
so it is better if you prepend your username,
for example <code class="docutils literal notranslate"><span class="pre">{username}-rtd-tutorial</span></code>.</p>
</dd>
<dt>Repository URL</dt><dd><p>The URL that contains the sources. Leave the automatically filled value.</p>
</dd>
<dt>Default branch</dt><dd><p>Name of the default branch of the project, leave it as <code class="docutils literal notranslate"><span class="pre">main</span></code>.</p>
</dd>
</dl>
<p>After hitting the <span class="guilabel">Next</span> button, you will be redirected to the <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-project-home"><span class="xref std std-term">project home</span></a>.
You just created your first project on Read the Docs! 🎉</p>
<figure class="align-center" id="id7">
<a class="reference internal image-reference" href="../_images/rtd-project-home.png"><img alt="Project home" src="../_images/rtd-project-home.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">Project home</span><a class="headerlink" href="#id7" title="Link to this image"></a></p>
</figcaption>
</figure>
</section>
<section id="checking-the-first-build">
<h3>Checking the first build<a class="headerlink" href="#checking-the-first-build" title="Link to this heading"></a></h3>
<p>Read the Docs will try to build the documentation of your project
right after you create it.
To see the build logs,
click on the <span class="guilabel">Your documentation is building</span> link on the <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-project-home"><span class="xref std std-term">project home</span></a>,
or alternatively navigate to the “Builds” page,
then open the one on top (the most recent one).</p>
<p>If the build has not finished yet by the time you open it,
you will see a spinner next to a “Installing” or “Building” indicator,
meaning that it is still in progress.</p>
<figure class="align-center" id="id8">
<a class="reference internal image-reference" href="../_images/rtd-first-successful-build.png"><img alt="First successful documentation build" src="../_images/rtd-first-successful-build.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">First successful documentation build</span><a class="headerlink" href="#id8" title="Link to this image"></a></p>
</figcaption>
</figure>
<p>When the build finishes, you will see a green “Build completed” indicator,
the completion date, the elapsed time,
and a link to see the corresponding documentation.
If you now click on <span class="guilabel">View docs</span>, you will see your documentation live!</p>
<figure class="align-center" id="id9">
<a class="reference internal image-reference" href="../_images/rtd-first-light.png"><img alt="HTML documentation live on Read the Docs" src="../_images/rtd-first-light.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">HTML documentation live on Read the Docs</span><a class="headerlink" href="#id9" title="Link to this image"></a></p>
</figcaption>
</figure>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Advertisement is one of our main sources of revenue.
If you want to learn more about how do we fund our operations
and explore options to go ad-free,
check out our <a class="reference external" href="https://readthedocs.org/sustainability/">Sustainability page</a>.</p>
<p>If you don’t see the ad, you might be using an ad blocker.
Our EthicalAds network respects your privacy, doesn’t target you,
and tries to be as unobstrusive as possible,
so we would like to kindly ask you to <a class="reference internal" href="../advertising/ad-blocking.html"><span class="doc">not block us</span></a> ❤️</p>
</div>
</section>
<section id="basic-configuration-changes">
<h3>Basic configuration changes<a class="headerlink" href="#basic-configuration-changes" title="Link to this heading"></a></h3>
<p>You can now proceed to make some basic configuration adjustments.
Navigate back to the <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-project-page"><span class="xref std std-term">project page</span></a>
and click on the <span class="guilabel">⚙ Admin</span> button, which will open the Settings page.</p>
<p>First of all, add the following text in the description:</p>
<blockquote>
<div><p>Lumache (/lu’make/) is a Python library for cooks and food lovers
that creates recipes mixing random ingredients.</p>
</div></blockquote>
<p>Then set the project homepage to <code class="docutils literal notranslate"><span class="pre">https://world.openfoodfacts.org/</span></code>,
and write <code class="docutils literal notranslate"><span class="pre">food,</span> <span class="pre">python</span></code> in the list of tags.
All this information will be shown on your project home.</p>
<p>After that, configure your email so you get a notification if the build fails.
To do so, click on the <span class="guilabel">Notifications</span> link on the left,
type the email where you would like to get the notification,
and click the <span class="guilabel">Add</span> button.
After that, your email will be shown under “Existing Notifications”.</p>
</section>
<section id="trigger-a-build-from-a-pull-request">
<h3>Trigger a build from a pull request<a class="headerlink" href="#trigger-a-build-from-a-pull-request" title="Link to this heading"></a></h3>
<p>Read the Docs allows you to <a class="reference internal" href="../pull-requests.html"><span class="doc">trigger builds from GitHub pull requests</span></a>
and gives you a preview of how the documentation would look like with those changes.</p>
<p>To enable that functionality, first click on the <span class="guilabel">Advanced Settings</span> link on the left
under the <span class="guilabel">⚙ Admin</span> menu, check the “Build pull requests for this project” checkbox,
and click the <span class="guilabel">Save</span> button at the bottom of the page.</p>
<p>Next, navigate to your GitHub repository, locate the file <code class="docutils literal notranslate"><span class="pre">docs/source/index.rst</span></code>,
and click on the ✏️ icon on the top-right with the tooltip “Edit this file”
to open a web editor (more information <a class="reference external" href="https://docs.github.com/en/github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository">on their documentation</a>).</p>
<figure class="align-center" id="id10">
<a class="reference internal image-reference" href="../_images/gh-edit.png"><img alt="File view on GitHub before launching the editor" src="../_images/gh-edit.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">File view on GitHub before launching the editor</span><a class="headerlink" href="#id10" title="Link to this image"></a></p>
</figcaption>
</figure>
<p>In the editor, add the following sentence to the file:</p>
<div class="literal-block-wrapper docutils container" id="id11">
<div class="code-block-caption"><span class="caption-text">docs/source/index.rst</span><a class="headerlink" href="#id11" title="Link to this code"></a></div>
<div class="highlight-rst notranslate"><div class="highlight"><pre><span></span>Lumache has its documentation hosted on Read the Docs.
</pre></div>
</div>
</div>
<p>Write an appropriate commit message,
and choose the “Create a <strong>new branch</strong> for this commit and start a pull request” option,
typing a name for the new branch.
When you are done, click the green <span class="guilabel">Propose changes</span> button,
which will take you to the new pull request page,
and there click the <span class="guilabel">Create pull request</span> button below the description.</p>
<figure class="align-center" id="id12">
<a class="reference internal image-reference" href="../_images/gh-pr-build.png"><img alt="Read the Docs building the pull request from GitHub" src="../_images/gh-pr-build.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">Read the Docs building the pull request from GitHub</span><a class="headerlink" href="#id12" title="Link to this image"></a></p>
</figcaption>
</figure>
<p>After opening the pull request, a Read the Docs check will appear
indicating that it is building the documentation for that pull request.
If you click on the <span class="guilabel">Details</span> link while it is building,
you will access the build logs,
otherwise it will take you directly to the documentation.
When you are satisfied, you can merge the pull request!</p>
</section>
</section>
<section id="adding-a-configuration-file">
<h2>Adding a configuration file<a class="headerlink" href="#adding-a-configuration-file" title="Link to this heading"></a></h2>
<p>The Admin tab of the <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-project-home"><span class="xref std std-term">project home</span></a> allows you
to change some <em>global</em> configuration values of your project.
In addition, you can further customize the building process
using the <code class="docutils literal notranslate"><span class="pre">.readthedocs.yaml</span></code> <a class="reference internal" href="../config-file/v2.html"><span class="doc">configuration file</span></a>.
This has several advantages:</p>
<ul class="simple">
<li><p>The configuration lives next to your code and documentation, tracked by version control.</p></li>
<li><p>It can be different for every version (more on versioning in the next section).</p></li>
<li><p>Some configurations are only available using the config file.</p></li>
</ul>
<p>This configuration file should be part of your Git repository.
It should be located in the base folder of the repository and be named <code class="docutils literal notranslate"><span class="pre">.readthedocs.yaml</span></code>.</p>
<p>In this section, we will show you some examples of what a configuration file should contain.</p>
<div class="admonition tip">
<p class="admonition-title">Tip</p>
<p>Settings that apply to the entire project are controlled in the web dashboard,
while settings that are version or build specific are better in the YAML file.</p>
</div>
<section id="changing-the-python-version">
<h3>Changing the Python version<a class="headerlink" href="#changing-the-python-version" title="Link to this heading"></a></h3>
<p>For example, to explicitly use Python 3.8 to build your project,
navigate to your GitHub repository, click on <code class="docutils literal notranslate"><span class="pre">.readthedocs.yaml</span></code> file and then in the pencil icon ✏️ to edit the file
and change the Python version as follows:</p>
<div class="literal-block-wrapper docutils container" id="id13">
<div class="code-block-caption"><span class="caption-text">.readthedocs.yaml</span><a class="headerlink" href="#id13" title="Link to this code"></a></div>
<div class="highlight-yaml notranslate"><div class="highlight"><pre><span></span><span class="nt">version</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">2</span>

<span class="nt">build</span><span class="p">:</span>
<span class="w">  </span><span class="nt">os</span><span class="p">:</span><span class="w"> </span><span class="s">&quot;ubuntu-22.04&quot;</span>
<span class="w">  </span><span class="nt">tools</span><span class="p">:</span>
<span class="hll"><span class="w">    </span><span class="nt">python</span><span class="p">:</span><span class="w"> </span><span class="s">&quot;3.8&quot;</span>
</span>
<span class="nt">python</span><span class="p">:</span>
<span class="w">  </span><span class="nt">install</span><span class="p">:</span>
<span class="w">    </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="nt">requirements</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">docs/requirements.txt</span>

<span class="nt">sphinx</span><span class="p">:</span>
<span class="w">  </span><span class="nt">configuration</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">docs/source/conf.py</span>
</pre></div>
</div>
</div>
<p>The purpose of each key is:</p>
<dl class="simple">
<dt><code class="docutils literal notranslate"><span class="pre">version</span></code></dt><dd><p>Mandatory, specifies <a class="reference internal" href="../config-file/v2.html"><span class="doc">version 2 of the configuration file</span></a>.</p>
</dd>
<dt><code class="docutils literal notranslate"><span class="pre">build.os</span></code></dt><dd><p>Required to specify the Python version,
<a class="hxr-hoverxref hxr-tooltip reference internal" href="../config-file/v2.html#build-os"><span class="std std-ref">states the name of the base image</span></a>.</p>
</dd>
<dt><code class="docutils literal notranslate"><span class="pre">build.tools.python</span></code></dt><dd><p>Declares the Python version to be used.</p>
</dd>
<dt><code class="docutils literal notranslate"><span class="pre">python.install.requirements</span></code></dt><dd><p>Specifies the Python dependencies to install required to build the documentation.</p>
</dd>
</dl>
<p>After you commit these changes, go back to your project home,
navigate to the “Builds” page, and open the new build that just started.
You will notice that one of the lines contains <code class="docutils literal notranslate"><span class="pre">python</span> <span class="pre">-mvirtualenv</span></code>:
if you click on it, you will see the full output of the corresponding command,
stating that it used Python 3.8.6 to create the virtual environment.</p>
<figure class="align-center" id="id14">
<a class="reference internal image-reference" href="../_images/build-python3.8.png"><img alt="Read the Docs build using Python 3.8" src="../_images/build-python3.8.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">Read the Docs build using Python 3.8</span><a class="headerlink" href="#id14" title="Link to this image"></a></p>
</figcaption>
</figure>
</section>
<section id="making-warnings-more-visible">
<h3>Making warnings more visible<a class="headerlink" href="#making-warnings-more-visible" title="Link to this heading"></a></h3>
<p>If you navigate to your HTML documentation,
you will notice that the index page looks correct
but the API section is empty.
This is a very common issue with Sphinx,
and the reason is stated in the build logs.
On the build page you opened before,
click on the <span class="guilabel">View raw</span> link on the top right,
which opens the build logs in plain text,
and you will see several warnings:</p>
<div class="highlight-text notranslate"><div class="highlight"><pre><span></span>WARNING: [autosummary] failed to import &#39;lumache&#39;: no module named lumache
...
WARNING: autodoc: failed to import function &#39;get_random_ingredients&#39; from module &#39;lumache&#39;; the following exception was raised:
No module named &#39;lumache&#39;
WARNING: autodoc: failed to import exception &#39;InvalidKindError&#39; from module &#39;lumache&#39;; the following exception was raised:
No module named &#39;lumache&#39;
</pre></div>
</div>
<p>To spot these warnings more easily and allow you to address them,
you can add the <code class="docutils literal notranslate"><span class="pre">sphinx.fail_on_warning</span></code> option to your Read the Docs configuration file.
For that, navigate to GitHub, locate the <code class="docutils literal notranslate"><span class="pre">.readthedocs.yaml</span></code> file you created earlier,
click on the ✏️ icon, and add these contents:</p>
<div class="literal-block-wrapper docutils container" id="id15">
<div class="code-block-caption"><span class="caption-text">.readthedocs.yaml</span><a class="headerlink" href="#id15" title="Link to this code"></a></div>
<div class="highlight-yaml notranslate"><div class="highlight"><pre><span></span><span class="nt">version</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">2</span>

<span class="nt">build</span><span class="p">:</span>
<span class="w">  </span><span class="nt">os</span><span class="p">:</span><span class="w"> </span><span class="s">&quot;ubuntu-22.04&quot;</span>
<span class="w">  </span><span class="nt">tools</span><span class="p">:</span>
<span class="w">    </span><span class="nt">python</span><span class="p">:</span><span class="w"> </span><span class="s">&quot;3.8&quot;</span>

<span class="nt">python</span><span class="p">:</span>
<span class="w">  </span><span class="nt">install</span><span class="p">:</span>
<span class="w">    </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="nt">requirements</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">docs/requirements.txt</span>

<span class="hll"><span class="nt">sphinx</span><span class="p">:</span>
</span><span class="hll"><span class="w">  </span><span class="nt">configuration</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">docs/source/conf.py</span>
</span><span class="w">  </span><span class="nt">fail_on_warning</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">true</span>
</pre></div>
</div>
</div>
<p>At this point, if you navigate back to your “Builds” page,
you will see a <code class="docutils literal notranslate"><span class="pre">Failed</span></code> build, which is exactly the intended result:
the Sphinx project is not properly configured yet,
and instead of rendering an empty API page, now the build fails.</p>
<p>The reason <a class="hxr-hoverxref hxr-tooltip reference external" href="https://www.sphinx-doc.org/en/master/usage/extensions/autosummary.html#module-sphinx.ext.autosummary" title="(in Sphinx v7.3.0)"><code class="docutils literal notranslate"><span class="pre">sphinx.ext.autosummary</span></code></a> and <a class="hxr-hoverxref hxr-tooltip reference external" href="https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html#module-sphinx.ext.autodoc" title="(in Sphinx v7.3.0)"><code class="docutils literal notranslate"><span class="pre">sphinx.ext.autodoc</span></code></a>
fail to import the code is because it is not installed.
Luckily, the <code class="docutils literal notranslate"><span class="pre">.readthedocs.yaml</span></code> also allows you to specify
which requirements to install.</p>
<p>To install the library code of your project,
go back to editing <code class="docutils literal notranslate"><span class="pre">.readthedocs.yaml</span></code> on GitHub and modify it as follows:</p>
<div class="literal-block-wrapper docutils container" id="id16">
<div class="code-block-caption"><span class="caption-text">.readthedocs.yaml</span><a class="headerlink" href="#id16" title="Link to this code"></a></div>
<div class="highlight-yaml notranslate"><div class="highlight"><pre><span></span><span class="nt">python</span><span class="p">:</span>
<span class="w">  </span><span class="nt">install</span><span class="p">:</span>
<span class="w">    </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="nt">requirements</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">docs/requirements.txt</span>
<span class="hll"><span class="w">    </span><span class="c1"># Install our python package before building the docs</span>
</span><span class="hll"><span class="w">    </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="nt">method</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">pip</span>
</span><span class="hll"><span class="w">      </span><span class="nt">path</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">.</span>
</span></pre></div>
</div>
</div>
<p>With this change, Read the Docs will install the Python code
before starting the Sphinx build, which will finish seamlessly.
If you go now to the API page of your HTML documentation,
you will see the <code class="docutils literal notranslate"><span class="pre">lumache</span></code> summary!</p>
</section>
<section id="enabling-pdf-and-epub-builds">
<h3>Enabling PDF and EPUB builds<a class="headerlink" href="#enabling-pdf-and-epub-builds" title="Link to this heading"></a></h3>
<p>Sphinx can build several other formats in addition to HTML, such as PDF and EPUB.
You might want to enable these formats for your project
so your users can read the documentation offline.</p>
<p>To do so, add this extra content to your <code class="docutils literal notranslate"><span class="pre">.readthedocs.yaml</span></code>:</p>
<div class="literal-block-wrapper docutils container" id="id17">
<div class="code-block-caption"><span class="caption-text">.readthedocs.yaml</span><a class="headerlink" href="#id17" title="Link to this code"></a></div>
<div class="highlight-yaml notranslate"><div class="highlight"><pre><span></span><span class="nt">sphinx</span><span class="p">:</span>
<span class="w">  </span><span class="nt">configuration</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">docs/source/conf.py</span>
<span class="w">  </span><span class="nt">fail_on_warning</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">true</span>

<span class="hll"><span class="nt">formats</span><span class="p">:</span>
</span><span class="hll"><span class="w">  </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">pdf</span>
</span><span class="hll"><span class="w">  </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">epub</span>
</span></pre></div>
</div>
</div>
<p>After this change, PDF and EPUB downloads will be available
both from the “Downloads” section of the <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-project-home"><span class="xref std std-term">project home</span></a>,
as well as the <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-flyout-menu"><span class="xref std std-term">flyout menu</span></a>.</p>
<figure class="align-center" id="id18">
<img alt="Downloads available from the flyout menu" src="../_images/flyout-downloads.png" />
<figcaption>
<p><span class="caption-text">Downloads available from the flyout menu</span><a class="headerlink" href="#id18" title="Link to this image"></a></p>
</figcaption>
</figure>
</section>
</section>
<section id="versioning-documentation">
<h2>Versioning documentation<a class="headerlink" href="#versioning-documentation" title="Link to this heading"></a></h2>
<p>Read the Docs allows you to have <a class="reference internal" href="../versions.html"><span class="doc">several versions of your documentation</span></a>,
in the same way that you have several versions of your code.
By default, it creates a <code class="docutils literal notranslate"><span class="pre">latest</span></code> version
that points to the default branch of your version control system
(<code class="docutils literal notranslate"><span class="pre">main</span></code> in the case of this tutorial),
and that’s why the URLs of your HTML documentation contain the string <code class="docutils literal notranslate"><span class="pre">/latest/</span></code>.</p>
<section id="creating-a-new-version">
<h3>Creating a new version<a class="headerlink" href="#creating-a-new-version" title="Link to this heading"></a></h3>
<p>Let’s say you want to create a <code class="docutils literal notranslate"><span class="pre">1.0</span></code> version of your code,
with a corresponding <code class="docutils literal notranslate"><span class="pre">1.0</span></code> version of the documentation.
For that, first navigate to your GitHub repository, click on the branch selector,
type <code class="docutils literal notranslate"><span class="pre">1.0.x</span></code>, and click on “Create branch: 1.0.x from ‘main’”
(more information <a class="reference external" href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository">on their documentation</a>).</p>
<p>Next, go to your <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-project-home"><span class="xref std std-term">project home</span></a>, click on the <span class="guilabel">Versions</span> button,
and under “Active Versions” you will see two entries:</p>
<ul class="simple">
<li><p>The <code class="docutils literal notranslate"><span class="pre">latest</span></code> version, pointing to the <code class="docutils literal notranslate"><span class="pre">main</span></code> branch.</p></li>
<li><p>A new <code class="docutils literal notranslate"><span class="pre">stable</span></code> version, pointing to the <code class="docutils literal notranslate"><span class="pre">origin/1.0.x</span></code> branch.</p></li>
</ul>
<figure class="align-center" id="id19">
<a class="reference internal image-reference" href="../_images/active-versions.png"><img alt="List of active versions of the project" src="../_images/active-versions.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">List of active versions of the project</span><a class="headerlink" href="#id19" title="Link to this image"></a></p>
</figcaption>
</figure>
<p>Right after you created your branch,
Read the Docs created a new special version called <code class="docutils literal notranslate"><span class="pre">stable</span></code> pointing to it,
and started building it. When the build finishes,
the <code class="docutils literal notranslate"><span class="pre">stable</span></code> version will be listed in the <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-flyout-menu"><span class="xref std std-term">flyout menu</span></a>
and your readers will be able to choose it.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Read the Docs <a class="hxr-hoverxref hxr-tooltip reference internal" href="../versions.html#how-we-envision-versions-working"><span class="std std-ref">follows some rules</span></a>
to decide whether to create a <code class="docutils literal notranslate"><span class="pre">stable</span></code> version pointing to your new branch or tag.
To simplify, it will check if the name resembles a version number
like <code class="docutils literal notranslate"><span class="pre">1.0</span></code>, <code class="docutils literal notranslate"><span class="pre">2.0.3</span></code> or <code class="docutils literal notranslate"><span class="pre">4.x</span></code>.</p>
</div>
<p>Now you might want to set <code class="docutils literal notranslate"><span class="pre">stable</span></code> as the <em>default version</em>,
rather than <code class="docutils literal notranslate"><span class="pre">latest</span></code>,
so that users see the <code class="docutils literal notranslate"><span class="pre">stable</span></code> documentation
when they visit the <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-root-URL"><span class="xref std std-term">root URL</span></a> of your documentation
(while still being able to change the version in the flyout menu).</p>
<p>For that, go to the <span class="guilabel">Advanced Settings</span> link
under the <span class="guilabel">⚙ Admin</span> menu of your project home,
choose <code class="docutils literal notranslate"><span class="pre">stable</span></code> in the “Default version*” dropdown,
and hit <span class="guilabel">Save</span> at the bottom.
Done!</p>
</section>
<section id="modifying-versions">
<h3>Modifying versions<a class="headerlink" href="#modifying-versions" title="Link to this heading"></a></h3>
<p>Both <code class="docutils literal notranslate"><span class="pre">latest</span></code> and <code class="docutils literal notranslate"><span class="pre">stable</span></code> are now <em>active</em>, which means that
they are visible for users, and new builds can be triggered for them.
In addition to these, Read the Docs also created an <em>inactive</em> <code class="docutils literal notranslate"><span class="pre">1.0.x</span></code>
version, which will always point to the <code class="docutils literal notranslate"><span class="pre">1.0.x</span></code> branch of your repository.</p>
<figure class="align-center" id="id20">
<a class="reference internal image-reference" href="../_images/inactive-versions.png"><img alt="List of inactive versions of the project" src="../_images/inactive-versions.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">List of inactive versions of the project</span><a class="headerlink" href="#id20" title="Link to this image"></a></p>
</figcaption>
</figure>
<p>Let’s activate the <code class="docutils literal notranslate"><span class="pre">1.0.x</span></code> version.
For that, go to the “Versions” on your <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-project-home"><span class="xref std std-term">project home</span></a>,
locate <code class="docutils literal notranslate"><span class="pre">1.0.x</span></code> under “Activate a version”,
and click on the <span class="guilabel">Activate</span> button.
This will take you to a new page with two checkboxes,
“Active” and “Hidden”. Check only “Active”,
and click <span class="guilabel">Save</span>.</p>
<p>After you do this, <code class="docutils literal notranslate"><span class="pre">1.0.x</span></code> will appear on the “Active Versions” section,
and a new build will be triggered for it.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You can read more about <a class="hxr-hoverxref hxr-tooltip reference internal" href="../versions.html#hidden"><span class="std std-ref">hidden versions</span></a>
in our documentation.</p>
</div>
</section>
</section>
<section id="getting-insights-from-your-projects">
<h2>Getting insights from your projects<a class="headerlink" href="#getting-insights-from-your-projects" title="Link to this heading"></a></h2>
<p>Once your project is up and running, you will probably want to understand
how readers are using your documentation, addressing some common questions like:</p>
<ul class="simple">
<li><p>what pages are the most visited pages?</p></li>
<li><p>what search terms are the most frequently used?</p></li>
<li><p>are readers finding what they look for?</p></li>
</ul>
<p>Read the Docs offers you some analytics tools to find out the answers.</p>
<section id="browsing-traffic-analytics">
<h3>Browsing traffic analytics<a class="headerlink" href="#browsing-traffic-analytics" title="Link to this heading"></a></h3>
<p>The <a class="reference internal" href="../analytics.html"><span class="doc">How to use traffic analytics</span></a> view shows the top viewed documentation pages of the past 30 days,
plus a visualization of the daily views during that period.
To generate some artificial views on your newly created project,
you can first click around the different pages of your project,
which will be accounted immediately for the current day statistics.</p>
<p>To see the Traffic Analytics view, go back the <a class="hxr-hoverxref hxr-tooltip reference internal" href="../glossary.html#term-project-page"><span class="xref std std-term">project page</span></a> again,
click on the <span class="guilabel">⚙ Admin</span> button,
and then click on the <span class="guilabel">Traffic Analytics</span> section.
You will see the list of pages in descending order of visits,
as well as a plot similar to the one below.</p>
<figure class="align-center" id="id21">
<a class="reference internal image-reference" href="../_images/traffic-analytics-plot.png"><img alt="Traffic Analytics plot" src="../_images/traffic-analytics-plot.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">Traffic Analytics plot</span><a class="headerlink" href="#id21" title="Link to this image"></a></p>
</figcaption>
</figure>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The Traffic Analytics view explained above gives you a simple overview
of how your readers browse your documentation. It has the advantage that
it stores no identifying information about your visitors,
and therefore it respects their privacy.
However, you might want to get more detailed data by
<a class="hxr-hoverxref hxr-tooltip reference internal" href="../analytics.html#enabling-google-analytics-on-your-project"><span class="std std-ref">enabling Google Analytics</span></a>.
Notice though that we take some extra measures to <a class="hxr-hoverxref hxr-tooltip reference internal" href="../advertising/advertising-details.html#analytics"><span class="std std-ref">respect user
privacy</span></a>
when they visit projects that have Google Analytics enabled,
and this might reduce the number of visits counted.</p>
</div>
<p>Finally, you can also download this data for closer inspection.
To do that, scroll to the bottom of the page
and click on the <span class="guilabel">Download all data</span> button.
That will prompt you to download a <abbr title="Comma-Separated Values">CSV</abbr> file
that you can process any way you want.</p>
</section>
<section id="browsing-search-analytics">
<h3>Browsing search analytics<a class="headerlink" href="#browsing-search-analytics" title="Link to this heading"></a></h3>
<p>Apart from traffic analytics, Read the Docs also offers the possibility
to inspect <a class="reference internal" href="../guides/search-analytics.html"><span class="doc">what search terms your readers use</span></a>
on your documentation.
This can inform decisions on what areas to reinforce,
or what parts of your project are less understood or more difficult to find.</p>
<p>To generate some artificial search statistics on the project,
go to the HTML documentation, locate the Sphinx search box on the left,
type <code class="docutils literal notranslate"><span class="pre">ingredients</span></code>, and press the <kbd class="kbd docutils literal notranslate">Enter</kbd> key.
You will be redirected to the search results page, which will show two entries.</p>
<p>Next, go back to the <span class="guilabel">⚙ Admin</span> section of your project page,
and then click on the <span class="guilabel">Search Analytics</span> section.
You will see a table with the most searched queries
(including the <code class="docutils literal notranslate"><span class="pre">ingredients</span></code> one you just typed),
how many results did each query return, and how many times it was searched.
Below the queries table, you will also see a visualization
of the daily number of search queries during the past 30 days.</p>
<figure class="align-center" id="id22">
<a class="reference internal image-reference" href="../_images/search-analytics-terms.png"><img alt="Most searched terms" src="../_images/search-analytics-terms.png" style="width: 80%;" /></a>
<figcaption>
<p><span class="caption-text">Most searched terms</span><a class="headerlink" href="#id22" title="Link to this image"></a></p>
</figcaption>
</figure>
<p>Like the Traffic Analytics, you can also download the whole dataset in CSV format
by clicking on the <span class="guilabel">Download all data</span> button.</p>
</section>
</section>
<section id="where-to-go-from-here">
<h2>Where to go from here<a class="headerlink" href="#where-to-go-from-here" title="Link to this heading"></a></h2>
<p>This is the end of the tutorial. You started by forking a GitHub repository
and importing it on Read the Docs, building its HTML documentation,
and then went through a series of steps to customize the build process,
tweak the project configuration, and add new versions.</p>
<p>Here you have some resources to continue learning about documentation
and Read the Docs:</p>
<ul class="simple">
<li><p>You can learn more about the functionality of the platform
by going over our <a class="reference internal" href="../reference/features.html"><span class="doc">features</span></a> page.</p></li>
<li><p>To make the most of the documentation generators that are supported,
you can read the <a class="hxr-hoverxref hxr-tooltip reference external" href="https://www.sphinx-doc.org/en/master/tutorial/index.html" title="(in Sphinx v7.3.0)"><span class="xref std std-doc">Sphinx tutorial</span></a>
or the <a class="reference external" href="https://www.mkdocs.org/user-guide/">MkDocs User Guide</a>.</p></li>
<li><p>Display example projects and read the source code in <a class="reference internal" href="../examples.html"><span class="doc">Example projects</span></a>.</p></li>
<li><p>Whether you are a documentation author, a project administrator, a developer, or a designer,
you can follow our how-to guides that cover specific tasks,
available under <a class="reference internal" href="../guides/index.html"><span class="doc">How-to guides A-Z</span></a>.</p></li>
<li><p>For private project support and other enterprise features,
you can use <a class="reference internal" href="../commercial/index.html"><span class="doc">our commercial service</span></a>
(and if in doubt, check out <a class="reference internal" href="../choosing-a-site.html"><span class="doc">Choosing between our two platforms</span></a>).</p></li>
<li><p>Do you want to join a global community of fellow <code class="xref py py-obj docutils literal notranslate"><span class="pre">documentarians</span></code>?
Check out <a class="reference external" href="https://www.writethedocs.org/">Write the Docs</a> and
<a class="reference external" href="https://www.writethedocs.org/slack/" title="(in Write the Docs v1.0)"><span class="xref std std-doc">its Slack workspace</span></a>.</p></li>
<li><p>Do you want to contribute to Read the Docs?
We greatly appreciate it! Check out <a class="reference external" href="https://dev.readthedocs.io/en/latest/contribute.html" title="(in Read the Docs developer documentation v10.15.1)"><span>Contributing to Read the Docs</span></a>.</p></li>
</ul>
<p>Happy documenting!</p>
</section>
</section>


           </div>
          </div>

  <div id="rtd-stickybox-container">
  <div class="raised" data-ea-publisher="readthedocs" data-ea-type="image" data-ea-style="stickybox"></div>
</div>

          <footer><div class="rst-footer-buttons" role="navigation" aria-label="Footer">
        <a href="../index.html" class="btn btn-neutral float-left" title="Read the Docs: documentation simplified" accesskey="p" rel="prev"><span class="fa fa-arrow-circle-left" aria-hidden="true"></span> Previous</a>
        <a href="../intro/getting-started-with-sphinx.html" class="btn btn-neutral float-right" title="Getting started with Sphinx" accesskey="n" rel="next">Next <span class="fa fa-arrow-circle-right" aria-hidden="true"></span></a>
    </div>

  <hr/>

  <div role="contentinfo">
    <p>&#169; Copyright Read the Docs, Inc &amp; contributors.
      <span class="commit">Revision <code>e5143773</code>.
      </span></p>
  </div>

  Built with <a href="https://www.sphinx-doc.org/">Sphinx</a> using a
    <a href="https://github.com/readthedocs/sphinx_rtd_theme">theme</a>
    provided by <a href="https://readthedocs.org">Read the Docs</a>.
   

</footer>
        </div>
      </div>
    </section>
  </div>
  

  <div class="rst-versions" data-toggle="rst-versions" role="note" aria-label="Versions">
    <span class="rst-current-version" data-toggle="rst-current-version">
      <span class="fa fa-book"> Read the Docs</span>
      v: stable
      <span class="fa fa-caret-down"></span>
    </span>
    <div class="rst-other-versions">
      <dl>
        <dt>Versions</dt>
        
          <dd><a href="/en/latest/">latest</a></dd>
        
          <dd><a href="/en/stable/">stable</a></dd>
        
      </dl>
      <dl>
        <dt>Downloads</dt>
        
          <dd><a href="//docs.readthedocs.io/_/downloads/en/stable/htmlzip/">html</a></dd>
        
          <dd><a href="//docs.readthedocs.io/_/downloads/en/stable/epub/">epub</a></dd>
        
      </dl>
      <dl>
        
        <dt>On Read the Docs</dt>
          <dd>
            <a href="//readthedocs.org/projects/docs/?fromdocs=docs">Project Home</a>
          </dd>
          <dd>
            <a href="//readthedocs.org/builds/docs/?fromdocs=docs">Builds</a>
          </dd>
      </dl>
    </div>
  </div>
<script>
      jQuery(function () {
          SphinxRtdTheme.Navigation.enable(true);
      });
  </script> 

</body>
</html>