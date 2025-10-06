document.addEventListener('DOMContentLoaded', () => {
   const images = [
    {src: "img/art-hippie-van-flowers.jpg", alt: "Art Hippie Van Flowers", caption: "Art Hippie Van Flowers"},
    {src: "img/asia-buddha-temple.jpg", alt: "Buddha Statue Temple", caption: "Buddha Statue Temple"},
    {src: "img/beach-grass-view-sunset.jpg", alt: "Tropical Beach View", caption: "Tropical Beach View"},
    {src: "img/beach-maldives-palm-chairs.jpg", alt: "Beachs Palm Chairs", caption: "Beachs Palm Chairs"},
    {src: "img/beach-turkey-oludeniz.jpg", alt: "Ölüdeniz Beach Turkey", caption: "Ölüdeniz Beach Turkey"},
    {src: "img/christmas-room.jpg", alt: "Cozy room decorated fro Chrismus", caption: "Cozy Christmas Room"},
    {src: "img/city-italy-cinque-terre.jpg", alt: "Cinque Terre Colorful Hiuses", caption: "Cinque Terre Colorful Hiuses"},
    {src: "img/city-norway-trondheim-houses.jpg", alt: "Trondheim Houses Water", caption: "Trondheim Houses Water"},
    {src: "img/city-prague-tram-autumn.jpg", alt: "City Transport Path", caption: "City Transport path"},
    {src: "img/fantasy-open-book-dog-umbrella.jpg", alt: "Book Imagination Open", caption: "Book Imagination Open"},
    {src: "img/frog-holiday-deckchair.jpg", alt: "Frog Relaxing Chair", caption: "Frog Relaxing Chair"},
    {src: "img/frog-travel-suitcase.jpg", alt: "Frog Travel luggage", caption: "Frog Travel luggage"},
    {src: "img/funny-frog-under-leaf-umbrella.jpg", alt: "A bright green frog sitting on a tropical leaf", caption: "Frog sitting on a tropical leaf"},
    {src: "img/funny-frogs-beach-party.jpg", alt: "Frogs Beach party", caption: "Frogs Beach party"},
    {src: "img/greece-zakynthos-navagio-beach.jpg", alt: "Navagio Beach Greece", caption: "Navagio Beach Greece"},
    {src: "img/hand-holding-old-book.jpg", alt: "Hand Holding Old Book", caption: "Hand Holding Old Book"},
    {src: "img/history-egypt-hieroglyphs.jpg", alt: "Egyptian Hieroglyphs Wall", caption: "Egyptian Hieroglyphs Wall"},
    {src: "img/landmark-mexico-soumaya-museum.jpg", alt: "Soumaya Museum Mexico", caption: "Soumaya Museum Mexico"},
    {src: "img/landmark-monochrome-lighthouse.jpg", alt: "Black and White Lighthouse", caption: "Black and White Lighthouse"},
    {src: "img/nature-alps-lake-village.jpg", alt: "Alpine Lake Village", caption: "Alpine Lake Village"},
    {src: "img/nature-alps-waterfall-river.jpg", alt: "Waterfall nature View", caption: "Waterfall nature View"},
    {src: "img/nature-brown-butterfly.jpg", alt: "Brown butterfly Leaf", caption: "Brown butterfly Leaf"},
    {src: "img/nature-floating-green-leaf.jpg", alt: "Floating Green Leaf", caption: "Floating Green Leaf"},
    {src: "img/nature-huge-angel-oak-tree.jpg", alt: "Huge Angel Oak Tree", caption: "Huge Angel Oak Tree"},
    {src: "img/nature-mossy-tree-avenue.jpg", alt: "", caption: "Mossy Tree Avenue Path"},                                                                                        
    {src: "img/nature-multnomah-waterfall.jpg", alt: "multnomah Waterfall Bridge", caption: "multnomah Waterfall Bridge"},
    {src: "img/nature-stone-circle-hills.jpg", alt: "Green landscape Stones", caption: "Green landscape Stones"},
    {src: "img/orange-balloons-blue-sky.jpg", alt: "Orange Ballons Sky", caption: "Orange Ballons Sky"},
    {src: "img/people-couple-kiss-sunset.jpg", alt: "Couple kissing Sunset", caption: "Couple kissing Sunset"},
    {src: "img/sea-cave-beach-entrance.jpg", alt: "Sea Cave Entrance", caption: "Sea Cave Entrance"},
    {src: "img/travel-vietnam-golden-bridge.jpg", alt: "Golden Bridge Vietnam", caption: "Golden Bridge Vietnam"},
    {src: "img/travel-zanzibar-rock-restaurant.jpg", alt: "Rock Restaurant Zanzibar", caption: "Rock Restaurant Zanzibar"},
    {src: "img/tropical-beach-waves-tree.jpg", alt: "Tropical Beach Waves Tree", caption: "Tropical Beach Waves Tree"},
    {src: "img/venice-bridge-of-sighs-boat.jpg", alt: "Venice Canal Bridge", caption: "Venice Canal Bridge"},
  ];

const galleryContainer = document.getElementById('gallery-container');
let galleryHTML = ''; // Leerer String, um den gesamten HTML-Code zu speichern
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('lightbox-close');



images.forEach(image => {
        galleryHTML += `
            <div class="gallery_item">
                <img src="${image.src}" alt="${image.alt}">
                <p class="caption">${image.caption}</p>
            </div>
        `;
    });
    
    galleryContainer.innerHTML = galleryHTML; 

    const galleryItems = document.querySelectorAll('.gallery_item img');
    
    galleryItems.forEach(image => {
    image.addEventListener('click', () => {
            lightboxImage.src = image.src; 
            lightbox.style.display = 'flex'; 
            });
        });
   closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none'; 
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
            lightbox.style.display = 'none';
        }
    });

});