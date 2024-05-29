import React from "react";


export default function Contact(person: any) {
    return (
        <>
            <div className="contact-card">
                <img src={person.img} />
                <h3>{person.name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{person.phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{person.email}</p>
                </div>
            </div>
        </>
    );
}