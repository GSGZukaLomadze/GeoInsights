import React from "react";
import {InfoCircleOutlined} from "@ant-design/icons";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {Card} from "antd";

export const RevPAR = () => {

    const dataLine1 = [
        { name: 'jan', line1: 28.2 },
        { name: 'feb', line1: 27.5 },
        { name: 'mar', line1: 42.3 },
        { name: 'apr', line1: 50.5 },
        { name: 'may', line1: 62.6 },
        { name: 'jun', line1: 65 },
        { name: 'jul', line1: 50.2 },
        { name: 'aug', line1: 56.8 },
        { name: 'sep', line1: 63.8 },
        { name: 'oct', line1: 55 },
        { name: 'nov', line1: 35.3 },
        { name: 'dec', line1: 28.1 },
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
        Rev PAR <InfoCircleOutlined/> <b style={{fontSize: '20px', marginLeft: '150px'}}>{average(dataLine1)}</b>%
    </div>

    return (
        <div style={{width: '30%', marginLeft: '50px'}}>
            <Card title={titleOcc}>
                <ResponsiveContainer width={ 250 } height={ 200 }>
                    <LineChart data={dataLine1}>
                        <XAxis dataKey='name' />
                        <Tooltip formatter={ tick => `${tick}%` }/>
                        <Line type='monotone' dataKey='line1' name={ 'RevPAR' } stroke='#f2241d' dot={false} strokeWidth={5}/>
                    </LineChart>
                </ResponsiveContainer>
            </Card>
        </div>
    )
}