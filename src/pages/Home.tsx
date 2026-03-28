import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Globe2, MousePointerClick, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/20 via-brand-bg to-brand-bg opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-brand-blue mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            Your Partner in Digital Growth
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8"
          >
            Grow Your Business <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Online Today
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We are a fresh, innovative digital marketing agency dedicated to helping businesses build their online presence, attract more customers, and scale rapidly.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/consultation">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Start Growing Today <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features/Services Preview */}
      <section className="py-24 bg-brand-dark/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive digital solutions tailored for ambitious brands.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MousePointerClick, title: 'PPC Advertising', desc: 'High-converting ad campaigns across Google and social platforms.', color: 'from-blue-500 to-cyan-400' },
              { icon: BarChart3, title: 'Data Analytics', desc: 'Deep insights and tracking to optimize your marketing ROI.', color: 'from-purple-500 to-pink-500' },
              { icon: Globe2, title: 'SEO Optimization', desc: 'Dominate search rankings and drive organic traffic consistently.', color: 'from-emerald-400 to-teal-500' },
              { icon: Zap, title: 'Brand Strategy', desc: 'Position your brand for long-term success and market leadership.', color: 'from-orange-400 to-amber-500' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-[1px] mb-6`}>
                  <div className="w-full h-full bg-brand-bg rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Data-Driven Results, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                    Creative Excellence.
                  </span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We don't just run campaigns; we build digital ecosystems that consistently generate leads, drive sales, and elevate your brand's market position.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    'Modern, agile marketing strategies',
                    'Dedicated, personalized attention to your brand',
                    'Transparent reporting and clear analytics',
                    'Focus on measurable growth and ROI'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/about">
                  <Button variant="outline">Learn More About Us</Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square md:aspect-video lg:aspect-square bg-brand-dark/50 flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 mix-blend-overlay z-0"></div>
                
                {/* Abstract Animated Graphic */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                   <motion.div 
                     animate={{ 
                       y: [0, -15, 0],
                       rotate: [0, 180, 360]
                     }}
                     transition={{ 
                       y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                       rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                     }}
                     className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-brand-blue/30 flex items-center justify-center relative"
                   >
                      <motion.div 
                        animate={{ rotate: [360, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 md:w-44 md:h-44 rounded-full border border-brand-purple/40 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple shadow-[0_0_40px_rgba(100,100,255,0.4)] flex items-center justify-center">
                          <BarChart3 className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>
                      
                      {/* Orbiting dots */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-brand-blue shadow-[0_0_15px_rgba(0,255,255,0.8)]"></div>
                      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-purple shadow-[0_0_15px_rgba(255,0,255,0.8)]"></div>
                   </motion.div>
                   
                   {/* Floating stats cards */}
                   <motion.div 
                     animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                     className="absolute top-8 left-6 md:top-12 md:left-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-2xl shadow-2xl"
                   >
                     <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                     <div className="text-[10px] md:text-xs text-brand-blue uppercase tracking-wider font-semibold">Client Focus</div>
                   </motion.div>

                   <motion.div 
                     animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                     className="absolute bottom-8 right-6 md:bottom-12 md:right-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-2xl shadow-2xl"
                   >
                     <div className="text-2xl md:text-3xl font-bold text-brand-purple mb-1">Agile</div>
                     <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider font-semibold">Execution</div>
                   </motion.div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue/20 blur-[80px] rounded-full z-0"></div>
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full z-0"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-blue/5"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dominate Your Market?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Get a free, comprehensive audit of your current digital presence and discover untapped growth opportunities.
          </p>
          <Link to="/consultation">
            <Button size="lg" className="px-12">
              Claim Your Free Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
