import { useState } from 'react';

function TambahKurang() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Penambahan dan Pengurangan</h2>
            <h2>Hasil Hitungan: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
            <button onClick={() => setCount(count - 1)}>Kurang</button>
        </div>
    );
}

export default TambahKurang;