const recommendAttire = (temperature, unit) => {
    let tempCelsius = temperature;
    if (unit === 'imperial') {
      tempCelsius = (temperature - 32) * (5 / 9);
    }
    const recommendations = [
        { limit: 30, message: 'Stay cool with very light clothing and a sunhat.' },
        { limit: 20, message: 'Shorts and a t-shirt will keep you cool.' },
        { limit: 10, message: 'Short sleeves are comfortable.' },
        { limit: 0, message:   'Wear a warm coat and consider a hat and gloves.' },
        { limit: -10, message: 'Bundle up in a heavy coat, scarf, and gloves.' },
      ];
      for (let i = recommendations.length - 1; i >= 0; i--) {
        if (tempCelsius >= recommendations[i].limit) {
          return recommendations[i].message;
        }
      };
};
const AttireRecommendation = ({ temperature, unit }) => {
    const attireMessage = recommendAttire(temperature, unit); 
    return (
      <div className="attire-recommendation">
        <p>Recommended Attire:</p>
        <p>{attireMessage}</p>
      </div>
    );
  };

export default AttireRecommendation;