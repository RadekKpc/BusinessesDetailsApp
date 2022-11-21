export type TimeRange = {
  start: string,
  end: string,
  type: string,
};

export type OppeningDays = {
  monday?: TimeRange[],
  tuesday?: TimeRange[],
  wednesday?: TimeRange[],
  thursday?: TimeRange[],
  friday?: TimeRange[],
  saturday?: TimeRange[],
  sunday?: TimeRange[],
};

export type OpeningHours = {
  closed_on_holidays: boolean,
  open_by_arrangement: boolean,
  days: OppeningDays,
};


export type BusinessDetailsEntry = {
  displayedWhat: string,
  displayedWhere: string,
  openingHours: OpeningHours,
};

export const defaultBusinessDetailsEntry: BusinessDetailsEntry = {
  displayedWhat: '',
  displayedWhere: '',
  openingHours: {
    closed_on_holidays: false,
    open_by_arrangement: false,
    days: {},
  },
};
