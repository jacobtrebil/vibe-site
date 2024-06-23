import Image from "next/image";
import img from "../../src/app/IMG_7866.png";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Prototype v1.0.0</h1>
        <Image className="img" src={img} alt="Picture of the prototype" />
      </div>
    </main>
  );
}
