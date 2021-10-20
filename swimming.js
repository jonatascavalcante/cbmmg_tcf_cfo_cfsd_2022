function calculate_swimming_score(gender, swimmingTime)
{
	switch (gender) {
		case 'male':
			return get_swimming_masc(swimmingTime);
			break;
		case 'female':
			return get_swimming_fem(swimmingTime);
			break;
	}
}

function get_swimming_masc(swimmingTime)
{
	if (swimmingTime <= 35) {
		return 20;
	} else if (swimmingTime <= 40) {
		return 19;
	} else if (swimmingTime <= 45) {
		return 18;
	} else if (swimmingTime <= 50) {
		return 17;
	} else if (swimmingTime <= 55) {
		return 16;
	} else if (swimmingTime <= 60) {
		return 15;
	} else if (swimmingTime <= 65) {
		return 14;
	} else if (swimmingTime <= 70) {
		return 13;
	} else if (swimmingTime <= 75) {
		return 12;
	} else if (swimmingTime > 75) {
		return 0;
	}
}

function get_swimming_fem(swimmingTime)
{
	if (swimmingTime <= 45) {
		return 20;
	} else if (swimmingTime <= 50) {
		return 19;
	} else if (swimmingTime <= 55) {
		return 18;
	} else if (swimmingTime <= 60) {
		return 17;
	} else if (swimmingTime <= 65) {
		return 16;
	} else if (swimmingTime <= 70) {
		return 15;
	} else if (swimmingTime <= 75) {
		return 14;
	} else if (swimmingTime <= 80) {
		return 13;
	} else if (swimmingTime <= 85) {
		return 12;
	} else if (swimmingTime > 85) {
		return 0;
	}
}
