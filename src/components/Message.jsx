function Message({ text }) {
    return (
      <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-md mb-4" role="alert">
        {text}
      </div>
    );
  }
  
  export default Message;