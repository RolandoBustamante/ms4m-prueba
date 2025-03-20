import React, { useState, useEffect } from 'react';

const ReporteMateriales=({datos})=> {
    const [tablaDatos, setTablaDatos] = useState([]);

    useEffect(() => {
        if(!datos) return
        const datosAgrupados = datos.reduce((acc, curr) => {
            const key = `${curr.dim_name_material}-${curr.hour}`
            if (!acc[key]) acc[key] = {
                    material: curr.dim_name_material,
                    hora: curr.hour,
                    tonelaje: 0
                };

            acc[key].tonelaje += curr.tons;
            return acc;
        }, {});

        const datosOrdenados = Object.values(datosAgrupados).sort((a, b) => b.hora - a.hora); // Ordenar descendentemente por hora
        setTablaDatos(datosOrdenados);
    }, [datos]);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Reporte de Tonelaje por Material y Hora</h2>
            <table style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Material</th>
                    <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Hora</th>
                    <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Tonelaje</th>
                </tr>
                </thead>
                <tbody>
                {tablaDatos.map((dato, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>{dato.material}</td>
                        <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>{dato.hora}</td>
                        <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>{dato.tonelaje}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReporteMateriales;
