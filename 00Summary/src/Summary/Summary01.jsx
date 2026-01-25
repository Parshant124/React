import './Summary.css'

function Summary01(){
    return(
        <>
        <h1
        className="text-center font-bold text-2xl text-green-400 bg-gray-200"
        >Summary of Day 1 of learning react</h1>
        <ul
        className=""
        >
            <h2
            className="font-bold my-2"
            >Some rules of vite project are that</h2>
            <div
            className="px-4"
            >
                <li>function's name's 1st letter must be capital and its extension must be jsx.</li>
                <li>Write export default FuncName at the end of the file</li>
                <li>Import this file in other file before usage</li>
                <li>Can only return single element at a time, so preffered to use div or empty to wrap the elements</li>
            </div>
        </ul>
        <ul>
            <h2 
            className="my-2 font-bold"
            >Flow of react</h2>
            <div
            className='px-4'>
                <li>React is none other than html,css,js bundle together</li>
                <li>In src, main.jsx exist which is the js file attached to the html</li>
                <li>In src, we can create custom components followed by the upwritten rules</li>
            </div>
        </ul>
        <ul>
            <h2
            className="my-2 font-bold"
            >Some commands</h2>
            <div
            className="px-4">
                <li>npm create vite - to create the project folder</li>
                <li>npm run dev - to execute the project</li>
                <li> q+enter - to end project</li>
                <li>React-dom is for web and React-native is for apps</li>
            </div>
        </ul>
        <h3></h3>
        </>
    )
}

export default Summary01