import Header from "../components/Header/Header";

function Checkout() {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          display: "grid",
          rowGap: "0.5rem",
          padding: "10px",
        }}
      >
        {/* Left section */}
        <div style={{ backgroundColor: "white", borderRadius: "5px" }}>
          <div>
            <img
              src="/sliderimg2.jpg"
              height={200}
              alt=""
              style={{
                objectFit: "cover",
                width: "100% ",
                borderRadius: "5px 5px 0 0",
              }}
            />
          </div>
          <div
            style={{
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h3>Shopping Cart</h3>
            <span
              style={{
                alignSelf: "center",
                borderBottomStyle: "solid",
                borderBottomColor: "lightgray",
                width: "98%",
              }}
            />

            <div>Dara</div>
          </div>
        </div>

        {/* right section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "0.5rem",
          }}
        >
          Subtotal(item) : <sup className="fw-bold"> ₹</sup>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
