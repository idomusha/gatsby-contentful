import React from 'react';
import Title from '../Common/Title';

import styles from './form.module.scss';

export default function Form() {
  return (
    <section className={styles.contact}>
      <Title normal="contact" highlight="me" />
      <div className={styles.center}>
        <form className={styles.form} action="https://formspree.io/idomusha@soot.black" method="POST">
        <div>
          <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="John Doe"
            />
          </div>
          <div>
          <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="john.doe@email.com"
            />
          </div>
          <div>
          <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="10" className={styles.formControl} placeholder="Hello there!"></textarea>
          </div>
          <div>
            <input type="submit" value="send" className={`button in-primary ${styles.submit}`}></input>
          </div>
        </form>
      </div>
      }
    </section>
  );
}
