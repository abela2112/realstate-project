import React from 'react'
import { Flex, Box, Link, Text, Avatar, Image, Center } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import DefaultImage from '../assets/defaulthouse.webp'

const Property = ({ property: { externalId, coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified } }) => {
    return (
        <Link href={`/prop/${externalId} `}>
            <Flex flexWrap={'wrap'} justifyContent={'flex-start'} width={'420px'} paddingTop={0} cursor={'pointer'} paddingRight={5}>
                <Box>
                    <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={420} height={260} alt='house' />
                </Box>
                <Box w={'full'}>
                    <Flex paddingTop={2} justifyContent={'space-between'} alignItems={'center'}>
                        <Flex alignItems={'center'}>
                            <Box paddingRight={3} color={'green.400'}>{isVerified && <GoVerified />}</Box>
                            <Text fontWeight={'bold'} fontSize={'lg'}>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box>
                            <Avatar src={agency?.logo?.url} />
                        </Box>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'} p={1} w={'250px'}>
                        {rooms} <FaBed /> |{baths} <FaBath /> |{millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize={'lg'}>
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </Text>
                </Box>
            </Flex>

        </Link>
    )
}

export default Property