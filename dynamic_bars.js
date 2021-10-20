function calculate_masc_bars(barsQtd) 
{
	if (barsQtd >= 10) {
		return 20;
	} else if (barsQtd == 9) {
		return 19;
	} else if (barsQtd == 8) {
		return 18;
	} else if (barsQtd == 7) {
		return 17;
	} else if (barsQtd == 6) {
		return 16;
	} else if (barsQtd == 5) {
		return 15;
	} else if (barsQtd == 4) {
		return 14;
	} else if (barsQtd == 3) {
		return 13;
	} else if (barsQtd == 2) {
		return 12;
	} else if (barsQtd < 2) {
		return 0;
	}
}
