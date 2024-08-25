import React from "react";
import {InfoCircleOutlined} from "@ant-design/icons";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {Card, Row} from "antd";

export const Occupancy = () => {

    const dataLine1 = [
        { name: 'jan', line1: 34.9 },
        { name: 'feb', line1: 32.1 },
        { name: 'mar', line1: 35.2 },
        { name: 'apr', line1: 42.2 },
        { name: 'may', line1: 71.4 },
        { name: 'jun', line1: 69.5 },
        { name: 'jul', line1: 54.6 },
        { name: 'aug', line1: 65.2 },
        { name: 'sep', line1: 72.1 },
        { name: 'oct', line1: 70 },
        { name: 'nov', line1: 39.9 },
        { name: 'dec', line1: 31.9 },
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
        Occupancy Rate <InfoCircleOutlined/> <b style={{fontSize: '20px', marginLeft: '150px'}}>{average(dataLine1)}</b>%
    </div>

    return (
        <div style={{width: '30%', marginLeft: '50px'}}>
        <Card title={titleOcc}>
            <Row>
                <ResponsiveContainer width={ 250 } height={ 200 }>
                    <LineChart data={dataLine1}>
                        <XAxis dataKey='name' />
                        <Tooltip formatter={ tick => `${tick}%` }/>
                        <Line type='monotone' dataKey='line1' name={ 'Occ' } stroke='#b50b52' dot={false} strokeWidth={5}/>
                    </LineChart>
                </ResponsiveContainer>
            </Row>
        </Card>
        </div>
    )
}