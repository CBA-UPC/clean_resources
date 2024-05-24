<html>
  <body>
    <script>
      var initialized = false,
          fail = function(id,error) {
                  parent.postMessage({id,error},'*')
        ult},'*')
                }
          
      
      vify(value))
              },
        get:  function(id,name) {
                //console.log('fetching',id,name)
                var result = localStorage.getItem(name)
                try { result = JSON.parse(result) } catch(e) {}
                pass(id,result)                 
              },
        init: function(id) {
                if (initialized) handle.pass(id,{status:'ok'})
                try {
                  localStorage.setItem('bex_store',1)
                  initialized = true
                  pass(id,{status:'ok'})
                } catch(e) {
                  fail(id,e)
                }
              }
      }

      onmessage = function(e) {
        var {id,action,name,value} = e.data
        //console.log('message',{id,action,name,value})
        if (['get','set','init'].indexOf(action)>-1) {
          handle[action](id,name,value)
        } else {
          fail(id,'Illegal action')
        }
      }

    </script>
  </body>
</html>
