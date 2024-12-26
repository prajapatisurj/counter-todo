// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [popup, setPopup] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const getData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     setData(data);
//     console.log(data);
//   };

//   const getValue = (post) => {
//     setPopup(post);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const closePopup = () => {
//     setPopup(null);
//   };

//   const filterVal = data.filter((item) =>
//     item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by title..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         style={{ marginBottom: "20px", padding: "8px", width: "300px" }}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filterVal.map((item) => (
//             <tr key={item.id} onClick={() => getValue(item)}>
//               <td>{item.id}</td>
//               <td>{item.title}</td>
//               <td>{item.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {popup && (
//         <div style={popupStyle}>
//           <div style={popupContentStyle}>
//             <h2>{popup.title}</h2>
//             <p>{popup.body}</p>
//             <button onClick={closePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Basic styling for the popup
// const popupStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 1000,
// };

// const popupContentStyle = {
//   backgroundColor: "#fff",
//   padding: "20px",
//   borderRadius: "5px",
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
// };

// export default App;

import React from "react";
// import Rating from "./Rating";
import ToDoList from "./components/ToDoList";
import Parent from "./components/Memo";
import Counter from "./Counter";

const App = () => {
  // const rating = 3.5;
  return (
    <div>
      {/* <Rating rating={rating} /> */}
      {/* <ToDoList /> */}
      {/* <Parent/> */}
      <Counter/>
    </div>
  );
};

export default App;
