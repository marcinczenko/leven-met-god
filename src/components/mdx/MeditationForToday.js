import { useEffect, useState } from 'react'
import { meditations } from '../../app-data/meditations'

const MeditationForToday = () => {
  const [title, setTitle] = useState('unknown')
  const [link, setLink] = useState(undefined)
  useEffect(() => {
    const today = new Date()
    const todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T00:00:00`
    console.log('todayString=', todayString)
    if (meditations[todayString]) {
      const { title, link } = meditations[todayString]
      setTitle(title)
      setLink(link)
    }
  }, [])

  const renderLink = () => {
    if (link !== undefined) {
      return (
        <a href={link}>{title}</a>
      )
    } else {
      return <span className='text-red-700'>{title}</span>
    }
  }

  return (
    <div>
      <p>
        De meditatie voor vandaag is: {renderLink()}.
      </p>
    </div>
  )
}

export { MeditationForToday }
