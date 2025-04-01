import { useData } from "./useData";
import packageJson from "../../package.json";

function checkUpdated() {
    const [data, setData] = useData();
    const savedVersion = data.settings.version;
    const currVersion = packageJson.version;
    let updated = false;
    
    if (savedVersion != currVersion) {
        updated = true;
        
        let d = data;
        d.settings.version = currVersion;
        setData(d);
    }
    
    const output = [savedVersion, currVersion, updated];
    return output;
};

export default checkUpdated;
