import{bt as t,u as r}from"./itinerary-entities.5f897bcd.js";import{I as a}from"./InformationContainer.c9910b2d.js";import{R as n,i as s}from"./itinerary-modules.2ea32123.js";import{l as i,q as m,G as p,H as c}from"./graphql.5cf3693b.js";import"./service-client.4862e840.js";import"./FaqList.f0c8de76.js";import"./index.308ba4bd.js";const I=i({__name:"international-flights",setup(l){const e=t(),o=r();return m(()=>{o.setReserveType(n.Flight),e.searchMode=s.Foreign}),(f,u)=>(p(),c(a))}});export{I as default};
	?
						{{/if}}</b></span>
				<span>{{guestName}}</span>
				<time>{{matchTime}}</time>
				<a href="#" class="details" role="button" tabindex="0"><i class="icon-info-circled"></i></a>
			</li>
			{{/each}}
		</ul>
		{{/each}}
	</div>
</div>
<div class="standing-results">
	<table class="table table-condensed table-responsive table-striped">
		<thead>
			<tr>
				<th></th>
				<th class="col-xs-8">تیم</th>
				<th class="col-xs-2">بازی‌ها</th>
				<th class="col-xs-2">امتیاز</th>
			</tr>
		</thead>
		<tbody>
			{{#each standing.entries}}
			<tr>
				<td>{{mathPersian @index '+' 1}}</td>
				<td>{{teamTitle}}</td>
				<td>{{persianDigits playCount}}</td>
				<td>{{persianDigits point}}</td>
			</tr>
			{{else}}
			<div class="alert">
				داده‌ای یافت نشد
			</div>
			{{/each}}
		</tbody>
	</table>
</div>