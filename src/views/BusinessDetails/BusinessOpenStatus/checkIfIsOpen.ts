
import type { OppeningDays, TimeRange } from '../commonTypes';

const dayToStrubg = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];

const mapDayNumberToString = (day: number): keyof OppeningDays =>   dayToStrubg[day] as keyof OppeningDays;

const mapDayStringToNumber = (day: keyof OppeningDays): number =>  dayToStrubg.indexOf(day);

const daysComparator = ([day1]:[string, any], [day2]: [string, any]): number =>
  mapDayStringToNumber(day1 as keyof OppeningDays) - mapDayStringToNumber(day2 as keyof OppeningDays);


export const checkIfIsOpen = (days: OppeningDays): { isOpen: boolean, nextOpenedClosedTime: string } => {
  const today = new Date();
  const currentTime = today.toTimeString().slice(0, 5);
  const day = today.getDay();
  const mapepdDay = mapDayNumberToString(day);

  const businessOpeningHours = Object.entries(days)
    ?.sort(daysComparator)
    .flatMap(([weekday, timeRages] : [string, TimeRange[]]) => 
      timeRages.flatMap(({ start, end }) => [
        { time: start, weekday: mapDayStringToNumber(weekday as keyof OppeningDays) },
        { time: end, weekday: mapDayStringToNumber(weekday as keyof OppeningDays) },
      ]),
    );

  const nextOpenedClosedTime = businessOpeningHours
    .find(({ time, weekday }) =>  time > currentTime || weekday > mapDayStringToNumber(mapepdDay)) 
    ?? businessOpeningHours[0];

  const isOpen = !!days[mapepdDay]?.find(({ start, end }) => start <= currentTime && currentTime < end);

  return {
    isOpen,
    nextOpenedClosedTime: `${mapDayNumberToString(nextOpenedClosedTime.weekday)} ${nextOpenedClosedTime.time}`,
  };
};
