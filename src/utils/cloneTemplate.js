import Git from "nodegit";

export async function cloneTemplate(options) {
  const gitUrl = `https://github.com/GET-Templates/${options.template}.git`;
  await Git.Clone(gitUrl, options.targetDirectory);
  return true;
}
