import React, {useEffect, useState} from 'react';
import ListaViajes from './ListaViajes';
import ReporteMateriales from './ReporteMateriales';

function SimpleTabs() {
    const [activeTab, setActiveTab] = useState('grafico');
    const [data, setData]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5001/api/data/act')
            .then(res => res.json())
            .then(data => {
                setData(data)
            });
    },[])

    return (
        <div>
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'grafico' ? 'active' : ''}`}
                    onClick={() => setActiveTab('grafico')}
                >
                    Gráfico de Viajes
                </button>
                <button
                    className={`tab-button ${activeTab === 'reporte' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reporte')}
                >
                    Reporte de Materiales
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'grafico' && <ListaViajes datos={data} />}
                {activeTab === 'reporte' && <ReporteMateriales datos={data}/>}
            </div>
        </div>
    );
}

export default SimpleTabs;
