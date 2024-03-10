import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import s from "./FlickingCarousel.module.scss";
import client1 from "../../../assets/img/partners/client1.jpg";
import client2 from "../../../assets/img/partners/client2.png";
import client3 from "../../../assets/img/partners/client3.png";
import client4 from "../../../assets/img/partners/client4.png";
import client5 from "../../../assets/img/partners/client5.png";
import client6 from "../../../assets/img/partners/client6.png";

export const FlickingCarousel = () => {
    return (
        <>
            <Flicking
                align="prev"
                circular={true}
                onMoveEnd={(e) => {
                    console.log(e);
                }}
            >
                <div className={s.panel}>
                    <img src={client1} alt="logo" />
                </div>
                <div className={s.panel}>
                    <img src={client2} alt="logo" />
                </div>
                <div className={s.panel}>
                    <img src={client3} alt="logo" />
                </div>
                <div className={s.panel}>
                    <img src={client4} alt="logo" />
                </div>
                <div className={s.panel}>
                    <img src={client5} alt="logo" />
                </div>
                <div className={s.panel}>
                    <img src={client6} alt="logo" />
                </div>
            </Flicking>
        </>
    );
};
