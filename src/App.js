import './assets/global.style.css'
import './App.css'
import AppRoutes from './AppRoute';
import Layout from './components/layout';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}

export default App;
