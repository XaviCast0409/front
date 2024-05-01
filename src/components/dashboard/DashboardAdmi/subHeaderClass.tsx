import Button from '../../../utils/Button';
import { Add } from '../../../assets/Icons';
interface SubHeaderClassProps {
  setOpenModal: (data: boolean) => void;
}
export default function SubHeaderClass({ setOpenModal }: SubHeaderClassProps) {

  return (
    <div className="flex justify-end w-full">
      <Button
        text="Add"
        icon={<Add />}
        handleClick={() => setOpenModal(true)}
        className='btn-primary'
        type='button'
      /> 
    </div>
  )
}
