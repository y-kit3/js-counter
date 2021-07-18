(function () {
    
    const text = document.getElementById ("text");
    const up_button = document.getElementById ("btn_up");
    const down_button = document.getElementById ("btn_down");
    const reset_button = document.getElementById ("btn_reset");
    var count_value = 0;

    console.log ('count_value =>',count_value);
    console.log ("up_button =>",up_button);
    console.log ("down_button =>",down_button);
    console.log ("reset_button =>",reset_button);

    //ボタンが押されたらカウント増
    up_button.onclick = function (){
        count_value += 1;
        text.innerHTML = count_value;
        console.log('count_value =>' & count_value);
    };

    //ボタンが押されたらカウント減
    down_button.onclick = function (){
        if  (count_value >= 1) {
            count_value -= 1;
            text.innerHTML = count_value;
            console.log('count_value =>' & count_value);
            };       
    };

    //ボタンが押されたら0に戻る
    reset_button.onclick = function (){
        count_value = 0;
        text.innerHTML = count_value;
    };
})();





