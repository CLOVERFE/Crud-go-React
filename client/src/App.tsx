

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={ async() => {const response = await fetch("http://localhost:3000/users")
        const data = await response.json()
        console.log(data)
      }}>
        obtener datos
      </button>
    </div>
  )
}
