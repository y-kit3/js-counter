(function () {
    
    const text = document.getElementById ("text");
    const up_button = document.getElementById ("btn_up");
    const down_button = document.getElementById ("btn_down");
    const reset_button = document.getElementById ("btn_reset");
    var count_value = 0;

    console.log ('count_value =>',count_value);

    //ボタンが押されたらカウント増
    up_button.addEventListener('click',(event) =>{
        count_value++;
        text.innerHTML = count_value;
        console.log('count_value =>',count_value);
    })

    //ボタンが押されたらカウント減
    down_button.addEventListener('click',(event) =>{
        if (count_value >= 1) {
            count_value--;
            text.innerHTML = count_value;
            console.log('count_value =>',count_value);
        }
    })

    //ボタンが押されたら0に戻る
    reset_button.addEventListener('click',(event) =>{
        count_value = 0;
        text.innerHTML = count_value;
        console.log('count_value =>',count_value);
    })
})();





