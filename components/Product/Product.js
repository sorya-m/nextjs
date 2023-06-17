import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

function Product({ data }) {
  const { id, title, description, category, image, price, rating } = data;

  return (
    <div
      className="position-relative bg-white d-flex flex-column w-100 h-100 border rounded fs-6 p-4"
      style={{ boxShadow: "2px 2px 6px 0px rgba(0, 0, 0, 0.3)" }}
    >
      <p
        className="position-absolute"
        style={{
          top: "10px",
          right: "12px",
          fontSize: "0.8rem",
          color: "GrayText",
        }}
      >
        {category}
      </p>

      <Image
        src={image}
        width={200}
        height={200}
        alt={`prod-${id}`}
        style={{
          objectFit: "contain",
          objectPosition: "center",
          width: "100%",
        }}
      />
      <span style={{ marginTop: "15px", borderBottom: "1px solid #d3d3d3" }} />
      <div className="w-100 my-2" style={{ fontSize: "0.9rem" }}>
        {title}
      </div>

      <div className="d-flex gap-1 my-2">
        {Array(Math.floor(rating.rate))
          .fill()
          .map((_, i) => {
            return (
              <StarIcon
                key={i}
                width={15}
                style={{
                  color: "febd69",
                  fontWeight: "bold",
                }}
              />
            );
          })}
      </div>

      <div
        className="my-2"
        style={{
          fontWeight: "600",
          fontSize: "0.9rem",
        }}
      >
        {description.slice(0, 100) + "..."}
      </div>
      <div className="my-2" style={{ fontWeight: "650" }}>
        {" "}
        ₹ {price}
      </div>
      <button
        className="mt-3"
        style={{
          alignSelf: "center",
          backgroundColor: "#FFD814",
          borderStyle: "none",
          height: "2.5rem",
          width: "80%",
          borderRadius: "5px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
