import React from "react";
import {InfoCircleOutlined} from "@ant-design/icons";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {Card} from "antd";

export const Adr = () => {

    const dataLine1 = [
        { name: 'jan', line1: 70.8 },
        { name: 'feb', line1: 63.8 },
        { name: 'mar', line1: 60.2 },
        { name: 'apr', line1: 60.3 },
        { name: 'may', line1: 75.4 },
        { name: 'jun', line1: 73.1 },
        { name: 'jul', line1: 66.8 },
        { name: 'aug', line1: 67.4 },
        { name: 'sep', line1: 72.7 },
        { name: 'oct', line1: 67 },
        { name: 'nov', line1: 61.7 },
        { name: 'dec', line1: 65.9 },
    ];

    const average = (toAverage) => {
        let sum = 0
        let count = 0
        toAverage.forEach((data) => {
            sum += data.line1
            count += 1
            return data
        })
        return Math.round(sum/count)
    }

    const titleOcc = <div>
        ADR <InfoCircleOutlined/> <b style={{fontSize: '20px', marginLeft: '150px'}}>{average(dataLine1)}</b>%
    </div>

    return (
        <div style={{width: '30%', marginLeft: '50px'}}>
            <Card title={titleOcc}>
                <ResponsiveContainer width={ 250 } height={ 200 }>
                    <LineChart data={dataLine1}>
                        <XAxis dataKey='name' />
                        <Tooltip formatter={ tick => `${tick}%` }/>
                        <Line type='monotone' dataKey='line1' name={ 'ADR' } stroke='#f2241d' dot={false} strokeWidth={5}/>
                    </LineChart>
                </ResponsiveContainer>
            </Card>
        </div>
    )
}