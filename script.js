'use strict'


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
    setupDialogEvents();
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

function setupDialogEvents(){
    document.getElementById('myDialog').onclick = function(event){
        if(event.target === document.getElementById('myDialog')){
            closeDialog();
        }
    }
    document.addEventListener('keydown', handleKeyPress);
}

function openDialog(index) {
    currentImageIndex = index; 
    document.getElementById('dialogImage').src = MYIMAGES[index];
    document.getElementById('dialogbox_caption').textContent = MYIMAGESCAPTION[index];
    document.getElementById('myDialog').showModal();
}

function closeDialog() {
    document.getElementById('myDialog').close();
    document.removeEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
        previousImage();
    }
    if (event.key === 'ArrowRight') {
        nextImage();
    }
    if (event.key === 'Escape') {
        closeDialog();
    }
}

function nextImage() {
    if (currentImageIndex === MYIMAGES.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = currentImageIndex + 1;
    }
    updateDialog();
}

function previousImage() {
    if (currentImageIndex === 0) {
        currentImageIndex = MYIMAGES.length - 1;
    } else {
        currentImageIndex = currentImageIndex - 1;
    }
    updateDialog();
}

function updateDialog() {
    document.getElementById('dialogImage').src = MYIMAGES[currentImageIndex];
    document.getElementById('dialogbox_caption').textContent = MYIMAGESCAPTION[currentImageIndex];
}

