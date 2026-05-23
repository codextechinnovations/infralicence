import React, { createContext, useContext, useState, useEffect } from 'react';

const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isOutsideKarnataka, setIsOutsideKarnataka] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setLocation(data);

        const region = (data.region || '').toLowerCase();
        const regionCode = (data.region_code || '').toLowerCase();
        const isKarnataka = region.includes('karnataka') || regionCode === 'ka';
        setIsOutsideKarnataka(!isKarnataka);
      } catch (error) {
        console.error('Failed to detect location:', error);
        setIsOutsideKarnataka(true);
      } finally {
        setIsLoadingLocation(false);
      }
    };

    detectLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ location, isOutsideKarnataka, isLoadingLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
