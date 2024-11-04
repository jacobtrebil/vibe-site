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
import vibeRender from "../../public/vibeRender.png";
import { Rubik_80s_Fade, Rubik_Glitch, Cherry_Bomb_One, Poppins, Orbitron, DM_Sans, Space_Mono, Spectral } from 'next/font/google'

const rubik80s = Rubik_80s_Fade({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const dmsans = DM_Sans({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

const dmsanssmall = DM_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const spacemono = Space_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const spectral = Spectral({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const poppinsBold = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

const rubikGlitch = Rubik_Glitch({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const cherryBomb = Cherry_Bomb_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {

  // const ChromeText3D = dynamic(() => import('./ChromeText3D'), { ssr: false });

  /* const ChromeText3D = dynamic(() => import('./chromeText3D.js'), {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }); */

  return (
    <main>
      <Script async data-uid="0e262a8b88" src="https://fresh-3.ck.page/0e262a8b88/index.js" />
      <div>
        <div className="headlineDiv">
          <h1 className={`${dmsans.className} vibeHeadline` }/*"rubik vibeHeadline"*/>Vibe</h1>
        </div>
        <div className="mainDiv">
        <h2 className={`${dmsans.className} mobileHeadline`}>AI Necklace With a Camera That Tracks Your <span className="colorfulText">Nutrition & Habits</span></h2>
          <Image className="vibeRender" src={vibeRender} alt="Picture of the prototype" />
          <div className="buttonDiv">
            <h2 className={`${dmsans.className} headline`}>AI Necklace With a Camera That Tracks Your <span className="colorfulText">Nutrition & Habits</span></h2>
            <ul>
              <li>Tracks your nutrition & habits <u><b>passively</b></u></li>
              <li>Understands your life context</li>
              <li>Provides <u><b>personalized</b></u> insights and suggestions</li>
            </ul><br></br>
            <button className={`${dmsans.className} neon-button`} data-formkit-toggle="0e262a8b88" src="https://fresh-3.ck.page/cb96ddd2c6/index.js">
            Join Waitlist →
            </button>
            <p className={`${dmsans.className} buttonSubheadline`}>Join 350+ Others. Limited Spots Remaining.<br></br> Launching Late 2024 - Early 2025.</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footerBox"></div>
        <h1 className={`${dmsans.className} footerText`}>© Vibe | &quot;It&apos;s a Vibe&quot;</h1>
      </footer>
    </main>
  );
}

/* 

            <p className={`${dmsanssmall.className} buttonSmallP`}>Join 350+ Others Getting Early Access <br></br>To Vibe. Limited Spots Remaining.</p>

            <p className="buttonSmallP">Early Access</p>

          <h2 className={`${dmsans.className}`}>AI Necklace With a Camera That <br></br>Tracks Your <span className="colorfulText">Nutrition & Habits</span></h2>

          <ThreeDModel />

          <div className="blackBox"></div>

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

      <Script async data-uid="cb96ddd2c6" src="https://fresh-3.ck.page/cb96ddd2c6/index.js" />
            
*/
