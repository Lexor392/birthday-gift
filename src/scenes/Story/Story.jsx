import { useEffect } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters.jsx'
import Button from '../../components/Button/Button.jsx'
import story from '../../data/story.js'
import StoryEvent from './StoryEvent.jsx'
import './story.scss'

function StoryScene({ onContinue }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <section className="scene scene--story" aria-labelledby="story-title">
      <header className="story-intro scene__content">
        <p className="eyebrow">Наша історія</p>
        <h1 id="story-title"><AnimatedLetters text="Із того самого повідомлення" /></h1>
        <p className="scene__lead"><AnimatedLetters text="Іноді все починається з кількох абсолютно звичайних слів." /></p>
        <p className="story-intro__meta">{story.length} подій · серпень — вересень 2026</p>
      </header>

      <div className="story-timeline" aria-label="Хронологія історії">
        <div className="story-timeline__line" aria-hidden="true" />
        {story.map((event, index) => <StoryEvent key={event.id} event={event} index={index} />)}
      </div>

      <div className="story-end scene__content">
        <p className="eyebrow">Далі буде</p>
        <Button onClick={onContinue}>Продовжити</Button>
      </div>
    </section>
  )
}

export default StoryScene
