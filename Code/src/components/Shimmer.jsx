import {Skeleton} from '@mui/material';


const Shimmer = () => {
    return (
        <div className='card'>
          <Skeleton variant="rectangular" width={200} height={225} animation="wave" />
          <Skeleton variant="text" width={200} height={30} animation="wave" />
          <Skeleton variant="text" width={100} height={20} animation="wave" />
          <Skeleton variant="text" width={150} height={20} animation="wave" />
        </div>
      )
}

  // const Shimmer = () => {
  //   return(
  //     <div className='card'>
  //     <div className='shimmer-card'></div>
  //     <div className='shimmer-text'></div>
  //     </div>
  //   )
  // }

export default Shimmer;