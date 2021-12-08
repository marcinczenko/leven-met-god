import { useEffect, useState, useRef } from 'react'
import { meditations } from '../../app-data/meditations'

const MeditationForToday = () => {
  const [title, setTitle] = useState('unknown')
  const [extras, setExtras] = useState(undefined)
  const [link, setLink] = useState(undefined)
  const [currentDate, setCurrentDate] = useState(new Date())
  const interval = useRef(undefined)

  useEffect(() => {
    const today = currentDate
    const todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T00:00:00`
    console.log('todayString=', todayString)
    if (meditations[todayString]) {
      const { title, link, extras } = meditations[todayString]
      setTitle(title)
      setLink(link)
      if (extras && extras.length > 0) {
        setExtras(extras)
      } else {
        setExtras(undefined)
      }
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

  const renderExtra = ({ title, link }) => {
    return (
      <a href={link}>{`${title}${endSentence()}`}</a>
    )
  }

  return (
    <div>
      <p>
        De meditatie voor vandaag is: {renderLink()}
      </p>
      {extras && extras.map(e => (
        <p key={e.link}>
          {e.type} {renderExtra(e)}
        </p>
      ))}
    </div>
  )
}

export { MeditationForToday }
