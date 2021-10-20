function calculate_shuttle_run_score(time) 
{
	if (time <= 900) {
		return 20;
	} else if (time <= 950) {
		return 19;
	} else if (time <= 1000) {
		return 18;
	} else if (time <= 1050) {
		return 17;
	} else if (time <= 1100) {
		return 16;
	} else if (time <= 1150) {
		return 15;
	} else if (time <= 1200) {
		return 14;
	} else if (time <= 1250) {
		return 13;
	} else if (time <= 1300) {
		return 12;
	} else if (time > 1300) {
		return 0;
	}
}
