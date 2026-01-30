import pic from './Pics/Summary08_pic.png'
import pic2 from './Pics/Summary08_pic2.png'

export default function Summary08(){
    return(
        <>
        <div className="text-center">
        <div className = "bg-gray-200">
            <h1 className="font-bold text-2xl text-violet-500 text-center">
                Day 8: Context API
            </h1>
        </div>
        <div>
            <h1 className="font-semibold">Context lets you say:</h1>
            <h1 className="mx-16">“This data is global. Any component can read it directly.”</h1>
            <img src={pic2} className="w-150  mx-120"/>
            <h1 className="m-4">It is used to share the data globally without prop-drilling</h1>
            <img src={pic} className="h-150 w-150 mx-120"/>
        </div>
        <div>
            <h1>Here we made two projects : </h1>
            <h2 className="mx-8">Login-{">"} fetch username and used in other file</h2>
            <h2 className="mx-8">Theme-{">"} press button to change theme of other component</h2>
        </div>
        </div>
        <div>
            <h1 className = "text-2xl font-semibold text-center my-5">About Project</h1>
        </div>
        <div>
            <h2>Hooks used: useContext, useState, useEffect</h2>
            <h2>Tailwindcss, </h2>
        </div>
        <div>
            <h1 className="font-semibold m-4">Project 1</h1>
            <div className="mx-8">
                <h2>Two components made: Login and Profile</h2>
                <h2>Two context files created: one to create that context and other to use it.</h2>
                <h2>Login page is formed via basic html, which accepts username and password</h2>
                <h2>now the value passed as username in login is used to setUser(username) via useContext</h2>
                <h2>now this user value is accessed in Profile via useContext</h2>
            </div>
        </div>
        <div>
            <h1 className="font-semibold m-4">Project 2</h1>
            <div className="mx-8">
                <h2>Two components: Card and ThemeBtn</h2>
                <h2>One context file: theme.js (context made and provided in same file)</h2>
                <h2>we can also pass methods(functions) in useContext to be used.</h2>
                <h2>Card contains all the info and css, while ThemeBtn is button to click.</h2>
                <h2>If the button is checked it is considered as dark and otherwise light.</h2>
                <h2>onClick is used to check status & call functions to change the theme value.</h2>
                <h2>This theme value is accessed via Card and it sets its theme accordingly.</h2>
            </div>
        </div>
        </>
    )
}