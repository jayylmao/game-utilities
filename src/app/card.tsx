'use client'

import { Icon } from '@iconify-icon/react';
import { CardHeader } from './header';

interface CardProps {
    title: string;
    iconName?: string;
    children: React.ReactNode;
}

interface CardGroupProps {
    children: React.ReactNode;
}

/**
 * A container with information and an optional leading icon.
 * Used to present snippets of information in a 
 * 
 * @param title - Title of the card.
 * @param iconName - Name of the icon to use. Optional.
 * @param children - Main card content.
 * @example
 * <Card title='Profile' iconName='mdi:account' />
 */
export const Card = ({ title, iconName, children }: CardProps) => {
    return (
        <div className='flex flex-col px-6 py-6 border-1 gap-2 rounded-2xl border-zinc-400 dark:border-zinc-700'>
            <div className='flex flex-row items-center gap-x-2'>
                { /* render icon if a name is provided. */ }
                { iconName && <Icon icon={ iconName } className='text-xl text-gray-600 dark:text-gray-400' /> }
                <CardHeader title={ title } />
            </div>
            { children }
        </div>
    );
}

/**
 * A group of related JSX elements in a card.
 * Has a smaller gap between the elements than the gap between groups in the card to signify their relation.
 * @param children - Any JSX element/s that the card group will contain.
 */
export const CardGroup = ({ children }: CardGroupProps) => {
    return (
        <div className='flex flex-col'>
            { children }
        </div>
    );
}
