import React from 'react';
import {Box} from '@chakra-ui/react';


const LayoutWrapper = ({children}) => {
  return (<Box w='100%' h='100vh' overflow='hidden' background={'linear-gradient(147deg, var(--gradient-color-first) 11.15%, var(--gradient-color-second) 58.72%)'}>
    {children}</Box>);
};

export default LayoutWrapper;
