// Declare Constants
const TIFFINS_MENU_ITEMS = [
  { name: "PLAIN DOSA", price: 40 },
  { name: "KARAM DOSA", price: 50 },
  { name: "MASALA DOSA", price: 50 },
  { name: "ONION DOSA", price: 60 },
  { name: "GHEE DOSA", price: 50 },
  { name: "GHEE KARAM DOSA", price: 60 },
  { name: "GHEE MASALA DOSA", price: 60 },
  { name: "GHEE ONION DOSA", price: 70 },
  { name: "BAJJI", price: 30 },
  { name: "IDLI", price: 40 },
  { name: "IDLI SAMBAR", price: 45 },
  { name: "POORI", price: 60 },
  { name: "UGGANI BAJJI", price: 50 },
  { name: "COLOR RICE, BAJJI", price: 50 },
  { name: "CUT MIRCHI", price: 40 }
];

const SNACKS_MENU_ITEMS = [
  { name: "SALTED FRENCH FRIES", price: 70 },
  { name: "PERI PERI FRIES", price: 80 },
  { name: "MASALA FRIES", price: 90 },
  { name: "", price: "" },
  { name: "SWEET CORN", price: 40 },
  { name: "BUTTER SWEET CORN", price: 60 },
  { name: "MASALA BUTTER SWEET CORN", price: 70 },
  { name: "", price: "" },
  { name: "SAMOSA", price: 20 },
  { name: "POTATO TORNADO", price: 60 },
  { name: "VEG FINGERS", price: 70 },
  { name: "VEG NUGGETS", price: 80 },
  { name: "VEG ALOO TIKKI", price: 90 },
  { name: "VEG LOLLIPOP", price: 90 },
  { name: "VEG SANDWICH", price: 100 },
  { name: "VEG BURGER", price: 110 },
  { name: "", price: "" },
  { name: "CHICKEN FINGERS", price: 80 },
  { name: "CHICKEN NUGGETS", price: 90 },
  { name: "CHICKEN POPCORN", price: 90 },
  { name: "CHICKEN MEAT BALLS", price: 100 },
  { name: "CHICKEN BITES", price: 110 },
  { name: "CHICKEN BURGER", price: 120 },
  { name: "CHICKEN SPICY WINGS", price: 130 }
];

const COFFEE_MENU_ITEMS = [
  { name: "JAGGERY MILK", price: 30 },
  { name: "COFFEE", price: 25 },
  { name: "BOOST", price: 25 },
  { name: "HORLICKS", price: 25 },
  { name: "LEMON TEA", price: 25 },
  { name: "GREEN TEA", price: 25 },
  { name: "MILK", price: 25 },
  { name: "RAGI MALT", price: 25 },
  { name: "BADAM MILK", price: 25 },
  { name: "IRANI CHAI", price: 20 }
];

const JUICES_MENU_ITEMS = [
  { name: "COCONUT", price: "40 / 50" },
  { name: "NANNARI", price: 40 },
  { name: "MOSAMBI", price: 45 },
  { name: "LEMON SODA (SWEET & SALT)", price: 50 },
  { name: "BANANA", price: 50 },
  { name: "MUSKMELON", price: 55 },
  { name: "WATERMELON", price: 55 },
  { name: "SAPOTA", price: 55 },
  { name: "PINE APPLE", price: 55 }
];

const MOCKTAILS_MENU_ITEMS = [
  { name: "MOJITO", price: 80 },
  { name: "BLUE CURACOO", price: 80 },
  { name: "RED CURACOO", price: 80 },
  { name: "GREEN APPLE", price: 80 },
  { name: "LEMON TWIST", price: 70 },
  { name: "GINGER & LIME", price: 70 },
  { name: "KALA KHATTA", price: 70 },
  { name: "ORANGE", price: 70 },
  { name: "WATERMELON", price: 70 },
  { name: "STRAWBERRY", price: 70 }
];

const CONES_MENU_ITEMS = [
  { name: "PISTA", price: 0 },
  { name: "STRAWBERRY", price: 0 },
  { name: "CHOCOLATE", price: 0 },
  { name: "BUTTERSCOTCH", price: 0 },
  { name: "KULFI STICK", price: 0 },
  { name: "FRUIT BISCUIT", price: 0 },
  { name: "BELGIUM DARK CHOCOLATE", price: 0 },
  { name: "BLACK CURRENT", price: 0 }
];

const SCOOPS_MENU_ITEMS = [
  { name: "VANILLA", price: 50 },
  { name: "STRAWBERRY", price: 50 },
  { name: "BUTTERSCOTCH", price: 60 },
  { name: "CARAMEL NUTS", price: 80 },
  { name: "BLACK CURRENT", price: 90 },
  { name: "DRY FRUITS TEMPTATION", price: 90 },
  { name: "BELGIUM DARK CHOCOLATE", price: 100 }
];

// Constants are created above. below is the required logic.

// Show the menu modal when a category is clicked
function showMenu(category) {
  var menuContent = document.getElementById("menuContent");
  menuContent.innerHTML = ""; // Clear previous content

  // Set the category name as the heading text
  var modelHeading = document.getElementById("modelHeading");
  modelHeading.textContent = getCategoryName(category); // You need to define getCategoryName function to get the category name based on category
  
  // Simulate fetching menu items from a server based on category
  var menuItems = getMenuItems(category);

  menuItems.forEach(function(item) {
    var menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    var menuItemName = document.createElement("span");
    menuItemName.textContent = item.name;
    menuItemName.classList.add("menu-item-name");

    var menuItemPrice = document.createElement("span");
    if (item.price === 0 || item.price === "") {
		menuItemPrice.textContent = "";
	}
	else {
		menuItemPrice.textContent = "₹" + item.price;
	}
	menuItemName.classList.add("menu-item-price");

    menuItem.appendChild(menuItemName);
    menuItem.appendChild(menuItemPrice);

    menuContent.appendChild(menuItem);
  });

  var menuModal = document.getElementById("menuModal");
  menuModal.style.display = "block";

  // Close the modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target == menuModal) {
      closeMenu();
    }
  };
}

// Close the menu modal
function closeMenu() {
  document.getElementById("menuModal").style.display = "none";
}

// Simulated menu items data
function getMenuItems(category) {
  if (category === "tiffins") {
    return TIFFINS_MENU_ITEMS;
  } else if (category === "snacks") {
    return SNACKS_MENU_ITEMS;
  } else if (category === "coffee") {
    return COFFEE_MENU_ITEMS;
  } else if (category === "juices") {
    return JUICES_MENU_ITEMS;
  } else if (category === "mocktails") {
    return MOCKTAILS_MENU_ITEMS;
  } else if (category === "cones") {
    return CONES_MENU_ITEMS;
  } else if (category === "scoops") {
    return SCOOPS_MENU_ITEMS;
  } else {
    return []; // Empty array if category not found
  }
}

// Simulated Category Name data
function getCategoryName(category) {
  if (category === "tiffins") {
    return "TIFFINS";
  } else if (category === "snacks") {
    return "SNACKS";
  } else if (category === "coffee") {
    return "COFFEE / TEA";
  } else if (category === "juices") {
    return "FRESH JUICES";
  } else if (category === "mocktails") {
    return "MOCKTAILS";
  } else if (category === "cones") {
    return "ICE CREAMS - CONES";
  } else if (category === "scoops") {
    return "ICE CREAMS - SCOOPS";
  } else {
    return ""; // Empty string if category not found
  }
}
