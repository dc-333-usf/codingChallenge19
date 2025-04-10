import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, setTours, onRemove }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchTours = async () => {
        try {
            const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
            const data = await response.json();
            const trimmed = data.map((tour) => ({
                id: tour.id,
                name: tour.name,
                info: tour.info,
                price: tour.price,
                image: tour.image,
            }));
            setTours(trimmed);
            setIsLoading(false);
        } catch (error) {
            setError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error fetching tours</h2>;
    }

    if (tours.length === 0) {
        return (
            <div>
                <h2>All tours loaded</h2>
                <button onClick={fetchTours}>Refresh</button>
            </div>
        );
    }

    return (
        <section className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} onRemove={onRemove} />
            ))}
        </section>
    );
};

export default Gallery;