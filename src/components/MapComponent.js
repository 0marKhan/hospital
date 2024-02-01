import React from "react";

const MapComponent = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.935407818321!2d71.43329957403695!3d33.99419282079613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d910fbd86a9dcb%3A0x87ef06b270d5b63d!2sNorthwest%20General%20Hospital%20%26%20Research%20Centre!5e0!3m2!1sen!2sus!4v1706746807825!5m2!1sen!2sus"
        width="350"
        height="280"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
