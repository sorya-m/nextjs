import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./Header.module.css";
import { useRouter } from "next/router";
import { ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  const router = useRouter();

  const [w, setW] = useState(0);
  const [h, seth] = useState(0);

  useEffect(() => {
    function widthListener() {
      setW(window.innerWidth);
    }

    window.addEventListener("resize", widthListener);

    return () => {
      window.removeEventListener("resize", widthListener);
    };
  }, []);

  return (
    <div className="w-100">
      {/**misc section */}

      <div className="position-absolute z-5 bg-white">{w}</div>

      {/*Top Nav*/}
      <div className={`d-flex align-items-center ${style.nav_bg}`}>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            priority={true}
            className="m-2 p-1"
            src={"/amazon.svg"}
            alt="logo"
            width={130}
            height={50}
          />
        </div>

        {/*search section */}
        <div
          className={`d-flex  rounded-start rounded-end justify-content-center m-3 ${style.search_icon_bg}`}
        >
          <input
            type="text"
            className={`${style.input}  flex-fill border border-0 p-2 rounded-start`}
            placeholder="Search Amazon.com"
            aria-label="Search Amazon.com"
            aria-describedby="button-addon2"
          />

          <Image
            className={"rounded-end mx-2 object-fit-cover"}
            src="/search.svg"
            alt="search logo"
            width={25}
            height={40}
          />
        </div>

        {/*nav-right */}
        <div
          className="d-flex w-100 justify-content-center align-items-center text-white"
          style={{ fontSize: "0.8rem" }}
        >
          <div className="m-2">
            <div>Hello</div>
            <div className="fw-bold text-nowrap">Accounts & Lists</div>
          </div>
          <div className="m-2">
            <div>Returns</div>
            <div className="fw-bold">&Orders</div>
          </div>
          <div>
            <div
              onClick={() => {
                router.push("./checkout");
              }}
              style={{ cursor: "pointer" }}
              className="text-white d-flex align-items-end m-2 position-relative"
            >
              <span className="position-absolute top-0 start-50 rounded-pill bg-warning badge text-black">
                0
              </span>
              <ShoppingCartIcon style={{ width: "40px" }} />
              <div className="d-none d-md-inline">cart</div>
            </div>
          </div>
        </div>
      </div>

      {/*Bottom nav*/}
      <div className={`${style.nav_bottom} text-white`}>
        <div className={` d-flex gap-2 p-2 align-items-center`}>
          <Bars3Icon
            style={{
              width: "25px",
            }}
          />
          <div className={`${style.link_css}`}>All</div>
          <div className={`${style.link_css}`}>Amazon miniTV</div>
          <div className={`${style.link_css}`}>Sell</div>
          <div className={`${style.link_css}`}>Best Sellers</div>
          <div className={`${style.link_css}`}>Mobiles</div>
          <div className={`${style.link_css}`}>Today's Deals</div>
        </div>
      </div>
    </div>
  );
}
