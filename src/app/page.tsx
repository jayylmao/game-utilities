import { Header } from './header'
import { CoordinateConverter } from './CoordinateConverter';

export const Page = () => {
  return (
    <div className='flex flex-col gap-6 px-6 py-3'>
      <Header accent='Game' title='Utilities' />
      <CoordinateConverter />
    </div>
  );
}

export default Page;