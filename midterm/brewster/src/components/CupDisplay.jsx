import React from 'react';

const CupDisplay = ({ activities, mood = "", className = "" }) => {
  const completedCount = activities.filter(activity => activity.completed).length; 
  const totalCount = activities.length;
  const fill = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const moodColors = {
    grateful: "#F6CFA5",
    joyful: "#F8BFC8",
    inspired: "#A9D8C8",
    calm: "#A7C5EB",
    reflective: "#DAD2C6",
    focused: "#B8D1C5",
    tired: "#D6B5A7",
    upset: "#C8C7D1",
    anxious: "#B6C2C9"
  };

  return (
    <div className="[cont] w-full h-full flex items-center justify-center">
        <div className = {`[cont] relative w-2/3 h-2/3 mx-auto ${className}`}>
            <div className="[background] absolute inset-0 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30"></div>
            
            <div 
                className="[fill] absolute inset-0 rounded-full transition-all duration-1000 ease-out"
                style={{
                background: mood ? moodColors[mood] : 'linear-gradient(66deg,#fff4f4,#e7c9b4,#6b4d39)',
                backgroundSize: '200% 100%',
                animation: 'gradient-animation 20s ease infinite',
                opacity: 0.8,
                transform: `scale(${fill / 100})`
                }}
            >
            </div>
        </div>
    </div>
  );
};

export default CupDisplay;
