const { kafka } = require("./Client");

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });
  await consumer.connect();

  await consumer.subscribe({ topics: ["pathao-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(`[${topic}]:part:${partition}:${message.toString}`);
    },
  });
  await consumer.disconnect();
}

init();
