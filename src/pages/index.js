import { BlogImage, MeditationForToday } from '../components/mdx'
import bookCoverImg from '../content/cover.png'

const Index = () => {
  return (
    <div>
      <h1 className='font-sans text-5xl font-extralight'>Leven met God</h1>
      <MeditationForToday />
      <BlogImage width='300px' src={bookCoverImg} alt='Book Cover' />
      <a href='/disclaimer'>Disclaimer</a>
    </div>
  )
}

export const Head = () => (
  <>
    <title>Leven met God</title>
    <meta
      name='description'
      content='Leven met God - Meditaties voor elke dag van het jaar door Dr. B. Naaijkens'
    />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
    />
  </>
)

export default Index
