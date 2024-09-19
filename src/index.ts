#!/usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";

figlet("Hello World!!", (err, data) => {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
  console.log(chalk.blue.italic("hi from simple-cli-starter 👋\n"));
});
