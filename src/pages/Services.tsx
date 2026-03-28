import { motion } from 'motion/react';
import { MousePointerClick, BarChart3, Globe2, PenTool, Megaphone, MonitorSmartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'seo',
      icon: Globe2,
      title: 'SEO & Organic Growth',
      desc: 'Dominate search engine results pages (SERPs) with our comprehensive, data-driven SEO strategies. We don\'t just chase keywords; we build topical authority and technical excellence that drives high-intent, sustainable organic traffic to your site.',
      benefits: [
        'Increase organic traffic and reduce reliance on paid ads',
        'Build long-term brand authority in your industry',
        'Capture high-intent users actively searching for your solutions',
        'Improve overall website user experience and technical health'
      ],
      stats: [
        { value: '+240%', label: 'Organic Traffic' },
        { value: 'Page 1', label: 'Keyword Rankings' }
      ]
    },
    {
      id: 'ppc',
      icon: MousePointerClick,
      title: 'Performance Marketing (PPC)',
      desc: 'Maximize your return on ad spend (ROAS) with hyper-targeted campaigns across Google, Meta, LinkedIn, and emerging platforms. Our media buyers use advanced bidding algorithms and rigorous A/B testing to ensure every dollar works harder for you.',
      benefits: [
        'Immediate visibility and lead generation',
        'Highly targeted audience segmentation',
        'Scalable campaigns that grow with your budget',
        'Transparent reporting on cost-per-acquisition (CPA)'
      ],
      stats: [
        { value: '3.5x', label: 'Average ROAS' },
        { value: '-40%', label: 'Cost Per Lead' }
      ]
    },
    {
      id: 'design',
      icon: PenTool,
      title: 'Brand Identity & Design',
      desc: 'Elevate your brand perception with high-quality, cohesive visual identities and UI/UX design. We craft digital experiences that not only look stunning but are psychologically optimized to convert visitors into loyal customers.',
      benefits: [
        'Stand out in a crowded market with a unique visual identity',
        'Build trust and credibility with professional aesthetics',
        'Increase conversion rates through intuitive UI/UX',
        'Maintain brand consistency across all touchpoints'
      ],
      stats: [
        { value: '2.5x', label: 'Conversion Rate' },
        { value: '+85%', label: 'Brand Recall' }
      ]
    },
    {
      id: 'content',
      icon: Megaphone,
      title: 'Content Strategy',
      desc: 'Engage your audience and build authority with compelling, high-quality content tailored to your target demographic. From thought-leadership articles to viral social media campaigns, we tell your brand\'s story in a way that resonates.',
      benefits: [
        'Educate and nurture prospects through the buyer\'s journey',
        'Fuel your SEO and social media efforts',
        'Establish your brand\'s voice and industry leadership',
        'Drive organic shares and brand awareness'
      ],
      stats: [
        { value: '10k+', label: 'Monthly Readers' },
        { value: '+150%', label: 'Engagement Rate' }
      ]
    },
    {
      id: 'web',
      icon: MonitorSmartphone,
      title: 'Web Development',
      desc: 'Build lightning-fast, responsive, and scalable websites optimized for conversions. Our development team creates robust digital platforms that serve as the ultimate 24/7 salesperson for your business.',
      benefits: [
        'Lightning-fast load times for better SEO and UX',
        'Flawless responsive design across all devices',
        'Secure, scalable architecture',
        'Seamless integration with your marketing stack'
      ],
      stats: [
        { value: '< 1s', label: 'Load Time' },
        { value: '99.9%', label: 'Uptime' }
      ]
    },
    {
      id: 'data',
      icon: BarChart3,
      title: 'Data & Analytics',
      desc: 'Make informed, strategic decisions with deep insights into user behavior, campaign performance, and ROI tracking. We implement advanced tracking setups to ensure you know exactly what\'s working and what isn\'t.',
      benefits: [
        'Eliminate guesswork from your marketing strategy',
        'Identify bottlenecks in your conversion funnels',
        'Accurately attribute revenue to specific campaigns',
        'Predictive modeling for future growth'
      ],
      stats: [
        { value: '100%', label: 'Data Accuracy' },
        { value: 'Real-time', label: 'Reporting' }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Solutions to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Grow Online</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            We provide the modern digital tools and strategies your business needs to establish a strong online presence and scale effectively.
          </motion.p>
        </div>

        {/* Detailed Services Sections */}
        <div className="space-y-32 mb-32">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Text Content */}
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 border border-white/10 text-brand-blue mb-2">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                
                <p className="text-lg text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="space-y-4 pt-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">Key Benefits</h4>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-brand-purple shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6">
                  <Link to="/consultation">
                    <Button variant="outline" className="gap-2">
                      Discuss this service <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-brand-dark/50 group p-8 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 mix-blend-overlay z-0"></div>
                  
                  {/* Abstract Animated Graphic */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                     <motion.div 
                       animate={{ 
                         y: [0, -15, 0],
                         rotate: [0, 5, -5, 0]
                       }}
                       transition={{ 
                         duration: 6, 
                         repeat: Infinity,
                         ease: "easeInOut" 
                       }}
                       className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(100,100,255,0.1)]"
                     >
                        <service.icon className="w-20 h-20 md:w-28 md:h-28 text-brand-blue/60" />
                     </motion.div>
                     
                     {/* Floating stat cards */}
                     <motion.div 
                       animate={{ y: [0, 10, 0] }}
                       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                       className="absolute top-4 left-4 md:top-10 md:left-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-2xl shadow-2xl"
                     >
                       <div className="text-2xl md:text-3xl font-bold text-white mb-1">{service.stats[0].value}</div>
                       <div className="text-[10px] md:text-xs text-brand-blue uppercase tracking-wider font-semibold">{service.stats[0].label}</div>
                     </motion.div>

                     <motion.div 
                       animate={{ y: [0, -10, 0] }}
                       transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                       className="absolute bottom-4 right-4 md:bottom-10 md:right-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-2xl shadow-2xl"
                     >
                       <div className="text-2xl md:text-3xl font-bold text-brand-purple mb-1">{service.stats[1].value}</div>
                       <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider font-semibold">{service.stats[1].label}</div>
                     </motion.div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-blue/20 blur-[60px] rounded-full z-0"></div>
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-brand-purple/20 blur-[60px] rounded-full z-0"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-3xl p-12 md:p-16 text-center border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 via-transparent to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              Every business is unique. We build custom marketing stacks tailored specifically to your industry, goals, and budget. Let's build something extraordinary together.
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-10">Contact Our Strategists</Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
