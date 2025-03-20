import React, {useState, useEffect} from 'react'

const TonelajePorTurno = ({datosAct, datosPrev}) => {
    const [datos, setDatos] = useState([])
    const [materiales, setMateriales] = useState([])
    const [materialSeleccionado, setMaterialSeleccionado] = useState('')
    useEffect(()=>{
        const todosLosDatos = [...datosPrev, ...datosAct]
        const materialesUnicos = new Set(todosLosDatos.map(dato => dato.dim_name_material))
        setMateriales([...materialesUnicos])
        setMaterialSeleccionado([...materialesUnicos][0])
    },[datosAct, datosPrev])


    useEffect(() => {
        if (materialSeleccionado) {
            const filtrarDatosPorMaterial = (datos, material) =>
                datos.filter(dato => dato.dim_name_material === material)
                    .reduce((acc, curr) => {
                        acc[curr.relativehour] = (acc[curr.relativehour] || 0) + curr.tons
                        return acc
                    }, {})

            const tonelajePorHoraAct = filtrarDatosPorMaterial(datosAct, materialSeleccionado)
            const tonelajePorHoraPrev = filtrarDatosPorMaterial(datosPrev, materialSeleccionado)

            const datosFusionados = Object.keys({...tonelajePorHoraAct, ...tonelajePorHoraPrev}).sort().map(hour => ({
                hour,
                tonelajeAct: tonelajePorHoraAct[hour] || 0,
                tonelajePrev: tonelajePorHoraPrev[hour] || 0
            }))

            setDatos(datosFusionados)
        }
    }, [datosAct, datosPrev, materialSeleccionado])


    return (
        <div style={{ textAlign: 'center', margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Tonelaje por Material y Hora Relativa</h2>
            <select
                value={materialSeleccionado}
                onChange={e => setMaterialSeleccionado(e.target.value)}
                style={{
                    padding: '8px 10px',
                    margin: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    backgroundColor: '#fff'
                }}>
                {materiales.map(material => (
                    <option key={material} value={material}>{material}</option>
                ))}
            </select>
            <table style={{
                width: '80%',
                margin: '20px auto',
                borderCollapse: 'collapse',
                border: '1px solid #ddd'
            }}>
                <thead>
                <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Hora Relativa</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Tonelaje Turno Actual</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Tonelaje Turno Previo</th>
                </tr>
                </thead>
                <tbody>
                {datos.map(({ hour, tonelajeAct, tonelajePrev }) => (
                    <tr key={hour}>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{hour}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{tonelajeAct}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{tonelajePrev}</td>
                    </tr>
                ))}
                <tr >
                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Total</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{datos.reduce((i,j)=>i+j.tonelajeAct,0)}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{datos.reduce((i,j)=>i+j.tonelajePrev,0)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TonelajePorTurno
