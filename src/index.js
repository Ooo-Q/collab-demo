/**
 * collab-demo — starting point for Git collaboration practice.
 * Person A and Person B will each change this file on feature branches.
 */

function greet(teamName = "Person A was here | edited by B") {
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
