import chalk from "chalk";
import Listr from "listr";
import { cloneTemplate } from "./utils/cloneTemplate";
import { projectInstall } from "pkg-install";

export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };

  try {
    const tasks = new Listr([
      {
        title: `Initial project with template ${options.template}`,
        task: () => cloneTemplate(options),
      },
      {
        title: "Install dependencies",
        task: () =>
          projectInstall({
            cwd: options.targetDirectory,
          }),
      },
    ]);
    
    await tasks.run();
  } catch (e) {
    console.error(`%s ${e.message}`, chalk.red.bold("ERROR"));
    process.exit(1);
  }

  console.log("%s Project ready", chalk.green.bold("DONE"));
  return true;
}
