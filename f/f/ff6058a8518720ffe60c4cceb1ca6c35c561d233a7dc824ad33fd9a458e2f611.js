.chevron::before {
	border-style: solid;
	border-width: 0.25em 0.25em 0 0;
	content: '';
	display: inline-block;
	height: 0.45em;
	left: 0.15em;
	position: relative;
	top: 0.15em;
	transform: rotate(-45deg);
	vertical-align: top;
	width: 0.45em;
}

.chevron.right:before {
	left: 0;
	transform: rotate(45deg);
}

.chevron.bottom:before {
	top: 0;
	transform: rotate(135deg);
}

.chevron.left:before {
	left: 0.25em;
	transform: rotate(-135deg);
}

.arr {
  display: inline-block;
  padding: 1.2em;
  box-shadow: 8px 8px 0 2px #777 inset;
}
.arr.left {
  transform: rotate(-45deg);
  margin-right: -35%;
}
.arr.right {
  transform: rotate(135deg);
  margin-left: -35%;
}
.arr:hover {
  box-shadow: 8px 8px 0 2px #000 inset
}


#checkmark {
	vertical-align:middle;
	margin: 3px;
}
#checkmark.size20 {
	width: 20px;
	height: 20px;
}
