var FirstNotice = alert('📛سلام خیلی خوش اومدی اینجا قراره یکم ویژگی های روزای هفته رو بهت بگم پس بزن بریم 📛');
var Day = prompt('خب یک روز از روزهای خوبه هفته رو انتخاب کن (ترجیحا فارسی بنویس ممنون😗)');
var Joking = '😂🤣میدونم خوشت اومد  به خاطر همین میتونی ی روز دیگه رو هم انتخاب کنی😁'
var SaturDay = 'شنبه ها خیلی مریضه آدم دوس داره همش بخوابه 🥱'
var SunDay = ' امان از این یکشنبه ها کاش هفته از اینجا شروع میشد 🙄 خدایی ';
var MonDay = 'دوشنبه ها آدم ی جوریه که هم سرحالی هم منتظری زودتر به آخر هفته برسی اصن کلا وسط بودن خوب نیست مثل نشستن عقب ماشین اونم بیوفتی وسط 😕'
var TuesDay = 'به سه شنبه که میرسی دلت یکم آروم میشه که داری به آخر هفته نزدیک میشی 😊 و شروع میکنی به چیدن برنامه آخر هفته و فسقوفجور 😂'
var WednesDay = ' دیگه به چهارشنبه که میرسی اینجاس که  مطمعن میشی فرداش پنج شنبه اس و برنامه هارو هم چیدیو منتظری پنج شنبه رو بگذرونی'
var ThursDay = 'به به ، رسیدی به پنج شنبه فقط نگات به ساعته که برسی به اون تایمی که باید و استارت بزنیو افتری پس بدی 😋😂 ولی اگه سینگل باشی که هیچی دیگه برو ی گوشه بشین نونو ماستتو بخور ☹😒'
var FriDay = 'دیگه بعد از یک شبه طولانی ی روز تعطیل فقط میچسبه که ریکاوری بشه آدم ولی امان از غروبش که همش یادت میوفته فردا شنبه سگی تو راهه 😒😩'

if (Day == 'شنبه') {
    alert(SaturDay);
    var Day2 = prompt(Joking);
    if (Day2 == 'یکشنبه' || Day2 == 'یک شنبه') {
        alert(SunDay);
    }
    else if (Day2 == 'دوشنبه' || Day2 == 'دو شنبه') {
        alert(MonDay);
    }
    else if (Day2 == 'سهشنبه' || Day2 == 'سه شنبه') {
        alert(TuesDay);
    }
    else if (Day2 == 'چهارشنبه' || Day2 == 'چهار شنبه') {
        alert(WednesDay);
    }
    else if (Day2 == 'پنجشنبه' || Day2 == 'پنج شنبه') {
        alert(ThursDay);
    }
    else if (Day2 == 'جمعه') {
        alert(FriDay);
    }
}
else if (Day == 'یکشنبه' || Day == 'یک شنبه') {
    alert(SunDay);
    var Day2 = prompt(Joking);
    if (Day2 == 'شنبه') {
        alert(SaturDay);
    }
    else if (Day2 == 'دوشنبه' || Day2 == 'دو شنبه') {
        alert(MonDay);
    }
    else if (Day2 == 'سهشنبه' || Day2 == 'سه شنبه') {
        alert(TuesDay);
    }
    else if (Day2 == 'چهارشنبه' || Day2 == 'چهار شنبه') {
        alert(WednesDay);
    }
    else if (Day2 == 'پنجشنبه' || Day2 == 'پنج شنبه') {
        alert(ThursDay);
    }
    else if (Day2 == 'جمعه') {
        alert(FriDay);
    }
}
else if (Day == 'دوشنبه' || Day == 'دو شنبه') {
    alert(MonDay);
    var Day2 = prompt(Joking);
    if (Day2 == 'شنبه') {
        alert(SaturDay);
    }
    if (Day2 == 'یکشنبه' || Day2 == 'یک شنبه') {
        alert(SunDay);
    }
    else if (Day2 == 'سهشنبه' || Day2 == 'سه شنبه') {
        alert(TuesDay);
    }
    else if (Day2 == 'چهارشنبه' || Day2 == 'چهار شنبه') {
        alert(WednesDay);
    }
    else if (Day2 == 'پنجشنبه' || Day2 == 'پنج شنبه') {
        alert(ThursDay);
    }
    else if (Day2 == 'جمعه') {
        alert(FriDay);
    }
}
else if (Day == 'سهشنبه' || Day == 'سه شنبه') {
    alert(TuesDay);
    var Day2 = prompt(Joking);
    if (Day2 == 'شنبه') {
        alert(SaturDay);
    }
    else if (Day2 == 'یکشنبه' || Day2 == 'یک شنبه') {
        alert(SunDay);
    }
    else if (Day2 == 'دوشنبه' || Day2 == 'دو شنبه') {
        alert(MonDay);
    }
    else if (Day2 == 'چهارشنبه' || Day2 == 'چهار شنبه') {
        alert(WednesDay);
    }
    else if (Day2 == 'پنجشنبه' || Day2 == 'پنج شنبه') {
        alert(ThursDay);
    }
    else if (Day2 == 'جمعه') {
        alert(FriDay);
    }
}
else if (Day == 'چهارشنبه' || Day == 'چهار شنبه') {
    alert(WednesDay);
    var Day2 = prompt(Joking);
    if (Day2 == 'شنبه') {
        alert(SaturDay);
    }
    else if (Day2 == 'یکشنبه' || Day2 == 'یک شنبه') {
        alert(SunDay);
    }
    else if (Day2 == 'دوشنبه' || Day2 == 'دو شنبه') {
        alert(MonDay);
    }
    else if (Day2 == 'سهشنبه' || Day2 == 'سه شنبه') {
        alert(TuesDay);
    }
    else if (Day2 == 'پنجشنبه' || Day2 == 'پنج شنبه') {
        alert(ThursDay);
    }
    else if (Day2 == 'جمعه') {
        alert(FriDay);
    }
}

else if (Day == 'پنجشنبه' || Day == 'پنج شنبه') {
    alert(ThursDay);
    var Day2 = prompt(Joking);
    if (Day2 == 'شنبه') {
        alert(SaturDay);
    }
    else if (Day2 == 'یکشنبه' || Day2 == 'یک شنبه') {
        alert(SunDay);
    }
    else if (Day2 == 'دوشنبه' || Day2 == 'دو شنبه') {
        alert(MonDay);
    }
    else if (Day == 'سهشنبه' || Day == 'سه شنبه') {
        alert(TuesDay);
    }
    else if (Day2 == 'چهارشنبه' || Day2 == 'چهار شنبه') {
        alert(WednesDay);
    }
    else if (Day2 == 'جمعه') {
        alert(FriDay);
    }
}
else if (Day == 'جمعه') {
    alert(FriDay);
    var Day2 = prompt(Joking);
    if (Day2 == 'شنبه') {
        alert(SaturDay);
    }
    else if (Day2 == 'یکشنبه' || Day2 == 'یک شنبه') {
        alert(SunDay);
    }
    else if (Day2 == 'دوشنبه' || Day2 == 'دو شنبه') {
        alert(MonDay);
    }
    else if (Day == 'سهشنبه' || Day == 'سه شنبه') {
        alert(TuesDay);
    }
    else if (Day2 == 'چهارشنبه' || Day2 == 'چهار شنبه') {
        alert(WednesDay);
    }
    else if (Day2 == 'پنجشنبه' || Day2 == 'پنج شنبه') {
        alert(ThursDay);
    }
}
else {
    alert('داری اشتباه میزنی 🤨 مجدد صفحه رو ریلود کن و دوباره یکی از روزهای هفته رو وارد کن فقط فارسی بزن دیگه عزیزم 😃')
}





