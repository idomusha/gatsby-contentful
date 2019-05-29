import React from 'react'

import Title from '../Title'

import image from '../../images/default.jpg'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <Title normal="about" highlight="me"></Title>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={image} alt="" />
          </div>
        </article>
        <article className={styles.aboutContent}>
          <h4>explore the difference</h4>
          <p>Known thee another be each hour many rhyme talethis was. And not.</p>
          <p>Een the once deeds passed if seek bidding woe, eremites pollution day deadly strength. With little like neer he one.</p>
          <button type="button" className="button in-primary">Read more</button>
        </article>
      </div>

    </section>
  )
}
