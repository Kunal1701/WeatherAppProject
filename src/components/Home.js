import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Homecss.css'

function Home() {
  const navigate = useNavigate();
  const [city, setCity] = React.useState('');
  const getWeather = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fff758ed8a308b1795163087de5e192c`);
    const data = await response.json();
    navigate('/card', {state: {data}});
  }

  return (
    <div>
      <div className="entrymain bg-slate-400">
      <div>
      Input City: <br /><input type="text" name="city" className="text-black px-3 py-1 inputs my-2" 
      onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="bg-slate-500 submits px-3 my-8 hover:bg-slate-700"
      onClick={getWeather}
      >Submit</button>
      </div>
      
      </div>
    </div>
  )
}

export default Home
