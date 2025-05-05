import React from 'react';
import { Card, CardContent, Skeleton as MuiSkeleton } from '@mui/material';
import './Skeleton.scss';

const Skeleton = ({ count = 1 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card key={index} className="skeleton-card">
            <MuiSkeleton
              variant="rectangular"
              width="100%"
              height={300}
              animation="wave"
            />
            <CardContent>
              <MuiSkeleton
                variant="text"
                width="80%"
                height={24}
                animation="wave"
              />
              <MuiSkeleton
                variant="text"
                width="40%"
                height={20}
                animation="wave"
              />
              <MuiSkeleton
                variant="text"
                width="60%"
                height={20}
                animation="wave"
              />
            </CardContent>
          </Card>
        ))}
    </>
  );
};

export default Skeleton; 