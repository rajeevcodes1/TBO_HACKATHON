const vendors = [
  {
    name: "Aurora Events",
    rating: 4.9,
    category: "Luxury weddings",
    location: "Goa",
    tags: ["Bespoke design", "Beachfront"]
  },
  {
    name: "Summit MICE Co.",
    rating: 4.8,
    category: "Corporate meetings",
    location: "Singapore",
    tags: ["Hybrid AV", "Global network"]
  },
  {
    name: "Velvet Trails",
    rating: 4.8,
    category: "Destination weddings",
    location: "Udaipur",
    tags: ["Palace venues", "Heritage"]
  },
  {
    name: "Vista Incentives",
    rating: 4.7,
    category: "Incentive travel",
    location: "Bali",
    tags: ["Rewards", "Wellness"]
  },
  {
    name: "Opal Exhibits",
    rating: 4.7,
    category: "Exhibitions",
    location: "Dubai",
    tags: ["Stall design", "Logistics"]
  },
  {
    name: "Sage Corporate",
    rating: 4.7,
    category: "Corporate retreats",
    location: "Coorg",
    tags: ["Team building", "Offsite"]
  },
  {
    name: "Bloom Hospitality",
    rating: 4.6,
    category: "Venue partner",
    location: "Jaipur",
    tags: ["Resorts", "Banquets"]
  },
  {
    name: "Crystal Events",
    rating: 4.6,
    category: "Production",
    location: "Delhi",
    tags: ["Stagecraft", "Lighting"]
  },
  {
    name: "Opaline Planners",
    rating: 4.6,
    category: "Concierge",
    location: "Dubai",
    tags: ["VIP handling", "Luxury"]
  },
  {
    name: "Serene Soirees",
    rating: 4.5,
    category: "Destination weddings",
    location: "Santorini",
    tags: ["Ocean views", "Ceremony"]
  }
];

const vendorGrid = document.getElementById("vendorGrid");
const selectedCount = document.getElementById("selectedCount");
const bookingForm = document.getElementById("bookingForm");
const startFlow = document.getElementById("startFlow");

const selections = new Set();

const renderVendors = () => {
  vendorGrid.innerHTML = "";
  vendors.forEach((vendor, index) => {
    const card = document.createElement("article");
    card.className = "vendor-card";

    const tags = vendor.tags
      .map((tag) => `<span class="vendor-tag">${tag}</span>`)
      .join("");

    card.innerHTML = `
      <h4>${vendor.name}</h4>
      <div class="vendor-meta">
        <span>${vendor.category}</span>
        <span>⭐ ${vendor.rating}</span>
      </div>
      <p>${vendor.location}</p>
      <div class="vendor-tags">${tags}</div>
      <button type="button" data-index="${index}">
        ${selections.has(index) ? "Selected" : "Select vendor"}
      </button>
    `;

    const button = card.querySelector("button");
    if (selections.has(index)) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      if (selections.has(index)) {
        selections.delete(index);
      } else if (selections.size < 10) {
        selections.add(index);
      }
      updateSelection();
      renderVendors();
    });

    vendorGrid.appendChild(card);
  });
};

const updateSelection = () => {
  selectedCount.textContent = selections.size.toString();
};

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const panel = document.getElementById("vendors");
  panel.scrollIntoView({ behavior: "smooth" });
});

startFlow.addEventListener("click", () => {
  document.getElementById("flow").scrollIntoView({ behavior: "smooth" });
});

renderVendors();
updateSelection();
