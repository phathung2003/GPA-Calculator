import packageJson from "../../package.json";

export default function projectVersion(): string {
  return packageJson.version;
}
