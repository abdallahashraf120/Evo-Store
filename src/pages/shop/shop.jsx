import { Grid } from "@mui/material";
import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Welcome to our Store</h1>
      </div>
      <Grid container className="products"  columns={2}>
        {PRODUCTS.map((product) => (
          <Grid item >
            <Product data={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
