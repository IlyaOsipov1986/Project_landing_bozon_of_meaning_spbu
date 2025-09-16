import "../Slider/Slider.scss";
// import sliderImageOne from "../../../assets/img/headerMainImage.png";
import bgSliderLayout from "../../../assets/img/bgSliderLayout.png";

const Slider = () => {

    return (
        <div className="slider-headline">
            <div className="slider-block">
                <div className="slider-square"/>
                <div className="slider-block__logo">
                    <div className="slider-block__logo-play-wrap">
                        <a className="slider-block__logo-play-btn" href="https://vk.com/clips/v_nauke" target="_blank" rel="noopener noreferrer"/>
                    </div>
                    <div className="slider-block__logo-item-icon"/>
                    <div className="slider-block__logo-item-desc">
                        <p>Живое обсуждение научных достижений и их роли в будущем человечества.</p>
                        <p>Новое дискуссионное шоу с лауреатом ТЭФИ <b>Романом Герасимовым</b>.</p>
                    </div>
                </div>
            </div>
            <div className="slider-headline__wrap">
                <div className="slider-headline__image">
                    <img src={bgSliderLayout} 
                        style={{
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