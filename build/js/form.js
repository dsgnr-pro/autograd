if (window.matchMedia("(max-width: 768px)").matches) {

  // Next step on Next button

  const form = document.querySelector(`#form-step`);
  const buttonNext = form.querySelector(`.button--next`);
  const formStep = form.querySelectorAll(`.form__step`);
  const formTabs = document.querySelectorAll(`.step-form__item`);

  const onButtonNextClickHandler = () => {
    const formStepActive = form.querySelector(`.form__step--active`);

    const stepFields = formStepActive.querySelectorAll(`.form__field--check`);
    console.log(stepFields);
    console.log(stepFields.forEach((field) => {
      field.checkValidity()
    }));

    // stepFields.forEach((field) => {
    //   if (!field.checkValidity()) {
    //     field.classList.add(`form__field--invalid`);
    //     return;
    //   } else {
    //     field.classList.remove(`form__field--invalid`);
    //   }
    // });

    const activeStepIndex = Array.from(formStep).indexOf(formStepActive);

    formStep.forEach((step) => {
      step.classList.remove(`form__step--active`);
    });

    formTabs.forEach((tab) => tab.classList.remove(`step-form__item--active`));

    const index = activeStepIndex + 1;

    formTabs[index].classList.add(`step-form__item--active`);

    formStep[index].classList.add(`form__step--active`);
  };

  buttonNext.addEventListener(`click`, onButtonNextClickHandler);

  // Steps on tabs

  const onFormTabClickHandler = (evt) => {
    formTabs.forEach((tab) => tab.classList.remove(`step-form__item--active`));
    const clickedTab = evt.target;

    clickedTab.classList.add(`step-form__item--active`);

    const index = Array.from(formTabs).indexOf(clickedTab);

    formStep.forEach((step) => {
      step.classList.remove(`form__step--active`);
    });

    formStep[index].classList.add(`form__step--active`);
  }

  formTabs.forEach((tab) => tab.addEventListener(`click`, onFormTabClickHandler));

  // Cars Select

  $(".step-form__item").eq("0").click(function () {
    $(".step-form__steps")
      .removeClass("step-form__steps--half step-form__steps--full");
    $(this).removeClass("step-form__item--checked");
    $(".step-form__item").eq("1").removeClass("step-form__item--checked");
  });

  $(".step-form__item").eq("1").click(function () {
    $(".step-form__steps")
      .removeClass("step-form__steps--full");
    $(".step-form__steps")
      .addClass("step-form__steps--half");
    $(".step-form__item").eq("0").addClass("step-form__item--checked");
    $(this).removeClass("step-form__item--checked");
  });

  $(".step-form__item").eq("2").click(function () {
    $(".step-form__steps")
      .addClass("step-form__steps--full");
    $(".step-form__item").eq("1").addClass("step-form__item--checked");
  });

  $(".form__next").click(function () {
    if ($(".step-form__item").eq("2").hasClass("step-form__item--active")) {
      $(".step-form__item").eq("1").addClass("step-form__item--checked");
    }
    if ($(".step-form__steps").hasClass("step-form__steps--half")) {
      $(".step-form__steps")
        .addClass("step-form__steps--full");
    }
    $(".step-form__item").eq("0").addClass("step-form__item--checked");
    $(".step-form__steps")
      .addClass("step-form__steps--half");
  });

}

$(".form__field--catalog").click(function () {
  $('.form__catalog-list').slideToggle();

  return false;
});

$(".catalog__mini-item").click(function () {
  $('.form__catalog-list').slideToggle();
  $('.application__block--car').addClass('application__block--active');
  const carTitle = $(this).find('.catalog__car-heading').text();
  $('.form__catalog-placeholder').html(carTitle);
  return false;
});
// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab
//
// function showTab(n) {
//   // This function will display the specified tab of the form ...
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";
//   // ... and fix the Previous/Next buttons:
//   if (n == 0) {
//     document.getElementById("prevBtn").style.display = "none";
//   } else {
//     document.getElementById("prevBtn").style.display = "inline";
//   }
//   if (n == (x.length - 1)) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Next";
//   }
//   // ... and run a function that displays the correct step indicator:
//   fixStepIndicator(n)
// }
//
// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form... :
//   if (currentTab >= x.length) {
//     //...the form gets submitted:
//     document.getElementById("regForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }
//
// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false:
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }
//
// function fixStepIndicator(n) {
//   // This function removes the "active" class of all steps...
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   //... and adds the "active" class to the current step:
//   x[n].className += " active";
// }

// $(".step-form__item").on("click", function () {
//
//   const tabs = $(".step-form__item"),
//     cont = $(".form__step");
//
//   tabs.removeClass("step-form__item--active");
//   cont.removeClass("form__step--active");
//   $(this).addClass("step-form__item--active");
//   cont.eq($(this).index()).addClass("form__step--active");
//
//   return false;
// });
//
// $(".button--next").click(function () {
//   $('.form__step').removeClass("form__step--active");
//   $(this).parent().next().addClass("form__step--active");
//
//   $(this).parents('.step-form').find('.step-form__item--active').removeClass('step-form__item--active').next().addClass('step-form__item--active');
//
//   return false;
// });
//
