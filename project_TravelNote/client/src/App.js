import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Join, ItinerMain, ItinerCreate, ItinerModify, ItinerChangeList, DetailedItinerary, NotFound } from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/join' element={<Join/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/itinerary' element={<ItinerMain/>}>
          <Route exact path='/itinerary/create' element={<ItinerCreate/>}/>
          <Route exact path='/itinerary/modify' element={<ItinerModify/>}>
            <Route exact path=':itineraryId' element={<ItinerModify/>}/>
          </Route>
          <Route exact path='/itinerary/changelist' element={<ItinerChangeList/>}/>
          <Route exact path='/itinerary/details' element={<DetailedItinerary/>}>
            <Route exact path=':itineraryId' element={<DetailedItinerary/>}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
