import React from 'react';

export default function Card(props){
    return(
        <div className="card">
            <img src={'./${props.imageUrl}'} className="card--image" alt={props.title} />
            <div className="card--content">
                <div className="card--location-info">
                    <i className="fa-solid fa-location-dot card--location-icon"></i> {/* This is a location pin icon */}
                    <span className="card--location">{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="card--google-maps">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    );
}