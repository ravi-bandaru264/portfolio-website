import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  CheckCircle,
  GitBranch,
  Terminal,
  Activity,
  HardDrive
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: GitBranch,
      title: 'Reusable ADF Pipelines',
      desc: 'Parameterized ingestion pipelines supporting relational, flat-file, and REST API sources with dynamic dataset bindings.'
    },
    {
      icon: Cpu,
      title: 'PySpark & Distributed Spark',
      desc: 'High-throughput big data transformation, window functions, and deduplication logic on Azure Databricks clusters.'
    },
    {
      icon: Layers,
      title: 'Medallion Architecture',
      desc: 'Organizing enterprise data into Bronze (raw), Silver (cleansed & conformed), and Gold (business marts) Delta tables.'
    },
    {
      icon: Activity,
      title: 'Data Quality & Schema Evolution',
      desc: 'Automated assertion testing, null audits, duplicate elimination, and dynamic schema drift management.'
    },
    {
      icon: Database,
      title: 'Dimensional Data Modeling',
      desc: 'Fact & Dimension tables, Star and Snowflake schemas, and Slowly Changing Dimensions (SCD Type 1 & 2).'
    },
    {
      icon: ShieldCheck,
      title: 'Cloud Security & Credential Mgmt',
      desc: 'Zero-trust architecture utilizing Azure Key Vault, Microsoft Entra ID, Managed Identities, and Service Principals.'
    },
    {
      icon: Terminal,
      title: 'Production Troubleshooting',
      desc: 'End-to-end pipeline failure diagnosis, Spark UI bottleneck profiling, memory tuning, and production SLA support.'
    },
    {
      icon: HardDrive,
      title: 'Reliable Analytics Platforms',
      desc: 'Building foundational data platforms for downstream Power BI reporting and Microsoft Fabric modern analytics.'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0B1728]/70 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F33] border border-[#168BFF]/30 text-[#36D9FF] text-xs font-semibold uppercase tracking-wider mb-3">
            About My Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Engineering Data. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#36D9FF]">Enabling Decisions.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B5C8] leading-relaxed">
            Delivering production-grade cloud data platforms that bridge the gap between fragmented raw sources and executive decision intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#101F33]/80 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#168BFF]/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#36D9FF]" />
                Cloud-First Data Engineering Philosophy
              </h3>
              
              <p className="text-[#A7B5C8] text-sm leading-relaxed mb-4">
                With <strong className="text-white">4 years of focused Azure Data Engineering experience</strong>, my core work revolves around designing, deploying, and maintaining dependable data platforms. I treat data pipelines as critical software products — emphasizing modularity, idempotency, strict security standards, and comprehensive auditability.
              </p>
              
              <p className="text-[#A7B5C8] text-sm leading-relaxed mb-6">
                From orchestrating complex multi-stage ingestions in <strong className="text-[#36D9FF]">Azure Data Factory</strong>, to running distributed transforms in <strong className="text-[#36D9FF]">PySpark on Databricks</strong>, to structuring ACID-compliant <strong className="text-[#36D9FF]">Delta Lake</strong> tables, I ensure data arrives on time, fully validated, and modeled for high-speed downstream analytics.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-white/10">
                {[
                  'Zero-Trust Security via Managed Identities & Key Vault',
                  'Medallion Tiering: Bronze (Raw) → Silver (Conformed) → Gold (Curated)',
                  'Automated Error-Quarantine and Production Alert Notifications',
                  'Extensible Dimensional Schemas with SCD Type 1 & 2 Support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F4F8FF]">
                    <CheckCircle className="w-4 h-4 text-[#36D9FF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-4 rounded-xl bg-[#101F33]/60 border border-white/5 hover:border-[#168BFF]/40 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#168BFF]/10 border border-[#168BFF]/20 flex items-center justify-center text-[#36D9FF] group-hover:bg-[#168BFF] group-hover:text-white transition-colors mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-[#36D9FF] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#A7B5C8] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
