import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, Video, ArrowRight, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '../components/Button';

export default function Consultation() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic calendar data based on current date
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  const handleNextStep = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append('date', `${currentMonth.substring(0, 3)} ${selectedDate}, ${currentYear}`);
    formData.append('time', selectedTime || '');
    formData.append('formType', 'Consultation Booking');

    try {
      const response = await fetch('https://formspree.io/f/maqlqaed', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('There was a problem submitting your booking. Please try again.');
      }
    } catch (error) {
      alert('There was a problem submitting your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Growth Session</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Schedule a 30-minute strategy session with our dedicated growth team. Let's map out a plan to build your online presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* What to expect (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
              <p className="text-gray-400 leading-relaxed mb-10">
                This isn't a sales pitch. It's a collaborative deep dive into your business goals to identify the best strategies for establishing and growing your online presence.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: 'Comprehensive SEO Audit', desc: 'We\'ll analyze your current search rankings and identify quick wins.' },
                  { title: 'Competitor Analysis', desc: 'See exactly what your top competitors are doing to win market share.' },
                  { title: 'Conversion Rate Review', desc: 'Identify bottlenecks in your current funnel that are costing you sales.' },
                  { title: 'Custom Growth Roadmap', desc: 'Walk away with a clear, actionable plan to scale your business.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Booking Interface (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-brand-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
          >
            {/* Steps Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10 bg-white/5">
              <div>
                <h2 className="text-2xl font-bold mb-2">Strategy Session</h2>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 30 min</span>
                  <span className="flex items-center gap-1"><Video className="w-4 h-4" /> Google Meet</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 1 ? 'bg-brand-blue text-brand-dark' : 'bg-white/10 text-white'}`}>1</div>
                <div className="w-8 h-[2px] bg-white/10"></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 2 ? 'bg-brand-purple text-white' : 'bg-white/10 text-white'}`}>2</div>
              </div>
            </div>

            <div className="p-8 md:p-12 min-h-[500px] relative">
              <AnimatePresence mode="wait">
                
                {/* Step 1: Date & Time Selection */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold">Select Date & Time</h3>
                      <div className="flex items-center gap-4 text-brand-blue">
                        <ChevronLeft className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                        <span className="font-medium">{currentMonth} {currentYear}</span>
                        <ChevronRight className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {/* Calendar Mock */}
                      <div>
                        <div className="grid grid-cols-7 gap-2 mb-4 text-center text-sm text-gray-500 font-medium">
                          <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                          {/* Empty slots for start of month */}
                          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                            <div key={`empty-${i}`} className="aspect-square"></div>
                          ))}
                          
                          {days.map(day => {
                            const isPast = day < currentDay;
                            const isSelected = selectedDate === day;
                            return (
                              <button
                                key={day}
                                disabled={isPast}
                                onClick={() => setSelectedDate(day)}
                                className={`aspect-square rounded-full flex items-center justify-center text-sm transition-all
                                  ${isPast ? 'text-gray-600 cursor-not-allowed' : 'hover:bg-white/10 text-gray-300'}
                                  ${isSelected ? 'bg-brand-blue text-brand-dark font-bold hover:bg-brand-blue' : ''}
                                `}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time Slots */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-400 mb-4">
                          {selectedDate ? `Available times for ${currentMonth.substring(0, 3)} ${selectedDate}` : 'Select a date first'}
                        </h4>
                        <div className="flex flex-col gap-3">
                          {times.map(time => (
                            <button
                              key={time}
                              disabled={!selectedDate}
                              onClick={() => setSelectedTime(time)}
                              className={`w-full py-3 px-4 rounded-xl border text-sm font-medium transition-all
                                ${!selectedDate ? 'border-white/5 text-gray-600 cursor-not-allowed bg-white/5' : 
                                  selectedTime === time 
                                    ? 'border-brand-purple bg-brand-purple/20 text-white' 
                                    : 'border-white/10 text-gray-300 hover:border-brand-blue/50 hover:bg-brand-blue/5'
                                }
                              `}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 flex justify-end">
                      <Button 
                        onClick={handleNextStep} 
                        disabled={!selectedDate || !selectedTime}
                        className="gap-2"
                      >
                        Next Step <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Client Details */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                      <button 
                        onClick={() => setStep(1)}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <div>
                        <h3 className="text-xl font-semibold">Your Details</h3>
                        <p className="text-sm text-brand-blue">
                          {currentMonth.substring(0, 3)} {selectedDate}, {currentYear} at {selectedTime}
                        </p>
                      </div>
                    </div>

                    {isSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16 space-y-4"
                      >
                        <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-10 h-10 text-brand-blue" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Booking Confirmed!</h3>
                        <p className="text-gray-400 max-w-md mx-auto">
                          Thank you for scheduling a session. We've received your details and will send a calendar invitation to your email shortly.
                        </p>
                        <Button onClick={() => window.location.href = '/'} variant="outline" className="mt-8">
                          Return to Home
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name *</label>
                            <input 
                              type="text" 
                              id="name" 
                              name="name"
                              required
                              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                              placeholder="Jane Doe"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Work Email *</label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email"
                              required
                              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                              placeholder="jane@company.com"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-gray-300">Company Name *</label>
                          <input 
                            type="text" 
                            id="company" 
                            name="company"
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                            placeholder="Acme Corp"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="goals" className="text-sm font-medium text-gray-300">Brief Description of Needs *</label>
                          <textarea 
                            id="goals" 
                            name="goals"
                            required
                            rows={4}
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none"
                            placeholder="What is the main challenge you're trying to solve?"
                          ></textarea>
                        </div>
                        
                        <div className="pt-4">
                          <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                            {isSubmitting ? 'Confirming...' : 'Confirm Booking'} <CalendarIcon className="w-5 h-5" />
                          </Button>
                          <p className="text-xs text-center text-gray-500 mt-4">
                            By confirming, you agree to our privacy policy. We will send a calendar invitation to your email.
                          </p>
                        </div>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
