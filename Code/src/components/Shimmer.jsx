import {Skeleton} from '@mui/material';


// const Shimmer = () => {
//     return (
//         <div className='card'>
//           <Skeleton variant="rectangular" width={200} height={225} animation="wave" />
//           <Skeleton variant="text" width={200} height={30} animation="wave" />
//           <Skeleton variant="text" width={100} height={20} animation="wave" />
//           <Skeleton variant="text" width={150} height={20} animation="wave" />
//         </div>
//       )
// }

  const Shimmer = () => {
    return(
      
      <div className='m-4 w-52 rounded-xl animate-pulse'>
      <div className='bg-gray-300 w-48 h-48 rounded-md'></div>
      <div className='h-2.5 my-4 bg-gray-300 rounded-full w-20'></div>
      <div className='h-2.5 my-4 bg-gray-300 rounded-full w-24 '></div>
      <div className='h-2.5 my-4 bg-gray-300 rounded-full w-40'></div>
      </div>
      
    )
  }

export default Shimmer;