'use strict'



//Variable als Array erstellen wo wir unsere Bilder speichen
const MYIMAGES = [
    "img/art-hippie-van-flowers.jpg",         
    "img/nature-multnomah-waterfall.jpg",          
    "img/asia-buddha-temple.jpg",            
    "img/beach-grass-view-sunset.jpg",      
    "img/beach-maldives-palm-chairs.jpg",  
    "img/christmas-room.jpg",               
    "img/beach-turkey-oludeniz.jpg",          
    "img/city-italy-cinque-terre.jpg",               
    "img/city-norway-trondheim-houses.jpg",    
    "img/city-prague-tram-autumn.jpg",      
    "img/fantasy-open-book-dog-umbrella.jpg", 
    "img/frog-holiday-deckchair.jpg",       
    "img/frog-travel-suitcase.jpg",         
    "img/nature-brown-butterfly.jpg",        
    "img/funny-frog-under-leaf-umbrella.jpg",           
    "img/nature-floating-green-leaf.jpg",   
    "img/funny-frogs-beach-party.jpg",    
    "img/greece-zakynthos-navagio-beach.jpg",
    "img/hand-holding-old-book.jpg",          
    "img/history-egypt-hieroglyphs.jpg",          
    "img/landmark-mexico-soumaya-museum.jpg", 
    "img/landmark-monochrome-lighthouse.jpg",      
    "img/nature-alps-lake-village.jpg",     
    "img/nature-alps-waterfall-river.jpg",    
    "img/nature-mossy-tree-avenue.jpg",          
    "img/nature-huge-angel-oak-tree.jpg",                                                                                        
    "img/nature-stone-circle-hills.jpg",       
    "img/orange-balloons-blue-sky.jpg",    
    "img/people-couple-kiss-sunset.jpg",      
    "img/sea-cave-beach-entrance.jpg",
    "img/travel-vietnam-golden-bridge.jpg",   
    "img/travel-zanzibar-rock-restaurant.jpg",   
    "img/tropical-beach-waves-tree.jpg",          
    "img/venice-bridge-of-sighs-boat.jpg"  
];

const MYIMAGESCAPTION = [
    "Art Hippie Van Flowers",
    "multnomah Waterfall Bridge",
    "Buddha Statue Temple",
    "Tropical Beach View",
    "Beachs Palm Chairs",
    "Cozy Christmas Room",
    "Ölüdeniz Beach Turkey",
    "Cinque Terre Colorful Hiuses",
    "Trondheim Houses Water",
    "City Transport path",
    "Book Imagination Open",
    "Frog Relaxing Chair",
    "Frog Travel luggage",
    "Brown butterfly Leaf",
    "Frog sitting on a tropical leaf",
    "Floating Green Leaf",
    "Frogs Beach party",
    "Navagio Beach Greece",
    "Hand Holding Old Book",
    "Egyptian Hieroglyphs Wall",
    "Soumaya Museum Mexico",
    "Black and White Lighthouse",
    "Alpine Lake Village",
    "Waterfall nature View",
    "Mossy Tree Avenue Path",
    "Huge Angel Oak Tree",
    "Green landscape Stones",
    "Orange Ballons Sky",
    "Couple kissing Sunset",
    "Sea Cave Entrance",
    "Golden Bridge Vietnam",
    "Rock Restaurant Zanzibar",
    "Tropical Beach Waves Tree",
    "Venice Canal Bridge"
];

const MYIMAGESALT = [ 
    "Art Hippie Van Flowers",
    "multnomah Waterfall Bridge",
    "Buddha Statue Temple",
    "Tropical Beach View",
    "Beachs Palm Chairs",
    "Cozy room decorated fro Chrismus",
    "Ölüdeniz Beach Turkey",
    "Cinque Terre Colorful Hiuses",
    "Trondheim Houses Water",
    "City Transport Path",
    "Book Imagination Open",
    "Frog Relaxing Chair",
    "Frog Travel luggage",
    "Brown butterfly Leaf",
    "A bright green frog sitting on a tropical leaf",
    "Floating Green Leaf",
    "Frogs Beach party",
    "Navagio Beach Greece",
    "Hand Holding Old Book",
    "Egyptian Hieroglyphs Wall",
    "Soumaya Museum Mexico",
    "Black and White Lighthouse",
    "Alpine Lake Village",
    "Waterfall nature View",
    "Mossy Tree Avenue Path",
    "Huge Angel Oak Tree",
    "Green landscape Stones",
    "Orange Ballons Sky",
    "Couple kissing Sunset",
    "Sea Cave Entrance",
    "Golden Bridge Vietnam",
    "Rock Restaurant Zanzibar",
    "Tropical Beach Waves Tree",
    "Venice Canal Bridge"
];


let currentImageIndex = 0;

function init() {
    renderImage();
}

function renderImage() {
    const container = document.getElementById("galleryContainer");
    let imagesHTML = '';
    
    for(let i = 0; i < MYIMAGES.length; i++) {
        imagesHTML += `
            <img src="${MYIMAGES[i]}" 
                 alt="${MYIMAGESALT[i]}" 
                 class="galleryContainer"
                 onclick="openDialog(${i})">
        `;
    }
    
    container.innerHTML = imagesHTML;
}

function openDialog(index) {
    currentImageIndex = index;
    
    document.getElementById('dialogImage').src = MYIMAGES[index];
    document.getElementById('dialogbox_caption').textContent = MYIMAGESCAPTION[index];
    
    document.getElementById('myDialog').showModal();
}

// Klick auf Hintergrund schließt Dialog
document.getElementById('myDialog').onclick = function(event) {
    //Sucht das Dialog-Element mit der ID "myDialog" 
    //Sagt: "Wenn auf dieses Element geklickt wird, dann..." Startet eine Funktion, die den Klick (event) bekommt

        if (event.target === document.getElementById('myDialog')) {
//"Ist diese Bedingung wahr?" 
// Das Element, auf das tatsächlich geklickt wurde Ist es genau dasselbe Element?" 
// Nochmal das Dialog-Element" Also: "Wurde genau auf das Dialog-Element selbst geklickt?"
            closeDialog();
        }

    }



function closeDialog() {
    document.getElementById('myDialog').close();
}

function nextImage() {
    if (currentImageIndex === MYIMAGES.length - 1) {
        // Beim letzten Bild: gehe zurück zum ersten Bild (Index 0)
        currentImageIndex = 0;
    } else {
        // Ansonsten: gehe zum nächsten Bild
        currentImageIndex = currentImageIndex + 1;
    }
    updateDialog();
}

function previousImage() {
    if (currentImageIndex === 0) {
        // Beim ersten Bild: gehe zum letzten Bild
        currentImageIndex = MYIMAGES.length - 1;
    } else {
        // Ansonsten: gehe zum vorherigen Bild
        currentImageIndex = currentImageIndex - 1;
    }
    updateDialog();
}

function updateDialog() {
    document.getElementById('dialogImage').src = MYIMAGES[currentImageIndex];
    document.getElementById('dialogbox_caption').textContent = MYIMAGESCAPTION[currentImageIndex];
}

