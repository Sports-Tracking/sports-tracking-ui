import React, { useState } from 'react';

import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import * as Icons from 'heroicons-react'

const App = () => {
  const [toggleSidebar, setSidebar] = useState(false);

  return (
    <main className="flex h-screen bg-gray-300">
      <section className={`${toggleSidebar ? 'w-4/6' : 'w-full'} px-3 py-2 h-full flex items-center justify-between space-x-2 `}>
        <Switch>
          <Route exact path="/soccer/premier-league"><PremierLeague /></Route>
          <Route path="/"><SportsList setSidebar={setSidebar} /></Route>
        </Switch>
      </section>
      {toggleSidebar ? <section className="w-2/6 h-full flex flex-col bg-gray-100 shadow-md">
        <Switch>
          <Route path="/:id">
            <SportLeagues setSidebar={setSidebar} />
          </Route>
        </Switch>

      </section> : null}
    </main>
  );
}
const SportLeagues = ({ setSidebar }) => {

  const { id } = useParams()
  let sportLeaguesData = { id: '', sport: '', leagues: [] }
  const soccerData = {
    id: 'soccer',
    sport: 'Soccer',
    leagues: [{ id: 'premier-league', name: "Premier League" }]
  }
  const hockeyData = {
    id: 'hockey',
    sport: 'Hockey',
    leagues: [{ id: 'nhl', name: "NHL" }]
  }

  switch (id) {
    case 'soccer':
      sportLeaguesData = soccerData;
      break;
    case 'hockey':
      sportLeaguesData = hockeyData;
      break;
    default:
      break;
  }
  return (<>
    <header className="inline-flex px-3 py-2 border-b border-gray-400 shadow-sm rounded-lg items-center justify-between">
      <h3 className="flex-grow text-center">{sportLeaguesData.sport} Leagues</h3>
      <button className="p-1 hover:bg-gray-700 hover:text-white rounded-lg" onClick={() => setSidebar(false)}><Icons.XOutline /></button>
    </header>

    <SportsLeagues>
      {sportLeaguesData.leagues.map(e => <Link key={e.id} to={`${sportLeaguesData.id}/${e.id}`} className=" w-full hover:bg-gray-200 rounded-lg px-3 py-1">{e.name}</Link>
      )}

    </SportsLeagues>
  </>)
}
const PremierLeague = () => {
  return (<div>Premier League</div>)
}
const SportsCard = ({ onClick, value, children }) => {
  return (<div className="relative z-20 bg-gray-100 rounded-lg shadow-2xl ">
    <button onClick={onClick} value={value} className="absolute focus:rounded-lg focus:border-gray-900 opacity-25 z-30 w-full rounded-lg h-full " />
    {children}
  </div>)
}

const SportsLeagues = ({ children }) => {

  return (<div className="flex flex-col mt-2 space-y-2 w-full h-full">
    {children}
  </div>)
}

const SoccerLeagues = () => {
  return (<SportsLeagues>
    <Link to="/soccer/la-liga" className=" w-full hover:bg-gray-200 rounded-lg px-3 py-1">La Liga</Link>
    <Link to="/soccer/bundesliga" className=" w-full hover:bg-gray-200 rounded-lg px-3 py-1">Bundesliga</Link>
    <Link to="/soccer/champions-league" className=" w-full hover:bg-gray-200 rounded-lg px-3 py-1">Champions League</Link>
    <Link to="/soccer/europa-league" className=" w-full hover:bg-gray-200 rounded-lg px-3 py-1">Europa League</Link>
  </SportsLeagues>)
}

const SportsList = ({ setSidebar }) => {
  return <>
    <Link to="/soccer">
      <SportsCard value="football" onClick={() => setSidebar(true)}>
        <h2 className="px-3 py-2">Football</h2>
      </SportsCard>
    </Link>
    <Link to="/hockey">
      <SportsCard value="hockey" onClick={() => setSidebar(true)}>
        <h2 className="px-3 py-2">Hockey</h2>
      </SportsCard >
    </Link>
    <Link to="/basketball">
      <SportsCard value="basketball" onClick={() => setSidebar(true)}>
        <h2 className="px-3 py-2">Basketball</h2>
      </SportsCard>
    </Link>
  </>
}


export default App;
