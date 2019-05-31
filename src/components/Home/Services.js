import React from 'react'

import Title from '../Common/Title'

import services from '../../constants/services'

import styles from './services.module.scss'

export default function Services() {
  return (
    <section className={styles.services}>
      <Title content="my skills" highlight={['skills']} />
      <div className={styles.center}>
        {
          services.map((item, index) => (
            <article key={index} className={styles.service}>
              <i>{item.icon}</i>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </article>
          ))
        }
      </div>
    </section>
  )
}
