import React from "react";

const NutritionVideos = () => {
    const videos = [
        { title: "Healthy Snack Recipe With Amrutham Nutrimix", url: "https://youtu.be/7JLsuEkDBHs" },
        { title: "Amrutham Nutrimix Kinnathappam", url: "https://youtu.be/Dm55GyGhb9U" },
        { title: "Nutrimix Cake", url: "https://youtu.be/q1TiP4GvGSk" },
        { title: "Nutrimix Energy Balls", url: "https://youtu.be/OyJTkNiiWiw" },
        { title: "Amrutham Nutrimix Puttu", url: "https://youtu.be/SHCEFzFD6A0" },
        { title: "Nutrimix Laddu", url: "https://youtu.be/mqBrMDg1peE" },
        { title: "Nutrimix Appam", url: "https://youtu.be/BPYSpWVhfmU" },
        { title: "Baby Food Recipe", url: "https://youtu.be/ddkZGjyN3EE" },
        { title: "Nutrimix Cutlet", url: "https://youtu.be/j3p9KXy2M-I" }
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

export default NutritionVideos;
