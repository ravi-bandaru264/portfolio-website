export interface PipelineStage {
  id: string;
  stepNumber: number;
  name: string;
  shortName: string;
  category: string;
  iconName: string;
  primaryTechnology: string;
  technologies: string[];
  summary: string;
  details: string[];
  inputData: string;
  outputData: string;
}

export const pipelineStages: PipelineStage[] = [
  {
    id: "sources",
    stepNumber: 1,
    name: "Source Systems",
    shortName: "Sources",
    category: "Data Ingress",
    iconName: "FileSpreadsheet",
    primaryTechnology: "Multi-Source Endpoints",
    technologies: ["CSV Files", "JSON Payloads", "Relational Databases", "REST APIs"],
    summary:
      "Enterprise systems generating structured, semi-structured, and transactional business events.",
    details: [
      "Relational databases (SQL Server, Oracle, MySQL) housing core business transactions",
      "SaaS and external third-party endpoints accessed via secured REST APIs",
      "Semi-structured flat files (JSON, CSV, TSV) exported from clinics, ERP, and operations",
      "Batched daily exports and incremental transactional change-logs"
    ],
    inputData: "Operational transactions & APIs",
    outputData: "Raw payloads for extraction"
  },
  {
    id: "ingestion",
    stepNumber: 2,
    name: "Ingestion Tier",
    shortName: "Ingestion",
    category: "Orchestration & Copy",
    iconName: "Repeat",
    primaryTechnology: "Azure Data Factory (ADF)",
    technologies: ["Azure Data Factory", "Self-Hosted Integration Runtime", "Scheduled Triggers", "Azure Key Vault"],
    summary:
      "Automated orchestration and extraction engine pulling data with parameterization and secure credentials.",
    details: [
      "Configured ADF Linked Services with Azure Key Vault secrets for zero plain-text credential leaks",
      "Parameterized pipelines supporting dynamic file paths, partition dates, and table lists",
      "Tumbling window and schedule triggers handling regular batch syncs",
      "Automated retry mechanisms, failure notifications, and execution pipeline metrics"
    ],
    inputData: "Multi-source raw payloads",
    outputData: "Buffered raw dumps"
  },
  {
    id: "data-lake",
    stepNumber: 3,
    name: "Data Lake Storage",
    shortName: "Data Lake",
    category: "Enterprise Storage",
    iconName: "HardDrive",
    primaryTechnology: "ADLS Gen2",
    technologies: ["Azure Data Lake Storage Gen2", "Hierarchical Namespace", "Entra ID RBAC", "Blob Storage"],
    summary:
      "Scalable object storage providing hierarchical folder organization and POSIX-compliant ACL security.",
    details: [
      "Hierarchical namespace organizing data by year/month/day/source-system",
      "High throughput distributed read/write IOPS designed for Apache Spark workloads",
      "Data lake access control secured via Microsoft Entra ID and Service Principals",
      "Cost-optimized lifecycle management policies from Hot to Cool/Archive tiers"
    ],
    inputData: "Ingested file streams",
    outputData: "Bronze landing zone"
  },
  {
    id: "processing",
    stepNumber: 4,
    name: "Processing Engine",
    shortName: "Processing",
    category: "Distributed Compute",
    iconName: "Cpu",
    primaryTechnology: "Azure Databricks & PySpark",
    technologies: ["Azure Databricks", "Apache Spark", "PySpark", "Spark SQL", "Spark UI"],
    summary:
      "In-memory distributed computing engine executing transformations, joins, and data enrichment at scale.",
    details: [
      "PySpark DataFrame transformations for schema casting, null replacement, and data cleansing",
      "Window functions and rank algorithms for deduplication of customer and visit records",
      "Broadcast joins and partitioned reads tuned to eliminate shuffle bottlenecks",
      "Cluster scaling with auto-termination policies to maximize cloud cost efficiency"
    ],
    inputData: "Raw files from ADLS Gen2",
    outputData: "Transformed distributed partitions"
  },
  {
    id: "data-management",
    stepNumber: 5,
    name: "Data Management",
    shortName: "Medallion",
    category: "Lakehouse Storage",
    iconName: "Layers",
    primaryTechnology: "Delta Lake & Medallion",
    technologies: ["Delta Lake", "Medallion (Bronze/Silver/Gold)", "ACID Transactions", "Time Travel"],
    summary:
      "Lakehouse storage layer delivering transactional reliability, schema enforcement, and versioning.",
    details: [
      "Bronze Layer: Immutable append-only raw data preserving full lineage",
      "Silver Layer: Cleaned, validated, deduplicated, and conformed enterprise view",
      "Gold Layer: Business-level aggregates, dimensional star schemas, and metrics",
      "Delta Lake ACID transactions and time travel enabling reproducible historical audits"
    ],
    inputData: "Transformed PySpark records",
    outputData: "ACID Delta Lake tables"
  },
  {
    id: "serving",
    stepNumber: 6,
    name: "Serving Layer",
    shortName: "Serving",
    category: "Analytical Storage",
    iconName: "Database",
    primaryTechnology: "Azure SQL & Fabric Warehouse",
    technologies: ["Azure SQL Database", "Microsoft Fabric Warehouse", "Star Schemas", "SCD Type 1 & 2"],
    summary:
      "Relational and analytical data repositories serving high-performance queries to reporting consumers.",
    details: [
      "Centralized Fact and Dimension tables optimized with clustered and non-clustered indexes",
      "Slowly Changing Dimensions (SCD) managing historical master data revisions",
      "Fabric Data Warehouse integration enabling serverless T-SQL querying over lake assets",
      "Stored procedures and views providing governed analytical access"
    ],
    inputData: "Curated Gold Delta tables",
    outputData: "Relational data marts & views"
  },
  {
    id: "analytics",
    stepNumber: 7,
    name: "Analytics & BI",
    shortName: "Analytics",
    category: "Decision Support",
    iconName: "BarChart3",
    primaryTechnology: "Power BI & Semantic Models",
    technologies: ["Power BI", "Fabric Semantic Models", "Direct Lake", "Executive Dashboards"],
    summary:
      "Interactive dashboards and semantic business models empowering data-driven executive decisions.",
    details: [
      "Fabric Direct Lake mode delivering instant dashboard rendering without import latencies",
      "Centralized DAX business measures, KPI tracking, and operational metric cards",
      "Row-Level Security (RLS) guaranteeing user-specific data isolation",
      "Self-service BI capabilities for business stakeholders and clinical analytics"
    ],
    inputData: "Governed data warehouse & marts",
    outputData: "Business insights & dashboards"
  }
];
