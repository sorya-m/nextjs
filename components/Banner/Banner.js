  import Image from "next/image";
import img1 from "../../public/sliderimg1.jpg";
import style from "../Banner/Banner.module.css";

function Banner() {
  return (
    <div className={"position-relative"}>
      <div className={style.overlay} />
      <Image
        src={img1}
        alt="slider-img-1"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          objectPosition: "center",
        }}
        priority={true}
      />
    </div>
  );
}

export default Banner;
