import TempAdd from './TempAdd';
import TempEx from './TempEx';

import './home.css'
import './tempadd.css'



const Home = () => {
  return (
    <main id="home">
        <br/>
        <h1>Samuel Abreu</h1>
        <h3>Temperaturas</h3>
        <br/>
        <br/>
        <input type="text"/>
        <br/>
        <TempAdd />
        <TempEx />
        <br/>
        <li id="lista">
            <ul></ul>
            <ul></ul>
            <ul></ul>
        </li>
    </main>
    
    
  )
}

export default Home