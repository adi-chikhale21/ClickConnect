import { motion } from 'motion/react';
import { Users, Target, Award, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-brand-purple mb-8"
          >
            Our Story & Mission
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Click Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            A collective of digital strategists, creative thinkers, and data scientists dedicated to elevating ambitious brands.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-blue/10 to-transparent border border-brand-blue/20 rounded-3xl p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[80px] rounded-full pointer-events-none"></div>
            <Target className="w-12 h-12 text-brand-blue mb-6 relative z-10" />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              To empower forward-thinking businesses with data-driven marketing strategies and expert design that not only capture attention but drive measurable, sustainable revenue growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-bl from-brand-purple/10 to-transparent border border-brand-purple/20 rounded-3xl p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/10 blur-[80px] rounded-full pointer-events-none"></div>
            <Lightbulb className="w-12 h-12 text-brand-purple mb-6 relative z-10" />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              To be the global standard for digital marketing excellence, recognized for bridging the gap between analytical rigor and emotional, creative brand storytelling.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">The Click Connect Approach</h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                Click Connect was born from a simple observation: businesses need a marketing partner that is agile, transparent, and fully invested in their growth.
              </p>
              <p>
                As a newly formed agency, we aren't bogged down by legacy processes. We bring fresh perspectives, modern tools, and a hungry dedication to every project. We combine data analysis with high-quality design to create campaigns that help you establish your online presence.
              </p>
              <p>
                We don't believe in one-size-fits-all packages. We work closely with you to understand your unique business goals and build a custom roadmap to get you there.
              </p>
            </div>
            
            <ul className="space-y-4 pt-4">
              {[
                'Data-backed creative decisions',
                'Transparent, real-time reporting',
                'Agile methodology for rapid optimization'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                  <span className="text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-brand-dark/50 group p-8 flex flex-col items-center justify-center"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 mix-blend-overlay z-0"></div>
             
             {/* Abstract Animated Graphic */}
             <div className="relative z-10 w-full h-full flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(100,100,255,0.15)]"
                >
                   <TrendingUp className="w-24 h-24 md:w-32 md:h-32 text-brand-blue/80" />
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-10 left-4 md:top-20 md:left-10 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Precision</div>
                    <div className="text-xs text-brand-blue uppercase tracking-wider font-semibold">Targeting</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="absolute bottom-10 right-4 md:bottom-20 md:right-10 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Innovation</div>
                    <div className="text-xs text-brand-purple uppercase tracking-wider font-semibold">Strategy</div>
                  </div>
                </motion.div>
             </div>
             
             {/* Decorative elements */}
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue/20 blur-[80px] rounded-full z-0"></div>
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full z-0"></div>
          </motion.div>
        </div>

        {/* Stats / Credibility */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/10 mb-32"
        >
          {[
            { value: '100%', label: 'Client Focus' },
            { value: '24/7', label: 'Dedicated Support' },
            { value: 'Agile', label: 'Execution' },
            { value: 'Data', label: 'Driven Strategies' }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Results First', desc: 'We measure our success entirely by the growth and ROI we generate for our clients.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'We constantly test new platforms, algorithms, and creative formats to stay ahead.' },
              { icon: Users, title: 'True Partnership', desc: 'We act as an extension of your team, fully invested in your long-term success.' },
              { icon: Award, title: 'Excellence', desc: 'We refuse to settle for "good enough." Every campaign, design, and strategy must be exceptional.' }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <value.icon className="w-10 h-10 text-brand-purple mb-6" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/consultation">
            <Button size="lg" className="px-12">Work With Our Team</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
