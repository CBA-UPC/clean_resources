/*!
 * Magic - https://www.minimamente.com
 * Licensed under the MIT license - https://opensource.org/licenses/MIT
 * Copyright (c) 2020 Christian Pucci
 */
.pl__puffIn {
  -webkit-animation-name: puffIn;
          animation-name: puffIn; }

@-webkit-keyframes puffIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    -webkit-filter: blur(2px);
            filter: blur(2px); }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
            filter: blur(0px); } }

@keyframes puffIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    -webkit-filter: blur(2px);
            filter: blur(2px); }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
            filter: blur(0px); } }

.pl__puffOut {
  -webkit-animation-name: puffOut;
          animation-name: puffOut; }

@-webkit-keyframes puffOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
            filter: blur(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    -webkit-filter: blur(2px);
            filter: blur(2px); } }

@keyframes puffOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
            filter: blur(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    -webkit-filter: blur(2px);
            filter: blur(2px); } }

.pl__vanishIn {
  -webkit-animation-name: vanishIn;
          animation-name: vanishIn; }

@-webkit-keyframes vanishIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    -webkit-filter: blur(90px);
            filter: blur(90px); }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
            filter: blur(0px); } }

@keyframes vanishIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    -webkit-filter: blur(90px);
            filter: blur(90px); }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
            filter: blur(0px); } }

.pl__vanishOut {
  -webkit-animation-name: vanishOut;
          animation-name: vanishOut; }

@-webkit-keyframes vanishOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
            filter: blur(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    -webkit-filter: blur(20px);
            filter: blur(20px); } }

@keyframes vanishOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    -webkit-filter: blur(0px);
            filter: blur(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    -webkit-filter: blur(20px);
            filter: blur(20px); } }

.pl__boingInUp {
  -webkit-animation-name: boingInUp;
  animation-name: boingInUp; }

@-webkit-keyframes boingInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(-90deg); }
  50% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(50deg); }
  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(0deg); } }

@keyframes boingInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(-90deg); }
  50% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(50deg); }
  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(0deg); } }

.pl__boingOutDown {
  -webkit-animation-name: boingOutDown;
  animation-name: boingOutDown; }

@-webkit-keyframes boingOutDown {
  0% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(0deg); }
  20% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(10deg); }
  30% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(0deg); }
  40% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: perspective(800px) rotateX(10deg) rotateY(10deg); }
  100% {
    opacity: 0;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(90deg) rotateY(0deg); } }

@keyframes boingOutDown {
  0% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(0deg); }
  20% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(10deg); }
  30% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(0deg); }
  40% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: perspective(800px) rotateX(10deg) rotateY(10deg); }
  100% {
    opacity: 0;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(90deg) rotateY(0deg); } }

.pl__bombLeftOut {
  -webkit-animation-name: bombLeftOut;
  animation-name: bombLeftOut; }

@-webkit-keyframes bombLeftOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    -webkit-filter: blur(0px);
    filter: blur(0px); }
  50% {
    opacity: 1;
    transform-origin: -100% 50%;
    transform: rotate(-160deg);
    -webkit-filter: blur(0px);
    filter: blur(0px); }
  100% {
    opacity: 0;
    transform-origin: -100% 50%;
    transform: rotate(-160deg);
    -webkit-filter: blur(20px);
    filter: blur(20px); } }

@keyframes bombLeftOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    -webkit-filter: blur(0px);
    filter: blur(0px); }
  50% {
    opacity: 1;
    transform-origin: -100% 50%;
    transform: rotate(-160deg);
    -webkit-filter: blur(0px);
    filter: blur(0px); }
  100% {
    opacity: 0;
    transform-origin: -100% 50%;
    transform: rotate(-160deg);
    -webkit-filter: blur(20px);
    filter: blur(20px); } }

.pl__bombRightOut {
  -webkit-animation-name: bombRightOut;
  animation-name: bombRightOut; }

@-webkit-keyframes bombRightOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    -webkit-filter: blur(0px);
    filter: blur(0px); }
  50% {
    opacity: 1;
    transform-origin: 200% 50%;
    transform: rotate(160deg);
    -webkit-filter: blur(0px);
    filter: blur(0px); }
  100% {
    opacity: 0;
    transform-origin: 200% 50%;
    transform: rotate(160deg);
    -webkit-filter: blur(20px);
    filter: blur(20px); } }

@keyframes bombRightOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    -webkit-filter: blur(0px);
    filter: blur(0px); }
  50% {
    opacity: 1;
    transform-origin: 200% 50%;
    transform: rotate(160deg);
    -webkit-filter: blur(0px);
    filter: blur(0px); }
  100% {
    opacity: 0;
    transform-origin: 200% 50%;
    transform: rotate(160deg);
    -webkit-filter: blur(20px);
    filter: blur(20px); } }

.pl__magic {
  -webkit-animation-name: magic;
  animation-name: magic; }

@-webkit-keyframes magic {
  0% {
    opacity: 1;
    transform-origin: 100% 200%;
    transform: scale(1, 1) rotate(0deg); }
  100% {
    opacity: 0;
    transform-origin: 200% 500%;
    transform: scale(0, 0) rotate(270deg); } }

@keyframes magic {
  0% {
    opacity: 1;
    transform-origin: 100% 200%;
    transform: scale(1, 1) rotate(0deg); }
  100% {
    opacity: 0;
    transform-origin: 200% 500%;
    transform: scale(0, 0) rotate(270deg); } }

.pl__swap {
  -webkit-animation-name: swap;
  animation-name: swap; }

@-webkit-keyframes swap {
  0% {
    opacity: 0;
    transform-origin: 0 100%;
    transform: scale(0, 0) translate(-700px, 0px); }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(1, 1) translate(0px, 0px); } }

@keyframes swap {
  0% {
    opacity: 0;
    transform-origin: 0 100%;
    transform: scale(0, 0) translate(-700px, 0px); }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(1, 1) translate(0px, 0px); } }

.pl__twisterInDown {
  -webkit-animation-name: twisterInDown;
  animation-name: twisterInDown; }

@-webkit-keyframes twisterInDown {
  0% {
    opacity: 0;
    transform-origin: 0 100%;
    transform: scale(0, 0) rotate(360deg) translateY(-100%); }
  30% {
    transform-origin: 0 100%;
    transform: scale(0, 0) rotate(360deg) translateY(-100%); }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(1, 1) rotate(0deg) translateY(0%); } }

@keyframes twisterInDown {
  0% {
    opacity: 0;
    transform-origin: 0 100%;
    transform: scale(0, 0) rotate(360deg) translateY(-100%); }
  30% {
    transform-origin: 0 100%;
    transform: scale(0, 0) rotate(360deg) translateY(-100%); }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(1, 1) rotate(0deg) translateY(0%); } }

.pl__twisterInUp {
  -webkit-animation-name: twisterInUp;
  animation-name: twisterInUp; }

@-webkit-keyframes twisterInUp {
  0% {
    opacity: 0;
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%); }
  30% {
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%); }
  100% {
    opacity: 1;
    transform-origin: 0 0;
    transform: scale(1, 1) rotate(0deg) translateY(0); } }

@keyframes twisterInUp {
  0% {
    opacity: 0;
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%); }
  30% {
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%); }
  100% {
    opacity: 1;
    transform-origin: 0 0;
    transform: scale(1, 1) rotate(0deg) translateY(0); } }

.pl__foolishIn {
  -webkit-animation-name: foolishIn;
  animation-name: foolishIn; }

@-webkit-keyframes foolishIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotate(360deg); }
  20% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  40% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  60% {
    opacity: 1;
    transform-origin: 0%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  80% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotate(0deg); } }

@keyframes foolishIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotate(360deg); }
  20% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  40% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  60% {
    opacity: 1;
    transform-origin: 0%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  80% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotate(0deg); } }

.pl__foolishOut {
  -webkit-animation-name: foolishOut;
  animation-name: foolishOut; }

@-webkit-keyframes foolishOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotate(360deg); }
  20% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  40% {
    opacity: 1;
    transform-origin: 100% 0%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  60% {
    opacity: 1;
    transform-origin: 0%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  80% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotate(0deg); } }

@keyframes foolishOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotate(360deg); }
  20% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  40% {
    opacity: 1;
    transform-origin: 100% 0%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  60% {
    opacity: 1;
    transform-origin: 0%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  80% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scale(0.5, 0.5) rotate(0deg); }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotate(0deg); } }

.pl__holeOut {
  -webkit-animation-name: holeOut;
  animation-name: holeOut; }

@-webkit-keyframes holeOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotateY(0deg); }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotateY(180deg); } }

@keyframes holeOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotateY(0deg); }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotateY(180deg); } }

.pl__swashIn {
  -webkit-animation-name: swashIn;
  animation-name: swashIn; }

@-webkit-keyframes swashIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0); }
  90% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9); }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1); } }

@keyframes swashIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0); }
  90% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9); }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1); } }

.pl__swashOut {
  -webkit-animation-name: swashOut;
  animation-name: swashOut; }

@-webkit-keyframes swashOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1); }
  80% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9); }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0); } }

@keyframes swashOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1); }
  80% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9); }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0); } }

.pl__spaceInDown {
  -webkit-animation-name: spaceInDown;
  animation-name: spaceInDown; }

@-webkit-keyframes spaceInDown {
  0% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(0.2) translate(0%, 200%); }
  100% {
    opacity: 1;
    transform-origin: 50% 100%;
    transform: scale(1) translate(0%, 0%); } }

@keyframes spaceInDown {
  0% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(0.2) translate(0%, 200%); }
  100% {
    opacity: 1;
    transform-origin: 50% 100%;
    transform: scale(1) translate(0%, 0%); } }

.pl__spaceInLeft {
  -webkit-animation-name: spaceInLeft;
  animation-name: spaceInLeft; }

@-webkit-keyframes spaceInLeft {
  0% {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: scale(0.2) translate(-200%, 0%); }
  100% {
    opacity: 1;
    transform-origin: 0% 50%;
    transform: scale(1) translate(0%, 0%); } }

@keyframes spaceInLeft {
  0% {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: scale(0.2) translate(-200%, 0%); }
  100% {
    opacity: 1;
    transform-origin: 0% 50%;
    transform: scale(1) translate(0%, 0%); } }

.pl__spaceInRight {
  -webkit-animation-name: spaceInRight;
  animation-name: spaceInRight; }

@-webkit-keyframes spaceInRight {
  0% {
    opacity: 0;
    transform-origin: 100% 50%;
    transform: scale(0.2) translate(200%, 0%); }
  100% {
    opacity: 1;
    transform-origin: 100% 50%;
    transform: scale(1) translate(0%, 0%); } }

@keyframes spaceInRight {
  0% {
    opacity: 0;
    transform-origin: 100% 50%;
    transform: scale(0.2) translate(200%, 0%); }
  100% {
    opacity: 1;
    transform-origin: 100% 50%;
    transform: scale(1) translate(0%, 0%); } }

.pl__spaceInUp {
  -webkit-animation-name: spaceInUp;
  animation-name: spaceInUp; }

@-webkit-keyframes spaceInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(0.2) translate(0%, -200%); }
  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: scale(1) translate(0%, 0%); } }

@keyframes spaceInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(0.2) translate(0%, -200%); }
  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: scale(1) translate(0%, 0%); } }

.pl__spaceOutDown {
  -webkit-animation-name: spaceOutDown;
  animation-name: spaceOutDown; }

@-webkit-keyframes spaceOutDown {
  0% {
    opacity: 1;
    transform-origin: 50% 100%;
    transform: scale(1) translate(0%, 0%); }
  100% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(0.2) translate(0%, 200%); } }

@keyframes spaceOutDown {
  0% {
    opacity: 1;
    transform-origin: 50% 100%;
    transform: scale(1) translate(0%, 0%); }
  100% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(0.2) translate(0%, 200%); } }

.pl__spaceOutLeft {
  -webkit-animation-name: spaceOutLeft;
  animation-name: spaceOutLeft; }

@-webkit-keyframes spaceOutLeft {
  0% {
    opacity: 1;
    transform-origin: 0% 50%;
    transform: scale(1) translate(0%, 0%); }
  100% {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: scale(0.2) translate(-200%, 0%); } }

@keyframes spaceOutLeft {
  0% {
    opacity: 1;
    transform-origin: 0% 50%;
    transform: scale(1) translate(0%, 0%); }
  100% {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: scale(0.2) translate(-200%, 0%); } }

.pl__spaceOutRight {
  -webkit-animation-name: spaceOutRight;
  animation-name: spaceOutRight; }

@-webkit-keyframes spaceOutRight {
  0% {
    opacity: 1;
    transform-origin: 100% 50%;
    transform: scale(1) translate(0%, 0%); }
  100% {
    opacity: 0;
    transform-origin: 100% 50%;
    transform: scale(0.2) translate(200%, 0%); } }

@keyframes spaceOutRight {
  0% {
    opacity: 1;
    transform-origin: 100% 50%;
    transform: scale(1) translate(0%, 0%); }
  100% {
    opacity: 0;
    transform-origin: 100% 50%;
    transform: scale(0.2) translate(200%, 0%); } }

.pl__spaceOutUp {
  -webkit-animation-name: spaceOutUp;
  animation-name: spaceOutUp; }

@-webkit-keyframes spaceOutUp {
  0% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: scale(1) translate(0%, 0%); }
  100% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(0.2) translate(0%, -200%); } }

@keyframes spaceOutUp {
  0% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: scale(1) translate(0%, 0%); }
  100% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(0.2) translate(0%, -200%); } }

.pl__perspectiveDown {
  -webkit-animation-name: perspectiveDown;
  animation-name: perspectiveDown; }

@-webkit-keyframes perspectiveDown {
  0% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(0deg); }
  100% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(-180deg); } }

@keyframes perspectiveDown {
  0% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(0deg); }
  100% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(-180deg); } }

.pl__perspectiveDownReturn {
  -webkit-animation-name: perspectiveDownReturn;
  animation-name: perspectiveDownReturn; }

@-webkit-keyframes perspectiveDownReturn {
  0% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(-180deg); }
  100% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(0deg); } }

@keyframes perspectiveDownReturn {
  0% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(-180deg); }
  100% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(0deg); } }

.pl__perspectiveLeft {
  -webkit-animation-name: perspectiveLeft;
  animation-name: perspectiveLeft; }

@-webkit-keyframes perspectiveLeft {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg); }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(-180deg); } }

@keyframes perspectiveLeft {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg); }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(-180deg); } }

.pl__perspectiveLeftReturn {
  -webkit-animation-name: perspectiveLeftReturn;
  animation-name: perspectiveLeftReturn; }

@-webkit-keyframes perspectiveLeftReturn {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(-180deg); }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg); } }

@keyframes perspectiveLeftReturn {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(-180deg); }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg); } }

.pl__perspectiveRight {
  -webkit-animation-name: perspectiveRight;
  animation-name: perspectiveRight; }

@-webkit-keyframes perspectiveRight {
  0% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(0deg); }
  100% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(180deg); } }

@keyframes perspectiveRight {
  0% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(0deg); }
  100% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(180deg); } }

.pl__perspectiveRightReturn {
  -webkit-animation-name: perspectiveRightReturn;
  animation-name: perspectiveRightReturn; }

@-webkit-keyframes perspectiveRightReturn {
  0% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(180deg); }
  100% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(0deg); } }

@keyframes perspectiveRightReturn {
  0% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(180deg); }
  100% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(0deg); } }

.pl__perspectiveUp {
  -webkit-animation-name: perspectiveUp;
  animation-name: perspectiveUp; }

@-webkit-keyframes perspectiveUp {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg); }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(180deg); } }

@keyframes perspectiveUp {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg); }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(180deg); } }

.pl__perspectiveUpReturn {
  -webkit-animation-name: perspectiveUpReturn;
  animation-name: perspectiveUpReturn; }

@-webkit-keyframes perspectiveUpReturn {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(180deg); }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg); } }

@keyframes perspectiveUpReturn {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(180deg); }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg); } }

.pl__rotateDown {
  -webkit-animation-name: rotateDown;
  animation-name: rotateDown; }

@-webkit-keyframes rotateDown {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg) translateZ(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: perspective(800px) rotateX(-180deg) translateZ(300px); } }

@keyframes rotateDown {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg) translateZ(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: perspective(800px) rotateX(-180deg) translateZ(300px); } }

.pl__rotateLeft {
  -webkit-animation-name: rotateLeft;
  animation-name: rotateLeft; }

@-webkit-keyframes rotateLeft {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg) translateZ(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(-180deg) translateZ(300px); } }

@keyframes rotateLeft {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg) translateZ(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(-180deg) translateZ(300px); } }

.pl__rotateRight {
  -webkit-animation-name: rotateRight;
  animation-name: rotateRight; }

@-webkit-keyframes rotateRight {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg) translate3d(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(180deg) translateZ(150px); } }

@keyframes rotateRight {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg) translate3d(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(180deg) translateZ(150px); } }

.pl__rotateUp {
  -webkit-animation-name: rotateUp;
  animation-name: rotateUp; }

@-webkit-keyframes rotateUp {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg) translateZ(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateX(180deg) translateZ(100px); } }

@keyframes rotateUp {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg) translateZ(0px); }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateX(180deg) translateZ(100px); } }

.pl__slideDown {
  -webkit-animation-name: slideDown;
  animation-name: slideDown; }

@-webkit-keyframes slideDown {
  0% {
    transform-origin: 0 0;
    transform: translateY(0%); }
  100% {
    transform-origin: 0 0;
    transform: translateY(100%); } }

@keyframes slideDown {
  0% {
    transform-origin: 0 0;
    transform: translateY(0%); }
  100% {
    transform-origin: 0 0;
    transform: translateY(100%); } }

.pl__slideDownReturn {
  -webkit-animation-name: slideDownReturn;
  animation-name: slideDownReturn; }

@-webkit-keyframes slideDownReturn {
  0% {
    transform-origin: 0 0;
    transform: translateY(100%); }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%); } }

@keyframes slideDownReturn {
  0% {
    transform-origin: 0 0;
    transform: translateY(100%); }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%); } }

.pl__slideLeft {
  -webkit-animation-name: slideLeft;
  animation-name: slideLeft; }

@-webkit-keyframes slideLeft {
  0% {
    transform-origin: 0 0;
    transform: translateX(0%); }
  100% {
    transform-origin: 0 0;
    transform: translateX(-100%); } }

@keyframes slideLeft {
  0% {
    transform-origin: 0 0;
    transform: translateX(0%); }
  100% {
    transform-origin: 0 0;
    transform: translateX(-100%); } }

.pl__slideLeftReturn {
  -webkit-animation-name: slideLeftReturn;
  animation-name: slideLeftReturn; }

@-webkit-keyframes slideLeftReturn {
  0% {
    transform-origin: 0 0;
    transform: translateX(-100%); }
  100% {
    transform-origin: 0 0;
    transform: translateX(0%); } }

@keyframes slideLeftReturn {
  0% {
    transform-origin: 0 0;
    transform: translateX(-100%); }
  100% {
    transform-origin: 0 0;
    transform: translateX(0%); } }

.pl__slideRight {
  -webkit-animation-name: slideRight;
  animation-name: slideRight; }

@-webkit-keyframes slideRight {
  0% {
    transform-origin: 0 0;
    transform: translateX(0%); }
  100% {
    transform-origin: 0 0;
    transform: translateX(100%); } }

@keyframes slideRight {
  0% {
    transform-origin: 0 0;
    transform: translateX(0%); }
  100% {
    transform-origin: 0 0;
    transform: translateX(100%); } }

.pl__slideRightReturn {
  -webkit-animation-name: slideRightReturn;
  animation-name: slideRightReturn; }

@-webkit-keyframes slideRightReturn {
  0% {
    transform-origin: 0 0;
    transform: translateX(100%); }
  100% {
    transform-origin: 0 0;
    transform: translateX(0%); } }

@keyframes slideRightReturn {
  0% {
    transform-origin: 0 0;
    transform: translateX(100%); }
  100% {
    transform-origin: 0 0;
    transform: translateX(0%); } }

.pl__slideUp {
  -webkit-animation-name: slideUp;
  animation-name: slideUp; }

@-webkit-keyframes slideUp {
  0% {
    transform-origin: 0 0;
    transform: translateY(0%); }
  100% {
    transform-origin: 0 0;
    transform: translateY(-100%); } }

@keyframes slideUp {
  0% {
    transform-origin: 0 0;
    transform: translateY(0%); }
  100% {
    transform-origin: 0 0;
    transform: translateY(-100%); } }

.pl__slideUpReturn {
  -webkit-animation-name: slideUpReturn;
  animation-name: slideUpReturn; }

@-webkit-keyframes slideUpReturn {
  0% {
    transform-origin: 0 0;
    transform: translateY(-100%); }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%); } }

@keyframes slideUpReturn {
  0% {
    transform-origin: 0 0;
    transform: translateY(-100%); }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%); } }

.pl__openDownLeft {
  -webkit-animation-name: openDownLeft;
  animation-name: openDownLeft; }

@-webkit-keyframes openDownLeft {
  0% {
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

@keyframes openDownLeft {
  0% {
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

.pl__openDownLeftReturn {
  -webkit-animation-name: openDownLeftReturn;
  animation-name: openDownLeftReturn; }

@-webkit-keyframes openDownLeftReturn {
  0% {
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; }
  100% {
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; } }

@keyframes openDownLeftReturn {
  0% {
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; }
  100% {
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; } }

.pl__openDownRight {
  -webkit-animation-name: openDownRight;
  animation-name: openDownRight; }

@-webkit-keyframes openDownRight {
  0% {
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

@keyframes openDownRight {
  0% {
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

.pl__openDownRightReturn {
  -webkit-animation-name: openDownRightReturn;
  animation-name: openDownRightReturn; }

@-webkit-keyframes openDownRightReturn {
  0% {
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; }
  100% {
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; } }

@keyframes openDownRightReturn {
  0% {
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; }
  100% {
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; } }

.pl__openUpLeft {
  -webkit-animation-name: openUpLeft;
  animation-name: openUpLeft; }

@-webkit-keyframes openUpLeft {
  0% {
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

@keyframes openUpLeft {
  0% {
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

.pl__openUpLeftReturn {
  -webkit-animation-name: openUpLeftReturn;
  animation-name: openUpLeftReturn; }

@-webkit-keyframes openUpLeftReturn {
  0% {
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; }
  100% {
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; } }

@keyframes openUpLeftReturn {
  0% {
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; }
  100% {
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; } }

.pl__openUpRight {
  -webkit-animation-name: openUpRight;
  animation-name: openUpRight; }

@-webkit-keyframes openUpRight {
  0% {
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

@keyframes openUpRight {
  0% {
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

.pl__openUpRightReturn {
  -webkit-animation-name: openUpRightReturn;
  animation-name: openUpRightReturn; }

@-webkit-keyframes openUpRightReturn {
  0% {
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; }
  100% {
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; } }

@keyframes openUpRightReturn {
  0% {
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; }
  100% {
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; } }

.pl__openDownLeftOut {
  -webkit-animation-name: openDownLeftOut;
  animation-name: openDownLeftOut; }

@-webkit-keyframes openDownLeftOut {
  0% {
    opacity: 1;
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    opacity: 0;
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

@keyframes openDownLeftOut {
  0% {
    opacity: 1;
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    opacity: 0;
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

.pl__openDownRightOut {
  -webkit-animation-name: openDownRightOut;
  animation-name: openDownRightOut; }

@-webkit-keyframes openDownRightOut {
  0% {
    opacity: 1;
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    opacity: 0;
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

@keyframes openDownRightOut {
  0% {
    opacity: 1;
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    opacity: 0;
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

.pl__openUpLeftOut {
  -webkit-animation-name: openUpLeftOut;
  animation-name: openUpLeftOut; }

@-webkit-keyframes openUpLeftOut {
  0% {
    opacity: 1;
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    opacity: 0;
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

@keyframes openUpLeftOut {
  0% {
    opacity: 1;
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    opacity: 0;
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

.pl__openUpRightOut {
  -webkit-animation-name: openUpRightOut;
  animation-name: openUpRightOut; }

@-webkit-keyframes openUpRightOut {
  0% {
    opacity: 1;
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    opacity: 0;
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

@keyframes openUpRightOut {
  0% {
    opacity: 1;
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out; }
  100% {
    opacity: 0;
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out; } }

.pl__tinDownIn {
  -webkit-animation-name: tinDownIn;
  animation-name: tinDownIn; }

@-webkit-keyframes tinDownIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateY(900%); }
  50%,
  70%,
  90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0); }
  60%,
  80%,
  100% {
    opacity: 1;
    transform: scale(1, 1) translateY(0); } }

@keyframes tinDownIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateY(900%); }
  50%,
  70%,
  90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0); }
  60%,
  80%,
  100% {
    opacity: 1;
    transform: scale(1, 1) translateY(0); } }

.pl__tinDownOut {
  -webkit-animation-name: tinDownOut;
  animation-name: tinDownOut; }

@-webkit-keyframes tinDownOut {
  0%,
  20%,
  40%,
  50% {
    opacity: 1;
    transform: scale(1, 1) translateY(0); }
  10%,
  30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0); }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateY(900%); } }

@keyframes tinDownOut {
  0%,
  20%,
  40%,
  50% {
    opacity: 1;
    transform: scale(1, 1) translateY(0); }
  10%,
  30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0); }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateY(900%); } }

.pl__tinLeftIn {
  -webkit-animation-name: tinLeftIn;
  animation-name: tinLeftIn; }

@-webkit-keyframes tinLeftIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateX(-900%); }
  50%,
  70%,
  90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0); }
  60%,
  80%,
  100% {
    opacity: 1;
    transform: scale(1, 1) translateX(0); } }

@keyframes tinLeftIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateX(-900%); }
  50%,
  70%,
  90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0); }
  60%,
  80%,
  100% {
    opacity: 1;
    transform: scale(1, 1) translateX(0); } }

.pl__tinLeftOut {
  -webkit-animation-name: tinLeftOut;
  animation-name: tinLeftOut; }

@-webkit-keyframes tinLeftOut {
  0%,
  20%,
  40%,
  50% {
    opacity: 1;
    transform: scale(1, 1) translateX(0); }
  10%,
  30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0); }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateX(-900%); } }

@keyframes tinLeftOut {
  0%,
  20%,
  40%,
  50% {
    opacity: 1;
    transform: scale(1, 1) translateX(0); }
  10%,
  30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0); }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateX(-900%); } }

.pl__tinRightIn {
  -webkit-animation-name: tinRightIn;
  animation-name: tinRightIn; }

@-webkit-keyframes tinRightIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateX(900%); }
  50%,
  70%,
  90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0); }
  60%,
  80%,
  100% {
    opacity: 1;
    transform: scale(1, 1) translateX(0); } }

@keyframes tinRightIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateX(900%); }
  50%,
  70%,
  90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0); }
  60%,
  80%,
  100% {
    opacity: 1;
    transform: scale(1, 1) translateX(0); } }

.pl__tinRightOut {
  -webkit-animation-name: tinRightOut;
  animation-name: tinRightOut; }

@-webkit-keyframes tinRightOut {
  0%,
  20%,
  40%,
  50% {
    opacity: 1;
    transform: scale(1, 1) translateX(0); }
  10%,
  30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0); }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateX(900%); } }

@keyframes tinRightOut {
  0%,
  20%,
  40%,
  50% {
    opacity: 1;
    transform: scale(1, 1) translateX(0); }
  10%,
  30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0); }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateX(900%); } }

.pl__tinUpIn {
  -webkit-animation-name: tinUpIn;
  animation-name: tinUpIn; }

@-webkit-keyframes tinUpIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateY(-900%); }
  50%,
  70%,
  90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0); }
  60%,
  80%,
  100% {
    opacity: 1;
    transform: scale(1, 1) translateY(0); } }

@keyframes tinUpIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateY(-900%); }
  50%,
  70%,
  90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0); }
  60%,
  80%,
  100% {
    opacity: 1;
    transform: scale(1, 1) translateY(0); } }

.pl__tinUpOut {
  -webkit-animation-name: tinUpOut;
  animation-name: tinUpOut; }

@-webkit-keyframes tinUpOut {
  0%,
  20%,
  40%,
  50% {
    opacity: 1;
    transform: scale(1, 1) translateY(0); }
  10%,
  30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0); }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateY(-900%); } }

@keyframes tinUpOut {
  0%,
  20%,
  40%,
  50% {
    opacity: 1;
    transform: scale(1, 1) translateY(0); }
  10%,
  30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0); }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateY(-900%); } }

.pl__magictime {
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both; }

@media (print), (prefers-reduced-motion) {
  .pl__magictime {
    -webkit-animation: unset !important;
            animation: unset !important;
    transition: none !important; } }
/*# sourceMappingURL=magic.css.map */
o">


<div class="post-thumbnail thumbs-rotation" data-thumbs="https://bookep.boats/wp-content/uploads/2021/06/JUL-442_01.mp4_snapshot_11.00.834.jpg,https://bookep.boats/wp-content/uploads/2021/06/JUL-442.jpg">
<div class="inner-border"><img data-src="https://bookep.boats/wp-content/uploads/2021/06/JUL-442_01.mp4_snapshot_11.00.834.jpg" alt="Akibat Satu Kamar Sama Bos Montok Asahi Mizuno" src="https://bookep.boats/wp-content/themes/kingtube/assets/img/px.gif"></div> <span class="views"><i class="fa fa-eye"></i> 77526</span> </div>
<header class="entry-header">
<span>Akibat Satu Kamar Sama Bos Montok Asahi Mizuno</span>
</header>
</a>
</article>
<article id="post-28636" class="thumb-block post-28636 post type-post status-publish format-video has-post-thumbnail hentry category-bokep-indo tag-ayam-kampus tag-open-bo tag-oyo tag-sibohay tag-simontok tag-yandex-terbaru tag-yandex-video tag-yandex-viral post_format-post-format-video">
<a href="https://bookep.boats/yandex-terbaru-mahasiswi-montok-pulang-kuliah/" title="Yandex Terbaru Mahasiswi Montok Pulang Kuliah">


<div class="post-thumbnail thumbs-rotation" data-thumbs="https://bookep.boats/wp-content/uploads/2023/12/BLOGINDO_71.mp4_snapshot_00.11.134-320x180.jpg">
<div class="inner-border"><img data-src="https://bookep.boats/wp-content/uploads/2023/12/BLOGINDO_71.mp4_snapshot_00.11.134-320x180.jpg" alt="Yandex Terbaru Mahasiswi Montok Pulang Kuliah" src="https://bookep.boats/wp-content/themes/kingtube/assets/img/px.gif"></div> <span class="views"><i class="fa fa-eye"></i> 304639</span> <span class="duration"><i class="fa fa-clock-o"></i> 15:00</span> </div>
<header class="entry-header">
<span>Yandex Terbaru Mahasiswi Montok Pulang Kuliah</span>
</header>
</a>
</article>
<article id="post-8405" class="thumb-block post-8405 post type-post status-publish format-video has-post-thumbnail hentry category-bokep-jepang tag-bokep-jav-hd tag-bokep-jav-hunta tag-bokep-jilat-memek-tante tag-nonton-bokep-online post_format-post-format-video">
<a href="https://bookep.boats/ngewe-sama-teman-ibu-sambil-nonton-bokep/" title="Ngewe Sama Teman Ibu Sambil Nonton Bokep">


<div class="post-thumbnail thumbs-rotation" data-thumbs="https://bookep.boats/wp-content/uploads/2021/03/HuntaCondom_05.mp4_snapshot_16.35.115.jpg">
<div class="inner-border"><img data-src="https://bookep.boats/wp-content/uploads/2021/03/HuntaCondom_05.mp4_snapshot_16.35.115.jpg" alt="Ngewe Sama Teman Ibu Sambil Nonton Bokep" src="https://bookep.boats/wp-content/themes/kingtube/assets/img/px.gif"></div> <span class="views"><i class="fa fa-eye"></i> 57253</span> </div>
<header class="entry-header">
<span>Ngewe Sama Teman Ibu Sambil Nonton Bokep</span>
</header>
</a>
</article>
<article id="post-504" class="thumb-block post-504 post type-post status-publish format-standard has-post-thumbnail hentry category-uncensored tag-bokep-jav-creampie tag-bokep-jav-hd tag-bokep-jav-sub-english tag-bokep-memek-mulus">
<a href="https://bookep.boats/bokep-jav-ngewe-memek-mulus-sempit-hingga-crot-banyak/" title="Ngewe Memek Mulus Sempit Hingga Crot Banyak">


<div class="post-thumbnail thumbs-rotation" data-thumbs="https://bookep.boats/wp-content/uploads/2017/12/jav-7.jpg">
<div class="inner-border"><img data-src="https://bookep.boats/wp-content/uploads/2017/12/jav-7.jpg" alt="Ngewe Memek Mulus Sempit Hingga Crot Banyak" src="https://bookep.boats/wp-content/themes/kingtube/assets/img/px.gif"></div> <span class="views"><i class="fa fa-eye"></i> 108449</span> </div>
<header class="entry-header">
<span>Ngewe Memek Mulus Sempit Hingga Crot Banyak</span>
</header>
</a>
</article>
<article id="post-29087" class="thumb-block post-29087 post type-post status-publish format-video has-post-thumbnail hentry category-bokep-indo tag-abg-cindo tag-abg-viral tag-cindo-nakal tag-cindo-ob post_format-post-format-video">
<a href="https://bookep.boats/menikmati-mulusnya-bodi-abg-cindo-mantap/" title="Menikmati Mulusnya Bodi ABG Cindo Mantap">


<div class="post-thumbnail thumbs-rotation" data-thumbs="https://bookep.boats/wp-content/uploads/2023/12/BLOGINDO_167.mp4_snapshot_00.09.951-320x180.jpg">
<div class="inner-border"><img data-src="https://bookep.boats/wp-content/uploads/2023/12/BLOGINDO_167.mp4_snapshot_00.09.951-320x180.jpg" alt="Menikmati Mulusnya Bodi ABG Cindo Mantap" src="https://bookep.boats/wp-content/themes/kingtube/assets/img/px.gif"></div> <span class="views"><i class="fa fa-eye"></i> 23026</span> <span class="duration"><i class="fa fa-clock-o"></i> 12:00</span> </div>
<header class="entry-header">
<span>Menikmati Mulusnya Bodi ABG Cindo Mantap</span>
</header>
</a>
</article>
<article id="post-2261" class="thumb-block post-2261 post type-post status-publish format-video has-post-thumbnail hentry category-bokep-asia tag-bokep-cina-diperkosa tag-bokep-istri-diperkosa tag-bokep-jepang-pemerkosaan post_format-post-format-video">
<a href="https://bookep.boats/bokep-cina-diperkosa-orang-tak-dikenal-saat-berangkat-kerja/" title="Diperkosa Orang Tak Dikenal Saat Berangkat Kerja">


<div class="post-thumbnail thumbs-rotation" data-thumbs="https://bookep.boats/wp-content/uploads/2019/03/Video-Diperkosa-Pagi-Hari-Saat-Berangkat-Bekerja.jpg">
<div class="inner-border"><img data-src="https://bookep.boats/wp-content/uploads/2019/03/Video-Diperkosa-Pagi-Hari-Saat-Berangkat-Bekerja.jpg" alt="Diperkosa Orang Tak Dikenal Saat Berangkat Kerja" src="https://bookep.boats/wp-content/themes/kingtube/assets/img/px.gif"></div> <span class="views"><i class="fa fa-eye"></i> 534104</span> </div>
<header class="entry-header">
<span>Diperkosa Orang Tak Dikenal Saat Berangkat Kerja</span>
</header>
</a>
</article>
<article id="post-8229" class="thumb-block post-8229 post type-post status-publish format-video has-post-thumbnail hentry category-bokep-asia tag-bokep-istri-binal tag-bokep-istri-sange tag-bokep-selingkuh-sama-tetangga tag-ngentot-sama-tetangga post_format-post-format-video">
<a href="https://bookep.boats/bokep-istri-binal-selingkuh-sama-tetangga-sebelah/" title="Bokep Istri Binal Selingkuh Sama Tetangga Sebelah">


<div class="post-thumbnail thumbs-rotation" data-thumbs="https://bookep.boats/wp-content/uploads/2021/03/ABP794_02.mp4_snapshot_09.59.310.jpg">
<div class="inner-border"><img data-src="https://bookep.boats/wp-content/uploads/2021/03/ABP794_02.mp4_snapshot_09.59.310.jpg" alt="Bokep Istri Binal Selingkuh Sama Tetangga Sebelah" src="https://bookep.boats/wp-content/themes/kingtube/assets/img/px.gif"></div> <span class="views"><i class="fa fa-eye"></i> 36176</span> </div>
<header class="entry-header">
<span>Bokep Istri Binal Selingkuh Sama Tetangga Sebelah</span>
</header>
</a>
</article>
<article id="post-25434" class="thumb-block post-25434 post type-post status-publish format-video has-post-thumbnail hentry category-jav-sub-indo tag-bokep-ayah-anak tag-bokep-incest tag-bokep-jablay-jepang tag-bokep-sange post_format-post-format-video actors-yuri-honma">
<a href="https://bookep.boats/nacr-424-subindo-ayah-sange-liat-anaknya-teler/" title="NACR 424 Subindo &#8211; Ayah Sange Liat Anaknya Teler">


<div class="post-thumbnail thumbs-rotation" data-thumbs>
<div class="inner-border"><img data-src="https://bookep.boats/wp-content/uploads/2023/04/NACR-424-Sub-Indo-1-320x180.jpg" alt="NACR 424 Subindo &#8211; Ayah Sange Liat Anaknya Teler" src="https://bookep.boats/wp-content/themes/kingtube/assets/img/px.gif"></div> <span class="hd-video">HD</span> <span class="views"><i class="fa fa-eye"></i> 27148</span> <span class="duration"><i class="fa fa-clock-o"></i> 01:59:05</span> </div>
<header class="entry-header">
<span>NACR 424 Subindo &#8211; Ayah Sange Liat Anaknya Teler</span>
</header>
</a>
</article>
</div>
</div>
</main>
</section>
</div>
<footer id="colophon" class="site-footer" role="contentinfo">
<div class="row">
<div class="clear"></div>
<div class="footer-menu-container">
<div class="menu-bawah-container"><ul id="menu-bawah" class="menu"><li id="menu-item-20121" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20121"><a href="https://bookep.boats/Genre/perselingkuhan/">Bokep Perselingkuhan</a></li>
<li id="menu-item-20122" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20122"><a href="https://bookep.boats/Genre/bokep-asia/">Bokep Asia</a></li>
<li id="menu-item-20123" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20123"><a href="https://bookep.boats/Genre/bokep-anak-sekolah/">Bokep Anak Sekolah</a></li>
<li id="menu-item-20124" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20124"><a href="https://bookep.boats/Genre/pemerkosaan/">Bokep Pemerkosaan</a></li>
<li id="menu-item-20125" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20125"><a href="https://bookep.boats/Genre/uncensored/">JAV Uncensored</a></li>
</ul></div> </div>
<div class="site-info">
All rights reserved. Powered by WP-Script.com </div>
</div>
</footer>
</div>
<a href="#" id="back-to-top" title="Back to top"><i class="fa fa-chevron-up"></i></a>
<script>window.advanced_ads_check_adblocker=function(t){var n=[],e=null;function i(t){var n=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,16)};n.call(window,t)}return i((function(){var t=document.createElement("div");t.innerHTML="&nbsp;",t.setAttribute("class","ad_unit ad-unit text-ad text_ad pub_300x250"),t.setAttribute("style","width: 1px !important; height: 1px !important; position: absolute !important; left: 0px !important; top: 0px !important; overflow: hidden !important;"),document.body.appendChild(t),i((function(){var i,o,a=null===(i=(o=window).getComputedStyle)||void 0===i?void 0:i.call(o,t),d=null==a?void 0:a.getPropertyValue("-moz-binding");e=a&&"none"===a.getPropertyValue("display")||"string"==typeof d&&-1!==d.indexOf("about:");for(var r=0,u=n.length;r<u;r++)n[r](e);n=[]}))})),function(t){"undefined"==typeof advanced_ads_adblocker_test&&(e=!0),null!==e?t(e):n.push(t)}}();</script>

<script type="text/javascript">var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4752573,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();</script>
<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?4752573&101" alt="" border="0"></a></noscript>

<script type="text/javascript" language="javascript">(function(window, location) { history.replaceState(null, document.title, location.pathname+"#!/history"); history.pushState(null, document.title, location.pathname); window.addEventListener("popstate", function() { if(location.hash === "#!/history") { history.replaceState(null, document.title, location.pathname); setTimeout(function(){ location.replace("//tsyndicate.com/api/v1/direct/bf2aafc31274423ead604d2d22feb0cc?extid={extid}"); },10); } }, false); }(window, location));</script> <div class="modal fade wpst-user-modal" id="wpst-user-modal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog" data-active-tab>
<div class="modal-content">
<div class="modal-body">
<a href="#" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-remove"></i></a>

<div class="wpst-register">
<div class="alert alert-danger">Registration is disabled.</div>
</div>

<div class="wpst-login">
<h3>Login to BOOKEP - Aplikasi Video Bokep Terbaru</h3>
<form id="wpst_login_form" action="https://bookep.boats/" method="post">
<div class="form-field">
<label>Username</label>
<input class="form-control input-lg required" name="wpst_user_login" type="text" />
</div>
<div class="form-field">
<label for="wpst_user_pass">Password</label>
<input class="form-control input-lg required" name="wpst_user_pass" id="wpst_user_pass" type="password" />
</div>
<div class="form-field lost-password">
<input type="hidden" name="action" value="wpst_login_member" />
<button class="btn btn-theme btn-lg" data-loading-text="Loading..." type="submit">Login</button> <a class="alignright" href="#wpst-reset-password">Lost Password?</a>
</div>
<input type="hidden" id="login-security" name="login-security" value="663d84bfb7" /><input type="hidden" name="_wp_http_referer" value="/viral/indo/" /> </form>
<div class="wpst-errors"></div>
</div>

<div class="wpst-reset-password">
<h3>Reset Password</h3>
<p>Enter the username or e-mail you used in your profile. A password reset link will be sent to you by email.</p>
<form id="wpst_reset_password_form" action="https://bookep.boats/" method="post">
<div class="form-field">
<label for="wpst_user_or_email">Username or E-mail</label>
<input class="form-control input-lg required" name="wpst_user_or_email" id="wpst_user_or_email" type="text" />
</div>
<div class="form-field">
<input type="hidden" name="action" value="wpst_reset_password" />
<button class="btn btn-theme btn-lg" data-loading-text="Loading..." type="submit">Get new password</button>
</div>
<input type="hidden" id="password-security" name="password-security" value="663d84bfb7" /><input type="hidden" name="_wp_http_referer" value="/viral/indo/" /> </form>
<div class="wpst-errors"></div>
</div>
<div class="wpst-loading">
<p><i class="fa fa-refresh fa-spin"></i><br>Loading...</p>
</div>
</div>
<div class="modal-footer">
<span class="wpst-register-footer">Don&#039;t have an account? <a href="#wpst-register">Sign up</a></span>
<span class="wpst-login-footer">Already have an account? <a href="#wpst-login">Login</a></span>
</div>
</div>
</div>
</div>
<script type="text/javascript" id="rocket-browser-checker-js-after">
/* <![CDATA[ */
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
/* ]]> */
</script>
<script type="text/javascript" id="rocket-preload-links-js-extra">
/* <![CDATA[ */
var RocketPreloadLinksConfig = {"excludeUris":"\/(?:.+\/)?feed(?:\/(?:.+\/?)?)?$|\/(?:.+\/)?embed\/|\/(index.php\/)?(.*)wp-json(\/.*|$)|\/refer\/|\/go\/|\/recommend\/|\/recommends\/","usesTrailingSlash":"","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm","siteUrl":"https:\/\/bookep.boats","onHoverDelay":"100","rateThrottle":"3"};
/* ]]> */
</script>
<script type="text/javascript" id="rocket-preload-links-js-after">
/* <![CDATA[ */
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
}());
/* ]]> */
</script>
<script type="text/javascript" id="advanced-ads-pro/front-js-extra">
/* <![CDATA[ */
var advanced_ads_cookies = {"cookie_path":"\/","cookie_domain":""};
var advadsCfpInfo = {"cfpExpHours":"3","cfpClickLimit":"3","cfpBan":"7","cfpPath":"","cfpDomain":""};
/* ]]> */
</script>
<script type="text/javascript" src="https://bookep.boats/wp-content/plugins/advanced-ads-pro/assets/js/advanced-ads-pro.min.js?ver=2.25.2" id="advanced-ads-pro/front-js"></script>
<script type="text/javascript" src="https://bookep.boats/wp-content/themes/kingtube/assets/js/navigation.js?ver=1.0.0" id="wpst-navigation-js"></script>
<script type="text/javascript" id="wpst-main-js-extra">
/* <![CDATA[ */
var wpst_ajax_var = {"url":"https:\/\/bookep.boats\/wp-admin\/admin-ajax.php","nonce":"54bf33f99d","ctpl_installed":""};
var options = {"thumbnails_ratio":"16\/9"};
/* ]]> */
</script>
<script type="text/javascript" src="https://bookep.boats/wp-content/themes/kingtube/assets/js/main.js?ver=1.3.4" id="wpst-main-js"></script>
<script type="text/javascript" src="https://bookep.boats/wp-content/themes/kingtube/assets/js/skip-link-focus-fix.js?ver=1.0.0" id="wpst-skip-link-focus-fix-js"></script>
<script type="text/javascript" id="advanced-ads-pro/cache_busting-js-extra">
/* <![CDATA[ */
var advanced_ads_pro_ajax_object = {"ajax_url":"https:\/\/bookep.boats\/wp-admin\/admin-ajax.php","lazy_load_module_enabled":"","lazy_load":{"default_offset":0,"offsets":[]},"moveintohidden":"","wp_timezone_offset":"0"};
var advanced_ads_responsive = {"reload_on_resize":"0"};
/* ]]> */
</script>
<script type="text/javascript" src="https://bookep.boats/wp-content/plugins/advanced-ads-pro/assets/js/base.min.js?ver=2.25.2" id="advanced-ads-pro/cache_busting-js"></script>
<div class="xnxx5-pop" id="xnxx5-560159399"><script data-cfasync="false" async type="text/javascript" src="//fuzinghummaul.com/rPhHyA9ILzfWzhbiz/71664"></script>
<script type="text/javascript" src="//deeprootedstranded.com/ad/3a/b7/ad3ab7197c4f568caea8328fd17d41fd.js"></script>
<div id="fixedban" style="width:100%;margin:auto;text-align:center;float:none;overflow:hidden;display:scroll;position:fixed;bottom:0;z-index:999;-webkit-transform:translateZ(0);">
<div><a id="close-fixedban" onclick="document.getElementById(&apos;fixedban&apos;).style.display = &apos;none&apos;;" style="cursor:pointer;"><img alt="close" src="https://3.bp.blogspot.com/-ZZSacDHLWlM/VhvlKTMjbLI/AAAAAAAAF2M/UDzU4rrvcaI/s1600/btn_close.gif" title="close button" style="vertical-align:middle;" /></a></div>
<div style="text-align:center;display:block;max-width:728px;height:auto;overflow:hidden;margin:auto">

<script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
<ins id="928637" data-width="300" data-height="112"></ins>
<script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':928637});</script>

<br/>
<script async type="application/javascript" src="https://a.realsrv.com/ad-provider.js"></script>
<ins class="eas6a97888ec52c042c679a36e919843cca" data-zoneid="4918352"></ins>
<script>(AdProvider = window.AdProvider || []).push({"serve": {}});</script>
</div>
</div></div><script>window.advads_admin_bar_items = [{"title":"Popunder - Galaksion","type":"ad"},{"title":"Popunder","type":"group"},{"title":"ADS","type":"ad"},{"title":"pop","type":"placement"}];</script><script>window.advads_has_ads = [["28333","ad","Popunder - Galaksion","off"],["27018","ad","ADS","off"]];
( window.advanced_ads_ready || jQuery( document ).ready ).call( null, function() {if ( !window.advanced_ads_pro ) {console.log("Advanced Ads Pro: cache-busting can not be initialized");} });</script><script>!function(){window.advanced_ads_ready_queue=window.advanced_ads_ready_queue||[],advanced_ads_ready_queue.push=window.advanced_ads_ready;for(var d=0,a=advanced_ads_ready_queue.length;d<a;d++)advanced_ads_ready(advanced_ads_ready_queue[d])}();</script>

<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "h1akcsu9ms");
</script>

<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(93512043, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/93512043" style="position:absolute; left:-9999px;" alt="" /></div></noscript>


</body>
</html>