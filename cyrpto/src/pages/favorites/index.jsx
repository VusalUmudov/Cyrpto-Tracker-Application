import Navbar from "components/navabar";
import React from "react";
import Footer from "components/footer/Footer";
import "./favorites.css"
import { useDispatch, useSelector } from "react-redux";
import {
  clearFavorites,
  removeProductFromFavorites,
} from "redux/slice/favorites";
import { Button } from "@mui/material";
import { Toaster } from "react-hot-toast";

const Favorites = () => {
  const { products } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  let index = 1
  return (
    <div>
      <Navbar />
      <div className='container'>

        <div className='table-all-container'>
          <Button variant="contained" color="error" className="clearBtn" onClick={() => dispatch(clearFavorites())}><Toaster/>Clear</Button>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Coin Name</th>
                  <th>Price</th>
                  <th>Price Change</th>
                  <th>Market Cap</th>
                  <th>Favorite</th>
                </tr>
              </thead>
              <tbody>

                {products && products.map((product) =>
                  <tr>
                    <td>{index++}</td>
                    <td className='product-name'><img src={product.image} alt="img" />{product.name}</td>
                    <td>${product.current_price}</td>
                    <td>{product.price_change_percentage_24h}</td>
                    <td className='market-cap'>${product.market_cap}</td>
                    <td><Button variant="outlined" color="error" className="removeBtn" onClick={() => dispatch(removeProductFromFavorites(product.id))}
                    >
                      <Toaster/>
                      Remove
                    </Button></td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
