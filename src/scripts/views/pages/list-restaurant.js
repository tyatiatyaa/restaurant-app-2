import RestaurantApiSource from '../../data/restaurantapi-source';
import { createRestaurantItemTemplate } from '../template/template-creator';

const ListRestaurants = {
  async render() {
    return `
    <section class="content">
      <h2 class="restaurants_label" tabindex="0">Explore Restaurant</h2>
      <div class="restaurants_element">
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurant();
    const restaurantContainer = document.querySelector('.restaurants_element');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurants;
