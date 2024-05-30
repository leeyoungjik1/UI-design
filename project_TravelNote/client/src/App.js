import styles from "./App.module.css";
import './Root.css'
import { Route, Routes } from 'react-router-dom'
import {
  Home,
  Login,
  Join,
  ItinerMain,
  ItinerCreate,
  ItinerModify,
  ItinerChangeList,
  DetailedItinerary,
  MyItinerList,
  MyDetailedItinerary,
  SharedItinerList,
  SharedDetailedItinerary,
  NotFound } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.gnb}>GNB</div>
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
          <Route exact path='/itinerary/myitinerary' element={<MyItinerList/>}/>
          <Route exact path='/itinerary/myitinerary' element={<MyDetailedItinerary/>}>
            <Route exact path=':itineraryId' element={<MyDetailedItinerary/>}/>
          </Route>
          <Route exact path='/itinerary/shareditinerary' element={<SharedItinerList/>}/>
          <Route exact path='/itinerary/shareditinerary' element={<SharedDetailedItinerary/>}>
            <Route exact path=':itineraryId' element={<SharedDetailedItinerary/>}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
