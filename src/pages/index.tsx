import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Handle } from '../component/Parasol/Handle/Handle/Handle';
import { Parasol } from '../component/Parasol/Parasol/Parasol';
import { Star } from '../component/Parasol/Star/Star/Star';
import { Body } from '../component/Waddle-Dee/Body/Body/Body';
import { EyeL } from '../component/Waddle-Dee/Eyes/EyeL/EyeL';
import { EyeR } from '../component/Waddle-Dee/Eyes/EyeR/EyeR';
import { HandL } from '../component/Waddle-Dee/Hands/HandL/HandL/HandL';
import { HandR } from '../component/Waddle-Dee/Hands/HandR/HandR/HandR';
import { LegL } from '../component/Waddle-Dee/Legs/LegL/LegL/LegL';
import { LegR } from '../component/Waddle-Dee/Legs/LegR/LegR/LegR';
import { GroundShadow } from '../component/Waddle-Dee/Shadow/GroundShadow';
import styles from './index.module.css';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

const Home = () => {
  const [isParasolMove, setIsParasolMove] = useState(false);
  const [isShakeHand, setIsShakeHand] = useState(false);
  const [isWink, setIsWink] = useState(false);
  const [isJump, setIsJump] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const scale = isMobile ? '0.4' : '0.8';
  const font = isMobile ? 15 : 50;
  useEffect(() => {
    console.log(navigator.userAgent);
    setIsMobile(/(iPhone|Android.+Mobile)/.test(navigator.userAgent));
    // const userDevice = navigator.userAgent;
  }, []);
  return (
    <div className={styles.container}>
      <button
        className={`${styles.parasolButton} ${
          isMobile ? styles.parasolButtonMobile : styles.parasolButtonPC
        }`}
        style={{ fontSize: font }}
        onClick={() => setIsParasolMove(!isParasolMove)}
      >
        傘を回す
      </button>
      {/* <button className={styles.handLButton} onClick={() => setIsShakeHand(!isShakeHand)}>
        左手を動かす
      </button> */}
      <button
        className={`${styles.eyeButton} ${isMobile ? styles.eyeButtonMobile : styles.eyeButtonPC}`}
        style={{ fontSize: font }}
        onClick={() => setIsWink(!isWink)}
      >
        まばたき
      </button>
      <button
        className={`${styles.legButton} ${isMobile ? styles.legButtonMobile : styles.legButtonPC}`}
        style={{ fontSize: font }}
        onClick={() => setIsJump(!isJump)}
      >
        ジャンプ
      </button>
      <div className={isJump ? styles.jumpBaseAnimation : styles.base} style={{ scale }}>
        <Body />
        <LegL isJump={isJump} />
        <LegR isJump={isJump} />
        <div className={styles.face1} />
        <div className={styles.face2} />
        <HandL isShakeHand={isShakeHand} isJump={isJump} />
        <HandR />
        <Handle isJump={isJump} isParasolMove={isParasolMove} />
        <div className={styles.shaft} />
        <Star isJump={isJump} isParasolMove={isParasolMove} />
        <Parasol isJump={isJump} isParasolMove={isParasolMove} />
        <div className={styles.cheekL} />
        <div className={styles.cheekR} />
        <EyeL isWink={isWink} />
        <EyeR isWink={isWink} />
      </div>
      <div className={styles.groundShadowBase} style={{ scale }}>
        <GroundShadow isJump={isJump} />
      </div>
    </div>
  );
};

export default Home;
