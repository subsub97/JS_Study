import React from  "react";

const styles = {
    wrapper: {
        margin:8,
        padding:8,
        display:"flex",
        flexDirection: 'row',
        border: '1px solid grey',
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width:40,
        height: 40,
        borderRadius: 20,
    },
    contentContainer: {
        marginleft:8,
        display:"flex",
        flexDirection: 'column',
        justifyContent: "center",
    },
    nameText: { 
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: { 
        color:"black",
        fontSize:16,
    },
};


function Comment(props) { 
    return (
        <div style = {styles.wrapper}>
            <div style = {styles.imageContainer}>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}{props.name}입니다.</span>
            </div>
        </div>

        
    )
}

export default Comment;