// function Message({ text }) {
//     return (
//       <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-md mb-4" role="alert">
//         {text}
//       </div>
//     );
//   }
  
//   export default Message;




function Message({ text, type = 'info' }) {
    const bgColor = type === 'error' ? 'bg-red-100 border-red-300 text-red-700' : 'bg-gray-100 border-gray-300 text-gray-700';
    
    return (
      <div className={`${bgColor} px-4 py-2 rounded-md mb-4`} role="alert">
        {text}
      </div>
    );
  }
  
  export default Message;
  
  