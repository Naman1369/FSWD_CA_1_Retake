import './App.css'
import MemberCard from './components/TeamMemberCard'

function App() {
  return (
    <>
    <div>
      <MemberCard name="Naman Binu" jobtitle="Software Engineer"/>
      <br /><br />
      <MemberCard name="Atharva Dudhe" jobtitle="Product Manager"/>
      <br /><br />
      <MemberCard name="Vraj Patel" jobtitle="Design Head"/>
    </div>
    </>
  )
  
}

export default App
