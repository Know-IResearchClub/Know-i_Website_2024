import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import styles from './Teams.module.css'; 
import messipic from './meesi.png'
import president from './office_bearers/IMG_0012 2 - RAAGA PRIYA J K.jpg'
import vp from './office_bearers/IMG_7187 - 014 GAYATHRI MOHANRAJU AI&DS.jpeg'
import research_head from './office_bearers/IMG_20240827_203548 - 038 SAHANA S.jpg'
import Treasurer from './office_bearers/me - ARAVINDHAN S S CSE.jpeg'
import secretary from './office_bearers/IMG_20240108_181250 - PRAJITH PAAVAN K AID&S.jpg'
import tech_lead from './office_bearers/Photo - ARCHANA G CSE.jpg'
import planing_head from './office_bearers/20240426_175055(0) - ARUNIMA M AI&DS.jpg'
// import chief_marketting_off from './office_bearers/IMG_20240108_181250 - PRAJITH PAAVAN K AID&S.jpg'
// import chief_of_strategy from './office_bearers/IMG_20240108_181250 - PRAJITH PAAVAN K AID&S.jpg'
// import web_lead from './office_bearers/IMG_20240108_181250 - PRAJITH PAAVAN K AID&S.jpg'

export const Teams = () => {
  return (
    <div id='teams' className={styles.container}>

      <HorizontalScrollCarousel />

    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({target: targetRef,});

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-45%']);

  return (
    <section ref={targetRef} className={styles.carouselSection}>
      <div className={styles.titleContainer}>
          <h2 className={styles.title}>Team</h2>
        </div>
      <div className={styles.stickyContainer}>
        
      
      
        
        <motion.div style={{ x }} className={styles.image}>
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
          {/* <a href="#" className={styles.seeAllLink}>See all...</a> */}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className={styles.card} key={card.id}>
      <img src={card.url} alt={card.title} className={styles.cardImage} />

      <div className={styles.cardContent}>
    <p className={styles.cardTitle}>{card.title}</p>
    <p className={styles.cardrole}>{card.role}</p>
  </div>


    </div>
  );
};

const cards = [
  {
    title: 'Raaga Priya',
    role:'President',
    url: president,
    
    id: 1,
  },
  {
    url: vp,
    title: 'Gayathri Mohanraju',
    role:'Vice President',
    id: 2,
  },
  {
    url: research_head,
    title:'Sahana S',
    role: 'Research Head',
    id: 3,
  },
  {
    url: Treasurer,
    title:'Aravindhan S',
    role: 'Treasurer',
    id: 4,
  },
  {
    url: secretary,
    title:'Prajith Paavan',
    role: 'Secretary',
    id: 5,
  },
  {
    url: tech_lead,
    title:'Archana G',
    role: 'Tech Lead',
    id: 6,
  },
  {
    url: planing_head,
    title:'Arunima',
    role: 'Planning lead',
    id: 7,
  },
  // {
  //   url: messipic,
  //   title:'Arunima',
  //   role: 'Planning lead',
  //   id: 8,
  // },
  // {
  //   url: messipic,
  //   title:'Arunima',
  //   role: 'Planning lead',
  //   id: 9,
  // },
  // {
  //   url: messipic,
  //   title:'Arunima',
  //   role: 'Planning lead',
  //   id: 10,
  // }

];