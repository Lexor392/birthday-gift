import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters.jsx'
import Button from '../../components/Button/Button.jsx'

function WelcomeScene({ onContinue }) {
  return (
    <section className="scene scene--welcome" aria-labelledby="welcome-title">
      <div className="scene__content welcome-content">
        <p className="eyebrow">Для однієї особливої людини</p>
        <h1 id="welcome-title"><AnimatedLetters text="У тебе є один подарунок." /></h1>
        <p className="scene__lead"><AnimatedLetters text="Але він трохи незвичайний." /></p>
        <div className="scene__action is-visible">
          <Button onClick={onContinue}>Відкрити подарунок</Button>
        </div>
      </div>
      <div className="welcome-mark" aria-hidden="true"><span /></div>
    </section>
  )
}

export default WelcomeScene
