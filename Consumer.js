const { kafka } = require("./Client");

const group = process.argv[2];

async function init() {
  const consumer = kafka.consumer({ groupId: group });
  await consumer.connect();

  await consumer.subscribe({ topics: ["pathao-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `${group}:[${topic}]:part:${partition}:`,
        message.value.toString
      );
    },
  });
  await consumer.disconnect();
}

init();
