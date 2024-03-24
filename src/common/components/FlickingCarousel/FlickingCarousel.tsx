import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/react-flicking";
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
import uniliver from "../../../assets/img/reviews/unileverfoodsolutions.png";
import zeppelin from "../../../assets/img/reviews/zeppelin.png";
import rusagro from "../../../assets/img/reviews/rusagro.png";
import samsung from "../../../assets/img/reviews/samsung.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

type FlickingCarouselType = {
    type: "partners" | "reviews";
};
export const FlickingCarousel: React.FC<FlickingCarouselType> = ({ type, ...other }) => {
    return (
        <>
            <Flicking align="prev" circular={true} onMoveEnd={(e) => {}}>
                {type === "partners" ? (
                    <>
                        <div className={s.panel_partners}>
                            <img src={client1} alt="logo" />
                        </div>
                        <div className={s.panel_partners}>
                            <img src={client2} alt="logo" />
                        </div>
                        <div className={s.panel_partners}>
                            <img src={client3} alt="logo" />
                        </div>
                        <div className={s.panel_partners}>
                            <img src={client4} alt="logo" />
                        </div>
                        <div className={s.panel_partners}>
                            <img src={client5} alt="logo" />
                        </div>
                        <div className={s.panel_partners}>
                            <img src={client6} alt="logo" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={s.panel_reviews}>
                            <Card sx={{ maxWidth: 345 }} className={s.card_wrapper}>
                                <div className={s.img_wrapper}>
                                    <img src={uniliver} alt="uniliver image" />
                                </div>
                                <Divider />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <a href="www.unileverfoodsolutions.ru">www.unileverfoodsolutions.ru</a>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        "Спасибо за опыт Вашей компании в области ведения тендеров, документальное
                                        сопровождение тендеров и их подбор, кейсы из FMCG, а также опции по
                                        сотрудничеству."
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={s.panel_reviews}>
                            <Card sx={{ maxWidth: 345 }} className={s.card_wrapper}>
                                <div className={s.img_wrapper}>
                                    <img src={zeppelin} alt="uniliver image" />
                                </div>
                                <Divider />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <a href="www.zeppelin.ru">www.zeppelin.ru</a>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        "Большое спасибо за оперативную работу, поддержку и профессионализм!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={s.panel_reviews}>
                            <Card sx={{ maxWidth: 345 }} className={s.card_wrapper}>
                                <div className={s.img_wrapper}>
                                    <img src={rusagro} alt="uniliver image" />
                                </div>
                                <Divider />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <a href="www.rusagrogroup.ru">www.rusagrogroup.ru</a>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        "Обучение прошло плодотворно. Получили объяснение всех нюансов и механизмов.
                                        Искренне надеемся на дальнейшее сотрудничество! Сахарное направление ОК."
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={s.panel_reviews}>
                            <Card sx={{ maxWidth: 345 }} className={s.card_wrapper}>
                                <div className={s.img_wrapper}>
                                    <img src={samsung} alt="uniliver image" />
                                </div>
                                <Divider />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <a href="www.samsung.com">www.samsung.com</a>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        "Благодарим Вас за уделенное время, подробные консультации, профессиональное,
                                        доброжелательное отношение"
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={s.panel_reviews}>
                            <Card sx={{ maxWidth: 345 }} className={s.card_wrapper}>
                                <div className={s.img_wrapper}>
                                    <img src={uniliver} alt="uniliver image" />
                                </div>
                                <Divider />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <a href="www.unileverfoodsolutions.ru">www.unileverfoodsolutions.ru</a>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        "Спасибо за опыт Вашей компании в области ведения тендеров, документальное
                                        сопровождение тендеров и их подбор, кейсы из FMCG, а также опции по
                                        сотрудничеству."
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={s.panel_reviews}>
                            <Card sx={{ maxWidth: 345 }} className={s.card_wrapper}>
                                <div className={s.img_wrapper}>
                                    <img src={zeppelin} alt="uniliver image" />
                                </div>
                                <Divider />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <a href="www.zeppelin.ru">www.zeppelin.ru</a>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        "Большое спасибо за оперативную работу, поддержку и профессионализм!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={s.panel_reviews}>
                            <Card sx={{ maxWidth: 345 }} className={s.card_wrapper}>
                                <div className={s.img_wrapper}>
                                    <img src={rusagro} alt="uniliver image" />
                                </div>
                                <Divider />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <a href="www.rusagrogroup.ru">www.rusagrogroup.ru</a>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        "Обучение прошло плодотворно. Получили объяснение всех нюансов и механизмов.
                                        Искренне надеемся на дальнейшее сотрудничество! Сахарное направление ОК."
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={s.panel_reviews}>
                            <Card sx={{ maxWidth: 345 }} className={s.card_wrapper}>
                                <div className={s.img_wrapper}>
                                    <img src={samsung} alt="uniliver image" />
                                </div>
                                <Divider />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <a href="www.samsung.com">www.samsung.com</a>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        "Благодарим Вас за уделенное время, подробные консультации, профессиональное,
                                        доброжелательное отношение"
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </>
                )}
            </Flicking>
        </>
    );
};
