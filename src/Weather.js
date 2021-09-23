import "./App.css";

export default function Weather() {
  return (
    <div className="weather">
      <h2 className="current-city">Green Bay</h2>
      <p className="currentDate">Saturday, August 28 9:00 P.M.</p>
      <p className="current-temp">
        <span id="currentTemp">84</span>
        <span className="units">&#176;F </span>
        <span className="icon">
          <i className="fas fa-sun"></i>
        </span>
      </p>
      <div className="forecast">
        <div className="row" id="days">
          <div className="col" id="sun">
            Sun
          </div>
          <div className="col" id="mon">
            Mon
          </div>
          <div className="col" id="tue">
            Tue
          </div>
          <div className="col" id="wed">
            Wed
          </div>
          <div className="col" id="thu">
            Thu
          </div>
        </div>
        <div className="row" id="temps">
          <div className="col" id="tempDay1">
            72&#176;F
          </div>
          <div className="col" id="tempDay2">
            79&#176;F
          </div>
          <div className="col" id="tempDay3">
            65&#176;F
          </div>
          <div className="col" id="tempDay4">
            83&#176;F
          </div>
          <div className="col" id="tempDay5">
            80&#176;F
          </div>
        </div>
        <div className="row" id="icons">
          <div className="col" id="iconDay1">
            <i className="fas fa-cloud-sun"></i>
          </div>
          <div className="col" id="iconDay2">
            <i className="fas fa-cloud-sun"></i>
          </div>
          <div className="col" id="iconDay3">
            <i className="fas fa-cloud-sun"></i>
          </div>
          <div className="col" id="iconDay4">
            <i className="fas fa-cloud-sun"></i>
          </div>
          <div className="col" id="iconDay5">
            <i className="fas fa-cloud-sun"></i>
          </div>
        </div>
        <div className="row" id="feelsLike">
          <div className="col" id="feelsLikeDay1">
            Sunny
          </div>
          <div className="col" id="feelsLikeDay2">
            Sunny
          </div>
          <div className="col" id="feelsLikeDay3">
            Sunny
          </div>
          <div className="col" id="feelsLikeDay4">
            Sunny
          </div>
          <div className="col" id="feelsLikeDay5">
            Sunny
          </div>
        </div>
      </div>
    </div>
  );
}
