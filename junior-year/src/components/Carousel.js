import ImageList from "./ImageList";
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
const Carousel = () => {

    const imageList = [
        {link: image1, id: 1},
        {link: image2, id: 2},
        {link: image3, id: 3}
    ]
    
    return (
        <div>
            <ImageList imageList = {imageList} />
        </div>
    );
}
 
export default Carousel;