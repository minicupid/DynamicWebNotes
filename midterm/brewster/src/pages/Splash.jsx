import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/brew');
    }, 3000);
  }, [navigate]);

  return (
    <div className = "fixed inset-0 bg-cream flex items-center justify-center z-50">
      <div className = "text-center">
        <h1 className = "text-6xl font-gab font-bold text-neutral-600 mb-4 animate-pulse">
          brewster.
        </h1>
      </div>
    </div>
  );
}
