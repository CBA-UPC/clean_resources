html,
body {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  display: flex;
}

h1 {
  position: absolute;
  width: 50%;
  color: white;
  top: 0;
  left: 25%;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.25);
  z-index: 1;
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  margin: 0;
  font-weight: normal;
}

#levi,
#dockers {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  transition: filter 500ms ease;
}

#levi {
  background-image: url("../img/photos/levi.jpg");
  background-size: cover;
}

#dockers {
  background-image: url("../img/photos/dockers.jpg");
  background-size: cover;
}

span {
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.5rem solid gray;
  border-bottom: 0.5rem solid gray;
  opacity: 0.85;
  transition: background-color 300ms ease;
}

#levi span {
  background-color: rgba(0, 0, 0, 0.75);
  border-color: rgba(0, 0, 0, 0.25);
}

#dockers span {
  background-color: rgba(255, 255, 255, 0.75);
  border-color: rgba(255, 255, 255, 0.25);
}

img {
  height: 3rem;
  transition: transform 300ms ease;
}

#levi:hover,
#dockers:hover {
  filter: grayscale(0%);
}

#levi:hover span {
  background-color: rgba(0, 0, 0, 1);
}

#dockers:hover span {
  background-color: rgba(255, 255, 255, 1);
}

#levi:hover img,
#dockers:hover img {
  transform: scale(1.1);
}
