import golang from "../assets/img/go-logo.png";
import clang from "../assets/img/c-logo.svg";
import python from "../assets/img/python-logo.png";
import java from "../assets/img/java-logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Languages = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="language" id="languages">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="language-bx wow zoomIn">
                        <h2>Linguagens</h2>
                        <p>Das diversas linguagens de programação já aprendidas, essas são as principais</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme language-slider">
                            <div className="item">
                                <img src={golang} alt="Image" />
                                <h5>Go</h5>
                            </div>
                            <div className="item">
                                <img src={clang} alt="Image" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
