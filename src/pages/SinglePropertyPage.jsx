import React, { useEffect, useState } from 'react'
import { Flex, Box, Link, Text, Avatar, Image, Center } from '@chakra-ui/react'
import ClipLoader from "react-spinners/ClipLoader";
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import Loader from '../components/loader/Loader';
import millify from 'millify'
import DefaultImage from '../assets/defaulthouse.webp'
import { fetchApi, baseUrl } from '../utils/fetchapi'
import { useParams } from 'react-router-dom'
import ImageScrollBar from '../components/ImageScrollBar'
const SinglePropertyPage = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [properties, setProperties] = useState({})
    const [error, setError] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetchApi(`${baseUrl}/properties/detail?externalID=${id}`).then(({ data }) => {
            setProperties(data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
            setError(true)
        })
    }, [])
    if (loading) {
        return <Loader />
    }
    if (error) {
        return (<p>oops! there is something error</p>)
    }
    return (

        <Box maxWidth={'1000px'} p='4' margin={'auto'}>
            {properties.photos && <ImageScrollBar data={properties.photos} />
            }

            {loading ? <Loader /> : (<Box w={'full'}>
                <Flex paddingTop={2} justifyContent={'space-between'} alignItems={'center'}>
                    <Flex alignItems={'center'}>
                        <Box paddingRight={3} color={'green.400'}>{properties?.isVerified && <GoVerified />}</Box>
                        <Text fontWeight={'bold'} fontSize={'lg'}>AED {millify(properties?.price)}{properties.rentFrequency && `/${properties?.rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar src={properties?.agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex justifyContent={'space-between'} alignItems={'center'} p={1} w={'250px'}>
                    {properties.rooms} <FaBed /> |{properties.baths} <FaBath /> |{millify(properties.area)} sqft <BsGridFill />
                </Flex>
                <Box marginTop={2}>
                    <Text fontSize={'lg'} fontWeight={'bold'} marginBottom={2}>
                        {properties.title}
                    </Text>
                    <Text lineHeight={2} color={'gray.600'}>{properties.description}</Text>
                </Box>
                <Flex flexWrap={'wrap'} justifyContent={'space-between'} textTransform={'uppercase'}>
                    <Flex justifyContent={'space-between'} w={'400px'} p={3}>
                        <Text>Type</Text>
                        <Text fontWeight={'bold'}>{properties?.type}</Text>

                    </Flex>
                    <Flex justifyContent={'space-between'} w={'400px'} p={3}>
                        <Text>purpose</Text>
                        <Text fontWeight={'bold'}>{properties?.purpose}</Text>

                    </Flex>
                    {properties.furnishingStatus && (
                        <Flex justifyContent={'space-between'} w={'400px'} p={3}>
                            <Text>Furnishing Status</Text>
                            <Text fontWeight={'bold'}>{properties?.furnishingStatus}</Text>

                        </Flex>)}
                </Flex>
                <Box>
                    {properties?.amenities?.length && <Text fontWeight={'black'} fontSize={'2xl'} marginTop={5}>Amenities</Text>}
                    <Flex flexWrap={'wrap'}>
                        {properties?.amenities && properties.amenities.map((item) => (
                            item.amenities.map((amenity) => (
                                <Text key={amenity.text}
                                    padding={2}
                                    margin={1}
                                    color={'blue.400'}
                                    bg={'gray.200'}
                                    fontSize={'lg'}
                                    fontWeight={'bold'}
                                    borderRadius={5}

                                > {amenity.text}</Text>
                            ))
                        ))}</Flex>
                </Box>
            </Box>)}

        </Box>
    )
}

export default SinglePropertyPage