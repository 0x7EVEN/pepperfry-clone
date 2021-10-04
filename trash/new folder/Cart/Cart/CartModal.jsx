import { useState } from "react";
import "./Cart.css";
import { data } from "./data.js";

import { Button } from "./Button";

export default function CartModal({ cart, handleCartModal }) {
  const [item, setItem] = useState(false);

  const handleCart = () => {
    setItem(true);
  };

  const handleWish = () => {
    setItem(false);
  };

  const [theme, setTheme] = useState("light");

  return cart ? (
    <div className="outer_div2">
      <div className="inner_div2">
        <div className="subDiv">
          <button className="closeBtn" onClick={() => handleCartModal(`Cart`)}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.81591 1.35441L7.99991 6.53841L13.1626 1.37574C13.2531 1.27944 13.362 1.2024 13.483 1.14925C13.604 1.09609 13.7345 1.06791 13.8666 1.06641C14.1495 1.06641 14.4208 1.17879 14.6208 1.37883C14.8209 1.57886 14.9332 1.85018 14.9332 2.13307C14.9357 2.26385 14.9115 2.39375 14.8619 2.51481C14.8124 2.63587 14.7387 2.74554 14.6452 2.83707L9.42925 7.99974L14.6452 13.2157C14.821 13.3877 14.9241 13.6206 14.9332 13.8664C14.9332 14.1493 14.8209 14.4206 14.6208 14.6207C14.4208 14.8207 14.1495 14.9331 13.8666 14.9331C13.7306 14.9387 13.595 14.916 13.4683 14.8664C13.3416 14.8169 13.2266 14.7415 13.1306 14.6451L7.99991 9.46107L2.82658 14.6344C2.73645 14.7275 2.62878 14.8018 2.50978 14.8531C2.39078 14.9043 2.26281 14.9315 2.13325 14.9331C1.85035 14.9331 1.57904 14.8207 1.379 14.6207C1.17896 14.4206 1.06658 14.1493 1.06658 13.8664C1.06409 13.7356 1.08836 13.6057 1.13788 13.4847C1.18741 13.3636 1.26115 13.2539 1.35458 13.1624L6.57058 7.99974L1.35458 2.78374C1.17878 2.61175 1.07569 2.37885 1.06658 2.13307C1.06658 1.85018 1.17896 1.57886 1.379 1.37883C1.57904 1.17879 1.85035 1.06641 2.13325 1.06641C2.38925 1.06961 2.63458 1.17307 2.81591 1.35441Z"
                fill="#C5C5C5"
              />
            </svg>
          </button>

          <div className="head">
            <p style={{}}>Showing Availability At</p>
            <input placeholder="Enter Pincode" type="text" />
            <button>Check</button>
          </div>

          <div className="btns">
            <Button
              theme={theme === "cart" ? "light" : "dark"}
              onClick={() => {
                setTheme("cart");
                handleCart();
              }}
            >
              MY CART
            </Button>
            <Button
              theme={theme === "wish" ? "light" : "dark"}
              onClick={() => {
                setTheme("wish");
                handleWish();
              }}
            >
              MY WHISLIST
            </Button>
            <Button>RECENTLY VIEWED</Button>
          </div>
        </div>

        <div className="container">
          {item ? (
            <div>
              {data.map((e) => {
                return (
                  <div className="cartItemDetails">
                    <div>
                      <img src={e.img} alt="" />
                    </div>

                    <div className="itemPriceDetails">
                      <p>{e.title}</p>
                      <div className="qtyPrice">
                        <p className="retailPrice">
                          Retail Price <span>{e.retail}</span>{" "}
                        </p>
                        <p>
                          Offer Price <b>{e.price}</b>
                        </p>
                      </div>
                    </div>
                    <div className="funcBtn">
                      <button>Move To Wishlist</button>
                      <button>Remove</button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1>You Haven't Added Any Item To Your Wishlist</h1>
          )}
        </div>
      </div>
    </div>
  ) : null;
}
