import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductCard from '../ProductCard';
import { Tabs } from '@mui/material';
import PrimaryButton from '../../Common/PrimaryButton';

export default function LabTabs({ setCategoryName, products }) {
    const [value, setValue] = useState('Cars');
    const [viewAll, setViewAll] = useState(false); // State variable to track "View All" button click
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setCategoryName(newValue);
        setViewAll(!viewAll);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box>
                    <TabList onChange={handleChange} className='grid grid-cols-1' variant="scrollable" >
                        <Tab className='text-accent' label="Cars" value="Cars" />
                        <Tab className='bg-accent' label="Trucks" value="Trucks" />
                        <Tab className='bg-accent' label="Mini Trucks" value="Mini Trucks" />
                        <Tab className='bg-accent' label="Police Cars" value="Police Cars" />
                    </TabList>
                </Box>
                <TabPanel value="Cars">
                    <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
                        {viewAll
                            ? products?.map((toy, index) => (
                                <ProductCard product={toy} key={index} />
                            ))
                            : products?.slice(0, 6).map((toy, index) => (
                                <ProductCard product={toy} key={index} />
                            ))}
                    </div>
                    <div className='flex justify-center mt-10'>
                        {products.length > 6 && (
                            <button
                                onClick={() => {
                                    setViewAll(!viewAll);
                                    if (viewAll) {
                                        setDisplayedItems(6);
                                    }
                                }}
                            >
                                <PrimaryButton
                                    text={viewAll ? 'View Less' : 'View All'}
                                />
                            </button>
                        )}
                    </div>
                </TabPanel>
                <TabPanel value="Trucks">
                    <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
                        {viewAll
                            ? products?.map((toy, index) => (
                                <ProductCard product={toy} key={index} />
                            ))
                            : products?.slice(0, 6).map((toy, index) => (
                                <ProductCard product={toy} key={index} />
                            ))}
                    </div>
                    <div className='flex justify-center mt-10'>
                        {products.length > 6 && (
                            <button
                                onClick={() => {
                                    setViewAll(!viewAll);
                                    if (viewAll) {
                                        setDisplayedItems(6);
                                    }
                                }}
                            >
                                <PrimaryButton
                                    text={viewAll ? 'View Less' : 'View All'}
                                />
                            </button>
                        )}
                    </div>
                </TabPanel>
                <TabPanel value="Mini Trucks">
                    <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
                        {viewAll
                            ? products?.map((toy, index) => (
                                <ProductCard product={toy} key={index} />
                            ))
                            : products?.slice(0, 6).map((toy, index) => (
                                <ProductCard product={toy} key={index} />
                            ))}
                    </div>
                    <div className='flex justify-center mt-10'>
                        {products.length > 6 && (
                            <button
                                onClick={() => {
                                    setViewAll(!viewAll);
                                    if (viewAll) {
                                        setDisplayedItems(6);
                                    }
                                }}
                            >
                                <PrimaryButton
                                    text={viewAll ? 'View Less' : 'View All'}
                                />
                            </button>
                        )}
                    </div>
                </TabPanel>
                <TabPanel value="Police Cars">
                    <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
                        {viewAll
                            ? products?.map((toy, index) => (
                                <ProductCard product={toy} key={index} />
                            ))
                            : products?.slice(0, 6).map((toy, index) => (
                                <ProductCard product={toy} key={index} />
                            ))}
                    </div>
                    <div className='flex justify-center mt-10'>
                        {products.length > 6 && (
                            <button
                                onClick={() => {
                                    setViewAll(!viewAll);
                                    if (viewAll) {
                                        setDisplayedItems(6);
                                    }
                                }}
                            >
                                <PrimaryButton
                                    text={viewAll ? 'View Less' : 'View All'}
                                />
                            </button>
                        )}
                    </div>
                </TabPanel>
            </TabContext>
        </Box>
    );
}