let date = new Date();
let generateRandomDay = Math.floor(Math.random() * 31) + 1
let generateRandommonth = Math.floor(Math.random() * 12) + 1
let generateRandomyear = Math.floor(Math.random() * 5) + 2016 // jaar tussen 2016 en nu


console.log(`
    =====================================
    |               NEWS                |
    =====================================
`)

function getStringForPosts() {
    let artikel = {
        titel: `
    =====================================
    Post 1: 5 REDENEN WAAROM JIJ MOET KIEZEN VOOR GRAFISCHE EN DIGITALE MEDIA
    =====================================
    `,
        synopsis: "Ben je nog niet volledig overtuigd waarom je moet kiezen voor de opleiding Grafische en Digitale Media aan Arteveldehogeschool? Lees dan snel verder, want derdejaarsstudent Arjan helpt jou de knoop doorhakken.",
        body: `
    <h1>De locatie</h1>
    <p>Campus Mariakerke, dat wordt jouw thuisbasis tijdens je studies. Die campus ligt niet pal in het centrum van Gent. Schrikt dat jou af omdat het niet vlot bereikbaar lijkt? Geen nood, er zijn verschillende mogelijkheden: Arjan vertelt: “Eerst en vooral heb je de sneldienst, dat is een bus die jou rechtstreeks van het Gent-Sint-Pietersstation naar de campus brengt en terug. Ik neem meestal de auto en ik parkeer op de gratis parking aan de campus. Vanuit mijn eigen ervaring geef ik je één tip mee: zet je wekker op tijd ’s ochtends, anders heb je misschien geen plaatsje op de parking en kom je te laat in de les. Dat is toch het laatste wat je wilt! ”</p>

    <h1>Het lessenrooster</<h1>
    <p>Heb ik vaak vroeg les? Variëren de lessen van week tot week? Heb ik veel springuren? Alleen al over het lessenrooster heb je waarschijnlijk heel wat vragen... “Het lessenrooster is grotendeels vast. Een volledige lesdag begint om 8.45 uur en eindigt om 16 uur. Bovendien vind ik de lessen goed verspreid. Af en toe moet ik eens naar een andere campus, maar dat communiceert de school goed. Daarnaast heb ik amper springuren, wat ik persoonlijk handig vind”, zegt Arjan.</p>

    <h1>De vakken</h1>
    <p>Computersystemen, mediatechnologie, colour science, digitale reproductietechnieken, studio GDM … Allemaal namen van nieuwe vakken, maar wat houden die in? Zijn het vooral praktijkvakken of eerder theoretisch? “In het eerste jaar krijg je vooral algemene vakken om iedereen te laten proeven van alle afstudeerrichtingen. Hoe verder in de opleiding hoe meer praktijk. Zo kreeg ik een vak ‘Multicam en streaming’. In dat vak leer je een korte liveshow op poten zetten. Dat was een unieke ervaring, je maakt namelijk zelf eens mee hoe het er in een livesituatie aan toegaat. In het derde jaar krijg je een vak ‘studio GDM’. Daarbij werken we in groepjes aan een project voor een echte klant. In dat project werk je niet enkel met studenten van je eigen afstudeerrichting, maar ook met studenten van de andere richtingen. Iedereen heeft zijn eigen taak die aansluit bij je opleiding. Daardoor kunnen we beter voldoen aan de behoeften van de klant. Het is een zeer leerrijke ervaring!”</p>

    <h1>De docenten</h1>
    <p>Arjan getuigt: “In het begin loopt het contact eerder formeel, maar dat is logisch. Naarmate je langer les krijgt van een bepaalde docent, ontstaat er meer en meer een vriendschappelijke band. Dat geeft veel voordelen. Zo kan je hen wel eens bellen als je feedback wil voor bepaalde opdrachten of om even materiaal uit te lenen. Bovendien zijn ze ook connecties als je afstudeert en in het werkveld terechtkomt.”</p>

    <h1>Een echte aanrader</h1>
    <p>“Ik vind het een heel boeiende richting, omdat het heel actueel is om in de visuele sector bezig te zijn. Het is een redelijk algemene richting. Zo kan je je eigen weg gaan met de verschillende skills die je ontwikkelt tijdens de opleiding.” Deze student is alvast overtuigd!</p>
    `,
        thumbnail: "https://dl.airtable.com/.attachments/54c0d7df5b5b353f18743151e1e31bb8/2bd20846/32247355_10158520174543647_5350226527105581056_o.jpg",
        datumVanAanmaak: generateRandomyear + "-" + generateRandommonth + "-" + generateRandomDay,
        datumVanModificatie: date
    }
    for (const property in artikel) {
        console.log((`${property}: ${artikel[property]}`))
    }
}

function getStringForAuthors() {
    let authors = {
        voornaam: "Lisa",
        familienaam: "De Wilde",
        thumbnailUrl: "https://dl.airtable.com/.attachments/54c0d7df5b5b353f18743151e1e31bb8/2bd20846/32247355_10158520174543647_5350226527105581056_o.jpg"
    }
    for (const property in authors) {
        console.log((`${property}: ${authors[property]}`))
    }

}

function getStringForComments() {
    console.log(`
    =====================================
    |           Comments                |
    =====================================
    `)

    let comments = {
        comment1: "* Die XLR microfoon kan alleen met een tussenstukje, er zit alleen maar een 3,5mm jack op de camera.",
        comment2: "* Juist, dit is geen action cam voor consumenten maar gereedschap voor profs",
        comment3: "* linkt eerder als een mooier uitgevoerde gig-e industriele camera, gebruikt in vision systems. Met wat oude broadcast (geen 12G SDI) i/o erbij. Nadeel is altijd de achterhaalde HDMI uitgangen, voor je Atomos recorder/monitor. Hiermee doe je geen RAW."
    }

    for (const property in comments) {
        console.log((`${property}: ${comments[property]}`))
    }
}




function getStringForPosts2() {
    let artikel2 = {
        titel: `
    =====================================
    Post 2: 5 ERLINDE DERYCKE WINT DE FEBELGRA-PRIJS 2019
    =====================================
    `,
        synopsis: "Herlinde Derycke wint de Febelgra-prijs 2019",
        body: `
    <p>Studente Herlinde Derycke, afgestudeerd in de afstudeerrichting Grafimediabeleid, wint de Febelgra-prijs 2019. Die is uitgereikt op de proclamatieviering 5 oktober 2019 in Gent. Febelgra, de beroepsvereniging van de Belgische grafische industrie, reikt elk jaar de Febelgra-prijs uit aan een student wie uitzonderlijk werk heeft geleverd tijdens zijn of haar studie en uitblonk als ambassadeur is voor de grafische sector. Martin Desmaele van Febelgra: “In haar presentatie liet Herlinde snel blijken dat ze een uitstekende ambassadrice is voor onze branche. Zowel technisch-inhoudelijk als verbaal liet ze zich van haar sterkste kant zien.” Haar bachelorproef handelt over de problematiek en duurzame oplossingen binnen de verpakkingswereld waar ze op zoek gaat naar opportuniteiten en innovaties voor bedrijven om hun duurzaamheid te optimaliseren. Tijdens haar verdediging vertelde ze ook hoe ze energie haalt uit de passie en gedrevenheid van haar docenten. Desmaele is onder de indruk van de studente: “Wij zijn ervan overtuigd dat ze een enorme meerwaarde zal betekenen voor het werkveld en dat ze haar professionele ambities tot een goed einde zal brengen.” Andere genomineerde studenten waren Jordy Van der Haegen, afgestudeerd in de richting Multimediaproductie en Céline Van Nieuwenhuyse, afgestudeerd in de richting Crossmedia-ontwerp.</p>
    `,
        thumbnail: "https://dl.airtable.com/.attachments/54c0d7df5b5b353f18743151e1e31bb8/2bd20846/32247355_10158520174543647_5350226527105581056_o.jpg",
        datumVanAanmaak: generateRandomyear + "-" + generateRandommonth + "-" + generateRandomDay,
        datumVanModificatie: date
    }

    for (const property in artikel2) {
        console.log((`${property}: ${artikel2[property]}`))
    }
}

function getStringForAuthors2() {
    let authors = {
        voornaam: "Lisa",
        familienaam: "De Wilde",
        thumbnailUrl: "https://dl.airtable.com/.attachments/54c0d7df5b5b353f18743151e1e31bb8/2bd20846/32247355_10158520174543647_5350226527105581056_o.jpg"
    }

    for (const property in authors) {
        console.log((`${property}: ${authors[property]}`))
    }
}

function getStringForComments2() {
    console.log(`
    =====================================
    |           Comments                |
    =====================================
    `)
    let commentaren = { 
    comment1: "* Panasonic heeft een heleboel PTZ, waaronder ook speciale broadcast uitvoeringen.",
    comment2: "* Voor wat betreft het formaat, dat kon al langer in de vorm van actioncamera's. Maar ik weet niet goed of hier een doelgroep voor is, of eigenlijk bedoel ik of die doelgroep de prijs wil betalen. Wellicht is het iets voor medische afdelingen als monitor voor patiënten?",
    comment3: "* Voor die hele uitgebouwde setup denk ik juist dat het weer niet gebruikt gaat worden, dan kun je net zo goed een wat minder handzaam formaat camera nemen met meer opties. Meer zoals die foto met die moutainbiker (dus ergens op locatie ipv in een studio) of ergens in het dak op een mount bij een concert. Just waar ruimte beperkt is maar je wel een goede kwaliteit lens wil gebruiken. En dat wordt gesteund doordat ze zo met de PoE adverteren."
}
    for (const property in commentaren) {
        console.log((`${property}: ${commentaren[property]}`))
    }
}


function showPostsInConsole() {
    console.log(getStringForPosts() + getStringForAuthors() + getStringForComments())
}
showPostsInConsole()

function showPostsInConsole2(){
    console.log(getStringForPosts2() + getStringForAuthors2() + getStringForComments2())
}
showPostsInConsole2()