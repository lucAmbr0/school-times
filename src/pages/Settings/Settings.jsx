import packageJson from '../../../package.json'

function Settings() {

  const element = (
    <>
    <div>
      <h1>Settings</h1>
      <br />
      <p>Current version: v{packageJson.version}</p>
    </div>
  </>
  )
  
  return ( element );
}

export default Settings;
