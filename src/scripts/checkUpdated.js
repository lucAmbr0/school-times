import { useData } from "./useData";
import packageJson from "../../package.json";

function compareVersions(v1, v2) {
  const v1Parts = v1.split(".").map(Number);
  const v2Parts = v2.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if (v1Parts[i] > v2Parts[i]) return 1;
    if (v1Parts[i] < v2Parts[i]) return -1;
  }
  return 0;
}

function checkUpdated(forcedMinimumVersion = null) {
  const [data, setData] = useData();
  const savedVersion = data?.settings?.version || "0.0.0";
  const currVersion = packageJson.version;

  let updated = false;
  let cleared = false;

  if (forcedMinimumVersion && compareVersions(savedVersion, forcedMinimumVersion) < 0) {
    localStorage.clear();
    cleared = true;

    const newData = {
      settings: {
        version: currVersion
      }
    };
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);

    updated = true;
  } else if (savedVersion !== currVersion) {
    const newData = { ...data };
    newData.settings.version = currVersion;
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
    updated = true;
  }

  return [savedVersion, currVersion, updated, cleared];
}

export default checkUpdated;
