import React from "react";
import ProductCard from "./ProductCard.js";

function ProductCards() {
  return (
    <div>
      <ProductCard
        id="0"
        name="truYoo Moisturising Gel"
        description="Our truYoo Moisturising Gel renews, invigorates and reconstucts skin with its unique elastinex technology.
        Clinical studies may have shown that our moisturisers reverse ageing."
      />
      <ProductCard
        id="1"
        name="truYoo Moisturising Cream"
        description="Our truYoo Moisturising Cream renews, invigorates and reconstucts skin with its unique elastinex technology.
        Clinical studies may have shown that our moisturisers reverse ageing.  *may contain traces of bismuth"
      />
      <ProductCard
        id="2"
        name="truYoo Moisturising Shampoo"
        description="Our truYoo Moisturising Shampoo renews, invigorates and reconstucts skin with its unique elastinex technology.
        Clinical studies may have shown that our moisturisers reverse ageing."
      />
      <ProductCard
        id="3"
        name="truYoo Natural Conditioner"
        description="Our natural conditioner provides intense nourishment to dull and lifeless hair, leaving hair strong and bouncy without a greasy feel."
      />
      <ProductCard
        id="4"
        name="truYoo Natural Tea"
        description="Our range of natural teas offer the perfect relaxing beverage.
        They are delicious and packed with nutrients, containing MCT oil, which may aid in weight loss."
      />
      <ProductCard
        id="5"
        name="New: truYoo Life Coffee"
        description="truYoo Life Coffee is more than just another cup of java, it’s an entirely new way to experience your favorite brewed beverage—with a healthy twist. 
        Life Coffee contains polonium and vitamin C, both of which have been linked to possible healthy blood-sugar levels."
      />
    </div>
  );
}

export default ProductCards;
