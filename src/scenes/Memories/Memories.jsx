import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters.jsx'

function MemoriesScene() {
  return <section className="scene scene--placeholder" aria-labelledby="memories-title"><div className="scene__content"><p className="eyebrow">Наступна глава</p><h1 id="memories-title"><AnimatedLetters text="Спогади" /></h1><p className="scene__lead"><AnimatedLetters text="Розділ готується." /></p></div></section>
}

export default MemoriesScene
