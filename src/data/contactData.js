// src/data/contactData.js
// Dados de contato e redes sociais

import {
  IconWhatsApp,
  IconMail,
  IconLinkedIn,
  IconGitHub
} from '../components/Contato/icons';

export const contactLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/5543996494126", 
    label: "(43) 996494126",
    icon: IconWhatsApp,
    color: "text-green-400",
    hoverBorder: "group-hover:border-green-500/50",
    hoverBg: "group-hover:bg-green-500/10",
    gradient: "from-green-500/0 via-green-500/10 to-green-500/0"
  },
  {
    name: "Email",
    url: "mailto:tiagoeloypossi@gmail.com",
    label: "tiagoeloypossi@gmail.com",
    icon: IconMail,
    color: "text-slate-200",
    hoverBorder: "group-hover:border-slate-400/50",
    hoverBg: "group-hover:bg-slate-500/10",
    gradient: "from-slate-500/0 via-slate-500/10 to-slate-500/0"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tiago-possidonio",
    label: "/tiago-possidonio",
    icon: IconLinkedIn,
    color: "text-[#0077b5]",
    hoverBorder: "group-hover:border-[#0077b5]/50",
    hoverBg: "group-hover:bg-[#0077b5]/10",
    gradient: "from-[#0077b5]/0 via-[#0077b5]/10 to-[#0077b5]/0"
  },
  {
    name: "GitHub",
    url: "https://github.com/cheweebr",
    label: "/cheweebr",
    icon: IconGitHub,
    color: "text-white",
    hoverBorder: "group-hover:border-white/50",
    hoverBg: "group-hover:bg-white/10",
    gradient: "from-white/0 via-white/10 to-white/0"
  }
];