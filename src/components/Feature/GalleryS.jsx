import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const images = [
    { image: "https://media.istockphoto.com/id/1336889958/photo/classic-model-toy-car-on-white-background.jpg?s=612x612&w=0&k=20&c=0tSbfJ7cHMjdDM8hVvC45iUhPULYyUHGYJVRTqdgDiQ=", height: 150 },
    { image: "https://media.istockphoto.com/id/525833871/photo/red-plastic-toy-car.jpg?s=612x612&w=0&k=20&c=WWMFlwgRsdkOugWFf6ezs_GZlTTMeR_8lqg9CWXySBE=", height: 30 },
    { image: "/images/gallery.jpg", height: 90 },
    { image: "https://media.istockphoto.com/id/655295584/photo/spinning-buggy.jpg?s=612x612&w=0&k=20&c=ZeKq8LXi0GcuW3pZk-ugz1e3-OEwXnUy5yBr8JJYY00=", height: 70 },
    { image: "https://media.istockphoto.com/id/96916047/photo/toy-police-car.jpg?s=612x612&w=0&k=20&c=-qg8nV5CFBHcMk3cxiGHosr8B4fo1m10XAEKkOPXnNs=", height: 100 },
    { image: "https://media.istockphoto.com/id/578298534/photo/ford-fusion-police-car-hot-wheels-diecast-toy-car.jpg?s=612x612&w=0&k=20&c=bjb8H43GP69BuDBQHZG-KWF2_OHkFyagyBwlqdfmosA=", height: 150 },
    { image: "https://media.istockphoto.com/id/1126460118/photo/metal-toy-car-police.jpg?s=612x612&w=0&k=20&c=_GNPu7LvEJW-kCOTRTasxF37TqxcvdNPx6S24zUBtJI=", height: 30 },
    { image: "https://media.istockphoto.com/id/525833871/photo/red-plastic-toy-car.jpg?s=612x612&w=0&k=20&c=WWMFlwgRsdkOugWFf6ezs_GZlTTMeR_8lqg9CWXySBE=", height: 30 }
];

const GalleryS = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className='mt-20 md:mb-32 text-center'>
            <h1 className="text-center text-3xl font-semibold text-secondary mb-10">Awesome <span className='text-accent font-bold'>Toys</span> in Frame</h1>
            <div className='flex justify-center'>
                <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
                    {images.map((item, index) => (
                        <Item key={index}
                data-aos="fade-right"
data-aos-delay={index * 100}
                    data-aos-duration="1000"
                        >
                            <img
                                src={item.image}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    display: 'block',
                                    width: '100%',
                                }}
                            />
                        </Item>
                    ))}
                </Masonry>
            </div>
        </div>

    )
}

export default GalleryS
