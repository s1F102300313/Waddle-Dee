import { useState } from 'react';
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

const Home = () => {
  const [isParasolMove, setIsParasolMove] = useState(false);
  const [isShakeHand, setIsShakeHand] = useState(false);
  const [isWink, setIsWink] = useState(false);
  const [isJump, setIsJump] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.parasolButton} onClick={() => setIsParasolMove(!isParasolMove)}>
        傘を回す
      </button>
      <button className={styles.handLButton} onClick={() => setIsShakeHand(!isShakeHand)}>
        左手を動かす
      </button>
      <button className={styles.eyeButton} onClick={() => setIsWink(!isWink)}>
        まばたきさせる
      </button>
      <button className={styles.legButton} onClick={() => setIsJump(!isJump)}>
        ジャンプさせる
      </button>
      <div className={isJump ? styles.jumpBaseAnimation : styles.base}>
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
      <GroundShadow isJump={isJump} />
    </div>
  );
};

export default Home;
