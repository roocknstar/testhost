import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TambahKurang from './tambah_kurang.jsx'
import InputQuiz from './input_quiz.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ maxWidth: 450, margin: '0 20px' }}>
      <TambahKurang />
      <hr />
      <hr />
      <InputQuiz />
    </div>
  </StrictMode>,
)