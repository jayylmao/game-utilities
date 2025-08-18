interface StepperProps {
    title: string,
    id: string,
    defaultValue?: number,
    value: number,
    onChange: (coord: number) => void,
    min?: number,
    max?: number,
    disabled: boolean
}

/**
 * An input that allows selecting from a range of numeric values.
 * @param title - Informs the user what value the stepper is changing.
 * @param id - ID used for scripting and label accessibility.
 * @param defaultValue - Default value on page load.
 * @param value - Current value as has been updated with the current state of the parent.
 * @param onChange - Function to run when the value of the stepper changes.
 * @param min - Minimum value that the stepper can go down to. Optional.
 * @param max - Maximum value that the stepper can go up to. Optional.
 * @param disabled - Prevents user interaction if true.
 */
export const Stepper = ({ title, id, defaultValue, value, onChange, min, max, disabled }: StepperProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const string = event.target.value;
        const number = string === '' ? 0 : parseInt(string, 10);

        if (!isNaN(number)) {
            onChange(number);
        }
    }

    return (
        <div className='flex flex-row items-center gap-2 bg-gray-200 dark:bg-zinc-800 rounded-md px-3 py-1.5 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors'>
            <label htmlFor={ id } className='text-zinc-400'>{ title }</label>
            <input 
                name={ id }
                id={ id }
                type='number'
                defaultValue={ defaultValue }
                onChange={ handleInputChange }
                value={ value }
                min={ min }
                max={ max }
                disabled={ disabled }
            />
        </div>
    );
}