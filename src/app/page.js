'use client';

import Image from "next/image";
import img from "../../src/app/vibe.png";
import gif from "../../public/vibe.gif";
// import logo from "../../src/app/logo2.png";
import Script from "next/script";
import dynamic from 'next/dynamic';
// import vibe from '../../public/vibe.mp4';
// import render from "./render.html";
import ThreeDModel from '../app/ThreeDModel';
import ObjViewer from "./ObjViewer";

export default function Home() {

  // const ChromeText3D = dynamic(() => import('./ChromeText3D'), { ssr: false });

  /* const ChromeText3D = dynamic(() => import('./chromeText3D.js'), {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }); */

  return (
    <main>
      <Script async data-uid="cb96ddd2c6" src="https://fresh-3.ck.page/cb96ddd2c6/index.js" />
      <div>
        <div className="headlineDiv">
          <div className="blackBox"></div>
          <h1 className="vibeHeadline">VIBE</h1>
          <h2>AI Necklace With a Camera That <br></br>Tracks Your <span className="colorfulText">Nutrition & Habits</span></h2>
        </div>
        <div className="mainDiv">
          <ThreeDModel />
        </div>
        <div className="buttonDiv">
          <button className="neon-button" data-formkit-toggle="cb96ddd2c6" src="https://fresh-3.ck.page/cb96ddd2c6/index.js">Join Waitlist →</button>
          <p className="buttonSubheadline">*Available in late 2024 - early 2025</p>
        </div>
      </div>
      <footer>
        <div className="footerBox"></div>
        <h1 className="footerText">© Vibe | &quot;It&apos;s a Vibe&quot;</h1>
      </footer>
    </main>
  );
}

/*  

<Image className="gif" src={gif} alt="Picture of the prototype" />

         <ThreeDModel />

          <Image className="img" src={img} alt="Picture of the prototype" />

          <div class="cyber-text">
              <h1>Future Vision</h1>
          </div>

          <ChromeText3D />

          <ul>
            <li>Your Stylish AI Necklace That Tracks Your Habits <u>Passively</u> and Keeps You <u>Accountable</u></li>
          </ul>

<Image className="logo" src={logo} alt="VIBE logo" width={100} style={{ margin: "0 auto" }} /> 

<h2>Your <i>Stylish</i> AI Necklace <br></br>Habit Tracker</h2>

<li>Get AI suggestions and assistance in real-time</li>
<li>AI Assistant That Completes Tasks <u>For You</u></li>
            
*/
