import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import HorizontalScroll from 'react-horizontal-scrolling'
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