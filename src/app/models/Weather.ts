export class Weather {
  cityName: string;
  countryCode: string;
  lnt: number;
  temp: number;
  tempMin: number;
  tempMax: number;
  timezone: string;
  weather: number;




  constructor(args?) {
    if (args) {
      this.cityName = args.name;
      this.countryCode = args.countryCode;
      this.lnt = args.lon;
      this.tempMin = (args.main) ? args.main.temp_min : null;
      this.tempMax = (args.main) ? args.main.temp_max : null;
      this.temp = (args.main) ? args.main.temp : null;
      this.timezone = args.timezone;
      this.temp = (args.main) ? args.main.temp : null;
      this.weather = (args.main) ? args.weather[0].main : null;
    }
  }
}
