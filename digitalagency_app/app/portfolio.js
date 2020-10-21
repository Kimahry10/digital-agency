let date = new Date();
let y = date.getFullYear()
let m = date.getMonth()
let d = date.getDay()

let generateRandomDay = Math.floor(Math.random() * 31) + 1
let generateRandommonth = Math.floor(Math.random() * 12) + 1
let generateRandomyear = Math.floor(Math.random() * 5) + 2016 // jaar tussen 2016 en nu

console.log(`
    ==========================================
    |               PORTFOLIO                |
    ==========================================
`)

function getStringForProjects() {
    let project = {
        titel: `
    =====================================
    |               ShareTevelde         |
    =====================================
    
    `,
        sypnosis: "Hoe kunnen we in tijden van corona aan de hand van een webapplicatie toch",
        thumbnailUrl: "https://dl.airtable.com/.attachments/2e7bdd9a37dc4a4242ecc8e1f35b0ddc/fdd1ad46/Screenshot_2020-05-24ReactApp4.png",
        aantalLikes: Math.floor((Math.random() * 2000) + 1),
        aantalViews: Math.floor((Math.random() * 5000) + 2000), // +2000 omdat likes nooit hoger kan zijn dan views
        datumVanAanmaak: generateRandomyear + "-" + generateRandommonth + "-" + generateRandomDay,
        datumVanModificatie: date
    }

    for (const property in project) {
        console.log((`${property}: ${project[property]}`))
    }
}
function getStringForAssets() {
    console.log(`
    ==========================================
    |               Assets                |
    ==========================================
`)
    let assets = {
        asset1: {
            titel: "ShateTevelde image 001",
            type: "image",
            sourceUrl: "https://dl.airtable.com/.attachments/2e7bdd9a37dc4a4242ecc8e1f35b0ddc/fdd1ad46/Screenshot_2020-05-24ReactApp4.png"
        },
        asset2: {
            titel: "ShateTevelde image 002",
            type: "image",
            sourceUrl: "https://dl.airtable.com/.attachments/fa66c8d53b164e4af522735232d136de/4631ce0c/Screenshot_2020-05-24ReactApp1.jpg"
        },
        asset3: {
            titel: "ShateTevelde image 003",
            type: "image",
            sourceUrl: "https://dl.airtable.com/.attachments/0950324598e5c50f4015979654f20163/f2a25ce0/Screenshot_2020-05-24ReactApp1.png"
        }
    }
    for (const prop in assets.asset1) {
        console.log(`${prop}: ${assets.asset1[prop]}`);
    }
    for (const prop in assets.asset2) {
        console.log(`${prop}: ${assets.asset2[prop]}`);
    }
    for (const prop in assets.asset3) {
        console.log(`${prop}: ${assets.asset3[prop]}`);
    }
}
function showProjectsInConsole() {
    console.log(getStringForProjects() + getStringForAssets())
}
showProjectsInConsole()


function getStringForProjects2() {
    let project2 = {
        titel: `
    =====================================
    |               Skive               |
    =====================================
    `,
        sypnosis: "Skive is een platform waar muziekfanaten hun favoriete muziek kunnen delen",
        thumbnailUrl: "https://dl.airtable.com/.attachments/701dd616bd7a4a4298b077b9c79ffe56/15aeeb50/Schermafbeelding2020-05-16om09.47.11.png",
        aantalLikes: Math.floor((Math.random() * 1000) + 1),
        aantalViews: Math.floor((Math.random() * 5000) + 1000), // +2000 omdat likes nooit hoger kan zijn dan views
        datumVanAanmaak: generateRandomyear + "-" + generateRandommonth + "-" + generateRandomDay,
        datumVanModificatie: date
    }
    for (const property in project2) {
        console.log((`${property}: ${project2[property]}`))
    }
}

function getStringForAssets2() {
    console.log(`
    ==========================================
    |               Assets                |
    ==========================================
`)
    let assets = {
        asset1: {
            titel: "Skive image 001",
            type: "image",
            sourceUrl: "https://dl.airtable.com/.attachments/701dd616bd7a4a4298b077b9c79ffe56/15aeeb50/Schermafbeelding2020-05-16om09.47.11.png"
        },
        asset2: {
            titel: "Skive image 002",
            type: "image",
            sourceUrl: "https://dl.airtable.com/.attachments/24b31d875c54dabf3e1c0db2ba01f2ae/5e55d2c8/Schermafbeelding2020-05-16om09.49.28.png"
        },
        asset3: {
            titel: "Skive image 003",
            type: "image",
            sourceUrl: "https://dl.airtable.com/.attachments/2887017db73fe88028b75fb8d34d8477/ec1ab497/Schermafbeelding2020-05-16om09.49.37.png"
        }
    }
    for (const prop in assets.asset1) {
        console.log(`${prop}: ${assets.asset1[prop]}`);
    }
    for (const prop in assets.asset2) {
        console.log(`${prop}: ${assets.asset2[prop]}`);
    }
    for (const prop in assets.asset3) {
        console.log(`${prop}: ${assets.asset3[prop]}`);
    }
}


function showProjectsInConsole2() {
    console.log(getStringForProjects2() + getStringForAssets2())
}
showProjectsInConsole2()