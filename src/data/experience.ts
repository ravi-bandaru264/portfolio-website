export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  experienceDuration: string;
  responsibilities: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
}

export const professionalExperience: ExperienceItem[] = [
  {
    id: "dr-batras",
    company: "Dr. Batra's Positive Health Clinic Pvt. Ltd.",
    role: "Azure Data Engineer",
    location: "Mumbai, India",
    period: "September 2022 – Present",
    experienceDuration: "4 Years",
    responsibilities: [
      "Designed and developed Azure-based data pipelines using Azure Data Factory to ingest, transform, and load data from relational, file-based, and API sources into cloud data platforms.",
      "Worked with Azure Data Lake Storage Gen2 and Azure Storage services for structured, semi-structured, and unstructured data ingestion and storage.",
      "Created and maintained ADF Linked Services, Datasets, Integration Runtime configurations, pipeline activities, parameters, triggers, and reusable ETL workflows.",
      "Implemented data transformation and large-scale processing using Azure Databricks, Apache Spark, PySpark, Spark SQL, joins, aggregations, and window functions.",
      "Worked with Delta Lake and implemented Medallion Architecture using Bronze, Silver, and Gold layers for reliable and scalable data processing.",
      "Developed Python and PySpark scripts for data cleansing, validation, transformation, deduplication, and business-rule implementation.",
      "Designed data warehouse models using fact and dimension tables, Star/Snowflake schemas, and Slowly Changing Dimensions (SCD) concepts.",
      "Worked with Azure SQL Database for relational data storage, SQL development, data validation, and downstream reporting/analytics requirements.",
      "Integrated Azure Key Vault with data pipelines for secure management of secrets and credentials, and worked with Entra ID, Service Principals, and Managed Identities for secure access.",
      "Worked with REST APIs for data ingestion and service integration, including handling API-based source data in automated pipelines.",
      "Implemented data lineage, schema evolution, data quality checks, and error-handling approaches across data workflows.",
      "Supported batch and near-real-time data processing patterns and developed an understanding of Kafka-based producer, consumer, and topic workflows.",
      "Worked with Microsoft Fabric concepts including Lakehouse, Data Warehouse, Dataflows Gen2, data ingestion, semantic models, and Real-Time Intelligence.",
      "Performed pipeline monitoring, troubleshooting, performance analysis, and production support to resolve data processing failures and maintain reliable data delivery."
    ],
    techStack: [
      "Azure Data Factory",
      "ADLS Gen2",
      "Azure Databricks",
      "PySpark",
      "Delta Lake",
      "Azure SQL Database",
      "Azure Key Vault",
      "Microsoft Fabric",
      "Python",
      "SQL",
      "Entra ID"
    ]
  }
];

export const educationHistory: EducationItem[] = [
  {
    degree: "Bachelor's Degree",
    institution: "Acharya Nagarjuna University",
    score: "89%"
  }
];

export const continuousLearningAreas = [
  {
    title: "Azure Cloud Data Services",
    description: "Deep dive into enterprise cloud architectures, ADF dynamic pipelines, managed identities, and Key Vault integration."
  },
  {
    title: "Apache Spark & PySpark",
    description: "Distributed execution optimization, broadcast joins, window functions, and Catalyst query plan analysis."
  },
  {
    title: "Lakehouse & Medallion Architecture",
    description: "Designing ACID transactional lakes with Delta Lake, Bronze/Silver/Gold tiering, and schema enforcement."
  },
  {
    title: "Dimensional Data Modeling",
    description: "Star/Snowflake schema design, Fact & Dimension tables, and Slowly Changing Dimensions (SCD Type 1 & 2)."
  },
  {
    title: "Data Orchestration & Event Streaming",
    description: "Apache Airflow DAG design, sensor-driven workflows, and Kafka event streaming architectures."
  },
  {
    title: "Modern Analytics & Microsoft Fabric",
    description: "Exploring OneLake, Dataflows Gen2, Fabric Lakehouse & Data Warehouse, and Direct Lake semantic models."
  }
];
