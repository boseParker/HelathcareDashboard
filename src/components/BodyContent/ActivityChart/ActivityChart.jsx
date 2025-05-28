import React from 'react';
import './ActivityChart.css';

const ActivityChart = ({Activitydata}) => {
  return (
    <div className="activity-chart">
      <div className="chart-header">
        <h3>Activity</h3>
        <span>3 appointments on this week</span>
      </div>
      <div className="chart-body">
        {Activitydata.map((item, index) => (
          <div className="chart-day" key={index}>

            <div className="bars">
              
              {index%2==0 ?
               <div className='bar gray' style={{height:'100%'}}></div>:''
              }
             
              <div className="bar cyan" style={{ height: `${item.bars[0]}px` }}></div>
              <div className="bar blue" style={{ height: `${item.bars[1]}px` }}></div>
              <div>
              <div className="bar gray" style={{ height: `${item.bars[2]}px` }}></div>
              <div className="bar gray" style={{ height: `${item.bars[2]}px` }}></div>
              </div>
              <div className="bar gray" style={{ height: `${item.bars[2]}px` }}></div>
            </div>
            <span className="day-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
