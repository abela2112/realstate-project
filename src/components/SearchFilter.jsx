import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Box, Flex, Select } from '@chakra-ui/react';
import { getFilterValues, filterData } from '../utils/fetchData';
const SearchFilter = ({ setQuery, query }) => {
    const [filters] = useState(filterData)
    const searchProperties = (filterValues) => {
        const values = getFilterValues(filterValues)
        values.forEach((item) => {
            if (item.value && filterValues[item.name]) {
                setQuery({ ...query, [item.name]: item.value }

                )
            }


        })
    }

    // useEffect(() =>
    // {

    // },[]);
    return (
        <Flex flexWrap={'wrap'} justifyContent={'center'} bg={'gray.100'} p={4}>
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w={'fit-content'} p={2} >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>{item.name}</option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>

    )
}

export default SearchFilter