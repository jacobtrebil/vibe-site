import Image from "next/image";
import img from "../../src/app/vibe.png";

export default function Home() {
  return (
    <main>
      <div>
        <div className="headlineDiv">
          <div className="blackBox"></div>
          <h1 className="vibeHeadline">VIBE</h1>
        </div>
        <h2>AI Necklace With a Camera</h2>
        <div>
          <Image className="img" src={img} alt="Picture of the prototype" />
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="buttonDiv">
          <button className="joinWaitlist">Join Waitlist</button>
        </div>
      </div>
    </main>
  );
}
