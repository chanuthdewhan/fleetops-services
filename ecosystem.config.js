module.exports = {
  apps : [
    {
      name   : "cloud-sql-auth-proxy",
      script : "./cloud-sql-proxy fleet-ops-506803:asia-southeast1:postgres-vm --private-ip",
      log_file: "./logs/cloud-sql-proxy.log"
    },
    {
      name   : "order-dispatch-service",
      script : "java -jar ./order-dispatch-service/target/order-dispatch-service-1.0.0.jar",
      log_file: "./logs/order-dispatch-service.log",
      instances: 2
    },
    {
      name   : "trip-telemetry-service",
      script : "java -jar ./trip-telemetry-service/target/trip-telemetry-service-1.0.0.jar",
      log_file: "./logs/trip-telemetry-service.log",
      instances: 2
    },
    {
      name   : "notification-service",
      script : "java -jar ./notification-service/target/notification-service-1.0.0.jar",
      log_file: "./logs/notification-service.log",
      instances: 2
    }
  ]
}
