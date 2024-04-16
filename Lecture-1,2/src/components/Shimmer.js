import {Skeleton} from '@mui/material';


const Shimmer = () => {
    return (
        <>
          <Skeleton variant="rectangular" width={200} height={300} animation="wave" />
          <Skeleton variant="text" width={200} height={30} animation="wave" />
          <Skeleton variant="text" width={100} height={20} animation="wave" />
          <Skeleton variant="text" width={150} height={20} animation="wave" />
        </>
      )
}

export default Shimmer;