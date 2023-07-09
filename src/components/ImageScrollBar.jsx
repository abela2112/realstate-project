import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { useContext } from "react";
//import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import HorizontalScroll from 'react-horizontal-scrolling'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignContent="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="2xl"
                cursor="pointer"
                d={["none", "none", "none", "block"]}
            />
        </Flex>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignContent="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
                d={["none", "none", "none", "block"]}
            />
        </Flex>
    );
};

export default function ImageScrollbar({ data }) {
    return (
        <Box style={{ whiteSpace: "nowrap" }}>
            <HorizontalScroll>
                {data.map((item) => (
                    <Box width='910px' display={'inline-block'} key={item.id} overflowX='hidden' p='1'>
                        <Image src={item.url} width={1000} height={500} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
                    </Box>
                ))}
            </HorizontalScroll>
        </Box>
    )
}