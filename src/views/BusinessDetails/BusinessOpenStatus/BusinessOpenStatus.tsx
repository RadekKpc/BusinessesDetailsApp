import { useEffect } from 'react';
import type { OppeningDays } from '../commonTypes';
import styles from './BusinessOpenStatus.module.css';

type Props = {
  days: OppeningDays,
};


const dayToStrubg = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];
const mapDateDayToString = (day: number): keyof OppeningDays => {
  return dayToStrubg[day] as keyof OppeningDays;
};

const chechIfIsOpen = (days: OppeningDays): boolean => {
  const today = new Date();
  const time = today.toTimeString().slice(0, 5);

  const day = today.getDay();
  const mapepdDay = mapDateDayToString(day);

  if (!days[mapepdDay]) return false;
  
  return days[mapepdDay]!.some(({ start, end }) => start <= time && time < end);
};

const BusinessOpenStatus = ({ days }: Props) => {

  useEffect(() => {
    console.log(chechIfIsOpen({
      monday: [{ start: '14:00', end: '15:00', type: 'OPEN' }],
    }));
    console.log(chechIfIsOpen({
      sunday: [{ start: '14:00', end: '15:00', type: 'OPEN' }],
    }));
    console.log(chechIfIsOpen({
      monday: [{ start: '12:00', end: '13:00', type: 'OPEN' }, { start: '14:00', end: '15:00', type: 'OPEN' }],
    }));
    console.log(chechIfIsOpen({
      monday: [{ start: '12:00', end: '14:00', type: 'OPEN' }, { start: '15:00', end: '16:00', type: 'OPEN' }],
    }));
  }, []);

  return (
    <div>
      { chechIfIsOpen(days) ? <div className={styles.openedContainer}>
        OPENED
        </div> : <div className={styles.closedContainer}>
          CLOSED
          </div>}
    </div>
  ); 
};

export default BusinessOpenStatus;
