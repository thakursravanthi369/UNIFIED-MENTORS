// Function to toggle visibility of pages
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
  
    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
      selectedPage.style.display = 'block';
    }
  }
  
  // Admin Functions
  
  // Function to create a shop
  function createShop() {
    const shop = {
      id: 'shop1',
      name: prompt('Enter Shop Name:'),
      category: prompt('Enter Shop Category:'),
      floor: prompt('Enter Floor Number:')
    };
  
    localStorage.setItem('shop1', JSON.stringify(shop));
    alert(`Shop "${shop.name}" created successfully!`);
  }
  
  // Function to update shop details
  function updateShop() {
    const shop = JSON.parse(localStorage.getItem('shop1'));
  
    if (shop) {
      shop.name = prompt('Enter New Shop Name:', shop.name);
      shop.category = prompt('Enter New Shop Category:', shop.category);
      shop.floor = prompt('Enter New Floor Number:', shop.floor);
  
      localStorage.setItem('shop1', JSON.stringify(shop));
      alert(`Shop "${shop.name}" updated successfully!`);
    } else {
      alert('No shop found to update!');
    }
  }
  
  // Function to delete a shop
  function deleteShop() {
    const shopId = 'shop1';
    localStorage.removeItem(shopId);
    alert(`Shop "${shopId}" deleted successfully!`);
  }
  
  // Function to create an offer
  function createOffer() {
    const offer = {
      id: 'offer1',
      description: prompt('Enter Offer Description:'),
      shopId: 'shop1'
    };
  
    localStorage.setItem('offer1', JSON.stringify(offer));
    alert(`Offer created for shop "${offer.shopId}"`);
  }
  
  // Function to update an offer
  function updateOffer() {
    const offer = JSON.parse(localStorage.getItem('offer1'));
  
    if (offer) {
      offer.description = prompt('Enter New Offer Description:', offer.description);
      localStorage.setItem('offer1', JSON.stringify(offer));
      alert(`Offer updated to "${offer.description}"`);
    } else {
      alert('No offer found to update!');
    }
  }
  
  // Function to delete an offer
  function deleteOffer() {
    const offerId = 'offer1';
    localStorage.removeItem(offerId);
    alert(`Offer "${offerId}" deleted successfully!`);
  }
  
  // Function to create a category
  function createCategory() {
    const category = prompt('Enter Category Name:');
    alert(`Category "${category}" created successfully!`);
  }
  
  // Function to create a floor
  function createFloor() {
    const floor = prompt('Enter Floor Name:');
    alert(`Floor "${floor}" created successfully!`);
  }
  
  // User Functions
  
  // Function to get shops by category
  function getShopsByCategory(category) {
    const shop = JSON.parse(localStorage.getItem('shop1'));
    if (shop && shop.category === category) {
      alert(`Displaying ${category} Shop: ${shop.name}`);
    } else {
      alert(`No shops found in category: ${category}`);
    }
  }
  
  // Function to compare products
  function compareProducts() {
    const product1 = prompt('Enter first product name:');
    const product2 = prompt('Enter second product name:');
    alert(`Comparing ${product1} and ${product2}`);
  }
  
  // Function to view offers for a specific shop
  function viewOffersByShop() {
    const offer = JSON.parse(localStorage.getItem('offer1'));
    if (offer) {
      alert(`Offers for Shop: ${offer.shopId} - ${offer.description}`);
    } else {
      alert('No offers found for this shop.');
    }
  }
  
  // Function to filter shops by category
  function filterShops() {
    const category = prompt('Enter category to filter by:');
    getShopsByCategory(category);
  }
  