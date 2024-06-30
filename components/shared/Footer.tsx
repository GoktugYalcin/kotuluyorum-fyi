'use client'

import React from 'react'

import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed right-16 bottom-16"
    >
      <Link href={'https://gokyalc.in'} target={'_blank'}>
        {`${dayjs().year()} - A. Göktuğ Yalçın`}
      </Link>
    </motion.footer>
  )
}

export default Footer
