interface ClockConstructor {
  new (hour: number, minute: string):void;
}

class Clock implements ClockConstructor {
  currentTime: Date = new Date();
  constructor(h: number, m: number) { }
}