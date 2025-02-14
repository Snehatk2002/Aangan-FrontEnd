import React from "react";

const EducationalVideo = () => {
    const videos = [
        { title: "Healthy Eating Tips", url: "https://www.youtube.com/embed/bF1-JxtNd3s" },
        { title: "Importance of Exercise", url: "https://www.youtube.com/embed/9lhwS2erGAk" },
        { title: "Period Related Guide", url: "https://www.youtube.com/embed/lQMGvFXqnwk" },
        { title: "Mental Wellness Guide", url: "https://www.youtube.com/embed/NQcYZplTXnQ" },
        { title: "Healthy Eating Tips", url: "https://www.youtube.com/embed/Cg_GW7yhq20" },
        { title: "Mental Wellness Guide", url: "https://www.youtube.com/embed/1i9OktVsTWo" },
        { title: "Importance of Exercise", url: "https://www.youtube.com/embed/NTGmhBocqvM" },
        { title: "Period Related Guide", url: "https://www.youtube.com/embed/q-6MgBDqK9E" },
        { title: "Importance of Good Nutrition", url: "https://www.youtube.com/embed/TioRl2KGfzw" }
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Educational Videos</h2>
            <div style={styles.videoGrid}>
                {videos.map((video, index) => (
                    <div key={index} style={styles.card}>
                        <h5 style={styles.videoTitle}>{video.title}</h5>
                        <div style={styles.videoWrapper}>
                            <iframe
                                width="100%"
                                height="200"
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={styles.iframe}
                            ></iframe>
                        </div>
                        <a 
                            href={video.url.replace("embed/", "watch?v=")} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={styles.watchButton}
                        >
                            ▶ Watch on YouTube
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Inline CSS styles
const styles = {
    container: {
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px"
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#343a40",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginBottom: "20px"
    },
    videoGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        justifyContent: "center"
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    },
    cardHover: {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)"
    },
    videoTitle: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "10px"
    },
    videoWrapper: {
        overflow: "hidden",
        borderRadius: "8px",
        marginBottom: "10px"
    },
    iframe: {
        borderRadius: "8px"
    },
    watchButton: {
        display: "inline-block",
        backgroundColor: "#ff4b2b",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: "25px",
        fontWeight: "bold",
        textDecoration: "none",
        transition: "background 0.3s ease-in-out",
        cursor: "pointer"
    }
};

export default EducationalVideo;
