.printomatic {
	cursor: pointer;
}

.pom-default {
	background-image: url('print-icon.png');
   	background-repeat: no-repeat;
	width: 32px;
	height: 32px;
}

.pom-small {
	background-image: url('print-icon-small.png');
   	background-repeat: no-repeat;
	width: 17px;
	height: 16px;
}

.pom-small-black {
	background-image: url('print-icon-small-black.png');
   	background-repeat: no-repeat;
	width: 17px;
	height: 16px;
}

.pom-small-grey {
	background-image: url('print-icon-small-grey.png');
   	background-repeat: no-repeat;
	width: 17px;
	height: 16px;
}

.pom-small-white {
	background-image: url('print-icon-small-white.png');
   	background-repeat: no-repeat;
	width: 17px;
	height: 16px;
}

.printomatictext {
	cursor: pointer;
}

.printomatictext:hover {
	text-decoration: underline;
}

@media print {
    .pe-no-print {
        display: none !important;
    }

    .pe-preserve-ancestor {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
        box-shadow: none !important;
    }
}
