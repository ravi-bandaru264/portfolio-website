export interface Skill {
  name: string;
  category: string;
  description: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
}

export const skillCategories: SkillCategory[] = [
  { id: "all", name: "All Capabilities", iconName: "Layers" },
  { id: "cloud-azure", name: "Cloud & Azure", iconName: "Cloud" },
  { id: "databricks-spark", name: "Databricks & Spark", iconName: "Cpu" },
  { id: "programming", name: "Programming & Analysis", iconName: "Code" },
  { id: "data-engineering", name: "Data Engineering", iconName: "GitBranch" },
  { id: "data-modeling", name: "Modeling & Warehousing", iconName: "Database" },
  { id: "architecture", name: "Architecture & Medallion", iconName: "Network" },
  { id: "fabric", name: "Microsoft Fabric", iconName: "Box" },
  { id: "orchestration", name: "Orchestration & Streaming", iconName: "Clock" },
  { id: "additional", name: "Emerging & Analytics", iconName: "Sparkles" }
];

export const allSkills: Skill[] = [
  // Cloud & Azure
  {
    name: "Microsoft Azure",
    category: "cloud-azure",
    description: "Core cloud infrastructure, resource management, virtual networks, and cloud security governance.",
    tag: "Core Cloud"
  },
  {
    name: "Azure Data Factory (ADF)",
    category: "cloud-azure",
    description: "Automated ETL/ELT orchestration, linked services, triggers, parameters, and REST API ingestion.",
    tag: "ETL / Orchestration"
  },
  {
    name: "Azure Data Lake Storage Gen2 (ADLS Gen2)",
    category: "cloud-azure",
    description: "Hierarchical namespace object storage for scalable big data lakes and Medallion architecture layers.",
    tag: "Storage"
  },
  {
    name: "Azure Storage",
    category: "cloud-azure",
    description: "Blob, table, and file storage for structured, semi-structured, and unstructured cloud data assets.",
    tag: "Storage"
  },
  {
    name: "Azure SQL Database",
    category: "cloud-azure",
    description: "Managed relational database for data validation, dimensional serving, and downstream reporting.",
    tag: "Relational DB"
  },
  {
    name: "Azure Key Vault",
    category: "cloud-azure",
    description: "Secure storage and automated retrieval of credentials, tokens, connection strings, and certificates.",
    tag: "Security"
  },
  {
    name: "Microsoft Entra ID",
    category: "cloud-azure",
    description: "Enterprise identity and role-based access control for cloud resources and pipeline authentications.",
    tag: "Security"
  },
  {
    name: "Service Principals",
    category: "cloud-azure",
    description: "Automated identities configured for secure programmatic access between Databricks, ADF, and ADLS Gen2.",
    tag: "Security"
  },
  {
    name: "Managed Identities",
    category: "cloud-azure",
    description: "Passwordless Azure resource authentication eliminating hardcoded secrets in automated pipelines.",
    tag: "Security"
  },
  {
    name: "REST APIs",
    category: "cloud-azure",
    description: "HTTP endpoint extraction, pagination management, OAuth token headers, and automated JSON ingestion.",
    tag: "Integration"
  },

  // Databricks & Spark
  {
    name: "Azure Databricks",
    category: "databricks-spark",
    description: "Managed Apache Spark clusters for distributed big data transformation, ML, and enterprise analytics.",
    tag: "Compute"
  },
  {
    name: "Apache Spark",
    category: "databricks-spark",
    description: "Distributed computing engine for memory-speed batch and streaming big data processing.",
    tag: "Engine"
  },
  {
    name: "PySpark",
    category: "databricks-spark",
    description: "Python API for Spark DataFrames, transformations, aggregations, joins, and window functions.",
    tag: "Processing"
  },
  {
    name: "Spark SQL",
    category: "databricks-spark",
    description: "Executing optimized ANSI SQL queries on distributed datasets and Delta Lake tables.",
    tag: "Querying"
  },
  {
    name: "DataFrames",
    category: "databricks-spark",
    description: "Optimized structured distributed collections with Catalyst optimizer execution plans.",
    tag: "Core Spark"
  },
  {
    name: "RDDs",
    category: "databricks-spark",
    description: "Low-level Resilient Distributed Datasets for fine-grained distributed transformations.",
    tag: "Core Spark"
  },
  {
    name: "Delta Lake",
    category: "databricks-spark",
    description: "ACID transactions, time travel, schema enforcement, and compaction on cloud data lakes.",
    tag: "Lakehouse Storage"
  },
  {
    name: "Unity Catalog",
    category: "databricks-spark",
    description: "Centralized governance, fine-grained access control, and auditing across Databricks assets.",
    tag: "Governance"
  },
  {
    name: "Spark UI",
    category: "databricks-spark",
    description: "Job monitoring, stage execution profiling, shuffle optimization, and bottleneck diagnosis.",
    tag: "Monitoring"
  },

  // Programming and Data Analysis
  {
    name: "Python",
    category: "programming",
    description: "Scripting, custom ETL pipelines, API integration, data cleansing, and validation scripts.",
    tag: "Language"
  },
  {
    name: "SQL",
    category: "programming",
    description: "Complex analytical queries, window functions, CTEs, stored procedures, and schema DDL/DML.",
    tag: "Language"
  },
  {
    name: "NumPy",
    category: "programming",
    description: "Vectorized numerical operations and data array manipulations.",
    tag: "Library"
  },
  {
    name: "Pandas",
    category: "programming",
    description: "Tabular data manipulation, exploratory data analysis, and schema transformation.",
    tag: "Library"
  },

  // Data Engineering
  {
    name: "ETL/ELT",
    category: "data-engineering",
    description: "Designing end-to-end Extract, Transform, Load / Extract, Load, Transform data flows.",
    tag: "Methodology"
  },
  {
    name: "Batch Processing",
    category: "data-engineering",
    description: "High-volume scheduled bulk processing with checkpointing and state tracking.",
    tag: "Processing"
  },
  {
    name: "Real-Time Pipelines",
    category: "data-engineering",
    description: "Low-latency data processing patterns for streaming and micro-batch events.",
    tag: "Streaming"
  },
  {
    name: "Data Ingestion",
    category: "data-engineering",
    description: "Multi-source ingest across CSV, JSON, Parquet, relational databases, and REST endpoints.",
    tag: "Ingestion"
  },
  {
    name: "Data Transformation",
    category: "data-engineering",
    description: "Cleansing, deduplication, type casting, currency formatting, and business logic mapping.",
    tag: "Transformation"
  },
  {
    name: "Data Lineage",
    category: "data-engineering",
    description: "Tracking end-to-end data provenance from source systems through intermediate layers to BI.",
    tag: "Governance"
  },
  {
    name: "Schema Evolution",
    category: "data-engineering",
    description: "Handling schema drift and new column additions dynamically without breaking downstream jobs.",
    tag: "Data Quality"
  },
  {
    name: "Data Quality",
    category: "data-engineering",
    description: "Automated assertion checks, null audits, range checks, and anomaly filtering.",
    tag: "Data Quality"
  },
  {
    name: "Error Handling",
    category: "data-engineering",
    description: "Graceful failure handling, retry logic, error quarantine tables, and alert routing.",
    tag: "Reliability"
  },
  {
    name: "Pipeline Monitoring",
    category: "data-engineering",
    description: "Proactive tracking of pipeline execution status, run durations, and trigger alerts.",
    tag: "Operations"
  },
  {
    name: "Performance Analysis",
    category: "data-engineering",
    description: "Partition tuning, broadcast joins, shuffle reduction, and resource scaling optimization.",
    tag: "Optimization"
  },
  {
    name: "Production Troubleshooting",
    category: "data-engineering",
    description: "Resolving production job failures, data skew, out-of-memory errors, and network timeouts.",
    tag: "Operations"
  },

  // Data Modeling & Warehousing
  {
    name: "OLTP/OLAP",
    category: "data-modeling",
    description: "Understanding transactional database systems versus analytical query architectures.",
    tag: "Foundations"
  },
  {
    name: "Data Warehouse",
    category: "data-modeling",
    description: "Centralized analytical repositories optimized for complex reporting and business intelligence.",
    tag: "Storage"
  },
  {
    name: "Data Lake",
    category: "data-modeling",
    description: "Scalable raw and semi-structured repository accommodating any volume or format.",
    tag: "Storage"
  },
  {
    name: "Data Mart",
    category: "data-modeling",
    description: "Subject-specific data views curated for departmental reporting and fast querying.",
    tag: "Serving"
  },
  {
    name: "Fact Tables",
    category: "data-modeling",
    description: "Designing quantitative metrics tables joined with multidimensional dimension keys.",
    tag: "Dimensional"
  },
  {
    name: "Dimension Tables",
    category: "data-modeling",
    description: "Descriptive context tables containing business attributes, hierarchies, and timestamps.",
    tag: "Dimensional"
  },
  {
    name: "Slowly Changing Dimensions (SCD)",
    category: "data-modeling",
    description: "Implementing SCD Type 1 (overwrite) and Type 2 (historical tracking with validity dates).",
    tag: "Dimensional"
  },
  {
    name: "Star Schema",
    category: "data-modeling",
    description: "Denormalized dimensional modeling with centralized facts and single-hop dimension joins.",
    tag: "Modeling"
  },
  {
    name: "Snowflake Schema",
    category: "data-modeling",
    description: "Normalized dimensional model with normalized sub-dimension hierarchies.",
    tag: "Modeling"
  },

  // Architecture & Medallion
  {
    name: "Medallion Architecture",
    category: "architecture",
    description: "Multi-hop data design pattern incrementally refining data quality across three stages.",
    tag: "Architecture"
  },
  {
    name: "Bronze Layer",
    category: "architecture",
    description: "Raw data lake ingestion tier retaining source schema, append-only history, and lineage.",
    tag: "Medallion"
  },
  {
    name: "Silver Layer",
    category: "architecture",
    description: "Cleansed, deduplicated, validated, and conformed enterprise data layer ready for analysis.",
    tag: "Medallion"
  },
  {
    name: "Gold Layer",
    category: "architecture",
    description: "Curated, aggregated dimensional models and business marts driving executive dashboards.",
    tag: "Medallion"
  },
  {
    name: "End-to-End Data Pipelines",
    category: "architecture",
    description: "Designing robust ingestion, distributed transformation, validation, and serving pipelines.",
    tag: "Architecture"
  },
  {
    name: "Scalable Data Workflows",
    category: "architecture",
    description: "Decoupled computing and storage architectures that scale seamlessly with data growth.",
    tag: "Architecture"
  },

  // Microsoft Fabric
  {
    name: "Fabric Data Ingestion",
    category: "fabric",
    description: "Unified ingestion from SaaS, on-premise, and multi-cloud sources into OneLake.",
    tag: "Unified SaaS"
  },
  {
    name: "Dataflows Gen2",
    category: "fabric",
    description: "Low-code Power Query transformation authoring with automated destinations into Lakehouse/Warehouse.",
    tag: "ETL"
  },
  {
    name: "Lakehouse",
    category: "fabric",
    description: "Combining Delta Lake file storage with SQL analytics endpoint in Microsoft Fabric.",
    tag: "Architecture"
  },
  {
    name: "Data Warehouse",
    category: "fabric",
    description: "SaaS-native enterprise relational data warehouse with ACID transactions and T-SQL support.",
    tag: "Warehouse"
  },
  {
    name: "Semantic Models",
    category: "fabric",
    description: "Business logic, hierarchies, and measures prepared directly for Power BI Direct Lake querying.",
    tag: "BI Modeling"
  },
  {
    name: "Real-Time Intelligence",
    category: "fabric",
    description: "Event streaming and high-frequency real-time event analytics using KQL databases.",
    tag: "Streaming"
  },

  // Orchestration & Streaming
  {
    name: "Apache Airflow",
    category: "orchestration",
    description: "Programmatic workflow management platform for authoring, scheduling, and monitoring pipelines.",
    tag: "Orchestration"
  },
  {
    name: "DAGs",
    category: "orchestration",
    description: "Directed Acyclic Graphs defining task dependencies, retries, and upstream/downstream schedules.",
    tag: "Workflows"
  },
  {
    name: "Operators",
    category: "orchestration",
    description: "Configuring Python, Bash, Azure, and Databricks operators for task execution.",
    tag: "Workflows"
  },
  {
    name: "Scheduling",
    category: "orchestration",
    description: "Cron-based and sensor-driven triggering of multi-step big data processing jobs.",
    tag: "Automation"
  },
  {
    name: "Apache Kafka",
    category: "orchestration",
    description: "Distributed publish-subscribe event streaming platform for high-throughput data pipelines.",
    tag: "Streaming"
  },
  {
    name: "Producers",
    category: "orchestration",
    description: "Publishing real-time records and transactional change logs to distributed partitions.",
    tag: "Streaming"
  },
  {
    name: "Consumers",
    category: "orchestration",
    description: "Subscribing to topics with consumer groups, offset management, and at-least-once delivery.",
    tag: "Streaming"
  },
  {
    name: "Topics",
    category: "orchestration",
    description: "Partitioned, fault-tolerant log streams for organizing decoupled data feeds.",
    tag: "Streaming"
  },

  // Additional Technologies
  {
    name: "Snowflake",
    category: "additional",
    description: "Cloud data platform with virtual warehouses, time travel, and zero-copy cloning.",
    tag: "Cloud DW"
  },
  {
    name: "Snowflake Cortex AI",
    category: "additional",
    description: "Serverless LLM and ML functions natively embedded inside SQL data processing.",
    tag: "Cloud AI"
  },
  {
    name: "Tableau Integration",
    category: "additional",
    description: "Connecting curated Gold data marts and SQL views for interactive enterprise reporting.",
    tag: "BI"
  },
  {
    name: "Power BI Integration",
    category: "additional",
    description: "Direct Lake and DirectQuery modeling for real-time dashboards and executive metrics.",
    tag: "BI"
  },
  {
    name: "RAG Data Pipelines",
    category: "additional",
    description: "Extracting, chunking, embedding, and syncing enterprise data into vector retrieval indexes.",
    tag: "AI Engineering"
  },
  {
    name: "Vector Databases",
    category: "additional",
    description: "Storage and similarity search for high-dimensional embeddings supporting generative search.",
    tag: "AI Storage"
  },
  {
    name: "Unstructured Data Processing",
    category: "additional",
    description: "Parsing PDFs, logs, images, and text files into structured columnar formats.",
    tag: "Processing"
  }
];
