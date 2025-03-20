import React, {useEffect, useState} from 'react';
import DiferenciaTonelaje from "./DiferenciaTonelaje";
import TonelajePorTurno from "./TonelaePorTurno";


function SimpleTabs() {
    const [activeTab, setActiveTab] = useState('diferencia');
    const [dataAct, setDataAct] = useState([])
    const [dataPrev, setDataPrev] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/api/data/act')
            .then(res => res.json())
            .then(data => {
                setDataAct(data)
            });
        fetch('http://localhost:5001/api/data/prev')
            .then(res => res.json())
            .then(data => {
                setDataPrev(data)
            });
    }, [])
    useEffect(() => {
        console.log(dataPrev, dataAct)
    }, [dataAct, dataPrev])

    return (
        <div>
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'diferencia' ? 'active' : ''}`}
                    onClick={() => setActiveTab('diferencia')}
                >
                    Diferencia de Tonelaje
                </button>
                <button
                    className={`tab-button ${activeTab === 'tonelaje' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tonelaje')}
                >
                    Tonelaje Total por Turno
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'diferencia' && <DiferenciaTonelaje datosPrev={dataPrev} datosAct={dataAct}/>}
                {activeTab === 'tonelaje' && <TonelajePorTurno datosPrev={dataPrev} datosAct={dataAct}/>}
            </div>
        </div>
    );
}

export default SimpleTabs;
