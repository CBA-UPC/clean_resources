import{S as _}from"./SvgIcon_e55bd28a_r24-02-0_b0_t240129-161140.js";import{L as u,A as l,B as d,I as t,Y as m,Z as b,D as r,G as i,N as x,_ as s,J as f}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";import{_ as g}from"./_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js";const y={emits:["checkAction"],components:{SvgIcon:_},props:{labelText:{type:String,required:!0},id:{type:String,default:""},name:{type:String,required:!0},selectedValue:{type:Boolean,default:!1},consent:{type:Boolean,default:!1},labelClass:{type:String,default:""},labelDivClass:{type:Array,default:()=>["labelDiv"]},checkboxClass:{type:String,default:""},isLink:{type:Boolean,default:!1},labelLink:{type:String,default:"#"},count:{type:Number,default:0},followLabel:{type:String,default:""}},data(){return{isValid:!0}},computed:{isChecked(){return this.selectedValue?"on":"off"}},methods:{focusChanged:o=>{o.target.previousSibling.classList.toggle("floated"),o.target.value!==""&&o.target.previousSibling.classList.toggle("filled")},validateCheckbox(){return this.consent&&(this.isValid=this.selectedValue),this.isValid},checkboxChanged(){this.$emit("checkAction",this.isLink,this.labelText,this.selectedValue,this.labelLink)},isSelectedText(){return this.selectedValue?"selected":"not selected"}}},v={class:"form-group checkbox"},L=["for"],S=["id","name","validation","value","checked","aria-checked"],T=["id"],V=["innerHTML"],B={key:0,class:"labelCount"},D=["id"],w=["innerHTML"],I={key:0,class:"labelCount"};function M(o,c,e,A,k,a){const h=u("SvgIcon"),C=u("routerLink");return l(),d("div",v,[t("label",{class:"control-label",for:e.id},[t("input",{id:e.id,name:e.name,validation:a.validateCheckbox,class:"sr-only",value:a.isChecked,checked:a.isChecked==="on",type:"checkbox",tabindex:"-1",onChange:c[0]||(c[0]=m((...n)=>a.checkboxChanged&&a.checkboxChanged(...n),["prevent"])),onKeypress:c[1]||(c[1]=b((...n)=>a.checkboxChanged&&a.checkboxChanged(...n),["enter"])),"aria-checked":a.isChecked==="on"},null,40,S),a.isChecked==="on"?(l(),r(h,{key:0,name:"checkmark",class:"form-group__checkmark"})):i("",!0),e.isLink?(l(),r(C,{key:1,to:e.labelLink,class:"checkContainer",rel:e.followLabel,role:"checkbox","aria-checked":a.isChecked==="on",onClick:a.checkboxChanged,"aria-label":`${e.labelText} ${e.count} products available check box ${a.isSelectedText()}`},{default:x(()=>[t("span",{id:e.id,class:s(["form-control-checkbox",{invalid:!k.isValid&&a.isChecked==="off"},e.checkboxClass])},null,10,T),a.isChecked==="on"?(l(),r(h,{key:0,"set-aria-hidden":!0,name:"checkmark",class:"form-group__checkmark"})):i("",!0),t("span",{class:s(e.labelDivClass)},[t("span",{class:s(["control-label","labelText",e.labelClass]),innerHTML:e.labelText},null,10,V),e.count?(l(),d("span",B,"("+f(e.count)+")",1)):i("",!0)],2)]),_:1},8,["to","rel","aria-checked","onClick","aria-label"])):(l(),d("span",{key:2,class:"checkContainer",onKeypress:c[2]||(c[2]=b((...n)=>a.checkboxChanged&&a.checkboxChanged(...n),["enter"]))},[t("span",{id:e.id,class:s(["form-control-checkbox",{invalid:!k.isValid&&a.isChecked==="off"},e.checkboxClass])},null,10,D),a.isChecked==="on"?(l(),r(h,{key:0,"set-aria-hidden":!0,name:"checkmark",class:"form-group__checkmark"})):i("",!0),t("span",{class:s(e.labelDivClass)},[t("span",{class:s(["control-label","labelText",e.labelClass]),innerHTML:e.labelText},null,10,w),e.count?(l(),d("span",I,"("+f(e.count)+")",1)):i("",!0)],2)],32))],8,L)])}const q=g(y,[["render",M],["__scopeId","data-v-7469df98"]]);export{q as C};
ue(t-1):e==="add"&&!this.plusSignDisabled&&this.setQtyValue(t+1)}}},v=["disabled"],x=["disabled"],D=["disabled"];function N(e,t,i,r,o,s){const d=h("SvgIcon");return e.productPDP?(b(),S("div",{key:0,class:"qty form-group",disabled:s.oosError},[a("button",{class:n(["qty-button",{disabled:o.minusSignDisabled}]),onClick:t[0]||(t[0]=y=>s.changeQtyClick("reduce")),type:"button","aria-label":"Reduce Quantity",disabled:s.oosError},[c(d,{name:"minus",class:"reduce-qty-button-icon",title:"reduce quantity","set-aria-hidden":!0})],10,x),a("div",{class:n(["selectedqty",{disabled:s.oosError}])},f(s.currentQuantity),3),a("button",{class:n(["qty-button",{disabled:o.plusSignDisabled}]),onClick:t[1]||(t[1]=y=>s.changeQtyClick("add")),type:"button","aria-label":"Add Quantity",disabled:s.oosError},[c(d,{name:"plus",class:"add-qty-button-icon",title:"add quantity","set-aria-hidden":!0})],10,D)],8,v)):Q("",!0)}const L=k(q,[["render",N],["__scopeId","data-v-da69e6d1"]]);export{L as q};