import React, { useState } from 'react';

import {
    Link
} from "react-router-dom";

const LandingPage = () => {
    const [toggleFootball, setFootball] = useState(true)
    const [toggleHockey, setHockey] = useState(false)
    const [toggleBasketball, setBasketball] = useState(false)
    const handleClick = (e) => {
        switch (e.target.value) {
            case 'football':
                setFootball(!toggleFootball);
                setHockey(false);
                setBasketball(false); break;
            case 'hockey':
                setHockey(!toggleHockey); setFootball(false); setBasketball(false);
                break;
            case 'basketball': setFootball(false); setHockey(false); setBasketball(!toggleBasketball); break;
            default:
                break;
        }
    }
    const setAllFalse = () => { setFootball(false); setBasketball(false); setHockey(false) }
    return (
        <div className={`w-screen h-screen bg-gray-300 flex space-x-5 items-center justify-center`}>
            {toggleFootball || toggleHockey || toggleBasketball ? <>
                <button className="fixed inset-0 w-full h-full cursor-default" onClick={() => { setAllFalse(false) }} />
            </>
                : null}
            {/* soccer */}
            <SportsCard onClick={handleClick} value="football">
                <h2 className="px-3 py-2">Football</h2>
                {toggleFootball ? <>
                    <SportsLeagues>
                        <Link to="/soccer/premier-league" className=" w-full hover:bg-gray-800 py-2 px-3">Premier League</Link>
                        <Link to="/soccer/la-liga" className=" w-full hover:bg-gray-800 py-2 px-3">La Liga</Link>
                        <Link to="/soccer/bundesliga" className=" w-full hover:bg-gray-800 py-2 px-3">Bundesliga</Link>
                        <Link to="/soccer/champions-league" className=" w-full hover:bg-gray-800 py-2 px-3">Champions League</Link>
                        <Link to="/soccer/europa-league" className=" w-full hover:bg-gray-800 py-2 px-3">Europa League</Link>
                    </SportsLeagues>
                </> : null}
            </SportsCard>

            {/* hockey */}
            <SportsCard onClick={handleClick} value="hockey">
                <h2 className="px-3 py-2">Hockey</h2>
                {toggleHockey ? <>
                    <SportsLeagues>here are the soccer leagues</SportsLeagues>
                </> : null}
            </SportsCard>

            {/* basketball */}
            <SportsCard onClick={handleClick} value="basketball">
                <h2 className="px-3 py-2">Basketball</h2>
                {toggleBasketball ? <>
                    <SportsLeagues>here are the soccer leagues</SportsLeagues>
                </> : null}
            </SportsCard>
        </div>
    );
}

const SportsCard = ({ onClick, value, children }) => {
    return (<div className="relative z-20 bg-gray-100 rounded-lg shadow-2xl ">
        <button onClick={onClick} value={value} className="absolute focus:rounded-lg focus:border-gray-900 opacity-25 z-30 w-full rounded-lg h-full " />
        {children}</div>)
}

const SportsLeagues = ({ children }) => {
    return (<div className="absolute w-40 overflow-auto flex flex-col items-start justify-around space-y-1 py-1 rounded-lg shadow-2xl bg-gray-700 text-gray-200">{children}</div>)
}

export default LandingPage;