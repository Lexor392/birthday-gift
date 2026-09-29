import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters.jsx'

function MessagesScene() {
  return <section className="scene scene--placeholder" aria-labelledby="messages-title"><div className="scene__content"><p className="eyebrow">Наступна глава</p><h1 id="messages-title"><AnimatedLetters text="Повідомлення" /></h1><p className="scene__lead"><AnimatedLetters text="Розділ готується." /></p></div></section>
}

export default MessagesScene
