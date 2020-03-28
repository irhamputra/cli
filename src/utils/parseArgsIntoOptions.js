import arg from "arg";

export function parseArgsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--init": Boolean,
      "--template": Boolean,
      "--install": Boolean,
      "-i": "--install",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    initProjectName: args._[0],
    isUseTemplate: args["--template"] || false,
    template: args._[1],
    runInstall: args["--install"] || false,
  };
}
