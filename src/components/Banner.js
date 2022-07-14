import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";
 

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [' A Frontend Developer', "web developer", 'Javascript Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    },delta)

    return () => { clearInterval(ticker)};
}, [text])

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1 className="wrap">{`Hi I'm Johnson David`}<span className="wrap">{text}</span></h1>
                        <p>Lorem Ipsum dfhj ghdjchsk ufvwduhcjj b uday8g j jsidguhj khufesdhifji jh fjsjihi jj fsj j hjihsfsji jisfuj jssi u hssufujwehfuueujdfjsfj jifji  jsfhejh jhcsjb wfsj jfjsfhsiseb </p>
                        <button className="but" onClick={() =>console.log('connect')}>Let's connect <ArrowRightCircle size={30}/></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header Img' />
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Banner;