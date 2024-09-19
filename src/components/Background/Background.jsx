import './Background.css';
import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <div className="background fade-in">
        <video className="background__video" autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
      </div>
    );
  }

  const images = [image1, image2, image3];

  if (heroCount >= 0 && heroCount < images.length) {
    return (
      <div className="background fade-in">
        <img className="background__image" src={images[heroCount]} alt="background" />
      </div>
    );
  }

  // Fallback in case no conditions match
  return null;
};

export default Background;
