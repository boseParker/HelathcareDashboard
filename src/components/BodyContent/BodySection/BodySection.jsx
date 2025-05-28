import React from 'react';
import './BodySection.css';
import HumanBody from '../../../assets/images/human_body.png';
import ScannerImg from '../../../assets/images/scanner.png';
import BodyParts from '../BodyParts/BodyParts';

const BodySection = ({ bodypart }) => {
  return (
    <div className='body-section'>
      <div className="body-card">
        <div className="body-image-wrapper">
          <img src={HumanBody} alt="Human Body" className="human-img" />

          <div className='heart-box box'>
            <div>
              <img src={ScannerImg} alt="scanner" />
            </div>
            <div className="marker heart">Healthy Heart</div>
          </div>

          <div className='leg-box box'>
            <div>
              <img src={ScannerImg} alt="scanner" />
            </div>
            <div className="marker leg">Healthy Leg</div>
          </div>
        </div>
      </div>
      <BodyParts bodypart={bodypart} />
    </div>
  );
};

export default BodySection;
