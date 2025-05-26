import React from 'react';
import './BodySection.css';
import HumanBody from '../../assets/images/human_body.png';
import BodyParts from '../BodyParts/BodyParts';

const BodySection = ({bodypart}) => {
  return (
    <div className='body-section'>
        <div className="body-card">
        <div className="body-image-wrapper">
            <img src={HumanBody} alt="Human Body" className="human-img" />

            {/* Markers */}
            <div className="marker heart">Healthy Heart</div>
            <div className="marker leg">Healthy Leg</div>
        </div>
        </div>
        <BodyParts bodypart={bodypart}/>
    </div>
  );
};

export default BodySection;
