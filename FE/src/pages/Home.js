import React, { useEffect, useState } from 'react'
import BottomGrid from '../components/BottomGrid';
import Slick from '../components/Slick';
import SliderMain from '../components/SliderMain';

import TourApi from '../api/TourApi'

const Home = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const response = TourApi.getAll(1, 6);
        response.then(res => setTours(res.content));
    }, []);

    return (
        <>
            <SliderMain />
            <BottomGrid />
            <Slick title="Tour du lịch" tours={tours} />
        </>
    )
}

export default Home