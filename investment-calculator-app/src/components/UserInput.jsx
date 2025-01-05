
export default function UserInput({userInput, onChange}) {
    
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
            <label>Initial Investment</label>
            <input
             value={userInput.initialInvestment}
             onChange={(e)=>onChange('initialInvestment', e.target.value)}
             type="number"
             required />
        </p>
        <p>
            <label>Annual Investment</label>
            <input
             value={userInput.annualInvestment}
             onChange={(e)=>onChange('annualInvestment', e.target.value)}
             type="number"
             required />
        </p>
      </div>
      <div className="input-group">
        <p>
            <label>Expected Return</label>
            <input
             value={userInput.expectedReturn}
             onChange={(e)=>onChange('expectedReturn', e.target.value)}
             type="number"
             required />
        </p>
        <p>
            <label>Duration</label>
            <input
             value={userInput.duration}
             onChange={(e)=>onChange('duration', e.target.value)}
             type="number"
             required />
        </p>
      </div>
    </section>
  )
}
