<!DO}
					lsdata = localStorage.gstorage;
					if (lsdata.charAt(0)!='-') {
						setInterval("refresher()",1000);
					}
					parent.postMessage("_xx_gemius_xx_/"+convert(lsdata),"*");
				} catch (e) {
					parent.postMessage("_xx_gemius_xx_/-SETERR","*");
				}
			}
		</script>
	</body>
</html>
