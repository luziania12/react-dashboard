import './styles.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Header />
      <Main />
    </div>
  )
}

export default App
