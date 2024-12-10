function App(){
  return <div>
    <h1 style={{
      color: '#2c3e50',
      textAlign: 'center',
      padding: '20px',
      margin: '20px 0',
      borderBottom: '2px solid #3498db',
      fontFamily: "'Nanum Gothic', sans-serif"
    }}>나의 TODO-LIST</h1>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <input 
        type="text" 
        placeholder="할일을 입력하세요"
        style={{
          width: '60%',
          padding: '10px 15px',
          margin: '0 10px',
          fontSize: '16px',
          border: '2px solid #e0e0e0',
          borderRadius: '8px',
          outline: 'none',
          transition: 'border-color 0.3s ease',
        }} 
      />
      <button style={{
        backgroundColor: '#3498db',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        ':hover': {
          backgroundColor: '#2980b9'
        }
      }}>추가</button>
    </div>
  </div> 
}

export default App