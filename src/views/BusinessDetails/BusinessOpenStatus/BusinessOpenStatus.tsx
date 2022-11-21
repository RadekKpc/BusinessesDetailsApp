import { useEffect } from 'react';
import type { OppeningDays, TimeRange } from '../commonTypes';
import styles from './BusinessOpenStatus.module.css';

type Props = {
  days: OppeningDays,
};


const dayToStrubg = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];
const mapDateDayToString = (day: number): keyof OppeningDays => {
  return dayToStrubg[day] as keyof OppeningDays;
};

const chechIfIsOpen = (days: OppeningDays): { isOpen: boolean, nextOpenedClosedTime: string } => {
  const today = new Date();
  const time = today.toTimeString().slice(0, 5);
  // { start, end }
  const day = today.getDay();
  const mapepdDay = mapDateDayToString(day);
  const nextOpenedClosedTime = Object.entries(days)?.flatMap((
    [weekday, timeRages] : [string, TimeRange[]]) => 
    timeRages.flatMap(({ start, end }) => [{ time: start, weekday }, { time: end, weekday }]));
  console.log(nextOpenedClosedTime);
  // .find(startOrEnd => startOrEnd > time);

  
  if (!days[mapepdDay]) {
    return {
      isOpen: false,
      nextOpenedClosedTime: '',
    };
  }

  const openTimeRange = days[mapepdDay]!.find(({ start, end }) => start <= time && time < end);

  return {
    isOpen : !!openTimeRange,
    nextOpenedClosedTime: openTimeRange ? openTimeRange.end : '',
  };
};

const BusinessOpenStatus = ({ days }: Props) => {

  useEffect(() => {
    // console.log(chechIfIsOpen({
    //   monday: [{ start: '14:00', end: '15:00', type: 'OPEN' }],
    // }));
    // console.log(chechIfIsOpen({
    //   sunday: [{ start: '14:00', end: '15:00', type: 'OPEN' }],
    // }));
    // console.log(chechIfIsOpen({
    //   monday: [{ start: '12:00', end: '13:00', type: 'OPEN' }, { start: '14:00', end: '15:00', type: 'OPEN' }],
    // }));
    // console.log(chechIfIsOpen({
    //   monday: [{ start: '12:00', end: '14:00', type: 'OPEN' }, { start: '15:00', end: '16:00', type: 'OPEN' }],
    // }));
  }, []);
  const cusinessOpendInformation = chechIfIsOpen(days);

  return (
    <div>
      { cusinessOpendInformation.isOpen ? <div className={styles.openedContainer}>
        OPENED <div>
          Comapny will be closed in: {cusinessOpendInformation.nextOpenedClosedTime}
        </div>
        </div> : <div className={styles.closedContainer}>
          CLOSED
          <div>
            
          </div>
          </div>}
    </div>
  ); 
};

export default BusinessOpenStatus;
