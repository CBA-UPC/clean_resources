.mr2 {
  position: relative;
  box-sizing: border-box;
  height: 600px;
  margin: 0px auto 20px;
  text-align: center;
  pointer-events: none;
  transform: none;
  display: block;
  contain: layout;
  width: 300px;
  clear: both;
  background-color: rgb(247, 247, 247)
}
.mr2-scrollpage-container {
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
}
.mr2-scrollpage-height {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  contain: none;
  pointer-events: auto;
  width: 300px;
  height: 600px;
}
.mr2-scrollpage-top {
  position: sticky;
  contain: none;
  top: 48px;
  will-change: transform;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
.mr2-scrollpage-banner {
  width: 100%;
  height: 100%;
}