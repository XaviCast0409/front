import Button from '../../../utils/Button';
import { Add } from '../../../assets/Icons';
interface SubHeaderTradeProps {
  setOpenModal: (data: boolean) => void;
}
export default function SubHeaderTrade({ setOpenModal }: SubHeaderTradeProps) {

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
