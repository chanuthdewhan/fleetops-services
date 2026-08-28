# FleetOps - Services Repository

Part of the **FleetOps Fleet & Logistics Dispatch System**, submitted for the
Enterprise Cloud Architecture (ITS 2130) capstone project.

## Student Information
- **Name:** K.D. Chanuth Dewhan
- **Student ID:** 241722017
- **Slack Handle:** @chanuthdewhan
- **GCP Project ID:** fleet-ops-506803

## Project Description
This repository contains the core business microservices of the FleetOps
system: order and dispatch management, trip telemetry and proof-of-delivery
handling, and notifications. Each service is independently deployable and
communicates via REST, discovered through Eureka.

## Architecture Overview
- **Order & Dispatch Service** — PostgreSQL — customers, drivers, vehicles,
  orders, assignments, authentication
- **Trip & Telemetry Service** — MongoDB — trip lifecycle, GPS/status events,
  proof-of-delivery file uploads to Google Cloud Storage
- **Notification Service** — MongoDB — system notifications for dispatchers
  and drivers
- **Deployment model:** IaaS — Compute Engine, Managed Instance Groups,
  multi-zone for high availability, behind a Load Balancer

## Technology Stack
- Java 25, Spring Boot 4.1, Spring Cloud 2025.1.2
- Spring Data JPA (PostgreSQL), Spring Data MongoDB
- Spring Cloud Config Client, Eureka Client
- Google Cloud Storage client library
- JWT authentication, MapStruct, Lombok
- PM2 for process management

## Submodules
| Module | Purpose |
|---|---|
| [order-dispatch-service](./order-dispatch-service) | Customers, drivers, vehicles, orders, assignments, auth |
| [trip-telemetry-service](./trip-telemetry-service) | Trip lifecycle, GPS events, proof of delivery |
| [notification-service](./notification-service) | System notifications |

## Local Setup

```bash
git clone --recurse-submodules https://github.com/chanuthdewhan/fleetops-services.git
cd fleetops-services
```

Requires `fleetops-platform` (Config Server + Eureka) running first, and local
PostgreSQL/MongoDB available (see `fleetops-platform`'s `docker-compose.yml`).

## Live Deployment
- **GCP Project ID:** fleet-ops-506803
- **Region:** asia-southeast1
- **Accessed via API Gateway:** http://34.21.225.166:80