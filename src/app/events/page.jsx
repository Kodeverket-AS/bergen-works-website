"use client";
import { useSanity } from "@/context/SanityContext";
import { useState } from "react";
import {
  Skeleton,
  Card,
  CardMedia,
  Typography,
  Pagination,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import Link from "next/link";
import { generateGoogleCalendarLink, formatNorwegianDate } from "@/utils/dateUtils";

const formatGoogleDate = (date) =>
  new Date(date).toISOString().replace(/-|:|\.\d\d\d/g, "");

const LoadingSkeleton = () => (
  <div className=" font-[Work-Sans] flex flex-col gap-8 w-full max-w-5xl mx-auto px-4">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="flex flex-col md:flex-row gap-4">
        <Skeleton variant="rectangular" width={240} height={180} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" height={30} />
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="90%" />
        </div>
      </div>
    ))}
  </div>
);

const EventCard = ({ event, index }) => {
  const googleLink = generateGoogleCalendarLink(event);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", middle: "row" },
          p: 2,
          height: "100%",
        }}
      >
        {event.image?.asset?.url && (
          <CardMedia
            component="img"
            image={event.image.asset.url}
            alt={event.title}
            sx={{
              width: { xs: "100%", middle: "42%" },
              height: { xs: 220, middle: 240 },
              borderRadius: "10px",
              objectFit: "cover",
              marginBottom: { xs: 2, middle: 0 },
              marginRight: { middle: 2 },
            }}
          />
        )}
        <div className="flex flex-col flex-1 p-2 md:pl-0" sx={{ pl: { middle: 2 } }}>
          <div>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {event.title}
            </Typography>
            <div className="flex items-center flex-wrap space-x-4 mb-6 text-sm text-moss-200">
              <Typography variant="body2" color="text.secondary">
                {formatNorwegianDate(event.date)}
              </Typography>
              {event.location && (
                <>
                  <span className="font-semibold px-2" sx={{ display: { xs: 'none', middle: 'inline'} }}>|</span>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 1, middle: 0 } }}>
                    {event.location}
                  </Typography>
                </>
              )}
            </div>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                mb: 2,
              }}
            >
              {event.description}
            </Typography>
          </div>
          <div className="mt-auto pt-4">
            {event.url && (
              <div className="flex justify-end items-center mb-3">
                <Link href={event.url} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: "pointer",
                        fontSize: "16px",
                        color: "gray"
                      }}
                    >
                      Mer info
                    </Typography>
                    <ArrowForwardIcon
                      sx={{
                        cursor: "pointer",
                        color: "gray",
                        fontSize: "20px",
                        marginLeft: "3px",
                        transition: "color 0.3s ease, transform 0.3s ease",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    />
                  </a>
                </Link>
              </div>
            )}
            <a
              href={googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 text-sm bg-moss-500 text-white rounded-lg hover:bg-moss-600 transition"
            >
              Legg til i Google Kalender
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const PastEventCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="opacity-85"
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", middle: "row" },
          p: 2,
          height: "100%",
          backgroundColor: "#f9f9f9",
        }}
      >
        {event.image?.asset?.url && (
          <div className="relative flex-shrink-0 w-full middle:w-[42%] h-[220px] middle:h-[240px] mb-2 middle:mb-0 middle:mr-2">
            <CardMedia
              component="img"
              image={event.image.asset.url}
              alt={event.title}
              className="w-full h-full rounded-lg object-cover filter grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none rounded-lg">
              <span className="text-white text-opacity-40 text-2xl middle:text-3xl font-bold uppercase tracking-widest">
                TIDLIGERE
              </span>
            </div>
          </div>
        )}
        <div className="flex flex-col flex-1 p-2" sx={{ pl: { middle: 2 } }}>
          <div>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {event.title}
            </Typography>
            <div className="flex items-center flex-wrap space-x-4 mb-6 text-sm text-gray-500">
              <Typography variant="body2" color="text.secondary">
                {formatNorwegianDate(event.date)}
              </Typography>
              {event.location && (
                <>
                  <span className="font-semibold px-2" sx={{ display: { xs: 'none', middle: 'inline'} }}>|</span>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 1, middle: 0 } }}>
                    {event.location}
                  </Typography>
                </>
              )}
            </div>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                mb: 2,
              }}
            >
              {event.description}
            </Typography>
          </div>
          {event.url && (
            <div className="mt-auto pt-4">
              <div className="flex justify-end items-center">
                <Link href={event.url} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      Mer info
                    </Typography>
                    <ArrowForwardIcon
                      sx={{
                        cursor: "pointer",
                        color: "gray",
                        fontSize: "20px",
                        marginLeft: "3px",
                        transition: "color 0.3s ease, transform 0.3s ease",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    />
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default function EventList() {
  const { events, loading } = useSanity();
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  if (loading) return <LoadingSkeleton />;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const allMarkedEvents = events.map(event => {
    const eventDate = new Date(event.date);
    return {
      ...event,
      isUpcoming: eventDate >= today,
      eventDateObj: eventDate
    };
  });

  const sortedCombinedEvents = allMarkedEvents.sort((a, b) => {
    if (a.isUpcoming && !b.isUpcoming) return -1;
    if (!a.isUpcoming && b.isUpcoming) return 1;
    if (a.isUpcoming && b.isUpcoming) {
      return a.eventDateObj - b.eventDateObj;
    }
    if (!a.isUpcoming && !b.isUpcoming) {
      return b.eventDateObj - a.eventDateObj; 
    }
    return 0;
  });

  if (sortedCombinedEvents.length === 0) {
    return (
      <div className="w-full py-10 px-4 bg-white text-black text-center">
        <h1 className="text-4xl text-center mb-10 font-bold">Arrangementer</h1>
        <p>Ingen arrangementer funnet.</p>
      </div>
    );
  }

  const totalPages = Math.ceil(sortedCombinedEvents.length / eventsPerPage);
  const paginatedEvents = sortedCombinedEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="w-full py-10 px-4 bg-white text-black">
      <h1 className="text-4xl text-center mb-10 font-bold">
        Arrangementer
      </h1>
      
      <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
        {paginatedEvents.map((eventWithStatus, index) => {
          if (eventWithStatus.isUpcoming) {
            return <EventCard key={eventWithStatus._id} event={eventWithStatus} index={index} />;
          } else {
            return <PastEventCard key={eventWithStatus._id} event={eventWithStatus} index={index} />;
          }
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
