import RandomColorDisplay from "./components/ColorDisplay";

const App = () => {
  return(
    <div className="container mx-auto p-4"> {/* Example Tailwind class */}
      <header className="text-center my-6">
        <h1 className="text-3xl font-bold">Color Guessr</h1>
      </header>
      <main className="flex justify-center">
        <RandomColorDisplay />
      </main>
    </div>
  )
}

export default App;