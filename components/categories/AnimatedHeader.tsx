'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedHeader: React.FC<{}> = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -1 }}
      animate={{ opacity: 1, y: 0 }}
      className="font-bold text-3xl"
    >
      Buradaki etiketlere göre kötülemeleri görüntüleyebilir, daha spesifik bir
      şekilde can sıkabilirsiniz.
    </motion.h2>
  )
}

export default AnimatedHeader
