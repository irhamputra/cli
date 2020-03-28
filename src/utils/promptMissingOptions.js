import inquirer from "inquirer";

export async function promptMissingOptions(options) {
  const defaultTemplate = "Javascript";

  const questions = [];

  if (!options.initProjectName) {
    questions.push({
      type: "input",
      name: "initProjectName",
      message: "What is the name of your project",
    });
  }

  if (!options.isUseTemplate && !options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Please choose which template to use",
      choices: [
        "JavaScript",
        "TypeScript",
        "NextJS",
        "NextJS TypeScript",
        "React-Redux",
        "React-Redux TypeScript",
        "NextJS-Redux TypeScript",
        "React Apollo",
        "React Apollo TypeScript",
        "NextJS Apollo",
        "NextJS Apollo TypeScript",
      ],
      default: defaultTemplate,
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    isUseTemplate: options.isUseTemplate || true,
    initProjectName: options.initProjectName || answers.initProjectName,
    template: options.template || answers.template,
  };
}
