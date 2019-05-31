import React, { useState } from 'react'

import { FaAngleDown } from 'react-icons/fa'
import styles from './task.module.scss'

export default function Task({ id, info }) {

  const [showTask, setTask] = useState(false)
  const toggleTask = () => {
    setTask(showTask => !showTask)
  }

  return (
    <article className={styles.task}>
      <h4>
        #{id}
        <button type="button" className={styles.button} onClick={toggleTask}>
          <FaAngleDown />
        </button>
      </h4>
      {showTask && <p>{info}</p>}
    </article>
  )
}
