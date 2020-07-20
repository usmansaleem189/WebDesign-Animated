import React from 'react';
import CloudComputing from './gifs/Cloud-Computing.png';
import ComputerSystem from './gifs/Computer-System.png';
import EarthTravel from './gifs/Earth-Travel.png';
import Factory1 from './gifs/Factory1.png';
import Factory2 from './gifs/Factory2.png';
import Infographic from './gifs/Infographic.png';
import NetworkComputer from './gifs/Network-Computer.png';
// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
// import Reveal from 'react-reveal/Reveal';
import Jello from 'react-reveal/Jello';
import Spin from 'react-reveal/Spin';
import Tada from 'react-reveal/Tada';
// import Swing from 'react-reveal/Swing';
// import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
import Jump from 'react-reveal/Jump';
import Flash from 'react-reveal/Flash';
// import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';



export const Services = () => {
    return (
        <div>
            <div className="servicesContainer1">
                <Tada>
                <img src={CloudComputing} alt="image1" height="40%" />
                </Tada>
                <div>
                    <Zoom>
                    <h3> Service # 1</h3>
                    <p>  Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quos natus qui nobis voluptates
                    tempora quibusdam corporis magnam autem maiores
                    eligendi incidunt, quod aliquid odio beatae aspernatur
                    quo laudantium similique deleniti.
                </p>
                </Zoom>
                </div>

            </div>
            <div className="servicesContainer2">
                <div>
                    <Jello>
                    <h3> Service # 2</h3>
                    <p>  Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quos natus qui nobis voluptates
                    tempora quibusdam corporis magnam autem maiores
                    eligendi incidunt, quod aliquid odio beatae aspernatur
                    quo laudantium similique deleniti.
                     </p>
                    </Jello>
                </div>
                <Rotate>
                <img src={ComputerSystem} alt="image2" height="40%" />
                </Rotate>
            </div>

            <div className="servicesContainer1">
                <Rotate>
                <img src={EarthTravel} alt="image3" height="40%" />
                </Rotate>
                <div>
                    <Flash>
                    <h3> Service # 3</h3>
                    <p>  Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quos natus qui nobis voluptates
                    tempora quibusdam corporis magnam autem maiores
                    eligendi incidunt, quod aliquid odio beatae aspernatur
                    quo laudantium similique deleniti.
                </p>

                </Flash>

                </div>
            </div>
            <div className="servicesContainer2">
                <div>
                <Bounce>
                    <h3> Service # 4</h3>
                    <p>  Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quos natus qui nobis voluptates
                    tempora quibusdam corporis magnam autem maiores
                    eligendi incidunt, quod aliquid odio beatae aspernatur
                    quo laudantium similique deleniti.
                </p>
                </Bounce>
                </div>
                <Flip>
                <img src={Factory1} alt="image4" height="40%" />
                </Flip>
            </div>

            <div className="servicesContainer1">
                <LightSpeed>
                <img src={Factory2} alt="image5" height="40%" />
                </LightSpeed>
                <div>
                    <Jello>
                    <h3> Service # 5</h3>
                    <p>  Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quos natus qui nobis voluptates
                    tempora quibusdam corporis magnam autem maiores
                    eligendi incidunt, quod aliquid odio beatae aspernatur
                    quo laudantium similique deleniti.
                </p>
                </Jello>
                </div>
            </div>
            <div className="servicesContainer2">
                <div>
                    <Flash>
                    <h3> Service # 6</h3>
                    <p>  Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quos natus qui nobis voluptates
                    tempora quibusdam corporis magnam autem maiores
                    eligendi incidunt, quod aliquid odio beatae aspernatur
                    quo laudantium similique deleniti.
                </p>
                </Flash>
                </div>
                <Spin>
                <img src={Infographic} alt="image6" height="40%" />
                </Spin>
            </div>

            <div className="servicesContainer1">
                <Tada>
                <img src={NetworkComputer} alt="image7" height="40%" />
                </Tada>
                <div>
                    <Jump>
                    <h3> Service # 7</h3>
                    <p>  Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quos natus qui nobis voluptates
                    tempora quibusdam corporis magnam autem maiores
                    eligendi incidunt, quod aliquid odio beatae aspernatur
                    quo laudantium similique deleniti.
                </p>
                </Jump>
                </div>
            </div>

        </div>
    )
}
