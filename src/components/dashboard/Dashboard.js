import { DashboardSkeleton } from "./DashboardSkeleton";
import './dash.css'

function Component() {
  return( 
  <>
  <div className="bg">
  {/* <center><h1>Welcome to e-drycleaning </h1>
  <h4>Created by : Abhishek Ranjanagouda G && Br Bhargav Hebbar</h4>
  </center> */}
  </div>
  
  </>
)}

export function Dashboard() {
  return <DashboardSkeleton component={Component}></DashboardSkeleton>;
}
