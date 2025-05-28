import './CalenderGrid.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];


const CalendarGrid = ({ appointments ,clanderDates}) => {
  return (
    <div className="grid">
      {clanderDates.dates.map((date, index) => {
        const slot = appointments.find((item) => item.day === date);
        return (
          <div key={date} className="gridCell">
            <p className="day">{days[index]}</p>
            <p className="date">{date}</p>
            <div className="slots">
              {slot?.times.map((time, idx) => (
                <span key={idx} className="slot">
                  {time}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;
