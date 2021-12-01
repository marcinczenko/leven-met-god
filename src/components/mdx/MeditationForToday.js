import { useEffect, useState, useRef } from 'react'
import { meditations } from '../../app-data/meditations'

const MeditationForToday = () => {
  const [title, setTitle] = useState('unknown')
  const [link, setLink] = useState(undefined)
  const [currentDate, setCurrentDate] = useState(new Date())
  const interval = useRef(undefined)

  useEffect(() => {
    const today = currentDate
    const todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T00:00:00`
    console.log('todayString=', todayString)
    if (meditations[todayString]) {
      const { title, link } = meditations[todayString]
      setTitle(title)
      setLink(link)
    }
  }, [currentDate])

  useEffect(() => {
    interval.current && clearInterval(interval.current)
    interval.current = setInterval(() => {
      setCurrentDate(new Date())
    }, 60000)
    return () => {
      interval.current && clearInterval(interval.current)
    }
  }, [])

  const endSentence = () => {
    if (title) {
      if (title[title.length - 1] === '?') {
        return ''
      } else {
        return '.'
      }
    }
    return '.'
  }

  const renderLink = () => {
    if (link !== undefined) {
      return (
        <a href={link}>{`${title}${endSentence()}`}</a>
      )
    } else {
      return <span className='text-red-700'>{`${title}${endSentence()}`}</span>
    }
  }

  return (
    <div>
      <p>
        De meditatie voor vandaag is: {renderLink()}
      </p>
    </div>
  )
}

export { MeditationForToday }
