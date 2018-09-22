/*
 * Author: Gurkirat Randhawa
 * Date: 5/27/2018
 * Description: Javascript funcitonality for Final Project
 */

$("li").click(function (event) {
  event.stopPropagation();
  if (this.getElementsByTagName("ul")[0].style.display == "block") {
    $(this).find("li").removeClass("expanded");
    $(this).find("li").addClass("closed");
    $(this).find("ul").slideUp();
    $(this).addClass("closed");
    $(this).removeClass("expanded");
  }
  else {
    $(this).children(":first").slideDown();
    $(this).addClass("expanded");
    $(this).removeClass("closed");
  }
});

$(document).ready(function () {
  var i = 1;

  function d20() {
    return Math.floor(Math.random() * 20 + 1);
  };

  function nameCheck(name) {
    if (name) {
      return true;
    } else if (!name) {
      return false;
    };
  };

  function hpNumerical(hp) {
    if (((hp != "") && ($.isNumeric(hp))) || (hp == "")) {
      return true;
    } else {
      return false;
    };
  };

  function acNumerical(ac) {
    if ((!(ac == "") && ($.isNumeric(ac))) || (ac == "")) {
      return true;
    } else {
      return false;
    };
  };

  function initModNumerical(initmod) {
    if ((!(initmod == "") && ($.isNumeric(initmod))) || (initmod == "")) {
      return true;
    } else {
      return false;
    };
  };

  function numActors(numactors) {
    if ((numactors != "") && ($.isNumeric(numactors))) {
      return true;
    } else {
      return false;
    };
  };

  function autoInit() {
    if ($('#autoRollInit').prop('checked')) {
      return true;
    } else {
      return false;
    };
  };

  function initNumerical(init) {
    if (!(init == "") && ($.isNumeric(init))) {
      return true;
    } else {
      return false;
    };
  };

  function autoRollWithActors(initmod, initname, hpnum, acnum, numactors) {
    $('.initalert').remove();
    for (j = numactors; j > 0; j--) {
      i++;
      var initplusmod = (d20() + parseInt(initmod, 10));
      $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo("#mainContainer");
      $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
      $('<div class="col-xs-4 col-md-4 col-lg-4 text-left" id="initLabel"><span><p>' + initplusmod + ' ' + initname + "-" + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><span id="hptext">HP:</span><span id="hptag">' + hpnum + '</span><input type="text" id="newhp" placeholder="Damage/Healing(-)"><button id="changeHP"><span>Update</span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    };
    $('#initname').val('');
    $('#initiative').val('');
    $('#hp').val('');
    $('#ac').val('');
    $('#initMod').val('');
    $('#numActors').val('');
    $('#initname').focus();
  };

  function autoRollNoActors(initmod, initname, hpnum, acnum) {
    var initplusmod = (d20() + parseInt(initmod, 10));
    $('.initalert').remove();
    i++;
    $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo("#mainContainer");
    $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
    $('<div class="col-xs-4 col-md-4 col-lg-4 text-left" id="initLabel"><span><p>' + initplusmod + ' ' + initname + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><span id="hptext">HP:</span><span id="hptag">' + hpnum + '</span><input type="text" id="newhp" placeholder="Damage/Healing(-)"><button id="changeHP"><span>Update</span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    $('#initname').val('');
    $('#initiative').val('');
    $('#hp').val('');
    $('#ac').val('');
    $('#initMod').val('');
    $('#numActors').val('');
    $('#initname').focus();
  };

  function manualRollWithActors(init, initmod, initname, hpnum, acnum, numactors) {
    $('.initalert').remove();

    for (j = numactors; j > 0; j--) {
      i++;
      var initplusmod = parseInt(init, 10) + parseInt(initmod, 10);
      $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo("#mainContainer");
      $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
      $('<div class="col-xs-4 col-md-4 col-lg-4 text-left" id="initLabel"><span><p>' + initplusmod + ' ' + initname + "-" + j + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><span id="hptext">HP:</span><span id="hptag">' + hpnum + '</span><input type="text" id="newhp" placeholder="Damage/Healing(-)"><button id="changeHP"><span>Update</span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    };
    $('#initname').val('');
    $('#initiative').val('');
    $('#hp').val('');
    $('#ac').val('');
    $('#initMod').val('');
    $('#numActors').val('');
    $('#initname').focus();
  };

  function manualRoll(init, initmod, initname, hpnum, acnum) {
    var initplusmod = parseInt(init, 10) + parseInt(initmod, 10);
    $('.initalert').remove();
    i++;
    $($('<div class="row globalrow newinitrow' + i + '" data-index="' + initplusmod + '"></div>')).appendTo("#mainContainer");
    $('<div class="col-xs-12 col-md-offset-2 col-md-8 globalinit addedinit' + i + '"></div>').appendTo(".newinitrow" + i).hide().fadeIn(1000);
    $('<div class="col-xs-4 col-md-4 col-lg-4 text-left" id="initLabel"><span><p>' + initplusmod + ' ' + initname + '</p></span></div><div class="col-xs-5 col-md-4 text-center hpdiv"><p><span id="hptext">HP:</span><span id="hptag">' + hpnum + '</span><input type="text" id="newhp" placeholder="Damage/Healing(-)"><button id="changeHP"><span>Update</span></button></p></div><div class="col-xs-3 col-md-2 col-lg-2 text-left"><span><p>AC:' + acnum + '</p></span></div><div class="btnClose"><span class="glyphicon glyphicon-remove"></span></div>').appendTo(".addedinit" + i);
    $('#initname').val('');
    $('#initiative').val('');
    $('#hp').val('');
    $('#ac').val('');
    $('#initMod').val('');
    $('#numActors').val('');
    $('#initname').focus();
  };

  $(document).on('click', '.btnClose', function () {
    $(this).parent().parent().remove();
    $('.globalinit').not(":first").removeClass("glow");
    $(".globalinit").first().addClass("glow");
  });

  $('#initiative, #initname, #hp, #ac, #initMod, #numActors').keyup(function (e) {
    if (e.keyCode == 13)
      $('#characterAdd').click();
  });

  $("#remAll").click(function () {
    $(".globalrow").remove();
    $('.initalert').remove();
  });

  $("#autoRollInit").change(function () {
    if (!(this.checked)) {
      $('#initiative').prop('disabled', false);
    } else {
      $('#initiative').val('');
      $('#initiative').prop('disabled', true);
    };
  });

  $("#characterAdd").click(function () {

    var name = $('#initname').val();
    var init = $('#initiative').val();
    var hp = $('#hp').val();
    var ac = $('#ac').val();
    var initmod = $('#initMod').val();
    var actors = $('#numActors').val();

    if (initmod == "") {
      initmod = 0;
    };
    initmod = parseInt(initmod, 10);

    if (nameCheck(name)) {
      if (hpNumerical(hp)) {
        if (acNumerical(ac)) {
          if (initModNumerical(initmod)) {
            if (numActors(actors)) {
              if (autoInit()) {
                autoRollWithActors(initmod, name, hp, ac, actors);
              } else {
                if (initNumerical(init)) {
                  manualRollWithActors(init, initmod, name, hp, ac, actors);
                } else {
                  $('.initalert').remove();
                  $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Initiative is required</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1000);
                }
              }
            } else {
              if (autoInit()) {
                autoRollNoActors(initmod, name, hp, ac);
              } else {
                if (initNumerical(init)) {
                  manualRoll(init, initmod, name, hp, ac);
                } else {
                  $('.initalert').remove();
                  $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Enter an integer</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1000);
                }
              }
            }
          } else {
            $('.initalert').remove();
            $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Enter an integer</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1000);
          }
        } else {
          $('.initalert').remove();
          $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Enter an integer</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1000);
        }
      } else {
        $('.initalert').remove()
        $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Enter an integer</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1000);
      }
    } else {
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Enter a name</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1000);
    }
    $('.trackercontainer').append($('.globalrow').sort(function (b, a) { //sort rows
      return $(a).data('index') - $(b).data('index');
    }));

    $('.globalinit').not(":first").removeClass("glow"); //remove glow of everything not first
    $(".globalinit").first().addClass("glow");
  }); //end character add button

  $(document).on('click', '#nextTurn', function () { //if the 'next' button is clicked
    if ($(".globalrow").length > 1) { //if there are more than 1 characters added
      $(".trackercontainer").append($(".globalrow").first()); //put the first row last
      $(".globalrow").last().hide().slideDown(); //hide, then slide the last character into the first position
      $('.globalinit').not(":first").removeClass("glow"); //remove glow of everything thats not first
      $(".globalinit").first().addClass("glow"); //glow the top div
    }
  });

  $(document).on('click', '#changeHP', function () {
    var hp = $(this).parent().find('#hptag').text();
    var change = $(this).parent().find('#newhp').val();
    if ($.isNumeric(change)) {
      $('.initalert').remove();
      hp = hp - change;
      $(this).parent().find('#hptag').text(hp);
      $(this).parent().find('#newhp').val('');
    }
    else {
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Enter a number</h4></div></div>').insertAfter("#advanced").hide().fadeIn(1000);
      $(this).parent().find('#newhp').val('');
    }
  });

  $(document).on('keyup', '#newhp', function (e) {
    if (e.keyCode == 13) {
      $('#changeHP').click();
      return false;
    }
  })

  $(document).on('click', '#hptag', function () { //if #hptag is clicked
    $(this).attr('contentEditable', true); //make it editable
  });

  $(document).on('keydown', '#hptag', function (e) { //if a key is pressed in a div
    if (e.keyCode === 13) { //and that key is enter
      e.preventDefault(); //prevent the default behaviour of return key pressed
      $('#hptag').attr('contentEditable', false); //and make #hptag not editable
    } else if (e.keyCode !== 48 &&
      e.keyCode !== 49 &&
      e.keyCode !== 50 &&
      e.keyCode !== 51 &&
      e.keyCode !== 52 &&
      e.keyCode !== 53 &&
      e.keyCode !== 54 &&
      e.keyCode !== 55 &&
      e.keyCode !== 56 &&
      e.keyCode !== 57 &&
      e.keyCode !== 96 &&
      e.keyCode !== 97 &&
      e.keyCode !== 98 &&
      e.keyCode !== 99 &&
      e.keyCode !== 100 &&
      e.keyCode !== 101 &&
      e.keyCode !== 102 &&
      e.keyCode !== 103 &&
      e.keyCode !== 104 &&
      e.keyCode !== 105 &&
      e.keyCode !== 8 &&
      e.keyCode !== 46 &&
      e.keyCode !== 37 &&
      e.keyCode !== 38 &&
      e.keyCode !== 39 &&
      e.keyCode !== 40
    ) {
      e.preventDefault();
    }
  });

  function saveRoll() {
    $('.saveRow').remove();
    var numToSave = $('#numSave').val();
    var saveDC = $('#dc').val();
    var saveMod = $('#modSave').val();

    if (saveMod == "") {
      saveMod = 0;
    }

    saveMod = parseInt(saveMod, 10);

    var saved = 0;
    var failed = 0;

    if ($.isNumeric(numToSave) && $.isNumeric(saveDC) && $.isNumeric(saveMod)) {
      $('.initalert').remove();
      for (var j = 0; j < numToSave; j++) {
        var roll = (d20() + saveMod);

        if (roll >= saveDC) {
          saved++;
        }
        else {
          failed++;
        }
      }
      $('<div class="row col-xs-12 col-md-offset-2 col-md-8 saveRow"><p><span id="saved">Succeeded: ' + saved + '</span>' + '<span id="failed"> Failed: ' + failed + '</span></p></div>').appendTo("#saveResult");
    }
    else {
      $('.initalert').remove();
      $('<div class="row alertrow"><div class="col-xs-12 initalert text-center"><h4>Enter a number</h4></div></div>').insertAfter("#saveResult").hide().fadeIn(1000);
    }
    $('#numSave').val('');
    $('#dc').val('');
    $('#modSave').val('');
  }

  $(document).on('click', '#rollSave', saveRoll)

  $('#numSave, #dc, #modSave').keyup(function (e) {
    if (e.keyCode == 13) {
      $('#rollSave').click();
    }
  });

});