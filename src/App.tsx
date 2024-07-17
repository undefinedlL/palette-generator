import PaletteGenerator from "./components/PaletteGenerator";


function App() {
  return (
    <>
      <div className="description-block">
        <h1 className="title">Palette Generator</h1>
        <h3 className="description-text">Generates a dark and light palette of colors relative to one color</h3>
      </div>
      <PaletteGenerator /> 
    </>
  )
}

export default App;
