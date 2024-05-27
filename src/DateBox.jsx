import './DateBox.css';
function DateBox() {
  let days = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thushday", "Friday", "Saturday",];
  let currentTime = new Date();
  console.log(currentTime.getDay());
  let day = days[currentTime.getDay()];
  let date = currentTime.toLocaleDateString();
  let datearr = [day, date];
  return (
    <div className="dayzone" style={{ color: "white" }}>
      <p>
        <span id="cloud">
        <i className="fa-solid fa-cloud"></i>
        </span>
        <span id="day" >{datearr[0]}</span>
        <span id="date">{datearr[1]}</span>
      </p>
    </div>
  );
  
}
export default DateBox;