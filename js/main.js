function paraSpacing() {
	let eng = $('.en p');
	let trans = $('.translation p');
	/*let addSpace = function(en, tran) { 
		if (tran.outerHeight(true) > en.outerHeight(true)) {
			//let margin = en.css('margin-bottom');
			en.css('margin-bottom', '3.7em');
			//addSpace(en, trans);
		} else if (tran.outerHeight(true) > en.outerHeight(true) + 24 && en.css('margin-bottom') > 60 ) ; {
			//let margin = en.css('margin-bottom');
			en.css('margin-bottom', '1.85em');
		}
	}*/
	trans.each( function(index, value) {
		 tran = $(value);
		 en = eng.eq( index );

		if ( tran.outerHeight(true) > en.outerHeight(true)) {
			en.css('margin-bottom', '3.7em');
		} else if (tran.outerHeight(true) < en.outerHeight(true) - 10 ) {
			en.css('margin-bottom', '1.85em');
		};
		let tranTop = tran.position().top;
		let enTop = en.position().top;
		if ( tranTop < enTop ) {
			tran.css('top', enTop - tranTop).css('position', 'relative');
		};
	})
	/*for (let i = trans.length - 1; i >= 0; i--) {
		addSpace(eng.eq(i), trans.eq(i)); 
	}*/
};

function langSwitch(event) {
	let link = $(event.currentTarget)
	let key = link.attr('href').substr(1);
	let paras = $('.translation div	').children('h1, p');
	let trans = Translations[key];
	for (let i = trans.length - 1; i >= 0; i--) {
		paras.eq(i).html( trans[i]);
	}
	link.parent().siblings().children('a').removeClass('active');
	link.addClass('active');
	if (key == 'AR') {
		$('.translation').css('direction', 'rtl')
	} else {
		$('.translation').css('direction', 'auto')
	}
	if ( $(window).width() >= 780 )
		paraSpacing();
};

function randLang() {
	let rand = Math.floor((Math.random() * 7) + 1);
	let links = $('.languages li a');
	links.eq(rand).click();
}

$('.languages a').click( (event) => langSwitch(event) );

$('.en p, .translation p').mouseover( function() {
	console.log('over');
	let index = $(this).index();
	//$('#diagrams img').removeClass('up');
	$('#diagrams img:nth-child(' + index + ')').addClass('up');
}).mouseout( function(){
	$('#diagrams img').removeClass('up');
})

$(document).ready(function() {
	randLang();
	if ( $(window).width() >= 780 )
		paraSpacing();
});

/*$(window).resize( function() {
	if ( $(window).width() >= 780 )
		paraSpacing();
})*/

const Language = ['AR', 'DE', 'ES', 'FR', 'RU', 'JA', 'IT', 'ZH']
const Translations = {
	'AR': [
		'الاختيار المختلط',
		'الاختيار المختلط هو طريقة لاتخاذ قرار يجمع بين كل حكم أو لائحة في وثيقة رقمية واحدة.',
		'بدلاً من التصويت على كل اقتراح ، يمكن لصانعي القرار وضع نسخة بديلة من هذا المستند.',
		'يختار كل صانع قرار إصدارًا واحدًا ، ويتم تطبيق المستند بأكبر دعم.',
		'يمنح هذا القرار حرية تطوير الأفكار وبناء التوافق في طرق تؤدي إلى نتائج أفضل.',
		' يستخدم الخيار المختلط أداتين رقميتين ، وتطبيق التصويت ، وبرنامج الاقتراع',
		'يتيح تطبيق التصويت اتخاذ القرار بتحميل الخيارات واختيارها ويحسب برنامج الاقتراع شعبيتها.',
		'لاستخدام الاختيار المجمع في منظمتك أو جهة الاتصال المحلية أو السلطة الوطنية INFO@COMBINEDCHOICE.ORG.',
		'لمعرفة المزيد ، اقرأ برنامجنا الأبيض.',
		'حقوق الطبع والنشر © 2020 الاختيار المختلط'
	],
	'DE': [
		'KOMBINIERTE WAHL',
'KOMBINIERTE WAHL IST EINE ENTSCHEIDUNGSMETHODE, DIE JEDE REGEL ODER REGELUNG IN EINEM DIGITALEN DOKUMENT KOMBINIERT.',
'Anstelle der Abstimmung über jeden Vorschlag können Entscheidungsträger eine alternative Version dieses Dokuments vorlegen.',
'JEDER ENTSCHEIDUNGSHERSTELLER WÄHLT EINE VERSION, UND DAS DOKUMENT MIT DER MEISTEN UNTERSTÜTZUNG WIRD DURCHGEFÜHRT.',
'Dies gibt der Entscheidung die Freiheit, Ideen zu entwickeln und Konsens auf eine Weise zu schaffen, die bessere Ergebnisse liefert.',
'KOMBINIERTE WAHL VERWENDET ZWEI DIGITALE WERKZEUGE, DIE ABSTIMMUNGSANWENDUNG UND DAS BALLOTPROGRAMM.',
'Mit dem Abstimmungsantrag können Entscheidungsträger Optionen hochladen und auswählen, und das Ballot-Programm berechnet ihre Popularität.',
'UM KOMBINIERTE WAHL IN IHRER ORGANISATION, LOKALEN ODER NATIONALEN BEHÖRDE ZU VERWENDEN, KONTAKTIEREN SIE INFO@COMBINEDCHOICE.ORG.',
'UM MEHR ZU LERNEN, LESEN SIE UNSER WHITEPAPER.',
'COPYRIGHT © 2020 KOMBINIERTE WAHL'
	],
	'ES': [
		'ELECCIÓN COMBINADA',
'LA ELECCIÓN COMBINADA ES UN MÉTODO DE TOMA DE DECISIONES QUE COMBINA CADA REGLA O REGULACIÓN EN UN DOCUMENTO DIGITAL.',
'EN VEZ DE VOTAR EN CADA PROPUESTA, LOS TOMADORES DE DECISIONES PUEDEN PRESENTAR UNA VERSIÓN ALTERNATIVA DE ESTE DOCUMENTO.',
'CADA TOMADOR DE DECISIONES ELIGE UNA VERSIÓN, Y EL DOCUMENTO CON LA MAYOR APOYO SE HACE EFECTIVO.',
'ESTO DA A LOS TOMADORES DE DECISIONES LA LIBERTAD DE DESARROLLAR IDEAS Y CONSTRUIR CONSENSO DE MANERAS QUE PRODUCEN MEJORES RESULTADOS.',
'LA ELECCIÓN COMBINADA UTILIZA DOS HERRAMIENTAS DIGITALES, LA APLICACIÓN DE VOTO Y EL PROGRAMA DE VOTACIÓN.',
'LA APLICACIÓN DE VOTO PERMITE QUE LOS TOMADORES DE DECISIONES CARGEN Y SELECCIONEN OPCIONES Y EL PROGRAMA DE VOTACIÓN CALCULA SU POBLACIÓN.',
'PARA UTILIZAR LA ELECCIÓN COMBINADA EN SU ORGANIZACIÓN, AUTORIDAD LOCAL O NACIONAL, CONTACTE CON INFO@COMBINEDCHOICE.ORG.',
'PARA MÁS INFORMACIÓN LEA NUESTRO LIBRO BLANCO.',
'COPYRIGHT © 2020 ELECCIÓN COMBINADA'
	],
	'FR': [
		'CHOIX COMBINÉ',
'LE CHOIX COMBINÉ EST UNE MÉTHODE DE PRISE DE DÉCISION QUI COMBINE CHAQUE RÈGLE OU RÈGLEMENT DANS UN DOCUMENT NUMÉRIQUE.',
'AU LIEU DE VOTER SUR CHAQUE PROPOSITION, LES DÉCIDEURS PEUVENT PROPOSER UNE VERSION ALTERNATIVE DE CE DOCUMENT.',
'CHAQUE DÉCIDEUR CHOISIT UNE VERSION, ET LE DOCUMENT AVEC LE PLUS DE SOUTIEN EST EXÉCUTÉ.',
'CELA DONNE LA LIBERTÉ DE DÉVELOPPER DES IDÉES ET DE CONSTRUIRE UN CONSENSUS POUR PRODUIRE DE MEILLEURS RÉSULTATS.',
"LE CHOIX COMBINÉ UTILISE DEUX OUTILS NUMÉRIQUES, L'APPLICATION DE VOTE ET LE PROGRAMME DE BULLETINS.",
"L'APPLICATION DE VOTE PERMET AUX DÉCIDEURS DE TÉLÉCHARGER ET DE SÉLECTIONNER DES OPTIONS ET LE PROGRAMME DE BULLETINS CALCULE LEUR POPULARITÉ.",
'POUR UTILISER LE CHOIX COMBINÉ DANS VOTRE ORGANISATION, VOTRE AUTORITÉ LOCALE OU NATIONALE, CONTACTEZ INFO@COMBINEDCHOICE.ORG.',
'POUR EN SAVOIR PLUS, LISEZ NOTRE LIVRE BLANC.',
'COPYRIGHT © 2020 CHOIX COMBINÉ',
	],
	'RU': [
		'КОМБИНИРОВАННЫЙ ВЫБОР',
'КОМБИНИРОВАННЫЙ ВЫБОР ЯВЛЯЕТСЯ МЕТОДОМ ПРИНЯТИЯ РЕШЕНИЙ, ПРИНИМАЮЩИМ К КАЖДОМУ ПРАВИЛУ ИЛИ РЕГУЛИРОВАНИЮ В ОДНОМ ЦИФРОВОМ ДОКУМЕНТЕ',
'ВМЕСТО ГОЛОСОВАНИЯ ПО КАЖДОМУ ПРЕДЛОЖЕНИЮ ПРИНЯТИЕ РЕШЕНИЙ МОГУТ ПРЕДОСТАВИТЬ АЛЬТЕРНАТИВНУЮ ВЕРСИЮ ЭТОГО ДОКУМЕНТА.',
'КАЖДЫЙ ПРИНЯТИЕ РЕШЕНИЯ ВЫБИРАЕТ ОДНУ ВЕРСИЮ, И ДОКУМЕНТ С НАИБОЛЕЕ ПОДДЕРЖКОЙ ПОДДЕРЖИВАЕТСЯ.',
'ЭТО ДАЕТ РЕШЕНИЕ, СОДЕРЖАЩЕЕ СВОБОДУ РАЗВИТИЯ ИДЕЙ И СОЗДАНИЯ КОНСЕНСУСА В СПОСОБАХ, КОТОРЫЕ ПРОИЗВОДЯТ ЛУЧШИЕ РЕЗУЛЬТАТЫ.',
'Комбинированный выбор использует два цифровых инструмента, приложение голосования и программу голосования.',
'ПРИЛОЖЕНИЕ ДЛЯ ГОЛОСОВАНИЯ ПОЗВОЛЯЕТ РЕШЕНИЮ ЗАГРУЗИТЬ И ВЫБРАТЬ ВАРИАНТЫ, И ПРОГРАММА BALLOT РАСЧЕТА ИХ ПОПУЛЯРНОСТЬ.',
'ДЛЯ ИСПОЛЬЗОВАНИЯ КОМБИНИРОВАННОГО ВЫБОРА В ВАШЕЙ ОРГАНИЗАЦИИ, ЛОКАЛЬНОЙ ИЛИ НАЦИОНАЛЬНОЙ ВЛАСТИ КОНТАКТЫ INFO@COMBINEDCHOICE.ORG.',
'ЧТОБЫ УЗНАТЬ БОЛЬШЕ ПРОЧИТАЙТЕ НАШ ОДЕЖДУ',
'АВТОРСКОЕ ПРАВО © 2020 КОМБИНИРОВАННЫЙ ВЫБОР'
	],
	'JA': [
		'組み合わせた選択',
'組み合わせた選択は、1つのデジタルドキュメントですべての規則または規制を組み合わせるという意思決定の方法です。',
'各提案に投票する代わりに、意思決定者はこの文書の代替版を提出することができます。',
'それぞれの意思決定者が1つのバージョンを選択し、最もサポートのあるドキュメントが適用されます。',
'これにより、意思決定が自由になり、より良い結果を生み出す方法でアイデアを開発し、合意を築くことができます。',
'組み合わせた選択では、2つのデジタルツール、投票アプリケーション、および投票プログラムを使用します。',
'投票アプリケーションは、意思決定者によるアップロードとオプションの選択を可能にし、投票プログラムはその人気度を計算します。',
'組織、地方自治体、または国家当局で組み合わせた選択を使用するには、INFO @ COMBINEDCHOICE.ORGに連絡してください。',
'詳細については、ホワイトペーパーをご覧ください。',
'著作権©2020 COMBINED CHOICE'
	],
	'IT': [
		'SCELTA COMBINATA',
'LA SCELTA COMBINATA È UN METODO DI DECISIONE CHE COMPRENDE OGNI REGOLA O REGOLAMENTO IN UN DOCUMENTO DIGITALE.',
"ALL'INTERNO DELLA VOTAZIONE SU OGNI PROPOSTA, I DECISION POSSONO PRESENTARE UNA VERSIONE ALTERNATIVA DI QUESTO DOCUMENTO.",
'Ogni decisore sceglie una versione e il documento con il maggior supporto viene rafforzato.',
'QUESTA DÀ LA DECISIONE FA LA LIBERTÀ DI SVILUPPARE IDEE E COSTRUIRE IL CONSENSO IN MODI CHE PRODURRE MIGLIORI RISULTATI.',
"LA SCELTA COMBINATA UTILIZZA DUE STRUMENTI DIGITALI, L'APPLICAZIONE VOTA E IL PROGRAMMA BALLOT.",
"L'APPLICAZIONE VOTA LASCIA CHE I DECISION FANNO CARICARE E SELEZIONARE LE OPZIONI E IL PROGRAMMA BALLOT CALCOLA LA LORO POPOLARITÀ.",
'PER USARE LA SCELTA COMBINATA NELLA TUA ORGANIZZAZIONE, AUTORITÀ LOCALE O NAZIONALE CONTATTARE INFO@COMBINEDCHOICE.ORG.',
'PER SAPERNE DI PIÙ LEGGI IL NOSTRO WHITEPAPER.',
'COPYRIGHT © 2020 SCELTA COMBINATA'
	],
	'ZH': [
		'综合选择',
'组合选择是一种将每个规则或法规组合到一个数字文档中的决策方法。',
'决策者可以替代每个提案的表决权，以提出本文档的替代版本。',
'每个决策者都选择一个版本，并强制执行最支持该文档的文档。',
'这给决策提供了发展想法和建立共识的自由，从而产生了更好的结果。',
'组合选择使用两个数字工具，投票应用程序和投票程序。',
'投票应用程序会导致决策者上传和选择选项，而投票程序会计算其受欢迎程度。',
'在您的组织，地方或国家机构中使用组合选择联系方式INFO@COMBINEDCHOICE.ORG。',
'了解更多信息，请阅读我们的白皮书。',
'版权©2020综合选择'
	],
}
