import './App.css'

function App() {

  return (
    <div data-theme='Default Light'>
      <div style={{ background: 'var(--✦-bg-default-default)', width: 390, height: 844 }}>
        <div style={{ padding: 8 }}>
          <div style={{
            textAlign: 'left',
            borderRadius: 24,
            height: 344,
            padding: 24,
            background: 'var(--✦-bg-brand-tertiary)',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ color: 'var(--✦-text-default-secondary)' }}>Balance</div>
                <div style={{ color: 'var(--✦-text-default-default)', fontSize: 28, fontWeight: 'bold' }}>
                  60,000.
                  <span style={{ fontSize: 16 }}>00</span>
                </div>
                <div style={{ color: 'var(--✦-text-success-default)', fontWeight: 'bold' }}>+$4,000 (7.14%)</div>
              </div>

              <button style={{
                background: 'var(--✦-bg-default-default)',
                border: '1px solid var(--✦-border-default-default)',
                color: 'var(--✦-text-default-default)',
              }}>
                Deposit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
