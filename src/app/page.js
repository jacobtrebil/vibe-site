import Image from "next/image";
import img from "../../src/app/vibe.png";
import logo from "../../src/app/logo2.png";

export default function Home() {
  return (
    <main>
      <div>
        <div className="headlineDiv">
          <div className="blackBox"></div>
          <h1 className="vibeHeadline">VIBE</h1>
        </div>
        <div className="mainDiv">
          <Image className="img" src={img} alt="Picture of the prototype" />
          <ul>
            <li>Your Stylish AI Necklace That Tracks Your Habits <u>Passively</u> and Keeps You <u>Accountable</u></li>
          </ul>
        </div>
        <div className="buttonDiv">
          <button className="joinWaitlist">Join Waitlist</button>
        </div>
      </div>
    </main>
  );
}

/*  

<Image className="logo" src={logo} alt="VIBE logo" width={100} style={{ margin: "0 auto" }} /> 

<h2>Your <i>Stylish</i> AI Necklace <br></br>Habit Tracker</h2>

<li>Get AI suggestions and assistance in real-time</li>
<li>AI Assistant That Completes Tasks <u>For You</u></li>
            
*/
