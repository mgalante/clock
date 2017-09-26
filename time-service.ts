export class TimeService {

		startTime: string[]; //["2017","09","25", "11:54:00"]

		constructor(startTime: string[])
		{
			this.startTime = startTime;
		}

		getTime():Date {
			return new Date();
		}
}
