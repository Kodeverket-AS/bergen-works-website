"use client";
import { useSanity } from "@/context/SanityContext";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, animate } from "framer-motion";
import { formatGoogleDate } from "@/utils/dateUtils";

import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import Link from "next/link";


const PHONE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;


const EventCardDisplay = ({ event, googleLink }) => {
  return (
    <>
      {event.image?.asset?.url && (
        <img
          src={event.image.asset.url}
          alt={event.title}
          className="w-full h-66 object-cover rounded-t-xl flex-shrink-0"
        />
      )}
      <div className="p-4 flex flex-col flex-grow gap-2">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <p className="text-sm text-gray-600">
          {new Date(event.date).toLocaleDateString("no-NO", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="text-gray-700">{event.location}</p>
        <p className="text-gray-800">{event.description}</p>
        {event.url && (
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mb-4 text-moss-500 hover:text-moss-600"
          >
            Mer info
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
        )}
        <a
          href={googleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center mb-4 mt-auto px-4 py-2 text-sm bg-moss-500 text-white rounded-lg hover:bg-moss-600 transition pt-2"
        >
          Legg til i Google Kalender
        </a>
      </div>
    </>
  );
};




export default function Events() {
  const { events, loading } = useSanity();
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); 
  const [isPhoneScreen, setIsPhoneScreen] = useState(false);
  const x = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsPhoneScreen(screenWidth < PHONE_BREAKPOINT);
      if (screenWidth < TABLET_BREAKPOINT) {
        setVisibleCount(1); 
      } else {
        setVisibleCount(2); 
      }
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  if (loading) return <p className="text-center p-4">Laster inn...</p>;
  if (!events || events.length === 0)
    return <p className="text-center p-4">Ingen events funnet.</p>;



  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const sortedEvents = [...events]
    .filter(event => new Date(event.date) >= today) 
    .sort((a, b) => new Date(a.date) - new Date(b.date)); 

  
  if (sortedEvents.length === 0) {
    return <p className="text-center p-4">Ingen kommende arrangementer funnet.</p>;
  } // should we show past events or should we just hide whole component ?

  const next = () => {
    setCurrent((prev) => (prev + 1) % sortedEvents.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      (prev - 1 + sortedEvents.length) % sortedEvents.length
    );
  };

  const nextWithVisibleCount = () => {
    setCurrent((prev) => (prev + visibleCount) % sortedEvents.length);
  };

  const prevWithVisibleCount = () => {
    setCurrent((prev) =>
      (prev - visibleCount + sortedEvents.length) % sortedEvents.length
    );
  };





  let cardsToRender = [];

  if (isPhoneScreen) {
    if (sortedEvents.length > 0) {
        cardsToRender = [sortedEvents[current]];
    }
  } else {
    cardsToRender = sortedEvents.slice(current, current + visibleCount);
    if (cardsToRender.length < visibleCount && sortedEvents.length > 0) {
        cardsToRender = cardsToRender.concat(
        sortedEvents.slice(0, visibleCount - cardsToRender.length)
      );
    }
  }




  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    const cardWidth = 300;
    let targetX = 0;
    let action = null;

    if (info.offset.x < -swipeThreshold) {
      targetX = -cardWidth;
      action = next;
    } else if (info.offset.x > swipeThreshold) {
      targetX = cardWidth;
      action = prev;
    } 

    animate(x, targetX, {
      type: "spring",
      stiffness: 400,
      damping: 40,
      onComplete: () => {
        if (action) {
          action();
        }
        x.set(0);
      }
    });
  };

  
  return (
    <section className="p-4 ">
      <h2 className="text-4xl text-center mb-8 flex items-center justify-center gap-2">
        Arrangementer
        <Link href="/events/" target="_blank" rel="noopener noreferrer">
          <LaunchRoundedIcon className="hover:text-gray-500" />
        </Link>
      </h2>

      <div className={`relative m-4 mx-auto max-w-7xl px-0 sm:px-16 ${isPhoneScreen ? 'flex justify-center' : ''}`}>
        {!isPhoneScreen && (
          <>
            <button
              onClick={prevWithVisibleCount}
              className="absolute w-10 left-1 top-68 z-20 p-2 rounded-full shadow hover:bg-gray-100 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-moss-500"
              aria-label="Forrige"
            >
              ◀
            </button>
            <button
              onClick={nextWithVisibleCount}
              className="absolute w-10 right-1 top-68 z-20 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-moss-500"
              aria-label="Neste"
            >
              ▶
            </button>
          </>
        )}

        <div className={`overflow-hidden rounded-xl mx-auto p-3 min-h-[380px] ${isPhoneScreen ? "w-[95vw]" : "w-full max-w-6xl"}`}>
          <motion.div 
            className={`${isPhoneScreen ? "flex" : "grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-12"}`} 
            style={isPhoneScreen ? { x } : {}}
            drag={isPhoneScreen ? "x" : false}
            dragConstraints={isPhoneScreen ? { left: 0, right: 0 } : undefined}
            onDragEnd={isPhoneScreen ? handleDragEnd : undefined}
          >
            {isPhoneScreen ? (
              <AnimatePresence initial={false} custom={current} mode="popLayout">
                {cardsToRender.map((event, index) => {
                  const googleLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatGoogleDate(event.date)}/${formatGoogleDate(new Date(new Date(event.date).getTime() + 2 * 60 * 60 * 1000))}&details=${encodeURIComponent(event.description || "")}&location=${encodeURIComponent(event.location || "")}`;
                  return (
                    <motion.div
                      key={event._id || index}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 1 }}
                      transition={{ duration: 0 }}
                      className={`rounded-xl shadow-md w-full flex-shrink-0 ${isPhoneScreen ? "min-w-full" : ""} flex flex-col`}
                    >
                      <EventCardDisplay event={event} googleLink={googleLink} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            ) : (
              cardsToRender.map((event, index) => {
                const googleLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatGoogleDate(event.date)}/${formatGoogleDate(new Date(new Date(event.date).getTime() + 2 * 60 * 60 * 1000))}&details=${encodeURIComponent(event.description || "")}&location=${encodeURIComponent(event.location || "")}`;
                return (
                  <motion.div
                    key={event._id || index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className={`rounded-xl shadow-md w-full flex-shrink-0 hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col`}
                  >
                    <EventCardDisplay event={event} googleLink={googleLink} />
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
