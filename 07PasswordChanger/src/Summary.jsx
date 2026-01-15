import {useState} from 'react'
function Summary(){
    const [showDetails, setShowDetails] = useState(false);
    return(
        <>
        <div>
            <div>
                <h1
                className="text-center text-4xl font-bold bg-green-200"
                >Summary</h1>
            </div>        
            <div>
                <ul> <h2 className="text-white px-3">Today's lecture was about the hooks</h2>
                    <li className="font-bold text-xl py-4">
                        ~ useCallback
                    </li>
                    <div className="px-8">
                    <h2>It's only purpose is to optimize the code, this projecct works fine without it. Useful for big projects.</h2>
                    <h2>It has two slots, one for the function and other for the dependicies</h2>
                    <h2>What useCallback does NOT do</h2>
                    <h2>❌ It does NOT make code faster by default</h2>
                    <h2>❌ It does NOT reduce renders by itself</h2>
                    <h2>❌ It does NOT stop state updates</h2>
                    <h2>It only stabilizes function identity.</h2>
                    </div>

                    <li className="text-xl font-bold py-4">
                        ~ useEffect
                    </li>
                    <div className="px-8">
                    <h2>It contains two parts- function and dependicies</h2>
                    <h2>Everytime one of the dependicies is changed then it will call the function</h2>
                    <h2>At first when the page reloads, it will be executed i.e. it will call the function</h2>
                    </div>

                    <li className="text-xl font-bold py-4">
                        ~ useRef
                    </li>
                    <div className="px-8">
                        <h2 className="font-bold">When to use useRef</h2>
                        <div className="px-4">
                        <h2>You need to remember something</h2>
                        <h2>But don’t want to re-render</h2>
                        <h2>Or you need direct DOM access</h2>
                        </div>
                        <h2 className="font-bold">When NOT to use it</h2>
                        <h2 className="px-4">If the value must appear on screen → useState, not useRef.</h2>
                    </div>

                    <li 
                    className="text-center text-xl font-bold py-4 bg-green-200 mx-45 my-9 rounded-4xl">
                        <button
                        onClick={() => setShowDetails((prev) => !prev)}
                        >Their use in the project</button>
                    </li>
                </ul>
            </div>
            {showDetails && (
                <div>
                    <h2>Basically, the project is a random password generator, and the password is generated via basic use of javascript, to generate the password function uses - Math.random, to access random index</h2>
                    <h2>It contains 4 variables - length, numberAllowed, characterAllowed, password</h2>
                    <div className="py-4 px-4">
                        <h2><strong>length:</strong> It is attached to a range type of input which is set between the range of (6,45) and it determine the length of the password.</h2>
                        <h2><strong>numberAllowed: </strong> It determine whether the password will contain numbers or not, it's type is boolean.</h2>
                        <h2><strong>characterAllowed: </strong>Boolean type, determine whether characters will be included or not.</h2>
                        <h2><strong>password: </strong>linked to the display field, changes everytime when one of the three variables is changed</h2>
                        <h2><strong>Copy button: </strong>In this button use of useRef came, when copied the blue bg is shown to text indicating that it has been copied</h2>
                        <h2>For copying we are accessing the clipboard of the window and there we are adding the password(text)</h2>
                    </div>
                    <h2>This is the react used in the project and other it contains only the html to create the buttons, checkbox, range and <strong>Tailwind CSS</strong> for decoration</h2>
                </div>
            )}
        </div>
        </>
    )
}

export default Summary