import React from 'react';

export default function HistoryPage({ cups }) {
  return (
    <div className="h-full w-full p-10">
      <div className="mx-auto w-full h-full flex items-center justify-center">
        {cups.length === 0 ? (
          <div className="text-center">
            <p className="font-gab text-lg text-neutral-600"> kinda dusty in here... start brewing! </p>
          </div>
        ) : (
          
          <div className="grid grid-cols-4 grid-rows-4 gap-6 w-full h-full">
            {cups.map((cup) => (
              <div key={cup.id} className="bg-white/50 rounded-lg p-4 shadow-sm overflow-hidden">
                <div className="[mood-container] flex items-center gap-3 mb-3">
                  <div className="[mood-circle] w-6 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: getMoodColor(cup.mood) }}></div>
                  <p className="[date-container] font-sans text-xs text-neutral-600 truncate">{new Date(cup.id).toLocaleDateString()}</p>
                </div>
                
                <div className="[activities-container] space-y-1">
                  <div className="[activities-list] font-sans text-xs text-neutral-600 flex flex-wrap gap-1">
                    {cup.activities.map((activity, index) => (
                      <span key={index} className={`px-2 py-1 rounded-full text-xs truncate max-w-full ${activity.completed ? 'bg-neutral-950 text-white' : 'bg-neutral-200 text-neutral-950'}`}>{activity.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function getMoodColor(mood) {
  const moodColors = {
    calm: "#9DC3C2",
    creative: "#F4D06F",
    tired: "#D8A48F",
    focused: "#A9DEF9",
    grateful: "#FF9F1C",
    adventurous: "#C6A477",
    nostalgic: "#E4DED8",
  };
  return moodColors[mood] || "#C6A477";
}
