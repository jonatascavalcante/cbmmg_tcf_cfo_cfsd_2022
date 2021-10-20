function calculate_fem_bars(time) 
{
	if (time >= 1800) {
		return 20;
	} else if (time >= 1700) {
		return 19;
	} else if (time >= 1600) {
		return 18;
	} else if (time >= 1500) {
		return 17;
	} else if (time >= 1400) {
		return 16;
	} else if (time >= 1300) {
		return 15;
	} else if (time >= 1200) {
		return 14;
	} else if (time >= 1100) {
		return 13;
	} else if (time >= 1000) {
		return 12;
	} else if (time < 1000) {
		return 0;
	}
}
