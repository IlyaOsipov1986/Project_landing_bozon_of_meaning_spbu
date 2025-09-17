import "./Issues.scss";
import Container from "../../../components/layout/Container/Container";
import { issuesTabs, issuesVideoData } from "../../../config";
import Loader from "../../ui/Loader/Loader";
import { useState } from "react";

const Issues = () => {

    const [selectedTab, setSelectedTab] = useState(issuesTabs[0].id);
    const [selectedVideo, setSelectedVideo] = useState(issuesVideoData[0]);
    const [isLoading, setLoading] = useState(false);

    const onHandleTab = (tabId) => {
        setLoading(true);
        setSelectedTab(tabId);
        const selectVideo = issuesVideoData.find((video) => video.id === tabId);
        setSelectedVideo(selectVideo);
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    return (
        <section id="issues" className="issues">
            <Container size='small'>
                <div className="issues__container">
                    <div className="issues__title">
                         <h1>Выпуски</h1>
                         <p>{selectedVideo.desc}</p>
                    </div>
                    <div className="issues__tabs">
                        {issuesTabs.map((el) => {
                            return (
                                <div className={selectedTab === el.id ? "issues__tabs-item active" : "issues__tabs-item"} key={el.id} onClick={() => onHandleTab(el.id)}>{el.title}</div>
                            )
                        })}
                    </div>
                    {isLoading ? (
                        <div className="custom-loader-wrap">
                            <Loader isBlack={true}/>
                        </div>
                    ): (
                        <div className="issues__video-content">
                            <iframe
                                width="100%"
                                height="100%" 
                                src={selectedVideo.videoLink} 
                                alt={selectedVideo.title}
                                allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                frameBorder="0"
                                style={{
                                border: 'none',
                                borderRadius: '30px'
                            }}
                            ></iframe>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default Issues;