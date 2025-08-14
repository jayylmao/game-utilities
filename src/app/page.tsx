import { Header } from './header'
import { Card, CardGroup } from './card'
import { Stepper } from './inputs';

export const Page = () => {
  return (
    <div className='flex flex-col gap-6 px-6 py-3 text-blue-400 dark:text-blue-100'>
      <Header accent='Game' title='Utilities' />
      <Card title='Dimension Coordinate Converter' iconName='pixelarticons:map'>
        <CardGroup>
          <p className='text-gray-500'>Overworld</p>
          <div className='flex flex-row gap-6'>
            <Stepper title='X' defaultValue={ 0 } disabled={ false } ></Stepper>
            <Stepper title='Z' defaultValue={ 0 } disabled={ false } ></Stepper>
          </div>
        </CardGroup>
        <CardGroup>
          <p className='text-gray-500'>Nether</p>
          <div className='flex flex-row gap-6'>
            <Stepper title='X' defaultValue={ 0 } disabled={ false } ></Stepper>
            <Stepper title='Z' defaultValue={ 0 } disabled={ false } ></Stepper>
          </div>
        </CardGroup>
      </Card>
    </div>
  );
}

export default Page;