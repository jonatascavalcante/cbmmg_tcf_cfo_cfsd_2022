$(document).ready(function() {
	//Loads the inputs that dynamically changes the form
	var $genders = $('input[name="gender"]');
	var isFemale = false;

	//Initially loads the form for the male gender
	$("#femalebars").hide();
	$("#tcf_result").hide();
	$("#footer").hide();

	//Changes the bars test based on the gender input change
	$genders.change(function() {
  		var $checked = $genders.filter(function() {
    		return $(this).prop('checked');
  		});
  		if ($checked.val() === 'female') {
  			$("#femalebars").show();
  			$("#malebars").hide();
  			isFemale = true;
  		} else if ($checked.val() === 'male'){
  			$("#femalebars").hide();
  			$("#malebars").show();
  			isFemale = false;
  		}
	});

	//Treates the calculate button
	$("#btnCalcular").click(function() {
		 if ($("#absQtd").val() && $("#shuttlerunTime").val()) {
		 	if (!isFemale && $("#barsQtd").val()) {
		 		$("#tcf_form").submit();
		 		return;
		 	}
		 	if (isFemale) {
		 		$("#tcf_form").submit();
		 		return;
		 	}
		 	window.alert("É necessário preencher todos os campos para realizar o cálculo");
		 } else {
		 	window.alert("É necessário preencher todos os campos para realizar o cálculo");
		 }
	});

	//Treates the TCF form submission
	$("#tcf_form").submit(function(event) {
		event.preventDefault();
		$("#tcf_form").hide();
		$("#tcf_result").show();

		var gender = 'male';
		var strength, tcfScore;
		var strengthNote, absNote, shuttleRunNote, runningNote, swimmingNote;
		
		var absQtd = $("#absQtd").val();
		var shuttlerunTime = $("#shuttlerunTime").val();
		var runningTime = $("#runningTime").val();
		var swimmingTime = $("#swimmingTime").val();

		if (isFemale) {
			gender = 'female';
			$("#strength_test").html("Barra Estática");
			strength = $("#barsTime").val();
			strengthNote = calculate_fem_bars(convertTime(strength, 100));
			$("#strength_note").html(strengthNote);
		} else {
			$("#strength_test").html("Barra Dinâmica");
			strength = $("#barsQtd").val();
			strengthNote = calculate_masc_bars(strength);
			$("#strength_note").html(strengthNote);
		}

        if (shuttlerunTime.length < 3) {
            shuttlerunTime += ':00';
        }
		
		$("#strength_exec").html(strength);
		$("#abs_exec").html(absQtd);
		$("#shuttle_run_exec").html(shuttlerunTime);
		$("#running_exec").html(runningTime);
		$("#swimming_exec").html(swimmingTime);
		
		absNote = calculate_abdominal_score(gender, absQtd);
		$("#abs_note").html(absNote);
		shuttleRunNote = calculate_shuttle_run_score(convertTime(shuttlerunTime, 100));
		$("#shuttle_run_note").html(shuttleRunNote);
		runningNote = calculate_running_score(gender, convertTime(runningTime, 60));
		$("#running_note").html(runningNote);
		swimmingNote = calculate_swimming_score(gender, convertTime(swimmingTime, 60));
		$("#swimming_note").html(swimmingNote);

		tcfScore = (strengthNote + absNote + shuttleRunNote + runningNote + swimmingNote)/5;
		
		$("#tcf_score").html("Nota Final no TCF: " + tcfScore.toFixed(2));

		$("#footer").show();
	});	

	$("#shuttlerunTime").keyup(function() {
		var shuttlerunTime = $(this).val();
		var input;
		if (shuttlerunTime.length == 4 && (shuttlerunTime[0] == '9' || shuttlerunTime[0] == '8')) {
			input = shuttlerunTime.split(':')[0] + shuttlerunTime.split(':')[1];
			$(this).val(input[0] + ':' + input[1] + input[2]);
		}
	});

	$("#btnAlterarDados").click(function() {
		$("#tcf_form").show();
		$("#tcf_result").hide();
		$("#footer").hide();
	});

	$("#btnNovoCalculo").click(function() {
		location.reload();
	});

});

function convertTime(time, cons) 
{
	var firstPart, secondPart, convertedTime;
	firstPart = parseInt(time.split(':')[0]);
	secondPart = parseInt(time.split(':')[1]);
	convertedTime = firstPart * cons + secondPart;
	return convertedTime;
}

