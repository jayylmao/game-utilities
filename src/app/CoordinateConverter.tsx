'use client'

import { useState } from 'react'
import { Card, CardGroup } from "./card"
import { Stepper } from "./inputs"

function overworldToNether(x: number, z: number) {
    const newX: number = Math.floor(x / 8);
    const newZ: number = Math.floor(z / 8);
    return { newX, newZ };
}

function netherToOverworld(x: number, z: number) {
    const newX = x * 8;
    const newZ = z * 8;
    return { newX, newZ };
}

export const CoordinateConverter = () => {
    const [coords, setCoords] = useState({
        owX: 0,
        owZ: 0,
        netherX: 0,
        netherZ: 0,
    });

    const handleOverworldXChange = (newX: number) => {
        const { newX: netherX, newZ: netherZ } = overworldToNether(newX, coords.owZ);

        setCoords({
            owX: newX,
            owZ: coords.owZ,
            netherX: netherX,
            netherZ: netherZ,
        });
    };

    const handleOverworldZChange = (newZ: number) => {
        const { newX: netherX, newZ: netherZ } = overworldToNether(coords.owX, newZ);

        setCoords({
            owX: coords.owX,
            owZ: newZ,
            netherX: netherX,
            netherZ: netherZ,
        });
    };

    const handleNetherXChange = (newX: number) => {
        const { newX: owX, newZ: owZ } = netherToOverworld(newX, coords.netherZ);

        setCoords({
            owX: owX,
            owZ: owZ,
            netherX: newX,
            netherZ: coords.netherZ,
        })
    }

    const handleNetherZChange = (newZ: number) => {
        const { newX: owX, newZ: owZ } = netherToOverworld(coords.netherX, newZ);

        setCoords({
            owX: owX,
            owZ: owZ,
            netherX: coords.netherX,
            netherZ: newZ,
        })
    }

    return (
        <Card title='Dimension Coordinate Converter' iconName='pixelarticons:map'>
            <CardGroup>
                <p className='text-gray-500'>Overworld</p>
                <div className='flex flex-row gap-6'>
                    <Stepper
                        title='X' 
                        id='owX' 
                        value={ coords.owX }
                        onChange={ handleOverworldXChange }
                        disabled={ false }
                    />
                    <Stepper 
                        title='Z'
                        id='owZ'
                        value={ coords.owZ }
                        onChange={ handleOverworldZChange }
                        disabled={ false }
                    />
                </div>
            </CardGroup>
            <CardGroup>
                <p className='text-gray-500'>Nether</p>
                <div className='flex flex-row gap-6'>
                    <Stepper 
                        title='X'
                        id='netherX'
                        value={ coords.netherX }
                        onChange={ handleNetherXChange }
                        disabled={ false }
                    />
                    <Stepper
                        title='Z'
                        id='netherZ'
                        value={ coords.netherZ }
                        onChange={ handleNetherZChange }
                        disabled={ false }
                    />
                </div>
            </CardGroup>
        </Card>
    );
}