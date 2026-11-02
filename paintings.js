// ---------------------------------------------------------------
// Everything you might want to change lives in this file.
// (Claude updates it for you when you add or sell paintings.)
// ---------------------------------------------------------------

const SITE = {
  name: "Shruti Prakash Art",
  tagline: "Watercolor landscapes, cityscapes & quiet moments",
  email: "shrutiprakash@gmail.com",
  instagram: "", // optional, e.g. "https://instagram.com/yourname"
};

// The groups, in the order they appear on the page.
const GROUPS = [
  { id: "landscapes", title: "Landscapes" },
  { id: "cityscapes", title: "Cityscapes" },
  { id: "still-life", title: "Still Life & More" },
];

// Your paintings, in the order they appear within each group.
// No prices or "Available" labels are shown. Set status to "Sold" to mark one as sold.
const PAINTINGS = [
  {
    image: "images/dsc_0712.jpg",
    group: "landscapes",
    title: "Valley Below the Snow Peaks",
    medium: "Watercolor on paper",
    status: "Available",
    description: "A winding path through a green valley toward snow-capped mountains.",
  },
  {
    image: "images/img_7335.jpg",
    group: "landscapes",
    title: "Misty Lake",
    medium: "Watercolor on paper",
    status: "Available",
    description: "Soft morning mist settling over still water and a quiet shoreline.",
  },
  {
    image: "images/dsc_0516.jpg",
    group: "cityscapes",
    title: "The Old Château",
    medium: "Watercolor on paper",
    status: "Available",
    description: "Weathered stone towers reflected in the water at their feet.",
  },
  {
    image: "images/img_6464.jpg",
    group: "cityscapes",
    title: "Arches and a Bicycle",
    medium: "Watercolor on paper",
    status: "Available",
    description: "Warm sandstone arches and a bicycle resting in the afternoon shade.",
  },
  {
    image: "images/img_6133.jpg",
    group: "cityscapes",
    title: "Ramnagar Fort, Banaras",
    medium: "Watercolor in sketchbook",
    status: "Available",
    description: "",
  },
  {
    image: "images/img_6127.jpg",
    group: "cityscapes",
    title: "An Old Temple of Sitaji",
    medium: "Watercolor in sketchbook",
    status: "Available",
    description: "",
  },
  {
    image: "images/img_6145.jpg",
    group: "cityscapes",
    title: "Ghar",
    medium: "Watercolor in sketchbook",
    status: "Available",
    description: "Home: a white house with its terrace garden.",
  },
  {
    image: "images/img_8774.jpg",
    group: "still-life",
    title: "Geraniums by the Window",
    medium: "Watercolor on paper",
    status: "Available",
    description: "Pink geraniums in the light of a lace-curtained window.",
  },
  {
    image: "images/dsc_0726.jpg",
    group: "still-life",
    title: "Autumn at the Window",
    medium: "Watercolor on paper",
    status: "Available",
    description: "",
  },
  {
    image: "images/img_6468.jpg",
    group: "still-life",
    title: "Ganesha",
    medium: "Watercolor on paper",
    status: "Available",
    description: "",
  },
  {
    image: "images/coffee.jpg",
    group: "still-life",
    title: "Morning Coffee",
    medium: "Watercolor on paper",
    status: "Available",
    description: "A cappuccino and the morning paper.",
  },
];
