import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant-detail_title">${restaurant.name}</h2>
<div class="restaurant-detail_column">
    <img class="restaurant-detail_thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.title}" />
    <div class="restaurant-detail_info">
      <h3>Information</h3>
      <h4>Address</h4>
      <p>${restaurant.address} , Kota ${restaurant.city}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      <h4>Categories</h4>
      <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
      <h4>Foods</h4>
      <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
      <h4>Drinks</h4>
      <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
    </div>
</div>
<div class="restaurant-detail_column">
    <div class="restaurant-detail_description">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="restaurant-detail_reviews">
        <h3>Customer Reviews</h3>
        <p>${restaurant.customerReviews.map((customer) => customer.review).join(' | ')}</p>
    </div>
<div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
        <img class="restaurant-item_thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="restaurant-item_rating">
            <p>⭐️ ${restaurant.rating}</p>
        </div>
        <h2 class="restaurant-item_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
        <p class="restaurant-item_description">${restaurant.description}</p>
        <p class="restaurant-item_city">${restaurant.city}</p>
    </article>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };
