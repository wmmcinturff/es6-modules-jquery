import { makeCartModal, chargeIt, showCartItems,} from "./makeCart.js";
import { buildCart } from "./buildCart.js";
import { setCart } from "./../helpers/data/cartData.js";
  
  const makeCart = () => {
    makeCartModal();
    buildCart();
  
    $("#charge-it").click(() => {
      const ccNum = $("#credit-card").val();
      chargeIt(ccNum);
    });
  
    showCartItems();
  };
  
  const addToCart = (array, index) => {
    const cartButton = $(`#cart-add-${index}`);
  
    cartButton.on("click", () => {
      setCart(array[index]);
      makeCart();
    });
  };
  
  export { addToCart };