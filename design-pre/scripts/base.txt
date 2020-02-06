$(document).ready(() => {
    inputFunction();

});

/*START: Input*/
function inputFunction() {
    var ele, inputVal;
    /*Note: To check the input value null or not | UI logic*/
    $(document).on('focusout change input', '.form-input', function () { //'focusout focusin click keyup'
        ele = $(this);
        inputVal = ele.val();
        if (inputVal.length) {
            ele.closest('.form-group').removeClass('error').addClass('has-value');
        } else {
            ele.closest('.form-group').removeClass('has-value').addClass('error');
        }
    });
}
/*END: Input*/