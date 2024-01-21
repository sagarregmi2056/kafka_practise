// importing kafka client
const { kafka } = require("./Client");

// creating a function  to start connection to the server
async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting.......... for kafka server");
  admin.connect();
  console.log("Admin connected successfully ");

  console.log("Creating topic for kafka server about [pathao-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "pathao-updates",
        // number of partations needed
        numPartitions: 2,
      },
    ],
  });

  console.log(
    "Created successfully topic for kafka server about [pathao-updates]"
  );

  console.log("disconnecting admin");
  await admin.disconnect();

  console.log("admin disconnected successfully");
}

// calling kafka connection function init
init();
