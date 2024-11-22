const { program } = require("commander");
const { serialize, unserialize } = require("php-serialize");
const { version } = require("../package.json");

program.version(version).description("A CLI tool for php-serialize");

const readStdin = () =>
  new Promise((resolve, reject) => {
    let data = "";
    process.stdin.on("data", (chunk) => (data += chunk));
    process.stdin.on("end", () => resolve(data.trim()));
    process.stdin.on("error", reject);
  });

// Serialize with stdin support
program
  .command("serialize")
  .description("Serialize a JavaScript object into PHP format")
  .argument("[input]", "JavaScript object in JSON format")
  .action(async (input) => {
    try {
      const data = input || (await readStdin());
      const jsObject = JSON.parse(data);
      const phpSerialized = serialize(jsObject);
      console.log(phpSerialized);
    } catch (error) {
      console.error("Error serializing input:", error.message);
    }
  });

// Unserialize with stdin support
program
  .command("unserialize")
  .description("Unserialize a PHP serialized string into a JavaScript object")
  .argument("[input]", "PHP serialized string")
  .action(async (input) => {
    try {
      const data = input || (await readStdin());
      const jsObject = unserialize(data);
      console.log(JSON.stringify(jsObject, null, 2));
    } catch (error) {
      console.error("Error unserializing input:", error.message);
    }
  });

program.parse(process.argv);
