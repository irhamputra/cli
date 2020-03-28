import { parseArgsIntoOptions } from "./utils/parseArgsIntoOptions";
import { promptMissingOptions } from "./utils/promptMissingOptions";
import { createProject } from "./main";

export async function cli(args) {
  let options = parseArgsIntoOptions(args);
  options = await promptMissingOptions(options);

  await createProject(options);
}
