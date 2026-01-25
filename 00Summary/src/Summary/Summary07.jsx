import pic from './Summary07_pic.png'

export default function Summary07(){
    return(
        <>
        <div>
            <div className="text-center text-yellow-500 text-2xl font-bold bg-gray-200">
                <h1>Day 7 : React Router</h1>
            </div>
            <div>
                <h2
                className="font-semibold "
                >Layout.jsx</h2>
                <div className="mx-4">
                    <h2>It is used as a basic layout bcoz we want to keep header and footer at place and only want to change the data in between.</h2>
                    <h2>Outlet(provided by react-router-dom) is used, basically outlet content changes and header, footer remains unchanged.</h2>
                    <h2>This layout is used as element in router in main.jsx, where outlet properties is utilised</h2>
                </div>

                <h2
                className="font-semibold my-4"
                >router</h2>
                <div className="px-4">
                    <h2>Used in main.jsx</h2>
                    <h2>createBrowserRouter is used to create the router</h2>
                    <h2>It consists of two things, path and element.</h2>
                    <h2>Path is what is present after / in that url</h2>
                    <h2>Element is the jsx file executed at that path</h2>
                    <img src={pic}/>
                    <h2>Layout provides a base and (home, about, contact, others...) are nested in it.</h2>
                    <h2>In user ':' is used, to store the value, isse hmein User mein directly iska access milta h</h2>
                    <h2>useParams is used to access that variable (userid)</h2>
                </div>

                <h2
                className="font-semibold my-4"
                >loader</h2>
                <div className="px-4">
                    <h2>yeh button ke upr hover krne se hii api ko call kr skta h</h2>
                    <h2>jaise Github wale pr click krne se hi vo api fetch krega jisme thoda lag feel hoga</h2>
                    <h2>uska optimization loader h, jise path and element ke saath use kr skte hain and vo ek callback function ko call krega</h2>
                    <h2 className="font-semibold">useLoaderData</h2>
                    <h2>this hook is used to store that data into a variable</h2>
                </div>
            </div>

        </div>
        </>
    )
}