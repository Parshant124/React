import './Summary.css'

function Summary02(){
    return(
        <>
        <div>
            <div
            className="text-center bg-gray-200 text-2xl font-bold text-yellow-500">
                <h1>Day 2 : HOOKS</h1>
            </div>
            <div>
                <h2>
                    There are a lot of hooks present and used in React, some are
                </h2>
                <div
                className="p-2"
                >   
                    <h2
                    className="font-semibold"
                    >useState</h2>
                    <div
                    className="px-4"
                    >
                        <h3>It consist of two parts</h3>
                        <h3
                        className="mx-6"
                        >const(Data, setData) = useState()</h3>
                        <h3>Here Data is variable, setData is a function such as setData(val) changes the value</h3>
                        <h3>Data is initialized by passing a value in useState(val)</h3>
                    </div>

                    <h2
                    className="font-semibold py-2"
                    >useEffect</h2>
                    <div
                    className="mx-6"
                    >
                        <h2>It contains two parts- function and dependicies</h2>
                        <h2 className="mx-6">useEffect(()={">{"} </h2>
                        <h2 className="mx-10">inside function</h2>
                        <h2 className="mx-7">{"}"},[dependicies array])</h2>
                        <h2>Everytime one of the dependicies is changed then it will call the function</h2>
                        <h2>At first when the page reloads, it will be executed i.e. it will call the function</h2>
                    </div>

                    <h2
                    className="font-semibold py-2"
                    >useCallback</h2>
                    <div className="mx-6">
                        <h2>It's only purpose is to optimize the code, this project works fine without it. Useful for big projects.</h2>
                        <h2>It has two slots, one for the function and other for the dependicies</h2>
                        <h2>Whenever deps changes it recreates that function(not execute)</h2>
                        <h2>Function will only be executed when called.</h2>
                        <h2>What useCallback does NOT do</h2>
                        <h2>❌ It does NOT make code faster by default</h2>
                        <h2>❌ It does NOT reduce renders by itself</h2>
                        <h2>❌ It does NOT stop state updates</h2>
                        <h2>It only stabilizes function identity.</h2>
                    </div>

                    <h2
                    className="font-semibold py-2"
                    >useRef</h2>
                    <div className="mx-6">
                        <h2 className="font-bold">When to use useRef</h2>
                        <div className="px-4">
                        <h2>You need to remember something</h2>
                        <h2>But don’t want to re-render</h2>
                        <h2>Or you need direct DOM access</h2>
                        </div>
                        <h2 className="font-bold">When NOT to use it</h2>
                        <h2 className="px-4">If the value must appear on screen → useState, not useRef.</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Summary02