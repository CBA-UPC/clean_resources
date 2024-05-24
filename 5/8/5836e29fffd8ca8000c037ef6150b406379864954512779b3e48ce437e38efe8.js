
<!DO if(initialOpen)
                {
                    setTimeout(that.fadeOut, 2000);
                }
            }
        },
        showLogo: function () {
            this.logo.style.display = "block";
            this.icon.style.display = "none";
            if(this.isSmartPhone)
            {
                var that = this;
                setTimeout(that.fadeOut, 2000);
            }
        },
        hideLogo: function () {
            this.icon.style.display = "block";
            this.logo.style.display = "none";
        },
        fadeOut: function () {
            window.InformationIcon.hideLogo();
        },
        goToIMobileSite: function () {
            window.open("http://www.i-mobile.co.jp/about-service.aspx");
        }
    };
	InformationIcon.Init();

	
</script>




<script type="text/javascript">
	
</script>
</body>
</html>