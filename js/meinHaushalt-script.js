
function createArticle(artikel, tabelle) {

	let $newArticle = $(
	`<tr class="tabellenZeile" id="${artikel.name}">
	<td scope="row">${artikel.stueckzahl}</td>
	<td>${artikel.name}</td>
	<td style="vertical-align:middle">
		<button class="btn btn-dark">+</button>
		<button class="btn btn-light">-</button>
		<i class="bi bi-circle-fill ${artikel.ampel}"></i>
	</td>
	</tr>`
	);

	tabelle.append($newArticle);
};

function createDropdown(kategorien, dropdown){
	for(i=0;i<kategorien.length;i++){
		dropdown.append($(`<button class="dropdown-item" id="${kategorien[i]}" type="button" style="font-size:2vh;">${kategorien[i]}</button>`));
		$(`#${kategorien[i]}`).click(myScope([kategorien[i]]));
	}
	$(`#keinFilter`).click(myScope("keinFilter"));
};

function myScope(kategorie){
	return function (){toggleFilter(kategorie)};
}

function toggleFilter(kategorie){
	for (let i = 0; i < artikelInfo.length; i++) {
		if(kategorie == "keinFilter"){
			$(`#${artikelInfo[i].name}`).removeClass("noshow");
		}else if(artikelInfo[i].kategorie == kategorie){
			$(`#${artikelInfo[i].name}`).removeClass("noshow");
		}else{
			$(`#${artikelInfo[i].name}`).addClass("noshow");
		};
};
};

function artikelHinzufuegen(artikel) {
	artikelInfo.push(artikel);
}

