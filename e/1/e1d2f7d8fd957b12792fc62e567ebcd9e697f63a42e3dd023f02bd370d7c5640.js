<!DOCTYPE html>
<html>

<head>
  <script>
    (() => {
      const parent = window.parent;

      const getFromLocalStorage = (key) => {
        try {
          return localStorage.getItem(key);
        } catch {
          return null;
        }
      };

      const setInLocalStorage = (key, value) => {
        try {
          localStorage.setItem(key, value);
        } catch {}
      };

      let mmUserId = getFromLocalStorage('mmUserId');

      window.addEventListener('message', (e) => {
        switch (e.data.type) {
          case 'getUserId':
            parent.postMessage({
              type: 'getUserId',
              mmUserId,
            }, '*')
            break;

          case 'setUserId':
            mmUserId = e.data.mmUserId;
            setInLocalStorage('userId', mmUserId);
            break;
          
          case 'getUserCapping':
            parent.postMessage({
              type: 'getUserCapping',
              userCapping: getFromLocalStorage('userCapping'),
            }, '*')
            break;

          case 'setUserCapping':
            setInLocalStorage('userCapping', e.data.userCapping);
            break;
        }
      });

      window.addEventListener('load', () => {
        parent.postMessage({
          type: 'initialized',
          mmUserId,
        }, '*');
      });
    })();
  </script>
</head>

<body></body>

</html>