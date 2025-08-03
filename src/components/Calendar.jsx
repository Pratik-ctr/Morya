import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FaCalendarAlt, FaClock, FaPrayingHands, FaDrum, FaWater, FaMusic, FaUtensils, FaTimes } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const initialDate = '2025-09-01'; // Set to the beginning of September 2025

  useEffect(() => {
    // Enhanced events with more details for month, week and day views
    const sampleEvents = [
      // Month view events
      { 
        title: 'गणेश मूर्ती आगमन', 
        date: '2025-09-02',
        start: '2025-09-02T08:00:00',
        end: '2025-09-02T10:00:00',
        description: 'पारंपारिक विधी सह गणपती बाप्पाचे आगमन',
        location: 'मुख्य मंडप',
        icon: <FaPrayingHands className="text-orange-500" />,
        color: '#f97316',
        id: '1'
      },
      { 
        title: 'मंडप सजावट', 
        date: '2025-09-01',
        start: '2025-09-01T14:00:00',
        end: '2025-09-01T18:00:00',
        description: 'सर्व भक्तांसाठी मंडप सजवण्याची संधी',
        location: 'मुख्य मंडप',
        icon: <FaDrum className="text-amber-500" />,
        color: '#f59e0b',
        id: '2'
      },
      
      // Week view events
      { 
        title: 'सकाळची आरती', 
        start: '2025-09-03T07:00:00',
        end: '2025-09-03T07:30:00',
        description: 'दैनंदिन सकाळची आरती',
        location: 'मुख्य मंडप',
        icon: <FaPrayingHands className="text-yellow-500" />,
        color: '#eab308',
        daysOfWeek: ['3'], // Repeats every Wednesday
        id: '3'
      },
      { 
        title: 'संध्याकाळची आरती', 
        start: '2025-09-03T19:00:00',
        end: '2025-09-03T19:30:00',
        description: 'दैनंदिन संध्याकाळची आरती',
        location: 'मुख्य मंडप',
        icon: <FaPrayingHands className="text-orange-500" />,
        color: '#f97316',
        daysOfWeek: ['3'], // Repeats every Wednesday
        id: '4'
      },
      { 
        title: 'भजन संध्या', 
        start: '2025-09-04T18:00:00',
        end: '2025-09-04T20:00:00',
        description: 'भक्तिगीतांची मजेदार संध्या',
        location: 'मुख्य मंडप',
        icon: <FaMusic className="text-purple-500" />,
        color: '#8b5cf6',
        id: '5'
      },
      
      // Day view events
      { 
        title: 'प्रसाद वाटप', 
        start: '2025-09-05T12:30:00',
        end: '2025-09-05T14:00:00',
        description: 'सर्व भक्तांसाठी प्रसाद वाटप',
        location: 'मंडप समोरील मैदान',
        icon: <FaUtensils className="text-green-500" />,
        color: '#10b981',
        id: '6'
      },
      { 
        title: 'बालगणपती स्पर्धा', 
        start: '2025-09-05T16:00:00',
        end: '2025-09-05T18:00:00',
        description: 'लहान मुलांसाठी बालगणपती स्पर्धा',
        location: 'मंडप समोरील मैदान',
        icon: <FaPrayingHands className="text-blue-500" />,
        color: '#3b82f6',
        id: '7'
      },
      { 
        title: 'महाआरती', 
        start: '2025-09-05T19:00:00',
        end: '2025-09-05T20:30:00',
        description: 'ढोल-ताशा सह भव्य महाआरती',
        location: 'मुख्य मंडप',
        icon: <FaDrum className="text-red-500" />,
        color: '#ef4444',
        id: '8'
      },
      { 
        title: 'विसर्जन मिरवणूक', 
        date: '2025-09-10',
        start: '2025-09-10T17:00:00',
        end: '2025-09-10T20:00:00',
        description: 'आनंदी आणि भक्तिभावपूर्ण विसर्जन',
        location: 'मुख्य मार्ग',
        icon: <FaWater className="text-blue-500" />,
        color: '#3b82f6',
        id: '9'
      },
    ];
    setEvents(sampleEvents);
  }, []);

  const handleEventClick = (clickInfo) => {
    clickInfo.jsEvent.preventDefault();
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.start,
      end: clickInfo.event.end,
      description: clickInfo.event.extendedProps.description || '',
      location: clickInfo.event.extendedProps.location || '',
      icon: clickInfo.event.extendedProps.icon,
      color: clickInfo.event.backgroundColor
    });
    setShowEventModal(true);
  };

  const handleDateClick = (arg) => {
    // Find events for this date
    const dateEvents = events.filter(event => {
      const eventDate = event.start ? new Date(event.start) : new Date(event.date);
      const clickedDate = new Date(arg.date);
      return (
        eventDate.getDate() === clickedDate.getDate() &&
        eventDate.getMonth() === clickedDate.getMonth() &&
        eventDate.getFullYear() === clickedDate.getFullYear()
      );
    });

    if (dateEvents.length > 0) {
      const firstEvent = dateEvents[0];
      setSelectedEvent({
        title: firstEvent.title,
        start: firstEvent.start,
        end: firstEvent.end,
        description: firstEvent.description || '',
        location: firstEvent.location || '',
        icon: firstEvent.icon,
        color: firstEvent.color
      });
      setShowEventModal(true);
    }
  };

  const closeModal = () => {
    setShowEventModal(false);
    setSelectedEvent(null);
  };

  // Custom event content render
  const renderEventContent = (eventInfo) => {
    return (
      <motion.div 
        className="p-1 md:p-2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-1 md:gap-2">
          <div className="text-white text-xs md:text-sm font-medium truncate">
            {eventInfo.event.title}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-orange-600 mb-2 md:mb-4 flex items-center justify-center gap-2 md:gap-3">
            <FaCalendarAlt className="text-amber-500" />
            इव्हेंट कॅलेंडर
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            आमच्या मंडळाच्या सर्व कार्यक्रमांचे वेळापत्रक
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden"
        >
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            initialDate={initialDate}
            events={events}
            height={isMobile ? "auto" : "auto"}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: isMobile ? 'dayGridMonth' : 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            eventContent={renderEventContent}
            eventDisplay="block"
            eventBackgroundColor="inherit"
            eventBorderColor="inherit"
            eventTextColor="#fff"
            dayHeaderFormat={{ weekday: isMobile ? 'short' : 'long' }}
            locale="mr"
            firstDay={1}
            dayHeaderClassNames="text-orange-600 font-medium"
            buttonText={{
              today: 'आज',
              month: 'महिना',
              week: 'आठवडा',
              day: 'दिवस'
            }}
            titleFormat={{ 
              year: 'numeric', 
              month: isMobile ? 'short' : 'long'
            }}
            eventClick={handleEventClick}
            dateClick={handleDateClick}
            dayMaxEventRows={isMobile ? 2 : 4}
            moreLinkContent={(args) => {
              return (
                <span className="text-xs">
                  +{args.num} अधिक
                </span>
              );
            }}
          />
        </motion.div>

        <AnimatePresence>
          {showEventModal && selectedEvent && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-lg shadow-xl max-w-md w-full relative"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center`} style={{ backgroundColor: selectedEvent.color }}>
                      {selectedEvent.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{selectedEvent.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaCalendarAlt className="text-gray-500" />
                      <span>
                        {new Date(selectedEvent.start).toLocaleDateString('mr-IN', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaClock className="text-gray-500" />
                      <span>
                        {new Date(selectedEvent.start).toLocaleTimeString('mr-IN', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })} - {new Date(selectedEvent.end).toLocaleTimeString('mr-IN', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <HiOutlineLocationMarker className="text-gray-500" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 md:mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
          >
            इव्हेंटसाठी संपर्क करा
            <BsArrowRight className="text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Calendar;