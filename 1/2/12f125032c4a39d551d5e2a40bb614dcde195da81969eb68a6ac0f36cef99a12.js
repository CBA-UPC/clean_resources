<!DOCTYPEd);
                    } catch (e) { }
                    saveCookie(response.sid)
                    parent.postMessage(['_sabavision__sid', response.sid], '*');
                }
            }
            xmlHttp.open("GET", 'https://plus.sabavision.com/api/dmp/v1/cookie', true); // true for asynchronous 
            xmlHttp.send(null);

        } else {
            saveCookie(token)
            parent.postMessage(['_sabavision__sid', token], '*');
        }
    </script>
</body>

</html>