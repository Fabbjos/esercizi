function main() {
    var colorClass = '';
    $('.select-color').on('click', function() {
        var selectedColor = $(this).attr('class');
        if (selectedColor == 'select-color cyan not-selected') {
            colorClass = 'cyan';
        } else if (selectedColor == 'select-color yellow not-selected') {
            colorClass = 'yellow';
        } else if (selectedColor == 'select-color magenta not-selected') {
            colorClass = 'magenta';
        }
        $(this).removeClass('not-selected');
        $(this).siblings().addClass('not-selected');
    });
    //box
    $('.box').on('click', function() {
        $(this).toggleClass(colorClass);
    });
    //blink
    $('.toggle-blink').on('click', function() {
        if (colorClass) {
            $(this).toggleClass('opacity');
            setInterval(function() {
                $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
            }, 350);
        }
    });
}
$(document).ready(main);
