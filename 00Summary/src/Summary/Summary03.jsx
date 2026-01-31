import './Summary.css'

function Summary03(){
    return(
        <>
        <div>
        <div>
            <h1
            className="font-bold text-center text-2xl text-red-500 bg-gray-400"
            >Day 3 : Tailwind CSS</h1>
        </div>
        <div className="text-white">
            <h2
            className="font-bold"
            >Use of Tailwind</h2>
            <div
            className="mx-4">
                <h3>We can easily write css directy in the jsx file without having much of a trouble</h3>
                <h3>Basically isme hmein alg se css file nhi bnani pdegi, hmein jis component mein styling krni h udhr hi easily className se styling kr skte h</h3>
                <h3
                className="my-2 font-semibold"
                >Why people use Tailwind
                   <div className="mx-4 font-normal">
                        <h4>No switching between HTML and CSS files</h4>
                        <h4>Styles live where the component lives</h4>
                        <h4>Faster prototyping</h4>
                        <h4>No class-name inventing headache</h4>
                        <h4>Easy to maintain in component-based frameworks (React)</h4>
                    </div>
                </h3>
                <h3
                className="py-2 font-semibold"
                >How Tailwind works internally
                    <div
                    className="font-normal px-4"
                    >
                        <h4>You write utility classes</h4>
                        <h4>Tailwind generates CSS at build time</h4>
                        <h4>Unused classes are removed (tree-shaking)</h4>
                        <h4>Final CSS is small and optimized</h4>
                    </div>
                </h3>
            </div>
        </div>
        <div className="text-white">
            <h1
            className="text-center font-bold text-2xl p-4"
            >About Project</h1>
            <h2
            className="font-semibold"
            >Here we have made cards</h2>
            <h3>
                For that we have used just basic Tailwind CSS
            </h3>
            <h3>
                New thing i personally learned is that, ki hum jb main.jsx mein baaki jsx files ko call krte hain tb hm usme arguements pass kr skte hain, jihne hm apni jsx file mein catch krke use kr skte hain
            </h3>
            <h3
            className="font-semibold"
            >Like,</h3>
            <h3
            className="px-2"
            >Card name="Parshant" role="Frontend Developer" ID="2026DEV01"</h3>
            <h3
            className="px-2"
            >function Card({"{"}name, role, ID{"}"})
            </h3>

        </div>
        </div>
        </>
    )
}

export default Summary03