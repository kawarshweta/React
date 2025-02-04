const Shimmer = () =>{
    return (
        <div className="flex flex-wrap justify-center">
            {[...Array(12)].map((_, index) => (
            <div key={index} className="h-[240px] w-[250px] bg-gray-100 rounded-lg overflow-hidden m-3 p-4 animate-pulse flex flex-col">
                <div className="h-32 w-full bg-gray-300 rounded mb-3"></div>
                <div className="flex flex-col space-y-2 w-full">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
            </div>
            ))}
      </div>
    );
}

export default Shimmer;