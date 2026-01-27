import { motion } from 'framer-motion';

const TimelineFooter = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="mt-20 text-center"
  >
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/30 rounded-full backdrop-blur-sm"
    >
      <motion.p 
        className="text-slate-300 text-sm font-medium flex items-center gap-2"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>✨</span> A jornada continua... Sempre aprendendo, sempre evoluindo
      </motion.p>
    </motion.div>
  </motion.div>
);

export default TimelineFooter;