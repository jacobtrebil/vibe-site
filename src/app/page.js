import Image from "next/image";
import img from "../../src/app/vibe.png";
import logo from "../../src/app/logo2.png";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Script async data-uid="cb96ddd2c6" src="https://fresh-3.ck.page/cb96ddd2c6/index.js" />
      <div>
        <div className="headlineDiv">
          <div className="blackBox"></div>
          <h1 className="vibeHeadline">VIBE</h1>
          <h2>Your AI Necklace + Camera<br></br>Habit Tracker & Coach</h2>
        </div>
        <div className="mainDiv">
          <Image className="img" src={img} alt="Picture of the prototype" />
        </div>
        <div className="buttonDiv">
          <button className="joinWaitlist" data-formkit-toggle="cb96ddd2c6" src="https://fresh-3.ck.page/cb96ddd2c6/index.js">Join Waitlist</button>
        </div>
      </div>
      <footer>
        <div className="footerBox"></div>
        <h1 className="footerText">© Vibe Forever | Built at Harvard & MIT</h1>
      </footer>
    </main>
  );
}

/*  

          <ul>
            <li>Your Stylish AI Necklace That Tracks Your Habits <u>Passively</u> and Keeps You <u>Accountable</u></li>
          </ul>

<Image className="logo" src={logo} alt="VIBE logo" width={100} style={{ margin: "0 auto" }} /> 

<h2>Your <i>Stylish</i> AI Necklace <br></br>Habit Tracker</h2>

<li>Get AI suggestions and assistance in real-time</li>
<li>AI Assistant That Completes Tasks <u>For You</u></li>
            
*/
