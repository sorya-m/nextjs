import Product from "../Product/Product";
import style from "./productListPage.module.css";

function ProductListPage({ products }) {
  return (
    <div className={`${style.gridContainer}`}>
      {products.map((product) => {
        return <Product data={product} />;
      })}
    </div>
  );
}

export default ProductListPage;
