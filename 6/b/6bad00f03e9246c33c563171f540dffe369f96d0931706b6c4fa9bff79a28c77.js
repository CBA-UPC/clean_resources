.title[data-v-fca52b7c]{color:#0f84fa}.container[data-v-fca52b7c]{padding:10px;text-align:justify}.link[data-v-fca52b7c]{align-items:center;color:#fff;display:flex;height:100%;justify-content:center;width:100%}
    <ng-transclude></ng-transclude>
        <div ng-if="defaultTemplate" class="ADMdtpInput masterInput" ng-class="{touch: option.isDeviceTouch, disable: disable, open: showCalendarStat}"> 
            <input type="text" name="{{option.name}}" ng-model="dtpValue.formated" ng-focus="openCalendar()" ng-click="openCalendar()" ng-readonly="option.freezeInput || option.isDeviceTouch || disable" ng-blur="modelChanged()" ng-keydown="onKeydown($event)" ng-required="ngRequired" class="my-form-input tb-input my-farsi text-center" placeholder="انتخاب تاریخ">
            <!-- <div class="dtp-ig my-hide" ng-click="toggleCalendar()"> 
                <svg class="dtp-i fakeIcon" viewBox="0 0 24 24">
                    <use xlink:href="#dtp-i-right" />
                </svg> 
                <svg class="dtp-i calendarIcon hide" viewBox="0 0 24 24">
                    <use xlink:href="#dtp-i-calendar" />
                </svg> 
                <svg class="dtp-i closeIcon" viewBox="0 0 24 24">
                    <use xlink:href="#dtp-i-off" />
                </svg> 
            </div> 
            <svg class="removeIcon" viewBox="0 0 24 24" ng-if="dtpValue.formated" ng-click="destroy()">
                <use xlink:href="#dtp-i-close" />
            </svg> -->
        </div>
    </div> 
</div>