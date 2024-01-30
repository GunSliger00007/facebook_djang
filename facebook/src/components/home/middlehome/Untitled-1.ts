// import React, { useState } from 'react';
// import Friend from '../../my Data/friend.js';
// import Friendrequest from'../../my Data/friendrequest.js'

// const Home = () => {
//   const [friendlist, setFriendlist] = useState(Friend);
//   const [friendrequest, setFriendrequest] = useState(Friendrequest);

//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <p>This is the home component of your React app.</p>
//       <ul>
//         <h1>Friends</h1>
//         {friendlist.map((friend, index) => {
//           const { title, age } = friend; // Destructure here inside the map function
//           return (
//             <li key={index}>
//               <p>Name: {title}</p> 
//               <p>Age: {age}</p>
//             </li>
//           );
//         })}
//       </ul>
//       <ul>
//         <h1>Friends</h1>
//         {friendrequest.map((friendrequest, index) => (
//           <li key={index}>
//             <p>Name: {friendrequest.title}</p>
//             <p>Age: {friendrequest.age}</p>
//             {/* Add more details as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
