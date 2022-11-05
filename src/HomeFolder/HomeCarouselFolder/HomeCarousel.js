import './HomeCarousel.css';
///importing  Carousel component after installing react-bootstrap library using npm
import Carousel from 'react-bootstrap/Carousel';

///importing the images for the sliding carousel
import image1 from './carouselImages/carousel-c.jpg';
import image2 from './carouselImages/carousel2.jpg';
import image3 from './carouselImages/carousel3.jpg';

///using the react-bootstrap caroulsel library (checkout react-bootstrap.github.io for more)
function HomeCarousel() {
  return (
    <Carousel variant="dark" fade={true} className="carousel">
      <Carousel.Item>
        <img
          className="d-block"
          src={image1}
          alt="First slide"
          width={500}
          height={500}
        />
        <Carousel.Caption >
          <div className="center-wrapper">
          <div className="center" >
            <h5 className='h5' style={{fontSize:45, color:'white', fontFamily: 'helvetica'}}>Your one stop shop for all for all native food you need.</h5>
            <p className="p" style={{fontSize:20, color:'red'}}>Easily find delicacy of various kind.</p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={image2}
          alt="Second slide"
          width={500}
          height={500}
        />
        <Carousel.Caption>
        <div className="center-wrapper">
          <div className="center" >
            <h5 className='h5' style={{fontSize:45, color:'red', fontFamily: 'helvetica'}}>Delivered in 45min or <b>IT'S FREE.</b></h5>
            <p className="p"style={{fontSize:20, color:'white'}} >Minimum time delivery on order placement.
            Item is free for any fullfilment passes 45minutes.</p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={image3}
          alt="Third slide"
          width={500}
          height={500}
        />
        <Carousel.Caption>
        <div className="center-wrapper">
          <div className="center" >
            <h5 className='h5' style={{fontSize:45, color:'white', fontFamily: 'helvetica'}}>Get sharp customer service
            reply in under 20min of send.</h5>
              <p className="p" style={{fontSize:20, color:'lightgrey'}}>
                All hand are on deck 24/7 to answer your complaint.
              </p>
         </div> 
         </div>                         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




export default HomeCarousel;

//the fontSize for the h5 use to be 90 while for p it is 30