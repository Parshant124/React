import './Summary.css'

export default function Summary05(){
    return(
        <>
        <div>
            <div
            className="text-center text-2xl font-bold text-orange-800 bg-gray-400"
            >
                <h1 className="">Day 5 : Password Generator</h1>
            </div>
            <div className="text-white">
                <h1 className="font-semibold">About Project</h1>
                <h1 className="mx-4"> A simple password generator where user set length and two attributes(NumberPresent, SymbolPresent) and a copy button</h1>
                <h2 className="font-semibold">Hooks Used:</h2>
                <h2 className="mx-4">useState, useCallback, useEffect, useRef</h2>
            </div>
            <div className="text-white">
                <h1 className="text-center font-bold text-xl p-4">Working</h1>
                <h2><strong>Password Generation:</strong> Password is generated on the basis of (length, NumPresent, SymbolPresent), done via the use of Math.random</h2>
                <h2><strong>useState: </strong> The generated password is then stored via setPass call of useState which is then appended in the h1 tag of display</h2>
                <h2><strong>useEffect: </strong> having dependicies(length, numPresent, symPresent) like everytime one of these changes Password generator is called with new attributes</h2>
                <h2><strong>useCallback: </strong>(just overpower here) it stores the last reference of the function and used for optimization.(for more info read Summary2)</h2>
            </div>
        </div>
        </>
    )
}