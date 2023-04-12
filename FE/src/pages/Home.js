import React, { useEffect, useState } from 'react'
import BottomGrid from '../components/BottomGrid';
import Slick from '../components/Slick';
import SliderMain from '../components/SliderMain';

import TourApi from '../api/TourApi'

const Home = () => {
    const [tours, setTours] = useState([]);
    const [tours1, setTours1] = useState([]);
    const [tours2, setTours2] = useState([]);

    useEffect(() => {
        const response = TourApi.getAll(1, 10);
        const response1 = TourApi.getAll(2, 10);
        const response2 = TourApi.getAll(3, 10);
        response.then(res => setTours(res.content));
        response1.then(res => setTours1(res.content));
        response2.then(res => setTours2(res.content));
    }, []);

    return (
        <>
            <SliderMain />
            <BottomGrid />
            <Slick title="Tour du lịch" title2="Hot tour" tours={tours} />
            <Slick title="" tours={tours1} />
            <Slick title="" tours={tours2} />
        </>
    )
}

export default Home