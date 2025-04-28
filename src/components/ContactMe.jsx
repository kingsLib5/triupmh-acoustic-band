import React from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid';

export default function ContactMe() {
  const contacts = [
    {
      icon: UserGroupIcon,
      title: "Band Name",
      value: "TRIUMPH ACOUSTIC BAND ENTERTAINMENT",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "(309) 204 - 2879",
      link: "tel:309-204-2879"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      value: "triumph_acoustic@aol.com",
      link: "mailto:triumph_acoustic@aol.com"
    },
    {
      icon: MapPinIcon,
      title: "Address",
      value: "19067 to Bath, PA 18014"
    }
  ];

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <div className="text-center mb-20 space-y-6">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <h2 className="text-5xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-4">
                Let's Make Music Together!
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-amber-500 to-transparent w-3/4 mx-auto"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide"
            >
              Get in touch for bookings, events, or just to say hello!
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                className="group relative bg-[#181818] rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-black hover:border-amber-500/30 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col items-center text-center space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-[#181818] flex items-center justify-center shadow-xl border border-gray-600 group-hover:border-amber-500/50 transition-all"
                  >
                    <contact.icon className="w-10 h-10 text-amber-500 group-hover:text-amber-400 transition-colors" />
                  </motion.div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-amber-500/80 uppercase tracking-wider">
                      {contact.title}
                    </h3>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="text-xl text-white hover:text-amber-400 transition-colors font-medium relative inline-block"
                      >
                        <span className="relative">
                          {contact.value}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all group-hover:w-full" />
                        </span>
                      </a>
                    ) : (
                      <p className="text-xl text-gray-200 font-medium">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center relative"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
