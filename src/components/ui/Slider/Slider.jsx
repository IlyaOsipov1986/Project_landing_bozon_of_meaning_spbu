import "../Slider/Slider.scss";
import sliderImageOne from "../../../assets/img/headerMainImage.png";
// import sliderIconOne from "../../../assets/img/icons/sliderIconOne.svg";
// import sliderIconTwo from "../../../assets/img/icons/sliderIconTwo.svg";

const Slider = () => {

    return (
        <div className="slider-headline">
            <div className="slider-block">
                <div className="slider-square"/>
                <div className="slider-block__logo">
                    <div className="slider-block__logo-play-wrap">
                        <div className="slider-block__logo-play-btn"/>
                    </div>
                    <div className="slider-block__logo-item-icon"/>
                    <div className="slider-block__logo-item-desc">
                        <p>Живое обсуждение научных достижений и их роли в будущем человечества.</p>
                        <p style={{textAlign: 'center'}}>Новое дискуссионное шоу с лауреатом ТЭФИ <b>Романом Герасимовым</b>.</p>
                    </div>
                </div>
            </div>
            <div className="slider-headline__wrap">
                <div className="slider-headline__image">
                    <img src={sliderImageOne} style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                            width: '100%',
                            height: '100%',
                        }}
                         className="slider-headline__image-desktop"
                         alt="image-bg"
                    />
                    {/* <img src={sliderImageOneMobile} style={{
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom',
                        width: '100%',
                        height: '100%',
                    }}
                        className="slider-headline__image-mobile"
                        alt="image-bg"
                    /> */}
                </div>    
            </div>
        </div>
    )
}
export default Slider;