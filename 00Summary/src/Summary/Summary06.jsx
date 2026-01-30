import hook from './Pics/Summary06_pic.png'

export default function Summary06(){
    return(
        <>
        <div>
            <div className="text-center text-2xl text-blue-600 font-bold bg-gray-200">
                <h1>Day 6 : Currency exchanger</h1>
            </div>
            <div>
                <h2 className="font-semibold py-4">About Project</h2>
                <div className="mx-4">
                    <h2>Here we simply convert one currency value into other, variables(FromAmount, From, To) From & To are the currencies type</h2>
                    <h2>Here we are fetching real time currency exchange prices via api calling</h2>
                </div>
                <h2 className="font-semibold">Hooks used:</h2>
                <h2 className="px-4">useState and a custom hook</h2>
                
                <h2 className="font-semibold mx-4">useState</h2>
                <div className="mx-8">
                    <h2>const [amount, setAmount] = useState(0)</h2>
                    <h2>const [from, setFrom] = useState("usd")</h2>
                    <h2>const [to, setTo] = useState("inr")</h2>
                    <h2>const [convertedAmount, setConvertedAmount] = useState(0)</h2>
                </div>
                <h2 className="font-semibold mx-4">Custom hook</h2>
                <div className="mx-8">
                    <h2>It is a function with parameters and it returns someting, in this case we are passing from as parameter then it fetches the api and return all the currency exchanges for that from currency</h2>
                    <h2>Then from that we fetch the value of to currency and calculate its value</h2>
                    <img src={hook} alt="hook"/>
                </div>
            </div>
        </div>
        </>
    )
}