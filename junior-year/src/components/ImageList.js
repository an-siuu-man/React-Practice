import './ImageList.css'
import { useEffect, useRef } from 'react';

const ImageList= ({ imageList }) => {
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);
    const currentIndex = useRef(0);

    useEffect(() => {

        const startCarousel = () => {
            const imageCount = imageList.length;
            intervalRef.current = setInterval(() => {
                currentIndex.current = (currentIndex.current + 1) % imageCount;
                if (carouselRef.current) {
                    carouselRef.current.style.transform = `translateX(-${currentIndex.current * 100}vw)`;
                }
            }, 3000)
        };
        startCarousel();

        return () => clearInterval(intervalRef.current);
    }, [imageList]);



    return (
        <div className="carousel-container" ref={carouselRef}>
                {imageList.map((image) => (
                    <img className='carousel-image' src={image.link} key={image.id} alt=''/>
                ))}
        </div>
    );
}
 
export default ImageList;