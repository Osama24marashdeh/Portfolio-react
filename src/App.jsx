import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, BarChart3, Briefcase, Code, Mail, Phone,
  Globe, Database, Sparkles, CheckCircle2
} from "lucide-react";

const fadeUp = { hidden: {opacity:0, y:16}, show:{opacity:1, y:0} };

function Stat({ kpi, label }) {
  return (
    <div className="rounded-2xl border p-4 text-center">
      <div className="text-2xl font-semibold">{kpi}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}
function Pill({ children }) {
  return <span className="px-3 py-1 rounded-full bg-slate-100 border text-sm">{children}</span>;
}

export default function App() {
  const [email, setEmail] = useState(""); const [msg, setMsg] = useState("");

  const features = [
    { icon:<BarChart3 className="w-5 h-5"/>, title:"Financial Analysis", text:"Ratios, dashboards, executive insights."},
    { icon:<Database className="w-5 h-5"/>, title:"Digital Ops", text:"Excel automation, Power BI, QuickBooks, Notion."},
    { icon:<Code className="w-5 h-5"/>, title:"Brand & Web", text:"Landing pages (Wix/Vite), identity & content."}
  ];
  const projects = [
    { title:"ASE – Petrochemical Analysis", tag:"Excel • Ratios • Deck", desc:"End-to-end analysis with KPI scorecards & summary." },
    { title:"RFID Inventory (Agriculture)", tag:"Data • Power BI • RFID", desc:"Tagging palms & plants, models ready for analytics." },
    { title:"Four Seasons Contracting", tag:"Accounting • Cost Control", desc:"Operational accounting & cash/expense controls." },
  ];
  const services = [
    { title:"Accounting & Reporting", points:["Bookkeeping & GL","Management reports","Cash/expense control"] },
    { title:"Dashboards & BI", points:["Power BI visuals","Excel automation","KPI tracking"] },
    { title:"Branding & Web", points:["Wix & landing pages","Logo & identity","Copy & campaigns"] },
  ];

  function submit(e){
    e.preventDefault();
    alert(`Thank you! I will reach out to ${email}.`);
    setEmail(""); setMsg("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur border-b border-slate-200/60 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5"/><span className="font-semibold">Marashdeh</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-slate-700">About</a>
            <a href="#projects" className="hover:text-slate-700">Projects</a>
            <a href="#services" className="hover:text-slate-700">Services</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
          <a href="#contact" className="md:inline-flex hidden">
            <button className="rounded-2xl px-4 py-2 bg-slate-900 text-white">Hire Me</button>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{duration:.5}}>
            <p className="text-sm uppercase tracking-widest text-slate-500">Portfolio · Finance + Creative</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">Osama Marashdeh</h1>
            <p className="mt-4 text-slate-600 md:text-lg">
              Accountant & Financial Analyst focused on digital transformation.
              I build smart Excel/Power BI systems and present insights with clean design.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects"><button className="rounded-2xl px-4 py-2 bg-slate-900 text-white">View Projects</button></a>
              <a href="#contact"><button className="rounded-2xl px-4 py-2 border border-slate-300">Contact <ArrowRight className="inline-block ml-2 w-4 h-4"/></button></a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/>FMVA Certified</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/>Power BI & Excel</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/>QuickBooks</span>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, scale:.98}} animate={{opacity:1, scale:1}} transition={{duration:.5, delay:.1}}>
            <div className="relative rounded-3xl shadow-xl p-1 bg-gradient-to-br from-slate-100 to-slate-200">
              <div className="rounded-3xl bg-white p-6 h-full">
                <div className="aspect-video rounded-2xl border bg-slate-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-sm tracking-widest text-slate-500">Preview</p>
                    <h3 className="text-xl font-semibold mt-2">Executive Reporting</h3>
                    <p className="text-slate-600 mt-1">Minimal charts & KPI scorecards.</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4 text-xs">
                  {features.map((f,i)=>(
                    <div key={i} className="rounded-2xl border p-3">
                      <div className="flex items-center gap-2 font-medium">{f.icon}{f.title}</div>
                      <p className="text-slate-600 mt-1">{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Based in Saudi Arabia with 3+ years across contracting & retail.
              I enjoy building data models, automating reports, and turning numbers into action.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <Pill>Accounting</Pill><Pill>Financial Analysis</Pill><Pill>Power BI</Pill>
              <Pill>Excel</Pill><Pill>QuickBooks</Pill><Pill>Wix / Web</Pill>
            </div>
          </div>
          <div className="rounded-3xl border p-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <Stat kpi="3+" label="Years Experience"/><Stat kpi="8+" label="Major Projects"/><Stat kpi="FMVA" label="Certification"/>
            </div>
            <ul className="mt-5 space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2 items-start"><ArrowRight className="w-4 h-4 mt-1"/> ASE analysis, RFID inventory, Four Seasons contracting.</li>
              <li className="flex gap-2 items-start"><ArrowRight className="w-4 h-4 mt-1"/> Excel automation, Power BI, QuickBooks, Notion.</li>
              <li className="flex gap-2 items-start"><ArrowRight className="w-4 h-4 mt-1"/> Finance rigor + clean creative presentation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
            <a href="#contact" className="text-sm underline">Request full portfolio</a>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {projects.map((p,idx)=>(
              <div key={idx} className="rounded-3xl border hover:shadow-lg transition-shadow">
                <div className="p-5">
                  <div className="aspect-video rounded-2xl border bg-slate-50 flex items-center justify-center">
                    <span className="text-xs text-slate-500">Screenshot / Chart</span>
                  </div>
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{p.tag}</p>
                  <p className="text-slate-600 text-sm mt-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {services.map((s,i)=>(
              <div key={i} className="rounded-3xl border">
                <div className="p-6">
                  <div className="flex items-center gap-2 text-lg font-semibold"><Briefcase className="w-5 h-5"/>{s.title}</div>
                  <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                    {s.points.map((pt,j)=>(
                      <li key={j} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1"/>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Let’s work together</h2>
              <p className="mt-2 text-slate-600">Tell me about your needs and I’ll get back within 24–48 hours.</p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="inline-flex items-center gap-2"><Mail className="w-4 h-4"/> osama@example.com</p>
                <p className="inline-flex items-center gap-2"><Phone className="w-4 h-4"/> +966 5X XXX XXXX</p>
                <p className="inline-flex items-center gap-2"><Globe className="w-4 h-4"/> Jeddah, Saudi Arabia</p>
              </div>
            </div>
            <div className="rounded-3xl border p-6">
              <form onSubmit={submit} className="space-y-3">
                <input type="email" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="rounded-2xl border w-full px-3 py-2"/>
                <textarea placeholder="Project brief or message" value={msg} onChange={(e)=>setMsg(e.target.value)} className="rounded-2xl border w-full px-3 py-2" rows={5}></textarea>
                <button type="submit" className="rounded-2xl w-full px-4 py-2 bg-slate-900 text-white">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Osama Marashdeh · Finance & Creative
      </footer>
    </div>
  );
}
