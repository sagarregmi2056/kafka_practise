Prerequisite
Knowledge
Node.JS Intermediate level
Experience with designing distributed systems
Tools
Node.js: Download Node.JS
Docker: Download Docker
VsCode: Download VSCode
Commands




Start Zookeper Container and expose PORT 2181.


docker run -p 2181:2181 zookeeper


Start Kafka Container, expose PORT 9092 and setup ENV variables.


docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka