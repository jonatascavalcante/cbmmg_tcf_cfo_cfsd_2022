function calculate_running_score(gender, runningTime) 
{
	switch(gender) {
		case 'male':
			return get_running_score_masc(runningTime);
			break;
		case 'female':
			return get_running_score_fem(runningTime);
			break;
	}
}

function get_running_score_masc(runningTime) 
{
	if (runningTime <= 517) {
		return 20;
	} else if (runningTime <= 569) {
		return 19;
	} else if (runningTime <= 620) {
		return 18;
	} else if (runningTime <= 672) {
		return 17;
	} else if (runningTime <= 724) {
		return 16;
	} else if (runningTime <= 776) {
		return 15;
	} else if (runningTime <= 827) {
		return 14;
	} else if (runningTime <= 879) {
		return 13;
	} else if (runningTime <= 931) {
		return 12;
	} else if (runningTime > 931) {
		return 0;
	}
}

function get_running_score_fem(runningTime) 
{
	if (runningTime <= 710) {
		return 20;
	} else if (runningTime <= 781) {
		return 19;
	} else if (runningTime <= 852) {
		return 18;
	} else if (runningTime <= 923) {
		return 17;
	} else if (runningTime <= 994) {
		return 16;
	} else if (runningTime <= 1030) {
		return 15;
	} else if (runningTime <= 1101) {
		return 14;
	} else if (runningTime <= 1172) {
		return 13;
	} else if (runningTime <= 1243) {
		return 12;
	} else if (runningTime > 1243) {
		return 0;
	}
}
