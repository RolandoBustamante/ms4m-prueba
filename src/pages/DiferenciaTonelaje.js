import React, {useState, useEffect} from 'react';

const DiferenciaDeTonelaje = ({datosAct, datosPrev}) => {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        if (!datosAct || !datosPrev) return
        const tonelajePorHoraAct = {}
        datosAct.forEach(item => {
            tonelajePorHoraAct[item.relativehour] = (tonelajePorHoraAct[item.relativehour] || 0) + item.tons
        })

        const tonelajePorHoraPrev = {}
        datosPrev.forEach(item => {
            const adjustedRelativeHour = item.relativehour - 12
            tonelajePorHoraPrev[adjustedRelativeHour] = (tonelajePorHoraPrev[adjustedRelativeHour] || 0) + item.tons
        })

        const diferencias = Object.keys({...tonelajePorHoraAct, ...tonelajePorHoraPrev}).map(relativehour => ({
            relativehour,
            tonelajeAct: tonelajePorHoraAct[relativehour] || 0,
            tonelajePrev: tonelajePorHoraPrev[relativehour] || 0,
            diferencia: (tonelajePorHoraAct[relativehour] || 0) - (tonelajePorHoraPrev[relativehour] || 0)
        })).sort((a, b) => parseInt(a.relativehour) - parseInt(b.relativehour))

        setDatos(diferencias)
    }, [datosAct, datosPrev])

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Diferencia de Tonelaje por Hora Relativa</h2>
            <table style={{
                width: '90%',
                margin: '20px auto',
                borderCollapse: 'collapse',
                border: '2px solid #ccc'
            }}>
                <thead>
                <tr>
                    <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f4f4f4' }}>Hora Relativa</th>
                    <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f4f4f4' }}>Tonelaje Turno Actual (7am - 7pm)</th>
                    <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f4f4f4' }}>Tonelaje Turno Previo (7pm - 7am)</th>
                    <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f4f4f4' }}>Diferencia</th>
                </tr>
                </thead>
                <tbody>
                {datos.sort((a, b) => a.hour - b.hour).map((dato, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>{dato.relativehour}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>{dato.tonelajeAct}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>{dato.tonelajePrev}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>{dato.diferencia}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DiferenciaDeTonelaje;
