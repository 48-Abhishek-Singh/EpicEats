import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "/src/assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu </h1>
      <p className="explore-menu-text">
      Discover the variety and flavors in our menu, thoughtfully curated to cater to all your cravings. Dive into a world of fresh ingredients, unique recipes, and delicious combinations that will leave your taste buds wanting more. Whether you are in the mood for a light salad, a hearty sandwich, or a delectable dessert, we have something for everyone.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>setCategory((prev) =>prev === item.menu_name ? "All" : item.menu_name)}
              key={index}
              className="explore-menu-list-item"
            >
              <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
