import './CalenderGrid.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const dates = [25, 26, 27, 28, 29, 30, 31];

const CalendarGrid = ({ appointments }) => {
  return (
    <div className="grid">
      {dates.map((date, index) => {
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
