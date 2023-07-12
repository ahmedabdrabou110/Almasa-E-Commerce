import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating() {
  const [value, setValue] = React.useState();
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
      display={"flex"}
      justifyContent={"flex-end"}
      margin={"10px 0"}
    >
      
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue)
        }}
      />
      
    </Box>
  );
}