import { useState } from 'react';

function InputQuiz() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');

    const labelStyle = { display: 'inline-block', width: 60 };

    return (
        <div style={{ padding: '20px 30px' }}>
            <h2>Input Data</h2>

            <p>
                <label style={labelStyle}>Nama:</label>
                <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan Nama..."
                />
            </p>

            <p>
                <label style={labelStyle}>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan Email..."
                />
            </p>

            <p>
                <label style={labelStyle}>Alamat:</label>
                <input
                    type="text"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Masukkan Alamat..."
                />
            </p>

            <h4>Hasil Inputan:</h4>
            <p><b>Nama:</b> {nama}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Alamat:</b> {alamat}</p>
        </div>
    );
}

export default InputQuiz;