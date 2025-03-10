1	Korte uitleg topic 
Wat is de bedoeling? Wat gaan we maken? 

Om de basisprincipes van D3.js onder de knie te krijgen, gaan we een interactieve donutdiagram creëren die herbruikbaar is binnen een portfolio. Dit diagram zal de bekende frameworks van een gebruiker visualiseren. Tijdens dit proces leggen we stap voor stap de fundamenten van D3.js uit.

We verkennen hoe D3.js de DOM selecteert en manipuleert, hoe het data laadt en bindt, en hoe we deze kennis toepassen om een dynamische grafiek te bouwen. Vervolgens voegen we labels toe die rechtstreeks uit de data worden gegenereerd en passen we kleurenschaal toe. Tot slot zorgen we voor een innerlijke straal om de kenmerkende donutvorm te creëren.








Dit zal ons eindresultaat zijn:
 

Onze donutdiagram krijgt een elegante hover-animatie, die we eveneens zullen implementeren:
 


2	Aspect 1: Pie chart
Uitgewerkt door: Yaron Vansteenkiste
Dit hoofdstuk maak je individueel voor elk aspect. Een aspect werk je individueel uit. Als je met meerdere mensen samenwerkt dan copieer je dit deel dus meerdere keren. 
2.1	Korte beschrijving
Geef hier een korte beschrijving van het aspect. 
We creëren een geanimeerde cirkeldiagram (pie chart) die we met een arc omvormen tot een donutdiagram. Aangezien D3.js talloze mogelijkheden biedt, zoals staafdiagrammen, lijndiagrammen, scatterplots en area charts, richten we ons specifiek op een component die herbruikbaar is binnen een portfolio.

Op deze manier dient ons verslag niet alleen als introductie tot de basisprincipes van D3.js, maar biedt het ook een praktische toepassing die direct in een portfolio geïntegreerd kan worden.
2.2	Prerequisites 
Wat moet al gekend zijn voor je aan dit topic begint: 
•	Basiskennis van JavaScript/TypeScript
•	Ervaring met React en Next.js
•	Basisinzicht in SVG en hoe D3.js hiermee werkt

Welke tools moeten geinstalleerd zijn voor je aan dit topic kan beginnen: 
•	 D3.js (voor de datavisualisatie)
•	Een basisproject in Next.js
Info om deze tools te installeren (als het gaat om iets dat we niet in de lessen gezien hebben): 
•	We kregen in de les al voldoende info voor een Next.JS project te starten. Wij gaan enkel D3.js moeten installeren:

 
 

2.3	Stappen 

2.3.1	Projectstructuur opzetten


 

Maak een component DonutChart.tsx binnen src/app/components/

 
 
Voorlopig zetten we slechts een paragraaf met todo, later gaan we hier onze donut chart ontwerpen. 

 

2.3.2	D3 Selectors en Data manipulation

D3.js biedt krachtige selectors om DOM-elementen te selecteren en te manipuleren. In ons Next.js-project gebruiken we deze selectors om een SVG-element te maken en dynamisch data te koppelen aan ons donutdiagram.

Om eerst een voorbeeld te maken, plaatsen we eerst een h2 en een paragraph in onze code: 
 

D3 stelt ons in staat om HTML-elementen te selecteren en te manipuleren, net zoals we dat met CSS of JavaScript zouden doen.

Bijvoorbeeld, we kunnen een <h1> selecteren en de stijl ervan aanpassen met D3.
•	d3.select("h1") selecteert het eerste <h1> element in de DOM.
•	.style("color", "red") past de kleur van de tekst aan.
•	.style("font-size", "2rem")  verandert de grootte van het <h1> element.
•	d3.select("p") selecteert de eerste <p> en past de kleur aan.
D3 kan dus net als CSS alle visuele eigenschappen van HTML-elementen manipuleren, inclusief kleur, grootte, lettertype, margins en meer.





 
Uiteindelijke code van stap 2:
 

Het resultaat zou zijn dat d3 de kleuren van <h1> en van <p> succesvol zijn veranderd:

 



2.3.3	Data laden en binden

Het belangrijkste doel van D3.js is het laden en visualiseren van data. In een goed gestructureerd project zouden we de data in een aparte data.ts-file plaatsen en deze importeren in ons component. Maar voor overzichtelijkheid houden we de data voorlopig in het component zelf.

We definiëren een dataset waarin we frameworks en bijbehorende waarden opslaan. De waarden geven aan hoe de frameworks zich tot elkaar verhouden, bijvoorbeeld in populariteit of gebruik. Dit zal zich vertalen in de grootte. We willen dat elk 45 graden innemen van onze donut chart, dus we geven elk een zelfde value.

 
Met d3.selectAll("p") selecteren we alle <p>-elementen in de body. Vervolgens gebruiken we .enter() om nieuwe <p>-elementen te genereren op basis van onze dataset en voegen deze toe aan de DOM met .append("p"). 
text(d => ${d.framework}: ${d.value}), zet de tekst per framework en waarde.

 

De data zal in paragraphs te zien zijn:  

2.3.4	Het maken van een donut chart
Nu we hebben gezien hoe we met D3.js elementen kunnen selecteren, manipuleren en data kunnen laden en visualiseren, gaan we deze kennis toepassen om een donut chart te maken.

Begin met het definiëren van een referentie voor de SVG:

 

Dit zorgt ervoor dat we later eenvoudig toegang hebben tot het SVG-element.

Vervolgens selecteren we de SVG en stellen we de afmetingen in: 
 


Hier bepalen we de breedte en hoogte van de visualisatie en berekenen we de straal van de donut chart.

Daarna maken we de basis voor de taartdiagram:

 

De pie-functie zet de data om in een geschikt formaat voor een taartdiagram, terwijl arc de binnen- en buitengrenzen van de segmenten bepaalt.

Nu plaatsen we de grafiek in het midden van de SVG: 
 

Daarna voegen we de segmenten toe aan de donut chart:

 

Hier koppelen we de data aan de segmenten, creëren we de g-elementen voor de arcs en vullen we ze met kleur.

Onze uiteindelijke code voor stap 4 is als volgt:

 
 


En nu krijgen we een mooie ronde blauwe cirkel te zien. Dit is onze pie chart:

 

2.3.5	Toevoegen van labels 

We hebben eerder in sectie 2.3.3 "Data laden en binden" gezien hoe we data kunnen laden en deze aan elementen kunnen binden. Deze techniek gaan we nu hergebruiken in de code. Deze keer voegen we echter een extra stap toe: we plaatsen tekstlabels op de donut chart-segmenten.

Voeg de volgende code toe om de tekstlabels aan de segmenten toe te voegen: 
Wat deze code doet:
•	De transform-attributen zorgen ervoor dat de tekst in het midden van elk segment wordt geplaatst, gebruikmakend van de centroid-functie van D3, die de middelste coördinaten van het pad berekent.
•	text-anchor zorgt ervoor dat de tekst in het midden van het segment wordt uitgelijnd.
•	font-size en fill bepalen de stijl van de tekst (wit en 12px groot in dit geval).
•	De text-functie zorgt ervoor dat de naam van het framework (uit de data) op elk segment wordt weergegeven. 
 

 
2.3.6	Splitsen in kleuren

We willen natuurlijk niet dat onze donut chart volledig blauw is. Om meer variatie in de kleuren van de segmenten te brengen, gaan we gebruik maken van een kleurfunctie die de kleuren dynamisch toewijst aan elk segment.

Verwijder eerst de functie die onze diagram blauw kleurt:

 
vervolgens voeg je volgende code toe:
 

Wat deze code doet:
•	De fill-attributen worden nu dynamisch ingesteld door de color functie. Deze functie krijgt de index i van elk segment en zet deze om naar een kleur.
•	De color(i.toString()) zorgt ervoor dat elk segment een andere kleur krijgt, gebaseerd op de index van het segment in de data.

 

 

2.3.7	Van taartdiagram naar donutdiagram

Eerder hebben we het volgende toegevoegd in de code:
 

Dit deden we bewust om te zien of de data wel goed verspreid over onze diagram en dat de labels zichtbaar zijn. Echter willen we wel een donut hebben en geen taart. Daarom kunnen we onze radius terug gebruiken en  afhankelijk van hoe groot de doorsnede moet zijn, een cijfer invullen van 0.1 tot 0.9:

 


 
 


 
2.3.8	Interactie met donut chart

We willen de donut chart interactiever maken door een animatie toe te voegen wanneer de gebruiker met de muis over een segment beweegt. Dit doen we door de mouseover- en mouseout-events te gebruiken om de segmenten te laten schalen.
 
Wat deze code doet:
•	mouseover: Wanneer de gebruiker de muis boven een segment beweegt, wordt het segment vergroot door het transform-attribuut aan te passen met een scale(1.1)-transformatie. De overgang duurt 200 milliseconden.
•	mouseout: Wanneer de gebruiker de muis van het segment af beweegt, wordt het segment weer teruggebracht naar de oorspronkelijke grootte met scale(1).

 
Uiteindelijke resultaat:
 



 
 
