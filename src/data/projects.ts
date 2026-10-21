export interface ProjectArchitectureStep {
  title: string;
  stage: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  badgeType: string;
  description: string;
  architectureSummary: string;
  features: string[];
  technologies: string[];
  architectureSteps: ProjectArchitectureStep[];
  pipelineFlow: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export const featuredProjects: Project[] = [
  {
    id: "azure-e2e-pipeline",
    title: "End-to-End Azure Data Engineering Pipeline",
    category: "Cloud Data Engineering",
    badgeType: "Portfolio Architecture",
    description:
      "Design an end-to-end pipeline that ingests data from files, relational sources, and REST APIs, processes it through Azure Data Factory and Azure Databricks, and stores curated datasets in ADLS Gen2.",
    architectureSummary:
      "Data Sources → Azure Data Factory → ADLS Gen2 Bronze → Databricks/PySpark → Silver → Gold → Azure SQL / Analytics",
    features: [
      "Automated multi-source data ingestion (CSV, JSON, SQL, REST APIs)",
      "Distributed data cleansing and transformations using PySpark",
      "Multi-hop Bronze, Silver, and Gold Medallion Lakehouse layers",
      "Automated schema validation and error-quarantine handling",
      "Parameterized ADF pipelines with triggers and metadata tables",
      "End-to-end monitoring, error logging, and alert routing"
    ],
    technologies: [
      "Azure Data Factory",
      "ADLS Gen2",
      "Azure Databricks",
      "PySpark",
      "Delta Lake",
      "Azure SQL"
    ],
    pipelineFlow: [
      "Data Sources",
      "Azure Data Factory",
      "ADLS Gen2 (Bronze)",
      "Databricks (PySpark)",
      "Delta Lake (Silver)",
      "Delta Lake (Gold)",
      "Azure SQL / Analytics"
    ],
    architectureSteps: [
      {
        title: "1. Multi-Source Ingestion",
        stage: "Ingestion",
        description:
          "ADF orchestrates scheduled and event-based copy activities from on-premise relational DBs, SaaS REST APIs, and file dumps into Azure Data Lake Storage Gen2.",
        technologies: ["Azure Data Factory", "REST APIs", "Integration Runtime"]
      },
      {
        title: "2. Bronze Tier Landing",
        stage: "Raw Storage",
        description:
          "Raw data is landed in ADLS Gen2 with full history, append-only immutable logs, and source metadata preserving data provenance.",
        technologies: ["ADLS Gen2", "Blob Storage"]
      },
      {
        title: "3. Silver Tier PySpark Transformation",
        stage: "Cleansing & Conformance",
        description:
          "Databricks cluster reads Bronze files, cleanses nulls, enforces schemas, standardizes dates and currencies, deduplicates records, and merges into Delta tables.",
        technologies: ["Azure Databricks", "PySpark", "Delta Lake"]
      },
      {
        title: "4. Gold Tier Serving & Analytics",
        stage: "Business Delivery",
        description:
          "Curated business metrics, aggregated KPIs, and Star Schema Fact & Dimension tables are loaded into Azure SQL Database and analytics workspaces.",
        technologies: ["Delta Lake", "Azure SQL Database", "Power BI"]
      }
    ]
  },
  {
    id: "medallion-lakehouse",
    title: "Medallion Architecture Lakehouse",
    category: "Data Lakehouse",
    badgeType: "Demonstration Project",
    description:
      "Demonstrate a lakehouse architecture that organizes raw, cleansed, and business-ready data using Bronze, Silver, and Gold layers.",
    architectureSummary:
      "Raw Ingest (Bronze) → Cleanse & Deduplicate (Silver) → Aggregated & Star Schema (Gold)",
    features: [
      "ACID transactions, time travel, and snapshot isolation with Delta Lake",
      "Schema evolution handling schema drift without breaking downstream jobs",
      "High-performance PySpark data deduplication with window rank functions",
      "Data quality validation and outlier identification gates",
      "Incremental data processing with Auto Loader / Change Data Feed",
      "Dimensional modeling with Fact and Dimension table hierarchies"
    ],
    technologies: [
      "Azure Databricks",
      "Apache Spark",
      "PySpark",
      "Spark SQL",
      "Delta Lake",
      "Unity Catalog"
    ],
    pipelineFlow: [
      "Raw Files / Streams",
      "Bronze Layer (Raw)",
      "PySpark Processing",
      "Silver Layer (Conformed)",
      "Dimensional Modeling",
      "Gold Layer (Curated)",
      "Unity Catalog Governance"
    ],
    architectureSteps: [
      {
        title: "Bronze Layer: Raw Ingestion",
        stage: "Raw Ingestion",
        description:
          "Maintains pristine raw state of data as it arrived from sources. Retains raw JSON/CSV schemas, original timestamps, and file tracking.",
        technologies: ["Delta Lake", "PySpark", "ADLS Gen2"]
      },
      {
        title: "Silver Layer: Cleaned & Conformed",
        stage: "Refined Data",
        description:
          "Applies data cleaning rules, casts column data types, enforces schema constraints, deduplicates customer records, and provides an enterprise single source of truth.",
        technologies: ["Azure Databricks", "Spark SQL", "Delta Tables"]
      },
      {
        title: "Gold Layer: Business Aggregates",
        stage: "Consumption Tier",
        description:
          "Curated dimensional data models organized into Star Schemas with pre-aggregated business metrics optimized for high-speed executive reporting.",
        technologies: ["Delta Lake", "Unity Catalog", "SQL Endpoints"]
      }
    ]
  },
  {
    id: "fabric-analytics",
    title: "Microsoft Fabric Analytics Platform",
    category: "Modern Analytics",
    badgeType: "Demonstration Architecture",
    description:
      "Showcase a Microsoft Fabric analytics architecture for data ingestion, lakehouse storage, warehouse modeling, semantic models, and business intelligence.",
    architectureSummary:
      "OneLake Ingestion → Dataflows Gen2 / Lakehouse → Warehouse Semantic Models → Power BI",
    features: [
      "Unified SaaS data ingestion into centralized Microsoft OneLake",
      "Visual transformation authoring using Dataflows Gen2",
      "Hybrid Lakehouse (Delta Parquet) and Data Warehouse SQL architecture",
      "Direct Lake mode semantic models avoiding data import duplication",
      "Analytics-ready dimensional datasets with built-in DAX measures",
      "Native Power BI integration for low-latency operational reporting"
    ],
    technologies: [
      "Microsoft Fabric",
      "Dataflows Gen2",
      "Lakehouse",
      "Data Warehouse",
      "Semantic Models",
      "Power BI"
    ],
    pipelineFlow: [
      "Enterprise Data Sources",
      "Dataflows Gen2 Ingest",
      "Fabric OneLake",
      "Fabric Lakehouse",
      "Fabric Data Warehouse",
      "Direct Lake Semantic Models",
      "Power BI Reports"
    ],
    architectureSteps: [
      {
        title: "1. OneLake Data Ingestion",
        stage: "Unified Ingest",
        description:
          "Dataflows Gen2 and Fabric Copy Activities connect seamlessly to SaaS apps, databases, and lake sources into unified OneLake storage.",
        technologies: ["Microsoft Fabric", "Dataflows Gen2", "OneLake"]
      },
      {
        title: "2. Lakehouse & Warehouse Modeling",
        stage: "Storage & Compute",
        description:
          "Delta tables stored in the Lakehouse are surfaced via T-SQL queries and transformed into cross-functional schemas inside the Fabric Data Warehouse.",
        technologies: ["Lakehouse", "Data Warehouse", "T-SQL"]
      },
      {
        title: "3. Semantic Modeling & Direct Lake",
        stage: "Serving & BI",
        description:
          "Direct Lake semantic models read Parquet files straight from OneLake with sub-second response times, eliminating the need for scheduled Power BI refresh imports.",
        technologies: ["Semantic Models", "Power BI", "Direct Lake"]
      }
    ]
  },
  {
    id: "data-quality-framework",
    title: "Automated Data Quality & Monitoring Framework",
    category: "Data Reliability",
    badgeType: "Portfolio Architecture",
    description:
      "Design a reusable data quality framework for validating pipelines, identifying inconsistent records, and monitoring data processing workflows.",
    architectureSummary:
      "Pipeline Execution → Schema & Null Validation → Quarantine Faulty Records → Audit Logs & Alerts",
    features: [
      "Automated null value checks, regex pattern validation, and boundary assertions",
      "Fuzzy and exact duplicate record detection using PySpark windowing",
      "Schema drift validation comparing incoming payloads against expected contracts",
      "Quarantine dead-letter tables for corrupt records to prevent pipeline crashes",
      "Centralized error logging, audit tables, and automated Slack/Teams webhooks",
      "Configurable data quality summary metrics and optional Apache Airflow orchestration"
    ],
    technologies: [
      "Python",
      "SQL",
      "PySpark",
      "Azure Data Factory",
      "Azure Databricks",
      "Apache Airflow"
    ],
    pipelineFlow: [
      "Raw Input Stream",
      "Rule Engine Validation",
      "Clean Record Stream",
      "Quarantine Dead-Letter",
      "Audit & Execution Logs",
      "Alerting & Notification"
    ],
    architectureSteps: [
      {
        title: "1. Data Rule Engine",
        stage: "Quality Validation",
        description:
          "Parameterized validation scripts evaluate completeness (null checks), validity (data formats), uniqueness (primary key check), and business rule conformity.",
        technologies: ["PySpark", "Python", "SQL"]
      },
      {
        title: "2. Quarantine Separation",
        stage: "Fault Isolation",
        description:
          "Non-compliant records are segregated into a quarantine Delta table with error codes and ingestion timestamps, allowing valid records to proceed uninterrupted.",
        technologies: ["Delta Lake", "Azure Databricks"]
      },
      {
        title: "3. Monitoring & Orchestration",
        stage: "Alerts & Health Metrics",
        description:
          "Execution run summaries, record counts, and failure rates are captured in audit tables and surfaced via Airflow/ADF triggers to on-call data engineers.",
        technologies: ["Azure Data Factory", "Apache Airflow", "REST Webhooks"]
      }
    ]
  }
];
