import React from 'react';


const Photo = (props) => {


    const photoStyle = {
        border: '5px solid',
        borderRadius: '150px', 
        borderColor: 'lightblue',
        boxShadow: '10px 10px 30px black',
        overflow: 'hidden'}

    return (
        <section>
            <div>
                <div>
                    <img src={props.url} alt="" style={photoStyle}/>
                    <p>{props.title}</p>
                </div>
            </div>
        </section>
    )
}

export default Photo