interface StepperProps {
    title: string,
    defaultValue: number,
    min?: number,
    max?: number,
    disabled: boolean
}

/**
 * An input that allows selecting from a range of numeric values.
 * @param title: Informs the user what value the stepper is changing.
 * @param defaultValue: Default value on page load.
 * @param min: Minimum value that the stepper can go down to. Optional.
 * @param max: Maximum value that the stepper can go up to. Optional.
 * @param disabled: Prevents user interaction if true.
 */
export const Stepper = ({ title, defaultValue, min, max, disabled }: StepperProps) => {
    return (
        <div className='flex flex-row items-center gap-2 bg-zinc-800 rounded-md px-3 py-1.5 hover:bg-zinc-700 transition-colors'>
            <p className='text-zinc-400'>{ title }</p>
            <input type='number' defaultValue={ defaultValue } min={ min } max={ max } disabled={ disabled }></input>
        </div>
    )
}