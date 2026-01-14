function Card(props){

    return(
        <>
            <div className="w-80 bg-green-400 rounded-xl shadow-lg p-6 text-center">
        
        {/* Profile Image */}
        <img
          src="https://images.pexels.com/photos/18465582/pexels-photo-18465582.jpeg"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
        />

        {/* Name */}
        <h2 className="mt-4 text-xl font-bold text-gray-800">
          {props.name}
        </h2>

        {/* Role */}
        <p className="text-sm text-gray-500">
          {props.role}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-gray-200"></div>

        {/* Info */}
        <p className="text-sm text-gray-600">
          ID: {props.ID}
        </p>

        <p className="text-sm text-gray-600">
          Email: parshant@example.com
        </p>

      </div>
        </>
    )
}

export default Card;