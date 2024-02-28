import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import LoaderSpinner from "../LoaderSpinner";

const Loader = () => {
    return(<Box w='100%' h='100%'>
        <Flex h='100%' justifyContent={'center'} alignItems={'center'}>
            <LoaderSpinner/>
        </Flex>
    </Box>)
}

export default Loader