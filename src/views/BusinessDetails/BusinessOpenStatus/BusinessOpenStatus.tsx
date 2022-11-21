import { useEffect } from 'react';
import type { OppeningDays } from '../commonTypes';
import styles from './BusinessOpenStatus.module.css';
import { checkIfIsOpen } from './checkIfIsOpen';
type Props = {
  days: OppeningDays,
};

const isEmpty = (obj: any) => Object.keys(obj).length === 0;

const BusinessOpenStatus = ({ days }: Props) => {

  // temporarly for cehcking checkIfIsOpen function
  useEffect(() => {
    console.log('current time', new Date().toTimeString().slice(0, 5));
    console.log('monday 16:00 - 17:00', checkIfIsOpen({
      monday: [{ start: '16:00', end: '17:00', type: 'OPEN' }],
    }));
    console.log('sunday 14:00 - 15:00', checkIfIsOpen({
      sunday: [{ start: '14:00', end: '15:00', type: 'OPEN' }],
    }));
    console.log(
      'monday 12:00 - 13:00, monday 19:00 - 20:00',
      checkIfIsOpen({
        monday: [{ start: '12:00', end: '13:00', type: 'OPEN' }, { start: '19:00', end: '20:00', type: 'OPEN' }],
      }));
    console.log(
      'monday 12:00 - 14:00, monday 16:00 - 20:00',
      checkIfIsOpen({
        monday: [{ start: '12:00', end: '14:00', type: 'OPEN' }, { start: '16:00', end: '20:00', type: 'OPEN' }],
      }));
  }, []);


  if (isEmpty(days)) return <></>;
  const cusinessOpendInformation = checkIfIsOpen(days);

  return (
    <div>
      {cusinessOpendInformation.isOpen ? <div className={styles.openedContainer}>
          OPENED 
          <div>
            {`Comapny will be closed in: ${cusinessOpendInformation.nextOpenedClosedTime}`}
          </div>
        </div> 
        : 
        <div className={styles.closedContainer}>
          CLOSED
          <div>
          {`Comapny will be opend in: ${cusinessOpendInformation.nextOpenedClosedTime}`}
          </div>
        </div>}
    </div>
  ); 
};

export default BusinessOpenStatus;
