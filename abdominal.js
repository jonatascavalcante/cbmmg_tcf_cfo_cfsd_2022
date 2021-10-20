function calculate_abdominal_score(gender, absQtd) 
{
	switch (gender) {
		case 'male':
			return get_abdominal_masc(absQtd);
			break;
		case 'female':
			return get_abdominal_fem(absQtd);
			break;
	}
}

function get_abdominal_masc(absQtd) 
{
	if (absQtd >= 46) {
		return 20;
	} else if (absQtd >= 39) {
		return 19;
	} else if (absQtd >= 35) {
		return 18;
	} else if (absQtd >= 30) {
		return 17;
	} else if (absQtd >= 25) {
		return 16;
	} else if (absQtd >= 20) {
		return 15;
	} else if (absQtd >= 15) {
		return 14;
	} else if (absQtd >= 11) {
		return 13;
	} else if (absQtd >= 6) {
		return 12;
	} else if (absQtd < 6) {
		return 0;
	}
}

function get_abdominal_fem(absQtd) 
{
	if (absQtd >= 42) {
		return 20;
	} else if (absQtd >= 37) {
		return 19;
	} else if (absQtd >= 33) {
		return 18;
	} else if (absQtd >= 28) {
		return 17;
	} else if (absQtd >= 24) {
		return 16;
	} else if (absQtd >= 19) {
		return 15;
	} else if (absQtd >= 15) {
		return 14;
	} else if (absQtd >= 10) {
		return 13;
	} else if (absQtd >= 6) {
		return 12;
	} else if (absQtd < 6) {
		return 0;
	}
}
