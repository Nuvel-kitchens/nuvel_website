/* ==========================================================================
   PROJECTS — every project on the site lives in this one list.

   HOW TO ADD A PROJECT
   1. Put the photos in assets/img/projects/<project-id>/ (e.g. 01.webp, 02.webp)
   2. Copy one of the blocks below, paste it at the TOP of the list, and edit it.
      - id:        unique, lowercase, no spaces (used in the page link)
      - category:  must match one of CATEGORIES below
      - featured:  true = shown on the home page (the first 3 featured are used)
      - cover:     main image shown in grids
      - images:    gallery shown on the project's own page
   The Projects page shows them 12 at a time with filters + search,
   so this list can grow to hundreds of projects.
   ========================================================================== */

window.PROJECT_CATEGORIES = [
  "Kitchens",
  "Built-in Wardrobes",
  "Walk-in Closets",
  "Bathroom Vanities",
  "Studies & Offices",
  "Living & Media Units"
];

window.PROJECTS = [
  {
    id: "the-cliff-house",
    title: "The Cliff House",
    location: "Hermanus, Western Cape",
    category: "Kitchens",
    year: 2025,
    featured: true,
    cover: "assets/img/project-cliff-house.webp",
    images: [
      "assets/img/project-cliff-house.webp",
      "assets/img/hero-living-fireplace.webp",
      "assets/img/advisory-bowl.webp",
      "assets/img/texture-stone.webp"
    ],
    summary: "A sculpted kitchen in smoked oak and Nero marble, opening onto an ocean-edge terrace.",
    description: "Full-height smoked-oak cabinetry with integrated appliances, a 4.2 m Nero Marquina island with waterfall ends, and handle-less push-to-open drawers throughout. A concealed scullery and pantry run behind flush panel doors, keeping the open-plan living space calm and uncluttered.",
    materials: "Smoked oak veneer, Nero Marquina marble, brushed bronze",
    duration: "14 weeks"
  },
  {
    id: "parkview-residence",
    title: "Parkview Residence",
    location: "Sandton, Johannesburg",
    category: "Living & Media Units",
    year: 2025,
    featured: true,
    cover: "assets/img/project-parkview.webp",
    images: [
      "assets/img/project-parkview.webp",
      "assets/img/interior-sofa.webp",
      "assets/img/bespoke-chair.webp"
    ],
    summary: "Floor-to-ceiling walnut joinery framing a marble fireplace and city views.",
    description: "A bespoke media and library wall in book-matched walnut with LED-lit display niches, concealed AV storage and a cantilevered marble hearth. Every joint was hand-finished in our workshop before installation.",
    materials: "American walnut, Emperador marble, LED profile lighting",
    duration: "10 weeks"
  },
  {
    id: "the-horizon-villa",
    title: "The Horizon Villa",
    location: "Plettenberg Bay",
    category: "Built-in Wardrobes",
    year: 2024,
    featured: true,
    cover: "assets/img/project-horizon-villa.webp",
    images: [
      "assets/img/project-horizon-villa.webp",
      "assets/img/architecture-house.webp",
      "assets/img/interior-sofa.webp"
    ],
    summary: "Linen-textured wardrobes and oak screens for a coastal family retreat.",
    description: "Six bedrooms of built-in wardrobes with linen-textured lacquer doors, oak slatted screens and soft-close internal drawers. Each wardrobe interior was planned around the owners' wardrobe inventory.",
    materials: "Textured lacquer, natural oak, leather pulls",
    duration: "12 weeks"
  },
  {
    id: "bronze-dressing-room",
    title: "The Bronze Dressing Room",
    location: "Constantia, Cape Town",
    category: "Walk-in Closets",
    year: 2024,
    featured: false,
    cover: "assets/img/interior-sofa.webp",
    images: ["assets/img/interior-sofa.webp", "assets/img/bespoke-chair.webp", "assets/img/advisory-bowl.webp"],
    summary: "A boutique-style walk-in closet with glass-fronted display and a central island.",
    description: "Bronze-tinted glass doors, suede-lined jewellery drawers and a marble-topped dressing island with integrated lighting.",
    materials: "Bronze glass, suede, Emperador marble",
    duration: "8 weeks"
  },
  {
    id: "stone-vanity-suite",
    title: "Stone Vanity Suite",
    location: "Umhlanga, KwaZulu-Natal",
    category: "Bathroom Vanities",
    year: 2024,
    featured: false,
    cover: "assets/img/advisory-bowl.webp",
    images: ["assets/img/advisory-bowl.webp", "assets/img/texture-stone.webp"],
    summary: "Floating double vanity in moisture-resistant oak with a solid stone top.",
    description: "Wall-hung vanity units with hidden drawer pulls, a hand-honed stone top and recessed mirrored storage.",
    materials: "Marine-grade oak, honed stone, brushed brass",
    duration: "5 weeks"
  },
  {
    id: "the-writers-study",
    title: "The Writer's Study",
    location: "Stellenbosch",
    category: "Studies & Offices",
    year: 2024,
    featured: false,
    cover: "assets/img/bespoke-chair.webp",
    images: ["assets/img/bespoke-chair.webp", "assets/img/craft-hands.webp"],
    summary: "Curved walnut shelving and a built-in desk with concealed cable management.",
    description: "A steam-bent walnut library wall, ladder rail, and a built-in desk with leather inlay and hidden filing.",
    materials: "Walnut, saddle leather, bronze rail",
    duration: "9 weeks"
  },
  {
    id: "hillside-kitchen",
    title: "Hillside Kitchen",
    location: "Franschhoek",
    category: "Kitchens",
    year: 2023,
    featured: false,
    cover: "assets/img/architecture-house.webp",
    images: ["assets/img/architecture-house.webp", "assets/img/project-cliff-house.webp"],
    summary: "A warm, open-plan kitchen in charred oak with a walk-in scullery.",
    description: "Charred-oak cabinetry, a full scullery with pocket doors, and a coffee station hidden behind bi-fold doors.",
    materials: "Charred oak, quartzite, blackened steel",
    duration: "11 weeks"
  },
  {
    id: "atlantic-penthouse",
    title: "Atlantic Penthouse",
    location: "Sea Point, Cape Town",
    category: "Living & Media Units",
    year: 2023,
    featured: false,
    cover: "assets/img/hero-living-fireplace.webp",
    images: ["assets/img/hero-living-fireplace.webp", "assets/img/project-parkview.webp"],
    summary: "Low-slung marble and oak media console running the length of the living room.",
    description: "A 6 m floating console with a marble top, push-to-open doors, and ventilated AV compartments.",
    materials: "Port Laurent marble, smoked oak",
    duration: "7 weeks"
  },
  {
    id: "main-suite-wardrobes",
    title: "Main Suite Wardrobes",
    location: "Waterkloof, Pretoria",
    category: "Built-in Wardrobes",
    year: 2023,
    featured: false,
    cover: "assets/img/texture-stone.webp",
    images: ["assets/img/texture-stone.webp", "assets/img/interior-sofa.webp"],
    summary: "His-and-hers wardrobes with fluted doors and integrated lighting.",
    description: "Fluted oak doors, motion-sensor lighting, pull-down hanging rails and a built-in safe.",
    materials: "Fluted oak, bronze mesh, LED",
    duration: "6 weeks"
  }
];
