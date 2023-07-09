import React, { useEffect, useState } from 'react'
import { Flex, Box, Text, Icon, Center } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import SearchFilter from '../components/SearchFilter'
import { useLocation } from 'react-router-dom'
import Property from '../components/Property'
import { Image } from '@chakra-ui/react'
import noresult from '../assets/noresult.svg'
import { fetchApi, baseUrl } from '../utils/fetchapi'
import Loader from '../components/loader/Loader'
const Search = () => {
    const [searchFilter, setSearchFilter] = useState(false)
    const location = useLocation()
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState({})
    useEffect(() => {
        const purpose = query.purpose || 'for-rent';
        const rentFrequency = query.rentFrequency || 'yearly';
        const minPrice = query.minPrice || '0'
        const maxPrice = query.maxPrice || '100000'
        const roomsMin = query.roomsMin || '0'
        const bathsMin = query.bathsMin || '0'
        const sort = query.sort || 'price-desc';
        const areaMax = query.areaMax || '35000';
        const locationExternalIDs = query.locationExternalIDs || '5002';
        const categoryExternalID = query.categoryExternalID || '4';
        setLoading(true);
        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`).then(({ data }) => {
            setProperties(data?.hits)
            setLoading(false)
        }).catch(err => console.log(err));

    }, [query])


    return (
        <Box>
            <Flex
                width={'full'}
                bg={'grey.500'}
                justifyContent={'center'}
                alignItems={'center'}
                fontWeight={'black'}
                fontSize={'lg'}
                borderBottom={'1px'}
                p={2}
                borderColor={'grey.200'}
                cursor={'pointer'}
                onClick={() => setSearchFilter(!searchFilter)}

            >
                <Text>Search Property By filter</Text>
                <Icon paddingLeft={'2'} as={BsFilter}></Icon>
            </Flex>

            {searchFilter && <SearchFilter setQuery={setQuery} query={query} />}
            <Text fontSize={'2xl'} p={4} fontWeight={'bold'}>
                Properties {query.purpose || location?.search.split('=')[1]
                }

            </Text>
            {loading ? <Loader /> : <div>  <Flex flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>{properties?.map((property) => (
                <Property property={property} key={property.id} />
            ))}</Flex>
                {properties.length === 0 && (
                    <Flex justifyContent={'center'} alignItems={'center'} >
                        <Image src={noresult} />
                        <Text fontSize={'2xl'} marginTop={3}>No Result Found</Text>
                    </Flex>
                )}</div>}
        </Box>
    )
}

export default Search