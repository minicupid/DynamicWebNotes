import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CupDisplay from '../components/CupDisplay';

import blackbg from '../assets/blackbg.jpeg';

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

const moodLabels = {
    grateful: "grateful",
    joyful: "joyful",
    inspired: "inspired",
    calm: "calm",
    reflective: "reflective",
    focused: "focused",
    tired: "tired",
    upset: "upset",
    anxious: "anxious"
};

const defaultActivities = [
    { name: "read", completed: false },
    { name: "write", completed: false },
    { name: "exercise", completed: false },
];

export default function BrewPage({ addCup }) {
    const [activities, setActivities] = useState(defaultActivities);
    const [newActivity, setNewActivity] = useState("");
    const [isBrewing, setIsBrewing] = useState(false);
    const [selectedMood, setSelectedMood] = useState(null);
    const [quote, setQuote] = useState("");
    const [showQuote, setShowQuote] = useState(false);

    const addActivity = () => {
        if (newActivity.trim() && activities.length < 5) { // prevent empty and limit = 5
            setActivities(prev => [...prev, { name: newActivity.trim(), completed: false }]); // add trimmed task to activities array
            setNewActivity(""); // clear input
        }
    };

    const toggleActivity = (index) => { // complete / uncomplete task
        setActivities(prev => 
            prev.map((activity, i) => // new array : map each activity w its index
                // if i matches parameter (index), toggle state, else return original activity
                i === index ? { ...activity, completed: !activity.completed } : activity
            )
        );
    };

    const removeActivity = (index) => {
        setActivities(prev => prev.filter((_, i) => i !== index));
    };

    const startBrewing = () => {
        setIsBrewing(true);
    };

    const selectMood = (mood) => {
        setSelectedMood(mood);
    };

    const logMood = async () => {
        try {
            const response = await fetch('https://api.kanye.rest');
            
            const data = await response.json();
            setQuote(`${data.quote} - Kanye West`);
            setShowQuote(true);
        } catch (error) {
            console.error('failed to fetch quote:', error);
            setQuote("always look forward to the next cup, it might be better than your last.");
            setShowQuote(true);
        }
    };

    const completeBrew = () => {
        addCup({
            mood: selectedMood,
            activities: activities,
        });
        
        setActivities(defaultActivities);
        setSelectedMood(null);
        setQuote("");
        setShowQuote(false);
        setIsBrewing(false);
    };


    return (
        <div className = "[brew-page] h-full w-full ">
                <div className = "[page-content] grid grid-cols-5 h-full">
                    {/* == NOTEPAD == */}
                    <div className = "[notepad] m-10 ml-0 relative w-full h-[88%] bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border-neutral-200 p-8 flex bg-brown-500 bg-clip-padding backdrop-filter bg-opacity-80 col-span-3">
                        <div className = "[inner content] h-full w-full inset-0 p-5 flex flex-col">
                            <AnimatePresence mode="wait">
                                {!isBrewing && (
                                    <motion.div
                                    key="tasks"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="[brew-tasks] h-full flex flex-col"
                                  >
                                <h2 className = "font-gab text-2xl mb-4">today's content: </h2>
                                
                                {/* == INPUT == */}
                                <div className = "flex gap-2 mb-4">
                                    <input
                                        type = "text"
                                        value = {newActivity}
                                        onChange = {(e) => setNewActivity(e.target.value)}
                                        onKeyPress = {(e) => e.key === 'Enter' && addActivity()}
                                        placeholder = "what needs to get done?"
                                        className = "flex-1 px-4 py-2 border font-sans text-s placeholder:text-brown-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 "
                                    />
                                    <button
                                        onClick = {addActivity}
                                        disabled = {activities.length >= 5}
                                        className = "px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 active:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* == TASK LIST == */}
                                <div className = "[task-list] overflow-y-auto max-h-96 font-sans my-4 space-y-1 flex-1 bg-neutral-50 rounded-2xl p-4 shadow-lg mb-6 ">
                                    
                                    {activities.length === 0 ? (
                  <p className="text-neutral-400 text-center "> got nothing planned today? </p>
                ) : (
                                    <div className = "space-y-2">
                                        {activities.map((activity, index) => (
                                        <div key = {index} className = "flex items-center justify-between gap-3 bg-white rounded-xl p-3 shadow-sm group">
                                            <input
                                                type = "checkbox"
                                                checked = {activity.completed}
                                                onChange = {() => toggleActivity(index)}
                                                className = "[checkbox] w-4 h-4 rounded-lg"
                                            />
                                            <span className={`[task-text] flex-1 text-neutral-700 ${activity.completed ? 'line-through' : ''}`}>
                                                {activity.name}
                                            </span>
                                            <button
                                                onClick={() => removeActivity(index)}
                                                className = "[x-btn] text-neutral-400 hover:text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                    </div>
                                )}
                                </div>

                                {/* brew btn */}
                                <button
                                    onClick = {startBrewing}
                                    className = "[brew-btn] mt-auto w-full group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
                                        <span className = "[btn-text] font-sans text-sm text-white"> finish brewing coffee </span>
                                        <div className="[btn animation] w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div>
                                </button>
                                    </motion.div>
                                )}

                        {/* == MOOD == */}
                        {isBrewing && !showQuote && (
                                <motion.div
                                key="mood"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                              >
                            <div>
                                <p className="font-gab text-s text-left text-neutral-400 "> nice work today. </p>
                                <h3 className="font-gab text-2xl mb-5 text-left"> how do you feel? </h3>
                                <div className="[line] w-3/5 border-t border-neutral-200 my-4 m-auto mb-5" />
                                <div className = "[mood-list] font-sans my-4 space-y-1 flex-1 bg-neutral-50 rounded-2xl p-4 shadow-lg mb-6 ">
                                <div className="[mood-list-inner] grid grid-cols-3 gap-3 justify-items-center">
                                    {Object.entries(moodColors).map(([mood, color]) => (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            key={mood}
                                            onClick={() => selectMood(mood)}
                                            className={`[mood-btn] w-full flex flex-col items-center p-2 border rounded-xl shadow-sm bg-white hover:bg-neutral-50 hover:scale-105 duration-200 ease-in-out shadow-m ${
                                                selectedMood === mood 
                                                    ? 'bg-neutral-100 border-neutral-400' 
                                                    : 'bg-white hover:bg-neutral-50 hover:scale-105 duration-200 ease-in-out shadow-md'
                                            }`}
                                            style={{ transition: 'all 0.2s ease' }}
                                            >
                                            <div
                                                className="m-2 w-10 h-10 rounded-full"
                                                style={{ backgroundColor: color }}
                                            ></div>
                                            <span className={`font-sans text-xs mb-2 ${
                                                selectedMood === mood ? 'text-neutral-700' : ''
                                            }`}>{moodLabels[mood]}</span>
                                        </motion.button>
                                        ))}
                                    </div>

                                    {selectedMood && (
                                        <div>
                                            <motion.button
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                onClick={logMood}
                                                className = "[finish-btn] mt-3 w-full group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
                                                <span className = "[btn-text] font-sans text-sm text-white"> log mood and save </span>
                                                <div className="[btn after] w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div>
                                        </motion.button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                        </div>
                    </div>

                    {/* cup display ======== */}
                    <div className="p-6 col-span-2">
                        <CupDisplay 
                            activities={activities}
                            mood={selectedMood}
                        />
                    </div>
                </div>

                {/* quote === */}
                <AnimatePresence mode="wait">
                    {showQuote && (
                         <motion.div
                             key="quote"
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -20 }}
                             transition={{ duration: 0.3, ease: "easeOut" }}
                             className="fixed inset-0 bg-stone-900 flex items-center justify-center z-50 backdrop-blur-md"
                             style={{
                                 backgroundImage: `url(${blackbg})`,
                                 backgroundSize: 'cover',
                                 backgroundPosition: 'center',
                                 backgroundRepeat: 'no-repeat'
                             }}
                         >
                            <div className="p-10 w-2/3 mx-4 text-center glass-card">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="px-8 py-3 mb-5 font-gab text-2xl text-black"
                                    >
                                    "{quote}"
                                </motion.p>
                                <button
                            onClick={completeBrew}
                            className="[btn] font-sans text-sm group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-110"
                          >
                            <span>brew another</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
        </div>
    );
}