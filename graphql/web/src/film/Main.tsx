import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import FilmList from './FilmList';

export default function Main() {
  return (
    <Box>
      <Heading size="lg">
        The best
        <FilmList />
      </Heading>
    </Box>
  );
}
