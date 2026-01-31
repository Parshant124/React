import './Summary.css'

export default function Summary04(){
    return(
        <>
        <div>
            <div
            className="text-center text-2xl font-bold text-blue-600 bg-gray-400"
            >
                <h1>Day 4 : BG changer</h1>
            </div>
            <div className="text-white">
                <h1
                className="font-semibold"
                >About Project: On clicking different color buttons bg color changes</h1>
                <h2
                className="font-semibold"
                >Hook used: useState()</h2>
                <h2>
                    Buttons have onClick option, and it is a callback function where we are calling setColor function via useState
                </h2>
                <h2>
                    Color variable is used to set the bg color, so everytime it is changed bg changes
                </h2>

                <div
                className="p-8 text-center"
                >
                    <h2>const [color, setColor] = useState('black')</h2>
                    <h2>style={"{{"}backgroundColor: color{"}}"}</h2>
                    <h2>onClick={"{"}()={">"}setColor('red'){"}"}</h2>
                </div>

                <h3>This onClick is used on multiple buttons</h3>
            </div>
        </div>
        </>
    )
}