var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState : function(){
    return {
      isLoading : false
    };
  },

  handleSearch : function(location) {
    debugger;
    this.setState({
      isLoading: true
    });
    OpenWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (error) => {
      this.setState({
        isLoading: false
      });
      alert(error);
    });

  },
  render : function(){
    var {location, temp, isLoading} = this.state;

    function renderMessage() {
      if(isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>;
      }
      else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
