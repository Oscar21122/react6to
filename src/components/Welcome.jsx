import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function Welcome() {
  return (
  <Stack 
    direction="row" 
    spacing={2} 
    justifyContent="center" 
    alignItems="center"
    sx={{ height: "100vh" }}
  >
    <Avatar sx={{ bgcolor: deepOrange[500] }}>W</Avatar>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>E</Avatar>
    <Avatar sx={{ bgcolor: deepOrange[500] }}>L</Avatar>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>C</Avatar>
    <Avatar sx={{ bgcolor: deepOrange[500] }}>O</Avatar>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>
    <Avatar sx={{ bgcolor: deepOrange[500] }}>E</Avatar>
  </Stack>
  );
}