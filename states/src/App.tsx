
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'

function App() {
  

  return (
    <>
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center my-8 text-gray-800">Estados y Eventos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Counter title="Contador A" />
        <Counter title="Contador B" />
        <Counter title="Contador C" />
        <NameForm />
      </div>
    </div>
    <div className="fixed bottom-8 right-8">
      <ToggleButton />
    </div>
    </>
  )
}

export default App
