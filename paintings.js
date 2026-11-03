// ---------------------------------------------------------------
// Everything you might want to change lives in this file.
// (Claude updates it for you when you add or sell paintings.)
// ---------------------------------------------------------------

const SITE = {
  name: "Shruti Prakash Art",
  tagline: "Watercolor landscapes, cityscapes & quiet moments",
  email: "shruti.prakash@gmail.com",
  heroImage: "images/img_6145.jpg", // the large painting at the top of the page
  heroCaption: "Ghar: This is where I began…", // the words under it
  instagram: "", // optional, e.g. "https://instagram.com/yourname"
};

// The groups, in the order they appear on the page.
// open: true means the group starts expanded when someone arrives.
// description is shown at the top of the group when it's opened.
const GROUPS = [
  {
    id: "cityscapes",
    title: "Cityscapes",
    description: "Streets, rooftops, and quiet alleyways. These pieces come together from snapshots on my phone, striking scenes I’ve stumbled across, or techniques from artists I admire. They might start with someone else’s perspective or a simple reference photo, but by the time the paint dries, they’re translated through my own eyes, my brush, and my favorite color mixes.",
  },
  {
    id: "landscapes",
    title: "Landscapes",
    description: "To be honest, landscapes intimidate me. Standing in front of vast horizons, open skies, and towering trees, it feels nearly impossible to translate that kind of beauty onto a flat sheet of paper. But I’m trying anyway! Think of this collection as my ongoing conversation with the great outdoors—imperfect, experimental, and working toward that “one day.”",
  },
  {
    id: "still-life",
    title: "Still Life & More",
    description: "My everyday playground. No rigid rules or grand themes here—just pure whim. A piece of fruit on the counter, an interesting ceramic mug, or whatever small, quirky thing caught my eye that morning. It’s where I go when I just want to play with color and paint purely for the joy of it.",
  },
  {
    id: "travel-journal",
    title: "Travel Journal",
    description: "Most of these were painted on the move—balancing a travel tin on a rattling train, killing time at an airport gate, or revisiting a snapshot that refused to leave my mind once I got home. Alongside the sketches, I’ve jotted down little journal entries: what made that place unforgettable, the stories behind the scenes, and how it felt to sit right there in that moment.",
  },
];

// Your paintings, in the order they appear within each group.
// No prices or "Available" labels are shown. Set status to "Sold" to mark one as sold.
// size is optional; add one (e.g. size: "12 × 16 in") to show it.
const PAINTINGS = [
  // ----- Cityscapes -----
  { image: "images/img_9852.jpg", group: "cityscapes", title: "Old Town Street", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/1098273_10100596715080119_1041762224_n.jpg", group: "cityscapes", title: "Ferry Building and Streetcar", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/5490_628836414749_12808515_36285774_5151343_n.jpg", group: "cityscapes", title: "Balcony with Ironwork", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_6464.jpg", group: "cityscapes", title: "Arches and a Bicycle", medium: "Watercolor on paper", status: "Available", description: "Warm sandstone arches and a bicycle resting in the afternoon shade." },
  { image: "images/img_9187.jpg", group: "cityscapes", title: "Chinatown, San Francisco", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_6144.jpg", group: "cityscapes", title: "Heritage Building", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_8772.jpg", group: "cityscapes", title: "The Tunnel", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/dsc_0516.jpg", group: "cityscapes", title: "The Old Château", medium: "Watercolor on paper", status: "Available", description: "Weathered stone towers reflected in the water at their feet." },
  { image: "images/img_8773.jpg", group: "cityscapes", title: "Bridge in the Old Town", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_8775.jpg", group: "cityscapes", title: "Autumn Street", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_8769.jpg", group: "cityscapes", title: "Rock-Cut Caves", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_1416.jpg", group: "cityscapes", title: "Buddha in the Cave Temple", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_3622.jpg", group: "cityscapes", title: "Palace with the Cannon", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/n12808515_35377349_6803366.jpg", group: "cityscapes", title: "Sunlit Courtyard", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_5739.jpg", group: "cityscapes", title: "The Gate at Home", medium: "Watercolor on paper", status: "Available", description: "" },

  // ----- Landscapes -----
  { image: "images/img_7335.jpg", group: "landscapes", title: "Misty Lake", medium: "Watercolor on paper", status: "Available", description: "Soft morning mist settling over still water and a quiet shoreline." },
  { image: "images/img_8771.jpg", group: "landscapes", title: "Evening on the Beach", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_8776.jpg", group: "landscapes", title: "Boats on the Shore", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/dsc_0712.jpg", group: "landscapes", title: "Valley Below the Snow Peaks", medium: "Watercolor on paper", status: "Available", description: "A winding path through a green valley toward snow-capped mountains." },
  { image: "images/dsc_0701.jpg", group: "landscapes", title: "Mountain Lake in Autumn", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_9537.jpg", group: "landscapes", title: "Mountain Road", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_2773.jpg", group: "landscapes", title: "Pines and Peaks", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_2784.jpg", group: "landscapes", title: "Winter Fence", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/n12808515_35377351_7546264.jpg", group: "landscapes", title: "Palms and a Houseboat", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/24867_661479278189_12808515_37410456_6691914_n.jpg", group: "landscapes", title: "Cottage in the Garden", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/n12808515_30111728_5365.jpg", group: "landscapes", title: "Barn Under a Stormy Sky", medium: "Watercolor on paper", status: "Available", description: "" },

  // ----- Still Life & More -----
  { image: "images/img_8770.jpg", group: "still-life", title: "Roosters", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_8774.jpg", group: "still-life", title: "Geraniums by the Window", medium: "Watercolor on paper", status: "Available", description: "Pink geraniums in the light of a lace-curtained window." },
  { image: "images/img_4081.jpg", group: "still-life", title: "Succulent", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/coffee.jpg", group: "still-life", title: "Morning Coffee", medium: "Watercolor on paper", status: "Available", description: "A cappuccino and the morning paper." },
  { image: "images/img_4677.jpg", group: "still-life", title: "Tulips and Teacup", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_8243.jpg", group: "still-life", title: "The Old Suitcase", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_9536.jpg", group: "still-life", title: "Stone Window with Flowers", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/mystery.jpg", group: "still-life", title: "Mystery", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_6468.jpg", group: "still-life", title: "Ganesha", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_4078.jpg", group: "still-life", title: "Calla Lilies", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/dsc_0726.jpg", group: "still-life", title: "Autumn at the Window", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_6292.jpg", group: "still-life", title: "Woman in a Blue Shawl", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/dsc_0732.jpg", group: "still-life", title: "Village Woman with Water Pots", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_8829.jpg", group: "still-life", title: "Roses in Crystal", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_7796.jpg", group: "still-life", title: "Tangerine", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/flowers.jpg", group: "still-life", title: "Hollyhocks", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_8256.jpg", group: "still-life", title: "Glass Jar", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/img_4090.jpg", group: "still-life", title: "Sneakers by the Sea", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_7784.jpg", group: "still-life", title: "Bananas and Peppers", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/5490_628836409759_12808515_36285773_3319403_n.jpg", group: "still-life", title: "Girl in a Sun Hat", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/5490_628836439699_12808515_36285779_2830022_n.jpg", group: "still-life", title: "Red Rose", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/5490_628836444689_12808515_36285780_6884502_n.jpg", group: "still-life", title: "Pink Rose", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/5490_628836434709_12808515_36285778_4710100_n.jpg", group: "still-life", title: "Heliconias in a Glass Vase", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/n12808515_35377352_7322694.jpg", group: "still-life", title: "Hydrangeas", medium: "Watercolor on paper", status: "Available", description: "" },
  { image: "images/n12808515_35377356_2026953.jpg", group: "still-life", title: "Books, Tea and Plums", medium: "Watercolor on paper", status: "Available", description: "" },

  // ----- Travel Journal (in page order) -----
  { image: "images/img_6108.jpg", group: "travel-journal", title: "Farmland at Mandar Hill", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6109.jpg", group: "travel-journal", title: "An Old Red House", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6110.jpg", group: "travel-journal", title: "Fort Overlooking the Ganges", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6111.jpg", group: "travel-journal", title: "The Temple Bell, BHU Campus", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6112.jpg", group: "travel-journal", title: "Hazaribagh House", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6113.jpg", group: "travel-journal", title: "Kitchen Corner", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6114.jpg", group: "travel-journal", title: "Nalanda Ruins", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6116-1.jpg", group: "travel-journal", title: "Hotel at Bodh Gaya", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6117-1.jpg", group: "travel-journal", title: "Tilkut Stand on the Way to Bodh Gaya", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6118.jpg", group: "travel-journal", title: "Yakshini, Patna Museum", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6120.jpg", group: "travel-journal", title: "Through the Arches", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6121.jpg", group: "travel-journal", title: "Steps by the Ghat", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6122.jpg", group: "travel-journal", title: "Puppies Warming Up on the Ganga Path", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6123.jpg", group: "travel-journal", title: "Somewhere on the Ganga Path", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6124.jpg", group: "travel-journal", title: "Darbhanga House, Patna University", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6125.jpg", group: "travel-journal", title: "Golghar, Patna", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6145.jpg", group: "travel-journal", title: "Ghar", medium: "Watercolor in sketchbook", status: "Available", description: "Home: a white house with its terrace garden." },
  { image: "images/img_6126.jpg", group: "travel-journal", title: "Chai Stall at Ganpatipule", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6127.jpg", group: "travel-journal", title: "An Old Temple of Sitaji", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6128.jpg", group: "travel-journal", title: "The Abandoned Fort", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6129.jpg", group: "travel-journal", title: "The Old Military Fort", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6130.jpg", group: "travel-journal", title: "The Path to West Bay, Ganpatipule", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6131.jpg", group: "travel-journal", title: "A Roadside Stop", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6133.jpg", group: "travel-journal", title: "Ramnagar Fort, Banaras", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6139.jpg", group: "travel-journal", title: "Roadside Fruit Stand", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6138.jpg", group: "travel-journal", title: "Courtyard in Hazaribagh", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6140.jpg", group: "travel-journal", title: "Ramnagar Fort Gateway", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6142.jpg", group: "travel-journal", title: "Ara Junction", medium: "Watercolor in sketchbook", status: "Available", description: "As seen from the train to Banaras." },
  { image: "images/img_6136.jpg", group: "travel-journal", title: "Hilltop Temple, Rajgir", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6137.jpg", group: "travel-journal", title: "Village on the Drive to Rajgir", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_3602.jpg", group: "travel-journal", title: "Hanuman Mandir & Masjid, Patna", medium: "Watercolor in sketchbook", status: "Available", description: "" },
  { image: "images/img_6135.jpg", group: "travel-journal", title: "Elephanta Caves, Bombay", medium: "Watercolor in sketchbook", status: "Available", description: "" },
];
