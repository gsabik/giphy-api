const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="spinner-border border-gray-500 animate-spin inline-block w-10 h-10 border-4 rounded-full" role="status"></div>
        </div>
    );
}

export default Loading