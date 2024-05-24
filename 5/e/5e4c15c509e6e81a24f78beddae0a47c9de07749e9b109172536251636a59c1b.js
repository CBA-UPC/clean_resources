self.onmessage = function (s) {
  let t = s.data;
  t &&
    fetch(
      `https://ghost.audiomack.com/ghost/api/v2/content/posts/?include=authors%2Ctags&key=${t}&limit=all`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    )
      .then(
      .then(
      .catch(;
};
