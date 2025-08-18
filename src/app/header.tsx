import { Noto_Serif } from 'next/font/google'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
})

interface HeaderProps {
    accent?: string;
    title: string;
}

/**
 * Show a short string as the title of a page.
 * 
 * @param accent - Display text with a purple accent color. Optional.
 * @param title - Main title text.
 * @returns 
 */
export const Header = ({ accent, title }: HeaderProps) => {
    return <h1 className={`${notoSerif.className} font-thin text-4xl italic`}> <span className='text-purple-500 dark:text-purple-200'>{ accent }</span> { title }</h1>;
}

interface CardHeaderProps {
    title: string;
}

export const CardHeader = ({ title }: CardHeaderProps) => {
    return <h2 className={`${notoSerif.className} font-light text-lg text-gray-600 dark:text-gray-400`}>{ title }</h2>;
}