import Header from "@/components/Header/Header";
import Banner from "../components/Banner/Banner";

import Head from "next/head";
import ProductListPage from "@/components/ProductListPage/ProductListPage";

export default function Home({ product }) {
  return (
    <>
      <Header />

      <Banner />

      <ProductListPage products={product} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
