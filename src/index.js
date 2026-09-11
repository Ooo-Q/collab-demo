/**
 * collab-demo — starting point for Git collaboration practice.
 * Person A and Person B will each change this file on feature branches.
 */

function greet(teamName = "A + B practice repo") {
  return [
    "Hello from collab-demo!",
    `Team: ${teamName}`,
  ].join("\n");
}

function main() {
  console.log(greet());
}

main();

module.exports = { greet };
