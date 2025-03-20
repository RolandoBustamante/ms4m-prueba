import {useEffect, useState} from "react";
import ReactECharts from 'echarts-for-react';


const ListaViajes = ({datos}) => {

    const [opciones, setOpciones] = useState({})

    useEffect(() => {
        if(!datos) return
        const data = {}
        const seriesMap = new Map()
        const legend = new Set()
        for (const item of datos) {
            const {locationdump: zonaDescarga, loadingequipmentname: equipoCarga, tons: tonelaje} = item

            if (!data[zonaDescarga]) data[zonaDescarga] = {}

            if (!data[zonaDescarga][equipoCarga]) data[zonaDescarga][equipoCarga] = 0

            data[zonaDescarga][equipoCarga] += tonelaje

            if (!seriesMap.has(equipoCarga))
                seriesMap.set(equipoCarga, {
                    name: equipoCarga,
                    type: 'bar',
                    data: [],
                    emphasis: {focus: 'series'}
                });

            legend.add(equipoCarga)
        }

        Object.entries(data).forEach(([zone, teams]) => {
            Object.entries(teams).forEach(([team, tonnage]) => {
                seriesMap.get(team).data.push({value: tonnage, name: zone});
            });
        });

        setOpciones({
            tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
            legend: {data: Array.from(legend)},
            xAxis: {type: 'category', data: Object.keys(data), axisTick: {alignWithLabel: true}},
            yAxis: {type: 'value', name: 'Tonelaje'},
            series: Array.from(seriesMap.values())
        });

    }, [datos])

    return (
        <div>
            <h2>Lista de Viajes por Tonelaje</h2>
            <ReactECharts option={opciones} style={{height: 400, width: '100%'}}/>
        </div>
    )
}
export default ListaViajes