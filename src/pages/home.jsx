import React, { useEffect, useState } from 'react'
import { Box, Flex, Button, Text, Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { fetchApi, baseUrl } from '../utils/fetchapi'
import axios from 'axios'
import Property from '../components/Property'
const Baner = ({ purpose, desc1, desc2, title1, title2, buttonText, linkname, imgUrl }) => (
    <Flex flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} m={3}>

        <Image boxSize={'sm'} width={500} height={300} src={imgUrl} alt='banner' />
        <Box p={5}>
            <Text color={'grey'} fontSize={'sm'} fontWeight={'medium'}>{purpose}</Text>
            <Text fontSize={'3xl'} fontWeight={'bold'}>{title1}<br />{title2}</Text>
            <Text fontSize={'lg'} paddingTop={3} paddingBottom={3} color={'grey.700'}>{desc1}<br />{desc2}</Text>
            <Button fontSize={'xl'} bg={'blue.300'} color={'white'}>
                <Link href={linkname}>{buttonText}</Link>

            </Button>
        </Box>
    </Flex>

)
const Home = () => {
    const [propertiesForSale, setPropertiesForSale] = useState([])
    const [propertiesForRent, setPropertiesForRent] = useState([])

    useEffect(() => {
        // axios.get(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`, {
        //     headers: {
        //         "X-RapidAPI-Key": "db577f6aedmshfc83550d94401f9p1d5f1cjsn3dc7fc63b3dd",
        //         "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        //     },
        // }).then(({ data }) => {
        //     console.log(data);
        // })
        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`).then(({ data }) => {
            setPropertiesForSale(data?.hits)
        });

        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`).then(({ data }) => {
            setPropertiesForRent(data?.hits)
        });

    }, [])



    return (
        <div>

            <Baner
                purpose={"RENT A HOME"}
                title1={"rental homes for"}
                title2={"everyone"}
                desc1={"Explore Apartments,Villas,Homes"}
                desc2={"and More"}
                linkname={'/search?purpose=for-rent'}
                buttonText={"Explore Renting"}
                imgUrl={"https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"}

            />
            <Flex flexWrap={'wrap'}>
                {propertiesForRent.map(property => (
                    <Property property={property} key={property.id} />
                ))}
            </Flex>
            <Baner
                purpose={"Buy A HOME"}
                title1={"Find ,Buy & Own "}
                title2={"your Dream House"}
                desc1={"Explore Apartments,Villas,Homes"}
                desc2={"and More"}
                linkname={'/search?purpose=for-sale'}
                buttonText={"Explore Buying"}
                imgUrl={"https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"}

            />
            <Flex flexWrap={'wrap'}>
                {propertiesForSale.map(property => (
                    <Property property={property} key={property.id} />
                ))}
            </Flex>
        </div>
    )
}

export default Home